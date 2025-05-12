import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  // Проверяем, что метод запроса POST
  if (event.node.req.method !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const body = await readBody(event);

  // Получаем переменные окружения
  const { MAIL_USER, MAIL_PASSWORD, EMAIL_RECIPIENT } = process.env;

  if (!MAIL_USER || !MAIL_PASSWORD || !EMAIL_RECIPIENT) {
    console.error('MAIL_USER, MAIL_PASSWORD, или EMAIL_RECIPIENT не установлены в переменных окружения.');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Ошибка конфигурации сервера.' }),
    };
  }

  // Создаем транспортер для Nodemailer с Mail.ru
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true для порта 465, false для 587
    auth: {
      user: MAIL_USER, // Ваш email
      pass: MAIL_PASSWORD, // Ваш пароль
    },
  });

  // Опции письма
  const mailOptions = {
    from: MAIL_USER, // Отправитель (ваш email)
    to: EMAIL_RECIPIENT, // Получатель
    subject: `Новое сообщение с сайта: ${body.subject || 'Без темы'}`,
    html: `
      <p><strong>Имя:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Тема:</strong> ${body.subject || 'Без темы'}</p>
      <p><strong>Сообщение:</strong></p>
      <p>${body.message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Письмо успешно отправлено' }),
    };
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Не удалось отправить письмо' }),
    };
  }
});

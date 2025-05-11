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
  // Важно: Эти переменные должны быть установлены в вашем .env файле
  // GMAIL_USER - ваш email адрес для отправки (например, n.sannikov1988@gmail.com)
  // GMAIL_APP_PASSWORD - ваш пароль приложения Gmail
  const { GMAIL_USER, GMAIL_APP_PASSWORD, EMAIL_RECIPIENT } = process.env;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !EMAIL_RECIPIENT) {
    console.error('GMAIL_USER, GMAIL_APP_PASSWORD, or EMAIL_RECIPIENT is not set in environment variables.');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email server configuration error.' }),
    };
  }

  // Создаем transporter для nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER, 
      pass: GMAIL_APP_PASSWORD, 
    },
  });

  // Опции письма
  const mailOptions = {
    from: GMAIL_USER, // Отправитель (ваш email)
    to: EMAIL_RECIPIENT, // Получатель
    subject: `Новое сообщение с сайта Andreevka Landing: ${body.subject || 'Без темы'}`,
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
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
});

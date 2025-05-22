import { createClient } from '@supabase/supabase-js'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((event) => {
  const supabaseUrl = event.context.runtimeConfig.public.supabaseUrl
  const supabaseKey = event.context.runtimeConfig.public.supabaseKey

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL or key is not set in environment variables.')
    return
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  })

  nuxtApp.provide('supabase', supabase)
})
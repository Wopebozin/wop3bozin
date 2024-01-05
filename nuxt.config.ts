// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      smtpUser: process.env.SMTP_USER,
      smtpPass: process.env.SMTP_PASS,
    },
  },

  modules: [
    'nuxt-icon',
    ['nuxt-mail', {
      message: {
        to: 'myemail@gmail.com',
      },
      smtp: {
        service: 'gmail',
        auth: {
          user: 'smtpUser',
          pass: 'smtpPass', 
        },
      },
    }],
  ],

})
import { firebaseConfig } from './firebase'

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Organic Verse',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'stylesheet', href: '/fontawesome.css' }
    ],
    script: [{ src: '/bootstrap.bundle.min.js' }, { src: '/lottie.js' }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ['@nuxtjs/firebase', 'nuxt-svg-loader'],
  amp: {
    // Options
  },

  firebase: {
    config: {
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId,
      appId: firebaseConfig.appId,
      measurementId: firebaseConfig.measurementId
    },
    services: {
      firestore: true
    }
  },
  build: {}
}

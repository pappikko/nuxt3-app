// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui'
  ],

  // Firebase App Hosting設定
  nitro: {
    // Firebase App Hosting専用のプリセット
    preset: 'firebase-app-hosting'
  },

  // ビルド設定
  ssr: true,

  // 環境変数の設定
  runtimeConfig: {
    // プライベート変数（サーバーサイドのみ）
    // public以下はクライアントサイドでも利用可能
    public: {
      // Firebase設定など
    }
  }
})
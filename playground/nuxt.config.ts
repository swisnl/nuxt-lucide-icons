export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  lucide: {
    namePrefix: 'Lucide',
  },
})

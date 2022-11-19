export default {
  mount: {
    src: '/dist/',
    public: {url: '/', dot: true},

  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  plugins: [
    [
      '@snowpack/plugin-sass',
    ]
  ],
}

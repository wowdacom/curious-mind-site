export default {
  theme: {
    // ...
  },
  plugins: [
    // Other plugins
    require('@windicss/plugin-animations')({
      settings: {
        swingSpeed: 1000,
      },
    }),
  ],
};

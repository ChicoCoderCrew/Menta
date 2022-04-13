module.exports = {
  style: {
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
}
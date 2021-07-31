import serve from 'rollup-plugin-serve'

module.exports = {
  input: './src/index.js',
  output: {
    file: './lib/umd/my-single-spa.js',
    format: 'umd',
    name: 'singleSpa',
    sourcemap: true,
  },
  plugins: [
    serve({
      openPage: './index.html',
      contentBase: '',
      port: 8000,
    }),
  ],
}

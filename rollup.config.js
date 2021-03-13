import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [commonjs()]
}

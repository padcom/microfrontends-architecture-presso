import vue from 'rollup-plugin-vue'

export default {
  input: './index.js',
  output: [
    { format: 'cjs', dir: 'dist', exports: 'auto' },
  ],
  external: [
    'vue',
  ],
  plugins: [
    vue(),
  ]
}

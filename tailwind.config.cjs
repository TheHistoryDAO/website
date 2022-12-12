const exts = '*.{ts,tsx,js,jsx,html,css,scss,sass}'
module.exports = {
  separator: '_',
  content: [`./${exts}`, `./{src,public}/**/${exts}`],
  plugins: [],
  theme: {
    extend: {}
  }
}

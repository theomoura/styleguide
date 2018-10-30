const fs = require('fs')

const currentDir = __dirname

const dirNameToId = dir => {
  let id = ''

  for (let i = 0; i < dir.length; i++) {
    if (dir[i] === dir[i].toUpperCase()) {
      if (i > 0) {
        id += '-'
      }

      id += dir[i].toLowerCase()
    } else {
      id += dir[i]
    }
  }

  return id
}

const dirs = fs.readdirSync(currentDir, { withFileTypes: true })
  .filter(item => item.isDirectory())
  .map(item => item.name)

for (const dir of dirs) {
  const componentSrc = fs.readFileSync(`${dir}/index.js`)
    .toString()
    // remove new lines
    .replace(/\r?\n|\r/g, '')

  const svgContentRegex = /<svg\s?.*>(.*)<\/svg>/

  const [svg] = componentSrc.match(svgContentRegex)

  let content = ''
  let index = 0

  while (svg[index] !== '>') {
    index++
  }

  index++

  while (!svg.substring(index).startsWith('</svg')) {
    content += svg[index]
    index++
  }

  console.log(dirNameToId(dir), content)
  break
}

const path = require('path')
const fs = require('fs')
const prettier = require('prettier')

const iconsDir = path.resolve('../react/components/icon')

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

const dirs = fs.readdirSync(iconsDir, { withFileTypes: true })
  .filter(item => item.isDirectory())
  .map(item => item.name)

const svgs = dirs.map(dir => {
  const componentSrc = fs.readFileSync(`${dir}/index.js`)
    .toString()

  const svgContentRegex = /<svg\s?(\n|.)*>(\n|.)*<\/svg>/m

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

  const numberOfTags = content.match(/<(?!\/)/g).length

  if (numberOfTags > 1) {
    content = `<g id="${dirNameToId(dir)}">\n${content}\n</g>`
  } else {
    let index = content.indexOf('<') + 1

    while (/[a-zA-Z-.0-9]/.test(content[index])) {
      index++
    }

    content = `${content.substring(0, index)} id="${dirNameToId(dir)}" ${content.substring(index)}`
  }

  return content
})

const svgDefsComponent = `
import React from 'react'

const IconPack = () => (
  <svg>
    <defs>
      ${svgs.join('\n')}
    </defs>
  </svg>
)

export default IconPack`

fs.writeFileSync(path.join(iconsDir, 'IconPack.js'), prettier.format(svgDefsComponent, { parser: 'babylon' }))

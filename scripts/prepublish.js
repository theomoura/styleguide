const path = require('path')
const fs = require('fs')

console.log('merging `package.json` files to `dist/`')

const rootPackageJsonPath = path.join(__dirname, '../package.json')
const componentsPackageJsonPath = path.join(__dirname, '../react/package.json')
const distPackageJsonPath = path.join(__dirname, '../dist/package.json')
const codemodPath = path.join(__dirname, '../codemod/')
const codemodDistPath = path.join(__dirname, '../dist/codemod/')

const rootPkg = JSON.parse(fs.readFileSync(rootPackageJsonPath).toString())
const componentsPkg = JSON.parse(
  fs.readFileSync(componentsPackageJsonPath).toString()
)

const distPkg = {
  ...rootPkg,
  dependencies: componentsPkg.dependencies,
}

fs.writeFileSync(distPackageJsonPath, JSON.stringify(distPkg, null, 2))

console.log('copying `codemode/` to `dist/`')

fs.copyFileSync(codemodPath, codemodDistPath)

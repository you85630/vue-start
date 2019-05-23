const files = require.context('.', false, /\.vue$/)
let modules = {}

files.keys().forEach(key => {
  let pathName = key.replace(/(\.\/|\.vue)/g, '')
  let arr = pathName.split('-')

  let nowArr = []
  arr.slice(1).forEach(element => {
    element = element.slice(0, 1).toUpperCase() + element.slice(1)
    nowArr.push(element)
  })

  let name = ''
  nowArr.forEach(element => {
    name += element
  })

  let keyName = arr.slice(0, 1) + name

  modules[keyName] = pathName
  return modules
})

export default modules

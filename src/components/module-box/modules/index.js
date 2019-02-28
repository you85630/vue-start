const files = require.context(".", false, /\.vue$/);
let modules = {};

files.keys().forEach(key => {
  let pathName = key.replace(/(\.\/|\.vue)/g, "");
  let arr = pathName.split("-");
  arr[1] = arr[1].slice(0, 1).toUpperCase() + arr[1].slice(1);
  let name = arr[0] + arr[1];
  modules[name] = pathName;
  return modules;
});

export default modules;

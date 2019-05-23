import modules from './modules'
// 安装组件至全局
// 全局组件命名规则，必须是以中划线-分割例demo-box

const moduleBox = {
  install: function (Vue) {
    for (const key in modules) {
      if (modules.hasOwnProperty(key)) {
        const element = modules[key]
        Vue.component(key, () => import('./modules/' + element))
      }
    }
  }
}

export default moduleBox

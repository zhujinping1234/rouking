import App from './App'

// 引入varUI和css
import varUI from '/uni_modules/var-ui/index'
import '/uni_modules/var-ui/lib/css/index.css'

import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
    // 使用
    app.use(varUI)
  return {
    app
  }
}
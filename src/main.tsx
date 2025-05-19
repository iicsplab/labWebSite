import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 重置默认样式
import '@/reset.scss'
// 引入项目所需字体
import '@/assets/font/font.css'
// 引入App组件
import App from '@/App.tsx'
// 引入路由相关组件
import { HashRouter } from 'react-router-dom'
// 引入路由跳转后滚动条置顶组件
import AutoScorllTop from '@/components/AutoTop'

createRoot(document.getElementById('root')!).render(
  // 严格模式检查仅在开发模式下运行；它们不会影响生产构建。
  <StrictMode>
    <HashRouter>
      <AutoScorllTop>
        <App />
      </AutoScorllTop>
    </HashRouter>
  </StrictMode>,
)

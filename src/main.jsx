import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductContextWrapper } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContextWrapper>
      <App/>
    </ProductContextWrapper>
  </StrictMode>,
)

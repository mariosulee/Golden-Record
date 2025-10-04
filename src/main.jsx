import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(  //busca root y monta toda la app de React en el <div> de index.html
  <StrictMode>
    <App /> 
  </StrictMode>,
)

//App es la funcion donde se monta toda la aplicacion de React en App.jsx
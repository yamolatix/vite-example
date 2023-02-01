import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>

  
  <p >Hello World, I'm practicing my skill on Vite - VanillaJS!</p>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

  </div>
`

setupCounter(document.querySelector('#counter'))

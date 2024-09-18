import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dropdown from './components/Dropdown/dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Dropdown
        id="my-dropdown"
        selection={['Option 1', 'Option 2']}
        defaultText="Select an option"
        onChange={(selectedItem) => console.log(selectedItem)}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

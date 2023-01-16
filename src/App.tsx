import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useColorMode } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  const {colorMode, toggleColorMode} = useColorMode()

  console.log(colorMode)
  return (
    <div className="App">
      <div>there is some text</div>
      <button onClick={toggleColorMode}>toggle theme</button>
    </div>
  )
}

export default App

import React from 'react'
import { Button, Logo } from './components'

const App = () => (
  <div className="bg-gray-100">
    <div>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
  </div>
)

export default App

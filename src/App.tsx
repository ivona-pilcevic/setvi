import { Card } from 'antd'
import Loader from './components/common/Loader'
import ErrorMessage from './components/common/ErrorMessage'

function App() {
  return (
    <Card>
      <p>hello</p>
      <Loader />
      <ErrorMessage />
    </Card>
  )
}

export default App

import React from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([])
  const getData = () => {
    const response = axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setUserData(response.data)
  }
  return <div className='bg-amber-500'>App</div>
}

export default App

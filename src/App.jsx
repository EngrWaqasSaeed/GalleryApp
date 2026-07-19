import React, { useState } from 'react'

import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([])
  const getData = () => {
    const response = axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setUserData(response.data)
  }
  let printUserData = 'No user Available'
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {})
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button
        onClick={getData}
        className='bg-green-600 active:scale-95 mb-3 px-5 py-5 rounded text-white'
      >
        Get Data
      </button>
      <div className='flex flex-wrap gap-4'>{printUserData}</div>
    </div>
  )
}

export default App

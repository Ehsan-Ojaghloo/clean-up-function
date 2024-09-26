import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [userId, setUserId] = useState("")

  useEffect(() => {
    const controller = new AbortController();


    const fetchData = async () => {
      if (userId !== "") {
        try {
          const res = await axios.get(`https://dummyjson.com/users/${userId}`, {
            signal: controller.signal
          })
          console.log(res.data)
        } catch (error) {
          console.log(error.message)
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    }

  }, [userId])

  return (
    <div>
      <input type="text" onInput={(event) => setUserId(event.target.value)} />
    </div>
  )
}

export default App
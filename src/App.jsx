import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [userId, setUserId] = useState("")

  const fetchData = async () => {
    if (userId !== "") {
      try {
        const res = await axios.get(`https://dummyjson.com/users/${userId}`)
        console.log(res.data)
      } catch (error) {
        console.log(error)
        if (error.message === "Request failed with status code 404" && error.status === 404) {
          alert(error.code)
        }
      }
    } else {
      alert("Please fill out the form")
    }
  }

  return (
    <div>
      <input type="text" onInput={(event) => setUserId(event.target.value)} />
      <button onClick={fetchData}>Click</button>
    </div>
  )
}

export default App
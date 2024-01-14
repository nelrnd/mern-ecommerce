import { useEffect, useState } from "react"
import axios from "../axios"

const useFetch = (route) => {
  const [data, setData] = useState()

  useEffect(() => {
    axios
      .get(route)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [route])

  return data
}

export default useFetch

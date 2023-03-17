/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = 'https://coinranking1.p.rapidapi.com/coins'

const useFetch = ({
  path = '/coins',
  method,
  body,
  headers = null,
  deps = '',
}: {
  path?: string
  method: 'get' | 'post' | 'put' | 'delete'
  body?: {
    [x: string]: any
  } | null
  headers?: any | null
  deps?: any | null
}) => {
  const [response, setResponse] = useState<AxiosResponse<any, any> | null>(null)
  const [error, setError] = useState<unknown>()
  const [loading, setloading] = useState(true)

  const fetchData = async () => {
    try {
      const { data } = await axios({
        method: 'get',
        baseURL:
          process.env.REACT_APP_API_URL ??
          'https://coinranking1.p.rapidapi.com',
        url: path,
        params: body,
        timeout: 0,
        headers: {
          'X-RapidAPI-Key':
            process.env.REACT_APP_RAPIDAPI_PUBLIC_KEY ??
            'PLEASE_ADD_RAPID_API_KEY',
          'X-RapidAPI-Host':
            process.env.REACT_APP_RAPIDAPI_HOST ??
            'coinranking1.p.rapidapi.com',
          ...(headers ?? {}),
        },
      })
      setResponse(data)
    } catch (error) {
      setError(error)
    } finally {
      setloading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [method, path, headers, deps])

  return { response, error, loading }
}

export default useFetch

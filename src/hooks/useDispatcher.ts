import fetchReducer from '@app/services/fetchReducer'
import { useEffect, useReducer } from 'react'

const defaultState = {
  error: null,
  data: null,
}

export default function useDispatcher({
  data,
  loading,
  error,
  initialState = defaultState,
}: any) {
  const [state, dispatch] = useReducer(fetchReducer.reducer, initialState)
  useEffect(() => {
    if (data && !loading && !error) {
      dispatch({ type: 'SUCCESS', payload: data })
    }
    if (error) {
      dispatch({ type: 'ERROR', error })
    }
  }, [data, loading, error])

  return { state }
}

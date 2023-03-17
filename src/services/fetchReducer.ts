function reducer<T>(
  state: any,
  action: {
    type?: 'SUCCESS' | 'ERROR' | null
    payload?: T | null
    error?: any | null
  },
) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        data: action.payload,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        data: [],
      }
    }
    default: {
      return state
    }
  }
}

export default { reducer }

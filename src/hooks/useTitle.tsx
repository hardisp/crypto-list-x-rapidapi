import { APP_NAME } from '@app/configs/app'
import { useEffect } from 'react'

export default function useTitle(title?: string) {
  useEffect(() => {
    const docTitles = []
    if (title) {
      docTitles.push(title)
    }
    docTitles.push(APP_NAME)
    document.title = docTitles.join(' | ')
  }, [title])
}

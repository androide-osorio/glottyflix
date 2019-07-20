import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export function useMemoizedSelector(selector, ...params) {
  const memoedSelector = useMemo(() => selector, [selector])
  return useSelector(state => memoedSelector(state, ...params))
}

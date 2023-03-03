// 初次加载不触发，之后触发的钩子函数
import { useEffect, useRef } from 'react'
function useDidUpdateEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined) {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) {
      effect()
    } else {
      didMountRef.current = true
    }
  }, deps)
}
export default useDidUpdateEffect

import { useEffect, useRef } from "react"

export const useHorizontalScroll = () => {
  const elRef: React.RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) {
        return
      }
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
        el.scrollLeft += e.deltaX
      }
      el.scrollTo({ left: el.scrollLeft + e.deltaY })
    }
    el.addEventListener("wheel", onWheel)
    return () => el.removeEventListener("wheel", onWheel)
  }, [])
  return elRef
}

export const onWheel = (e: WheelEvent, ref: any) => {
  const elelemnt = ref.current
  if (elelemnt) {
    if (e.deltaY == 0) return
    elelemnt.scrollTo({
      left: elelemnt.scrollLeft + e.deltaY
    })
  }
}

import {useRef, useEffect, useState, ReactNode} from 'react'
import { createPortal } from 'react-dom'

export default function ClientOnlyPortal({ children, selector }:{children:ReactNode, selector:any}) {
    const ref = useRef(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector(selector)
        setMounted(true)
    }, [selector])

    return mounted ? createPortal(children, ref.current!) : null
}
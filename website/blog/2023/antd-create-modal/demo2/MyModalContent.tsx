import React from "react"

export interface ContentProps {
    value?: any
}

export function MyModalContent(props: ContentProps) {
    return <div>{props.value}</div>
}
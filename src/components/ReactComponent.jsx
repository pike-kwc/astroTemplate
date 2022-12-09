import React from "react";
import { reactClick, preactClick } from "../testStore";
import { useStore } from '@nanostores/react';

const ReactComponent = () => {
    const $clickCount = useStore(reactClick)
    const $preactClicks = useStore(preactClick)
    return (
        <div>Hello I'm a ReactComponent <button onClick={() => reactClick.set($clickCount + 1)}>{$clickCount}</button> preactClicks: {$preactClicks}</div>
    )
}
export default ReactComponent
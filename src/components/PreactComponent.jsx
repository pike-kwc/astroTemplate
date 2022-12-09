import { h, Fragment } from 'preact';
import { useStore } from '@nanostores/preact';
import { reactClick, preactClick } from "../testStore";
const PreactComponent = () => {
    const $clickCount = useStore(preactClick)
    const $reactClicks = useStore(reactClick)
    return (
        <div>Hi I'm Preact <button onClick={() => preactClick.set($clickCount + 1)}>{$clickCount}</button> reactClicks: {$reactClicks}</div>
    )
}
export default PreactComponent
import React, {useState} from "react"

export function Counter() {
    const [x, setX] = useState(0);
    const decrease = () => {
        if (x !== 0)
            setX(x - 1)
    }
    return (
    <div id="hotdog">
            <p style={{
                padding: "40px", border: "2px solid rgb(83, 83, 83)", borderRadius: "12px", alignItems: "center", textAlign: "center",
            }}>{x}</p>
        <div>
            <button id="button1" onClick={()=>setX(x + 1)}>
                Increase
            </button>
            <button id="button3" onClick={decrease}>
                Decrease
            </button>
        </div>
    </div>
    );
}

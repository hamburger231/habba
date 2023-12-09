
import React, {useState} from "react"

export function Baton() {
    let [isOn, setIsOn] = useState(false)
    let [state, setState] = useState("turn on")
    let [reverseState, setReverseState] = useState("turned off")
    let [color, setColor] = useState("red")

    let click = () => {
        {
            isOn 
            ? setIsOn(false) + setState("turn on") + setReverseState("turned off") + setColor("red")
            : setIsOn(true) + setState("turn off") + setReverseState("turned on") + setColor("green")
        }
    }
    return (
        <div id="hotdog">
            <p style={{border: "2px solid", padding: '40px', borderRadius: "12px", borderColor: `${color}`}}>
                {reverseState}
            </p>
            <button 
            id="button1"
            onClick={click}
            >
            {state}
        </button>
        </div>
        );
}
            




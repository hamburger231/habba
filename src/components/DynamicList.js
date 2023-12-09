import React from "react"

export function DynamicList() {
    const n = 3
    const render = () => {
        const listOfLists = [];
        for (let i=1; i < n+1; i++) {
            listOfLists.push(<li id="lista">List element {i}</li>) 
        }
        return listOfLists;
    };
    return (
        <div id="hotdog">
            <ul>
            {render()}
            </ul>
        </div>
        )
}
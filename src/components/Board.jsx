import Button from "./Button";
import {useEffect, useState} from "react";

/**
 * This is the board what will represent the tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Board(props) {
    let [elements, seElements] = useState(props.elements)

    function setX() {
        elements[0] ={
            id: '1', name: "DDD", value: 0
        }
        elements[1] = {
            id: '2', name: "X", value: 0
        }
        seElements([])
    }

    return (<div className="board">
        {elements.map(buttonData => (<Button buttonData={buttonData} key={buttonData.id} setX={setX}/>))}
    </div>);
}
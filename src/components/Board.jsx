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
        elements[5] = {
            id: '90', name: "XXX", value: 0
        }
        // let newElements = [{
        //     id: '1', name: "CCC", value: 0
        // }, {
        //     id: '2', name: "DDDD", value: 0
        // }, {
        //     id: '3', name: "XXX", value: 0
        // }]
        seElements(elements)
    }

    return (<div className="board">
        {elements.map(buttonData => (<Button buttonData={buttonData} key={buttonData.id} setX={setX}/>))}
    </div>);
}
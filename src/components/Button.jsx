import {useEffect, useState} from "react";

/**
 * This Button component is to add button in tic-toc-toe board
 * @author Mahadi Hasan Joy
 * @since 20-07-2022
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Button(props) {
    const [buttonData, setButtonData] = useState(props.buttonData)
    let [boardValue, setBoardValue] = useState(props.buttonData.name)
    useEffect(() => {
        console.log(buttonData)
        if (buttonData.name === "O") {
            setBoardValue("")
            console.log("Nai")

        } else if(buttonData.name === "X"){
            setBoardValue("X")
            console.log("X")
        }
        else{
            setBoardValue("O")
            console.log("O")
        }
    },[]);

    function checkData(buttonData){
        console.log(buttonData)

    }
    return (<>
        {checkData(props.buttonData)}
        <button className="button" onClick={() => (setBoardValue("O"), props.setX())}>{boardValue}</button>
    </>)
}
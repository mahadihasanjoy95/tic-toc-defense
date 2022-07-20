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
        if (buttonData.name === "0") {
            setBoardValue("")
            console.log("X")

        } else {
            setBoardValue("X")
            console.log(buttonData.name)
        }
    }, []);
    return (<>
        <button className="button" onClick={() => (setBoardValue("O"), props.setX())}>{boardValue}</button>
    </>)
}
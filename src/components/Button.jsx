import {useEffect, useState} from "react";

export default function Button(props) {
    const [buttonData, setButtonData] = useState(props.buttonData)
    let [boardValue, setBoardValue] = useState(props.buttonData.name)
    useEffect(() => {
        if (buttonData.name==="0"){
            setBoardValue("")
        }
    }, []);
    return (<>
        <button className="button" onClick={()=>(setBoardValue("O"))}>{boardValue}</button>
    </>)
}
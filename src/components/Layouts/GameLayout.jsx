import {Outlet} from "react-router-dom";

export default function GameLayout(props) {

    return (
        <div>
            <h1 className="center"> TIC-TAC-TOE</h1>
           <Outlet/>
            <p className="center">--better learn--</p>
        </div>
    )

}
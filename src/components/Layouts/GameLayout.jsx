export default function GameLayout(props) {

    return (
        <div>
            <h1 className="center"> TIC-TAC-TOE</h1>
            {props.children}
            <p className="center">--better learn--</p>
        </div>
    )

}
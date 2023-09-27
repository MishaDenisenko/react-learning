import {useState} from "react";

export function Square({value, onHandleClick}) {

    return (
        <>
            <button className="square" onClick={onHandleClick}>{value}</button>
        </>
    )
}
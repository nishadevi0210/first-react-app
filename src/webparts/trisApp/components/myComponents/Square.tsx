import * as React from "react";
import { ITrisAppProps } from "../ITrisAppProps";
import styles from "../TrisApp.module.scss";

export const Square = (props) => {
    const sqText = props.matrixPosition;
    const onClick = props.onClick;

  
    return (
        <button className={styles.square} onClick={() => onClick()}> 
            { sqText }
        </button>
    );
}
import * as React from "react";
import { ITrisAppProps } from "../ITrisAppProps";
import styles from "../TrisApp.module.scss";
import { Board } from "./Board";

export const Game = () => {
    return (
        <div className={styles.game}>
          <div className={styles["game-board"]}>
            <Board />
          </div>
        </div>
    );
}

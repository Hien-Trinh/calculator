"use client"

import styles from "./page.module.css"
import { useState } from "react"

export default function Home() {
    const [cache, setCache] = useState()
    const [current, setCurrent] = useState("0")
    const [operator, setOperator] = useState()

    const round = (num) => {
        return +parseFloat(num).toFixed(6)
    }

    const handleNum = (num) => {
        if (current.length == 6) {
            return
        }

        if (current == "0") {
            setCurrent(num)
        } else {
            setCurrent(current + num)
        }
    }

    const handleClear = () => {
        setCurrent("0")
    }

    const flipSign = () => {
        setCurrent(-parseFloat(current))
    }

    const percentage = () => {
        setCurrent(round(current / 100))
    }

    const operate = (op) => {
        if (cache) {
            resolve()
        }
        setCache(current)
        setCurrent("0")
        setOperator(op)
    }

    const resolve = () => {
        if (!operator) {
            return
        }

        if (operator === "/") {
            setCurrent(cache / current)
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.screen}>{current}</div>
                <div className={styles.row}>
                    <button
                        className={styles.button}
                        onClick={() => handleClear()}
                    >
                        C
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => flipSign()}
                    >
                        +/-
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => percentage()}
                    >
                        %
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => operate("/")}
                    >
                        ÷
                    </button>
                </div>
                <div className={styles.row}>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("7")}
                    >
                        7
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("8")}
                    >
                        8
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("9")}
                    >
                        9
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => operate("x")}
                    >
                        ×
                    </button>
                </div>
                <div className={styles.row}>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("4")}
                    >
                        4
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("5")}
                    >
                        5
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("6")}
                    >
                        6
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => operate("-")}
                    >
                        -
                    </button>
                </div>
                <div className={styles.row}>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("1")}
                    >
                        1
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("2")}
                    >
                        2
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("3")}
                    >
                        3
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => operate("+")}
                    >
                        +
                    </button>
                </div>
                <div className={styles.row}>
                    <button
                        className={styles.button}
                        onClick={() => handleNum("0")}
                    >
                        0
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => handleNum(".")}
                    >
                        .
                    </button>
                    <button className={styles.button} onClick={() => resolve()}>
                        =
                    </button>
                </div>
            </div>
        </main>
    )
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);
    const [status, setStatus] = useState<string>("");
    function gameStatus(left: number, right: number): void {
        if (left === right) {
            if (left === 1) {
                setStatus("Lose");
            } else {
                setStatus("Win");
            }
        } else {
            setStatus("");
        }
    }
    function rollLeft(): void {
        const newLeft = d6();
        setLeft(newLeft);
        gameStatus(newLeft, right);
    }
    function rollRight(): void {
        const newRight = d6();
        setRight(newRight);
        gameStatus(left, newRight);
    }

    return (
        <div>
            <div>{status}</div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">{left} ||</span>
                <span data-testid="right-die"> {right}</span>
            </div>
        </div>
    );
}

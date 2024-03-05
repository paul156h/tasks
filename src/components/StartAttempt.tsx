import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function start(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    function stop(): void {
        setInProgress(false);
    }
    return (
        <div>
            <div>
                <Button onClick={start} disabled={inProgress || attempts === 0}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stop} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}

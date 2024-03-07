import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userInput, setUserInput] = useState<string>("");

    function checkEqual(userInput: string, expectedAnswer: string): string {
        return userInput === expectedAnswer ? "✔️" : "❌";
    }

    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <div>40 + 2 = ?</div>
            <Form.Group controlId="CheckAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={userInput} onChange={updateInput} />
            </Form.Group>
            <div>{checkEqual(userInput, expectedAnswer)}</div>
        </div>
    );
}

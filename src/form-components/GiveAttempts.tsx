import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    function use(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gain(): void {
        setAttempts(request + attempts);
    }

    function updateRequests(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setRequest(value);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>{attempts}</div>
            <Button onClick={use} disabled={attempts === 0}>
                Use
            </Button>
            <div>
                <Form.Group controlId="formGiveAttempts">
                    <Form.Label>Add Attempts</Form.Label>
                    <Form.Control type="number" onChange={updateRequests} />
                </Form.Group>
                <Button onClick={gain}>Gain</Button>
            </div>
        </div>
    );
}

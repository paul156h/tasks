import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🥯" | "🎄" | "🏵️" | "🦡" | "🍀";

    const DATE_TRANSITIONS: Record<Holiday, Holiday> = {
        "🥯": "🦡",
        "🦡": "🏵️",
        "🏵️": "🍀",
        "🍀": "🎄",
        "🎄": "🥯"
    };

    const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
        "🥯": "🎄",
        "🎄": "🦡",
        "🦡": "🏵️",
        "🏵️": "🍀",
        "🍀": "🥯"
    };

    const [day, setDay] = useState<Holiday>("🥯");

    function date(): void {
        const newDay = DATE_TRANSITIONS[day];
        setDay(newDay);
    }

    function alphabet(): void {
        const newDay = ALPHABET_TRANSITIONS[day];
        setDay(newDay);
    }

    return (
        <div>
            <div>Holiday: {day}</div>
            <div>
                <Button onClick={alphabet}>Advance by Alphabet</Button>
                <Button onClick={date}>Advance by Year</Button>
            </div>
        </div>
    );
}

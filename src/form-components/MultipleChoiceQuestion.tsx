import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedChoice}
                onChange={(e) => setSelectedChoice(e.target.value)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                {isCorrect ? (
                    <span style={{ color: "green" }}>✔️</span>
                ) : (
                    <span style={{ color: "red" }}>❌</span>
                )}
            </div>
        </div>
    );
}

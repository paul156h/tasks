import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Purple",
        "Orange",
        "Pink",
        "Cyan"
    ];
    const [selectedColor, setSelectedColor] = useState<string>("");

    const updateColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <h4>Choose a color:</h4>
                {colors.map((color, index) => (
                    <Form.Check
                        inline
                        key={index}
                        type="radio"
                        label={color}
                        id={`color-radio-${index}`}
                        checked={selectedColor === color}
                        onChange={() => updateColorChange(color)}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "100px",
                    height: "50px",
                    marginTop: "10px"
                }}
            >
                {selectedColor && <span>on</span>}
            </div>
        </div>
    );
}

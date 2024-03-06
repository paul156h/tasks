import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ColoredBox(): JSX.Element {
    const COLORS = ["red", "blue", "green"];
    const [colorIndex, setColorIndex] = useState<number>(0);

    function ChangeColor(): JSX.Element {
        return <Button onClick={handleColorChange}>Next Color</Button>;
    }

    function handleColorChange() {
        setColorIndex((colorIndex + 1) % COLORS.length);
    }

    function ColorPreview(): JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ColorPreview />
                <ChangeColor />
            </div>
        </div>
    );
}

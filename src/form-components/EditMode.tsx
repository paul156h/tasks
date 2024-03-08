import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    const output = isStudent
        ? `${name} is a student`
        : `${name} is not a student`;

    const editStatus = edit ? "Edit mode is on" : "Edit mode is off";

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <p>{editStatus}</p>
            <Form.Group className="form-switch" controlId="toggleEditMode">
                <Form.Check
                    type="switch"
                    label="Edit mode"
                    checked={edit}
                    onChange={updateEdit}
                />
            </Form.Group>
            <div>
                {!edit && (
                    <div>
                        <p>{output}</p>
                    </div>
                )}
                {edit && (
                    <div>
                        <Form.Group controlId="nameInput">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={updateName}
                            />
                        </Form.Group>
                        <Form.Group controlId="studentInput">
                            <Form.Check
                                type="checkbox"
                                label="Student"
                                checked={isStudent}
                                onChange={updateStudent}
                            />
                        </Form.Group>
                        <p>{output}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

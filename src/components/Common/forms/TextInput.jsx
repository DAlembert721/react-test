import React, {useId} from 'react';
import {FormGroup, Input, Label} from "reactstrap";

const TextInput = ({name, type, value, setValue, label, valid = true}) => {
    const id = useId();
    return(
        <FormGroup>
            <Label for={id}>
                {label}
            </Label>
            <Input
                id={id}
                name={name}
                invalid={!valid}
                onChange={e => setValue(e)}
                value={value}
                type={type}
            />
        </FormGroup>
    );
}

export default TextInput;
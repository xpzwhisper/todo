import React from 'react';
import enhance from '../hoc/wrapInputBox';
import {ADD_NEW} from '../../assets/text/ee';

function InputBox(props) {
    const { value, handleChange, handleKeyUp } = props;

    return (
        <input autoFocus
            type="text"
            className="form-control add-todo"
            value={value}
            onKeyUp={handleKeyUp}
            onChange={handleChange}
            placeholder={ADD_NEW}
        />
    );
}

export default enhance(InputBox);

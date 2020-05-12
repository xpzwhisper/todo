import React from 'react';
import InputWrapper from './InputWrapper';
import {HEADER_TEXT} from '../../assets/text/ee';

export default function Header(props) {
    return (
        <header>
            <h1>{HEADER_TEXT}</h1>
            <InputWrapper {...props}/>
        </header>
    );
}

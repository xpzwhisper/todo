import React from 'react';
import {MODE_NONE} from '../../services/mode';
import {INFO_SHORTCUT_KEYS, INFO_CANCEL_SHORTCUT_KEY} from '../../assets/text/ee';

export default function Info(props) {
    const message = props.mode === MODE_NONE ? INFO_SHORTCUT_KEYS : INFO_CANCEL_SHORTCUT_KEY;

    return <p className="info">{message}</p>;
}

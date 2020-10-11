import React from 'react';
import PersonRow from './PersonRow';

export default function PersonRows(props) {
    const {
        handleClose, show, persons, funcReflectId,
    } = { ...props };

    return persons.map((v) => (
        <PersonRow person={v} handleClose={handleClose} show={show} funcReflectId={funcReflectId} />
    ));
}

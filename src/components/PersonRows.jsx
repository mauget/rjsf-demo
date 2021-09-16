import React from 'react';
import PropTypes from 'prop-types';
import PersonRow from './PersonRow';

export default function PersonRows(props) {
    const {
        handleClose, show, persons, funcReflectId,
    } = props;

    return persons.map((v) => (
        <PersonRow
            key={v.id}
            person={v}
            handleClose={handleClose}
            show={show}
            funcReflectId={funcReflectId}
        />
    ));
}

PersonRows.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    person: PropTypes.shape({
        key: PropTypes.number,
        id: PropTypes.number,
        lastName: PropTypes.string,
        firstName: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
    funcReflectId: PropTypes.string.isRequired,
};

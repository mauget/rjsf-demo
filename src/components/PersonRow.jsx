import React from 'react';
import PropTypes from 'prop-types';

export default function PersonRow(props) {
    const {
        show, person, funcReflectId,
    } = props;
    const {
        id, firstName, lastName, email,
    } = { ...person };

    const clickHandler = (event) => {
        event.preventDefault();
        funcReflectId(id);
        show(true);
    };

    return (
        <tr onClick={clickHandler}>
            <td>{id}</td>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td><a href={`mailto:${email}`}>{email}</a></td>
        </tr>
    );
}

PersonRow.propTypes = {
    show: PropTypes.bool.isRequired,
    person: PropTypes.shape({
        key: PropTypes.number,
        id: PropTypes.number,
        lastName: PropTypes.string,
        firstName: PropTypes.string,
        email: PropTypes.string,
    }),
    funcReflectId: PropTypes.string.isRequired,
};

PersonRow.defaultProps = {
    person: {},
};

import React from 'react';
import PropTypes from 'prop-types';

export default function PersonRow(props) {
    const { show, person, funcReflectId } = { ...props };
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
    // eslint-disable-next-line react/no-unused-prop-types
    show: PropTypes.func.isRequired,
    person: PropTypes.shape({
        id: PropTypes.number,
        lastName: PropTypes.string,
        firstName: PropTypes.string,
        email: PropTypes.string,
    }),
};

PersonRow.defaultProps = {
    person: {},
};

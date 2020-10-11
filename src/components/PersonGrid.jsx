import React from 'react';
import PropTypes from 'prop-types';
import PersonRows from './PersonRows';
import PersonRow from './PersonRow';

export default function PersonGrid(props) {
    const {
        persons, handleClose, show, funcReflectId,
    } = { ...props };
    const tempPeeps = persons.slice(0, 9);
    return (
        <>
            <table>
                <caption>Persons</caption>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>EMail</th>
                    </tr>
                </thead>
                <tbody>
                    <PersonRows
                        persons={tempPeeps}
                        handleClose={handleClose}
                        show={show}
                        funcReflectId={funcReflectId}
                    />
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Totals</th>
                        <th>{persons.length}</th>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

PersonRow.propTypes = {
    persons: PropTypes.arrayOf(PropTypes.object),
};

PersonRow.defaultProps = {
    persons: [],
};

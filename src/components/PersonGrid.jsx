import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import PersonRows from './PersonRows';

export default function PersonGrid(props) {
    const {
        persons, handleClose, show, funcReflectId,
    } = props;

    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
        >
            <table>
                <caption><h2>List</h2></caption>
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
                        persons={persons}
                        handleClose={handleClose}
                        show={show}
                        funcReflectId={funcReflectId}
                    />
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row">Totals</th>
                        <th>{persons?.length}</th>
                    </tr>
                </tfoot>
            </table>
        </Grid>
    );
}

PersonGrid.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number,
            id: PropTypes.number,
            lastName: PropTypes.string,
            firstName: PropTypes.string,
            email: PropTypes.string,
        }),
    ),
    handleClose: PropTypes.func,
    show: PropTypes.bool.isRequired,
    funcReflectId: PropTypes.string.isRequired,
};

PersonGrid.defaultProps = {
    persons: [],
    handleClose: () => {},
};

import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';

export default function FormButtonBar(props) {
    const { cancelFunc, updateFunc } = props;
    return (
        <div style={{ display: 'flex' }}>
            <Button
                variant="contained"
                color="secondary"
                onClick={cancelFunc}
                style={{ marginRight: '0.5rem' }}
            >
                Cancel
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={updateFunc}
            >
                Update
            </Button>
        </div>
    );
}

FormButtonBar.propTypes = {
    cancelFunc: PropTypes.func.isRequired,
    updateFunc: PropTypes.shape({}).isRequired,
};

import React from 'react';
import Button from '@material-ui/core/Button';

export default function FormTemplate1(props) {
    const { id, handleClose } = { ...props };
    return (
        <>
            <div>
                <span>{`You clicked row for id ${id}`}</span>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    style={{ margin: '1.0rem' }}
                >
                    Close
                </Button>
            </div>
        </>
    );
}

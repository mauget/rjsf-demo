import React from 'react';

export default function FormTemplate1(props) {
    const { id, handleClose } = { ...props };
    return (
        <>
            <div>
                <span>{`You clicked row for id ${id}`}</span>
            </div>
            <div>
                {/* eslint-disable-next-line react/button-has-type */}
                <button onClick={handleClose} style={{ margin: '1.0rem' }}>Close</button>
            </div>
        </>
    );
}

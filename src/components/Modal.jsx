import React from 'react';
import PropTypes from 'prop-types';

export default function Modal(props) {
    const { show, children } = { ...props };
    const modality = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={modality}>
            <section className="modal-main">
                {children}
                {/* eslint-disable-next-line react/button-has-type */}
                {/* <button onClick={handleClose}>Close</button> */}
            </section>
        </div>
    );
}

Modal.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    show: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    handleClose: PropTypes.func.isRequired,
};

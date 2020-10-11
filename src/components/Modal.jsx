import React from 'react';

export default function Modal(props) {
    const { show, children } = { ...props };
    const modality = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={modality}>
            <section className="modal-main">
                {children}
            </section>
        </div>
    );
}

// Modal.propTypes = {
//     show: PropTypes.bool.isRequired,
//     handleClose: PropTypes.func.isRequired,
// };

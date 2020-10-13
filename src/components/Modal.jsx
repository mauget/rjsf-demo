import React from 'react';

export default function Modal(props) {
    const { show, children } = { ...props };
    const modality = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={modality}>
            <div className="modal-main">
                {children}
            </div>
        </div>
    );
}

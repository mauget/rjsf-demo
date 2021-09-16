import React from 'react';
import PropTypes from 'prop-types';

/**
 * An abstract modal with hevhavior and visuals set by children and Modal.css
 * @param props - show: boolean, children: any html«
 * @returns {JSX.Element}
 */
export default function Modal(props) {
    const { show, children } = props;
    const modality = show ? 'modal modal-display' : 'modal modal-hide';
    return (
        <div className={modality}>
            <div className="modal-main">
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
};

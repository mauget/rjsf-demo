import React, { useEffect, useState } from 'react';
import { PERSONS_URL } from '../constants/constants';
import PersonGrid from './PersonGrid';
import extractPersonData from '../functions/extractPersonData';
import Modal from './Modal';
import FormTemplate1 from './FormTemplate1';

export default function PersonsPage() {
    const [persons, setPersons] = useState([]);

    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${PERSONS_URL}/persons`);
            const json = await res.json();
            await setPersons(extractPersonData(json));
        }

        fetchData()
            .then((r) => r);
    }, []);

    const showModal = () => setShow(true);

    // In the future this would persist any request from the modal:
    const handleClose = () => {
        setShow(false);
    };

    const funcReflectId = (idParam) => setId(idParam);

    return (
        <>
            <div style={{ margin: '2.0rem' }}><a href="/">Home</a></div>
            {
                persons.length ? (
                    <PersonGrid
                        persons={persons}
                        handleClose={handleClose}
                        show={showModal}
                        funcReflectId={funcReflectId}
                    />
                ) : (<div>Waiting for data</div>)
            }
            <Modal handleClose={handleClose} show={show}>
                <FormTemplate1 id={id} handleClose={handleClose} />
            </Modal>
        </>
    );
}

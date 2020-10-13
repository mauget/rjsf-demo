import React, { useEffect, useState } from 'react';
import PersonGrid from './PersonGrid';
import Modal from './Modal';
import FormTemplate1 from './form/FormTemplate1';
import fetchData from '../service/fetchData';
import fetchPerson from '../service/fetchPerson';

export default function PersonsPage() {
    const [persons, setPersons] = useState([]);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
    const [formData, setFormData] = useState({});
    const [wantRefresh, setWantRefresh] = useState(false);

    useEffect(() => {
        fetchData(setPersons)
            .then(() => {
                setWantRefresh(false);
            });
    }, [wantRefresh]);

    useEffect(() => {
        fetchPerson(id, setFormData)
            .then(() => {
                // setWantRefresh(true);
            });
    }, [id]);

    const showModal = () => setShow(true);

    // In the future this would persist any request from the modal:
    const handleCloseModal = () => {
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
                        handleClose={handleCloseModal}
                        show={showModal}
                        funcReflectId={funcReflectId}
                    />
                ) : (<div>Waiting ...</div>)
            }
            <Modal handleClose={handleCloseModal} show={show}>
                <FormTemplate1 id={id} formData={formData} handleClose={handleCloseModal} />
            </Modal>
        </>
    );
}

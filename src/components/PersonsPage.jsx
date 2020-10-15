import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PersonGrid from './PersonGrid';
import Modal from './Modal';
import FormPersonTemplate from './form/FormPersonTemplate';
import fetchData from '../service/fetchData';
import fetchPerson from '../service/fetchPerson';
import { flexRowChild } from '../constants/constants';

function AppBreadCrumbs() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={flexRowChild}>
                <a href="/">Home</a>
            </div>
            <div style={flexRowChild}>
                <span>&nbsp;-&gt;&nbsp;List</span>
            </div>
        </div>
    );
}

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
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
        >
            <AppBreadCrumbs />
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
                <FormPersonTemplate formData={formData} handleClose={handleCloseModal} />
            </Modal>
        </Grid>
    );
}

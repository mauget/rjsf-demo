import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Form from '@rjsf/material-ui';
import { schema1, uiSchema } from '../../jsonschema/schema1';

export default function FormTemplate1(props) {
    const { handleClose, formData } = { ...props };
    return (
        <Box style={{ margin: '1.0rem' }}>
            <div style={{ margin: '0.5rem' }}>
                <span>{`Person ID ${formData.id}`}</span>
            </div>
            <Form
                schema={schema1}
                uiSchema={uiSchema}
                formData={formData}
                liveValidate
                onSubmit={() => {}}
            />
            <div>
                <Button variant="contained" color="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </div>
        </Box>
    );
}

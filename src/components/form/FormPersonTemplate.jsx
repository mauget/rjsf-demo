import React from 'react';
import Box from '@material-ui/core/Box';
import Form from '@rjsf/material-ui';
import { schema1, uiSchema } from '../../jsonschema/schema1';
import FormButtonBar from './FormButtonBar';

export default function FormPersonTemplate(props) {
    const { handleClose, formData } = { ...props };
    return (
        <Box style={{ margin: '1.0rem' }}>
            <Form
                schema={schema1}
                uiSchema={uiSchema}
                formData={formData}
                liveValidate
            />
            <FormButtonBar cancelFunc={handleClose} updateFunc={handleClose} />
        </Box>
    );
}

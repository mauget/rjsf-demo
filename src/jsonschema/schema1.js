export const schema1 = {
    title: 'Person',
    type: 'object',
    description: 'person details',
    properties: {
        id: { type: 'integer', title: 'id' },
        firstName: { type: 'string', title: 'First Name', minLength: 1 },
        lastName: { type: 'string', title: 'Last Name', minLength: 2 },
        email: { type: 'string', title: 'EMail' },
    },
    required: [
        'firstName',
        'lastName',
        'email',
    ],
};

export const uiSchema = {
    'ui:order': ['id', 'firstName', 'lastName', 'email'],
    id: {

    },
    firstName: {
        'ui.autoFocus': true,
        'ui.widget': 'text',
    },
    lastName: {
        'ui.widget': 'text',
    },
    email: {
        'ui.widget': 'text',
        inputType: 'email',
    },
};

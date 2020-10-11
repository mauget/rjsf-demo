import React, { useState } from 'react';
import '../App.css';
import '../Modal.css';
import Button from '@material-ui/core/Button';
import PersonsPage from './PersonsPage';

// Exposed to testing

export default function App() {
    const [isStarted, setIsStarted] = useState(false);

    const handleStart = (event) => {
        event.preventDefault();
        setIsStarted(true);
    };

    return (
        <div className="App">
            {
                isStarted
                    ? <PersonsPage />
                    : (
                        <Button
                            data-testid="startButton"
                            variant="contained"
                            color="primary"
                            onClick={handleStart}
                        >
                            Edit Persons
                        </Button>
                    )
            }
        </div>
    );
}

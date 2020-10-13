import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../App.css';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import Grid from '@material-ui/core/Grid';
import PersonsPage from './PersonsPage';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    },
});

// Exposed to testing
export default function App() {
    const [isStarted, setIsStarted] = useState(false);

    const handleStart = (event) => {
        event.preventDefault();
        setIsStarted(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
            >
                {
                    isStarted
                        ? <PersonsPage />
                        : (
                            <Button
                                style={{ margin: '2.0rem' }}
                                data-testid="startButton"
                                variant="contained"
                                color="primary"
                                onClick={handleStart}
                            >
                                Edit Persons
                            </Button>
                        )
                }
            </Grid>
        </ThemeProvider>
    );
}

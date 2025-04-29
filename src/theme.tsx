
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
           '"Roboto"', // Adiciona Roboto como a primeira opção
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
            
        ].join(','),
    },
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#4f8e3e',
        },
    },
});
theme = responsiveFontSizes(theme);

export default theme;
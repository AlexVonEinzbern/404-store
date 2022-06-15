import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const tema = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#ab003c',
    },

    warning: {
        main: '#000',
      },
    
  },
});
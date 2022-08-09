import * as React from 'react';
import { useRecoilState } from "recoil";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { modeState } from '@store/theme';
import { ColorModeContext } from '@contexts/theme';
import MyApp from '@pages';

function App() {
  const [mode, setMode] = useRecoilState(modeState);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(mode === 'light' ? 'dark' : 'light');
      },
    }),
    [mode, setMode],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
        typography: {
          fontFamily: "'Roboto', sans-serif"
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;

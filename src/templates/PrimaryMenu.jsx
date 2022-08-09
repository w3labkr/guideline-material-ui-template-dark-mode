import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleColorMode from '@components/ToggleColorMode';

export default function PrimaryMenu () {
  return (
    <AppBar
      position="fixed"
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Hello World!
        </Typography>
        <ToggleColorMode />
      </Toolbar>
    </AppBar>
  );
}

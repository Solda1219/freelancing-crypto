// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
// theme
import { bgBlur } from 'src/theme/css';
// components
import Logo from 'src/components/logo';

import { HEADER } from '../config-layout';
//
import { Web3ConnectButton, HeaderShadow } from '../_common';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={
          typeof Storage !== 'undefined'
            ? {
                height: {
                  xs: HEADER.H_MOBILE,
                  md: HEADER.H_DESKTOP,
                },
                transition: theme.transitions.create(['height'], {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.shorter,
                }),
                ...(offsetTop && {
                  ...bgBlur({
                    color: theme.palette.background.default,
                  }),
                  height: {
                    md: HEADER.H_DESKTOP_OFFSET,
                  },
                }),
              }
            : {
                height: {
                  xs: HEADER.H_MOBILE,
                  md: HEADER.H_DESKTOP,
                },
                bgcolor: 'white',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)',
              }
        }
      >
        {/* <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}> */}
        <Stack
          direction="row"
          height={1}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          px={{ xs: 2, md: 4, lg: 7, xl: 10 }}
        >
          <Logo component={Link} to="/" />

          <Box sx={{ flexGrow: 1 }} />

          {/* {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />} */}

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }} spacing={2}>
            {/* <Button color="success" variant="contained" target="_blank" rel="noopener" href="#">
              Post a Project
            </Button> */}
            {/* 
            <Button variant="outlined" sx={{ mr: 1 }} onClick={onClick}>
              {loading ? 'Signing...' : label}
            </Button> */}
            {/* <w3m-button /> */}
            {typeof Storage !== 'undefined' ? (
              <Web3ConnectButton />
            ) : (
              <Button variant="outlined">Connect Wallet</Button>
            )}
            {/* <SettingsButton /> */}
            {/* {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />} */}
          </Stack>
        </Stack>
        {/* </Container> */}
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}

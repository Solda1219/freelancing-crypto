// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';

// theme
import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function InviteFriends({ img, price, title, description, sx, ...other }) {
  const theme = useTheme();

  return (
    <Box {...other}>
      <Box
        component="img"
        alt="invite"
        src={img}
        sx={{
          left: 10,
          zIndex: 9,
          width: 250,
          position: 'relative',
          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.24))',
          ...sx,
        }}
      />
      <Box
        sx={{
          mt: -15,
          color: 'common.white',
          borderRadius: 2,
          p: theme.spacing(12, 3, 3, 3),
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
        }}
      >
        <Stack direction="row" alignItems="flex-end" justifyContent="space-between">
          <Box sx={{ whiteSpace: 'pre-line', typography: 'h4' }}>{title}</Box>
          <Box sx={{ typography: 'h2' }}>{price}</Box>
        </Stack>
        <Box sx={{ mt: 2, mb: 3, typography: 'body2' }}>{description}</Box>
        <InputBase
          fullWidth
          placeholder="Email"
          endAdornment={
            <Button color="warning" variant="contained" size="small" sx={{ mr: 0.5 }}>
              Invite
            </Button>
          }
          sx={{
            pl: 1.5,
            height: 40,
            borderRadius: 1,
            bgcolor: 'common.white',
          }}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          mt={3}
          color="white"
        >
          <IconButton>
            <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <TwitterIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <RedditIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <TelegramIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

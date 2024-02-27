import { m } from 'framer-motion';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// theme
import { bgGradient } from 'src/theme/css';
// routes
// import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeEight() {
  const theme = useTheme();

  const renderDescription = (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: 'common.white', mb: 5, typography: 'h2' }}
      >
        Get started with
        <br /> Crypolancer today
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
      >
        <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener"
            // href={paths.minimalUI}
            sx={{
              color: 'grey.800',
              bgcolor: 'common.white',
            }}
          >
            Hire a Freelancer
          </Button>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            target="_blank"
            rel="noopener"
            // href={paths.freeUI}
            endIcon={<Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />}
            sx={{
              color: 'common.white',
              '&:hover': { borderColor: 'currentColor' },
            }}
          >
            Earn Money Freelancing
          </Button>
        </m.div>
      </Stack>
    </Box>
  );
  const renderDescriptionNoJS = (
    <Box
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Box sx={{ color: 'common.white', mb: 5, typography: 'h2' }}>
        Get started with
        <br /> Crypolancer today
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
        spacing={2}
      >
        <Button
          color="inherit"
          size="large"
          variant="contained"
          target="_blank"
          rel="noopener"
          // href={paths.minimalUI}
          sx={{
            color: 'grey.800',
            bgcolor: 'common.white',
          }}
        >
          Hire a Freelancer
        </Button>

        <Button
          color="inherit"
          size="large"
          variant="outlined"
          target="_blank"
          rel="noopener"
          // href={paths.freeUI}
          endIcon={<Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />}
          sx={{
            color: 'common.white',
            '&:hover': { borderColor: 'currentColor' },
          }}
        >
          Earn Money Freelancing
        </Button>
      </Stack>
    </Box>
  );

  const renderImg = (
    <Stack component={m.div} variants={varFade().inUp} alignItems="center">
      <Box
        component={m.img}
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        alt="rocket"
        src="/assets/images/home/rocket.webp"
        sx={{ maxWidth: 460 }}
      />
    </Stack>
  );
  const renderImgNoJS = (
    <Stack alignItems="center">
      <img alt="rocket" src="/assets/images/home/rocket.webp" style={{ maxWidth: 460 }} />
    </Stack>
  );

  return (
    <Container component={MotionViewport}>
      <Stack
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          ...bgGradient({
            direction: '135deg',
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
          borderRadius: 2,
          pb: { xs: 5, md: 0 },
        }}
      >
        {typeof Storage !== 'undefined' ? renderImg : renderImgNoJS}

        {typeof Storage !== 'undefined' ? renderDescription : renderDescriptionNoJS}
      </Stack>
    </Container>
  );
}

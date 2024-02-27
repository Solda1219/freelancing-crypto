import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeSeven() {
  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: { md: 5 },
          }}
        >
          Suddenly, it&apos;s all so <i>DOABLE</i>
        </Typography>
      </m.div>
    </Stack>
  );
  const renderDescriptionNoJS = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mt: 3,
          mb: { md: 5 },
        }}
      >
        Suddenly, it&apos;s all so <i>DOABLE</i>
      </Typography>
    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 5 },
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 0 }}>
        <Grid xs={12} md={4}>
          {typeof Storage !== 'undefined' ? renderDescription : renderDescriptionNoJS}
        </Grid>

        <Grid xs={12} md={7}>
          {typeof Storage !== 'undefined' ? (
            <m.div variants={varFade().inUp}>
              <Image disabledEffect alt="rocket" src="/assets/images/home/zone_landing.webp" />
            </m.div>
          ) : (
            <img alt="rocket" src="/assets/images/home/zone_landing.webp" />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

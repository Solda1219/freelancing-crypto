import { m } from 'framer-motion';

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeTwo() {
  const renderDescription = (
    <Stack
      sx={{
        textAlign: { xs: 'center', md: 'unset' },
        pl: { md: 5 },
      }}
    >
      {typeof Storage !== 'undefined' ? (
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ my: 3 }}>
            The best part? Everything.
          </Typography>
        </m.div>
      ) : (
        <Typography variant="h2" sx={{ my: 3 }}>
          The best part? Everything.
        </Typography>
      )}
      {typeof Storage !== 'undefined' ? (
        <m.div variants={varFade().inUp}>
          <ul>
            <li>
              <Typography
                sx={{
                  mb: 0.5,
                  color: 'text.default',
                }}
                variant="h6"
              >
                Stick to your budget
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  color: 'text.secondary',
                }}
              >
                Find the right service for every price point. No hourly rates, just project-based
                pricing.
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  mb: 0.5,
                  color: 'text.default',
                }}
                variant="h6"
              >
                Get quality work done quickly
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  color: 'text.secondary',
                }}
              >
                Hand your project over to a talented freelancer in minutes, get long-lasting
                results.
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  mb: 0.5,
                  color: 'text.default',
                }}
                variant="h6"
              >
                Pay when you are happy
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  color: 'text.secondary',
                }}
              >
                Upfront quotes mean no surprises. Payments only get released when you approve.
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  mb: 0.5,
                  color: 'text.default',
                }}
                variant="h6"
              >
                Count on 24/7 support
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  color: 'text.secondary',
                }}
              >
                Our round-the-clock support team is available to help anytime, anywhere.
              </Typography>
            </li>
          </ul>
        </m.div>
      ) : (
        <ul>
          <li>
            <Typography
              sx={{
                mb: 0.5,
                color: 'text.default',
              }}
              variant="h6"
            >
              Stick to your budget
            </Typography>
            <Typography
              sx={{
                mb: 2,
                color: 'text.secondary',
              }}
            >
              Find the right service for every price point. No hourly rates, just project-based
              pricing.
            </Typography>
          </li>
          <li>
            <Typography
              sx={{
                mb: 0.5,
                color: 'text.default',
              }}
              variant="h6"
            >
              Get quality work done quickly
            </Typography>
            <Typography
              sx={{
                mb: 2,
                color: 'text.secondary',
              }}
            >
              Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </Typography>
          </li>
          <li>
            <Typography
              sx={{
                mb: 0.5,
                color: 'text.default',
              }}
              variant="h6"
            >
              Pay when you are happy
            </Typography>
            <Typography
              sx={{
                mb: 2,
                color: 'text.secondary',
              }}
            >
              Upfront quotes mean no surprises. Payments only get released when you approve.
            </Typography>
          </li>
          <li>
            <Typography
              sx={{
                mb: 0.5,
                color: 'text.default',
              }}
              variant="h6"
            >
              Count on 24/7 support
            </Typography>
            <Typography
              sx={{
                mb: 2,
                color: 'text.secondary',
              }}
            >
              Our round-the-clock support team is available to help anytime, anywhere.
            </Typography>
          </li>
        </ul>
      )}
    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        direction={{ xs: 'column', md: 'row-reverse' }}
        alignItems="center"
        spacing={5}
      >
        <Grid xs={12} md={5}>
          {renderDescription}
        </Grid>

        <Grid xs={12} md={7}>
          <Box
            component="img"
            src=" /assets/images/home/bestpart.webp"
            alt="image here"
            sx={{ mx: 'auto' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

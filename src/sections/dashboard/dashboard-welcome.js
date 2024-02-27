import Link from 'next/link';
import { m } from 'framer-motion';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// routes
import { paths } from 'src/routes/paths';
// theme
import { bgGradient } from 'src/theme/css';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function Welcome({ title, description, img, ...other }) {
  const theme = useTheme();

  return (
    <Box component={MotionViewport}>
      <Card
        sx={{
          ...bgGradient({
            direction: '135deg',
            startColor: alpha(theme.palette.primary.darker, 0.9),
            endColor: alpha(theme.palette.primary.main, 0.9),
          }),
          position: 'relative',
          color: 'primary.lighter',
          backgroundColor: 'common.white',
        }}
        {...other}
      >
        <Stack direction="row" spacing={1} alignItems="center" px={3} justifyContent="space-around">
          <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }} py={3}>
            {typeof Storage !== 'undefined' ? (
              <m.div variants={varFade().inLeft}>
                <Typography variant="h3">{title}</Typography>
                <Typography
                  sx={{
                    opacity: 0.8,
                    maxWidth: 500,
                    mt: 2,
                  }}
                >
                  {description}
                </Typography>
                <Stack direction="row" spacing={1} mt={5}>
                  <Button variant="contained" color="error" component={Link} href="/hirefreelancer">
                    Hire a Freelancer
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    component={Link}
                    href={paths.dashboard.joblisting.root}
                  >
                    Start Freelancing
                  </Button>
                </Stack>
              </m.div>
            ) : (
              <>
                <Typography variant="h3">{title}</Typography>
                <Typography
                  sx={{
                    opacity: 0.8,
                    maxWidth: 500,
                    mt: 2,
                  }}
                >
                  {description}
                </Typography>
                <Stack direction="row" spacing={1} mt={5}>
                  <Button variant="contained" color="error" component={Link} href="/hirefreelancer">
                    Hire a Freelancer
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    component={Link}
                    href={paths.dashboard.joblisting.root}
                  >
                    Start Freelancing
                  </Button>
                </Stack>
              </>
            )}
          </Stack>
          <CardMedia
            component="img"
            image="/assets/background/dashboard/welcome.png"
            alt="Welcome"
            sx={{ width: '220px', display: { xs: 'none', md: 'block' } }}
          />
        </Stack>
      </Card>
    </Box>
  );
}

import { m } from 'framer-motion';

// @mui
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// components
import { varFade, MotionViewport } from 'src/components/animate';
import Iconify from 'src/components/iconify';

const works1 = [
  'Website Design',
  'Mobile Apps',
  'Website Design',
  'Mobile Apps',
  'Android Apps',
  'iPhone Apps',
  'Graphic Design',
  'Logo Design',
  'Public Relations',
  'Logistics',
  'Proofreading',
  'Translation',
];
const works2 = [
  'Research',
  'Research Writing',
  'Article Writing',
  'Web Scraping',
  'HTML',
  'CSS',
  'HTML 5',
  'Javascript',
  'Data Processing',
  'Python',
  'Wordpress',
  'Web Search',
];
const works3 = [
  'Finance',
  'Legal',
  'Linux',
  'Manufacturing',
  'Data Entry',
  'Content Writing',
  'Marketing',
  'Excel',
  'Ghostwriting',
  'Copywriting',
  'Accounting',
  'MySQL',
];
const works4 = [
  'C++ Programming',
  'Banner Design',
  'Illustration',
  'Link Building',
  'C# Programming',
  'PHP',
  '3D Modelling',
  'Photoshop',
  'Technical Writing',
  'Blogging',
  'Internet Marketing',
];
// ----------------------------------------------------------------------

export default function HomeFive() {
  const renderDescription = (
    <Grid container>
      <Grid item xs={12} md={4}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" pr={2} sx={{ color: 'primary.main' }}>
            Get work done in over 2700 different categories
          </Typography>
        </m.div>
      </Grid>
      <Grid item xs={6} md={2}>
        <m.div variants={varFade().inDown}>
          {works1.map((work, i) => (
            <Typography key={i} variant="h6" mt={1}>
              {work}
            </Typography>
          ))}
        </m.div>
      </Grid>
      <Grid item xs={6} md={2}>
        <m.div variants={varFade().inDown}>
          {works2.map((work, i) => (
            <Typography key={i} variant="h6" mt={1}>
              {work}
            </Typography>
          ))}
        </m.div>
      </Grid>
      <Grid item xs={6} md={2}>
        <m.div variants={varFade().inDown}>
          {works3.map((work, i) => (
            <Typography key={i} variant="h6" mt={1}>
              {work}
            </Typography>
          ))}
        </m.div>
      </Grid>
      <Grid item xs={6} md={2}>
        <m.div variants={varFade().inDown}>
          {works4.map((work, i) => (
            <Typography key={i} variant="h6" mt={1}>
              {work}
            </Typography>
          ))}
          <Stack direction="row" justifyContent="flex-start" alignItems="center">
            <Button
              variant="text"
              size="large"
              sx={{ color: 'primary.main', mt: 0.2 }}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            >
              View more
            </Button>
          </Stack>
        </m.div>
      </Grid>
    </Grid>
  );
  const renderDescriptionWithoutJS = (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Typography variant="h2" pr={2} sx={{ color: 'primary.main' }}>
          Get work done in over 2700 different categories
        </Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        {works1.map((work, i) => (
          <Typography key={i} variant="h6" mt={1}>
            {work}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={6} md={2}>
        {works2.map((work, i) => (
          <Typography key={i} variant="h6" mt={1}>
            {work}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={6} md={2}>
        {works3.map((work, i) => (
          <Typography key={i} variant="h6" mt={1}>
            {work}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={6} md={2}>
        {works4.map((work, i) => (
          <Typography key={i} variant="h6" mt={1}>
            {work}
          </Typography>
        ))}
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <Button
            variant="text"
            size="large"
            sx={{ color: 'primary.main', mt: 0.2 }}
            endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          >
            View more
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: 'relative',
        py: { xs: 10, md: 15 },
        mt: '8vh',
      }}
    >
      {typeof Storage !== 'undefined' ? renderDescription : renderDescriptionWithoutJS}
    </Container>
  );
}

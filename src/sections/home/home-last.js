import { m } from 'framer-motion';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// components
import { varFade, MotionViewport } from 'src/components/animate';
// ----------------------------------------------------------------------

const lancer = [
  'Categories',
  'Projects',
  'Contests',
  'Freelancers',
  'Enterprise',
  'Membership',
  'Preferred Freelancer Program',
  'Project Management',
  'Local Jobs',
  'Photo Anywhere',
  'Showcase',
  'API for Developers',
  'Get Verified',
  'Desktop App',
];

const about = [
  'About us',
  'How it Works',
  'Security',
  'Investor',
  'Sitemap',
  'Stories',
  'News',
  'Team',
  'Awards',
  'Press Releases',
  'Careers',
];

const terms = [
  'Privacy Policy',
  'Terms and Conditions',
  'Copyright Policy',
  'Code of Conduct',
  'Fees and Charges',
];

const partners = ['Escrow.com', 'Loadshift', 'Warrior Forum'];

export default function HomeLast() {
  const renderDescription = (
    <Grid container>
      <Grid item xs={12} md={2}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h4" sx={{ color: 'primary.main' }}>
            Cryptolancer
          </Typography>
          <Typography variant="h6" mt={1}>
            US(International)/
            <br />
            English
          </Typography>
          <Typography variant="h6" mt={1}>
            Help & Support
          </Typography>
          <Typography variant="h6" mt={1}>
            Accessibility
          </Typography>
        </m.div>
      </Grid>
      <Grid item md={2}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h6" mt={1} mb={1}>
            Cryptolancer
          </Typography>
          {lancer.map((sub, i) => (
            <Typography key={i} variant="subtitle1" mt={1}>
              {sub}
            </Typography>
          ))}
        </m.div>
      </Grid>
      <Grid item md={2}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h6" mt={1} mb={1}>
            About
          </Typography>
          {about.map((sub, i) => (
            <Typography key={i} variant="subtitle1" mt={1}>
              {sub}
            </Typography>
          ))}
        </m.div>
      </Grid>
      <Grid item md={2}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h6" mt={1} mb={1}>
            Terms
          </Typography>
          {terms.map((sub, i) => (
            <Typography key={i} variant="subtitle1" mt={1}>
              {sub}
            </Typography>
          ))}
        </m.div>
      </Grid>
      <Grid item md={2}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h6" mt={1} mb={1}>
            Partners
          </Typography>
          {partners.map((sub, i) => (
            <Typography key={i} variant="subtitle1" mt={1}>
              {sub}
            </Typography>
          ))}
        </m.div>
      </Grid>
      <Grid item md={2}>
        <m.div variants={varFade().inDown}>
          <Typography variant="h6" mt={1}>
            Apps
          </Typography>
          <Box component={m.img} mt={5} alt="apple" src="/assets/images/home/app-store.svg" />
          <Box component={m.img} mt={2} alt="apple" src="/assets/images/home/google-play.svg" />
        </m.div>
      </Grid>
    </Grid>
  );
  const renderDescriptionNoJS = (
    <Grid container>
      <Grid item xs={12} md={2}>
        <Typography variant="h4" sx={{ color: 'primary.main' }}>
          Cryptolancer
        </Typography>
        <Typography variant="h6" mt={1}>
          US(International)/
          <br />
          English
        </Typography>
        <Typography variant="h6" mt={1}>
          Help & Support
        </Typography>
        <Typography variant="h6" mt={1}>
          Accessibility
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Typography variant="h6" mt={1} mb={1}>
          Cryptolancer
        </Typography>
        {lancer.map((sub, i) => (
          <Typography key={i} variant="subtitle1" mt={1}>
            {sub}
          </Typography>
        ))}
      </Grid>
      <Grid item md={2}>
        <Typography variant="h6" mt={1} mb={1}>
          About
        </Typography>
        {about.map((sub, i) => (
          <Typography key={i} variant="subtitle1" mt={1}>
            {sub}
          </Typography>
        ))}
      </Grid>
      <Grid item md={2}>
        <Typography variant="h6" mt={1} mb={1}>
          Terms
        </Typography>
        {terms.map((sub, i) => (
          <Typography key={i} variant="subtitle1" mt={1}>
            {sub}
          </Typography>
        ))}
      </Grid>
      <Grid item md={2}>
        <Typography variant="h6" mt={1} mb={1}>
          Partners
        </Typography>
        {partners.map((sub, i) => (
          <Typography key={i} variant="subtitle1" mt={1}>
            {sub}
          </Typography>
        ))}
      </Grid>
      <Grid item md={2}>
        <Typography variant="h6" mt={1}>
          Apps
        </Typography>
        <Box component={m.img} mt={5} alt="apple" src="/assets/images/home/app-store.svg" />
        <Box component={m.img} mt={2} alt="apple" src="/assets/images/home/google-play.svg" />
      </Grid>
    </Grid>
  );

  return (
    <>
      <Divider sx={{ mt: { xs: 5, md: 10 } }} />
      <Container
        component={MotionViewport}
        sx={{
          position: 'relative',
          py: { xs: 5, md: 7.5 },
        }}
      >
        {typeof Storage !== 'undefined' ? renderDescription : renderDescriptionNoJS}
      </Container>
    </>
  );
}

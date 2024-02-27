import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_postjob.png',
    title: 'Post a job',
    description:
      'It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.',
  },
  {
    icon: ' /assets/icons/home/ic_help.png',
    title: 'We’re here to help',
    description:
      'Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.',
  },
  {
    icon: ' /assets/icons/home/ic_choose.png',
    title: 'Choose freelancers',
    description:
      'No job is too big or too small. We have got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!',
  },
];

// ----------------------------------------------------------------------

export default function HomeOne() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        {typeof Storage !== 'undefined' ? (
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">Need something done?</Typography>
          </m.div>
        ) : (
          <Typography variant="h2">Need something done?</Typography>
        )}
      </Stack>

      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {CARDS.map((card, index) =>
          typeof Storage !== 'undefined' ? (
            <m.div variants={varFade().inUp} key={card.title}>
              <Card
                sx={{
                  textAlign: 'center',
                  boxShadow: { md: 'none' },
                  bgcolor: 'background.default',
                  p: (theme) => theme.spacing(10, 5),
                  ...(index === 1 && {
                    boxShadow: (theme) => ({
                      md: `-40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.16)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <Box
                  component="img"
                  src={card.icon}
                  alt={card.title}
                  sx={{ mx: 'auto', width: 200, height: 200 }}
                />

                <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                  {card.title}
                </Typography>

                <Typography align="justify" sx={{ color: 'text.secondary' }}>
                  {card.description}
                </Typography>
              </Card>
            </m.div>
          ) : (
            <Card
              key={card.title}
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(10, 5),
                ...(index === 1 && {
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
              }}
            >
              <Box
                component="img"
                src={card.icon}
                alt={card.title}
                sx={{ mx: 'auto', width: 200, height: 200 }}
              />

              <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                {card.title}
              </Typography>

              <Typography align="justify" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </Card>
          )
        )}
      </Box>
    </Container>
  );
}

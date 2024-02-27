import { m } from 'framer-motion';
// @mui
// import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const imgData = [
  {
    img: '/assets/images/home/samples/01.png',
    title: '01',
    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/images/home/samples/02.png',
    title: '02',
    rows: 1,
    cols: 2,
  },
  {
    img: '/assets/images/home/samples/03.png',
    title: '03',
  },
  {
    img: '/assets/images/home/samples/04.png',
    title: '04',
  },
  {
    img: '/assets/images/home/samples/05.png',
    title: '05',
  },
  {
    img: '/assets/images/home/samples/03.png',
    title: '06',
  },
  {
    img: '/assets/images/home/samples/04.png',
    title: '07',
    rows: 1,
    cols: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function HomeFour() {
  const renderDescription = (
    <Stack alignItems="center" spacing={3}>
      {typeof Storage !== 'undefined' ? (
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ color: 'primary.main' }}>
            Make it Real with Cryptolancer.
          </Typography>
        </m.div>
      ) : (
        <Typography variant="h2" sx={{ color: 'primary.main' }}>
          Make it Real with Cryptolancer.
        </Typography>
      )}

      {typeof Storage !== 'undefined' ? (
        <m.div variants={varFade().inUp}>
          <Typography variant="subtitle1" sx={{ color: 'grey.500' }}>
            Get some inspiration from 1800+ skills
          </Typography>
        </m.div>
      ) : (
        <Typography variant="subtitle1" sx={{ color: 'grey.500' }}>
          Get some inspiration from 1800+ skills
        </Typography>
      )}
    </Stack>
  );

  const renderImg =
    typeof Storage !== 'undefined' ? (
      <m.div variants={varFade().inUp}>
        <Box py={5}>
          <ImageList variant="quilted" cols={4}>
            {imgData.map((item, i) => (
              <ImageListItem
                key={i}
                cols={item.cols || 1}
                rows={item.rows || 1}
                component={RouterLink}
                href={paths.dashboard.root}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Button
          variant="text"
          sx={{ color: 'primary.main' }}
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View more Projects
        </Button>
      </m.div>
    ) : (
      <>
        <Box py={5}>
          <ImageList variant="quilted" cols={4}>
            {imgData.map((item, i) => (
              <ImageListItem
                key={i}
                cols={item.cols || 1}
                rows={item.rows || 1}
                component={RouterLink}
                href={paths.dashboard.root}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Button
          variant="text"
          sx={{ color: 'primary.main' }}
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View more Projects
        </Button>
      </>
    );

  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'grey.900',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Container component={MotionViewport}>
        {renderDescription}
        {renderImg}
      </Container>
    </Box>
  );
}

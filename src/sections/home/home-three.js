import { m } from 'framer-motion';
// @mui
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// Carousel
import Carousel, { CarouselDots, useCarousel } from 'src/components/carousel';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient } from 'src/theme/css';
// components
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const blogs = [
  {
    title: 'Tim and Dan Joo, Co-Founders',
    quote:
      "When you want to create a business bigger than yourself, you need a lot of help. That's what we do.",
    imgsrc: '/assets/images/home/founders.webp',
  },
  {
    title: 'Kay Kim, Co-Founder',
    quote:
      "It's extremely exciting that we have freelancers from all over the world-it broadens the talent pool. One of the best things is that while we're sleeping, someone's working.",
    imgsrc: '/assets/images/home/founders2.webp',
  },
  {
    title: 'Caitlin Tormey, Chief Commercial Ofiicer',
    quote:
      "We've used for Shopify web development, graphic design, and backend web development. Working makes my job a little easier every day.",
    imgsrc: '/assets/images/home/founders3.webp',
  },
];

export default function HomeThree() {
  const theme = useTheme();

  const upMd = useResponsive('up', 'md');

  const carousel = useCarousel({
    adaptiveHeight: true,
    speed: 800,
    autoplay: true,
    ...CarouselDots({
      sx: {
        top: 65,
        left: '50vw',
        position: 'absolute',
        color: 'primary.light',
      },
    }),
  });

  return (
    <Box
      sx={{
        height: 560,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {blogs.map((blog, index) => (
          <Box
            key={index}
            sx={{
              minHeight: 560,
              overflow: 'hidden',
              position: 'relative',
              ...bgGradient({
                startColor: `${theme.palette.grey[900]} 25%`,
                endColor: alpha(theme.palette.grey[900], 0),
                imgUrl: '/assets/background/overlay_4.jpg',
              }),
              ...(upMd && {
                ...bgGradient({
                  color: alpha(theme.palette.background.default, 0.8),
                  imgUrl: '/assets/background/overlay_4.jpg',
                }),
              }),
            }}
          >
            <Container component={MotionViewport}>
              <Grid container>
                <Grid xs={12} md={7}>
                  <Box
                    sx={{ textAlign: { xs: 'center', md: 'unset' }, mt: { xs: 10, md: 20 }, pr: 5 }}
                  >
                    <m.div variants={varFade().inUp}>
                      <Typography
                        component="div"
                        variant="overline"
                        sx={{ color: 'text.disabled' }}
                      >
                        {blog.title}
                      </Typography>
                    </m.div>
                    <m.div variants={varFade().inUp}>
                      <Typography
                        variant="h4"
                        textAlign="left"
                        sx={{
                          mt: 3,
                          mb: 5,
                          ...textGradient(
                            `200deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 100%`
                          ),
                        }}
                      >
                        <i>
                          <q>{blog.quote}</q>
                        </i>
                      </Typography>
                    </m.div>
                  </Box>
                </Grid>
                {upMd && (
                  <Grid md={5}>
                    <Box
                      component={m.img}
                      src={blog.imgsrc}
                      variants={varFade().in}
                      sx={{
                        height: 1,
                        width: 0.5,
                        objectFit: 'cover',
                        position: 'absolute',
                        boxShadow: `-80px 80px 80px ${
                          theme.palette.mode === 'light'
                            ? alpha(theme.palette.grey[500], 0.48)
                            : alpha(theme.palette.common.black, 0.24)
                        }`,
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Container>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

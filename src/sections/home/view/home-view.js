'use client';

import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeHero from '../home-hero';
import HomeOne from '../home-one';
import HomeTwo from '../home-two';
import HomeThree from '../home-three';
import HomeFour from '../home-four';
import HomeFive from '../home-five';
import HomeSix from '../home-six';
import HomeSeven from '../home-seven';
import HomeEight from '../home-eight';
import HomeLast from '../home-last';

// ----------------------------------------------------------------------

const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeOne />

        <HomeTwo />

        {typeof Storage !== 'undefined' && (
          <Box sx={{ position: 'relative' }}>
            <StyledPolygon />
            <HomeThree />
            <StyledPolygon anchor="bottom" />
          </Box>
        )}

        <HomeFour />

        <HomeFive />

        <HomeSix />

        <HomeSeven />

        <HomeEight />

        <HomeLast />
      </Box>
    </MainLayout>
  );
}

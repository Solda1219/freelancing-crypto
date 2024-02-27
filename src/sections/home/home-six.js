import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeSix() {
  const renderDescription = (
    <Stack
      spacing={3}
      sx={{
        maxWidth: 600,
        mx: 'auto',
        zIndex: { md: 99 },
        position: { md: 'absolute' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography
          variant="h2"
          sx={{
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          Power your organisation&apos;s
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: 'primary.main',
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          competitive advantage
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          with Cryptolancer
        </Typography>
        <Typography
          variant="h5"
          mt={5}
          sx={{
            color: 'primary.main',
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `2px 2px 8px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          Cryptolancer Enterprise
        </Typography>
        <Typography
          variant="subtitle1"
          mt={2}
          mb={1.5}
          sx={{
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `2px 2px 8px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          Company budget? Get more done for less. Use our workforce of millions to help your
          business achieve more.
        </Typography>
        <Button
          size="medium"
          target="_blank"
          rel="noopener"
          href="#"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View more
        </Button>
        <Typography
          variant="h5"
          mt={5}
          sx={{
            color: 'primary.main',
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `2px 2px 8px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          Cryptolancer API
        </Typography>
        <Typography
          variant="subtitle1"
          mt={2}
          mb={1.5}
          sx={{
            textShadow: (theme) =>
              theme.palette.mode === 'light'
                ? 'unset'
                : `2px 2px 8px ${alpha(theme.palette.grey[800], 0.48)}`,
          }}
        >
          Millions of professionals on demand. Why hire people when you can simply integrate our
          talented cloud workforce instead?
        </Typography>
        <Button
          size="medium"
          target="_blank"
          rel="noopener"
          href="#"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View more
        </Button>
      </m.div>
    </Stack>
  );
  const renderDescriptionNoJS = (
    <Stack
      spacing={1}
      sx={{
        mx: 'auto',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography variant="h2">Power your organisation&apos;s</Typography>
      <Typography
        variant="h2"
        sx={{
          color: 'primary.main',
        }}
      >
        competitive advantage
      </Typography>
      <Typography variant="h2">with Cryptolancer</Typography>
      <Typography
        variant="h5"
        mt={5}
        sx={{
          color: 'primary.main',
          textShadow: (theme) =>
            theme.palette.mode === 'light'
              ? 'unset'
              : `2px 2px 8px ${alpha(theme.palette.grey[800], 0.48)}`,
        }}
      >
        Cryptolancer Enterprise
      </Typography>
      <Typography
        variant="subtitle1"
        mt={2}
        mb={1.5}
        sx={{
          textShadow: (theme) =>
            theme.palette.mode === 'light'
              ? 'unset'
              : `2px 2px 8px ${alpha(theme.palette.grey[800], 0.48)}`,
        }}
      >
        Company budget? Get more done for less. Use our workforce of millions to help your business
        achieve more.
      </Typography>
      <Button
        size="medium"
        target="_blank"
        rel="noopener"
        href="#"
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
      >
        View more
      </Button>
      <Typography
        variant="h5"
        mt={5}
        sx={{
          color: 'primary.main',
          textShadow: (theme) =>
            theme.palette.mode === 'light'
              ? 'unset'
              : `2px 2px 8px ${alpha(theme.palette.grey[800], 0.48)}`,
        }}
      >
        Cryptolancer API
      </Typography>
      <Typography
        variant="subtitle1"
        mt={2}
        mb={1.5}
        sx={{
          textShadow: (theme) =>
            theme.palette.mode === 'light'
              ? 'unset'
              : `2px 2px 8px ${alpha(theme.palette.grey[800], 0.48)}`,
        }}
      >
        Millions of professionals on demand. Why hire people when you can simply integrate our
        talented cloud workforce instead?
      </Typography>
      <Button
        size="medium"
        target="_blank"
        rel="noopener"
        href="#"
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
      >
        View more
      </Button>
    </Stack>
  );

  const renderContent = (
    <Box component={m.div} variants={varFade().inUp} sx={{ position: 'relative' }}>
      {[...Array(10)].map((_, index) => (
        <Box
          key={index}
          component={m.div}
          variants={varFade().inUp}
          sx={{
            top: 0,
            left: 250,
            position: 'absolute',
            ...(index === 0 && { zIndex: 8 }),
            ...(index === 9 && { position: 'relative', zIndex: 9 }),
          }}
        >
          <Image
            disabledEffect
            alt={`clean-${index + 1}`}
            src={`/assets/images/home/six/page_${index + 1}.webp`}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 10 },
        }}
      >
        {typeof Storage !== 'undefined' ? renderDescription : renderDescriptionNoJS}
        {typeof Storage !== 'undefined' && renderContent}
      </Container>
    </Box>
  );
}

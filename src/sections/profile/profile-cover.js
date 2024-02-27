import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme, alpha, styled } from '@mui/material/styles';

import PaidIcon from '@mui/icons-material/Paid';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
// theme
import { bgGradient } from 'src/theme/css';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'secondary',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: 'primary',
  },
}));

// ----------------------------------------------------------------------

export default function ProfileCover({
  name,
  title,
  avatarUrl,
  coverUrl,
  isFreelancer,
  freelancerReview,
  freelancerIncome,
  freelancerCorate,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.primary.darker, 0.8),
          imgUrl: coverUrl,
        }),
        height: 1,
        color: 'common.white',
      }}
    >
      <Stack
        bgcolor={theme.palette.mode === 'light' ? '#FFFFFF' : '#212b36'}
        width="100%"
        pt={0.5}
        sx={{
          left: { md: 150 },
          bottom: { md: 43 },
          zIndex: { md: 10 },
          position: 'absolute',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Marquee>
          {isFreelancer ? (
            <Stack direction="row" spacing={5}>
              <Typography color="primary" pl={5}>
                <b>{freelancerReview.length}</b>
              </Typography>
              <Typography color={theme.palette.mode === 'light' ? 'black' : 'white'}>
                Jobs Completed
              </Typography>
              <Typography color="primary" pl={5}>
                <b>100%</b>
              </Typography>
              <Typography color={theme.palette.mode === 'light' ? 'black' : 'white'}>
                On Budget
              </Typography>
              <Typography color="primary" pl={5}>
                <b>N/A</b>
              </Typography>
              <Typography color={theme.palette.mode === 'light' ? 'black' : 'white'}>
                Repeat Hire Rate
              </Typography>
              <Typography color="primary" pl={5}>
                <b>100%</b>
              </Typography>
              <Typography color={theme.palette.mode === 'light' ? 'black' : 'white'}>
                On Time
              </Typography>
            </Stack>
          ) : (
            <Stack direction="row" spacing={5}>
              <Typography color={theme.palette.mode === 'light' ? 'black' : 'white'}>
                Total projects
              </Typography>
              <Typography color="primary" pl={5}>
                <b>403</b>
              </Typography>
              <Typography color={theme.palette.mode === 'light' ? 'black' : 'white'}>
                Past projects
              </Typography>
              <Typography color="primary" pl={5}>
                <b>149</b>
              </Typography>
              <Typography color={theme.palette.mode === 'light' ? 'black' : 'white'}>
                Active projects
              </Typography>
              <Typography color="primary" pl={5}>
                <b>4</b>
              </Typography>
              <Typography color={theme.palette.mode === 'light' ? 'black' : 'white'}>
                Open projects
              </Typography>
              <Typography color="primary" pl={5}>
                <b>4</b>
              </Typography>
            </Stack>
          )}
        </Marquee>
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          left: { md: 24 },
          bottom: { md: 24 },
          zIndex: { md: 10 },
          pt: { xs: 6, md: 1 },
          position: { md: 'absolute' },
        }}
        alignItems="center"
      >
        <Avatar
          src={avatarUrl}
          alt={name}
          sx={{
            mx: 'auto',
            width: { xs: 75, md: 170 },
            height: { xs: 75, md: 170 },
            border: `solid 2px ${theme.palette.common.white}`,
            bgcolor: 'primary.lighter',
          }}
        >
          <Typography fontSize={{ xs: 20, md: 50 }}>
            {`${name.split(' ')[0][0].toUpperCase()}${
              name.split(' ')[1] !== undefined ? name.split(' ')[1][0].toUpperCase() : ''
            }`}
          </Typography>
        </Avatar>
        <Stack direction="column" spacing={0.5}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            alignItems="center"
          >
            <ListItemText
              sx={{
                ml: { md: 3 },
                textAlign: { xs: 'center', md: 'unset' },
                mb: { xs: 0.5, md: 0 },
                mt: -0.5,
              }}
              primary={name}
              secondary={title}
              primaryTypographyProps={{
                typography: 'h4',
              }}
              secondaryTypographyProps={{
                mt: 0.5,
                color: 'inherit',
                component: 'span',
                typography: 'body2',
                sx: { opacity: 0.68 },
              }}
            />
            <Divider orientation="vertical" flexItem sx={{ ml: 2, mr: 2 }} />
            <Stack direction="column" alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Stack direction="row" alignItems="center">
                <Rating
                  value={
                    freelancerReview.length
                      ? freelancerReview.reduce((total, review) => total + review.rating, 0) /
                        freelancerReview.length
                      : 0
                  }
                  precision={0.1}
                  readOnly
                />
                <Typography ml={2}>{`${
                  freelancerReview.length
                    ? (
                        freelancerReview.reduce((total, review) => total + review.rating, 0) /
                        freelancerReview.length
                      ).toFixed(1)
                    : 0
                } (${freelancerReview.length} reviews)`}</Typography>
              </Stack>
              <Stack direction="row" mt={1} alignItems="center">
                <PaidIcon />
                <Box width={100} ml={1}>
                  <BorderLinearProgress variant="determinate" value={freelancerIncome * 10} />
                </Box>
                <Typography ml={1} mr={3}>
                  {freelancerIncome}
                </Typography>
                {isFreelancer && <GroupWorkIcon />}
                {isFreelancer && (
                  <Box width={100} ml={1}>
                    <BorderLinearProgress variant="determinate" value={freelancerCorate} />
                  </Box>
                )}
                {isFreelancer && <Typography ml={1}>{`${freelancerCorate}%`}</Typography>}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

ProfileCover.propTypes = {
  avatarUrl: PropTypes.string,
  coverUrl: PropTypes.string,
  name: PropTypes.string,
};

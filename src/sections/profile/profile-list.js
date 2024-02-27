import Link from 'next/link';
// mui
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

import RateReviewIcon from '@mui/icons-material/RateReview';
import PaidIcon from '@mui/icons-material/Paid';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// routes
import { paths } from 'src/routes/paths';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function ProfileList({ profile }) {
  return (
    <Card sx={{ postion: 'relative' }}>
      <CardActionArea component={Link} href={paths.dashboard.browseprofiles.details(profile.id)}>
        <Stack p={3} spacing={2}>
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={2}>
            {profile.online ? (
              <StyledBadge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                size="large"
              >
                <Avatar
                  alt={profile.name}
                  src={profile.avatar}
                  variant="rounded"
                  sx={{ width: 82, height: 82 }}
                >
                  {`${profile.name.split(' ')[0][0].toUpperCase()}${
                    profile.name.split(' ')[1] !== undefined
                      ? profile.name.split(' ')[1][0].toUpperCase()
                      : ''
                  }`}
                </Avatar>
              </StyledBadge>
            ) : (
              <Badge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color="error"
                size="large"
              >
                <Avatar
                  alt={profile.name}
                  src={profile.avatar}
                  variant="rounded"
                  sx={{ width: 82, height: 82 }}
                >
                  {`${profile.name.split(' ')[0][0].toUpperCase()}${
                    profile.name.split(' ')[1] !== undefined
                      ? profile.name.split(' ')[1][0].toUpperCase()
                      : ''
                  }`}
                </Avatar>
              </Badge>
            )}

            <Stack direction="column" alignItems={{ xs: 'center', md: 'flex-start' }} spacing={0.5}>
              <Typography variant="h4">{profile.name}</Typography>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Rating
                  value={
                    profile.reviews.length
                      ? profile.reviews.reduce((total, review) => total + review.rating, 0) /
                        profile.reviews.length
                      : 0
                  }
                  precision={0.1}
                  readOnly
                />
                <Typography mr={1}>
                  {profile.reviews.length
                    ? (
                        profile.reviews.reduce((total, review) => total + review.rating, 0) /
                        profile.reviews.length
                      ).toFixed(1)
                    : 0}
                </Typography>
                <RateReviewIcon color={profile.reviews.length ? 'primary' : 'disabled'} />
                <Typography mr={1}>{profile.reviews.length}</Typography>
                <PaidIcon color="primary" />
                <Typography mr={1}>{profile.earning.toFixed(1)}</Typography>
                <DataSaverOffIcon color="primary" />
                <Typography mr={1}>{`${profile.corate}%`}</Typography>
                <LocationOnIcon color="primary" sx={{ display: { xs: 'none', md: 'block' } }} />
                <Typography display={{ xs: 'none', md: 'block' }}>{profile.country}</Typography>
              </Stack>
              <Typography>
                <b>{profile.title}</b>
              </Typography>
            </Stack>
          </Stack>
          <Typography maxHeight={70} overflow="hidden">
            {profile.intro}
          </Typography>
          <Stack direction="row" spacing={0.5}>
            {profile.skills.slice(0, 3).map((skill, index) => (
              <Typography
                key={index}
                sx={{ borderStyle: 'solid', borderRadius: 2, borderWidth: 1, px: 1 }}
              >
                {skill}
              </Typography>
            ))}
          </Stack>
        </Stack>
        <Stack position="absolute" top={30} right={30}>
          <Typography variant="h5" align="right">{`$ ${profile.salary} USD`}</Typography>
          <Typography color="text.disabled" align="right" ml={1}>
            per hour
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

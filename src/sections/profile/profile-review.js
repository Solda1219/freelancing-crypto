'use client';

import Moment from 'react-moment';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ProfileReview({ reviews }) {
  // const _mockFollowed = reviews.slice(4, 8).map((i) => i.id);

  // const [followed, setFollowed] = useState(_mockFollowed);

  // const handleClick = useCallback(
  //   (item) => {
  //     const selected = followed.includes(item)
  //       ? followed.filter((value) => value !== item)
  //       : [...followed, item];

  //     setFollowed(selected);
  //   },
  //   [followed]
  // );

  return (
    <Box
      gap={3}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
    >
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </Box>
  );
}

// ProfileReview.propTypes = {
//   followers: PropTypes.array,
// };

// ----------------------------------------------------------------------

function ReviewItem({ review }) {
  // const { name, country, avatarUrl } = follower;

  return (
    <Card
      sx={{ pt: 3, pr: 3, pl: 3, pb: 2 }}
      // sx={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   p: (theme) => theme.spacing(3, 2, 3, 3),
      // }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Rating value={review.client.rating} precision={0.1} readOnly />
          <Typography ml={1}>{review.client.rating.toFixed(1)}</Typography>
        </Stack>
        <Typography>
          <b>{`${review.project.budget.toFixed(2)} ${review.project.currency}`}</b>
        </Typography>
      </Stack>
      <Typography variant="h5" mt={1} mb={1} noWrap>
        {review.project.title}
      </Typography>
      <Stack direction="row">
        {review.project.skills.map((skill, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            color="text.disabled"
            borderColor="text.disabled"
            border={1}
            borderRadius={2}
            mr={0.5}
            pl={0.5}
            pr={0.5}
          >
            {skill}
          </Typography>
        ))}
      </Stack>
      <Box height={50}>
        <Typography mt={1} maxHeight={50} overflow="hidden">
          {review.client.comment}
        </Typography>
      </Box>
      <Stack direction="row" mt={2}>
        <Avatar
          alt={review.client.name}
          src={review.client.avatar}
          sx={{ width: 48, height: 48, mr: 2 }}
        />
        <ListItemText
          primary={review.client.name}
          secondary={
            <>
              <Iconify icon="mingcute:location-fill" width={16} sx={{ flexShrink: 0, mr: 0.5 }} />
              {review.client.country},
              <Moment format="MM/DD/YYYY" style={{ marginLeft: '10px' }}>
                {review.project.date}
              </Moment>
            </>
          }
          primaryTypographyProps={{
            noWrap: true,
            typography: 'subtitle2',
          }}
          secondaryTypographyProps={{
            mt: 0.5,
            noWrap: true,
            display: 'flex',
            component: 'span',
            alignItems: 'center',
            typography: 'caption',
            color: 'text.disabled',
          }}
        />
      </Stack>
    </Card>
  );
}

// ReviewItem.propTypes = {
//   follower: PropTypes.object,
//   onSelected: PropTypes.func,
//   selected: PropTypes.bool,
// };

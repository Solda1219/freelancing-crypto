// @mui
// import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
// import ListItemText from '@mui/material/ListItemText';
import RateReviewIcon from '@mui/icons-material/RateReview';

// ----------------------------------------------------------------------

export default function JobProposals({ bids, currency, isHourly }) {
  return (
    <Box gap={3} display="grid" gridTemplateColumns="repeat(1, 1fr)">
      {bids.length ? (
        bids.map((bid, index) => (
          <Stack component={Card} spacing={2} key={index} sx={{ p: 3 }}>
            <Grid container spacing={{ xs: 1, md: 2 }}>
              <Grid item xs={12} md={9}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    alt={bid.freelancer.name}
                    src={bid.freelancer.avatarUrl}
                    sx={{ width: 80, height: 80 }}
                  />
                  <Stack>
                    <Typography variant="h5" color="primary.main" mb={0.5}>
                      <b>{bid.freelancer.name}</b>
                    </Typography>
                    <Stack direction="row" alignItems="center">
                      <Rating
                        value={
                          bid.freelancer.reviews.length
                            ? bid.freelancer.reviews.reduce(
                                (total, review) => total + review.rating,
                                0
                              ) / bid.freelancer.reviews.length
                            : 0
                        }
                        precision={0.1}
                        readOnly
                      />
                      <Typography ml={0.5} mr={2}>
                        {bid.freelancer.reviews.length
                          ? `${(
                              bid.freelancer.reviews.reduce(
                                (total, review) => total + review.rating,
                                0
                              ) / bid.freelancer.reviews.length
                            ).toFixed(1)}`
                          : 'No review'}
                      </Typography>
                      <RateReviewIcon
                        fontSize="small"
                        color={bid.freelancer.reviews.length ? 'primary' : 'disabled'}
                      />
                      <Typography ml={0.5}>{bid.freelancer.reviews.length}</Typography>
                    </Stack>
                    <Typography>
                      <b>{bid.freelancer.title}</b>
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stack direction={{ xs: 'row', md: 'column' }} alignItems="flex-end">
                  <Typography variant="h5">
                    <b>
                      {isHourly
                        ? `${bid.budget.toFixed(2)} ${currency} per hour`
                        : `${bid.budget.toFixed(2)} ${currency}`}
                    </b>
                  </Typography>
                  <Typography ml={2} color="text.disabled">{`in ${bid.deadline} days`}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Typography>{bid.bidState}</Typography>
              </Grid>
            </Grid>
          </Stack>
        ))
      ) : (
        <Typography variant="h4" align="center" color="text.disabled" mt={5}>
          No proposals yet
        </Typography>
      )}
    </Box>
  );
}

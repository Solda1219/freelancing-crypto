import PropTypes from 'prop-types';
import Link from 'next/link';
// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import ChatIcon from '@mui/icons-material/Chat';
// routes
import { paths } from 'src/routes/paths';
// utils
import getDeltaTime from 'src/utils/getdeltatime';
import getBidAverage from 'src/utils/getBidAverage';

// ----------------------------------------------------------------------

export default function JobItem({ job, onView, onEdit, onDelete, cardView = true }) {
  const {
    id,
    title,
    content,
    priceLow,
    priceHigh,
    currency,
    skills,
    hourly,
    date,
    client,
    bids,
    feature,
  } = job;

  const renderCardContent = (
    <CardActionArea component={Link} href={paths.dashboard.joblisting.details(id)}>
      <Stack sx={{ p: 3 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" mb={2}>
          <Stack direction="column">
            <Typography variant="h6" color="primary.main">
              <b>{title}</b>
            </Typography>
            <Stack direction="row" mt={2} alignItems="center" spacing={1}>
              <Typography variant="body2" color="text.disabled">
                {hourly
                  ? `Budget ${priceLow} - ${priceHigh} ${currency} per hour`
                  : `Budget ${priceLow} - ${priceHigh} ${currency}`}
              </Typography>
              {feature.includes('Featured') && (
                <Typography
                  variant="caption"
                  color="white"
                  bgcolor="orange"
                  borderRadius={2}
                  px={1}
                >
                  Featured
                </Typography>
              )}
              {feature.includes('NDA') && (
                <Typography
                  variant="caption"
                  color="white"
                  bgcolor="darkblue"
                  borderRadius={2}
                  px={1}
                >
                  NDA
                </Typography>
              )}
              {feature.includes('Recruiter') && (
                <Typography
                  variant="caption"
                  color="white"
                  bgcolor="purple"
                  borderRadius={2}
                  px={1}
                >
                  Recruiter
                </Typography>
              )}
              {feature.includes('IP Agreement') && (
                <Typography variant="caption" color="white" bgcolor="red" borderRadius={2} px={1}>
                  IP Agreement
                </Typography>
              )}
            </Stack>
          </Stack>
          {bids.length ? (
            <Stack
              direction={{ xs: 'row', md: 'column' }}
              alignItems={{ xs: 'center', md: 'flex-end' }}
              mt={1}
            >
              <Stack direction="row" alignItems="center">
                <Typography mr={2}>{`${bids.length} ${
                  bids.length > 1 ? 'bids' : 'bid'
                }`}</Typography>
                {feature.includes('Sealed') ? (
                  <Typography
                    variant="caption"
                    color="black"
                    bgcolor="cyan"
                    borderRadius={2}
                    px={1}
                  >
                    Sealed
                  </Typography>
                ) : (
                  <Typography>
                    <b>
                      {hourly
                        ? `${getBidAverage(bids)} ${currency} per hour`
                        : `${getBidAverage(bids)} ${currency}`}
                    </b>
                  </Typography>
                )}
              </Stack>
              {!feature.includes('Sealed') && (
                <Typography variant="caption" ml={1}>
                  average bid
                </Typography>
              )}
            </Stack>
          ) : (
            <Typography mt={1}>Be First Bid</Typography>
          )}
        </Stack>

        <Typography align="justify" maxHeight={70} overflow="hidden">
          {content}
        </Typography>
        <Stack direction="row" my={2}>
          {skills.map((skill, index) => (
            <Typography
              key={index}
              variant="body2"
              color="white"
              bgcolor="primary.main"
              borderRadius={2}
              mr={0.5}
              px={1}
            >
              {skill}
            </Typography>
          ))}
        </Stack>
        <Divider />
        <Stack direction="row" alignItems="center" mt={1.5}>
          <Rating
            value={
              client.reviews.length
                ? client.reviews.reduce((total, review) => total + review.rating, 0) /
                  client.reviews.length
                : 0
            }
            precision={0.1}
            readOnly
          />
          <Typography ml={0.5} mr={2}>
            {client.reviews.length
              ? (
                  client.reviews.reduce((total, review) => total + review.rating, 0) /
                  client.reviews.length
                ).toFixed(1)
              : 0}
          </Typography>
          <ChatIcon color={client.reviews.length ? 'primary' : 'disabled'} fontSize="small" />
          <Typography ml={0.5}>{client.reviews.length}</Typography>
          <Box flexGrow={1} />
          <Typography>{getDeltaTime(date)}</Typography>
          {feature.includes('Urgent') && (
            <Typography
              variant="caption"
              color="white"
              bgcolor="darkred"
              borderRadius={2}
              px={1}
              ml={1}
            >
              Urgent
            </Typography>
          )}
        </Stack>
      </Stack>
    </CardActionArea>
  );

  if (cardView) {
    return <Card>{renderCardContent}</Card>;
  }

  return <Card sx={{ border: 'none', boxShadow: 'none' }}>{renderCardContent}</Card>;
}

JobItem.propTypes = {
  job: PropTypes.object,
};

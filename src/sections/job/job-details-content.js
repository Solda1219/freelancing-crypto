import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import { useState } from 'react';
import Link from 'next/link';
// @mui
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlagIcon from '@mui/icons-material/Flag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import VerifiedIcon from '@mui/icons-material/Verified';
import PaymentsIcon from '@mui/icons-material/Payments';
import EmailIcon from '@mui/icons-material/Email';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PhoneIcon from '@mui/icons-material/Phone';
// utils
import { fDate } from 'src/utils/format-time';
import getDeltaTime from 'src/utils/getdeltatime';
// components
import Markdown from 'src/components/markdown';

// ----------------------------------------------------------------------

export default function JobDetailsContent({ job }) {
  const { date, priceLow, priceHigh, currency, hourly, feature, content, skills, client } = job;
  const [bidDialogOpen, setBidDialogOpen] = useState(false);
  const [bidAmount, setBidAmout] = useState((job.priceHigh + job.priceLow) / 2);
  const [bidTimeline, setBidTimeline] = useState(7);
  const handleDialogOpen = () => {
    setBidDialogOpen(true);
  };
  const handleDialogClose = () => {
    setBidDialogOpen(false);
  };
  const renderContent = (
    <Stack component={Card} p={3} spacing={3} divider={<Divider sx={{ mx: -3 }} />}>
      <Stack spacing={1} direction="row" justifyContent="space-between" alignItems="flex-start">
        <Stack spacing={1}>
          <Typography variant="h5" mb={2}>
            Project Details
          </Typography>
          <Typography variant="body2" color="text.disabled">{`Posted ${getDeltaTime(
            date
          )}`}</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            {feature.includes('Featured') && (
              <Typography variant="caption" color="white" bgcolor="orange" borderRadius={2} px={1}>
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
              <Typography variant="caption" color="white" bgcolor="purple" borderRadius={2} px={1}>
                Recruiter
              </Typography>
            )}
            {feature.includes('IP Agreement') && (
              <Typography variant="caption" color="white" bgcolor="red" borderRadius={2} px={1}>
                IP Agreement
              </Typography>
            )}
            {feature.includes('Sealed') && (
              <Typography variant="caption" color="black" bgcolor="cyan" borderRadius={2} px={1}>
                Sealed
              </Typography>
            )}
            {feature.includes('Urgent') && (
              <Typography variant="caption" color="white" bgcolor="darkred" borderRadius={2} px={1}>
                Urgent
              </Typography>
            )}
          </Stack>
        </Stack>
        <Typography>
          <b>
            {hourly
              ? `${priceLow} - ${priceHigh} ${currency} per hour`
              : `${priceLow} - ${priceHigh} ${currency}`}
          </b>
        </Typography>
      </Stack>

      <Markdown children={content} />

      <Stack spacing={2}>
        <Typography variant="h6" mb={1}>
          Skills
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} variant="outlined" />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );

  const renderOverview = (
    <Stack component={Card} spacing={2} sx={{ p: 3 }}>
      <Button variant="contained" color="primary" fullWidth onClick={handleDialogOpen}>
        Apply now
      </Button>
      <Button variant="outlined" color="primary" fullWidth startIcon={<FavoriteBorderIcon />}>
        Save job
      </Button>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <FlagIcon color="primary" />
        <Typography component={Link} href="#" color="primary.main" sx={{ textDecoration: 'none' }}>
          Flag as inappropriate
        </Typography>
      </Stack>
      <Divider sx={{ mx: -3 }} />
      <Typography variant="body2">Send a proposal for 12 Connects</Typography>
      <Typography variant="body2">Available Connects: 16</Typography>
    </Stack>
  );

  const renderAboutClient = (
    <Stack component={Card} spacing={2} sx={{ p: 3, mt: 3 }}>
      <Typography variant="sutitle1">
        <b>About the client</b>
      </Typography>
      <Stack spacing={1}>
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{client.location}</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeFilledIcon fontSize="small" />
          <Typography variant="body2">{`Member since ${fDate(client.registeredAt)}`}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Rating
            value={
              client.reviews.length
                ? client.reviews.reduce((total, review) => total + review.rating, 0) /
                  client.reviews.length
                : 0
            }
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography ml={0.5} variant="body2">
            {client.reviews.length
              ? `${(
                  client.reviews.reduce((total, review) => total + review.rating, 0) /
                  client.reviews.length
                ).toFixed(1)} of ${client.reviews.length} reviews`
              : 'No review'}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ mx: -3 }} />
      <Typography variant="sutitle1">
        <b>Client Verification</b>
      </Typography>
      <Stack spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <HowToRegIcon
            fontSize="small"
            color={client.isIdentityVerified ? 'primary' : 'disabled'}
          />
          <Typography variant="body2">Identity Verified</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <VerifiedIcon
            fontSize="small"
            color={client.isPaymentVerified ? 'primary' : 'disabled'}
          />
          <Typography variant="body2">Payment Verified</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PaymentsIcon fontSize="small" color={client.isDepositMade ? 'primary' : 'disabled'} />
          <Typography variant="body2">Deposit made</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <EmailIcon fontSize="small" color={client.isEmailVerified ? 'primary' : 'disabled'} />
          <Typography variant="body2">Email verified</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FactCheckIcon
            fontSize="small"
            color={client.isProfileCompleted ? 'primary' : 'disabled'}
          />
          <Typography variant="body2">Profile completed</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PhoneIcon fontSize="small" color={client.isPhoneVerified ? 'primary' : 'disabled'} />
          <Typography variant="body2">Phone verified</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
  const renderClientHistory = (
    <Stack component={Card} spacing={3} sx={{ p: 3 }}>
      <Typography variant="h5">Client&apos;s history</Typography>
      <Divider sx={{ mx: -3 }} />
      {client.reviews.length ? (
        orderBy(client.reviews, ['date'], ['desc']).map((review) => (
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Stack spacing={1}>
              <Typography
                variant="subtitle1"
                color="primary.main"
                component={Link}
                href="#"
                sx={{ textDecoration: 'none' }}
              >
                <b>{review.jobtitle}</b>
              </Typography>
              <Rating value={review.rating} precision={0.1} readOnly />
              <Typography>{review.content}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar
                  alt={review.freelancer}
                  src={review.freelancer}
                  sx={{ width: 28, height: 28 }}
                />
                <Typography
                  component={Link}
                  href="#"
                  color="primary.main"
                  variant="body2"
                  sx={{ textDecoration: 'none' }}
                >
                  {review.freelancer}
                </Typography>
              </Stack>
            </Stack>
            <Stack spacing={0.5}>
              <Typography>{fDate(review.date)}</Typography>
              <Typography>{`${review.price} ${review.currency}`}</Typography>
            </Stack>
          </Stack>
        ))
      ) : (
        <Typography>No review</Typography>
      )}
    </Stack>
  );

  return (
    <Grid container spacing={3}>
      <Dialog open={bidDialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>Place a Bid on this Project</DialogTitle>
        <IconButton
          onClick={handleDialogClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
        <DialogContent>
          <Stack spacing={1} py={3}>
            <Typography variant="body2" color="text.disabled" mb={2}>
              You will be able to edit your bid until the project is awarded to someone.
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Bid Amount"
                  variant="outlined"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography variant="body2">
                          <b>{job.currency}</b>
                        </Typography>
                      </InputAdornment>
                    ),
                  }}
                  value={bidAmount.toFixed(2)}
                  onChange={(e) => setBidAmout(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="This project will be delivered in"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography variant="subtitle2">Days</Typography>
                      </InputAdornment>
                    ),
                  }}
                  value={bidTimeline}
                  onChange={(e) => setBidTimeline(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Typography
              variant="subtitle2"
              color="text.disabled"
              align="right"
              mb={2}
            >{`Paid to you: $${bidAmount.toFixed(2)} - $${(bidAmount / 10).toFixed(2)} fee = $${(
              bidAmount * 0.9
            ).toFixed(2)}`}</Typography>
            <TextField
              label="Describe your proposal (minimum 100 characters)"
              placeholder="What makes you the best candidate for this project?"
              multiline
              rows={7}
            />
            <Divider sx={{ my: 2 }} />
            <Typography mb={1}>
              <b>Suggest a milestone payment</b>
            </Typography>
            <Typography variant="body2" color="text.disabled">
              Define the tasks that you will complete for this
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={9}>
                <TextField label="Project milestone" fullWidth />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  variant="outlined"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                  value={bidAmount.toFixed(2)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleDialogClose}>
            Place bid
          </Button>
        </DialogActions>
      </Dialog>
      <Grid xs={12} md={9}>
        {renderContent}
      </Grid>
      <Grid xs={12} md={3}>
        {renderOverview}
        {renderAboutClient}
      </Grid>
      <Grid xs={12}>{renderClientHistory}</Grid>
    </Grid>
  );
}

JobDetailsContent.propTypes = {
  job: PropTypes.object,
};

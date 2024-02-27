'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
// @mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import StarIcon from '@mui/icons-material/Star';
// Carousel
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import Iconify from 'src/components/iconify';
// utils
import getDeltaTime from 'src/utils/getdeltatime';

const tempBid = {
  Basic: {
    value: 35.49,
    comment:
      'Starter Package - For Beginners. Includes 1 Simple design concept ✔ JPEG, PNG ✔ Vector & Source files',
    revision: 5,
  },
  Standard: {
    value: 63.88,
    comment:
      'Pro Package - For Intermediate Includes 2 High quality design concepts ✔ JPEG, PNG ✔ Vector & Source files',
    revision: 9,
  },
  Premium: {
    value: 134.85,
    comment:
      '♛ Crown Package - For Experts. 3 Premium concepts + Stationaries + Social Media Kit + All file + Copyright + VIP Support',
    revision: -1,
  },
};
const imgsrc = [
  '/assets/background/service/graphic_design/LogoDesign/1-1.webp',
  '/assets/background/service/graphic_design/LogoDesign/1-2.webp',
  '/assets/background/service/graphic_design/LogoDesign/1-3.webp',
  '/assets/background/service/graphic_design/LogoDesign/1-4.webp',
];
const reviews = [
  {
    name: 'rickyblessed',
    country: 'United Kingdom',
    rating: 5,
    date: new Date('October 12, 2023 11:13:00'),
    avatarUrl: '',
    comment:
      'I had seen cheaper offers on Fiverr for similar logo designs and I had spent at least a week messaging sellers. I sent my design to Urban Brands. The design I had in my head changed over the next couple of weeks.',
  },
  {
    name: 'adjacentinc',
    country: 'Canada',
    rating: 5,
    date: new Date('November 1, 2023 11:13:00'),
    avatarUrl: '/assets/avatar/2.png',
    comment:
      'I had seen cheaper offers on Fiverr for similar logo designs and I had spent at least a week messaging sellers. I sent my design to Urban Brands. The design I had in my head changed over the next couple of weeks.',
  },
  {
    name: 'washingtoneny',
    country: 'United States',
    rating: 5,
    date: new Date('October 23, 2023 11:13:00'),
    avatarUrl: '',
    comment:
      'I had seen cheaper offers on Fiverr for similar logo designs and I had spent at least a week messaging sellers. I sent my design to Urban Brands. The design I had in my head changed over the next couple of weeks.',
  },
];

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
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'primary.main',
  },
}));

export default function GigMain() {
  const settings = useSettingsContext();
  const [currentTab, setCurrentTab] = useState('Basic');
  const [seeIncluded, setSeeIncluded] = useState(false);

  const renderAboutThisGig = (
    <Card>
      <CardHeader title="About this gig" />
      <Divider sx={{ py: 1 }} />
      <Typography p={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui
        accumsan. At augue eget arcu dictum varius duis at consectetur. Vitae proin sagittis nisl
        rhoncus mattis. Dictumst quisque sagittis purus sit amet. Bibendum neque egestas congue
        quisque egestas diam in arcu cursus. Tincidunt eget nullam non nisi est sit. Sed viverra
        tellus in hac habitasse. Metus dictum at tempor commodo. Porta nibh venenatis cras sed felis
        eget. Egestas sed tempus urna et pharetra pharetra. Maecenas sed enim ut sem viverra aliquet
        eget sit amet. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Dictum
        varius duis at consectetur lorem donec massa. Enim blandit volutpat maecenas volutpat
        blandit aliquam etiam. Et netus et malesuada fames ac turpis egestas. Pulvinar etiam non
        quam lacus suspendisse faucibus.
        <br />
        At imperdiet dui accumsan sit amet nulla facilisi. Placerat in egestas erat imperdiet.
        Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Vulputate eu
        scelerisque felis imperdiet proin fermentum leo. Eleifend donec pretium vulputate sapien. Id
        aliquet lectus proin nibh nisl condimentum id. Cursus vitae congue mauris rhoncus aenean
        vel. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Blandit libero
        volutpat sed cras ornare arcu dui. Diam volutpat commodo sed egestas egestas. Dolor morbi
        non arcu risus quis varius quam quisque id. Et malesuada fames ac turpis. Dui accumsan sit
        amet nulla. Nulla aliquet enim tortor at auctor urna nunc. Faucibus a pellentesque sit amet
        porttitor.
        <br />
        At quis risus sed vulputate. Arcu cursus euismod quis viverra nibh cras pulvinar. Tristique
        nulla aliquet enim tortor at auctor urna nunc. Nulla posuere sollicitudin aliquam ultrices
        sagittis. Feugiat vivamus at augue eget arcu. Auctor neque vitae tempus quam pellentesque
        nec. Mattis nunc sed blandit libero. Enim tortor at auctor urna nunc id. Eu volutpat odio
        facilisis mauris sit amet massa. Leo urna molestie at elementum eu facilisis sed odio morbi.
        Amet risus nullam eget felis eget nunc. Porttitor leo a diam sollicitudin tempor id eu. Nisi
        scelerisque eu ultrices vitae auctor eu augue ut. Amet consectetur adipiscing elit ut
        aliquam purus sit. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam.
        Viverra nam libero justo laoreet sit. Elit sed vulputate mi sit amet.
      </Typography>
      <Divider />
      <Grid container spacing={2} p={3}>
        <Grid item xs={4}>
          <Typography color="text.disabled">Logo style</Typography>
          <Typography>Minimalist</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography color="text.disabled">File format</Typography>
          <Typography>AI, JPG, PDF, PNG, PSD, EPS, SVG</Typography>
        </Grid>
      </Grid>
    </Card>
  );
  const renderStickyCard = (
    <Box sx={{ position: 'sticky', top: 10 }}>
      <Card>
        <Stack direction="row" justifyContent="center" pt={1}>
          <Tabs
            value={currentTab}
            onChange={useCallback((e, newValue) => {
              setCurrentTab(newValue);
            }, [])}
          >
            <Tab value="Basic" label="Basic" />
            <Tab value="Standard" label="Standard" />
            <Tab value="Premium" label="Premium" />
          </Tabs>
        </Stack>
        <Divider />
        <Stack p={3} spacing={1}>
          <Typography variant="h4">{`USD ${tempBid[currentTab].value}`}</Typography>
          <Stack direction="row" spacing={1}>
            <Typography>Save up to 20% with</Typography>
            <Typography color="primary.main">Subscribe to Save</Typography>
          </Stack>
          <Typography>{tempBid[currentTab].comment}</Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Iconify icon="tabler:clock" width={16} />
            <Typography mr={2} variant="body2">
              2 Days Delivery
            </Typography>
            <Iconify icon="tabler:refresh" width={16} />
            <Typography variant="body2">{`${tempBid[currentTab].revision} Revisions`}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">
              <b>What&apos;s included</b>
            </Typography>
            <IconButton onClick={() => setSeeIncluded(!seeIncluded)}>
              <Iconify icon={seeIncluded ? 'fe:arrow-up' : 'fe:arrow-down'} width={16} />
            </IconButton>
          </Stack>
          <Button variant="outlined">Continue</Button>
          <Button variant="outlined">Compare packages</Button>
        </Stack>
      </Card>
      <Card sx={{ my: 3 }}>
        <Stack direction="row" alignItems="center" p={3} spacing={1.5}>
          <Iconify icon="fa:bolt" width={32} />
          <Stack>
            <Typography>
              <b>Highly responsive</b>
            </Typography>
            <Typography variant="body2">Known for exceptionally quick replies</Typography>
          </Stack>
        </Stack>
      </Card>
      <Stack direction="row" alignItems="center" spacing={3} p={2}>
        <Button variant="contained" fullWidth color="primary">
          Contact me
        </Button>
        <Button variant="contained" component={Link} href={paths.dashboard.services.root} fullWidth>
          Back to Category
        </Button>
      </Stack>
    </Box>
  );
  const renderAboutSeller = (
    <Card>
      <CardHeader title="About the seller" />
      <Divider sx={{ py: 1 }} />
      <Stack spacing={3} p={3}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <StyledBadge
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent=" "
            variant="dot"
          >
            <Avatar
              alt="Name here"
              src="/assets/avatar/1.png"
              variant="rounded"
              sx={{ width: 75, height: 75 }}
            />
          </StyledBadge>
          <Stack spacing={0.2}>
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <Typography variant="h6">Urban Brands</Typography>
              <Typography
                variant="caption"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 2,
                  px: 1,
                  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                Lvl 2
              </Typography>
            </Stack>
            <Typography>Logo and Brand Design Expert!</Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <StarIcon fontSize="small" />
              <Typography>4.9</Typography>
              <Typography sx={{ opacity: 0.85 }}>(395)</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Card sx={{ bgcolor: 'primary.dark', color: 'white' }}>
          <Grid container spacing={2} p={2}>
            <Grid item xs={6} md={4}>
              <Typography>From</Typography>
              <Typography>
                <b>Sri Lanka</b>
              </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>Member since</Typography>
              <Typography>
                <b>Dec 2021</b>
              </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>Avg. response time</Typography>
              <Typography>
                <b>1 hour</b>
              </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>Last delivery</Typography>
              <Typography>
                <b>about 34 minutes</b>
              </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>Languages</Typography>
              <Typography>
                <b>English</b>
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Typography px={1}>
          My name is Kavinda. I am graphic designer with over 5+ years of experience.
          <br />
          <br />I have worked on logos in almost every industry that exists in this universe. From
          baby products to multi-millionaire empires you will find my work. I am more than confident
          of my expertise, understanding, and communication skills, I am the best designer for you.
          <br />
          <br />
          You are on the right page where Customer Satisfaction is the top priority and I starve for
          that!
          <br />
          <br />
          Thank you
          <br />
          Kavinda
        </Typography>
      </Stack>
    </Card>
  );
  const renderReviews = (
    <Card>
      <CardHeader title="Reviews" />
      <Divider sx={{ py: 1 }} />
      <Stack spacing={3} p={3}>
        <Stack spacing={1} sx={{ width: 1 }}>
          <Stack direction="row" alignItems="center" spacing={0.5} mb={1}>
            <Typography variant="body2" mr={2}>
              <b>392 reviews for this Gig</b>
            </Typography>
            <Rating value={4.9} precision={0.1} readOnly size="small" />
            <Typography variant="body2">4.9</Typography>
          </Stack>
          {[362, 23, 4, 1, 2].map((value, index) => (
            <Stack key={index} direction="row" spacing={0.5} alignItems="center" sx={{ width: 1 }}>
              <Typography variant="body2" width={60}>
                <b>{`${5 - index} ${index < 4 ? 'Stars' : 'Star'}`}</b>
              </Typography>
              <BorderLinearProgress
                variant="determinate"
                value={(value / 392) * 100}
                sx={{ width: 1 }}
              />
              <Typography variant="body2" width={40}>
                {`(${value})`}
              </Typography>
            </Stack>
          ))}
        </Stack>
        {reviews.map((review, index) => (
          <Stack key={index} spacing={2}>
            <Divider />
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar alt={review.name} src={review.avatarUrl} sx={{ width: 50, height: 50 }}>
                  {`${review.name.split(' ')[0][0].toUpperCase()}${
                    review.name.split(' ')[1] !== undefined
                      ? review.name.split(' ')[1][0].toUpperCase()
                      : ''
                  }`}
                </Avatar>
                <Stack spacing={0.2}>
                  <Typography>
                    <b>{review.name}</b>
                  </Typography>
                  <Typography variant="body2">{review.country}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Rating value={review.rating} precision={0.1} readOnly size="small" />
                <Typography variant="body2">{review.rating}</Typography>
                <Divider orientation="vertical" flexItem sx={{ pl: 0.5 }} />
                <Typography variant="body2" pl={0.5}>
                  {getDeltaTime(review.date)}
                </Typography>
              </Stack>
              <Typography>{review.comment}</Typography>
            </Stack>
          </Stack>
        ))}
        <Divider sx={{ mx: -3 }} />
        <Stack alignItems="center">
          <Button variant="outlined" sx={{ width: 220 }}>
            Show more reviews
          </Button>
        </Stack>
      </Stack>
    </Card>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Typography variant="h3" mb={5}>
        I will create modern minimalist and luxury logo design
      </Typography>
      <Stack spacing={3} direction="row" justifyContent="space-between">
        <Stack spacing={3} flexGrow={1}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar
              alt="Name here"
              src="/assets/avatar/1.png"
              variant="rounded"
              sx={{ width: 55, height: 55 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="subtitle1">Urban Brands</Typography>
              <Divider />
              <Stack direction="row" spacing={0.5} alignItems="center">
                <StarIcon fontSize="small" />
                <Typography>4.9 (382)</Typography>
                <Typography sx={{ opacity: 0.85, ml: 2 }}>15 Orders in Queue</Typography>
              </Stack>
            </Stack>
          </Stack>
          <ImageGallery
            items={imgsrc.map((src) => ({
              original: src,
              thumbnail: src,
            }))}
            thumbnailPosition="bottom"
            autoPlay
          />
          {renderAboutThisGig}
          <Card>
            <Stack spacing={2} p={3}>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Iconify icon="ep:info-filled" width={16} />
                <Typography variant="subtitle2">Delivery style perference</Typography>
              </Stack>
              <Typography variant="body2">
                Please inform the freelancer of any preferences or concerns regarding the use of AI
                tools in the completion and/or delivery of your order.
              </Typography>
            </Stack>
          </Card>
          {renderAboutSeller}
          {renderReviews}
        </Stack>
        <Stack spacing={3} position="relative" minWidth={360}>
          {renderStickyCard}
        </Stack>
      </Stack>
    </Container>
  );
}

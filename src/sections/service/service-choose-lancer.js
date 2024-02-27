// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//
import ServiceItem from './service-item';

const tempData = [
  {
    adImgUrl: [
      '/assets/background/service/graphic_design/LogoDesign/1-1.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-2.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-3.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-4.webp',
    ],
    adName: 'Jayden Frankie',
    level: 2,
    comment: 'I will create modern minimalist luxury logo design',
    avatarUrl: '/assets/avatar/1.png',
    rating: 4.9,
    reviews: 1010,
    currency: 'USD',
    budget: 15,
  },
  {
    adImgUrl: [
      '/assets/background/service/graphic_design/LogoDesign/1-1.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-2.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-3.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-4.webp',
    ],
    adName: 'Jayden Frankie',
    level: 2,
    comment: 'I will create modern minimalist luxury logo design',
    avatarUrl: '/assets/avatar/1.png',
    rating: 4.9,
    reviews: 1010,
    currency: 'USD',
    budget: 15,
  },
  {
    adImgUrl: [
      '/assets/background/service/graphic_design/LogoDesign/1-1.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-2.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-3.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-4.webp',
    ],
    adName: 'Jayden Frankie',
    level: 2,
    comment: 'I will create modern minimalist luxury logo design',
    avatarUrl: '/assets/avatar/1.png',
    rating: 4.9,
    reviews: 1010,
    currency: 'USD',
    budget: 15,
  },
  {
    adImgUrl: [
      '/assets/background/service/graphic_design/LogoDesign/1-1.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-2.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-3.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-4.webp',
    ],
    adName: 'Jayden Frankie',
    level: 2,
    comment: 'I will create modern minimalist luxury logo design',
    avatarUrl: '/assets/avatar/1.png',
    rating: 4.9,
    reviews: 1010,
    currency: 'USD',
    budget: 15,
  },
  {
    adImgUrl: [
      '/assets/background/service/graphic_design/LogoDesign/1-1.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-2.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-3.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-4.webp',
    ],
    adName: 'Jayden Frankie',
    level: 2,
    comment: 'I will create modern minimalist luxury logo design',
    avatarUrl: '/assets/avatar/1.png',
    rating: 4.9,
    reviews: 1010,
    currency: 'USD',
    budget: 15,
  },
  {
    adImgUrl: [
      '/assets/background/service/graphic_design/LogoDesign/1-1.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-2.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-3.webp',
      '/assets/background/service/graphic_design/LogoDesign/1-4.webp',
    ],
    adName: 'Jayden Frankie',
    level: 2,
    comment: 'I will create modern minimalist luxury logo design',
    avatarUrl: '/assets/avatar/1.png',
    rating: 4.9,
    reviews: 1010,
    currency: 'USD',
    budget: 15,
  },
];

export default function ChooseFreelancer({ service }) {
  return (
    <Stack spacing={3}>
      <Typography variant="h5">{service.title}</Typography>
      <Typography mt={-2}>
        Stand out from the crowd with a logo that fits your brand personality.
      </Typography>
      <Grid container spacing={3}>
        {tempData.map((data, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ServiceItem data={data} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

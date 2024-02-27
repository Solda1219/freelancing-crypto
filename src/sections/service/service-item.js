import Link from 'next/link';
// @mui
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { alpha, useTheme } from '@mui/material/styles';

import StarIcon from '@mui/icons-material/Star';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Carousel, { CarouselDots, useCarousel } from 'src/components/carousel';

export default function ServiceItem({ data, space }) {
  const theme = useTheme();
  const carousel = useCarousel({
    speed: 800,
    autoplay: true,
    ...CarouselDots({
      sx: {
        top: 16,
        left: 16,
        position: 'absolute',
        color: 'primary.light',
      },
    }),
  });

  return (
    <Card sx={{ mr: space }}>
      {typeof Storage !== 'undefined' ? (
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {data.adImgUrl.map((url, index) => (
            <Image
              key={index}
              alt="Ad Image Here"
              src={url}
              overlay={`linear-gradient(to bottom, ${theme.palette.grey[900]} 0%, ${alpha(
                theme.palette.grey[900],
                0
              )} 50%)`}
              sx={{
                width: 1,
                height: 240,
              }}
            />
          ))}
        </Carousel>
      ) : (
        <CardMedia component="img" image={data.adImgUrl[0]} alt="gig" sx={{ width: 1 }} />
      )}

      <CardActionArea component={Link} href={paths.dashboard.services.details}>
        <Stack spacing={2} p={2}>
          <Stack direction="row" alignItems="center" spacing={1} justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar alt="Remy Sharp" src={data.avatarUrl} sx={{ width: 24, height: 24 }} />
              <Typography variant="body2" color="text.disabled">
                Ad by
              </Typography>
              <Typography variant="body2">
                <b>{data.adName}</b>
              </Typography>
            </Stack>
            <Typography variant="body2">{`Level ${data.level}`}</Typography>
          </Stack>
          <Typography>{data.comment}</Typography>
          <Stack direction="row" color="primary.main" spacing={0.5} alignItems="center">
            <StarIcon fontSize="small" />
            <Typography>{data.rating}</Typography>
            <Typography color="text.disabled">{`(${
              data.reviews > 1000 ? '1k+' : data.reviews
            })`}</Typography>
          </Stack>
          <Divider sx={{ mx: -2 }} />
          <Typography align="right">
            <b>{`From ${data.currency} ${data.budget}`}</b>
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

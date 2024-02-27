// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// components
import Image from 'src/components/image';

export default function MainCategory({ category, select }) {
  const { title, imgurl, subtitle, sub } = category;

  return (
    <Stack spacing={3}>
      <Card
        sx={{
          backgroundImage: `url(${imgurl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Stack p={5} color="white" alignItems="center" spacing={3}>
          <Typography variant="h4" sx={{ border: '1px solid white', px: 3, py: 1 }}>
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </Stack>
      </Card>
      <Typography variant="h5" my={1}>{`Explore ${title}`}</Typography>
      <Grid container spacing={3}>
        {sub.map((subService, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Stack spacing={1}>
              <Image alt="image here" src={subService.imgurl} />
              <Stack direction="row" alignItems="center" spacing={0.5} my={1}>
                <Typography variant="h6">{subService.title}</Typography>
                {subService.comment.includes('new') && (
                  <Typography
                    variant="caption"
                    color="white"
                    bgcolor="primary.main"
                    px={1}
                    borderRadius={2}
                  >
                    NEW
                  </Typography>
                )}
              </Stack>
              {subService.sub.map(
                (service, i) =>
                  !service.comment.includes('featured') && (
                    <ListItem key={i} disablePadding>
                      <ListItemButton onClick={() => select(service, subService.title)}>
                        <Stack direction="row" alignItems="flex-start" spacing={0.5}>
                          <Typography sx={{ opacity: 0.85 }}>{service.title}</Typography>
                          {service.comment.includes('new') && (
                            <Typography
                              variant="caption"
                              color="white"
                              bgcolor="primary.main"
                              px={1}
                              borderRadius={2}
                              fontSize={10}
                            >
                              NEW
                            </Typography>
                          )}
                        </Stack>
                      </ListItemButton>
                    </ListItem>
                  )
              )}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

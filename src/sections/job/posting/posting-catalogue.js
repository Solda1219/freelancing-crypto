import Link from 'next/link';
import Image from 'next/image';

// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
// routes
import { paths } from 'src/routes/paths';
// ----------------------------------------------------------------------

export default function PostingCatalogue() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex' }}>
      <Stack flexGrow={1} justifyContent="center" alignItems="center">
        <Typography variant="h2" my={5} color="primary.main">
          Let&apos;s get started
        </Typography>
        <Stack direction={{ xs: 'coloumn', md: 'row' }} spacing={5} alignItems="center">
          <Stack>
            <Image
              alt="image here"
              src="/assets/icons/hirefreelancer/main.png"
              width={652}
              height={484}
            />
          </Stack>
          <Stack direction="column" spacing={2}>
            <Card sx={{ width: 450 }}>
              <CardActionArea component={Link} href={paths.hirefreelancer.postjob}>
                <Stack p={3} direction="row" alignItems="center" spacing={5}>
                  <Stack width={120}>
                    <Image
                      alt="post-a-job"
                      src="/assets/icons/hirefreelancer/post-a-job.png"
                      width={120}
                      height={120}
                    />
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="h5">
                      <b>Post a job</b>
                    </Typography>
                    <Typography color="text.disabled">Tell us what you need done.</Typography>
                  </Stack>
                </Stack>
              </CardActionArea>
            </Card>
            <Card sx={{ width: 450 }}>
              <CardActionArea component={Link} href={paths.dashboard.browseprofiles.root}>
                <Stack p={3} direction="row" alignItems="center" spacing={5}>
                  <Stack width={120}>
                    <Image
                      alt="browse-profile"
                      src="/assets/icons/hirefreelancer/browse-profile.png"
                      width={120}
                      height={120}
                    />
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="h5">
                      <b>Browse freelancers&apos; profiles</b>
                    </Typography>
                    <Typography color="text.disabled">
                      Find the perfect freelancer for your needs.
                    </Typography>
                  </Stack>
                </Stack>
              </CardActionArea>
            </Card>
            <Card sx={{ width: 450, mb: 2 }}>
              <CardActionArea component={Link} href={paths.dashboard.services.root}>
                <Stack p={3} direction="row" alignItems="center" spacing={5}>
                  <Stack width={120}>
                    <Image
                      alt="explore-showcase"
                      src="/assets/icons/hirefreelancer/explore-showcase.png"
                      width={120}
                      height={120}
                    />
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="h5">
                      <b>Explore services</b>
                    </Typography>
                    <Typography color="text.disabled">Find the right freelance service</Typography>
                  </Stack>
                  {/* <Iconify icon="ooui:next-ltr" width={24} /> */}
                </Stack>
              </CardActionArea>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

'use client';

import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActionArea from '@mui/material/CardActionArea';
// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import Carousel, { CarouselArrows, useCarousel } from 'src/components/carousel';
//
import MainCategory from './service-main-view';
import ChooseFreelancer from './service-choose-lancer';
import ServiceItem from './service-item';

const _services = [
  {
    title: 'Graphics & Design',
    subtitle: 'Designs to make you stand out.',
    imgurl: '/assets/background/service/graphic_design.jpg',
    comment: [],
    sub: [
      {
        title: 'Logo & Brand Identity',
        imgurl: '/assets/background/service/graphic_design/Logo_Brand_Identity.webp',
        comment: [],
        sub: [
          {
            title: 'Logo Design',
            comment: [],
          },
          {
            title: 'Brand Style Guides',
            comment: [],
          },
          {
            title: 'Business Cards & Stationery',
            comment: [],
          },
          {
            title: 'Fonts & Typograhpy',
            comment: [],
          },
          {
            title: 'Logo Maker Tool',
            comment: ['featured'],
          },
        ],
      },
      {
        title: 'Art & Illustration',
        imgurl: '/assets/background/service/graphic_design/Art_Illustration.webp',
        comment: [],
        sub: [
          {
            title: 'Illustration',
            comment: [],
          },
          {
            title: 'AI Artists',
            comment: ['new'],
          },
          {
            title: "Children's Book Illustration",
            comment: [],
          },
          {
            title: 'Portraits & Caricatures',
            comment: [],
          },
          {
            title: 'Cartoons and Comics',
            comment: [],
          },
          {
            title: 'Pattern Design',
            comment: [],
          },
          {
            title: 'Tattoo Design',
            comment: [],
          },
          {
            title: 'Storyboards',
            comment: [],
          },
        ],
      },
      {
        title: 'Miscellaneous',
        comment: [],
        imgurl: '/assets/background/service/graphic_design/Miscellaneous.webp',
        sub: [
          {
            title: 'Design Advice',
            comment: [],
          },
        ],
      },
      {
        title: 'Web & App Design',
        comment: [],
        imgurl: '/assets/background/service/graphic_design/Web_App_Design.webp',
        sub: [
          {
            title: 'Website Design',
            comment: [],
          },
          {
            title: 'App Design',
            comment: [],
          },
          {
            title: 'UX Design',
            comment: [],
          },
          {
            title: 'Landing Page Design',
            comment: [],
          },
          {
            title: 'Icon Design',
            comment: [],
          },
        ],
      },
      {
        title: '3D Design',
        comment: ['new'],
        imgurl: '/assets/background/service/graphic_design/3D_Design.webp',
        sub: [
          {
            title: '3D Architecture',
            comment: [],
          },
          {
            title: '3D Industrial Design',
            comment: [],
          },
          {
            title: '3D Fashion & Garment',
            comment: [],
          },
          {
            title: '3D Printing Characters',
            comment: [],
          },
          {
            title: '3D Landscape',
            comment: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Programming & Tech',
    subtitle: 'You think it. A programmer develops it.',
    imgurl: '/assets/background/service/programming.jpg',
    comment: [],
    sub: [
      {
        title: 'Website Development',
        imgurl: '/assets/background/service/programming/WebsiteDevelopment.webp',
        comment: [],
        sub: [
          {
            title: 'Business Websites',
            comment: [],
          },
          {
            title: 'Landing Pages',
            comment: [],
          },
          {
            title: 'Blogs',
            comment: [],
          },
          {
            title: 'Build a Complete Website',
            comment: ['featured'],
          },
        ],
      },
      {
        title: 'Website Platforms',
        comment: [],
        imgurl: '/assets/background/service/programming/WebsitePlatforms.webp',
        sub: [
          {
            title: 'WordPress',
            comment: [],
          },
          {
            title: 'Shopify',
            comment: [],
          },
          {
            title: 'Wix',
            comment: [],
          },
          {
            title: 'Custom Websites',
            comment: [],
          },
          {
            title: 'GoDaddy',
            comment: [],
          },
        ],
      },
      {
        title: 'Website Maintenance',
        comment: [],
        imgurl: '/assets/background/service/programming/WebsiteDevelopment.webp',
        sub: [
          {
            title: 'Website Customization',
            comment: [],
          },
          {
            title: 'Bug Fixes',
            comment: [],
          },
          {
            title: 'Backup & Migration',
            comment: [],
          },
          {
            title: 'Speed Optimization',
            comment: [],
          },
        ],
      },
      {
        title: 'Software Development',
        comment: [],
        imgurl: '/assets/background/service/programming/ApplicationDevelopment.webp',
        sub: [
          {
            title: 'Web Applications',
            comment: [],
          },
          {
            title: 'Desktop Applications',
            comment: [],
          },
          {
            title: 'APIs & Integrations',
            comment: [],
          },
          {
            title: 'Scripting',
            comment: [],
          },
          {
            title: 'Browser Extensions',
            comment: [],
          },
        ],
      },
      {
        title: 'Software Developers',
        comment: [],
        imgurl: '/assets/background/service/programming/ApplicationDevelopment.webp',
        sub: [
          {
            title: 'Python Developers',
            comment: [],
          },
          {
            title: 'HTML & CSS Developers',
            comment: [],
          },
          {
            title: 'JavaScript Developers',
            comment: [],
          },
          {
            title: 'Java Developers',
            comment: [],
          },
          {
            title: 'PHP Developers',
            comment: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Digital Marketing',
    comment: [],
    sub: [],
  },
  {
    title: 'Video & Animation',
    comment: [],
    sub: [],
  },
  {
    title: 'Writing & Translation',
    comment: [],
    sub: [],
  },
  {
    title: 'Music & Audio',
    comment: [],
    sub: [],
  },
  {
    title: 'Business',
    comment: [],
    sub: [],
  },
  {
    title: 'Data',
    comment: [],
    sub: [],
  },
  {
    title: 'Photography',
    comment: [],
    sub: [],
  },
  {
    title: 'AI services',
    comment: [],
    sub: [],
  },
];
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
export default function ServiceList() {
  const settings = useSettingsContext();
  const [currentTab, setCurrentTab] = useState('');
  const [selectedService, setSelectedService] = useState(-1);
  const [popperShowingService, setPopperShowingService] = useState(-1);
  const [popperOpen, setPopperOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const canBeOpen = popperOpen && Boolean(anchorEl);
  const id = canBeOpen ? 'services-popper' : undefined;
  const [childService, setChildService] = useState(null);
  const [mainService, setMainService] = useState('');
  const theme = useTheme();
  const carousel1 = useCarousel({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  const carousel2 = useCarousel({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  const carousel3 = useCarousel({
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  const handleChoose = (category, parentCategoryTitle) => {
    setChildService(category);
    setMainService(parentCategoryTitle);
    setSelectedService(-1);
  };

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Stack spacing={3}>
        <Typography variant="h3" color="primary.main" align="center" my={1}>
          What service are you looking for today?
        </Typography>
        <Stack sx={{ bgcolor: 'background.paper', mb: 1 }}>
          <Divider />
          <Tabs
            value={popperOpen && Boolean(currentTab) ? currentTab : false}
            variant="scrollable"
            scrollButtons="auto"
          >
            {_services.map((serve, index) => (
              <Tab
                key={index}
                value={serve.title}
                label={serve.title}
                onClick={() => {
                  setSelectedService(index);
                  setPopperOpen(false);
                  setChildService(null);
                }}
                onMouseEnter={(e) => {
                  setCurrentTab(serve.title);
                  setPopperShowingService(index);
                  setPopperOpen(true);
                  setAnchorEl(e.currentTarget);
                }}
                onMouseLeave={() => {
                  setPopperOpen(false);
                }}
                disabled={index > 1}
                aria-describedby={id}
                sx={index !== 0 ? { ml: -2 } : null}
              />
            ))}
          </Tabs>
          <Popper
            id={id}
            placement="bottom-start"
            open={popperOpen}
            anchorEl={anchorEl}
            onMouseEnter={() => setPopperOpen(true)}
            onMouseLeave={() => setPopperOpen(false)}
          >
            <Box
              sx={{
                bgcolor: 'background.paper',
                p: 2,
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              }}
            >
              {popperShowingService > -1 &&
                _services[popperShowingService].sub.map((service, index) => (
                  <Stack key={index} spacing={1} my={1}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="subtitle1">{service.title}</Typography>
                      {service.comment.includes('new') && (
                        <Typography
                          variant="caption"
                          color="white"
                          bgcolor="primary.main"
                          px={1}
                          py={0.2}
                          borderRadius={2}
                          fontSize={10}
                        >
                          NEW
                        </Typography>
                      )}
                    </Stack>
                    <Grid container spacing={1} mb={1} ml={1}>
                      {service.sub.map((subService, subIndex) => (
                        <Grid item key={subIndex} xs={12} sm={6} md={4} lg={3}>
                          <Stack
                            direction="row"
                            spacing={0.5}
                            alignItems="flex-start"
                            color={
                              subService.comment.includes('featured') ? 'secondary.main' : 'inherit'
                            }
                          >
                            {subService.comment.includes('featured') && (
                              <Iconify
                                icon="fluent:magic-wand-48-filled"
                                width={20}
                                sx={{ mr: 0.5 }}
                              />
                            )}
                            <Typography
                              onClick={() => {
                                handleChoose(subService);
                                setPopperOpen(false);
                                setMainService(service.title);
                              }}
                              sx={{ cursor: 'pointer', opacity: 0.85 }}
                            >
                              {subService.title}
                            </Typography>
                            {subService.comment.includes('new') && (
                              <Typography
                                variant="caption"
                                color="white"
                                bgcolor="primary.main"
                                px={1}
                                py={0.2}
                                borderRadius={2}
                                fontSize={10}
                              >
                                NEW
                              </Typography>
                            )}
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                ))}
            </Box>
          </Popper>
          <Divider />
        </Stack>
        {selectedService > -1 && (
          <MainCategory category={_services[selectedService]} select={handleChoose} />
        )}
        {Boolean(childService) && (
          <>
            <Breadcrumbs
              separator={<Iconify icon="carbon:dot-mark" width={10} />}
              aria-label="breadcrumb"
            >
              <Typography sx={{ cursor: 'pointer' }} onClick={() => setChildService(null)}>
                {
                  _services.find(
                    (service) =>
                      service.sub.filter((childsService) => childsService.title === mainService)
                        .length > 0
                  ).title
                }
              </Typography>
              <Typography
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelectedService(
                    _services.findIndex(
                      (service) =>
                        service.sub.filter((childsService) => childsService.title === mainService)
                          .length > 0
                    )
                  );
                  setChildService(null);
                }}
              >
                {mainService}
              </Typography>
            </Breadcrumbs>
            <ChooseFreelancer service={childService} />
          </>
        )}
        {selectedService === -1 && Boolean(childService) === false && (
          <>
            <Card>
              <CardHeader
                title="Here's what you need for branding your business"
                action={<CarouselArrows onNext={carousel1.onNext} onPrev={carousel1.onPrev} />}
              />
              <Divider sx={{ mt: 2.5 }} />
              <Stack p={2} my={1} ml={1}>
                <Carousel ref={carousel1.carouselRef} {...carousel1.carouselSettings}>
                  {[
                    { title: 'Logo Design', icon: 'mdi:design' },
                    { title: 'Logo Design', icon: 'mdi:design' },
                    { title: 'Logo Design', icon: 'mdi:design' },
                    { title: 'Logo Design', icon: 'mdi:design' },
                    { title: 'Logo Design', icon: 'mdi:design' },
                    { title: 'Logo Design', icon: 'mdi:design' },
                    { title: 'Logo Design', icon: 'mdi:design' },
                  ].map((item, index) => (
                    <Box key={index}>
                      <Card
                        variant="outlined"
                        sx={{
                          mr: 1,
                          borderRadius: 1,
                          bgcolor: 'background.neutral',
                          boxShadow: 'none',
                        }}
                      >
                        <CardActionArea>
                          <Stack direction="row" spacing={1} p={2} alignItems="center">
                            <Iconify icon={item.icon} width={24} />
                            <Typography>{item.title}</Typography>
                          </Stack>
                        </CardActionArea>
                      </Card>
                    </Box>
                  ))}
                </Carousel>
              </Stack>
            </Card>
            <Card>
              <CardHeader
                title={
                  <>
                    Most popular Gigs in
                    <Typography variant="h6" component="span" pl={1} color="primary.main">
                      Logo Design
                    </Typography>
                  </>
                }
                action={<CarouselArrows onNext={carousel2.onNext} onPrev={carousel2.onPrev} />}
              />
              <Divider sx={{ mt: 2.5 }} />
              <Stack p={2} my={1} ml={1}>
                <Carousel ref={carousel2.carouselRef} {...carousel2.carouselSettings}>
                  {tempData.map((item, index) => (
                    <ServiceItem key={index} data={item} space={2} />
                  ))}
                </Carousel>
              </Stack>
            </Card>
            <Card>
              <CardHeader
                title="Gigs you may like"
                action={<CarouselArrows onNext={carousel3.onNext} onPrev={carousel3.onPrev} />}
              />
              <Divider sx={{ mt: 2.5 }} />
              <Stack p={2} my={1} ml={1}>
                <Carousel ref={carousel3.carouselRef} {...carousel3.carouselSettings}>
                  {tempData.map((item, index) => (
                    <ServiceItem key={index} data={item} space={2} />
                  ))}
                </Carousel>
              </Stack>
            </Card>
          </>
        )}
      </Stack>
    </Container>
  );
}

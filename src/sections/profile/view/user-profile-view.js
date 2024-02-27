'use client';

import { useState, useCallback } from 'react';

// @mui
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Button from '@mui/material/Button';
// import { useTheme, alpha, styled } from '@mui/material/styles';
// routes
// import { paths } from 'src/routes/paths';
// hooks
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// _mock
import { _userAbout } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
// import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import ProfileAboutMe from '../profile-aboutme';
import ProfileCover from '../profile-cover';
import ProfileReview from '../profile-review';
import ProfilePortfolio from '../profile-portfolio';
import ProfileResume from '../profile-resume';

// ----------------------------------------------------------------------

const TABS_FREELANCER = [
  {
    value: 'about',
    label: 'About Me',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: 'portfolio',
    label: 'Portfolio Items',
    icon: <Iconify icon="solar:gallery-wide-bold" width={24} />,
  },
  {
    value: 'review',
    label: 'Review',
    icon: <Iconify icon="solar:heart-bold" width={24} />,
  },
  {
    value: 'resume',
    label: 'Resume',
    icon: <Iconify icon="mdi:resume" width={24} />,
  },
];
const TABS_CLIENT = [
  {
    value: 'about',
    label: 'About Me',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: 'review',
    label: 'Review',
    icon: <Iconify icon="solar:heart-bold" width={24} />,
  },
  {
    value: 'resume',
    label: 'Resume',
    icon: <Iconify icon="mdi:resume" width={24} />,
  },
];
const portfolios = [
  {
    title: 'Portfolio Title 1',
    comment:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    skills: ['skill_1', 'skill_2', 'skill_3'],
    imgsrc: [
      '/assets/images/account/portfolio/1.jpg',
      '/assets/images/account/portfolio/2.jpg',
      '/assets/images/account/portfolio/3.jpg',
      '/assets/images/account/portfolio/4.jpg',
      '/assets/images/account/portfolio/5.jpg',
      '/assets/images/account/portfolio/6.jpg',
    ],
  },
  {
    title: 'Portfolio Title 2',
    comment:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    skills: ['skill_1', 'skill_2', 'skill_3', 'skill_4'],
    imgsrc: [
      '/assets/images/account/portfolio/6.jpg',
      '/assets/images/account/portfolio/1.jpg',
      '/assets/images/account/portfolio/2.jpg',
      '/assets/images/account/portfolio/3.jpg',
      '/assets/images/account/portfolio/4.jpg',
      '/assets/images/account/portfolio/5.jpg',
    ],
  },
  {
    title: 'Portfolio Title 3',
    comment:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    skills: ['skill_1', 'skill_2', 'skill_3', 'skill_4', 'skill_5'],
    imgsrc: [
      '/assets/images/account/portfolio/5.jpg',
      '/assets/images/account/portfolio/6.jpg',
      '/assets/images/account/portfolio/1.jpg',
      '/assets/images/account/portfolio/2.jpg',
      '/assets/images/account/portfolio/3.jpg',
      '/assets/images/account/portfolio/4.jpg',
    ],
  },
  {
    title: 'Portfolio Title 4',
    comment:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    skills: ['skill_1', 'skill_2', 'skill_3', 'skill_4', 'skill_5'],
    imgsrc: [
      '/assets/images/account/portfolio/2.jpg',
      '/assets/images/account/portfolio/3.jpg',
      '/assets/images/account/portfolio/4.jpg',
      '/assets/images/account/portfolio/5.jpg',
      '/assets/images/account/portfolio/6.jpg',
      '/assets/images/account/portfolio/1.jpg',
    ],
  },
];
const reviews = [
  {
    project: {
      title: 'Xây dựng Web App (kèm code) bằng Java + Mysql Database',
      skills: ['Java', 'MySQL'],
      budget: 630,
      currency: 'USD',
      date: Date('2023-7-11'),
    },
    client: {
      name: 'Lam V.',
      country: 'Vietnam',
      avatar: '/assets/avatar/1.png',
      rating: 5,
      comment:
        'write code very clearing and fastly. I will hire him again. Thank you very much for co-operation.',
    },
  },
  {
    project: {
      title: 'Fix database issue with ZKTIME.NET',
      skills: ['PHP', 'SQL', 'C# Programming', 'MySQL'],
      budget: 65,
      currency: 'USD',
      date: Date('2022-5-11'),
    },
    client: {
      name: 'Kevon J.',
      country: 'South Africa',
      avatar: '/assets/avatar/2.png',
      rating: 5,
      comment: 'Very professional freelancer, very knowledgeable and works well',
    },
  },
  {
    project: {
      title: 'Java Calculator -- 2',
      skills: ['Java', 'Object Oriented Programming(OOP)'],
      budget: 170,
      currency: 'USD',
      date: Date('2023-8-11'),
    },
    client: {
      name: 'Robert B.',
      country: 'United States',
      avatar: '',
      rating: 4.2,
      comment: 'Excellent Java calculator.',
    },
  },
];
const resume = {
  experience: [
    {
      title: 'Some title',
      company: 'Some company',
      from: Date().now,
      to: '',
      summary: 'Some summary',
    },
    {
      title: 'Some title',
      company: 'Some company',
      from: Date().now,
      to: Date().now,
      summary: 'Some summary',
    },
    {
      title: 'Some title',
      company: 'Some company',
      from: Date().now,
      to: Date().now,
      summary: '',
    },
  ],
  education: [
    {
      country: 'Australia',
      university: 'Some university',
      degree: 'Some degree',
      from: Date('2016-4-1'),
      to: Date('2016-4-2'),
    },
  ],
};
// ----------------------------------------------------------------------

export default function UserProfileView() {
  const settings = useSettingsContext();

  const [showingFreelancerProfile, setShowingFreelancerProfile] = useState(true);

  // const { user } = useMockedUser();

  const [currentTab, setCurrentTab] = useState('about');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      {/* <CustomBreadcrumbs
        heading="Prrofile"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Account', href: paths.dashboard.account.root },
          { name: user?.displayName },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      /> */}

      <Card
        sx={{
          mb: 3,
          height: 290,
        }}
      >
        <ProfileCover
          name="Jayden Frankie"
          title="Data analyst"
          avatarUrl="/assets/avatar/1.png"
          coverUrl={_userAbout.coverUrl}
          isFreelancer={showingFreelancerProfile}
          freelancerReview={[
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 5,
            },
          ]}
          freelancerIncome={5.6}
          freelancerCorate={100}
        />
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            width: 1,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            bgcolor: 'background.paper',
            [`& .${tabsClasses.flexContainer}`]: {
              pr: { md: 3 },
              justifyContent: {
                sm: 'center',
                md: 'flex-end',
              },
            },
          }}
        >
          {showingFreelancerProfile
            ? TABS_FREELANCER.map((tab) => (
                <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
              ))
            : TABS_CLIENT.map((tab) => (
                <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
              ))}
        </Tabs>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowingFreelancerProfile(!showingFreelancerProfile)}
          sx={{ position: 'absolute', top: 20, right: 20 }}
        >{`View ${!showingFreelancerProfile ? 'freelancer' : 'client'} profile`}</Button>
      </Card>

      {currentTab === 'about' && (
        <ProfileAboutMe isFreelancer={showingFreelancerProfile} isMine name="Me" isOnline />
      )}

      {currentTab === 'resume' && <ProfileResume resume={resume} isMine />}

      {currentTab === 'review' && (
        <ProfileReview reviews={reviews} isFreelancer={showingFreelancerProfile} />
      )}

      {currentTab === 'portfolio' && <ProfilePortfolio list={portfolios} isMine />}
    </Container>
  );
}

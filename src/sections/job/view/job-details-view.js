'use client';

import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// routes
// import { paths } from 'src/routes/paths';
// _mock
// import { JOB_PUBLISH_OPTIONS, JOB_DETAILS_TABS } from 'src/_mock';
// components
import Label from 'src/components/label';
import { useSettingsContext } from 'src/components/settings';
//
import JobDetailsContent from '../job-details-content';
import JobProposals from '../job-details-proposals';

// ----------------------------------------------------------------------
const _jobs = [
  {
    id: '00dasdf00000001',
    title: 'Web Development',
    feature: ['Featured', 'Sealed', 'NDA'],
    content:
      "Hello Freelancers, Are you a talented and passionate developer looking for exciting freelance opportunities? Shaum Kolakeri Agency is on the lookout for skilled individuals like you to join our team and help us deliver top-notch solutions to our clients. About Shaum Kolakeri Agency: At Shaum Kolakeri Agency, we're dedicated to providing our clients with high-quality digital solutions that drive their businesses forward. With a strong emphasis on creativity, innovation, and cutting-edge technology, we pride ourselves on delivering exceptional results. Why Work with Us? Diverse Projects: Joining Shaum Kolakeri Agency means you'll have the chance to work on a wide range of projects, from web development and mobile apps to e-commerce solutions and more. Flexibility: As a freelance developer, you'll enjoy the flexibility of choosing projects that match your skills and interests. We offer both short-term and long-term opportunities, so you can find the right fit for your schedule. Collaborative Environment: Our team is made up of creative and collaborative individuals who are passionate about what they do. You'll have the opportunity to learn from experienced professionals and contribute to exciting projects. What We're Looking For: We're seeking developers with expertise in various areas, including but not limited to: Web Development (HTML, CSS, JavaScript, PHP, etc.) Mobile App Development (iOS, Android) E-commerce Platforms (Magento, WooCommerce, Shopify) Database Management (SQL, NoSQL) UI/UX Design WordPress Development And more! If you have experience in any of these areas and are eager to take on freelance projects, we want to hear from you.",
    priceLow: 30,
    priceHigh: 250,
    currency: 'USD',
    skills: ['PHP', 'Graphic Design', 'WordPress', 'HTML', 'React.js'],
    date: new Date('Mon Oct 09 2023 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
    hourly: false,
    client: {
      reviews: [
        {
          jobtitle: 'Some Job Title',
          rating: 4.5,
          content: 'I would like to work with you again.',
          price: 500,
          currency: 'USD',
          date: new Date('Mon Jun 09 2023 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
          freelancer: 'Some freelancer',
        },
        {
          jobtitle: 'Some Job Title',
          rating: 5,
          content: 'I would like to work with you again.',
          price: 500,
          currency: 'USD',
          date: new Date('Mon Jun 08 2023 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
          freelancer: 'Some freelancer',
        },
        {
          jobtitle: 'Some Job Title',
          rating: 5,
          content: 'I would like to work with you again.',
          price: 500,
          currency: 'USD',
          date: new Date('Mon Jun 10 2023 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
          freelancer: 'Some freelancer',
        },
      ],
      location: 'United States',
      registeredAt: new Date('Mon Oct 09 2021 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
      isIdentityVerified: true,
      isPaymentVerified: true,
      isDepositMade: true,
      isEmailVerified: true,
      isProfileCompleted: false,
      isPhoneVerified: true,
    },
    bids: [
      {
        budget: 50,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 4.2,
            },
          ],
        },
      },
      {
        budget: 150,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
          ],
        },
      },
      {
        budget: 250,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '',
          reviews: [],
        },
      },
      {
        budget: 125,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
          ],
        },
      },
    ],
  },
  {
    id: '00asdgag00000002',
    title: 'Web Development - 2',
    feature: ['Urgent', 'Recruiter'],
    content:
      "Hello Freelancers, Are you a talented and passionate developer looking for exciting freelance opportunities? Shaum Kolakeri Agency is on the lookout for skilled individuals like you to join our team and help us deliver top-notch solutions to our clients. About Shaum Kolakeri Agency: At Shaum Kolakeri Agency, we're dedicated to providing our clients with high-quality digital solutions that drive their businesses forward. With a strong emphasis on creativity, innovation, and cutting-edge technology, we pride ourselves on delivering exceptional results. Why Work with Us? Diverse Projects: Joining Shaum Kolakeri Agency means you'll have the chance to work on a wide range of projects, from web development and mobile apps to e-commerce solutions and more. Flexibility: As a freelance developer, you'll enjoy the flexibility of choosing projects that match your skills and interests. We offer both short-term and long-term opportunities, so you can find the right fit for your schedule. Collaborative Environment: Our team is made up of creative and collaborative individuals who are passionate about what they do. You'll have the opportunity to learn from experienced professionals and contribute to exciting projects. What We're Looking For: We're seeking developers with expertise in various areas, including but not limited to: Web Development (HTML, CSS, JavaScript, PHP, etc.) Mobile App Development (iOS, Android) E-commerce Platforms (Magento, WooCommerce, Shopify) Database Management (SQL, NoSQL) UI/UX Design WordPress Development And more! If you have experience in any of these areas and are eager to take on freelance projects, we want to hear from you.",
    priceLow: 5,
    priceHigh: 30,
    currency: 'USD',
    skills: ['PHP', 'Graphic Design', 'HTML', 'React.js'],
    date: new Date('Mon Oct 09 2023 03:08:58 GMT+0900 (Yakutsk Standard Time)'),
    hourly: true,
    client: {
      reviews: [],
      location: 'United States',
      registeredAt: new Date('Mon Oct 09 2021 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
      isIdentityVerified: false,
      isPaymentVerified: true,
      isDepositMade: true,
      isEmailVerified: true,
      isProfileCompleted: false,
      isPhoneVerified: true,
    },
    bids: [
      {
        budget: 5,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 4.2,
            },
          ],
        },
      },
      {
        budget: 15,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 4.2,
            },
          ],
        },
      },
      {
        budget: 25,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 4.2,
            },
          ],
        },
      },
    ],
  },
  {
    id: '00asdfasdf0003',
    title: 'Web Development - 3',
    feature: ['IP Agreement'],
    content:
      "Hello Freelancers, Are you a talented and passionate developer looking for exciting freelance opportunities? Shaum Kolakeri Agency is on the lookout for skilled individuals like you to join our team and help us deliver top-notch solutions to our clients. About Shaum Kolakeri Agency: At Shaum Kolakeri Agency, we're dedicated to providing our clients with high-quality digital solutions that drive their businesses forward. With a strong emphasis on creativity, innovation, and cutting-edge technology, we pride ourselves on delivering exceptional results. Why Work with Us? Diverse Projects: Joining Shaum Kolakeri Agency means you'll have the chance to work on a wide range of projects, from web development and mobile apps to e-commerce solutions and more. Flexibility: As a freelance developer, you'll enjoy the flexibility of choosing projects that match your skills and interests. We offer both short-term and long-term opportunities, so you can find the right fit for your schedule. Collaborative Environment: Our team is made up of creative and collaborative individuals who are passionate about what they do. You'll have the opportunity to learn from experienced professionals and contribute to exciting projects. What We're Looking For: We're seeking developers with expertise in various areas, including but not limited to: Web Development (HTML, CSS, JavaScript, PHP, etc.) Mobile App Development (iOS, Android) E-commerce Platforms (Magento, WooCommerce, Shopify) Database Management (SQL, NoSQL) UI/UX Design WordPress Development And more! If you have experience in any of these areas and are eager to take on freelance projects, we want to hear from you.",
    priceLow: 30,
    priceHigh: 250,
    currency: 'USD',
    skills: ['PHP', 'Graphic Design', 'WordPress', 'HTML', 'React.js'],
    date: new Date('Mon Oct 09 2023 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
    hourly: false,
    client: {
      reviews: [
        {
          jobtitle: 'Some Job Title',
          rating: 3.5,
          content: 'I would like to work with you again.',
          price: 500,
          currency: 'USD',
          date: new Date('Mon Jun 09 2023 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
          freelancer: 'Some freelancer',
        },
      ],
      location: 'United States',
      registeredAt: new Date('Mon Oct 09 2021 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
      isIdentityVerified: true,
      isPaymentVerified: true,
      isDepositMade: false,
      isEmailVerified: true,
      isProfileCompleted: false,
      isPhoneVerified: true,
    },
    bids: [
      {
        budget: 50,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 4.2,
            },
          ],
        },
      },
    ],
  },
  {
    id: '00asdfasdf00004',
    title: 'Web Development - 3',
    feature: [],
    content:
      "Hello Freelancers, Are you a talented and passionate developer looking for exciting freelance opportunities? Shaum Kolakeri Agency is on the lookout for skilled individuals like you to join our team and help us deliver top-notch solutions to our clients. About Shaum Kolakeri Agency: At Shaum Kolakeri Agency, we're dedicated to providing our clients with high-quality digital solutions that drive their businesses forward. With a strong emphasis on creativity, innovation, and cutting-edge technology, we pride ourselves on delivering exceptional results. Why Work with Us? Diverse Projects: Joining Shaum Kolakeri Agency means you'll have the chance to work on a wide range of projects, from web development and mobile apps to e-commerce solutions and more. Flexibility: As a freelance developer, you'll enjoy the flexibility of choosing projects that match your skills and interests. We offer both short-term and long-term opportunities, so you can find the right fit for your schedule. Collaborative Environment: Our team is made up of creative and collaborative individuals who are passionate about what they do. You'll have the opportunity to learn from experienced professionals and contribute to exciting projects. What We're Looking For: We're seeking developers with expertise in various areas, including but not limited to: Web Development (HTML, CSS, JavaScript, PHP, etc.) Mobile App Development (iOS, Android) E-commerce Platforms (Magento, WooCommerce, Shopify) Database Management (SQL, NoSQL) UI/UX Design WordPress Development And more! If you have experience in any of these areas and are eager to take on freelance projects, we want to hear from you.",
    priceLow: 30,
    priceHigh: 250,
    currency: 'USD',
    skills: ['PHP', 'Graphic Design', 'WordPress', 'HTML', 'React.js'],
    date: new Date('Mon Oct 09 2023 05:08:58 GMT+0900 (Yakutsk Standard Time)'),
    hourly: false,
    client: {
      reviews: [
        {
          jobtitle: 'Some Job Title',
          rating: 4.5,
          content: 'I would like to work with you again.',
          price: 500,
          currency: 'USD',
          date: new Date('Mon Jun 09 2023 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
          freelancer: 'Some freelancer',
        },
      ],
      location: 'United Kingdom',
      registeredAt: new Date('Mon Oct 09 2021 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
      isIdentityVerified: true,
      isPaymentVerified: true,
      isDepositMade: true,
      isEmailVerified: true,
      isProfileCompleted: false,
      isPhoneVerified: true,
    },
    bids: [],
  },
  {
    id: '000asdfdsf00005',
    title: 'Web Dev',
    feature: ['Urgent', 'NDA'],
    content:
      "Hello Freelancers, Are you a talented and passionate developer looking for exciting freelance opportunities? Shaum Kolakeri Agency is on the lookout for skilled individuals like you to join our team and help us deliver top-notch solutions to our clients. About Shaum Kolakeri Agency: At Shaum Kolakeri Agency, we're dedicated to providing our clients with high-quality digital solutions that drive their businesses forward. With a strong emphasis on creativity, innovation, and cutting-edge technology, we pride ourselves on delivering exceptional results. Why Work with Us? Diverse Projects: Joining Shaum Kolakeri Agency means you'll have the chance to work on a wide range of projects, from web development and mobile apps to e-commerce solutions and more. Flexibility: As a freelance developer, you'll enjoy the flexibility of choosing projects that match your skills and interests. We offer both short-term and long-term opportunities, so you can find the right fit for your schedule. Collaborative Environment: Our team is made up of creative and collaborative individuals who are passionate about what they do. You'll have the opportunity to learn from experienced professionals and contribute to exciting projects. What We're Looking For: We're seeking developers with expertise in various areas, including but not limited to: Web Development (HTML, CSS, JavaScript, PHP, etc.) Mobile App Development (iOS, Android) E-commerce Platforms (Magento, WooCommerce, Shopify) Database Management (SQL, NoSQL) UI/UX Design WordPress Development And more! If you have experience in any of these areas and are eager to take on freelance projects, we want to hear from you.",
    priceLow: 15,
    priceHigh: 30,
    currency: 'USD',
    skills: ['Graphic Design', 'HTML', 'React.js'],
    date: new Date('Mon Oct 09 2023 23:08:58 GMT+0900 (Yakutsk Standard Time)'),
    hourly: true,
    client: {
      reviews: [],
      location: 'United Kingdom',
      registeredAt: new Date('Mon Oct 09 2021 02:08:58 GMT+0900 (Yakutsk Standard Time)'),
      isIdentityVerified: true,
      isPaymentVerified: true,
      isDepositMade: true,
      isEmailVerified: true,
      isProfileCompleted: false,
      isPhoneVerified: true,
    },
    bids: [
      {
        budget: 35,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 4.2,
            },
          ],
        },
      },
      {
        budget: 20,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 4.2,
            },
          ],
        },
      },
      {
        budget: 25,
        deadline: 30,
        bidState:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        freelancer: {
          name: 'Jaydon Frankie',
          title: 'Data Analyst',
          avatarUrl: '/assets/avatar/1.png',
          reviews: [
            {
              rating: 5,
            },
            {
              rating: 5,
            },
            {
              rating: 4.2,
            },
          ],
        },
      },
    ],
  },
];
// -----------------------------------------------------------------------------------------
export default function JobDetailsView({ id }) {
  const settings = useSettingsContext();

  const currentJob = _jobs.filter((job) => job.id === id)[0];

  // const [publish, setPublish] = useState(currentJob?.publish);

  const [currentTab, setCurrentTab] = useState('details');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);

  // const handleChangePublish = useCallback((newValue) => {
  //   setPublish(newValue);
  // }, []);

  const renderTabs = (
    <Tabs
      value={currentTab}
      onChange={handleChangeTab}
      sx={{
        mb: { xs: 3, md: 5 },
      }}
    >
      <Tab key="details" value="details" label="Details" />
      <Tab
        key="proposals"
        iconPosition="end"
        value="proposals"
        label="Proposals"
        icon={
          currentJob.bids.length ? <Label variant="filled">{currentJob.bids.length}</Label> : ''
        }
      />
    </Tabs>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Typography variant="h4" mb={2}>
        {currentJob?.title}
      </Typography>

      {renderTabs}

      {currentTab === 'details' && <JobDetailsContent job={currentJob} />}

      {currentTab === 'proposals' && (
        <JobProposals
          bids={currentJob?.bids}
          currency={currentJob?.currency}
          isHourly={currentJob?.hourly}
        />
      )}
    </Container>
  );
}

JobDetailsView.propTypes = {
  id: PropTypes.string,
};

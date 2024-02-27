'use client';

import orderBy from 'lodash/orderBy';
import isEqual from 'lodash/isEqual';
import { useState, useCallback } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// _mock
// import {
//   _roles,
//   JOB_BENEFIT_OPTIONS,
//   JOB_EXPERIENCE_OPTIONS,
//   JOB_EMPLOYMENT_TYPE_OPTIONS,
// } from 'src/_mock';
// assets
import { countries } from 'src/assets/data';
// components
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
// import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import JobList from '../job-list';
import JobSort from '../job-sort';
import JobSearch from '../job-search';
import JobFilters from '../job-filters';
import JobFiltersResult from '../job-filters-result';

// ----------------------------------------------------------------------
const JOB_SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'lowestPrice', label: 'Lowest Price' },
  { value: 'highestPrice', label: 'Highest Price' },
  { value: 'fewestBids', label: 'Fewest Bids' },
  { value: 'mostBids', label: 'Most Bids' },
];
const defaultFilters = {
  projectType: [],
  locations: [],
  skills: [],
  listingType: [],
  fixedRange: [0, 1510],
  hourlyRange: [0, 101],
};

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
        budget: 250,
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
            {
              rating: 4.2,
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

// ----------------------------------------------------------------------

export default function JobListView() {
  const settings = useSettingsContext();

  const openFilters = useBoolean();

  const [sortBy, setSortBy] = useState('latest');

  const [search, setSearch] = useState({
    query: '',
    results: [],
  });

  const [filters, setFilters] = useState(defaultFilters);

  const dataFiltered = applyFilter({
    inputData: _jobs,
    filters,
    sortBy,
  });

  const canReset = !isEqual(defaultFilters, filters);

  const notFound = !dataFiltered.length && canReset;

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback(
    (inputValue) => {
      setSearch((prevState) => ({
        ...prevState,
        query: inputValue,
      }));

      if (inputValue) {
        const results = _jobs.filter(
          (job) => job.title.toLowerCase().indexOf(search.query.toLowerCase()) !== -1
        );

        setSearch((prevState) => ({
          ...prevState,
          results,
        }));
      }
    },
    [search.query]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <JobSearch
        query={search.query}
        results={search.results}
        onSearch={handleSearch}
        hrefItem={(id) => paths.dashboard.job.details(id)}
      />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <JobFilters
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          //
          filters={filters}
          onFilters={handleFilters}
          //
          canReset={canReset}
          onResetFilters={handleResetFilters}
          //
          projectType={['Hourly Rate', 'Fixed Price']}
          listingType={['Featured', 'Sealed', 'NDA', 'Urgent', 'Recruiter', 'IP Agreement']}
          locationOptions={countries}
        />

        <JobSort sort={sortBy} onSort={handleSortBy} sortOptions={JOB_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  const renderResults = (
    <JobFiltersResult
      filters={filters}
      onResetFilters={handleResetFilters}
      //
      canReset={canReset}
      onFilters={handleFilters}
      //
      results={dataFiltered.length}
    />
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Typography variant="h4" mb={5}>
        Browse Jobs
      </Typography>
      <Stack
        spacing={2.5}
        sx={{
          mb: { xs: 1.5, md: 3 },
        }}
      >
        {renderFilters}

        {canReset && renderResults}
      </Stack>

      {notFound && <EmptyContent filled title="No Data" sx={{ py: 10 }} />}

      <JobList jobs={dataFiltered} />
    </Container>
  );
}

// ----------------------------------------------------------------------

const applyFilter = ({ inputData, filters, sortBy }) => {
  const { locations, projectType, listingType, skills, fixedRange, hourlyRange } = filters;
  // SORT BY
  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['date'], ['desc']);
  }
  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['date'], ['asc']);
  }
  if (sortBy === 'lowestPrice') {
    inputData = orderBy(inputData, ['priceLow'], ['asc']);
  }
  if (sortBy === 'highestPrice') {
    inputData = orderBy(inputData, ['priceHigh'], ['desc']);
  }
  if (sortBy === 'fewestBids') {
    inputData = orderBy(inputData, (inputdata) => inputdata.bids.length, ['asc']);
  }
  if (sortBy === 'mostBids') {
    inputData = orderBy(inputData, (inputdata) => inputdata.bids.length, ['desc']);
  }

  // FILTERS
  if (fixedRange[0] || fixedRange[1] < 1510) {
    if (fixedRange[1] === 1510) {
      inputData = inputData.filter(
        (job) => (job.priceHigh >= fixedRange[0] && !job.hourly) || job.hourly
      );
    } else {
      inputData = inputData.filter(
        (job) =>
          (job.priceHigh <= fixedRange[1] && job.priceHigh >= fixedRange[0] && !job.hourly) ||
          job.hourly
      );
    }
  }

  if (hourlyRange[0] || hourlyRange[1] < 110) {
    if (hourlyRange[1] === 110) {
      inputData = inputData.filter(
        (job) => (job.priceHigh >= hourlyRange[0] && job.hourly) || !job.hourly
      );
    } else {
      inputData = inputData.filter(
        (job) =>
          (job.priceHigh <= hourlyRange[1] && job.priceHigh >= hourlyRange[0] && job.hourly) ||
          !job.hourly
      );
    }
  }

  if (locations.length) {
    inputData = inputData.filter((job) => locations.includes(job.client.location));
  }

  if (projectType.length === 1) {
    inputData = inputData.filter((job) => {
      if (projectType.includes('Hourly Rate')) return job.hourly === true;
      return job.hourly === false;
    });
  }

  if (skills.length) {
    inputData = inputData.filter((job) => {
      let i = 0;
      skills.map((skill) => {
        if (job.skills.includes(skill)) i += 1;
        return i;
      });
      return i === skills.length;
    });
  }

  if (listingType.length) {
    inputData = inputData.filter((job) => {
      let i = 0;
      listingType.map((list) => {
        if (job.feature.includes(list)) i += 1;
        return i;
      });
      return i === listingType.length;
    });
  }

  return inputData;
};

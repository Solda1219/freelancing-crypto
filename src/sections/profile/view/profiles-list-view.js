'use client';

import { useState, useCallback } from 'react';

import orderBy from 'lodash/orderBy';
import isEqual from 'lodash/isEqual';
// mui
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// assets
import { countries } from 'src/assets/data';
// components
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import Iconify from 'src/components/iconify/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
//
import ProfileList from '../profile-list';
import ProfileFilter from '../profile-filter';
import ProfileFilterResult from '../profile-filter-result';

const _profiles = [
  {
    id: '0000111122220001',
    name: 'Jayden Frankie',
    title: 'Data Analyst',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 5,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 5,
      },
      {
        rating: 5,
      },
    ],
    earning: 7.5,
    corate: 95,
    intro:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    skills: ['iPhone', 'Website Design', 'PHP', 'Java', 'JavaScript'],
    avatar: '/assets/avatar/1.png',
    online: true,
    salary: 30,
    country: 'United States',
  },
  {
    id: '0000111122220002',
    name: 'Jayden Frankie',
    title: 'Data Analyst',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
    ],
    earning: 4.5,
    corate: 75,
    intro:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    skills: ['Mobile App Development', 'PHP', 'Java', 'JavaScript'],
    avatar: '/assets/avatar/1.png',
    online: false,
    salary: 25,
    country: 'United States',
  },
  {
    id: '0000111122220003',
    name: 'Jayden Frankie',
    title: 'Data Analyst',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
    ],
    earning: 1.5,
    corate: 100,
    intro:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    skills: ['PHP', 'Java', 'Logo Design', 'iPhone'],
    avatar: '',
    online: true,
    salary: 10,
    country: 'United Kingdom',
  },
];

const FREELANCER_SORT_OPTIONS = [
  { value: 'most relevant', label: 'most Relevant' },
  { value: 'most review', label: 'Most Review' },
  { value: 'least review', label: 'Least Review' },
  { value: 'highest hourly rate', label: 'Highest Hourly Rate' },
  { value: 'lowest hourly rate', label: 'Lowest Hourly Rate' },
  { value: 'highest rating', label: 'Highest Rating' },
  { value: 'lowest rating', label: 'Lowest Rating' },
];
const defaultFilters = {
  hourlyRate: [0, 101],
  skills: [],
  locations: [],
  online: false,
  rating: 0,
  reviews: [0, 101],
};

export default function ProfilesListView() {
  const settings = useSettingsContext();
  const [sortBy, setSortBy] = useState('most relevant');
  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);
  const popover = usePopover();
  const openFilters = useBoolean();
  const [filters, setFilters] = useState(defaultFilters);
  const dataFiltered = applyFilter({ inputData: _profiles, filters, sortBy });
  const canReset = !isEqual(defaultFilters, filters);
  const notFound = !dataFiltered.length && canReset;
  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);
  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const renderBar = (
    <Stack spacing={3} justifyContent="space-between" alignItems="center" direction="row">
      <Typography>
        <b>{`${dataFiltered.length > 0 ? dataFiltered.length : 'No'} ${
          dataFiltered.length > 1 ? 'Freelancers' : 'Freelancer'
        } Found`}</b>
      </Typography>
      <Stack direction="row" spacing={1} flexShrink={0}>
        <ProfileFilter
          open={openFilters.value}
          onOpen={openFilters.onTrue}
          onClose={openFilters.onFalse}
          filters={filters}
          onFilters={handleFilters}
          canReset={canReset}
          onResetFilters={handleResetFilters}
          locationOptions={countries}
        />
        <Button
          disableRipple
          color="inherit"
          onClick={popover.onOpen}
          endIcon={
            <Iconify
              icon={popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            />
          }
          sx={{ fontWeight: 'fontWeightSemiBold' }}
        >
          Sort By:
          <Box
            component="span"
            sx={{ ml: 0.5, fontWeight: 'fontWeightBold', textTransform: 'capitalize' }}
          >
            {sortBy}
          </Box>
        </Button>
        <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 160 }}>
          {FREELANCER_SORT_OPTIONS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === sortBy}
              onClick={() => {
                popover.onClose();
                handleSortBy(option.value);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </CustomPopover>
      </Stack>
    </Stack>
  );
  const renderResults = (
    <ProfileFilterResult
      filters={filters}
      onResetFilters={handleResetFilters}
      canReset={canReset}
      onFilters={handleFilters}
    />
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <Typography variant="h4" mb={5}>
        Browse Freelancers
      </Typography>
      <Stack spacing={2.5} sx={{ mb: { xs: 1.5, md: 3 } }}>
        {renderBar}
        {canReset && renderResults}
      </Stack>
      {notFound && <EmptyContent filled title="No Profile" sx={{ py: 10 }} />}
      <Stack spacing={3}>
        {dataFiltered.map((profile, index) => (
          <ProfileList key={index} profile={profile} />
        ))}
      </Stack>
    </Container>
  );
}

const applyFilter = ({ inputData, filters, sortBy }) => {
  const { hourlyRate, skills, locations, online, rating, reviews } = filters;
  // SORT BY
  if (sortBy === 'most relevant') {
    inputData = orderBy(inputData, ['earning'], ['desc']);
  }
  if (sortBy === 'most review') {
    inputData = orderBy(inputData, (inputdata) => inputdata.reviews.length, ['desc']);
  }
  if (sortBy === 'least review') {
    inputData = orderBy(inputData, (inputdata) => inputdata.reviews.length, ['asc']);
  }
  if (sortBy === 'highest hourly rate') {
    inputData = orderBy(inputData, ['salary'], ['desc']);
  }
  if (sortBy === 'lowest hourly rate') {
    inputData = orderBy(inputData, ['salary'], ['asc']);
  }
  if (sortBy === 'highest rating') {
    inputData = orderBy(
      inputData,
      (inputdata) =>
        inputdata.reviews.reduce((total, review) => total + review.rating, 0) /
        inputdata.reviews.length,
      ['desc']
    );
  }
  if (sortBy === 'lowest rating') {
    inputData = orderBy(
      inputData,
      (inputdata) =>
        inputdata.reviews.reduce((total, review) => total + review.rating, 0) /
        inputdata.reviews.length,
      ['asc']
    );
  }

  // FILTERS
  if (hourlyRate[0] || hourlyRate[1] < 101) {
    if (hourlyRate[1] === 101) {
      inputData = inputData.filter((profile) => profile.salary >= hourlyRate[0]);
    } else {
      inputData = inputData.filter(
        (profile) => profile.salary >= hourlyRate[0] && profile.salary <= hourlyRate[1]
      );
    }
  }
  if (skills.length) {
    inputData = inputData.filter((profile) => {
      let i = 0;
      skills.map((skill) => {
        if (profile.skills.includes(skill)) i += 1;
        return i;
      });
      return i === skills.length;
    });
  }
  if (locations.length) {
    inputData = inputData.filter((profile) => locations.includes(profile.country));
  }
  if (online) {
    inputData = inputData.filter((profile) => profile.online);
  }
  if (rating > 0) {
    inputData = inputData.filter(
      (profile) =>
        profile.reviews.reduce((total, review) => total + review.rating, 0) /
          profile.reviews.length >=
        rating
    );
  }
  if (reviews[0] || reviews[1] < 101) {
    if (reviews[1] === 101) {
      inputData = inputData.filter((profile) => profile.reviews.length >= reviews[0]);
    } else {
      inputData = inputData.filter(
        (profile) => profile.reviews.length >= reviews[0] && profile.reviews.length <= reviews[1]
      );
    }
  }
  return inputData;
};

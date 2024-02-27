import { useState, useCallback } from 'react';

// @mui
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Rating from '@mui/material/Rating';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

export default function ProfileFilter({
  open,
  onOpen,
  onClose,
  filters,
  onFilters,
  canReset,
  onResetFilters,
  locationOptions,
}) {
  const [hourlyRate, setHourlyRate] = useState([0, 101]);
  const [ratingHover, setRatingHover] = useState(-1);
  const [reviewCount, setReviewCount] = useState([0, 101]);

  const handleFilterSkills = useCallback(
    (newValue) => {
      const checked = filters.skills.includes(newValue)
        ? filters.skills.filter((value) => value !== newValue)
        : [...filters.skills, newValue];
      onFilters('skills', checked);
    },
    [filters.skills, onFilters]
  );
  const handleFilterLocations = useCallback(
    (newValue) => {
      onFilters('locations', newValue);
    },
    [onFilters]
  );

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2, pr: 1, pl: 2.5 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Filters
      </Typography>
      <Tooltip title="Reset">
        <IconButton
          onClick={() => {
            onResetFilters();
            setHourlyRate([0, 101]);
            setRatingHover(-1);
            setReviewCount([0, 101]);
          }}
        >
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>
      <IconButton onClick={onClose}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>
    </Stack>
  );
  const renderHourlyRate = (
    <Stack>
      <Typography variant="subtitle1" mb={1.5}>
        Hourly Rate
      </Typography>
      <Slider
        value={hourlyRate}
        min={0}
        max={101}
        step={1}
        onChange={(event, newValue, activeThumb) => {
          if (!Array.isArray(newValue)) {
            return;
          }
          if (newValue[1] - newValue[0] < 1) {
            if (activeThumb === 0) {
              const clamped = Math.min(newValue[0], 101 - 1);
              setHourlyRate([clamped, clamped + 1]);
            } else {
              const clamped = Math.max(newValue[1], 100);
              setHourlyRate([clamped - 1, clamped]);
            }
          } else {
            setHourlyRate(newValue);
          }
          onFilters('hourlyRate', newValue);
        }}
        valueLabelFormat={(value) => (value <= 100 ? value : '100+')}
        valueLabelDisplay="auto"
        disableSwap
        sx={{ width: '95%', ml: 1 }}
      />
    </Stack>
  );
  const renderSkills = (
    <Stack>
      <Typography variant="subtitle1" mb={1.5}>
        Skills
      </Typography>
      <TextField
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 1 }}
      />
      {[
        'Website Design',
        'Logo Design',
        'Mobile App Development',
        'Data Entry',
        'Article Writing',
      ].map((skill) => (
        <FormControlLabel
          key={skill}
          control={
            <Checkbox
              checked={filters.skills.includes(skill)}
              onClick={() => handleFilterSkills(skill)}
            />
          }
          label={skill}
          sx={{ ml: 0.1 }}
        />
      ))}
    </Stack>
  );
  const renderLocation = (
    <Stack>
      <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
        Locations
      </Typography>
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={locationOptions.map((option) => option.label)}
        getOptionLabel={(option) => option}
        value={filters.locations}
        onChange={(event, newValue) => handleFilterLocations(newValue)}
        renderInput={(params) => <TextField placeholder="Select Locations" {...params} />}
        renderOption={(props, option) => {
          const { code, label, phone } = locationOptions.filter(
            (country) => country.label === option
          )[0];

          if (!label) {
            return null;
          }

          return (
            <li {...props} key={label}>
              <Iconify
                key={label}
                icon={`circle-flags:${code.toLowerCase()}`}
                width={28}
                sx={{ mr: 1 }}
              />
              {label} ({code}) +{phone}
            </li>
          );
        }}
        renderTags={(selected, getTagProps) =>
          selected.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option}
              label={option}
              size="small"
              variant="soft"
            />
          ))
        }
      />
    </Stack>
  );
  const renderOnline = (
    <Stack>
      <Typography variant="subtitle1" mb={1.5}>
        Online
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={filters.online}
            onChange={(e) => onFilters('online', e.target.checked)}
          />
        }
        label="Online freelancers only"
      />
    </Stack>
  );
  const renderRating = (
    <Stack>
      <Typography variant="subtitle1" mb={1.5}>
        Rating
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Rating
          value={filters.rating}
          onChange={(e, value) => onFilters('rating', value)}
          precision={0.1}
          onChangeActive={(e, hover) => setRatingHover(hover)}
        />
        <Typography>{ratingHover !== -1 ? ratingHover : null}</Typography>
      </Stack>
    </Stack>
  );
  const renderReviews = (
    <Stack>
      <Typography variant="subtitle1" mb={1.5}>
        Reviews
      </Typography>
      <Slider
        value={reviewCount}
        min={0}
        max={101}
        step={1}
        onChange={(event, newValue, activeThumb) => {
          if (!Array.isArray(newValue)) {
            return;
          }
          if (newValue[1] - newValue[0] < 1) {
            if (activeThumb === 0) {
              const clamped = Math.min(newValue[0], 101 - 1);
              setReviewCount([clamped, clamped + 1]);
            } else {
              const clamped = Math.max(newValue[1], 100);
              setReviewCount([clamped - 1, clamped]);
            }
          } else {
            setReviewCount(newValue);
          }
          onFilters('reviews', newValue);
        }}
        valueLabelFormat={(value) => (value <= 100 ? value : '100+')}
        valueLabelDisplay="auto"
        disableSwap
        sx={{ width: '95%', ml: 1 }}
      />
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="ic:round-filter-list" />
          </Badge>
        }
        onClick={onOpen}
      >
        Filters
      </Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 280 } }}
      >
        {renderHead}
        <Divider />
        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            {renderHourlyRate}
            {renderSkills}
            {renderLocation}
            {renderOnline}
            {renderRating}
            {renderReviews}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

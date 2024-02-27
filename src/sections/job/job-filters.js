import { useCallback, useState } from 'react';
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
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export default function JobFilters({
  open,
  onOpen,
  onClose,
  //
  filters,
  onFilters,
  //
  canReset,
  onResetFilters,
  //
  projectType,
  listingType,
  locationOptions,
}) {
  const [showFixed, setShowFixed] = useState(true);
  const [showHourly, setShowHourly] = useState(true);
  const [viewmore, setViewmore] = useState(false);
  const topSkills = [
    'PHP',
    'C Progamming',
    'JavaScript',
    'Python',
    'C# Programming',
    'Ruby on Rails',
    'Java',
  ];
  const fewSkills = topSkills.slice(0, 5);
  const [fixedPrice, setFixedPrice] = useState([0, 1510]);
  const [hourlyPrice, setHourlyPrice] = useState([0, 110]);

  const handleChangeFixed = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (newValue[1] - newValue[0] < 100) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1510 - 100);
        setFixedPrice([clamped, clamped + 100]);
      } else {
        const clamped = Math.max(newValue[1], 100);
        setFixedPrice([clamped - 100, clamped]);
      }
    } else {
      setFixedPrice(newValue);
    }
    onFilters('fixedRange', newValue);
  };

  const handleChangeHourly = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (newValue[1] - newValue[0] < 1) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 101 - 1);
        setHourlyPrice([clamped, clamped + 1]);
      } else {
        const clamped = Math.max(newValue[1], 1);
        setHourlyPrice([clamped - 10, clamped]);
      }
    } else {
      setHourlyPrice(newValue);
    }
    onFilters('hourlyRange', newValue);
  };

  const handleFilterLocations = useCallback(
    (newValue) => {
      onFilters('locations', newValue);
    },
    [onFilters]
  );

  const handleFilterProjectType = useCallback(
    (newValue) => {
      const checked = filters.projectType.includes(newValue)
        ? filters.projectType.filter((value) => value !== newValue)
        : [...filters.projectType, newValue];
      onFilters('projectType', checked);
      if (checked.length === 1) {
        if (checked.includes('Hourly Rate')) {
          setShowFixed(false);
          setShowHourly(true);
        } else {
          setShowFixed(true);
          setShowHourly(false);
        }
      } else {
        setShowFixed(true);
        setShowHourly(true);
      }
    },
    [filters.projectType, onFilters]
  );
  const handleFilterListingType = useCallback(
    (newValue) => {
      const checked = filters.listingType.includes(newValue)
        ? filters.listingType.filter((value) => value !== newValue)
        : [...filters.listingType, newValue];
      onFilters('listingType', checked);
    },
    [filters.listingType, onFilters]
  );
  const handleFilterSkills = useCallback(
    (newValue) => {
      const checked = filters.skills.includes(newValue)
        ? filters.skills.filter((value) => value !== newValue)
        : [...filters.skills, newValue];
      onFilters('skills', checked);
    },
    [filters.skills, onFilters]
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
            setShowFixed(true);
            setShowHourly(true);
            setFixedPrice([0, 1510]);
            setHourlyPrice([0, 110]);
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
  const renderProjectType = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Project type
      </Typography>
      {projectType.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={filters.projectType.includes(option)}
              onClick={() => handleFilterProjectType(option)}
            />
          }
          label={option}
          sx={{ ml: 0.1 }}
        />
      ))}
    </Stack>
  );
  const renderFixedPrice = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Fixed price
      </Typography>
      <Slider
        value={fixedPrice}
        min={0}
        step={10}
        max={1510}
        onChange={handleChangeFixed}
        valueLabelFormat={(value) => (value <= 1500 ? value : `1500+`)}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Stack>
  );
  const renderHourlyPrice = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
        Hourly rate
      </Typography>
      <Slider
        value={hourlyPrice}
        min={0}
        step={1}
        max={101}
        onChange={handleChangeHourly}
        valueLabelFormat={(value) => (value <= 100 ? value : `100+`)}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Stack>
  );
  const renderSkills = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 2 }}>
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
      {viewmore
        ? topSkills.map((skill) => (
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
          ))
        : fewSkills.map((skill) => (
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
      <Button size="small" sx={{ mt: 1 }} onClick={() => setViewmore(!viewmore)}>
        {viewmore ? 'View less' : 'View more'}
      </Button>
    </Stack>
  );
  const renderListingType = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Listing type
      </Typography>
      {listingType.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={filters.listingType.includes(option)}
              onClick={() => handleFilterListingType(option)}
            />
          }
          label={option}
          sx={{ ml: 0.1 }}
        />
      ))}
    </Stack>
  );
  const renderLocations = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Client locations
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
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 280 },
        }}
      >
        {renderHead}

        <Divider />

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            {renderProjectType}
            {showFixed && renderFixedPrice}
            {showHourly && renderHourlyPrice}
            {renderSkills}
            {renderListingType}
            {renderLocations}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// JobFilters.propTypes = {
//   benefitOptions: PropTypes.array,
//   canReset: PropTypes.bool,
//   employmentTypeOptions: PropTypes.array,
//   experienceOptions: PropTypes.array,
//   filters: PropTypes.object,
//   locationOptions: PropTypes.array,
//   onClose: PropTypes.func,
//   onFilters: PropTypes.func,
//   onOpen: PropTypes.func,
//   onResetFilters: PropTypes.func,
//   open: PropTypes.bool,
//   roleOptions: PropTypes.array,
// };

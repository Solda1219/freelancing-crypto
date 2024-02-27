// @mui
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// components
import Iconify from 'src/components/iconify';

export default function ProfileFilterResult({
  filters,
  onFilters,
  canReset,
  onResetFilters,
  ...other
}) {
  const handleRemoveLocations = (inputValue) => {
    const newValue = filters.locations.filter((item) => item !== inputValue);
    onFilters('locations', newValue);
  };
  const handleRemoveSkills = (inputValue) => {
    const newValue = filters.skills.filter((item) => item !== inputValue);
    onFilters('skills', newValue);
  };
  const handleRemoveHourlyRate = () => {
    onFilters('hourlyRate', [0, 101]);
  };
  const handleRemoveReviews = () => {
    onFilters('reviews', [0, 101]);
  };
  const handleRemoveOnline = () => {
    onFilters('online', false);
  };
  const handleRemoveRating = () => {
    onFilters('rating', 0);
  };
  return (
    <Stack flexGrow={1} spacing={1} direction="row" flexWrap="wrap" alignItems="center" {...other}>
      {!!(filters.hourlyRate[0] || filters.hourlyRate[1] < 101) && (
        <Block label="Hourly Rate:">
          <Chip
            key="hourlyRate"
            label={
              filters.hourlyRate[1] > 100
                ? `Higher than ${filters.hourlyRate[0]} USD`
                : `${filters.hourlyRate[0]} USD - ${filters.hourlyRate[1]} USD`
            }
            size="small"
            onDelete={() => handleRemoveHourlyRate()}
          />
        </Block>
      )}
      {!!filters.skills.length && (
        <Block label="Skills:">
          {filters.skills.map((item) => (
            <Chip key={item} label={item} size="small" onDelete={() => handleRemoveSkills(item)} />
          ))}
        </Block>
      )}
      {!!filters.locations.length && (
        <Block label="Locations:">
          {filters.locations.map((item) => (
            <Chip
              key={item}
              label={item}
              size="small"
              onDelete={() => handleRemoveLocations(item)}
            />
          ))}
        </Block>
      )}
      {!!filters.online && (
        <Chip
          key="online"
          label="Show online freelancers only"
          size="small"
          onDelete={() => handleRemoveOnline()}
        />
      )}
      {!!(filters.rating > 0) && (
        <Block label="Rating:">
          <Chip
            key="rating"
            label={`Higher than ${filters.rating}`}
            size="small"
            onDelete={() => handleRemoveRating()}
          />
        </Block>
      )}
      {!!(filters.reviews[0] || filters.reviews[1] < 101) && (
        <Block label="Reviews:">
          <Chip
            key="reviews"
            label={
              filters.reviews[1] > 100
                ? `More than ${filters.reviews[0]} reviews`
                : `${filters.reviews[0]} - ${filters.reviews[1]} reviews`
            }
            size="small"
            onDelete={() => handleRemoveReviews()}
          />
        </Block>
      )}
      {canReset && (
        <Button
          color="error"
          onClick={onResetFilters}
          startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
        >
          Clear
        </Button>
      )}
    </Stack>
  );
}

function Block({ label, children, sx, ...other }) {
  return (
    <Stack
      component={Paper}
      variant="outlined"
      spacing={1}
      direction="row"
      sx={{
        p: 1,
        borderRadius: 1,
        overflow: 'hidden',
        borderStyle: 'dashed',
        ...sx,
      }}
      {...other}
    >
      <Box component="span" sx={{ typography: 'subtitle2' }}>
        {label}
      </Box>

      <Stack spacing={1} direction="row" flexWrap="wrap">
        {children}
      </Stack>
    </Stack>
  );
}

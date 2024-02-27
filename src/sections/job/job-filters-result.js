import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function JobFiltersResult({
  filters,
  onFilters,
  //
  canReset,
  onResetFilters,
  //
  results,
  ...other
}) {
  const handleRemoveLocations = (inputValue) => {
    const newValue = filters.locations.filter((item) => item !== inputValue);
    onFilters('locations', newValue);
  };

  const handleRemoveProjectType = (inputValue) => {
    const newValue = filters.projectType.filter((item) => item !== inputValue);
    onFilters('projectType', newValue);
  };

  const handleRemoveListingType = (inputValue) => {
    const newValue = filters.listingType.filter((item) => item !== inputValue);
    onFilters('listingType', newValue);
  };

  const handleRemoveSkills = (inputValue) => {
    const newValue = filters.skills.filter((item) => item !== inputValue);
    onFilters('skills', newValue);
  };

  const handleRemoveFixed = () => {
    onFilters('fixedRange', [0, 1510]);
  };

  const handleRemoveHourly = () => {
    onFilters('hourlyRange', [0, 101]);
  };

  return (
    <Stack spacing={1.5} {...other} ml={2}>
      <Box sx={{ typography: 'body2' }}>
        <strong>{results}</strong>
        <Box component="span" sx={{ color: 'text.secondary', ml: 0.5 }}>
          results found
        </Box>
      </Box>

      <Stack flexGrow={1} spacing={1} direction="row" flexWrap="wrap" alignItems="center">
        {!!filters.projectType.length && (
          <Block label="Project type:">
            {filters.projectType.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                onDelete={() => handleRemoveProjectType(item)}
              />
            ))}
          </Block>
        )}
        {!!(filters.fixedRange[0] || filters.fixedRange[1] < 1510) && (
          <Block label="Fixed price:">
            <Chip
              key="fixed"
              label={
                filters.fixedRange[1] > 1500
                  ? `Higher than ${filters.fixedRange[0]} USD`
                  : `${filters.fixedRange[0]} USD - ${filters.fixedRange[1]} USD`
              }
              size="small"
              onDelete={() => handleRemoveFixed()}
            />
          </Block>
        )}
        {!!(filters.hourlyRange[0] || filters.hourlyRange[1] < 101) && (
          <Block label="Hourly price:">
            <Chip
              key="hourly"
              label={
                filters.hourlyRange[1] > 100
                  ? `Higher than ${filters.hourlyRange[0]} USD`
                  : `${filters.hourlyRange[0]} USD - ${filters.hourlyRange[1]} USD`
              }
              size="small"
              onDelete={() => handleRemoveHourly()}
            />
          </Block>
        )}
        {!!filters.skills.length && (
          <Block label="Skills:">
            {filters.skills.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                onDelete={() => handleRemoveSkills(item)}
              />
            ))}
          </Block>
        )}
        {!!filters.listingType.length && (
          <Block label="Listing type:">
            {filters.listingType.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                onDelete={() => handleRemoveListingType(item)}
              />
            ))}
          </Block>
        )}
        {!!filters.locations.length && (
          <Block label="Client locations:">
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
    </Stack>
  );
}

JobFiltersResult.propTypes = {
  canReset: PropTypes.bool,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  onResetFilters: PropTypes.func,
  results: PropTypes.number,
};

// ----------------------------------------------------------------------

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

Block.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  sx: PropTypes.object,
};

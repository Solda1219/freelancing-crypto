import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
//
import JobItem from './job-item';

// ----------------------------------------------------------------------

export default function JobList({ jobs }) {
  // const router = useRouter();

  // const handleView = useCallback(
  //   (id) => {
  //     router.push(paths.dashboard.joblisting.details(id));
  //   },
  //   [router]
  // );

  // const handleEdit = useCallback(
  //   (id) => {
  //     router.push(paths.dashboard.job.edit(id));
  //   },
  //   [router]
  // );

  // const handleDelete = useCallback((id) => {
  //   console.info('DELETE', id);
  // }, []);

  return (
    <>
      <Box gap={3} display="grid" gridTemplateColumns="repeat(1, 1fr)">
        {jobs.map((job) => (
          <JobItem
            key={job.id}
            job={job}
            // onView={() => handleView(job.id)}
            // onEdit={() => handleEdit(job.id)}
            // onDelete={() => handleDelete(job.id)}
          />
        ))}
      </Box>

      {jobs.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}

JobList.propTypes = {
  jobs: PropTypes.array,
};

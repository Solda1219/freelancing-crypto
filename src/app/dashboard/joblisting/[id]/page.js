// sections
import { JobDetailsView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Job Details',
};

export default function JobDetailsPage({ params }) {
  const { id } = params;

  return <JobDetailsView id={id} />;
}

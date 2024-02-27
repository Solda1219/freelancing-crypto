// sections
import { FreelancerProfileView } from 'src/sections/profile/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Freelancer Profile',
};

export default function FreelancerProfilePage({ params }) {
  const { id } = params;

  return <FreelancerProfileView id={id} />;
}

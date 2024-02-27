'use client';

// @mui
import Container from '@mui/material/Container';
// routes
// import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
//
import ProfileCreate from '../profile-create';

// ----------------------------------------------------------------------

export default function UserCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      {/* <CustomBreadcrumbs
        heading="Create your profile"
        links={[
          {
            name: 'Cryptolancer',
            href: paths.homepage,
          },
          // {
          //   name: 'User',
          //   href: paths.dashboard.user.root,
          // },
          { name: 'New user' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      /> */}
      <ProfileCreate />
    </Container>
  );
}

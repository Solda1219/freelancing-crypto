import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  // blog: icon('ic_blog'),
  // chat: icon('ic_chat'),
  // mail: icon('ic_mail'),
  user: icon('ic_user'),
  // file: icon('ic_file'),
  // lock: icon('ic_lock'),
  // tour: icon('ic_tour'),
  // order: icon('ic_order'),
  // label: icon('ic_label'),
  // blank: icon('ic_blank'),
  // kanban: icon('ic_kanban'),
  // folder: icon('ic_folder'),
  // banking: icon('ic_banking'),
  // booking: icon('ic_booking'),
  // invoice: icon('ic_invoice'),
  // product: icon('ic_product'),
  // calendar: icon('ic_calendar'),
  // disabled: icon('ic_disabled'),
  // external: icon('ic_external'),
  // menuItem: icon('ic_menu_item'),
  // ecommerce: icon('ic_ecommerce'),
  // analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  profiles: icon('ic_profiles'),
  service: icon('ic_service'),
  statistic: icon('ic_statistic'),
  projects: icon('ic_projects'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(() => [
    // DASHBOARD
    // ----------------------------------------------------------------------
    { items: [{ title: 'dashboard', path: paths.dashboard.root, icon: ICONS.dashboard }] },
    {
      subheader: 'explore',
      items: [
        { title: 'jobs', path: paths.dashboard.joblisting.root, icon: ICONS.job },
        {
          title: 'Browse Profiles',
          path: paths.dashboard.browseprofiles.root,
          icon: ICONS.profiles,
        },
        {
          title: 'Services',
          path: paths.dashboard.services.root,
          icon: ICONS.service,
        },
      ],
    },

    // ACCOUNT
    // ----------------------------------------------------------------------
    {
      subheader: 'account',
      items: [
        {
          title: 'your profile',
          path: paths.dashboard.account.root,
          icon: ICONS.user,
          // children: [
          //   { title: 'Your profile', path: paths.dashboard.account.root },
          //   { title: 'Edit your profile', path: paths.dashboard.account.profileEdit },
          //   { title: 'six', path: paths.dashboard.account.six },
          // ],
        },
        {
          title: 'statistics',
          path: paths.dashboard.account.statistics,
          icon: ICONS.statistic,
        },
        {
          title: 'my projects',
          path: paths.dashboard.account.projectManagement,
          icon: ICONS.projects,
        },
      ],
    },
  ]);

  return data;
}

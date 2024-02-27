// ----------------------------------------------------------------------

const ROOTS = {
  HOMEPAGE: '/',
  // AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  // auth: {
  //   jwt: {
  //     login: `${ROOTS.AUTH}/jwt/login`,
  //     register: `${ROOTS.AUTH}/jwt/register`,
  //   },
  // },
  // DASHBOARD
  homepage: ROOTS.HOMEPAGE,
  createprofile: '/createprofile',
  hirefreelancer: {
    root: './hirefreelancer',
    postjob: '/hirefreelancer/postjob',
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
    joblisting: {
      root: `${ROOTS.DASHBOARD}/joblisting`,
      details: (id) => `${ROOTS.DASHBOARD}/joblisting/${id}`,
    },
    services: {
      root: `${ROOTS.DASHBOARD}/services`,
      details: `${ROOTS.DASHBOARD}/services/detail`,
    },
    browseprofiles: {
      root: `${ROOTS.DASHBOARD}/browseprofiles`,
      details: (id) => `${ROOTS.DASHBOARD}/browseprofiles/${id}`,
    },
    account: {
      root: `${ROOTS.DASHBOARD}/profile`,
      statistics: `${ROOTS.DASHBOARD}/statistics`,
      projectManagement: `${ROOTS.DASHBOARD}/projects`,
    },
  },
};

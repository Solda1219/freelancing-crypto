import PropTypes from 'prop-types';
import { useEffect, useCallback, useState } from 'react';
import { useAccount } from 'wagmi';
// routes
// import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
//
// import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

// const loginPaths = {
//   jwt: paths.auth.jwt.login,
// };

// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
  const router = useRouter();

  // const { authenticated, method } = useAuthContext();
  const authenticated = useAccount().isConnected;
  console.log('111', authenticated);
  const [checked, setChecked] = useState(false);

  // const check = useCallback(() => {
  //   if (!authenticated) {
  //     const searchParams = new URLSearchParams({
  //       returnTo: window.location.pathname,
  //     }).toString();

  //     const loginPath = loginPaths[method];

  //     const href = `${loginPath}?${searchParams}`;

  //     router.replace(href);
  //   } else {
  //     setChecked(true);
  //   }
  // }, [authenticated, method, router]);

  const check = useCallback(() => {
    if (!authenticated) {
      const href = '/';
      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [authenticated, router]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};

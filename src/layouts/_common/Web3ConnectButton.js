import { useState } from 'react';
import { m } from 'framer-motion';
// web3modal
import { useAccount, useNetwork, useBalance } from 'wagmi';
import { useWeb3Modal, useWeb3ModalTheme } from '@web3modal/wagmi/react';
import { disconnect } from '@wagmi/core';
//
import Image from 'next/image';
// @mui
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
import { useTheme } from '@mui/material/styles';
// config
import { defaultChains } from 'src/wallet/chains';
// hooks
import useCopyToClipboard from 'src/hooks/useCopyToClipboard';
// utils
import { minAddress } from 'src/utils/addressHelper';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// components
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
//
import PresetsOptions from 'src/components/settings/drawer/presets-options';

export default function Web3ConnectButton() {
  const router = useRouter();
  const theme = useTheme();
  const { setThemeMode } = useWeb3ModalTheme();
  setThemeMode(theme.palette.mode);
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const defaultChain = defaultChains.find((ele) => Number(ele.id) === Number(chain?.id));
  const balance = useBalance({ address }).data;
  const modal = useWeb3Modal();
  const settings = useSettingsContext();
  const { copy } = useCopyToClipboard();
  const onCopy = (value) => {
    if (value) {
      copy(value);
    }
  };
  const popover = usePopover();
  const handleDisconnect = async () => {
    try {
      await disconnect();
      popover.onClose();
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };
  const handleClickItem = (path) => {
    popover.onClose();
    router.push(path);
  };
  const [presetOpen, setPresetOpen] = useState(false);

  return (
    <>
      {isConnected ? (
        <>
          <Button
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            variants={varHover(1.02)}
            onClick={popover.onOpen}
          >
            <Stack direction="row" alignItems="center" spacing={0.8}>
              <Avatar
                alt="Account Name here"
                src="/assets/avatar/1.png"
                variant="rounded"
                sx={{
                  width: 45,
                  height: 45,
                  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
                }}
              />
              <Stack spacing={0.2}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'inherit',
                    ...(popover.open && {
                      color: 'primary.main',
                    }),
                  }}
                >
                  <b>Jayden Frankie</b>
                </Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Image
                    alt="Chain"
                    src={defaultChain ? defaultChain?.iconUrl : defaultChains[0].iconUrl}
                    width={15}
                    height={15}
                  />
                  <Typography variant="overline" sx={{ opacity: 0.85 }}>
                    {balance?.formatted} {defaultChain?.nativeCurrency.symbol}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Button>
          <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200, p: 0 }}>
            <Stack direction="row" spacing={1} alignItems="center" px={2} py={1} display="flex">
              <Image
                src="/assets/icons/icons8-wallet-48.png"
                alt="wallet icon"
                height="20"
                width="20"
              />
              <Link
                variant="subtitle2"
                href={`${
                  defaultChains.find((ele) => ele.id === chain?.id)?.blockExplorers.default.url
                }/address/${address}`}
                target="_blank"
                color="inherit"
              >
                {minAddress(address)}
              </Link>
              <Box flexGrow={1} />
              <Tooltip title="Copy">
                <IconButton onClick={() => onCopy(address)}>
                  <Iconify icon="eva:copy-fill" width={24} />
                </IconButton>
              </Tooltip>
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Stack px={2} py={1} spacing={0.5}>
              <Typography variant="body2">
                <b>Account</b>
              </Typography>
              <MenuItem onClick={() => handleClickItem(paths.dashboard.root)}>Dashboard</MenuItem>
              <MenuItem
                onClick={() => handleClickItem(paths.dashboard.account.root)}
                sx={{ mt: -1 }}
              >
                Your Profile
              </MenuItem>
              <MenuItem
                onClick={() => handleClickItem(paths.dashboard.account.statistics)}
                sx={{ mt: -1 }}
              >
                Statistics
              </MenuItem>
              <Typography variant="body2">
                <b>Finances</b>
              </Typography>
              <MenuItem>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={0.5}
                  width="100%"
                >
                  <Typography variant="body2">Balance</Typography>
                  <Typography variant="body2">
                    {balance?.formatted} {defaultChain?.nativeCurrency.symbol.toUpperCase()}
                  </Typography>
                </Stack>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  modal.open({ view: 'Networks' });
                  popover.onClose();
                }}
                sx={{ mt: -1 }}
              >
                Change Network
              </MenuItem>
              <Typography variant="body2" mt={0.5}>
                <b>Settings</b>
              </Typography>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="body2" ml={1.3}>
                  Dark Mode
                </Typography>
                <Switch
                  checked={settings.themeMode === 'dark'}
                  onChange={(e) => {
                    settings.onUpdate('themeMode', e.target.checked ? 'dark' : 'light');
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                ml={1.3}
                mt={-0.5}
                spacing={0.5}
              >
                <Typography variant="body2">Presets</Typography>
                <IconButton onClick={() => setPresetOpen(!presetOpen)}>
                  <Iconify icon={presetOpen ? 'icon-park:up' : 'icon-park:down'} width={16} />
                </IconButton>
              </Stack>
              <Collapse in={presetOpen} timeout="auto" unmountOnExit>
                <PresetsOptions
                  value={settings.themeColorPresets}
                  onChange={(newValue) => settings.onUpdate('themeColorPresets', newValue)}
                />
              </Collapse>
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem
              onClick={handleDisconnect}
              sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}
            >
              <Iconify icon="entypo:log-out" sx={{ mr: 0.5 }} />
              <Typography>Disconnect</Typography>
            </MenuItem>
          </CustomPopover>
        </>
      ) : (
        <Button variant="outlined" onClick={() => modal.open()}>
          Connect Wallet
        </Button>
      )}
    </>
  );
}

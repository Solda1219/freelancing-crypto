// @mui
import { Card, CardHeader, Divider, Stack, Typography, Avatar } from '@mui/material';

const notifications = [
  {
    title: 'General Announcement',
    sender: 'support team',
    avatarUrl: '/assets/avatar/0.png',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    title: 'General Announcement',
    sender: 'support team',
    avatarUrl: '/assets/avatar/2.png',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    title: 'General Announcement',
    sender: 'support team',
    avatarUrl: '',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
];

export default function Notifications() {
  return (
    <Card>
      <CardHeader title="Notifications" />
      <Divider sx={{ mt: 1.5 }} />
      <Stack p={3} spacing={3}>
        {notifications.map((notif, index) => (
          <Stack key={index} spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                alt={notif.sender}
                src={notif.avatarUrl}
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50,
                  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                {`${notif.sender.split(' ')[0][0].toUpperCase()}${
                  notif.sender.split(' ')[1] !== undefined
                    ? notif.sender.split(' ')[1][0].toUpperCase()
                    : ''
                }`}
              </Avatar>
              <Stack spacing={0.5}>
                <Typography>
                  <b>{notif.title}</b>
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="body2">{notif.sender}</Typography>
                  <Typography>•</Typography>
                  <Typography color="text.disabled" variant="body2">
                    1 day ago
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
              {notif.text}
            </Typography>
            {index < notifications.length - 1 && <Divider />}
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}

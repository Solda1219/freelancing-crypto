'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
// @mui
import { alpha } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DoneIcon from '@mui/icons-material/Done';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import PaymentsIcon from '@mui/icons-material/Payments';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ProfileAboutMe({ isFreelancer, isMine, name, isOnline }) {
  const fileRef = useRef(null);
  const [viewmore, setViewmore] = useState(false);
  const topSkills = [
    'PHP',
    'C Progamming',
    'JavaScript',
    'Python',
    'C# Programming',
    'Ruby on Rails',
    'Java',
  ];
  const fewSkills = topSkills.slice(0, 5);
  const similarFreelancers = [
    'PHP Developers in Australia',
    'PHP Developers',
    'C programmers',
    'Javascript Developers',
  ];
  const similarShowcases = ['PHP', 'C Programming', 'JavaScript', 'Python'];
  const intros = [
    {
      title: 'General',
      content:
        'Highly skilled and seasoned Software Engineer with 10 years of experience in designing and developing user-friendly and efficient web and mobile applications.\nSeeking a challenging position to utilize my technical expertise and contribute to the success of a dynamic organization',
    },
    {
      title: 'Experience',
      content:
        'Full Stack Web/Mobile Development:\n \n- Building interactive and responsive user interfaces using React.js, Next.js, Vue.js, Angular.js etc.\n- Designing and implementing a robust backend architecture using Node.js, PHP and Python\n- Creating databases and servers in MySQL, PostgreSQL and MongoDB\n- Mobile APP development with React Native, Flutter\n- Ensuring Cross Platform compatibility\n- API development and integration\n- WebSocket, Socket.io, ChatBot\n- authentication with jwt-passport, google firebase\n- Ecommerce System Solutions with WooCommerce, Magenta\n- online game platforms like Casino and Poker site\n- Distributed Network Services Development\n \nBlockchain:\n \n- Developing smart contracts using a Solidity.js and Go programming language\n- Developing dApps such as ICO website, IDO launchpad, NFT marketplace, DEX aggregator, Trading Bot etc\n- Static analysis of smart contracts for gas consumption and optimization using Remix IDE\n- Securing smart contracts using libraries like OpenZeppelin\n- Integration with crypto wallets such as Metamask, Trust Wallet etc\n- Deploying smart contracts\n- Creating RESTful APIs for client applications to communicate with the blockchain network',
    },
  ];
  const intros_2 = [
    {
      title: 'General',
      content:
        'Highly skilled and seasoned Software Engineer with 10 years of experience in designing and developing user-friendly and efficient web and mobile applications.\nSeeking a challenging position to utilize my technical expertise and contribute to the success of a dynamic organization',
    },
  ];

  const handleAttach = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const renderHire = (
    <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
      <CardHeader title={`Contact ${name} about your job`} />
      <Divider sx={{ mt: 2.5, bgcolor: 'white' }} />
      <Stack spacing={2} sx={{ p: 3 }}>
        <Button variant="contained">Request Quote</Button>
        <Typography>
          By clicking Request Quote, you have read and agreed to our Terms & Conditions and Privacy
          Policy
        </Typography>
      </Stack>
    </Card>
  );

  const renderInformation = (
    <Card>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row" color={isOnline ? 'primary.main' : 'text.disabled'} spacing={2}>
          <OnlinePredictionIcon />
          {isOnline ? "I'm Online!" : "I'm Offline"}
        </Stack>

        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Box>
            {`St Kilda,  `}
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <b>Australia</b>
            </Link>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <AccessTimeFilledIcon />
          It&apos;s currently 5:51 AM here
        </Stack>

        <Stack direction="row" spacing={2}>
          <VerifiedUserIcon />
          Joined September 21, 2023
        </Stack>

        <Stack direction="row" spacing={2}>
          <ThumbUpAltIcon />5 Recommendations
        </Stack>
      </Stack>
    </Card>
  );

  const renderVerification = (
    <Card>
      <CardHeader title="Verifications" />
      <Divider sx={{ mt: 2.5 }} />
      <Stack spacing={2} sx={{ p: 3 }}>
        {isFreelancer && (
          <Stack direction="row" spacing={2}>
            <WorkspacePremiumIcon />
            <Box flexGrow={1}>Preferred Freelancer</Box>
            {isMine && (
              <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                Join
              </Link>
            )}
          </Stack>
        )}
        <Stack direction="row" spacing={2}>
          <HowToRegIcon color="primary" />
          <Box flexGrow={1}>Identity Verified</Box>
          {isMine && <DoneIcon color="primary" />}
        </Stack>
        <Stack direction="row" spacing={2}>
          <VerifiedIcon color="primary" />
          <Box flexGrow={1}>Payment Verified</Box>
          {isMine && <DoneIcon color="primary" />}
        </Stack>
        {!isFreelancer && (
          <Stack direction="row" spacing={2}>
            <PaymentsIcon color="primary" />
            <Box flexGrow={1}>Deposit Made</Box>
            {isMine && <DoneIcon color="primary" />}
          </Stack>
        )}
        <Stack direction="row" spacing={2}>
          <PhoneIcon color="disabled" />
          <Box flexGrow={1}>Phone Verified</Box>
          {isMine && (
            <Link href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
              Verify
            </Link>
          )}
        </Stack>
        <Stack direction="row" spacing={2}>
          <EmailIcon color="primary" />
          <Box flexGrow={1}>Email Verified</Box>
          {isMine && <DoneIcon color="primary" />}
        </Stack>
        <Stack direction="row" spacing={2}>
          <FacebookIcon color="primary" />
          <Box flexGrow={1}>Facebook Connected</Box>
          {isMine && <DoneIcon color="primary" />}
        </Stack>
      </Stack>
    </Card>
  );

  const renderCertification = (
    <Card>
      <CardHeader title="Certifications" />
      <Divider sx={{ mt: 2.5 }} />
      <Stack spacing={2} direction="column" alignItems="center" sx={{ p: 3 }}>
        <Iconify icon="ph:certificate-light" width={120} color="grey" sx={{ mr: 2 }} />
        <Typography>
          {isMine ? "You don't have any certifications yet" : 'No certification'}
        </Typography>
        {isMine && <Button variant="outlined">Get Certified</Button>}
      </Stack>
    </Card>
  );

  const renderTopSkills = (
    <Card>
      <Stack direction="row" justifyContent="space-between">
        <CardHeader title="Top Skills" />
        {isMine && (
          <IconButton sx={{ mt: 2, mr: 3 }}>
            <Iconify icon="fluent:edit-16-filled" width={20} />
          </IconButton>
        )}
      </Stack>
      <Divider sx={{ mt: 2.5 }} />
      <Stack spacing={2} direction="column" sx={{ p: 3 }}>
        {viewmore
          ? topSkills.map((skill, index) => <Typography key={index}>{skill}</Typography>)
          : fewSkills.map((skill, index) => <Typography key={index}>{skill}</Typography>)}

        <Button
          fullWidth
          onClick={() => {
            setViewmore(!viewmore);
          }}
        >
          View More
        </Button>
      </Stack>
    </Card>
  );

  const renderSimilarFreelancer = (
    <Card>
      <CardHeader title="Browse Similar Freelancers" />
      <Divider sx={{ mt: 2.5 }} />
      <Box p={1.5}>
        {similarFreelancers.map((freelancer, index) => (
          <Button key={index} variant="outlined" sx={{ m: 1 }}>
            {freelancer}
          </Button>
        ))}
      </Box>
    </Card>
  );

  const renderSimilarShowcase = (
    <Card>
      <CardHeader title="Browse Similar Freelancers" />
      <Divider sx={{ mt: 2.5 }} />
      <Box p={1.5}>
        {similarShowcases.map((showcase, i) => (
          <Button key={i} variant="outlined" sx={{ m: 1 }}>
            {showcase}
          </Button>
        ))}
      </Box>
    </Card>
  );

  const renderPostInput = (
    <Card>
      <CardHeader title="Add More" />
      <Stack direction="column" sx={{ p: 3 }}>
        <InputBase
          fullWidth
          placeholder="Title here..."
          sx={{
            p: 2,
            mb: 1,
            borderRadius: 1,
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.2)}`,
          }}
        />
        <InputBase
          multiline
          fullWidth
          rows={5}
          placeholder="Write about yourself here..."
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 1,
            border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.2)}`,
          }}
        />

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
            <Fab size="small" color="inherit" variant="softExtended" onClick={handleAttach}>
              <Iconify icon="solar:gallery-wide-bold" width={24} sx={{ color: 'success.main' }} />
              Image/Video
            </Fab>

            <Fab size="small" color="inherit" variant="softExtended">
              <Iconify
                icon="solar:videocamera-record-bold"
                width={24}
                sx={{ color: 'error.main' }}
              />
              Streaming
            </Fab>
          </Stack>

          <Button variant="contained">Add</Button>
        </Stack>
      </Stack>

      <input ref={fileRef} type="file" style={{ display: 'none' }} />
    </Card>
  );

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8}>
        <Stack spacing={3}>
          {!isFreelancer && (
            <Card>
              <Stack direction="row">
                <CardHeader title="My Business" />
                {isMine && (
                  <>
                    <Box flexGrow={1} />
                    <IconButton sx={{ mt: 2 }}>
                      <Iconify icon="fluent:edit-16-filled" width={20} />
                    </IconButton>
                    <IconButton sx={{ mt: 2, mr: 2.5 }}>
                      <Iconify icon="material-symbols:delete" width={25} />
                    </IconButton>
                  </>
                )}
              </Stack>
              <Divider sx={{ mt: 2.5 }} />
              <Stack p={3} spacing={1}>
                <Stack direction="row" spacing={1} color="primary.main">
                  <Iconify icon="clarity:employee-group-solid" width={20} />
                  <Typography>10 employees</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography>
                    <b>Company Name: </b>
                  </Typography>
                  <Typography>SOME COMPANY</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography>
                    <b>Website: </b>
                  </Typography>
                  <Link href="#">
                    <Typography>http://xxxxxxx.com</Typography>
                  </Link>
                </Stack>
              </Stack>
            </Card>
          )}
          {isFreelancer
            ? intros.map((intro, index) => (
                <Card key={index}>
                  <Stack direction="row">
                    <CardHeader title={intro.title} />
                    {isMine && (
                      <>
                        <Box flexGrow={1} />
                        <IconButton sx={{ mt: 2 }}>
                          <Iconify icon="fluent:edit-16-filled" width={20} />
                        </IconButton>
                        <IconButton sx={{ mt: 2, mr: 2.5 }}>
                          <Iconify icon="material-symbols:delete" width={25} />
                        </IconButton>
                      </>
                    )}
                  </Stack>
                  <Divider sx={{ mt: 2.5 }} />
                  <Box p={3}>
                    {intro.content.split('\n').map((line, i) => (
                      <Typography key={i} align="justify">
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Card>
              ))
            : intros_2.map((intro, index) => (
                <Card key={index}>
                  <Stack direction="row">
                    <CardHeader title={intro.title} />
                    {isMine && (
                      <>
                        <Box flexGrow={1} />
                        <IconButton sx={{ mt: 2 }}>
                          <Iconify icon="fluent:edit-16-filled" width={20} />
                        </IconButton>
                        <IconButton sx={{ mt: 2, mr: 2.5 }}>
                          <Iconify icon="material-symbols:delete" width={25} />
                        </IconButton>
                      </>
                    )}
                  </Stack>
                  <Divider sx={{ mt: 2.5 }} />
                  <Box p={3}>
                    {intro.content.split('\n').map((line, i) => (
                      <Typography key={i} align="justify">
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Card>
              ))}
          {isMine && renderPostInput}
        </Stack>
      </Grid>
      <Grid xs={12} md={4}>
        <Stack spacing={3}>
          {!isMine && renderHire}
          {renderInformation}
          {renderVerification}
          {isFreelancer && renderCertification}
          {isFreelancer && renderTopSkills}
          {isFreelancer && renderSimilarFreelancer}
          {isFreelancer && renderSimilarShowcase}
        </Stack>
      </Grid>
    </Grid>
  );
}

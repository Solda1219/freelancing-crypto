import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
// step 2
import UserNewEditForm from './user-new-edit-form';

const stepsForFreelancer = [
  'What Do You Want?',
  'Link Your Accounts',
  'Please Fill Your Generanl Information',
  'Tell Us About Yourself',
  'Tell Us Your Top Skills',
  'Congratulations!',
];
const stepsForClient = [
  'What Do You Want?',
  'Link Your Accounts',
  'Please Fill Your Generanl Information',
  'Tell Us About Your Business',
  'Congratulations!',
];

const skillSets = [
  {
    category: 'Websites, IT & Software',
    skills: [
      'skill_1',
      'skill_2',
      'skill_3',
      'skill_4',
      'skill_5',
      'skill_6',
      'skill_7',
      'skill_8',
      'skill_9',
      'skill_10',
      'skill_11',
      'skill_12',
    ],
  },
  {
    category: 'Writing & Content',
    skills: [
      'skill_21',
      'skill_22',
      'skill_23',
      'skill_24',
      'skill_25',
      'skill_26',
      'skill_27',
      'skill_28',
      'skill_29',
      'skill_210',
      'skill_211',
      'skill_212',
    ],
  },
  {
    category: 'Design, Media & Archtecture',
    skills: [
      'skill_121',
      'skill_122',
      'skill_123',
      'skill_124',
      'skill_125',
      'skill_126',
      'skill_127',
      'skill_128',
      'skill_129',
      'skill_1210',
      'skill_1211',
      'skill_1212',
    ],
  },
];

export default function ProfileCreate() {
  const router = useRouter();
  // stepper
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log('PROFILE CREATED');
      router.push(paths.dashboard.account.root);
    } else {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // step 0
  const [clientSelected, setClientSelected] = useState(false);
  const [freelancerSelected, setFreelancerSelected] = useState(false);
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    if (clientSelected && !freelancerSelected) {
      setSteps(stepsForClient);
    } else {
      setSteps(stepsForFreelancer);
    }
  }, [clientSelected, freelancerSelected]);
  const role = (
    <>
      <Typography variant="h5" textAlign="center" mb={3}>
        Join as a client or freelancer
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={
              clientSelected
                ? { bgcolor: 'primary.main', color: 'white' }
                : { bgcolor: 'inherit', color: 'inherit' }
            }
          >
            <CardActionArea
              onClick={() => {
                setClientSelected(!clientSelected);
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                p={3}
              >
                <Iconify icon="solar:money-bag-bold" width={240} />
                <Typography variant="h5">I am a client, hiring for a project</Typography>
              </Stack>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={
              freelancerSelected
                ? { bgcolor: 'primary.main', color: 'white' }
                : { bgcolor: 'inherit', color: 'inherit' }
            }
          >
            <CardActionArea
              onClick={() => {
                setFreelancerSelected(!freelancerSelected);
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                p={3}
              >
                <Iconify icon="fa6-solid:computer" width={240} />
                <Typography variant="h5">I am a freelancer, looking for a work</Typography>
              </Stack>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );

  // step 1
  const accountLink = (
    <>
      <Typography textAlign="center" mb={3}>
        Save time filling out your profile and build trust by linking your accounts
      </Typography>
      <Card>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ p: 3 }}>
              <ListItemIcon>
                <Iconify icon="entypo-social:twitter" width={48} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h5">Twitter</Typography>}
                secondary={
                  <Typography variant="body2">
                    Import your photo, name, and email address
                  </Typography>
                }
              />
              <ListItemIcon>
                <Iconify icon="zondicons:add-solid" width={24} sx={{ ml: 10 }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton sx={{ p: 3 }}>
              <ListItemIcon>
                <Iconify icon="icomoon-free:linkedin" width={45} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h5">LinkedIn</Typography>}
                secondary={
                  <Typography variant="body2">
                    Import your photo, name, and email address
                  </Typography>
                }
              />
              <ListItemIcon>
                <Iconify icon="zondicons:add-solid" width={24} sx={{ ml: 10 }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton sx={{ p: 3 }}>
              <ListItemIcon>
                <Iconify icon="entypo-social:facebook" width={48} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="h5">Facebook</Typography>}
                secondary={
                  <Typography variant="body2">
                    Import your photo, name, and email address
                  </Typography>
                }
              />
              <ListItemIcon>
                <Iconify icon="zondicons:add-solid" width={24} sx={{ ml: 10 }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </>
  );

  // step 3
  const tellingYourself = (
    <>
      <Typography textAlign="center" mb={3}>
        Fill out your profile to better understand your services.
      </Typography>
      <Card sx={{ p: 3, minWidth: '85%' }}>
        <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={3}>
          <Typography variant="h5">
            <b>What do you do?</b>
          </Typography>
          <TextField
            label="Title"
            placeholder="e.g. Data Scientist"
            helperText="Write a one line description about yourself"
          />
          <Typography variant="h5">
            <b>Describe yourself</b>
          </Typography>
          <TextField
            label="About You"
            placeholder="Describe your top skills, strengths, and experiences. Provide more detail on the services you offer, things you are interested in working on and what you like to do."
            helperText="At least 100 characters"
            multiline
            rows={4}
          />
        </Stack>
      </Card>
    </>
  );
  const [radioValue, setRadioValue] = useState('0');
  const tellingYourBusiness = (
    <>
      {freelancerSelected && (
        <Typography variant="h2" mt={5} mb={3}>
          Tell Us About Your Business
        </Typography>
      )}
      <Typography textAlign="center" mb={3}>
        You will be on your way to connect with talent.
      </Typography>
      <Card sx={{ p: 3, minWidth: '85%' }}>
        <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={3}>
          <FormControl>
            <Typography variant="h6" my={1}>
              How many people are in your company?
            </Typography>
            <RadioGroup
              value={radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value);
              }}
              sx={{ ml: 2 }}
            >
              <FormControlLabel value="0" control={<Radio />} label="It's just me" />
              <FormControlLabel value="1" control={<Radio />} label="2-9 employees" />
              <FormControlLabel value="2" control={<Radio />} label="10-99 employees" />
              <FormControlLabel value="3" control={<Radio />} label="100-1000 employees" />
              <FormControlLabel value="4" control={<Radio />} label="More than 1000 employees" />
            </RadioGroup>
          </FormControl>
          <Stack spacing={1}>
            <Typography variant="h6">
              <b>Company Name</b>
            </Typography>
            <TextField />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6">
              <b>Website</b>
            </Typography>
            <TextField />
          </Stack>
        </Stack>
      </Card>
    </>
  );

  // step 4
  const [searchSkill, setSearchSkill] = useState('');
  const handleSearchSkill = (e) => {
    setSearchSkill(e.target.value);
    console.log('Searching for:', searchSkill);
  };
  const [showingSkills, setShowingSkills] = useState([]);
  const [showingCategory, setShowingCategory] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const yourSkills = (
    <>
      <Typography textAlign="center" mb={3}>
        Your skills show clients what you can offer, and help us choose which jobs to recommend to
        you. Start typing to pick skills.
      </Typography>
      <Card sx={{ p: 3, width: '100%' }}>
        <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={3}>
          <TextField
            label="Search a skill"
            variant="outlined"
            placeholder="Type your skills here"
            value={searchSkill}
            onChange={handleSearchSkill}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="material-symbols:search" width={24} />
                </InputAdornment>
              ),
            }}
          />
          <Divider>OR</Divider>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper variant="outlined" sx={{ height: 453, overflowY: 'auto' }}>
                <Scrollbar
                  sx={{
                    height: 1,
                    '& .simplebar-content': {
                      height: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    },
                  }}
                >
                  <List>
                    <ListSubheader disableGutters>
                      <Typography p={2}>
                        <b>Select a category</b>
                      </Typography>
                      <Divider />
                    </ListSubheader>
                    {skillSets.map((skillset, index) => (
                      <React.Fragment key={index}>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ p: 2 }}
                            onClick={() => {
                              setShowingSkills(skillSets[index].skills);
                              setShowingCategory(skillSets[index].category);
                            }}
                          >
                            <ListItemIcon>
                              <Iconify icon="gridicons:computer" width={24} />
                            </ListItemIcon>
                            <ListItemText primary={skillset.category} />
                            <ListItemIcon>
                              <Iconify icon="ooui:next-ltr" width={12} />
                            </ListItemIcon>
                          </ListItemButton>
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </List>
                </Scrollbar>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper variant="outlined" sx={{ height: 453, overflowY: 'auto' }}>
                <Scrollbar
                  sx={{
                    height: 1,
                    '& .simplebar-content': {
                      height: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    },
                  }}
                >
                  <List>
                    <ListSubheader disableGutters>
                      <Typography p={2}>
                        <b>
                          {showingCategory.length > 0 ? showingCategory : 'No category selected'}
                        </b>
                      </Typography>
                      <Divider />
                    </ListSubheader>
                    {showingCategory ? (
                      showingSkills.map((skill, index) => (
                        <React.Fragment key={index}>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{ p: 2 }}
                              onClick={() => {
                                if (
                                  !(selectedSkills.includes(skill) || selectedSkills.length >= 20)
                                ) {
                                  setSelectedSkills([...selectedSkills, skill]);
                                }
                              }}
                            >
                              <ListItemText primary={skill} />
                              <ListItemIcon>
                                {selectedSkills.includes(skill) ? (
                                  <Iconify icon="fe:check" width={18} />
                                ) : (
                                  <Iconify icon="mingcute:add-fill" width={15} />
                                )}
                              </ListItemIcon>
                            </ListItemButton>
                          </ListItem>
                          <Divider />
                        </React.Fragment>
                      ))
                    ) : (
                      <Typography variant="body2" p={1} ml={1}>
                        Select a category to start adding skills to your profile.
                      </Typography>
                    )}
                  </List>
                </Scrollbar>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper>
                <Typography mt={3} mb={2} ml={1}>
                  <b>{selectedSkills.length} skills selected</b>
                </Typography>
                <Divider sx={{ mb: 1 }} />
                {selectedSkills.length ? (
                  <>
                    {selectedSkills.map((skill, i) => (
                      <Button
                        key={i}
                        variant="outlined"
                        sx={{ ml: 1, mt: 1 }}
                        onClick={() =>
                          setSelectedSkills(selectedSkills.filter((item) => item !== skill))
                        }
                      >
                        {skill}
                      </Button>
                    ))}
                    <Divider sx={{ mt: 3 }}>
                      <Typography variant="caption" ml={1} mt={1} textAlign="right">
                        {20 - selectedSkills.length} skills left
                      </Typography>
                    </Divider>
                  </>
                ) : (
                  <Typography variant="body2" ml={1}>
                    Select at least one skill to help us recommend customized jobs for you.
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Card>
    </>
  );

  // step 5
  const final = (
    <>
      <img
        src="/assets/images/account/congrats.jpg"
        alt="Congratulation"
        width="360px"
        style={{ marginTop: '2rem', marginBottom: '1rem' }}
      />
      <Typography textAlign="center" variant="subtitle1">
        You have set your profile. You can now view or edit it on your profile page.
      </Typography>
    </>
  );

  return (
    <Stack direction="column" alignItems="stretch" spacing={2} minHeight="100vh">
      <Stack flexGrow={1} justifyContent="center" alignItems="center">
        <Typography variant="h2" mt={5} mb={3}>
          {steps[activeStep]}
        </Typography>
        {activeStep === 0 && role}
        {activeStep === 2 && <UserNewEditForm />}
        {activeStep === 1 && accountLink}
        {activeStep === 3 && freelancerSelected && tellingYourself}
        {activeStep === 3 && clientSelected && tellingYourBusiness}
        {activeStep === 4 && freelancerSelected && yourSkills}
        {activeStep === steps.length - 1 && final}
      </Stack>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mb: 2 }}>
        <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) ? (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            Skip for now
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!(clientSelected || freelancerSelected)}
          >
            {activeStep === steps.length - 1 ? 'Create Profile' : 'Next'}
          </Button>
        )}
      </Box>
      {/* <Divider sx={{ mt: 3, mb: 3 }} /> */}
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{ mb: 3, mt: 3, display: { xs: 'none', md: 'inherit' } }}
      >
        {activeStep &&
          steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
      </Stepper>
    </Stack>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// components
import { useSettingsContext } from 'src/components/settings';
import Iconify from 'src/components/iconify';

const skills = [
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
  'skill_13',
  'skill_14',
  'skill_15',
];

export default function PostingJob() {
  const settings = useSettingsContext();
  const router = useRouter();
  const messageRef = useRef();
  const [step, setStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [currentStep]);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobSkills, setJobSkills] = useState([]);
  const [errors, setErrors] = useState({
    jobTitle: false,
    jobDescription: false,
    jobSkills: false,
  });

  const stepZero = (
    <>
      {step === 0 ? (
        <TextField
          variant="standard"
          placeholder="What do you need done?"
          fullWidth
          value={jobTitle}
          onChange={(e) => {
            setJobTitle(e.target.value);
            setErrors({ ...errors, jobTitle: false });
          }}
          error={errors.jobTitle}
          helperText={errors.jobTitle ? 'Please enter a title' : null}
        />
      ) : (
        <>
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
            <Typography variant="h5">{jobTitle}</Typography>
            <IconButton onClick={() => setStep(0)}>
              <Iconify icon="tabler:edit" width={24} sx={{ color: 'primary.main' }} />
            </IconButton>
          </Stack>
          <Divider sx={{ mt: -2.5 }} />
        </>
      )}
      {step === 0 && (
        <Stack direction="row" spacing={2} ml={1}>
          <Iconify icon="el:idea-alt" width={36} sx={{ color: 'primary.main' }} />
          <Stack spacing={1}>
            <Typography>
              <b>Hint: It helps to be specific!</b>
            </Typography>
            <Typography>Describe what you need and what it&apos;s for. For example:</Typography>
            <Stack ml={1}>
              <li>Website for a French bakery</li>
              <li>Mobile app for fitness startup</li>
              <li>Photographers needed for my wedding</li>
            </Stack>
          </Stack>
        </Stack>
      )}
      {step === 0 && (
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 80 }}
          onClick={() => {
            if (jobTitle.length === 0) {
              setErrors({ ...errors, jobTitle: true });
            } else if (currentStep > 0) {
              setStep(currentStep);
            } else {
              setStep(1);
              setCurrentStep(1);
            }
          }}
        >
          {currentStep > 0 ? 'Set' : 'Next'}
        </Button>
      )}
    </>
  );
  const stepOne = (
    <Stack spacing={2}>
      <Stack spacing={0.5}>
        <Typography>Project description</Typography>
        <TextField
          placeholder="Describe your project here"
          helperText={
            errors.jobDescription
              ? 'Please write description'
              : `${1000 - jobDescription.length} characters left`
          }
          value={jobDescription}
          onChange={(e) => {
            setJobDescription(e.target.value);
            setErrors({ ...errors, jobDescription: false });
          }}
          error={errors.jobDescription}
          multiline
          rows={4}
        />
      </Stack>
      <Stack
        direction="row"
        p={2}
        alignItems="center"
        spacing={2}
        sx={{
          borderStyle: 'dotted',
          borderWidth: 1,
          borderRadius: 1,
          borderColor: 'text.disabled',
        }}
      >
        <Button
          variant="outlined"
          startIcon={<Iconify icon="eva:attach-fill" width={18} />}
          sx={{ minWidth: 100 }}
        >
          Attach files
        </Button>
        <Typography variant="caption">
          Drag & drop any images or documents that might be helpful in explaining your brief here
          (Max file size: 25MB).
        </Typography>
      </Stack>
      {step === 1 && (
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 80 }}
          onClick={() => {
            if (jobDescription.length === 0) setErrors({ ...errors, jobDescription: true });
            else {
              setStep(2);
              setCurrentStep(2);
            }
          }}
        >
          Next
        </Button>
      )}
    </Stack>
  );
  const stepTwo = (
    <Stack spacing={2}>
      <Typography variant="h5" mt={1}>
        What skills are required?
      </Typography>
      <Typography>
        Enter up to 5 skills that best describe your project. Freelancers will use these skills to
        find projects they are most interested and experienced in.
      </Typography>
      <Autocomplete
        multiple
        options={skills}
        defaultValue={jobSkills}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Enter skills here..."
            error={errors.jobSkills}
            helperText={errors.jobSkills ? 'Please select up to 5 skills' : null}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        onChange={(e, value) => {
          setErrors({ ...errors, jobSkills: false });
          setJobSkills(value);
        }}
      />
      {step === 2 && (
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 80 }}
          onClick={() => {
            if (jobSkills.length === 0 || jobSkills.length > 5)
              setErrors({ ...errors, jobSkills: true });
            else {
              setStep(3);
              setCurrentStep(3);
            }
          }}
        >
          Next
        </Button>
      )}
    </Stack>
  );
  const stepThree = (
    <Stack spacing={2}>
      <Typography variant="h5" mt={1}>
        How would you like to get it done?
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Card>
          <CardActionArea
            onClick={() => {
              if (jobDescription.length === 0) {
                setErrors({ ...errors, jobDescription: true });
              } else if (jobSkills.length === 0) {
                setErrors({ ...errors, jobSkills: true });
              } else if (jobTitle.length === 0) {
                setErrors({ ...errors, jobTitle: true });
              } else {
                router.push(paths.dashboard.joblisting.root);
              }
            }}
          >
            <Stack direction="row" p={3} spacing={3} alignItems="center">
              <Stack>
                <Iconify
                  icon="fluent-mdl2:new-team-project"
                  width={96}
                  sx={{ color: 'primary.main' }}
                />
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6">
                  <b>Post a project</b>
                </Typography>
                <Typography variant="body2">
                  Receive free quotes, best for when you have a specific idea, the project is not
                  visual in nature or the project is complex.
                </Typography>
              </Stack>
            </Stack>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea
            onClick={() => {
              if (jobDescription.length === 0) {
                setErrors({ ...errors, jobDescription: true });
              } else if (jobSkills.length === 0) {
                setErrors({ ...errors, jobSkills: true });
              } else if (jobTitle.length === 0) {
                setErrors({ ...errors, jobTitle: true });
              } else {
                // router.push(paths.dashboard.joblisting.root);
              }
            }}
          >
            <Stack direction="row" p={3} spacing={3} alignItems="center">
              <Stack>
                <Iconify icon="solar:cup-star-linear" width={96} sx={{ color: 'primary.main' }} />
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h6">
                  <b>Start a contest</b>
                </Typography>
                <Typography variant="body2">
                  Crowdsource ideas. Post a prize and get competing entries which you can iterate on
                  with feedback. Great for visual designs.
                </Typography>
              </Stack>
            </Stack>
          </CardActionArea>
        </Card>
      </Stack>
    </Stack>
  );

  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'lg'}
      sx={{ minHeight: '100vh', display: 'flex' }}
    >
      <Stack flexGrow={1} justifyContent="center" alignItems="center" spacing={3}>
        <Typography variant="h3" mt={3}>
          Tell us what you need done
        </Typography>
        <Typography px={{ xs: 5, md: 20 }}>
          Contact skilled freelancers within minutes. View profile, rating, portfolios and chat with
          them. Pay the freelancer only when you are 100% satisfied with their work.
        </Typography>
        <Card sx={{ width: { xs: '100%', md: '80%' }, mb: { xs: 5, md: 15 } }}>
          <Stack p={3} spacing={3}>
            {stepZero}
            {currentStep > 0 && stepOne}
            {currentStep > 1 && stepTwo}
            {currentStep === 3 && stepThree}
          </Stack>
        </Card>
        <div ref={messageRef} />
      </Stack>
    </Container>
  );
}

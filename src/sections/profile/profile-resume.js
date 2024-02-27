import { useState } from 'react';
import Moment from 'react-moment';
// @mui
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
// calendar
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// components
import Iconify from 'src/components/iconify';
// import SearchNotFound from 'src/components/search-not-found';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function ProfileResume({ resume, isMine }) {
  const [exp, setExp] = useState(false);
  const [edu, setEdu] = useState(false);
  const [current, setCurrent] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <Stack direction="row" justifyContent="space-between">
              <CardHeader title="Experience" />
              {isMine && (
                <IconButton
                  sx={{ mt: 2, mr: 3 }}
                  onClick={() => {
                    setExp(!exp);
                  }}
                >
                  <Iconify icon="ph:plus-fill" width={25} />
                </IconButton>
              )}
            </Stack>
            <Divider sx={{ mt: 2.5 }} />
            <Grid container spacing={1} p={3}>
              {resume.experience.map((experience, index) => (
                <Grid key={index} item xs={12}>
                  <ExpCard key={index} toShow={experience} isMine={isMine} />
                </Grid>
              ))}
              {exp && (
                <Grid item xs={12}>
                  <Card
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'left',
                      flexDirection: 'column',
                    }}
                  >
                    <TextField label="Title" variant="outlined" sx={{ mb: 1 }} />
                    <TextField label="Company" variant="outlined" />
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="Start" sx={{ flexGrow: 1 }} />
                    </DemoContainer>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="End" disabled={current} sx={{ flexGrow: 1 }} />
                    </DemoContainer>
                    <FormControlLabel
                      control={<Checkbox checked={current} onChange={() => setCurrent(!current)} />}
                      label="Current Job"
                      sx={{ ml: 1, color: 'text.secondary' }}
                    />
                    <TextField label="Summary" variant="outlined" multiline sx={{ mb: 1, mt: 1 }} />
                    <Stack direction="row" justifyContent="flex-end" mt={1.5} mb={-1.5}>
                      <Button
                        onClick={() => {
                          console.log('Added');
                          setExp(false);
                          setCurrent(false);
                        }}
                      >
                        Add
                      </Button>
                      <Button
                        onClick={() => {
                          setExp(false);
                          setCurrent(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Stack direction="row" justifyContent="space-between">
              <CardHeader title="Education" />
              {isMine && (
                <IconButton
                  sx={{ mt: 2, mr: 3 }}
                  onClick={() => {
                    setEdu(!edu);
                  }}
                >
                  <Iconify icon="ph:plus-fill" width={25} />
                </IconButton>
              )}
            </Stack>
            <Divider sx={{ mt: 2.5 }} />
            <Grid container spacing={1} p={3}>
              {resume.education.map((education, index) => (
                <Grid key={index} item xs={12}>
                  <EduCard key={index} toShow={education} isMine={isMine} />
                </Grid>
              ))}
              {edu && (
                <Grid item xs={12}>
                  <Card
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'left',
                      flexDirection: 'column',
                    }}
                  >
                    <TextField label="Country" variant="outlined" sx={{ mb: 1 }} />
                    <TextField label="University/College" variant="outlined" />
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="Start" sx={{ flexGrow: 1 }} />
                    </DemoContainer>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="End" disabled={current} sx={{ flexGrow: 1 }} />
                    </DemoContainer>
                    <FormControlLabel
                      control={<Checkbox checked={current} onChange={() => setCurrent(!current)} />}
                      label="Current"
                      sx={{ ml: 1, color: 'text.secondary' }}
                    />
                    <TextField label="Degree" variant="outlined" multiline sx={{ mb: 1, mt: 1 }} />
                    <Stack direction="row" justifyContent="flex-end" mt={1.5} mb={-1.5}>
                      <Button
                        onClick={() => {
                          console.log('Added');
                          setEdu(false);
                          setCurrent(false);
                        }}
                      >
                        Add
                      </Button>
                      <Button
                        onClick={() => {
                          setEdu(false);
                          setCurrent(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

// ProfileResume.propTypes = {
//   friends: PropTypes.array,
//   onSearchFriends: PropTypes.func,
//   searchFriends: PropTypes.string,
// };

// ----------------------------------------------------------------------

function ExpCard({ toShow, isMine }) {
  const popover = usePopover();

  const handleDelete = () => {
    popover.onClose();
    // console.info('DELETE', name);
  };

  const handleEdit = () => {
    popover.onClose();
    // console.info('EDIT', name);
  };

  return (
    <>
      <Card
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'left',
          flexDirection: 'column',
        }}
        elevation={1}
      >
        <Typography variant="subtitle1" color="text.primary">
          {`${toShow.title} at ${toShow.company}`}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, mt: 0.5 }}>
          <Moment format="MM/DD/YYYY">{toShow.from}</Moment>~
          {toShow.to !== '' ? <Moment format="MM/DD/YYYY">{toShow.to}</Moment> : 'Now'}
        </Typography>

        {toShow.summary && <Typography>{toShow.summary}</Typography>}
        {isMine && (
          <IconButton
            color={popover.open ? 'inherit' : 'default'}
            onClick={popover.onOpen}
            sx={{ top: 8, right: 8, position: 'absolute' }}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        )}
      </Card>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>

        <MenuItem onClick={handleEdit}>
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>
      </CustomPopover>
    </>
  );
}

function EduCard({ toShow, isMine }) {
  const popover = usePopover();

  const handleDelete = () => {
    popover.onClose();
    // console.info('DELETE', name);
  };

  const handleEdit = () => {
    popover.onClose();
    // console.info('EDIT', name);
  };

  return (
    <>
      <Card
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'left',
          flexDirection: 'column',
        }}
        elevation={1}
      >
        <Typography variant="subtitle1" color="text.primary">
          {`${toShow.university} in ${toShow.country}`}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, mt: 0.5 }}>
          <Moment format="MM/DD/YYYY">{toShow.from}</Moment>~
          {toShow.to !== '' ? <Moment format="MM/DD/YYYY">{toShow.to}</Moment> : 'Now'}
        </Typography>

        <Typography>{toShow.degree}</Typography>
        {isMine && (
          <IconButton
            color={popover.open ? 'inherit' : 'default'}
            onClick={popover.onOpen}
            sx={{ top: 8, right: 8, position: 'absolute' }}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        )}
      </Card>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>

        <MenuItem onClick={handleEdit}>
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>
      </CustomPopover>
    </>
  );
}

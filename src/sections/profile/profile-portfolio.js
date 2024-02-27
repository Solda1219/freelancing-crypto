import PropTypes from 'prop-types';
import { useState } from 'react';
// Carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CardActionArea, CardHeader } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

const availableSkills = [
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
  'skill_16',
  'skill_17',
  'skill_18',
  'skill_19',
  'skill_20',
];

// ----------------------------------------------------------------------
export default function ProfilePortfolio({ list, isMine }) {
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [editOpen, setEditOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [pTitle, setPTitle] = useState('');
  const [pComment, setPComment] = useState('');
  const [imagesrc, setImagesrc] = useState([]);

  return (
    <Grid container spacing={3}>
      <Dialog open={viewOpen} onClose={() => setViewOpen(false)} maxWidth="md">
        <DialogTitle>{list[selectedId].title}</DialogTitle>
        <IconButton
          onClick={() => setViewOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
        <DialogContent>
          <Stack pt={2} pb={2}>
            <Typography variant="h6">About the project</Typography>
            <Typography ml={1} mt={0.5}>
              {list[selectedId].comment}
            </Typography>
            <Stack direction="row" justifyContent="flex-start" alignItems="center" mt={2} mb={3}>
              <Typography variant="h6" mr={1.5}>
                Skills
              </Typography>
              {list[selectedId].skills.map((skill, i) => (
                <Typography key={i} border={1} borderRadius={2} pl={1} pr={1} ml={0.5}>
                  {skill}
                </Typography>
              ))}
            </Stack>
            <ImageGallery
              items={list[selectedId].imgsrc.map((src) => ({
                original: src,
                thumbnail: src,
              }))}
              thumbnailPosition="left"
            />
          </Stack>
        </DialogContent>
        {isMine && (
          <DialogActions>
            <Button
              onClick={() => {
                setViewOpen(false);
                setPTitle(list[selectedId].title);
                setPComment(list[selectedId].comment);
                setImagesrc(list[selectedId].imgsrc);
                setSelectedSkill(list[selectedId].skills);
                setEditOpen(true);
                setIsEdit(true);
              }}
              variant="outlined"
              startIcon={<Iconify icon="tabler:edit" width={20} />}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              startIcon={
                <Iconify
                  icon="mi:delete"
                  width={20}
                  onClick={() => {
                    console.log('delete a portfolio item'); // Needs Action
                    setViewOpen(false);
                  }}
                />
              }
            >
              Delete
            </Button>
          </DialogActions>
        )}
      </Dialog>
      <Dialog open={editOpen} onClose={() => setEditOpen(false)} maxWidth="md">
        <DialogTitle>{isEdit ? 'Edit Your Portfolio Item' : 'Add a Portfolio Item'}</DialogTitle>
        <IconButton
          onClick={() => {
            setEditOpen(false);
            setSelectedSkill([]);
            setPTitle('');
            setPComment('');
            setImagesrc([]);
          }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
        <DialogContent>
          <Stack pt={2} pb={2} width={{ xs: 450, md: 800 }}>
            <TextField
              label="Title"
              variant="standard"
              value={pTitle}
              onChange={(e) => setPTitle(e.target.value)}
            />
            <TextField
              label="Portfolio Item Description"
              variant="standard"
              value={pComment}
              onChange={(e) => setPComment(e.target.value)}
              multiline
              rows={5}
              sx={{ mt: 2 }}
            />
            <Typography mt={2} mb={0.5} variant="subtitle2">
              Upload File
            </Typography>
            <Button variant="outlined">+ Upload</Button>
            <Grid container spacing={3} mt={2} pr={2}>
              {imagesrc.map((image, i) => (
                <Grid key={i} item xs={6} md={3}>
                  <Box position="relative">
                    <Image
                      alt="image here"
                      src={image}
                      // overlay={`linear-gradient(to bottom, ${alpha(theme.palette.grey[900], 0)} 0%, ${
                      //   theme.palette.grey[900]
                      // } 75%)`}
                      // sx={{
                      //   height: 260,
                      // }}
                    />
                    <IconButton
                      onClick={() => {
                        setImagesrc(imagesrc.filter((item) => item !== image));
                      }}
                      sx={{
                        position: 'absolute',
                        right: -26,
                        top: -20,
                      }}
                    >
                      <Iconify icon="typcn:delete" width={23} />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Divider textAlign="center" sx={{ mt: 5, mb: 2 }}>
              Skills
            </Divider>
            <Grid container spacing={1}>
              {availableSkills.map((skill, i) => (
                <Button
                  key={i}
                  variant="outlined"
                  sx={{ m: 0.5 }}
                  onClick={() => {
                    if (selectedSkill.length < 5) {
                      setSelectedSkill([...selectedSkill, skill]);
                    }
                  }}
                  disabled={selectedSkill.find((item) => item === skill)}
                >
                  {skill}
                </Button>
              ))}
            </Grid>
            <Typography mt={2} mb={1} variant="subtitle2">
              Selected skills <i>{` (Skills left ${5 - selectedSkill.length})`}</i>
            </Typography>
            <Grid container spacing={1}>
              {selectedSkill.map((skill, i) => (
                <Button
                  key={i}
                  variant="outlined"
                  sx={{ m: 0.5 }}
                  onClick={() => setSelectedSkill(selectedSkill.filter((item) => item !== skill))}
                >
                  {skill}
                </Button>
              ))}
            </Grid>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              console.log('add/edit a portfolio item');
              setEditOpen(false);
              setSelectedSkill([]);
              setPTitle('');
              setPComment('');
              setImagesrc([]);
            }}
            variant="outlined"
            startIcon={<Iconify icon="fluent:save-20-filled" width={20} />}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            startIcon={<Iconify icon="material-symbols:cancel" width={20} />}
            onClick={() => {
              setEditOpen(false);
              setSelectedSkill([]);
              setPTitle('');
              setPComment('');
              setImagesrc([]);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {list.map((portfolio, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Card
            sx={{ height: 300, cursor: 'pointer' }}
            onClick={() => {
              setViewOpen(true);
              setSelectedId(index);
            }}
          >
            <CardHeader title={portfolio.title} sx={{ mb: 1.5, mt: -0.5 }} />
            <Carousel
              showArrows={false}
              showIndicators={false}
              infiniteLoop
              dynamicHeight={false}
              showStatus={false}
              autoPlay
              stopOnHover={false}
            >
              {portfolio.imgsrc.map((isrc, i) => (
                <Image
                  key={i}
                  alt="image here"
                  src={isrc}
                  // overlay={`linear-gradient(to bottom, ${alpha(theme.palette.grey[900], 0)} 0%, ${
                  //   theme.palette.grey[900]
                  // } 75%)`}
                  sx={{
                    height: 260,
                  }}
                />
              ))}
            </Carousel>
          </Card>
        </Grid>
      ))}
      {isMine && (
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ height: 300, borderStyle: 'dashed', borderWidth: 3 }}>
            <CardActionArea
              onClick={() => {
                setEditOpen(true);
                setIsEdit(false);
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                height={300}
                spacing={2.5}
              >
                <Iconify icon="solar:gallery-add-bold-duotone" width={100} color="grey" />
                <Typography variant="h5" noWrap color="grey">
                  Add Portfolio Item
                </Typography>
              </Stack>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}

ProfilePortfolio.propTypes = {
  list: PropTypes.array,
};

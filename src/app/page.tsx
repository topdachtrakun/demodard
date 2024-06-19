'use client';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Modal,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import WorkIcon from '@mui/icons-material/Work';
import { useEffect, useState } from 'react';
import BasicCard from './components/basicCard';
import AddIcon from '@mui/icons-material/Add';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { nanoid } from 'nanoid';
import useStore from './store/useUserStore';
export default function Home() {
  // const [userInfoAgenCy, setUserInfoAgenCy] = useState([
  //   {
  //     id: '1',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  //   {
  //     id: '2',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  //   {
  //     id: '3',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  //   {
  //     id: '4',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  // ]);

  // const [userInfoMedia, setUserInfoMedia] = useState([
  //   {
  //     id: '1',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  //   {
  //     id: '2',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  //   {
  //     id: '3',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  // ]);

  // const [userInfoInvestor, setUserInfoInvestor] = useState([
  //   {
  //     id: '1',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  //   {
  //     id: '2',
  //     compnay: 'TestOperation',
  //     name: 'Mr.Test testsabud',
  //     email: 'test.see@test.com',
  //     text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
  //     liked: false,
  //   },
  // ]);

  const {
    userInfoAgency,
    addUserAgency,
    removeUserAgency,
    toggleLikeAgency,
    userInfoMedia,
    addUserMedia,
    removeUserMedia,
    toggleLikeMedia,
    userInfoInvestor,
    addUserInvestor,
    removeUserInvestor,
    toggleLikeInvestor,
  }: any = useStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [userInfoAgency]);

  const handleRemove = (id: any, type: any) => {
    if (type == 'INVESTOR') {
      removeUserInvestor(id);
    } else if (type === 'AGENCY') {
      removeUserAgency(id);
    } else {
      removeUserMedia(id);
    }
  };

  const handleLike = (id: any, type: any) => {
    if (type == 'INVESTOR') {
      toggleLikeInvestor(id);
    } else if (type === 'AGENCY') {
      toggleLikeAgency(id);
    } else {
      toggleLikeMedia(id);
    }
  };

  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');

  const handleOpen = (e: any, type: any) => {
    setType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [newInfo, setNewInfo] = useState({
    name: '',
    email: '',
    compnay: '',
    text: '',
    liked: false,
  });

  const handleNameChange = (e: any) => {
    const value = e.target.value;
    setNewInfo((prev) => ({ ...prev, name: value }));
  };
  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setNewInfo((prev) => ({ ...prev, email: value }));
  };
  const handleCompanyChange = (e: any) => {
    const value = e.target.value;
    setNewInfo((prev) => ({ ...prev, compnay: value }));
  };
  const handleTextChange = (e: any) => {
    const value = e.target.value;
    setNewInfo((prev) => ({ ...prev, text: value }));
  };

  const handleSave = () => {
    const newww = { ...newInfo, id: nanoid() };
    setOpen(false);
    if (type == 'INVESTOR') {
      addUserInvestor(newww);
    } else if (type === 'AGENCY') {
      addUserAgency(newww);
    } else {
      addUserMedia(newww);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 w-full">
      <div className="flex flex-col w-full gap-[24px]">
        <div className="flex flex-col gap-[10px]">
          <Typography fontSize={25} className=" text-center">
            Profile Sharing
          </Typography>
          <div className="lg:hidden flex flex-col gap-[16px]">
            <Button variant="outlined" size="large" href="/investor/">
              INVESTOR
            </Button>
            <Button variant="outlined" size="large" href="/agency/">
              AGENCY
            </Button>
            <Button variant="outlined" size="large" href="/media/">
              MEDIA
            </Button>
            {/* <Button variant="outlined" size="large">
              PROFESSIONAL
            </Button>
            <Button variant="outlined" size="large">
              NGO
            </Button>
            <Button variant="outlined" size="large">
              FREELANCE
            </Button>
            <Button variant="outlined" size="large">
              START-UP
            </Button> */}
          </div>
          <div className="hidden lg:flex gap-[16px]">
            <Card sx={{ padding: '24px' }}>
              <div className="flex flex-row justify-between">
                <Typography>INVESTOR</Typography>
                <AddIcon
                  fontSize="large"
                  className=" cursor-pointer"
                  onClick={(e) => handleOpen(e, 'INVESTOR')}
                />
              </div>
              <CardContent>
                <div className="flex flex-col gap-[16px]">
                  {!isLoading &&
                    userInfoInvestor &&
                    userInfoInvestor.map((item: any, index: any) => (
                      <BasicCard
                        key={index}
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        compnay={item.compnay}
                        liked={item.liked}
                        text={item.text}
                        type={'INVESTOR'}
                        onClickLike={handleLike}
                        onClickRemove={handleRemove}
                      />
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card sx={{ padding: '24px' }}>
              <div className="flex flex-row justify-between">
                <Typography>AGENCY</Typography>
                <AddIcon
                  fontSize="large"
                  className=" cursor-pointer"
                  onClick={(e) => handleOpen(e, 'AGENCY')}
                />
              </div>
              <CardContent>
                <div className="flex flex-col gap-[16px]">
                  {!isLoading &&
                    userInfoAgency &&
                    userInfoAgency.map((item: any, index: any) => (
                      <BasicCard
                        key={index}
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        compnay={item.compnay}
                        liked={item.liked}
                        text={item.text}
                        type="AGENCY"
                        onClickLike={handleLike}
                        onClickRemove={handleRemove}
                      />
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card sx={{ padding: '24px' }}>
              <div className="flex flex-row justify-between">
                <Typography>MEDIA</Typography>
                <AddIcon
                  fontSize="large"
                  className=" cursor-pointer"
                  onClick={(e) => handleOpen(e, 'MEDIA')}
                />
              </div>
              <CardContent>
                <div className="flex flex-col gap-[16px]">
                  {!isLoading &&
                    userInfoMedia &&
                    userInfoMedia.map((item: any, index: any) => (
                      <BasicCard
                        key={index}
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        compnay={item.compnay}
                        liked={item.liked}
                        text={item.text}
                        type="MEDIA"
                        onClickLike={handleLike}
                        onClickRemove={handleRemove}
                      />
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* modal */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 400 }}>
                <div className="flex flex-col gap-[16px] text-center">
                  <Typography>Add your infomation</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    onChange={handleNameChange}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={handleEmailChange}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                    onChange={handleCompanyChange}
                  />
                  <TextareaAutosize2
                    aria-label="empty textarea"
                    placeholder="Empty"
                    minRows={3}
                    onChange={handleTextChange}
                  />
                  <div className="flex w-full gap-2">
                    <Button
                      variant="outlined"
                      onClick={handleClose}
                      size="large"
                      fullWidth
                    >
                      cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleSave}
                      size="large"
                      fullWidth
                      // disabled={!isValid}
                    >
                      submit
                    </Button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </main>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const TextareaAutosize2 = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === 'dark' ? blue[600] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

'use client';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BasicCard from '../components/basicCard';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
// import { TextareaAutosize } from '@mui/base/TextareaAutosize';
// import MaxHeightTextarea from '../components/textArea';
import { styled } from '@mui/system';
import { useRouter } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { nanoid } from 'nanoid';
import useStore from '../store/useUserStore';

type Props = {};

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
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

const Page = (props: Props) => {
  const router = useRouter();

  const {
    userInfoAgency,
    addUserAgency,
    removeUserAgency,
    toggleLikeAgency,
  }: any = useStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [userInfoAgency]);

  const [newInfo, setNewInfo] = useState({
    name: '',
    email: '',
    compnay: '',
    text: '',
    liked: false,
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    addUserAgency(newww);
  };

  const handleRemove = (id: any) => {
    removeUserAgency(id);
  };

  const handleLike = (id: any) => {
    toggleLikeAgency(id);
  };

  return (
    <div className="flex flex-col w-full h-full gap-[24px] p-8">
      <div className="flex justify-between items-center">
        <ArrowBackIosNewIcon
          className="cursor-pointer"
          fontSize="medium"
          onClick={() => router.back()}
        />
        <Typography>AGENCY</Typography>
        <AddIcon
          fontSize="large"
          className=" cursor-pointer"
          onClick={handleOpen}
        />
      </div>
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

      <div className="flex flex-col gap-[4px]">
        <div className="flex flex-col gap-[16px]">
          {!isLoading &&
            userInfoAgency &&
            userInfoAgency.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Page;

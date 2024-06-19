'use client';
import {
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  Modal,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import BasicCard from './components/basicCard';
import AddIcon from '@mui/icons-material/Add';
import { nanoid } from 'nanoid';
import { style, TextareaAutosize2 } from './page';

export default function Home() {
  const [userInfoAgenCy, setUserInfoAgenCy] = useState([
    {
      id: '1',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
    {
      id: '2',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
    {
      id: '3',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
    {
      id: '4',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
  ]);

  const [userInfoMedia, setUserInfoMedia] = useState([
    {
      id: '1',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
    {
      id: '2',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
    {
      id: '3',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
  ]);

  const [userInfoInvestor, setUserInfoInvestor] = useState([
    {
      id: '1',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
    {
      id: '2',
      compnay: 'TestOperation',
      name: 'Mr.Test testsabud',
      email: 'test.see@test.com',
      text: 'Hello my name is test naja. i am Agency from TestOperation. nice to meet you',
      liked: false,
    },
  ]);

  const handleRemove = (id, type) => {
    if (type == 'INVESTOR') {
      setUserInfoInvestor((prev) => prev.filter((user) => user.id !== id));
    } else if (type === 'AGENCY') {
      setUserInfoAgenCy((prev) => prev.filter((user) => user.id !== id));
    } else {
      setUserInfoMedia((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const handleLike = (id, type) => {
    if (type == 'INVESTOR') {
      setUserInfoInvestor((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, liked: !user.liked } : user
        )
      );
    } else if (type === 'AGENCY') {
      setUserInfoAgenCy((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, liked: !user.liked } : user
        )
      );
    } else {
      setUserInfoMedia((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, liked: !user.liked } : user
        )
      );
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

  const handleNameChange = (e) => {
    const value = e.target.value;
    setNewInfo((prev) => ({ ...prev, name: value }));
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setNewInfo((prev) => ({ ...prev, email: value }));
  };
  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setNewInfo((prev) => ({ ...prev, compnay: value }));
  };
  const handleTextChange = (e) => {
    const value = e.target.value;
    setNewInfo((prev) => ({ ...prev, text: value }));
  };

  const handleSave = () => {
    const newww = { ...newInfo, id: nanoid() };
    setOpen(false);
    if (type == 'INVESTOR') {
      setUserInfoInvestor((prev) => [...prev, newww]);
    } else if (type === 'AGENCY') {
      setUserInfoAgenCy((prev) => [...prev, newww]);
    } else {
      setUserInfoMedia((prev) => [...prev, newww]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 w-full">
      <div className="flex flex-col w-full gap-[24px]">
        <div className="flex flex-col gap-[10px]">
          <Typography className="  text-xl text-white text-center">
            {/* Profile sharing */}
          </Typography>
          <div className="lg:hidden flex flex-col gap-[16px]">
            <Button variant="outlined" size="large" href="/investor/">
              INVESTOR
            </Button>
            <Button variant="outlined" size="large" href="/agency/">
              AGENCY
            </Button>
            <Button variant="outlined" size="large">
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
              {/* <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            /> */}
              <CardContent>
                <div className="flex flex-col gap-[16px]">
                  {userInfoInvestor &&
                    userInfoInvestor.map((item, index) => (
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
              {/* <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            /> */}
              <CardContent>
                <div className="flex flex-col gap-[16px]">
                  {userInfoAgenCy &&
                    userInfoAgenCy.map((item, index) => (
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
              {/* <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            /> */}
              <CardContent>
                <div className="flex flex-col gap-[16px]">
                  {userInfoMedia &&
                    userInfoMedia.map((item, index) => (
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

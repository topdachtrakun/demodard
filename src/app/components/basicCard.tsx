import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({
  id,
  name,
  compnay,
  text,
  email,
  liked,
  onClickLike,
  onClickRemove,
  type,
}: any) {
  return (
    <Card
      sx={{
        overflow: 'initial',
        minWidth: 275,
        boxShadow:
          '0px 1px 6px 0px rgba(181, 201, 235, 0.15), 0px 3px 10px 0px rgba(132, 147, 198, 0.12)',
      }}
      className=" relative"
    >
      <div className="  absolute top-[-10px] left-[-8px] cursor-pointer">
        <HighlightOffIcon onClick={() => onClickRemove(id, type)} />
      </div>

      <div className=" absolute  right-[5px] cursor-pointer">
        {!liked ? (
          <FavoriteBorderIcon onClick={() => onClickLike(id, type)} />
        ) : (
          <FavoriteIcon onClick={() => onClickLike(id, type)} />
        )}
      </div>

      <CardContent>
        <Typography variant="h5" component="div">
          {compnay}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {name}
          <br></br>
          {email}
        </Typography>
        <Typography variant="body2" className="mt-4">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

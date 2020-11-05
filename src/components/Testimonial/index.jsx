import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './TestiElement'
import img from './../../videos/2.svg'
export default function Testi() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={img}>
           
          </Avatar>
        }
        title="ACE"
        subheader="CEO , ACE INTERPRISES"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus deserunt cum blanditiis eveniet, voluptatem a eius illum excepturi soluta?
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}

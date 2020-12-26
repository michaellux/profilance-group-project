import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './news-list-item.css';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    minHeight: 370,
    maxHeight: 370,
  },
}));

// eslint-disable-next-line react/prop-types
const NewsListItem = ({ newsItem, type }) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, urlToImage } = newsItem;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={(type === 'our') ? `img/${urlToImage}` : urlToImage}
          title={title}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default NewsListItem;

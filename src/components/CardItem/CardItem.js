import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

const CardItem = ({ title, body, image, url }) => {
  const classes = useStyles();

  const cardTitle = title.substring(0, 100);
  const cardBody = body.substring(0, 150);

  const Wrapper = ({ children }) => {
    if (url) {
      return (
        <Link href={url}>
          <a>{children}</a>
        </Link>
      );
    }

    return children;
  };

  return (
    <Card className={classes.root}>
      <Wrapper>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title={cardTitle}
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                {cardTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {cardBody}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
          </Wrapper>
    </Card>
  );
};

CardItem.defaultProps = {
  title: '',
  body: '',
  url: '',
  image: 'https://source.unsplash.com/random',
};

CardItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default CardItem;

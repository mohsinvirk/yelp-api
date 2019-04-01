import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    margin: 20
  },
  media: {
    objectFit: "cover"
  }
};

function BusinessCard(props) {
    const {
        address,
        classes,
        display_phone,
        image_url,
        name,
    } = props;

  return (
    <Card className={ classes.card }>
      <CardActionArea>
        <CardMedia component="img"
          alt={ name }
          className={classes.media}
          height="140"
          image={ image_url }
          title={ name }
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { name }
          </Typography>

          <Typography component="p">
            { display_phone }
          </Typography>

          <Typography component="p">
            { address }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

BusinessCard.propTypes = {
  classes: PropTypes.object.isRequired
};

BusinessCard.defaultProps = {
    image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/V3aLa_owVD0BktSSk4KMdg/l.jpg'
};

export default withStyles(styles)(BusinessCard);

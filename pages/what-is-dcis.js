import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    main:{
        display:"flex",
        paddingTop:25,
        width:1200,
        margin:"auto",
        height:800

    },
    card: {
      width:344,
      margin:"auto",

    },
    media: {
      height: 344,
      width: 344,
      margin: "auto auto auto 0"
    },
    content: {
        margin:"auto"
    }
  };
  

const Page = ({classes}) => 
    <div className = {classes.main}>
        <Card className={classes.card}>
        
            <CardMedia
            className={classes.media}
                image = "../static/milkducts.png"
            />
            <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h3">
            What is DCIS?
          </Typography>
          <Typography component="p">
            Ductal carcinoma in situ (DCIS), or stage 0 breast cancer, is a condition of the milk ducts in the breast. In the United States, close to 60,000 women are diagnosed with DCIS each year.
          </Typography>
            </CardContent>
        </Card>
        <Card className={classes.card}>
        
        <CardMedia
        className={classes.media}
            image = "../static/decisiondoor.png"
        />
        <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h3">
        What is DCIS?
      </Typography>
      <Typography component="p">
        Ductal carcinoma in situ (DCIS), or stage 0 breast cancer, is a condition of the milk ducts in the breast. In the United States, close to 60,000 women are diagnosed with DCIS each year.
      </Typography>
        </CardContent>
    </Card>
    <Card className={classes.card}>
        
        <CardMedia
        className={classes.media}
            image = "../static/milkducts.png"
        />
        <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h3">
        What is DCIS?
      </Typography>
      <Typography component="p">
        Ductal carcinoma in situ (DCIS), or stage 0 breast cancer, is a condition of the milk ducts in the breast. In the United States, close to 60,000 women are diagnosed with DCIS each year.
      </Typography>
        </CardContent>
    </Card>
    </div>
    

export default withStyles(styles)(Page);
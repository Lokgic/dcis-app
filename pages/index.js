import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Pictogram from '../components/Pictogram'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import treatmentDescription from '../content/treatmentDescription.json'
import qualityOfLife from '../content/qualityOfLife.json'


const styles = theme => ({
    root:{
        // flexGrow:1
        // display:"flex",
        paddingTop:"20px",

    }, 
    box:{
        // background:"grey",
        flexGrow:1,
        // display:"flex"
        // height:"25%"
    },
    CategoryCard:{
        // display:"flex",
        // flexDirection:"column",
        // flexGrow:1
        margin:"20px auto",
        maxWidth:"400px"
        
    },
    content:{
        // flexGrow:1,
        display:"flex"
    },
    headerTitle:{
        fontSize:"1rem"
    },
    expand:{
        marginLeft:"auto",
        marginRigh:"8px"
    },
    half:{
        width:"50%"
    }
})


const riskSub = ["ipsilateral invasive breast cancer", "competing risk overview","risk of overtreatment"]

class NoScroll extends Component {
    constructor(props){
        super(props)
        this.state = {
            1:false,
            2:false,
            3:false,
            anchorEl:null,
            riskCurrentSub:0
        }
        this.handleAnchorEl = this.handleAnchorEl.bind(this);
        this.handleExpand = this.handleExpand.bind(this)
    }
    handleExpand(card){
        const newState = {}
        newState[card] = this.state[card]? false:true
        this.setState(newState);
    }
    handleAnchorEl(event){
        this.setState({ anchorEl: event.currentTarget });
    }
    handleClose = (cat,sub) => {
        this.setState({ anchorEl: null,[cat]:sub });
      }

    render(){
        const {classes} = this.props;
        const {anchorEl,riskCurrentSub} = this.state
        const tradeoff = treatmentDescription.subcategories.tradeoffs.basicContent
        return (
            <Grid  container className={classes.root}
                    // alignItems="stretch"
                    direction="column"
                    justify="space-between"
                    // xs = "12"
                    // spacing={40}
                    >

                    <Card className={classes.CategoryCard}
                        >
                        <CardHeader 
                            action={
                                <IconButton
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleAnchorEl}
                                >
                                <MoreVertIcon />
                                </IconButton>
                            }
                    
                            title="Risk" 
                            subheader={riskSub[riskCurrentSub]}
                            classes={{
                                title:classes.headerTitle
                            }}
                            />
                             <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                >
                                {
                                    riskSub.map((d,i)=><MenuItem onClick={()=>this.handleClose("riskCurrentSub",i)} key={d}>{d}</MenuItem>)
                                }
                                </Menu>
                        <CardContent className={classes.content}>
                            <svg width="50%" height="100%">
                            <Pictogram/>
                            </svg>
                            <svg width="50%" height="100%">
                            <Pictogram/>
                            </svg>
                        </CardContent>
                        <CardActions>
                            <IconButton className={classes.expand}
                                onClick={()=>this.handleExpand(1)}
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </CardActions>
                       <Collapse in={this.state[1]}>
                       <CardContent>
                           <Typography variant="h5" gutterBottom> 
                                Risk
                           </Typography>
                           <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                       </CardContent>
                        </Collapse>
                    </Card>
                    <Card className={classes.CategoryCard}
                        >
                        <CardHeader 
                            action={
                                <IconButton
                             
                                >
                                <MoreVertIcon />
                                </IconButton>
                            }
                    
                            title="Treatment Description" 
                            subheader={"Trade Off"}
                            classes={{
                                title:classes.headerTitle
                            }}
                            />
                  
                        <CardContent className={classes.content}>
                        <div className={classes.half}>
                            <Typography variant="h6">Pros</Typography>
                        {
                            tradeoff.as.pros.map(
                                d=>(<List dense={true}>
                                    <ListItem>
                                  
                                    <ListItemText primary = {d}/>
                                    </ListItem>
                                </List>)
                            )
                        }
                        <Typography variant="h6">Cons</Typography>
                        {
                            tradeoff.as.cons.map(
                                d=>(<List dense={true} disablePadding>
                                    <ListItem>
                                 
                                    <ListItemText primary = {d}/>
                                    </ListItem>
                                </List>)
                            )
                        }
                        </div>
                        <div className={classes.half}>
                            <Typography variant="h6">Pros</Typography>
                        {
                            tradeoff.bcs.pros.map(
                                d=>(<List dense={true}>
                                    <ListItem>
                                  
                                    <ListItemText primary = {d}/>
                                    </ListItem>
                                </List>)
                            )
                        }
                        <Typography variant="h6">Cons</Typography>
                        {
                            tradeoff.bcs.cons.map(
                                d=>(<List dense={true} disablePadding>
                                    <ListItem>
                                 
                                    <ListItemText primary = {d}/>
                                    </ListItem>
                                </List>)
                            )
                        }
                        </div>
                        
                        
                        </CardContent>
                        <CardActions>
                            <IconButton className={classes.expand}
                                onClick={()=>this.handleExpand(2)}
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </CardActions>
                       <Collapse in={this.state[2]}>
                       <CardContent>
                           <Typography variant="h5" gutterBottom> 
                                Treatment Description
                           </Typography>
                           <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                       </CardContent>
                        </Collapse>
                    </Card>
           
        
            </Grid>
        )
        
    }
}

export default withStyles(styles)(NoScroll);
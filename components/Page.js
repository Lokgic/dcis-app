import AppBar from './AppBar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = {
        pageBase:{

                // height:"100vh",
                // display:"flex",
                // flexDirection:"column"


        }
}


const Page = props=>(
        <div className={props.classes.pageBase}>
        <AppBar/>
        {props.children}
        </div>

)


export default withStyles(styles)(Page);
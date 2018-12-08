import App, { Container } from 'next/app';
import Page from '../components/Page'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles';
import Meta from '../components/Meta';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../components/GetPageContext'


class MyApp extends App{
    constructor(props) {
        super(props);
        this.pageContext = getPageContext();
        console.log(this.pageContext)
      }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
      
    render(){
        const { Component } = this.props;
        return (

            <Container>
                <Meta/>
                <JssProvider registry={this.pageContext.sheetsRegistry}
                         generateClassName={this.pageContext.generateClassName}
            >
                <MuiThemeProvider theme={this.pageContext.theme}>
                <CssBaseline>
                <Page>
                <Component />
                </Page>
                </CssBaseline>
                </MuiThemeProvider>
                </JssProvider>
            </Container>

        )
    }
}

export default MyApp;
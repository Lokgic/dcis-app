import {Component} from 'react'
import {GridContent, GridCell, GridTitle,OutcomeDropdown,GridSubContent,GridContentSplit} from '../style/GridSC'

export default class ContentBox extends Component{
    constructor(props){
        super(props);
        const subKeys = Object.keys(props.data.subcategories)
        this.state = {
            subKeys,
            displaying:subKeys[0]
        }
        this.handleDropdown = this.handleDropdown.bind(this);
    }
    handleDropdown(event){
        this.setState({displaying: event.target.value});
        console.log(this.state);
    }
    render(){
        console.log(this.props.data)
        const {categoryName, subcategories} = this.props.data
        const {subKeys,displaying} = this.state;
        const txPair = ["as","bcsr"]
        return (
            <GridCell>
                <GridTitle>{categoryName}</GridTitle>
                <OutcomeDropdown>
                    <select className="dropdown-select" value={displaying} onChange={this.handleDropdown}>
                        {subKeys.map(d=>(<option
                            key={`${categoryName+d}option`}
                            value={d}
                            >{subcategories[d].subcategoryName}</option>))}
                    </select>
                </OutcomeDropdown>
          
                
                <GridContentSplit>
                {txPair.map(d=>(
                    <GridSubContent>{contentParser(subcategories[displaying], d)}</GridSubContent>
                ))}
                </GridContentSplit>
    
               
          
            </GridCell>
        )
    }
}

const contentParser = (data,tx)=>{

    switch (data.contentType){
        case "text": 
            return (<p>{data.basicContent[tx]}</p>)
        case "tradeoffs":
            let tradeoffoutput = [];
            ["pros",'cons'].map(d=>{
                tradeoffoutput.push(<p>{d}</p>)
                tradeoffoutput.push(<ul>
                    {data.basicContent[tx][d].map(
                    k=>(<li>{k}</li>)
                    )
                }
                </ul>)
            })
            return tradeoffoutput;
        case "list":
            return (
            <ul>
                {data.basicContent[tx].map(d=>(<li>{d}</li>))}
            </ul>)
        case "image":
            let out = [<p>{data.basicContent[tx].text}</p>];
            if (data.basicContent[tx].img !== null) out.push(<img src={`/static/images/${data.basicContent[tx].img}`} />)
            return out;
        default:
            return null;
    }   
    
    return
}


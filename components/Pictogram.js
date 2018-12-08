import {Component} from "react"

class Pictogram extends Component{
    constructor(props){
        super(props)
        const defaultDime = {
            reference:100,
            r:4,
            baseMargin:{x:10,y:10},
            m:{x:1,y:1}
        }
        this.state = {
            dime:{
                ...defaultDime,
                ...props.dime
            },
            data:props.data
        }

    }
    render(){
        let cir = []
        const {r, baseMargin, m} = this.state.dime;
        for (let i = 0;i<10;i++){
            for (let j = 0;j<10;j++){
                cir.push(
                    <circle
                        cx={baseMargin.x+m.x*j*2*r+"%"}
                        cy={baseMargin.y+m.y*i*(2*r)+"%"}
                        r={r+"%"}
                        fill={i<9&&j<10?"black":"grey"}
                    />
                )
            }
        }
        return (
        <g>
            {cir}
        </g>)
    }
}

export default Pictogram;
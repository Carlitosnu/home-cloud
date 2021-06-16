import React from 'react';
import { Container,Card } from "react-bootstrap";
export class Direct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            loading:true
        };
    }
    componentDidMount(){
        this.getDirectory("/")
    }
    getDirectory(path){
        fetch("http://192.168.100.155:3300/find"+path)
        .then(response => response.json())
        .then(data => this.setState({ data, loading:false }));
    }
    render(){
        const {loading} = this.state;
        let {data} = this.state
        if(loading){
            return(
                <h1>Cargando...</h1>
            )
        }else{
            return(
                <div>
                    {data.dirs.map(dir =>
                        <Card className="p-3 bg-dark text-white mb-3">{dir}</Card>
                    )}
		    {data.files.map(dir =>
                        <Card className="p-3 bg-dark text-white mb-3" variant="dark">{dir}</Card>
                    )}
                </div>
            )
        }
    }
}
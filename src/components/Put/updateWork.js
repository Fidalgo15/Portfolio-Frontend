import React from 'react'
import '../style.css'
import {buildUrl} from '../../connection/url'


class createWork extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            works: []
        }
    };

    componentDidMount() {
        let url = buildUrl("work/_id"); 
        fetch(url,{
            method: "PUT",
            body: JSON.stringify({
                company: "",
                title: "",
                description: "",
                start_date: "",
                end_date: ""
            }),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                works: data
        })
        })
        .catch(err => {
            console.log('error', err)
        
        }); 
    };

    render() {
        return(
            <div>
            </div>
        )
    }

}

export default createWork
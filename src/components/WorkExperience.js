import React from 'react'
import './style.css'
import {buildUrl} from '../connection/url'


class WorkExperience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            works: []
        }
    };
    
    componentDidMount() {
        let url = buildUrl("work")
        fetch(url)
            .then(
                res => { 
                    res.json().then(data => {
                        this.setState({
                            works: data
                        })
                })
            })
    };

    render() {
        let works = this.state.works.map(work => {
            return(
             <div key={work.id}>
                 <ul>
                    <li>{work.company}</li>
                    <li>{work.title}</li>
                    <li>{work.description}</li>
                    <li>{work.start_date}</li>
                    <li>{work.end_date}</li>
                 </ul>
              
             </div>
            )
           })

        return (
            <div className="background">
                {works}
            </div>
        )
    }
}

export default WorkExperience
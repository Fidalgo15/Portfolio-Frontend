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
                     <label>Company</label>
                    <li>{work.company}</li>
                    <label>Job Title</label>
                    <li>{work.title}</li>
                    <label>Job Description</label>
                    <li>{work.description}</li>
                    <label>Start Date</label>
                    <li>{work.start_date}</li>
                    <label>End Date</label>
                    <li>{work.end_date}</li>
                 </ul>
             </div>
            )
           })

        return (
            <div className="background">
                <h1>Work Experiences</h1>
                {works}
            </div>
        )
    }
}

export default WorkExperience
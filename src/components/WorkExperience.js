import React from 'react'
import './style.css'
import {buildUrl} from '../connection/url'
import CreateWork from './Post/createWork'
import UpdateWork from './Put/updateWork'

class WorkExperience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            works: []
        }
    };
    
    componentDidMount() {
        let url = buildUrl("work/");
        fetch(url)
            .then(res => { 
                    res.json().then(data => {
                        this.setState({
                            works: data
                        })
                    })
                    .catch(err => {
                        console.log("error", err)
                    })
                }
            );
    };

    render() {
        return (
            <div className="background">
                <h1>Work Experiences</h1>
                {this.state.works.map(work =>          
                            <ul key={work._id}>
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
                      )
                }
                {/* <nav style={{paddingLeft: 25}}>
                <Link to="/createWork" color="link" size="sm">Create New</Link>
                </nav> */}
                    <CreateWork />
                    <UpdateWork />
            </div>
        )
    }
}

export default WorkExperience
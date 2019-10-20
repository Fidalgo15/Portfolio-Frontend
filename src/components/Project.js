import React from 'react'
import './style.css'
import {buildUrl} from '../connection/url'

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        let url = buildUrl("projects")
        fetch(url)
            .then(
                res => { 
                    res.json().then(data => {
                        this.setState({
                            projects: data
                        })
                })
            })
    };

    render() {
        let projects = this.state.projects.map(project => {
            return(
             <div key={project.id}>
                 <ul>
                     <label>Title</label>
                    <li>{project.title}</li>
                    <label>Contact</label>
                    <li>{project.link}</li>
                    <label>Screenshot</label>
                    <li>{project.screenshot}</li>
                 </ul>
             </div>
            )
           })
        return (
            <div className="background">
                <h1>Project</h1>
                {projects}
            </div>
        )
    }
}

export default Project
import React from 'react'
import './style.css'
import {buildUrl} from '../connection/url'
import CreateProject from './Post/createProject'
import DisplayProject from './Display/displayProject'
// import PubSub from 'pubsub-js'

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            editProject: null
        }
    };

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
            });
    };

    // clickHandler(event){
    //     console.log(this.state.project)
    //     PubSub.publish(PROJECT_TO_BE_EDITED_CHANNEL, this.state.project)
    // }

    render() {
        let projects = this.state.projects.map(project => 
            <DisplayProject project={project} key={project._id} />
           );
        return (
            <div className="background">
                <h1>Project</h1>
                {projects}
                <CreateProject />
            </div>
        )
    }
}

export default Project
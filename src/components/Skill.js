import React from 'react'
import './style.css'
import {buildUrl} from '../connection/url'
import CreateSkill from './Post/createSkill'

class Skill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skills: []
        }
    };

    componentDidMount() {
        let url = buildUrl("skills")
        fetch(url)
            .then(
                res => { 
                    res.json().then(data => {
                        this.setState({
                            skills: data
                        })
                })
            });
    };

    render() {
        let skills = this.state.skills.map(skill => {
            return(
             <div key={skill._id}>
                 <ul>
                     <label>Name</label>
                    <li>{skill.name}</li>
                    <label>Rank</label>
                    <li>{skill.rank}</li>
                 </ul>
             </div>
            );
           });
        return (
            <div className="background">
                <h1>Skills</h1>
                {skills}
                <CreateSkill />
            </div>
        )
    }
}

export default Skill
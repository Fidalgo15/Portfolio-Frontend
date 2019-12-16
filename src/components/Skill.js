import React from 'react';
import './style.css';
import {buildUrl} from '../connection/url';
import {Button} from 'reactstrap';
import CreateSkill from './Post/createSkill';
import DisplaySkill from './Display/displaySkill';
import UpdateSkill from './Put/updatSkill';

class Skill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skills: [],
            displayMode: true,
            createMode: false,
            editMode: false,
            editSkill: null
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
        let editSkillClick = (skill) => {
            this.setState({editSkill: skill, editMode: true, displayMode: false})
        };

        let createSkillClick = () => {
            this.setState({createMode: true, displayMode: false, editMode: false})
        };

        let returnClickHandler = () => {
            this.setState({createMode: false, editMode: false, displayMode: true})
        };

        let newSkillHandler = (skill) => {
            this.setState({skills: [...this.state.skills, skill]})
        };

        let skillsDisplay = this.state.skills.map(skill => 
            <DisplaySkill skill={skill} key={skill._id} editSkillClick={editSkillClick} />
            );

        let edit = <UpdateSkill editSkill={this.state.editSkill} returnClickHandler={returnClickHandler} />

        let create = <CreateSkill returnClickHandler={returnClickHandler} newSkillHandler={newSkillHandler} />
        return (
            <div className="background">
                <h1>Skills</h1>
                <div style={{paddingLeft: 30}}>
                    <Button color="link" size="sm" onClick={createSkillClick}>Create New</Button>
                    <br />
                </div>
                {this.state.displayMode? skillsDisplay : null}
                {this.state.editMode? edit : null}
                {this.state.createMode? create : null} 
            </div>
        )
    }
}

export default Skill
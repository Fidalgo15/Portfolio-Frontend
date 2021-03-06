import React from 'react';
import './style.css';
import { buildUrl } from '../connection/url';
import {Button} from 'reactstrap';
import CreateEducation from './Post/createEducation';
import DisplayEducation from './Display/displayEducation';
import UpdateEducation from './Put/updateEducation';

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            educations: [],
            displayMode: true,
            createMode: false,
            editMode: false,
            editEducation: null
        }
    };

    componentDidMount() {
        let url = buildUrl("education")
        fetch(url)
            .then(
                res => { 
                    res.json().then(data => {
                        this.setState({
                            educations: data
                        })
                })
            });
    };

    render() {
        let editEducationClick = (education) => {
            this.setState({editEducation: education, editMode: true, displayMode: false})
        };

        let createEducationClick = () => {
            this.setState({createMode: true, displayMode: false, editMode: false})
        };

        let returnClickHandler = () => {
            this.setState({createMode: false, editMode: false, displayMode: true})
        };

        let newEducationHandler = (education) => {
            this.setState({educations: [...this.state.educations, education]})
        };

        let educationsDisplay = this.state.educations.map(education => 
            <DisplayEducation education={education} key={education._id} editEducationClick={editEducationClick} />
        );

        let edit = <UpdateEducation editEducation={this.state.editEducation} returnClickHandler={returnClickHandler} />

        let create = <CreateEducation returnClickHandler={returnClickHandler} newEducationHandler={newEducationHandler} />
        return (
            <div className="background">
                <h1>Education</h1>
                <div style={{paddingLeft: 30}}>
                    <Button color="link" size="sm" onClick={createEducationClick}>Create New</Button>
                    <br />
                </div>
                {this.state.displayMode? educationsDisplay : null}
                {this.state.editMode? edit : null}
                {this.state.createMode? create : null} 
            </div>
        )
    }
}

export default Education
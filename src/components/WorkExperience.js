import React from 'react'
import './style.css'
import {Button} from 'reactstrap'
import {buildUrl} from '../connection/url'
import CreateWork from './Post/createWork'
import UpdateWork from './Put/updateWork'
import DisplayWork from './Display/displayWork'

class WorkExperience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            works: [],
            displayMode: true,
            editMode: false,
            editWork: null,
            createMode: false
        }
    };
    
    getData() {
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

    componentDidMount() {
        this.getData()
    };

    render() {
        let editWorkClick = (work) => {
            this.setState({editWork: work, editMode: true, displayMode: false})
        };

        let createWorkClick = () => {
            this.setState({createMode: true, displayMode: false, editMode: false})
        }

        let returnClickHandler = () => {
            this.setState({createMode: false, editMode: false, displayMode: true})
        }

        let newWorkHandler = (work) => {
            this.setState({works: [...this.state.works, work]})
        }

        let worksDisplay = this.state.works.map(work =>
            <DisplayWork work={work} key={work._id} editWorkClick={editWorkClick} />
        );

        let edit = <UpdateWork editWork={this.state.editWork} returnClickHandler={returnClickHandler} />

        let create = <CreateWork  getData={this.getData} returnClickHandler={returnClickHandler} newWorkHandler={newWorkHandler} />

        return (
            <div className="background">
                <h1>Work Experiences</h1>
                <div style={{paddingLeft: 30}}>
                    <Button color="link" size="sm" onClick={createWorkClick}>Create New</Button>
                    <br />
                </div>
                {this.state.displayMode? worksDisplay : null}
                {this.state.editMode? edit : null}
                {this.state.createMode? create : null}

            </div>
        )
    }
}

export default WorkExperience
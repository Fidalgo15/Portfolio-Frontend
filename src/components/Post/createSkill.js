import React from 'react'
import '../style.css'
import { Input, Col, Button } from 'reactstrap'
import {buildUrl} from '../../connection/url'

class createSkill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            rank: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRank = this.onChangeRank.bind(this);
    };


onChangeName(e) {
  this.setState({
    name: e.target.value
  });
}
onChangeRank(e) {
  this.setState({
    rank: e.target.value
  });  
}

    handleSubmit(event) {
        event.preventDefault();
        let url = buildUrl("skills"); 
        fetch(url,{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => res.json())
        .then(skill => { 
            this.setState({
            name: "",
            rank: ""
        });
        this.props.newSkillHandler(skill)
        })
        .catch(err => {
            console.log('error', err)
        }); 
    };

    render() {
        return(
            <div>
                <form style={{paddingLeft: 23}} onSubmit={this.handleSubmit}>
                    <Col sm={4}>
                        <Input type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeName} />
                    </Col>
                    <br />
                    <Col sm={4}>
                        <Input type="text" placeholder="Rank" value={this.state.rank} onChange={this.onChangeRank} />
                    </Col>
                    <br />
                    <Col>
                        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
                    </Col>
                    </form>
                    <div style={{paddingLeft: 11}}>
                    <Col>
                        <Button onClick={ () => this.props.returnClickHandler()} color="link">Back to Home</Button>
                    </Col>
                    </div>
            </div>
        )
    }

}

export default createSkill
import React from 'react'
import '../style.css'
import { Input, Col, Button } from 'reactstrap'
import {buildUrl} from '../../connection/url'

class createReference extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phone_number: "",
            relation: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeRelation = this.onChangeRelation.bind(this);
    };


onChangeName(e) {
  this.setState({
    name: e.target.value
  });
}
onChangePhone(e) {
  this.setState({
    phone_number: e.target.value
  });  
}
onChangeRelation(e) {
  this.setState({
    relation: e.target.value
  });
}

    handleSubmit(event) {
        event.preventDefault();
        let url = buildUrl("references"); 
        fetch(url,{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => { 
            this.setState({
            name: "",
            phone_number: "",
            relation: ""
        })
        })
        .catch(err => {
            console.log('error', err)
        }); 
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Col sm={4}>
                        <Input type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeName} />
                    </Col>
                    <Col sm={4}>
                        <Input type="text" placeholder="Phone Number" value={this.state.phone_number} onChange={this.onChangePhone} />
                    </Col>
                    <Col sm={4}>
                        <Input type="text" placeholder="Relation" value={this.state.relation} onChange={this.onChangeRelation} />
                    </Col>
                    <Col>
                        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
                    </Col>
                </form>
            </div>
        )
    }

}

export default createReference
import React from 'react'
import '../style.css'
import { Input, Col, Button } from 'reactstrap'
import {buildUrl} from '../../connection/url'

class createCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            tag: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
    };


onChangeName(e) {
  this.setState({
    name: e.target.value
  });
}
onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
onChangeTag(e) {
  this.setState({
    tag: e.target.value
  });  
}

    handleSubmit(event) {
        event.preventDefault();
        let url = buildUrl("catalog"); 
        fetch(url,{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => { 
            this.setState({
            name: "",
            description: "",
            tag: ""
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
                        <Input type="textarea" placeholder="Description" value={this.state.description} onChange={this.onChangeDescription} />
                    </Col>
                    <Col sm={4}>
                        <Input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onChangeTag} />
                    </Col>
                    <Col>
                        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
                    </Col>
                </form>
            </div>
        )
    }

}

export default createCatalog
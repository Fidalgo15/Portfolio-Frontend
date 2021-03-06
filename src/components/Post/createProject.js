import React from 'react'
import '../style.css'
import { Input, Col, Button } from 'reactstrap'
import {buildUrl} from '../../connection/url'

class createProject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            link: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
    };


onChangeTitle(e) {
  this.setState({
    title: e.target.value
  });
}
onChangeLink(e) {
  this.setState({
    link: e.target.value
  });  
}

    handleSubmit(event) {
        event.preventDefault();
        let url = buildUrl("projects"); 
        fetch(url,{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => { 
            this.setState({
            title: "",
            link: ""
        })
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
                        <Input type="text" placeholder="Title" value={this.state.title} onChange={this.onChangeTitle} />
                    </Col>
                    <br />
                    <Col sm={4}>
                        <Input type="text" placeholder="Github Link" value={this.state.link} onChange={this.onChangeLink} />
                    </Col>
                    <br />
                    <Col>
                        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
                    </Col>
                </form>
            </div>
        )
    }

}

export default createProject
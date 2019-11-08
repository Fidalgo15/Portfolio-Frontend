import React from 'react'
import '../style.css'
import { Input, Col, Button } from 'reactstrap'
import {buildUrl} from '../../connection/url'

class createWork extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            company: "",
            title: "",
            description: "",
            start_date: "",
            end_date: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
    };


onChangeCompany(e) {
  this.setState({
    company: e.target.value
  });
}
onChangeTitle(e) {
  this.setState({
    title: e.target.value
  });  
}
onChangeDescription(e) {
  this.setState({
    description: e.target.value
  });
}
onChangeStart(e) {
    this.setState({
      start_date: e.target.value
    });  
  }
  onChangeEnd(e) {
    this.setState({
      end_date: e.target.value
    });
  }

    handleSubmit(event) {
        event.preventDefault();
        let url = buildUrl("work"); 
        fetch(url,{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => res.json())
        .then(work => { 
            this.setState({
            company: "",
            title: "",
            description: "",
            start_date: "",
            end_date: ""
        });
        this.props.newWorkHandler(work)
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
                        <Input type="text" placeholder="Company" value={this.state.company} onChange={this.onChangeCompany} />
                    </Col>
                    <Col sm={4}>
                        <Input type="text" placeholder="Job Title" value={this.state.title} onChange={this.onChangeTitle} />
                    </Col>
                    <Col sm={4}>
                        <Input type="textarea" placeholder="Description" value={this.state.description} onChange={this.onChangeDescription} />
                    </Col>
                    <Col sm={4}>
                        <Input type="text" placeholder="Start Date" value={this.state.start_date} onChange={this.onChangeStart} />
                    </Col>
                    <Col sm={4}>
                        <Input type="text" placeholder="End Date" value={this.state.end_date} onChange={this.onChangeEnd} />
                    </Col>
                    <Col>
                        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
                    </Col>
                    <Col>
                        <Button onClick={ () => this.props.returnClickHandler()} color="link">Back to Home</Button>
                    </Col>
                </form>
            </div>
        )
    }

}

export default createWork
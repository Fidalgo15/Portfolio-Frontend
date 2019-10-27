import React from 'react'
import '../style.css'
import { Input, Col, Button } from 'reactstrap'
import {buildUrl} from '../../connection/url'

class createEducation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            school: "",
            year_graduated: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
    };


onChangeSchool(e) {
  this.setState({
    school: e.target.value
  });
}
onChangeYear(e) {
  this.setState({
    year_graduated: e.target.value
  });  
}

    handleSubmit(event) {
        event.preventDefault();
        let url = buildUrl("education"); 
        fetch(url,{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => { 
            this.setState({
            school: "",
            year_graduated: ""
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
                        <Input type="text" placeholder="School" value={this.state.school} onChange={this.onChangeSchool} />
                    </Col>
                    <Col sm={4}>
                        <Input type="text" placeholder="Year Graduated" value={this.state.year_graduated} onChange={this.onChangeYear} />
                    </Col>
                    <Col>
                        <Button onClick={this.handleSubmit} type="submit" color="primary">Submit</Button>
                    </Col>
                </form>
            </div>
        )
    }

}

export default createEducation
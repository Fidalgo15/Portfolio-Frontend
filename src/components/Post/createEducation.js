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
        .then(res => res.json())
        .then(education => { 
            this.setState({
            school: "",
            year_graduated: ""
        });
        this.props.newEducationHandler(education)
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
                        <Input type="text" placeholder="School" value={this.state.school} onChange={this.onChangeSchool} />
                    </Col>
                    <br />
                    <Col sm={4}>
                        <Input type="text" placeholder="Year Graduated" value={this.state.year_graduated} onChange={this.onChangeYear} />
                    </Col>
                    <br />
                    <Col>
                        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
                    </Col>
                </form>
                <div style={{paddingLeft: 12}}>
                    <Col>
                        <Button color="link" size="sm" onClick={ () => this.props.returnClickHandler()}>Back to Home</Button>
                    </Col>
                </div>
            </div>
        )
    }

}

export default createEducation
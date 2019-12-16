import React from 'react';
import '../style.css';
import {buildUrl} from '../../connection/url';
import {Button, Input, Col} from 'reactstrap';

class updateEducation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            education: props.editEducation,
        }
        this.onChangeEducation = this.onChangeEducation.bind(this);
    };

    static getDerivedStateFromProps(props, state) {
        return {education: props.editEducation}
    };

    onChangeEducation(e) {
        this.setState({
          education: e.target.value
        });
      }

    componentDidMount() {
        let url = buildUrl("education/_id"); 
        fetch(url,{
            method: "PUT",
            body: JSON.stringify({
                school: "",
                year_graduated: ""
            }),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                education: data
        })
        })
        .catch(err => {
            console.log('error', err)
        
        }); 
    };

    render() {

        return(
            <div>
                <div style={{paddingLeft: 23}}>
                    <Col sm={4}>
                        <label>School</label>
                        <Input type="text" defaultValue={this.state.education.school} onChange={this.onChangeEducation} />
                    </Col>
                    <Col sm={4}>
                        <label>Year Graduated</label>
                        <Input type="text" defaultValue={this.state.education.year_graduated} onChange={this.onChangeEducation} />
                    </Col>
                    <br />
                    <Col>
                        <Button color="primary" size="sm" >Save</Button>
                    </Col>
                </div>
                <div style={{paddingLeft: 12}}>
                    <Col>
                        <Button color="link" size="sm" onClick={ () => this.props.returnClickHandler()}>Back to Home</Button>
                    </Col>
                </div>
            </div>
        )
    }

}

export default updateEducation
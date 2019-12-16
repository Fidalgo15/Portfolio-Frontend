import React from 'react';
import './style.css';
// import { Input, Col } from 'reactstrap';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: ""
        }
    };


    render() {
        return(
            <div className='App-header'>
                <h1>Devin Sherman</h1>
                <h2>Web Developer</h2>
                {/* <Col sm={4}>
                    <Input type="text" placeholder="Email" />
                </Col>
                <Col sm={4}>
                    <Input type="email" placeholder="Password" />
                </Col> */}
            </div>
            
        )
    }
}
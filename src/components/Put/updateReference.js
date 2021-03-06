import React from 'react';
import '../style.css';
// import {buildUrl} from '../../connection/url';
import {Button, Input, Col} from 'reactstrap';
import PubSub from 'pubsub-js';
import {REFERENCE_TO_BE_EDITED_CHANNEL} from '../PubSubConnections';


class updateReference extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         reference: null
        }
        this.handleReferenceToEditNotification = this.handleReferenceToEditNotification.bind(this)

        PubSub.subscribe(REFERENCE_TO_BE_EDITED_CHANNEL, this.handleReferenceToEditNotification)
    };

    // componentDidMount() {
    //     let url = buildUrl("reference/_id"); 
    //     fetch(url,{
    //         method: "PUT",
    //         body: JSON.stringify({
    //             name: "",
    //             phone_number: "",
    //             relation: "",
    //         }),
    //         headers:{ 'Content-Type': 'application/json' } 
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             reference: data
    //     })
    //     })
    //     .catch(err => {
    //         console.log('error', err)
        
    //     }); 
    // };

    handleReferenceToEditNotification(msg, reference){
        console.log(msg, reference)
        this.setState({reference: reference})
    }

    render() {
        return(
            <div>
                <div style={{paddingLeft: 23}}>
                    <Col sm={4}>
                        <label>Name</label>
                        <Input type="text" defaultValue={this.state.reference ? this.state.reference.name : null} />
                    </Col>
                    <Col sm={4}>
                        <label>Phone Number</label>
                        <Input type="text" defaultValue={this.state.reference ? this.state.reference.phone_number : null} />
                    </Col>
                    <Col sm={4}>
                        <label>Relation</label>
                        <Input type="text" defaultValue={this.state.reference ? this.state.reference.relation : null} />
                    </Col>
                    <br />
                    <Col>
                        <Button color="primary" size="sm">Save</Button>
                    </Col>
                </div>
                {/* <div style={{paddingLeft: 20}}>
                    <Col>
                        <Button color="link" size="sm">Back to Home</Button>
                    </Col>
                </div> */}
            </div>
        )
    }

}

export default updateReference
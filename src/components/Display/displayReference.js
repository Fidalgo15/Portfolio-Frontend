import React from 'react'
import {Button} from 'reactstrap'
import PubSub from 'pubsub-js'
import {REFERENCE_TO_BE_EDITED_CHANNEL} from '../PubSubConnections'

function displayReference(props) {

    let clickHandler = (event) => {
        console.log(props.reference)
        PubSub.publish(REFERENCE_TO_BE_EDITED_CHANNEL, props.reference)
    }

    return(      
        <ul>
            <li>
                <label>Name:</label>
                <span> {props.reference.name}</span>
                <br />
                <label>Phone Number:</label>
                <span> {props.reference.phone_number}</span>
                <br />
                <label>Relation:</label>
                <span> {props.reference.relation}</span>
                <br />
                <Button outline color="primary" size="sm" onClick={clickHandler}>Edit</Button>
                <Button color="danger" size="sm" >Delete</Button>
            </li>
        </ul>
        )
}

export default displayReference;
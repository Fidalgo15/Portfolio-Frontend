import React from 'react'
import {Button} from 'reactstrap'

function displayCatalog(props) {

    return(      
        <ul>
            <li>
                <label>Name:</label>
                <span> {props.catalog.name}</span>
                <br />
                <label>Description:</label>
                <span> {props.catalog.description}</span>
                <br />
                <label>Tag:</label>
                <span> {props.catalog.tag}</span>
                <br />
                <Button outline color="primary" size="sm" onClick={props.edit}>Edit</Button>
                <Button color="danger" size="sm" >Delete</Button>
            </li>
        </ul>
        )
}

export default displayCatalog;
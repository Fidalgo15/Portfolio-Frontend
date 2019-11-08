import React from 'react'
import {Button} from 'reactstrap'

function displayProject(props) {

    return(      
        <ul>
            <li>
                <label>Title:</label>
                <span> {props.project.title}</span>
                <br />
                <label>Link:</label>
                <span> {props.project.link}</span>
                <br />
                <label>Screenshot:</label>
                <span> {props.project.screenshot}</span>
                <br />
                <Button outline color="primary" size="sm" onClick={props.edit}>Edit</Button>
                <Button color="danger" size="sm" >Delete</Button>
            </li>
        </ul>
        )
}

export default displayProject;
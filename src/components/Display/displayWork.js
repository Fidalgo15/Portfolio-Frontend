import React from 'react'
import {Button} from 'reactstrap'

function displayWork(props) {

    return(      
        <ul>
            <li>
                <label>Company:</label>
                <span> {props.work.company}</span>
                <br />
                <label>Title:</label>
                <span> {props.work.title}</span>
                <br />
                <label>Description:</label>
                <span> {props.work.description}</span>
                <br />
                <label>Start Date:</label>
                <span> {props.work.start_date}</span>
                <br />
                <label>End Date:</label>
                <span> {props.work.end_date}</span>
                <br />
                <Button outline color="primary" size="sm" onClick={ () => props.editWorkClick(props.work)}>Edit</Button>
                <Button color="danger" size="sm" >Delete</Button>
            </li>
        </ul>
    )
}

export default displayWork;
import React from 'react'
import {Button} from 'reactstrap'

function displayEducation(props) {

    return(      
        <ul>
            <li>
                <label>School:</label>
                <span> {props.education.school}</span>
                <br />
                <label>Year Graduated:</label>
                <span> {props.education.year_graduated}</span>
                <br />
                <Button outline color="primary" size="sm" onClick={props.editClick}>Edit</Button>
                <Button color="danger" size="sm" >Delete</Button>
            </li>
        </ul>
        )
}

export default displayEducation;
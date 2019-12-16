import React from 'react'
import {Button} from 'reactstrap'

function displaySkill(props) {

    return(      
        <ul>
            <li>
                <label>Name:</label>
                <span> {props.skill.name}</span>
                <br />
                <label>Rank:</label>
                <span> {props.skill.rank}</span>
                <br />
                <Button outline color="primary" size="sm" onClick={ () => props.editSkillClick(props.skill)}>Edit</Button>
                <Button color="danger" size="sm" >delete</Button>
            </li>
        </ul>
        )
}

export default displaySkill;
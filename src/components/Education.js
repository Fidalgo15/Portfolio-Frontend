import React from 'react'
import './style.css'
import { buildUrl } from '../connection/url'

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            educations: []
        }
    }

    componentDidMount() {
        let url = buildUrl("education")
        fetch(url)
            .then(
                res => { 
                    res.json().then(data => {
                        this.setState({
                            educations: data
                        })
                })
            })
    };

    render() {
        let educations = this.state.educations.map(education => {
            return(
             <div key={education.id}>
                 <ul>
                     <label>School</label>
                    <li>{education.school}</li>
                    <label>Graduated</label>
                    <li>{education.year_graduated}</li>
                 </ul>
             </div>
            )
           })
        return (
            <div className="background">
                <h1>Education</h1>
                {educations}
            </div>
        )
    }
}

export default Education
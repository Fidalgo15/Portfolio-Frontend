import React from 'react'
import './style.css'
import {buildUrl} from '../connection/url'
import CreateReference from './Post/createReference'

class Reference extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            references: []
        }
    };

    componentDidMount() {
        let url = buildUrl("references")
        fetch(url)
            .then(
                res => { 
                    res.json().then(data => {
                        this.setState({
                            references: data
                        })
                })
            });
    };

    render() {
        let references = this.state.references.map(reference => {
            return(
             <div key={reference._id}>
                 <ul>
                     <label>Name</label>
                    <li>{reference.name}</li>
                    <label>Contact</label>
                    <li>{reference.phone_number}</li>
                    <label>Relation</label>
                    <li>{reference.relation}</li>
                 </ul>
             </div>
            );
           });
        return (
            <div className="background">
                <h1>References</h1>
                {references}
                <CreateReference />
            </div>
        )
    }
}

export default Reference
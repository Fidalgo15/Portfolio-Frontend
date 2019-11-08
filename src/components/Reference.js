import React from 'react'
import './style.css'
import {buildUrl} from '../connection/url'
import CreateReference from './Post/createReference'
import DisplayReference from './Display/displayReference'

class Reference extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            references: [],
            // editMode: false
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
        let references = this.state.references.map(reference => 
            <DisplayReference reference={reference} key={reference._id} />
           );
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
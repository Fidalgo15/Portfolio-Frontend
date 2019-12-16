import React from 'react';
import './style.css';
import {buildUrl} from '../connection/url';
import CreateReference from './Post/createReference';
import DisplayReference from './Display/displayReference';
import PubSub from 'pubsub-js';
import {REFERENCE_TO_BE_EDITED_CHANNEL} from './PubSubConnections';
import UpdateReference from './Put/updateReference';

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

        let clickEditHandler = (reference) => {
            console.log(reference)
            PubSub.publish(REFERENCE_TO_BE_EDITED_CHANNEL, reference)
        };

        let references = this.state.references.map(reference => 
            <DisplayReference reference={reference} key={reference._id} />
        );

        let edit = <UpdateReference clickEditHandler={clickEditHandler} />
        return (
            <div className="background">
                <h1>References</h1>
                {references}
                <CreateReference />
                {edit}
            </div>
        )
    }
}

export default Reference
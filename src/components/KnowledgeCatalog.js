import React from 'react'
import './style.css'
import {buildUrl} from '../connection/url'

class KnowledgeCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            catalogs: []
        }
    }

    componentDidMount() {
        let url = buildUrl("catalog")
        fetch(url)
            .then(
                res => { 
                    res.json().then(data => {
                        this.setState({
                            catalogs: data
                        })
                })
            })
    };

    render() {
        let catalogs = this.state.catalogs.map(catalog => {
            return(
             <div key={catalog.id}>
                 <ul>
                     <label>Name</label>
                    <li>{catalog.name}</li>
                    <label>Description</label>
                    <li>{catalog.description}</li>
                    <label>Tag</label>
                    <li>{catalog.tag}</li>
                 </ul>
             </div>
            )
           })
        return (
            <div className="background">
                <h1>KnowledgeCatalog</h1>
                {catalogs}
            </div>
        )
    }
}

export default KnowledgeCatalog
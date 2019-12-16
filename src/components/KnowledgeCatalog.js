import React from 'react';
import './style.css';
import {buildUrl} from '../connection/url';
import CreateCatalog from './Post/createCatalog';
import DisplayCatalog from './Display/displayCatalog';

class KnowledgeCatalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            catalogs: [],
            vakue: ""
        }
    };

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
            });
    };

    render() {
        let catalogs = this.state.catalogs.map(catalog => 
            <DisplayCatalog catalog={catalog} key={catalog._id}/>
           );
        return (
            <div className="background">
                <h1>KnowledgeCatalog</h1>
                {catalogs}
                <CreateCatalog />
            </div>
        )
    }
}

export default KnowledgeCatalog
import React from 'react'
import './style.css'
import { buildUrl } from '../connection/url'
import {Button} from 'reactstrap'
import CreateEducation from './Post/createEducation'

class Education extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            educations: []
        }
    };

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
            });
    };

    render() {
        let educations = this.state.educations.map(education => {
            return(
             <div key={education._id}>
                 <ul>
                     <label>School</label>
                    <li>{education.school}</li>
                    <label>Graduated</label>
                    <li>{education.year_graduated}</li>
                 </ul>
                 
             </div>
            );
           });
        return (
            <div className="background">
                <h1>Education</h1>
                {educations}
                <Button type="button" class="btn btn-primary" data-toggle="modal" >Open modal</Button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">Recipient:</label>
                                <input type="text" class="form-control" id="recipient-name" />
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send message</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <CreateEducation />
            </div>
        )
    }
}

export default Education
import React from 'react';
import '../style.css';
import {buildUrl} from '../../connection/url';
import {Button, Input, Col} from 'reactstrap';

class updateWork extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            work: props.editWork,
        }
        this.onChangeWork = this.onChangeWork.bind(this);
    };

    static getDerivedStateFromProps(props, state) {
        return {work: props.editWork}
    };

    onChangeWork(e) {
        this.setState({
          work: e.target.value
        });
      }

    handleSubmit() {
        let url = buildUrl("work/_id"); 
        fetch(url,{
            method: "PUT",
            body: JSON.stringify({
                company: "",
                title: "",
                description: "",
                start_date: "",
                end_date: ""
            }),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                work: data
        })
        })
        .catch(err => {
            console.log('error', err)
        
        }); 
    };

    

    render() {

        return(
            <>
                <form style={{paddingLeft: 23}} onSubmit={this.handleSubmit}>
                    <Col sm={4}>
                        <label>Company</label>
                        <Input type="text" defaultValue={this.state.work.company} onChange={this.onChangeWork} />
                    </Col>
                    <Col sm={4}>
                        <label>Title</label>
                        <Input type="text" defaultValue={this.state.work.title} onChange={this.onChangeWork} />
                    </Col>
                    <Col sm={4}>
                        <label>Description</label>
                        <Input type="textarea" defaultValue={this.state.work.description} onChange={this.onChangeWork} />
                    </Col>
                    <Col sm={4}>
                        <label>Start Date</label>
                        <Input type="text" defaultValue={this.state.work.start_date} onChange={this.onChangeWork} />
                    </Col>
                    <Col sm={4}>
                        <label>End Date</label>
                        <Input type="text" defaultValue={this.state.work.end_date} onChange={this.onChangeWork} />
                    </Col>
                    <br />
                    <Col>
                        <Button color="primary" size="sm" onClick={ () => this.handleSubmit()}>Save</Button>
                    </Col>
                </form>
                <div style={{paddingLeft: 12}}>
                    <Col>
                        <Button color="link" size="sm" onClick={ () => this.props.returnClickHandler()}>Back to Home</Button>
                    </Col>
                </div>
                
            </>
        )
    }

}

export default updateWork
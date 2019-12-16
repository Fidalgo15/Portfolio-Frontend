import React from 'react';
import '../style.css';
import {buildUrl} from '../../connection/url';
import {Button, Input, Col} from 'reactstrap';

class updateSkill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            skill: props.editSkill,
        }
        this.onChangeSkill = this.onChangeSkill.bind(this);
    };

    static getDerivedStateFromProps(props, state) {
        return {skill: props.editSkill}
    };

    onChangeSkill(e) {
        this.setState({
          skill: e.target.value
        });
      }

    componentDidMount() {
        let url = buildUrl("skill/_id"); 
        fetch(url,{
            method: "PUT",
            body: JSON.stringify({
                name: "",
                rank: ""
            }),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                skill: data
        })
        })
        .catch(err => {
            console.log('error', err)
        
        }); 
    };

    

    render() {

        return(
            <div>
                <div style={{paddingLeft: 23}}>
                <Col sm={4}>
                    <label>Name</label>
                    <Input type="text" defaultValue={this.state.skill.name} onChange={this.onChangeSkill} />
                </Col>
                <Col sm={4}>
                    <label>Rank</label>
                    <Input type="text" defaultValue={this.state.skill.rank} onChange={this.onChangeSkill} />
                </Col>
                <br />
                <Col>
                    <Button color="primary" size="sm" >Save</Button>
                </Col>
                </div>
                <div style={{paddingLeft: 12}}>
                <Col>
                    <Button color="link" size="sm" onClick={ () => this.props.returnClickHandler()}>Back to Home</Button>
                </Col>
                </div>
            </div>
        )
    }

}

export default updateSkill
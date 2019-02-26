import React from 'react'
import { CompetenceGroup } from './types';

class AddCompetenceGroupForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            competenceGroupName: '',
            competenceGroupDescription: ''
        }
    }

    onNameChange = value => this.setState({competenceGroupName: value});

    onDescriptionChange = value => this.setState({competenceGroupDescription: value});

    render() {
        const {
            onCreateCompetenceGroup
        } = this.props;

        return (
            <form method="POST" action="#" onSubmit={event => {
                event.preventDefault();
                const {competenceGroupName, competenceGroupDescription} = this.state;
                onCreateCompetenceGroup(new CompetenceGroup({name: competenceGroupName, description: competenceGroupDescription}));
            }}>
                <input type="text" className="form-control" 
                    value={this.state.competenceGroupName} 
                    onChange={event => this.onNameChange(event.target.value)} 
                    placeholder="Input competence group name" /> 
                <textarea className="form-control"
                    value={this.state.competenceGroupDescription}  
                    onChange={event => this.onDescriptionChange(event.target.value)} 
                    placeholder="Input competence group description" /> 
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default AddCompetenceGroupForm;
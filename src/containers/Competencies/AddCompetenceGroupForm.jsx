import React from 'react'

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
            onCompetenceGroupAdd
        } = this.props;

        return (
            <form method="POST" action="#" onSubmit={event => {
                event.preventDefault();
                const {competenceGroupName, competenceGroupDescription} = this.state;
                onCompetenceGroupAdd(competenceGroupName, competenceGroupDescription);
            }}>
                <input type="text" className="form-control" 
                    value={this.state.competenceGroupName} 
                    onChange={this.onNameChange} 
                    placeholder="Input competence group name" /> 
                <textarea className="form-control"
                    value={this.state.competenceGroupDescription}  
                    onChange={this.onDescriptionChange} 
                    placeholder="Input competence group description" /> 
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default AddCompetenceGroupForm;
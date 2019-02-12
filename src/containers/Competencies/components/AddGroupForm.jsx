import React from 'react'

const isFormFilledCorrectly = state => state.groupName != ''; 
const validateGroupName = groupName => {
    return 'validity error code';
};

class AddGroupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            groupName: '',
            description: ''
        }
    }

    onGroupNameChange = (event) => {
        this.setState({
            groupName: event.target.value
        });
    }
    onGroupDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();

        if(!isFormFilledCorrectly(this.state))
            return;

        this.props.onGroupAdd(this.state.groupName, this.state.description);
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Input indicator group name" onChange={this.onGroupNameChange} /> <br/>
                <input type="text" placeholder="Input indicator group description" onChange={this.onGroupDescriptionChange} /> <br/>
                <button type="button" onClick={this.props.onClose}>Отмена</button>
                <button type="submit">Сохранить</button>
            </form>
        );
    }
}

export default AddGroupForm;
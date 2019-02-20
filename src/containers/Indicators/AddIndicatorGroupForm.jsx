import React from 'react'

class AddIndicatorGroupForm extends React.Component{
    constructor(props) {
        super(props);

        this.groupName = '';
        this.groupDescription = '';
    }
    
    isValid = () => this.groupName !== '' && this.groupDescription !== '';

    onSetGroupName = name => this.groupName = name;

    onSetGroupDescription = description => this.groupDescription = description;

    render() {
        return (
            <form method="POST" action="#" onSubmit={event => {
                event.preventDefault();
                if(!this.isValid()) return;
                this.props.onSubmit(this.groupName, this.groupDescription);
            }}>
                <input className="form-control" type="text" placeholder="Indicator group name" onChange={event => this.onSetGroupName(event.target.value)}></input>
                <br />
                <input className="form-control" type="text" placeholder="Indicator group description" onChange={event => this.onSetGroupDescription(event.target.value)}></input>
                <br />
                <button type="button">Cancel</button>
                <button type="submit">Save</button>
            </form>
        );
    }
};

export default AddIndicatorGroupForm;
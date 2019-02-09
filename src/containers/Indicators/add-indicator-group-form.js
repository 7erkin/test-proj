import React from 'react'

class AddIndicatorGroupForm extends React.Component {
    constructor(props){
        super(props);
    }

    onGroupSelected = (event) => {};
    render() {
        const indicatorGroups = this.props.indicatorGroups;
        return (
            <form action="">
                <input type="text" placeholder="Input group name"></input> 
                <b>or</b>
                <select onChange={this.onGroupSelected}>
                    <option>Choose indicator group</option>
                    {indicatorGroups.map(group => <option>{group.name}</option>)}
                </select> <br />
                <input type="text" placeholder="Input group description"></input>
                <ul>
                    <button>Cancel</button>
                    <button>Delete</button>
                    <button>Save</button>
                </ul>
            </form>
        );
    }
}

export default AddIndicatorGroupForm;
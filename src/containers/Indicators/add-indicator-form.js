import React from 'react'

class AddIndicatorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indicatorName: '',
            indicatorGroupId: -1
        }
    }

    onChangeIndicatorName = (event) => {
        console.log(event.target.value);
        this.setState({
            indicatorName: event.target.value
        })
    }
    onSubmitDelete = (event) => {
        event.preventDefault();
        // if such indicatorName exists else inform user about failure
        // send AJAX 
        // on status 200 dispatch action for store
        const {indicatorName, indicatorGroupId} = this.state;
        this.props.callback.deleteIndicator(indicatorName, indicatorGroupId);
    }
    onSubmitSave = (event) => {
        event.preventDefault();
        const {indicatorName, indicatorGroupId} = this.state;
        this.props.callback.addIndicator(indicatorName, indicatorGroupId);
    }
    onSelectIndiatorGroup = (event) => {
        this.setState({
            ...this.state,
            indicatorGroupId: event.target.value
        })
    }

    render() {
       const indicatorGroups = this.props.indicatorGroups;
        return (
            <form>
                <input type="text" placeholder="Input indicator name" onChange={this.onChangeIndicatorName}></input>
                <select value={this.state.indicatorGroupId} onChange={this.onSelectIndiatorGroup}>
                    <option value={-1}>Choose indicator group</option>
                    {indicatorGroups.map(group => <option value={group.id}>{group.name}</option>)}
                </select>
                <ul>
                    <button type="button">Cancel</button>
                    <button type="submit" className="submit-delete" onClick={this.onSubmitDelete}>Delete</button>
                    <button type="submit" className="submit-save" onClick={this.onSubmitSave}>Save</button>
                </ul>
            </form>
        );
    }
}

export default AddIndicatorForm;
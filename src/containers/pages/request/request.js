import React, {Component} from 'react'
import RequestPageComponent from '../../../components/request-page';

class RequestPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    onCompanyChanged = () => {}

    onSubdivisionChanged = () => {}

    onPositionChanged = () => {}

    onSubmit = () => {}

    render() {
        return (
            <RequestPageComponent 
                selectCompany={{
                    onChanged: this.onCompanyChanged,
                    values: [{id: 1, name: 'A-Company'}, {id: 2, name: 'B-Company'}, {id: 3, name: 'C-Company'}]
                }}
                selectSubdivision={{
                    onChanged: this.onSubdivisionChanged,
                    values: [{id: 1, name: 'A-Subdivision'}, {id: 2, name: 'B-Subdivision'}, {id: 3, name: 'C-Subdivision'}]
                }}
                selectPosition={{
                    onChanged: this.onPositionChanged,
                    values: [{id: 1, name: 'A-Position'}, {id: 2, name: 'B-Position'}, {id: 3, name: 'C-Position'}]
                }}
                onSubmit={this.onSubmit}/>
        );
    }
}

export default RequestPage;
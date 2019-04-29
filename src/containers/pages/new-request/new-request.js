import React, {Component} from 'react'
import NewRequestPageComponent from '../../../components/pages/new-request';

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
            <NewRequestPageComponent 
                companySelect={{
                    onChange: this.onCompanyChanged,
                    values: [{id: 1, name: 'A-Company'}, {id: 2, name: 'B-Company'}, {id: 3, name: 'C-Company'}]
                }}
                subdivisionSelect={{
                    onChange: this.onSubdivisionChanged,
                    values: [{id: 1, name: 'A-Subdivision'}, {id: 2, name: 'B-Subdivision'}, {id: 3, name: 'C-Subdivision'}]
                }}
                positionSelect={{
                    onChange: this.onPositionChanged,
                    values: [{id: 1, name: 'A-Position'}, {id: 2, name: 'B-Position'}, {id: 3, name: 'C-Position'}]
                }}
                onSubmit={this.onSubmit}
                onCancel={() => {}}/>
        );
    }
}

export default RequestPage;
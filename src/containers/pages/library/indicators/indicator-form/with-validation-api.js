import React, { Component } from 'react'

const withValidationApi = IndicatorForm => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        validateIndicatorName = async (name) => {
            const { 
                staffixService
            } = this.props;

            if(name === '') 
                return 'Название индикатора не может быть пустым';

            if(await staffixService.isIndicatorWithNameExist(name)) 
                return 'Индикатор с таким названием уже существует';

            return '';
        }

        validateIndicatorGroupId = async (groupId) => {
            return groupId === '' ? 'Индикатор должен принадлежать определенной группе' : '';
        }

        render() {
            return (
                <IndicatorForm {...this.props} 
                    validateIndicatorName={this.validateIndicatorName} 
                    validateIndicatorGroupId={this.validateIndicatorGroupId}/>
            );
        }
    }
}

export default withValidationApi;
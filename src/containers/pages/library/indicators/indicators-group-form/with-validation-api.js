import React, { Component } from 'react'

const withValidationApi = IndicatorsGroupForm => {
    return class extends Component {
        constructor(props){
            super(props);
        }

        validateIndicatorsGroupName = async name => {
            const {
                staffixService 
            } = this.props;

            if(!name.length) return 'Название группы индикаторов не может быть пустым';

            return await staffixService.isIndicatorsGroupWithNameExist(name) ? 'Группа индикаторов с таким названием уже существует' : '';
        }

        validateIndicatorsGroupDescription = async description => {
            return !description.length ? 'Описание группы индикаторов не может быть пустым' : '';
        }

        render() {
            return (
                <IndicatorsGroupForm 
                    {...this.props} 
                    validateIndicatorsGroupName={this.validateIndicatorsGroupName}
                    validateIndicatorsGroupDescription={this.validateIndicatorsGroupDescription} />
            );
        }
    }
}

export default withValidationApi;
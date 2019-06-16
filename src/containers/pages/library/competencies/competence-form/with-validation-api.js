import React, { Component } from 'react'

const withValidationApi = WrappedCompetenceForm => {
    return class extends Component {
        constructor(props){
            super(props)
        }

        validateCompetenceName = async name => {
            const {
                staffixService
            } = this.props;

            if(!name.length) return 'Название компетенции не может быть пустым';

            return await staffixService.isCompetenceWithNameExist(name) ? 'Компетенция с указанным именем уже существует' : ''
        }

        validateCompetenceDescription = async description => {
            return !description.length ? 'Описание компетенции не может быть пустым' : '';
        }

        validateCompetenceGroupId = async groupId => {
            return groupId == '' ? 'Компетенция должна принадлежать определенной группе' : '';
        }

        render() {
            return (
                <WrappedCompetenceForm {...this.props} 
                    validateCompetenceName={this.validateCompetenceName}
                    validateCompetenceDescription={this.validateCompetenceDescription}
                    validateCompetenceGroupId={this.validateCompetenceGroupId} />
            );
        }
    }
}

export default withValidationApi;
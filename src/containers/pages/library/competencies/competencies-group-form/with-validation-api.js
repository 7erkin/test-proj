import React, { Component } from 'react'

const withValidationApi = CompetenciesGroupForm => {
    return class extends Component {
        constructor(props) {
            super(props)
        }

        validateCompetenciesGroupName = async name => {
            const {
                staffixService
            } = this.props;

            if(!name.length) return 'Название группы не может быть пустым';

            return await staffixService.isCompetenciesGroupWithNameExist(name) ? 'Группа с указанным названием уже существует' : ''
        }

        validateCompetenciesGroupDescription = async description => !description.length ? 'Описание группы не может быть пустым' : ''

        render() {
            return (
                <CompetenciesGroupForm {...this.props} 
                    validateCompetenciesGroupDescription={this.validateCompetenciesGroupDescription}
                    validateCompetenciesGroupName={this.validateCompetenciesGroupName} />
            );
        }
    }
}

export default withValidationApi;
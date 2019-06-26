import React, { Component } from 'react'

const withValidationApi = AddCompanyForm => {
    return class extends Component {
        constructor(props) {
            super(props)
        }

        validateCompanyName = async (name) => {
            const { 
                staffixService
            } = this.props;

            if(name === '') 
                return 'Название компании не может быть пустым';

            if(await staffixService.isCompanyWithNameExist(name)) 
                return 'Компания с таким названием уже существует';

            return '';
        }

        validateCompanyAddress = async (address) => {
            if(address === '') 
                return 'Адрес компании не может быть пустым';

            return '';
        }

        render() {
            return (
                <AddCompanyForm {...this.props} 
                    validateCompanyName={this.validateCompanyName} 
                    validateCompanyAddress={this.validateCompanyAddress} />
            )
        }
    }
}

export default withValidationApi
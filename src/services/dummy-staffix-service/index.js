import mockRequests from '../../fixtures/requests'
import mockCompanies from '../../fixtures/companies'

const TIME_OUT = 100;

class DummyStaffixService {
    constructor() {
        this._requests = mockRequests;
        this._companies = mockCompanies;
    }

    getRequests() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._requests);
            }, TIME_OUT);
        });
    }
    
    getCompanies() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._companies);
            }, TIME_OUT)
        })
    }
}

export default DummyStaffixService;
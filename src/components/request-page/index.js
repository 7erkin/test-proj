import React from 'react'

import Breadcrumbs from '@material-ui/lab/Breadcrumbs'

import SelectCompany from './select-company'
import SelectSubdivision from './select-subdivision'
import SelectPosition from './select-position'



import './style.css'

const RequestPageComponent = ({
    selectCompany,
    selectSubdivision,
    selectPosition,
    onSubmit
}) => {
    return (
        <section className='request-details'>
            <h2>Новая заявка</h2>
            <Breadcrumbs>
                <a href="#">Список заявок</a>
                <a href="#">Новая заявка</a>
            </Breadcrumbs>
            <form className="vertical-wrapper" onSubmit={evt => {evt.preventDefault(); onSubmit();}}>
                <div className="horizontal-wrapper form-part">
                    <label>Дата заявки</label>
                    <input type="date" className="form-control" placeholder="Имя получателя"></input>
                </div>
                <div className="horizontal-wrapper form-part">
                    <label>Компания</label>
                    <select value='' className="browser-default custom-select">
                    <option value=''>Выберите компанию</option>
                    {
                        selectCompany.values.map(el => <option value={el.id}>{el.name}</option>)
                    }
                    </select>
                </div>
                <div className="horizontal-wrapper form-part">
                    <label>Подразделение/отдел</label>
                    <select value='' className="browser-default custom-select">
                    <option value=''>Выберите подразделение</option>
                    {
                        selectSubdivision.values.map(el => <option value={el.id}>{el.name}</option>)
                    }
                    </select>
                </div>
                <div className="horizontal-wrapper form-part">
                    <label>Должность</label>
                    <select value='' className="browser-default custom-select">
                    <option value=''>Выберите должность</option>
                    {
                        selectPosition.values.map(el => <option value={el.id}>{el.name}</option>)
                    }
                    </select>
                </div>
                <div className="horizontal-wrapper form-part">
                    <label>Описание вакансии</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="horizontal-wrapper form-part">
                    <label>Профиль должности</label>
                    <input type="file" className="form-control"></input>
                </div>
                <div className="horizontal-wrapper form-actions">
                    <button className="btn btn-success">Сохранить</button>
                    <button className="btn btn-danger">Отменить</button>
                </div>
            </form>
        </section>
    );
}

export default RequestPageComponent;
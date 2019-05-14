import React from 'react'

import './style.css'

const NewCompanyPageComponent = ({
    onSubmit, 
    onCancel,
    inputCompanyName,
    inputCompanyAddress,
    inputCompanySubdivisions
}) => {
    const {
        subdivisions,
        onAddOneMoreSubdivision
    } = inputCompanySubdivisions

    return (
        <section className='new-company'>
            <h2>Новая компания</h2>
            <form onSubmit={evt => {evt.preventDefault(); onSubmit()}} className='new-company-details'>
                <div className="line date">
                    <label>Название организации</label>
                    <input value={inputCompanyName.value}  onChange={evt => inputCompanyName.onChange(evt.target.value)} type="text" className='form-control'/>
                </div>
                <div className="line date">
                    <label>Адрес организации</label>
                    <input value={inputCompanyAddress.value}  onChange={evt => inputCompanyAddress.onChange(evt.target.value)} type="text" className='form-control'/>
                </div>
                <div className="line date">
                    <label>Подразделение/отдел</label>
                    {
                        subdivisions.map(el => <input value={el.name} type="text" className="form-control" />)
                    }
                    <input value={inputCompanySubdivisions.value} onChange={evt => inputCompanySubdivisions.onChange(evt.target.value)} type="text" className='form-control' />
                    <button onClick={onAddOneMoreSubdivision} type="button">Добавить ещё</button>
                </div>
                <button type="submit">Сохранить</button>
                <button onClick={onCancel} type="button">Отменить</button>
            </form>
        </section>
    );
}

export default NewCompanyPageComponent;
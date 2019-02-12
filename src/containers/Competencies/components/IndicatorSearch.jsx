import React from 'react'

const IndicatorSearch = props => {
    return <input 
        className="form-control"
        type="search" 
        placeholder="Введите название индикатора либо часть названия" 
        onChange={event => {
            const currentValue = event.target.value;
            props.onSearchChange(currentValue);
        }} />;
};

export default IndicatorSearch;
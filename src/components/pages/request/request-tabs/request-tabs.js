import React from 'react'

const tabs = [
    'Основная информация', 
    'Профиль компетенции', 
    'Кандидаты', 
    'Сценарий интервью'
];

const RequestTabs = ({

}) => {
    return (
        <ul className="tabs-request">
            {
                tabs.map((el, index) => <li key={index}>{el}</li>)
            }
        </ul>
    );
}

export default RequestTabs;
import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

export default function MainNavigation() {
    // one can automatize render li
    return (
        <nav>
            <ul className="navigation-list">
                <li className="navigation-item" key={0}><Link to="/candidates">Кандидаты1</Link></li>
                <li className="navigation-item" key={1}><Link to="/polls">Интервью</Link></li>
                <li className="navigation-item" key={10}><Link to="/companies">Компании</Link></li>
                <li className="navigation-item" key={2}><Link to="/models">Должности</Link></li>
                <li className="navigation-item" key={3}><Link to="/competencies">Компетенции</Link></li>
                <li className="navigation-item" key={4}><Link to="/indicators">Индикаторы</Link></li>
                <li className="navigation-item" key={5}><Link to="/settings">Настройки</Link></li>
            </ul>
        </nav>
    );
}
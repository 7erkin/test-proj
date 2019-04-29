import React from 'react'

import Table from '../../../material-ui/table'
import withTableColumns from '../../../../hoc/with-table-columns'

const columns = [
    {
        width: 200,
        label: 'Номер заявки',
        dataKey: 'number',
        numeric: true
      },
      {
        width: 120,
        label: 'Дата заявки',
        dataKey: 'date'
      },
      {
        width: 120,
        label: 'Компания',
        dataKey: 'company',
        flexGrow: 1
      },
      {
        width: 120,
        label: 'Вакансия',
        dataKey: 'position',
        flexGrow: 1
      },
      {
        width: 120,
        label: 'Подразделение',
        dataKey: 'subdivision',
        flexGrow: 1
      },
      {
        width: 120,
        label: 'Кандидаты',
        dataKey: 'candidates',
        numeric: true
      },
      {
        width: 120,
        label: 'Согласование',
        dataKey: 'agreements'
      }
];

export default withTableColumns(columns)(Table);
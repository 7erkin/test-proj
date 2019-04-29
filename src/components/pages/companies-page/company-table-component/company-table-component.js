import Table from '../../../material-ui/table'

import withTableColumns from '../../../../hoc/with-table-columns'

const columns = [
    {
        width: 200,
        label: 'Компания',
        dataKey: 'name',
        numeric: true,
        flexGrow: 0.5
      },
      {
        width: 120,
        label: 'Количество заявок',
        dataKey: 'requests',
        flexGrow: 1
      }
];

export default withTableColumns(columns)(Table);
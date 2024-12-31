export const TRANSACTIONS = [
  {
    key: '1',
    operation: 'Покупка',
    currency_1: 'EUR',
    sum_1: '400',
    currency_2: 'UAH',
    sum_2: '18000',
    course: '45',
    time: '1735671688277',
    client: '3808787789',
  },
  {
    key: '2',
    operation: 'Покупка',
    currency_1: 'EUR',
    sum_1: '200',
    currency_2: 'UAH',
    sum_2: '8800',
    course: '44',
    time: '1735671688277',
    client: '3808787788',
  },
  {
    key: '3',
    operation: 'Покупка',
    currency_1: 'USD',
    sum_1: '1000',
    currency_2: 'UAH',
    sum_2: '42000',
    course: '42',
    time: '1735671688277',
    client: '3808787787',
  },
  {
    key: '4',
    operation: 'Продажа',
    currency_1: 'EUR',
    sum_1: '18000',
    currency_2: 'UAH',
    sum_2: '400',
    course: '45',
    time: '1735671688277',
    client: '3808787786',
  },
];

export const TRANSACTIONS_TABLE_COLUMNS = [
  {
    title: 'Операция',
    dataIndex: 'operation',
    key: 'operation',
  },
  {
    title: 'Валюта 1',
    dataIndex: 'currency_1',
    key: 'currency_1',
  },
  {
    title: 'Сумма 1',
    dataIndex: 'sum_1',
    key: 'sum_1',
  },
  {
    title: 'Валюта 2',
    dataIndex: 'currency_2',
    key: 'currency_2',
  },
  {
    title: 'Сумма 2',
    dataIndex: 'sum_2',
    key: 'sum_2',
  },
  {
    title: 'Курс',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'Время',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Клиент',
    dataIndex: 'client',
    key: 'client',
  },
];

import { Table, Button, Modal } from 'antd';
import { useContext, useState } from 'react';
import { TRANSACTIONS } from '@/utils';
import TransactionsAdd from '@/components/TransactionsAdd';
import { Context } from '@/context';

export function Transactions() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(TRANSACTIONS);
  const { role } = useContext(Context);

  function showModal() {
    setModal(true);
  }

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-between gap-5">
        <Button onClick={showModal}>Добавить</Button>
        <div>
          Роль:{' '}
          <span className="first-letter:uppercase">{role || 'не выбрана'}</span>
        </div>
      </div>
      <Table
        className="mt-4"
        dataSource={data}
        rootClassName="overflow-auto max-w-full"
        pagination={{ position: ['bottomCenter'], defaultPageSize: 10 }}
      >
        <Table.Column title="Операция" dataIndex="operation" key="operation" />
        <Table.Column
          title="Валюта 1"
          dataIndex="currency_1"
          key="currency_1"
        />
        <Table.Column title="Сумма 1" dataIndex="sum_1" key="sum_1" />
        <Table.Column
          title="Валюта 2"
          dataIndex="currency_2"
          key="currency_2"
        />
        <Table.Column title="Сумма 1" dataIndex="sum_2" key="sum_2" />
        <Table.Column title="Курс" dataIndex="course" key="course" />
        <Table.Column
          title="Время"
          dataIndex="time"
          key="time"
          render={(value) => <>{new Date(Number(value)).toLocaleString()}</>}
        />
        <Table.Column title="Клиент" dataIndex="client" key="client" />
      </Table>
      <Modal
        title="Добавить транзакцию"
        wrapClassName="!overflow-hidden"
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <TransactionsAdd
          className="mt-4"
          setModal={setModal}
          setData={setData}
        />
      </Modal>
    </div>
  );
}

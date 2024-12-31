import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { TRANSACTIONS } from '@/utils';

interface Props {
  className: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<typeof TRANSACTIONS>>;
}

const TransactionsAdd: React.FC<Props> = ({ className, setModal, setData }) => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  const [form] = Form.useForm();
  const opts = {
    operation: [
      { label: 'Покупка', value: 'Покупка' },
      { label: 'Продажа', value: 'Продажа' },
    ],
    currency: [
      { label: 'USD', value: 'USD' },
      { label: 'EUR', value: 'EUR' },
      { label: 'UAH', value: 'UAH' },
    ],
  };

  function onSubmit(values: any) {
    const data = {
      key: Date.now(),
      time: Date.now(),
      ...values,
    };
    setData((v) => v.concat([data]));
    form.resetFields();
    setModal(false);
  }

  return (
    <Form
      {...formItemLayout}
      className={className}
      form={form}
      variant="filled"
      style={{ maxWidth: 600 }}
      onFinish={onSubmit}
    >
      <Form.Item
        label="Операция"
        name="operation"
        rules={[{ required: true, message: 'Required' }]}
      >
        <Select options={opts.operation} />
      </Form.Item>

      <Form.Item
        label="Валюта 1"
        name="currency_1"
        rules={[{ required: true, message: 'Required' }]}
      >
        <Select options={opts.currency} />
      </Form.Item>

      <Form.Item
        label="Сумма 1"
        name="sum_1"
        rules={[{ required: true, message: 'Required' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Валюта 2"
        name="currency_2"
        rules={[{ required: true, message: 'Required' }]}
      >
        <Select options={opts.currency} />
      </Form.Item>

      <Form.Item
        label="Сумма 2"
        name="sum_2"
        rules={[{ required: true, message: 'Required' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Курс"
        name="course"
        rules={[{ required: true, message: 'Required' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Клиент"
        name="client"
        rules={[{ required: true, message: 'Required' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item className="flex justify-center">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TransactionsAdd;

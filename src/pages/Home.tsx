import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context';

export function Home() {
  const navigate = useNavigate();
  const { setRole } = useContext(Context);

  function navigateWithCurrentRole(role: string) {
    setRole(role);
    navigate('/transactions');
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="mt-4 text-2xl">Выберите роль</h1>
      <div>
        <Button
          className="text-xl"
          type="primary"
          onClick={() => navigateWithCurrentRole('cashier')}
        >
          Кассир
        </Button>
      </div>
      <div>
        <Button
          className="text-xl"
          type="primary"
          onClick={() => navigateWithCurrentRole('admin')}
        >
          Админ
        </Button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '@/context';
import { Home, Transactions, Cash, Clients, Currency, NotFound } from '@/pages';
import BaseLayout from '@/layouts/BaseLayout';

function App() {
  const [role, setRole] = useState<string | null>(null);

  return (
    <Context.Provider value={{ role: role, setRole: setRole }}>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BaseLayout>
    </Context.Provider>
  );
}

export default App;

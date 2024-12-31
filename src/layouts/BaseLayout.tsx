import type React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  const footerLinks = [
    { to: '/transactions', name: 'Транзакция' },
    { to: '/currency', name: 'Валюта' },
    { to: '/cash', name: 'Касса' },
    { to: '/clients', name: 'Клиенты' },
  ];

  return (
    <div className="flex min-h-full flex-col">
      <nav className="border-b p-5">
        <Link className="hover:text-blue-700" to="/">
          Home
        </Link>
      </nav>
      <main className="flex-auto">{children}</main>
      <nav className="flex justify-around gap-4 border-t p-5">
        {footerLinks.map((item, index) => (
          <Link className="hover:text-blue-700" key={index} to={item.to}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default BaseLayout;

import React from 'react';

import './styles.scss';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

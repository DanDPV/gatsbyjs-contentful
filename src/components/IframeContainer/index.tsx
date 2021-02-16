import React from 'react';

import './styles.scss';

type props = {
  children: React.ReactNode;
};

const IframeContainer = ({ children }: props) => {
  return <span className="iframecontainer">{children}</span>;
};

export default IframeContainer;

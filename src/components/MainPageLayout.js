import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box-Office"
        subtitle="Are you looking for a Movie or An Actor?"
      />

      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;

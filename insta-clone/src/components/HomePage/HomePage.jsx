import React, { useState } from 'react';
import Menu from './MenuBar/Menu';
import Profile from './Profile/Profile';

const HomePage = () => {
  const [tab, setTab] = useState("home");

  const centerContent = {
    profile: <Profile onSelectTab={setTab} />,
    home: <p>home</p>,
  };

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <Menu activeTab={tab} onSelectTab={setTab} />
          </div>
          <div className='col-8'>
            {centerContent[tab] || <p>page not found</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

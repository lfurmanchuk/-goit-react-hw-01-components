import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

export * from './components/Profile/Profile';
export * from './components/Statistics/Statistics';
// export * from './components/FriendList/FriendList';
// export * from './components/FriendListItem/FriendListItem';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

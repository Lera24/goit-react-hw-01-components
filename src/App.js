import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SocialNetwork from './components/SocialNetwork/SocialNetwork';
import user from './components/SocialNetwork/user.json';

import Statistical from './components/Statistics/Statistical';
import statistical_data from './components/Statistics/statistical_data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <SocialNetwork
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical title={statistical_data.title} stats={statistical_data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

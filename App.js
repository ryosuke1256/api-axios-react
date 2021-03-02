import React, { useState } from 'react';
import axios from 'axios';

let i = 0;

const App = () => {
  const [userName, setUserName] = useState('');

  const chgUserName = async () => {
    try {
      const jsonData = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (i >= 9) {
        setUserName('※もうありません');
      } else {
        setUserName(jsonData.data[i].name);
        i++;
      }
    } catch (error) {
      console.log('errorだよ！');
    }
  };
  return (
    <>
      <button onClick={() => chgUserName()}>新しいユーザを取得してみよう！</button>
      <div>{userName}</div>
    </>
  );
};

export default App;

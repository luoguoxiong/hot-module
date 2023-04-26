import React from 'react';
import { Button } from 'hel-antd';

export default function App() {
  return (
    <div className="App">
      <h1>Hello hel-micro Remote Comp</h1>
      <h2>here add your first remote comp</h2>
      {/* add som comp here */}
      <Button danger>remote antd button</Button>
      <br />
      <a
        rel="noreferrer"
        href="https://github.com/hel-eco/hel-antd"
        target="_blank"
      >
        hel-antd git
      </a>
    </div>
  );
}

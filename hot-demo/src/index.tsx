import { preFetchLib, bindReactRuntime } from 'hel-micro';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactIs from 'react-is';

bindReactRuntime({ React, ReactDOM, ReactIs });

async function main() {
  // 预加载远程模块 ，例如 hel-antd
  await preFetchLib('hel-antd', { enableDiskCache: true });
  await import('./loadApp');
}

main().catch(console.error);

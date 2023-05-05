import { preFetchLib, bindReactRuntime } from 'hel-micro';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactIs from 'react-is';
import { loadResource } from 'src/utils';
bindReactRuntime({ React, ReactDOM, ReactIs });

async function main() {
  // 预加载远程模块 ，例如 hel-antd
  await loadResource({
    resourceUrl: 'https://unpkg.com/hel-antd@1.1.0/hel_dist/static/js/main.45ae8f5f.js',
    resourceType: 'js',
  });
  // await preFetchLib('hel-antd', { enableDiskCache: true });
  // await import('./loadApp');
}

main().catch(console.error);

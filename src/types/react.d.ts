import React from 'react';

declare module 'react' {
  interface Component<P = {}, S = {}> {
    state: S;
    props: P;
  }
}

declare module 'react/jsx-runtime' {
  export default any;
} 
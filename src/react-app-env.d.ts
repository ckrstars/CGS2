/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace React {
  interface StrictMode {
    children: React.ReactNode;
  }
}

declare module "*.jsx" {
  const component: any;
  export default component;
}

declare module "react" {
  export = React;
  export as namespace React;
}

declare module "react-dom/client" {
  export function createRoot(container: Element | DocumentFragment): {
    render(element: React.ReactNode): void;
  };
} 
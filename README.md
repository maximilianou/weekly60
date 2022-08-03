# weekly60

React Typescript Nextjs web3 ipfs decentralized distributed linux onboarding learning sample

------

```
npm i react-icons
```

<https://react-icons.github.io/react-icons/>


------

Markdown Editor in React

<https://uiw.gitee.io/react-md-editor/#support-nextjs>

```
npm install next-remove-imports
npm install @uiw/react-md-editor@v3.6.0
```

```tsx
// next.config.js
const removeImports = require('next-remove-imports')();
module.exports = removeImports({});
```

```tsx
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const MDE = dynamic(
  () => import('@uiw/react-md-editor'),
  { ssr: false }
);
const MDEditor = () => {
  const [value, setValue] = useState<string | undefined>('*Edit content Here!!*');
  return (
    <div data-color-mode="dark" >
      <MDE value={value} onChange={setValue}  />
    </div>
  );
}
export default MDEditor;
```

------
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
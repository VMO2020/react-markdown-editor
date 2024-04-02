# react-markdown-editor

## RUN

Terminal: `yarn dev`

## Start

1. Open project folder: markdown-editor-react
2. Terminal: `yarn create vite`
3. Terminal: `yarn`
4. Terminal: `yarn dev`
5. Update files: `main.jsx & App.jsx`
6. Change (src): `index.css to styles.css`
7. Terminal: `yarn add react-markdown-editor-lite` & `yarn add markdown-it`

```js
import './styles.css';
```

## Github

1. Create Public Repository: `react-markdown-editor`
2. Terminal: `git init`
3. Terminal: `git add .`
4. Terminal: `git commit -m "first commit"`
5. Terminal: `git branch -M main`
6. Terminal: `git remote add origin https://github.com/VMO2020/react-markdown-editor.git`
7. Terminal: `git push -u origin main`

## Deploy Netlfy

1. Go to `https://app.netlify.com/` All sites
2. Add new site => Import an existing project
3. Connect to Git provider: GitHub
4. Search: `react-markdown-editor`
5. Owner: `VMOG`
6. Branch to deply: `main`
7. Base directory: ``
8. Build command: `yarn build`
9. Publish directory: `build`
10. Environment Add: `CI`=`false`
11. Deploy site
12. Site settings: Change url name: `https://react-markdow-editor.netlify.app/`

## Update

1. Terminal: `git add .`
2. Terminal: `git commit -m "FEAT:"`
3. Terminal: `git push`

## Preview Markdown

```js
import MdEditor from 'react-markdown-editor-lite';

export default function App() {
  return (
    <div className="container">
      <MDEditor.Markdown source="Hello Markdown!" />
    </div>
  );
}
```

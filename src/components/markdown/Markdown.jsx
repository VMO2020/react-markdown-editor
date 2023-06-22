import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

// import styles
import 'react-markdown-editor-lite/lib/index.css';

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// eslint-disable-next-line react/prop-types
export const Markdown = () => {
	function handleEditorChange({ html, text }) {
		console.log('handleEditorChange', html, text);
	}
	return (
		<MdEditor
			style={{ height: '500px' }}
			renderHTML={(value) => mdParser.render(value)}
			onChange={handleEditorChange}
		/>
	);
};

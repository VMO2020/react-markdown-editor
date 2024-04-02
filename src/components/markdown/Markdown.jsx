import { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

// import styles
import 'react-markdown-editor-lite/lib/index.css';
import './Markdown.css';

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// eslint-disable-next-line react/prop-types
export const Markdown = () => {
	const [jsonString, setJsonString] = useState('');
	const [words, setWords] = useState(0);
	const [copied, setCopied] = useState('');

	const copiedAlert = (text) => {
		setCopied(text);
		setTimeout(function () {
			setCopied('');
		}, 2000);
	};

	const handleCopyToClipboard = () => {
		navigator.clipboard
			.writeText(jsonString)
			.then(() => {
				// alert('JSON content copied to clipboard');
				copiedAlert('JSON content copied to clipboard');
			})
			.catch((error) => {
				alert('Failed to copy JSON content to clipboard:', error);
			});
	};

	const countWords = (text) => {
		const words = text.trim().split(/\s+/);
		return words.length;
	};

	function handleEditorChange({ html, text }) {
		// Convert Markdown to JSON
		const updatedForm = {
			content: text,
		};

		// Stringify JSON object
		const String = JSON.stringify(updatedForm, null, 2);
		setJsonString(String);

		// Words
		setWords(countWords(text));

		console.log('handleEditorChange', html, text);
	}

	return (
		<>
			<div className="header">
				<button className="btn" onClick={handleCopyToClipboard}>
					Copy JSON
				</button>
				<p className="words-counter">
					Words: <span>{words}</span>
				</p>
				<p className="copied">{copied}</p>
			</div>
			<div className="markdown-editor">
				<MdEditor
					style={{ height: '100vh' }}
					renderHTML={(value) => mdParser.render(value)}
					onChange={handleEditorChange}
				/>
			</div>
		</>
	);
};

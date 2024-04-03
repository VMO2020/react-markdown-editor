import { useState } from 'react';

// Markdown
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
	const [htmlData, setHtmlData] = useState('');
	const [textData, setTextData] = useState('');
	const [copied, setCopied] = useState('');
	const [words, setWords] = useState(0);

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
				// alert('JString content copied to clipboard');
				copiedAlert('String content copied to clipboard');
			})
			.catch((error) => {
				alert('Failed to copy String content to clipboard:', error);
			});
	};

	const handleCopyToClipboardHTML = () => {
		navigator.clipboard
			.writeText(htmlData)
			.then(() => {
				// alert('HTML content copied to clipboard');
				copiedAlert('HTML content copied to clipboard');
			})
			.catch((error) => {
				alert('Failed to copy HTML content to clipboard:', error);
			});
	};

	const handleCopyToClipboardTEXT = () => {
		navigator.clipboard
			.writeText(textData)
			.then(() => {
				// alert('HTML content copied to clipboard');
				copiedAlert('TEXT content copied to clipboard');
			})
			.catch((error) => {
				alert('Failed to copy TEXT content to clipboard:', error);
			});
	};

	const countWords = (text) => {
		const words = text.trim().split(/\s+/);
		return words.length;
	};

	function handleEditorChange({ html, text }) {
		// Convert Markdown to String
		const String = JSON.stringify(text, null, 2);
		setJsonString(String);

		// Words
		setWords(countWords(text));

		// HTML
		setHtmlData(html);

		// TEXT
		setTextData(text);

		// console.log('handleEditorChange', html, text);
	}

	return (
		<>
			<div className="header">
				<button className="btn" onClick={handleCopyToClipboard}>
					Copy STRING
				</button>
				<button className="btn" onClick={handleCopyToClipboardHTML}>
					Copy HTML
				</button>
				<button className="btn" onClick={handleCopyToClipboardTEXT}>
					Copy TEXT
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

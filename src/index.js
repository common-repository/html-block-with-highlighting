require('codemirror/addon/hint/show-hint');
require('codemirror/addon/hint/xml-hint');
require('codemirror/addon/hint/html-hint');
require('codemirror/addon/hint/javascript-hint');
require('codemirror/addon/hint/css-hint');
require('codemirror/mode/htmlmixed/htmlmixed');

import { registerBlockType, createBlock } from '@wordpress/blocks';
import { RawHTML } from '@wordpress/element';
import { Controlled as CodeMirror } from 'react-codemirror2';

/**
 * Code here was inspired by ACE HTML Block
 * https://wordpress.org/plugins/ace-html-block/ by Will Delphia
 */

registerBlockType('css-daily/html-block-with-highlighting', {
	title: 'HTML Block with Highlighting',
	icon: 'media-code',
	category: 'formatting',

	supports: {
		className: false,
		html: false,
	},

	attributes: {
		content: {
			type: 'string',
			source: 'html',
		}
	},

	transforms: {
		to: [
			{
				type: 'block',
				blocks: [ 'core/html' ],
				transform: function( attributes ) {
					return createBlock( 'core/html', {
						content: attributes.content,
					})
				},
			},
		],
		from: [
			{
				type: 'block',
				blocks: [ 'core/html' ],
				transform: function ( attributes ) {
					return createBlock( 'css-daily/html-block-with-highlighting', {
						content: attributes.content,
					} );
				},
			},
		],
	},

	edit: ( props ) => {
		return (
			<CodeMirror
				value={ props.attributes.content }
				className="html-block-with-highlighting"
				options={{
					mode: {
						name: 'htmlmixed',
						globalVars: true,
					},
					tabSize: 4,
					theme: 'ayu-mirage',
					lineNumbers: true,
					indentWithTabs: true,
					indentUnit: 1,
					smartIndent: false,
					extraKeys: {
						'Ctrl-Space': 'autocomplete',
					}
				}}
				onBeforeChange={(editor, data, value) => {
					props.setAttributes( { content: value } );
				}}
			/>
		);
	},

	save: function( props ) {
		return <RawHTML>{ props.attributes.content }</RawHTML>
	},
});

# HTML Block with Highlighting

HTML Block with Highlighting is a WordPress plugin which adds a new HTML Block
with syntax highlighting to the Gutenberg editor.

## Usage

1. Install and activate plugin
1. Open the WordPress editor, select the block type: _HTML Block with
   Highlighting_
1. You should now have a HTML block with syntax highlighting. Press
   `Ctrl + Space` for autocompletion (e.g. typing `<bloc` then pressing 
	 `Ctrl + Space` will autocomplete to `<blockquote`).

## Source code

[gitlab.com/css-daily/html-block-with-highlighting](https://gitlab.com/css-daily/html-block-with-highlighting/)

## Development

### Prerequisites

- Node and npm installed

### Build process

1. Clone the repository and enter the new directory
1. Run `npm install` to install the dependencies
1. Run `npm run build` to create the _html-block-with-highlighting.zip_ file
1. This zip file can be installed via upload in WordPress > Plugins > Add New

## Acknowledgements:

- CodeMirror (https://codemirror.net - MIT License)
- react-codemirror2 (https://github.com/scniro/react-codemirror2 - MIT License)

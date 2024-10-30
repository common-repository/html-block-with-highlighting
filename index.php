<?php

/**
 * Plugin Name: HTML Block with Highlighting
 * Plugin URI: https://www.css-daily.com/html-block-with-highlighting
 * Description: HTML Block with syntax highlighting.
 * Version: 1.0.0
 * Requires at least: 5.3
 * Requires PHP: 7.2
 * Author: CSS Daily
 * Author URI: https://www.css-daily.com/
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

function html_block_with_highlighting_register_block() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

	wp_register_script(
		'html-block-with-highlighting',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'html-block-with-highlighting-codemirror',
		plugins_url( 'build/codemirror.css', __FILE__ ),
		[ 'wp-edit-blocks' ],
		'7.1.0'
	);

	wp_register_style(
		'html-block-with-highlighting-codemirror-ayu-mirage',
		plugins_url( 'build/codemirror-ayu-mirage.css', __FILE__ ),
		[ 'html-block-with-highlighting-codemirror' ],
		'7.1.0'
	);

	wp_register_style(
		'html-block-with-highlighting-codemirror-show-hint',
		plugins_url( 'build/codemirror-show-hint.css', __FILE__ ),
		[ 'html-block-with-highlighting-codemirror-ayu-mirage' ],
		'7.1.0'
	);

	wp_register_style(
		'html-block-with-highlighting-style',
		plugins_url( 'build/html-block-with-highlighting.css', __FILE__ ),
		[ 'html-block-with-highlighting-codemirror-show-hint' ],
		'1.0.0'
	);

	register_block_type( 'css-daily/html-block-with-highlighting', array(
		'editor_script' => 'html-block-with-highlighting',
		'editor_style' => [
			'html-block-with-highlighting-style'
		]
	) );
}

add_action( 'init', 'html_block_with_highlighting_register_block' );

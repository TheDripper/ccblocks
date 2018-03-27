<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function ccblocks_cgb_block_assets() {
	wp_enqueue_style(
		'ccblocks-front', 
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) // Dependency to include the CSS after it.
	);
	wp_enqueue_script('feather',plugins_url('dist/featherlight.min.js',dirname(__FILE__)));
	wp_enqueue_script('feathergal',plugins_url('dist/featherlight.gallery.min.js',dirname(__FILE__)));
	wp_enqueue_script('front',plugins_url('dist/front.js',dirname(__FILE__)),array('jquery'));
	wp_enqueue_style('feather',plugins_url('dist/featherlight.min.css',dirname(__FILE__)));
	wp_enqueue_style('feathergal',plugins_url('dist/featherlight.gallery.min.css',dirname(__FILE__)));
} 

add_action( 'enqueue_block_assets', 'ccblocks_cgb_block_assets' );

function ccblocks_cgb_editor_assets() {
	wp_enqueue_script(
		'ccblocks', 
		plugins_url( 'dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ) // Dependencies, defined above.
	);

	wp_enqueue_style(
		'ccblocks-back', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
	);
} 

add_action( 'enqueue_block_editor_assets', 'ccblocks_cgb_editor_assets' );

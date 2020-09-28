<?php
/**
 * Plugin Name: Title Block
 * Author: Purva Bathe
 * Version: 1.0.0
 */

 function titleBlock() {

    wp_enqueue_script(
        'new-title-block',
        plugin_dir_url( __FILE__ ) . 'block.build.js',
        [],
        false,
        true // Enqueue script in the footer.
    );
    // wp_enqueue_script(
    //     'new-title-block',
    //     plugins_url( 'block.js', __FILE__ ),
    //     array( 'wp-blocks', 'wp-element' )
    // );
}
add_action( 'enqueue_block_editor_assets', 'titleBlock' );
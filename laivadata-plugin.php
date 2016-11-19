<?php
/*
* Plugin Name: Laivadata ship database search
* Plugin URI: http://www.jukkakumpusalo.com
* Description: This plugin creates a search widget to Finnish ship database through REST API
* Version: 1.0
* Author: Heikki Kurhinen, Metatavu Oy and Jukka Kumpusalo
* Author URI: http://www.jukkakumpusalo.com
* License: GPL12
*/

// Define search code
function search_form_code() {
	echo '<div class="col-md-11 search-input-container">';
    echo '<input id="main-search-input" class="form-control input-lg" type="text" />';
    echo '</div>';
    echo '<div class="col-sm-1">';
    echo '<button id="main-search-btn" class="btn btn-primary btn-lg">Tee haku</button>';
    echo '</div>';
    echo '<div class="col-md-12">';
    echo '<div class="main-search-results"></div>';
    echo '</div>';
	wp_enqueue_script('bootbox', 'https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js', false);
	wp_enqueue_script('fontawesome', 'https://use.fontawesome.com/095a8f8320.js', false);
	wp_enqueue_script('templates', plugin_dir_url(__FILE__) . 'js/templates.js', array('jquery'));
	wp_enqueue_script('ship-api', plugin_dir_url(__FILE__) . 'js/ship-api.js', array('jquery'));
}

// Create Wordpress constructor using default widget template
class Laivadata_Widget extends WP_Widget {

	function __construct() {
		parent::__construct(
			'Laivadata_Widget', // Base ID
			esc_html__( 'Laivadata Search Widget', 'text_domain' ), // Name
			array( 'description' => esc_html__( 'Laivadata Search Widget', 'text_domain' ), ) // Args
		);
	}

	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	
	public function widget( $args, $instance ) {
		echo $args['before_widget'];
		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		}
		search_form_code();
		echo $args['after_widget'];
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {
		$title = ! empty( $instance['title'] ) ? $instance['title'] : esc_html__( 'New title', 'text_domain' );
		?>
		<p>
		<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title:', 'text_domain' ); ?></label> 
		<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
		</p>
		<?php 
	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

		return $instance;
	}
} // End of class Laivadata_Widget

// Register Laivadata widget
function register_laivadata_widget() {
    register_widget( 'Laivadata_Widget' );
}
add_action( 'widgets_init', 'register_laivadata_widget' );
?>
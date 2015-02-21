/* global jQuery */
/**
 * @file Adds support for animating the navigation bar in/out of focus on the
 * page based on the page scroll.
 *
 * Acts only on the first navigation bar in the page with the class
 * `.navbar-animated` which should probably be the top navigation on the page.
 *
 * @author William Duyck
 * @license https://www.mozilla.org/MPL/2.0/ MPL-2.0
 */

(function( window, document, $, undefined ) {
  'use strict';

  // wait till dom ready
  $( function() {
    // find navbar to animate
    var $navbar = $( 'body > .navbar-animated:first' );

    // if we have none don't bother to add the scroll event handler
    if( $navbar.length ) {
      // get offset that we must reach before removing transparency
      var triggerOffset = $navbar.data( 'animation-offset' ) || 60;

      /**
       * Animate the navbar on/off based on scroll
       *
       * Toggle the `.navbar-transparent` class on once the page scroll is
       * beyond a pre-determined threashold value (defaults to 60px).
       */
      var animateNavbar = function() {
        var pageOffest = window.pageYOffset || document.documentElement.scrollTop;

        if( pageOffest >= triggerOffset ) {
          $navbar.removeClass( 'navbar-transparent' );
          return;
        }

        $navbar.addClass( 'navbar-transparent' );
      };

      // run once on dom ready
      animateNavbar();

      // add scroll event listener
      $( window ).on( 'scroll', animateNavbar );
    }
  });
})( this, this.document, jQuery );

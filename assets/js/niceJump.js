/* global jQuery */
/**
 * @file Adds animated scroll to all anchor links within the page.
 *
 * Any link starting with `#` will be handled, and the page will scroll any
 * element on the page with the corresponding id. The URL hashchange will then
 * be triggered after the animation has completed.
 */

(function( window, document, $, undefined ) {
  'use strict';

  var topNavHeight = $( '.navbar-fixed-top' ).height() || $( '.navbar-static-top' ) || 0;

  // delegate click event on anchor links to document
  $( document ).on( 'click', 'a[href^=#]', function( event ) {
    // get link
    var target = $( this ).attr( 'href' );

    // check to see if element w/ id matching link exists
    if( $( target ).length ) {
      $( 'html, body' ).animate({
        scrollTop: $( target ).offset().top - topNavHeight
      }, 700, function() {
        if( window.history && window.history.pushState ) {
          window.history.pushState( null, null, target );
        }
      });

      return false;
    }
  });
})( this, this.document, jQuery );

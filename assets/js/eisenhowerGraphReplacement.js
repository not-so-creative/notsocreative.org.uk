/* global jQuery */
(function( window, document, $, undefined ) {
  'use strict';

  $.ajax({
    url: $( '#eisenhowerGraph' ).attr( 'src' ),
    method: 'GET',
    dataType: 'html'
  }).done( function( svg ) {
    $( '#eisenhowerGraph' ).replaceWith( svg );
    $( '#eisenhowerGraphSvg' ).css( 'max-height', '400px' );
  });
})( this, this.document, jQuery );

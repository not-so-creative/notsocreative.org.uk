/* global jQuery */
/**
 * @file Creates a slow/subtle background colour change of the jumbotron
 */

(function( window, document, $, undefined ) {
  'use strict';

  /**
   * Generate random pastel colour.
   *
   * @return {String} CSS stlye hex colour value
   */
  function randomColor() {
    var getVal = function() {
      return ( Math.round( Math.random() * 110 ) + 110 ).toString( 16 );
    };

    return '#' + getVal() + getVal() + getVal();
  }

  $( '.jumbotron' ).prepend( '<canvas></canvas>' );
  var canvas = $( '.jumbotron canvas:first' );

  canvas.css({
    position: 'absolute',
    top: 0,
    zIndex: 0,
    width: '100vw',
    height: '100vh',
    opacity: 0.4
  });
  canvas[ 0 ].width = canvas.width();
  canvas[ 0 ].height = canvas.height();

  var ctx = canvas[ 0 ].getContext( '2d' );

  var parentOffset = $( '.jumbotron:first' ).parent().offset();
  $( '.jumbotron:first, .navbar-fixed-top' ).on( 'mousemove', function( event ) {
    var x = event.clientX - parentOffset.left;
    var y = event.clientY - parentOffset.top;

    if( Math.random() > 0.7 ) {
      ctx.fillStyle = randomColor();
      ctx.beginPath();
      ctx.arc( x, y, Math.random() * 50, 0, Math.PI*2, false );
      ctx.closePath();
      ctx.fill();
    }
  });

})( this, this.document, jQuery );

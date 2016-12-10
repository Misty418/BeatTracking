"use strict";

document.getElementById( "fileOpener" ).onchange = selectFile;

( function() {
	window.bt = {
		buffer: null,
		canvasCtx: initCanvas(),
		audioCtx: initAudio(),
		decode: function( fileArrayBuffer ) {
			return new Promise( function( resolve, reject ) {
				bt.audioCtx.decodeAudioData( fileArrayBuffer, function( buffer ) {
					bt.buffer = buffer;
					resolve();
				}, reject );
			});
		},
		start: function( fileArrayBuffer ) {
			lg("start");

			var p = this.decode(fileArrayBuffer);

			p.then( function() {
				lg("Draw Graph");
				lg("Calculate BPM");
			});
		}
	}
})();
function initCanvas() {
	canvas = document.getElementById( "canvas" ),
	ctx = canvas.getContext( "2d" );

	if ( !ctx ) {
		lg("Error : getContext");
	}
	return ctx;
}

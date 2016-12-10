function selectFile() {
	var uploadedFile = this.files[0],
		reader = new FileReader();

	reader.addEventListener( "loadend", function() {
		lg("Load End")
		bt.start( reader.result );
	} );
	reader.readAsArrayBuffer( uploadedFile );
}
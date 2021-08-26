tinymce.init({
	selector: '#blogBody',
	automatic_uploads: true,
	images_upload_url: '/upload/photo',
	// images_upload_base_path: window.location.hostname,
	// images_upload_handler:image_upload_handler,

	plugins:
		'emoticons code codesample table quickbars advlist autosave autolink lists link image imagetools charmap print preview hr anchor pagebreak',
	menubar: 'file edit view insert table format tools',
	toolbar:
		'undo redo | formatselect | bold italic | image link | alignleft aligncenter alignright alignjustify | indent outdent | numlist bullist | restoredraft',
	image_dimensions: false,
	quickbars_insert_toolbar: false,
	paste_data_images: true,
	image_title: true,
	automatic_uploads: true,
	file_picker_types: 'image',
	autosave_ask_before_unload: false,
	inline: true,
	image_caption: true,
	file_picker_callback: file_picker_callback,
	content_style: 'body { font-family:Roboto,Arial,sans-serif; font-size:15px }',
});
function file_picker_callback(cb, value, meta) {
	var input = document.createElement('input');
	input.setAttribute('type', 'file');
	input.setAttribute('accept', 'image/*');

	/*
                  Note: In modern browsers input[type="file"] is functional without
                  even adding it to the DOM, but that might not be the case in some older
                  or quirky browsers like IE, so you might want to add it to the DOM
                  just in case, and visually hide it. And do not forget do remove it
                  once you do not need it anymore.
                */

	input.onchange = function () {
		var file = this.files[0];

		var reader = new FileReader();
		reader.onload = function () {
			/*
                          Note: Now we need to register the blob in TinyMCEs image blob
                          registry. In the next release this part hopefully won't be
                          necessary, as we are looking to handle it internally.
                        */
			var id = 'blobid' + new Date().getTime();
			var blobCache = tinymce.activeEditor.editorUpload.blobCache;
			var base64 = reader.result.split(',')[1];
			var blobInfo = blobCache.create(id, file, base64);
			blobCache.add(blobInfo);

			/* call the callback and populate the Title field with the file name */
			cb(blobInfo.blobUri(), { title: file.name });
		};
		reader.readAsDataURL(file);
	};

	input.click();
}
// function image_upload_handler(blobInfo, success, failure, progress) {
// 	var xhr, formData;

// 	xhr = new XMLHttpRequest();
// 	xhr.withCredentials = false;
// 	xhr.open('POST', '/upload/photo');

// 	xhr.upload.onprogress = function (e) {
// 		progress((e.loaded / e.total) * 100);
// 	};

// 	xhr.onload = function () {
// 		var json;

// 		if (xhr.status === 403) {
// 			failure('HTTP Error: ' + xhr.status, { remove: true });
// 			return;
// 		}

// 		if (xhr.status < 200 || xhr.status >= 300) {
// 			failure('HTTP Error: ' + xhr.status);
// 			return;
// 		}

// 		json = JSON.parse(xhr.responseText);

// 		if (!json || typeof json.location != 'string') {
// 			failure('Invalid JSON: ' + xhr.responseText);
// 			return;
// 		}

// 		success(json.location);
// 	};

// 	xhr.onerror = function () {
// 		failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
// 	};

// 	formData = new FormData();
// 	formData.append('file', blobInfo.blob(), blobInfo.filename());

// 	xhr.send(formData);
// }

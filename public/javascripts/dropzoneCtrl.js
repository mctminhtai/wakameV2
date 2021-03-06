const uploadUrl = '/upload/photo';
let imgList = [];
Dropzone.autoDiscover = false;
let myDropzone = new Dropzone('div#dropzone', {
	url: uploadUrl,
	paramName: 'file', // The name that will be used to transfer the file
	maxFilesize: 10, // MB
	parallelUploads: 4,
	thumbnailWidth: '300',
	thumbnailHeight: '300',
	resizeWidth: null,
	resizeHeight: '600',
	resizeMimeType: null,
	autoProcessQueue: true, //auto upload to server or upload when click some button
	resizeQuality: 0.5,
	resizeMethod: 'contain',
	maxFiles: 5, //Can be used to limit the maximum number of files that will be handled by this Dropzone
	acceptedFiles: 'image/*', //image/*,application/pdf,.psd
	previewsContainer: null,
	addRemoveLinks: true,
});
myDropzone.on('removedfile', (file) => {
	const response = JSON.parse(file.xhr.response);
	let deleteUrl = uploadUrl + '/' + response.ObjectId;
	imgList.splice(imgList.indexOf(response.ObjectId), 1);
	// console.log(imgList);
	axios.delete(deleteUrl);
});
myDropzone.on('success', (file) => {
	// console.log(file);
	const response = JSON.parse(file.xhr.response);
	imgList.push(response.ObjectId);
	// console.log(imgList);
});

function submitUploadedFiles() {
	if (imgList.length >= 0) {
		axios
			.post(location.pathname, { imgList })
			.then((response) => {
                location.pathname = 'admin/blog-add/' + response.data._id;
			})
			.catch((error) => {
				// console.log(error.message);
                var toastElList = [].slice.call(document.querySelectorAll('.toast'));
				var toastList = toastElList.map(function (toastEl) {
					return new bootstrap.Toast(toastEl);
				});
				toastList.forEach((toast, index) => {
					toast.show();
				});
			});
	}
}

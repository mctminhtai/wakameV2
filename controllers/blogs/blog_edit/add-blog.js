var { Blogs, Categories, Tags } = require('../../../models/index');
var { saveFile } = require('../../upload/saveOnMongo/index');
exports.redirectToUpload = async function (req, res, next) {
	return res.redirect('/blog/blog-add/upload-file');
};
exports.getAddBlogAlbum = async function (req, res, next) {
	return res.render('blog-add-library', { user: req.user });
};
exports.postAddBlogAlbum = async function (req, res, next) {
	const imgList = req.body.imgList;
	console.log(imgList);
	if (imgList.length > 0) {
		let blog = await Blogs.create({
			title: 'temporary',
			description: 'temporary',
			body: 'this is empty blog',
			userId: '612cfc4e05583a4abc32dc6d',
			images: imgList,
		});
		return res.status(201).json(blog);
	}
	return res.status(400).json({ message: 'empty imgList' });
};
exports.getEditBlog = async function (req, res, next) {
	const blogId = req.params.id;
	const [cates_list, tags_list, blog] = await Promise.all([
		Categories.find({}),
		Tags.find({}),
		Blogs.findById(blogId)
			.populate({ path: 'category', select: 'name' })
			.populate({ path: 'userId', select: 'fullName' }),
	]);
	//chuyen tu id qua URL cho tung buc anh
	const newImgList = blog.images.map((id, index) => {
		return '/upload/photo/' + id;
	});

	blog.images = newImgList;
	console.log(blog.images);
	return res.render('blog-add', { blog, cates_list, tags_list, user: req.user });
};
exports.postEditBlog = async function (req, res, next) {
	let { title, blogBody, description, category, tags, thumb } = req.body;
	const blogId = req.params.id;
	if (Array.isArray(category)) {
		category = category[0];
	}
	if (!Array.isArray(tags)) {
		tags = [tags];
	}
	title = title.trim();
	blogBody = blogBody.trim();
	description = description.trim();
	thumb = thumb.trim();
	if((title==='')||(blogBody==='')||(description==='')||(thumb==='')){
		return res.redirect('/blog/blog-add/'+blogId);
	}
	const updatedBlog = await Blogs.findByIdAndUpdate(
		blogId,
		{
			title,
			description,
			body: blogBody,
			userId: '612cfc4e05583a4abc32dc6d',
			category,
			tags,
			status: true,
			thumbImg:thumb,
		},
		{ new: true }
	);
	
	if(updatedBlog){
		return res.redirect(`/blog/blog-detail/${updatedBlog._id}`);
	}else{
		return res.send('Has error');
	}
};

// await Categories.create([
// 	{ name: 'Web Design', description: 'thiet ke web' },
// 	{ name: 'Branding', description: 'thiet ke thuong hieu' },
// 	{ name: 'Graphic Design', description: 'thiet ke do hoa' },
// 	{ name: 'Wireframing Design', description: 'thiet ke phac thao' },
// 	{ name: 'Marketing', description: 'thi truong' },
// ]);
// await Tags.create([
// 	{ name: 'Popular', description: 'pho bien' },
// 	{ name: 'Design', description: 'pho bien' },
// 	{ name: 'UX', description: 'pho bien' },
// 	{ name: 'Usability', description: 'pho bien' },
// 	{ name: 'Interview', description: 'pho bien' },
// 	{ name: 'Jobs', description: 'pho bien' },
// 	{ name: 'Develop', description: 'pho bien' },
// 	{ name: 'Business', description: 'pho bien' },
// 	{ name: 'Tech', description: 'pho bien' },
// 	{ name: 'Consult', description: 'pho bien' },
// 	{ name: 'Employee', description: 'pho bien' },
// ]);

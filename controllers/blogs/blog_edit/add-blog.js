var { Blogs, Categories, Tags } = require('../../../models/index');
exports.getAddBlog = async function (req, res, next) {
	const [cates_list, tags_list] = await Promise.all([Categories.find({}), Tags.find({})]);

	return res.render('blog-add', { cates_list, tags_list });
};
exports.postAddBlog = async function (req, res, next) {
	var {title,blogBody,description,category,tags} = req.body;
	if(Array.isArray(category)){
		category = category[0];
	}
	if(!Array.isArray(tags)){
		tags = [tags];
	}
	var blog = await Blogs.create({
		title,
		description,
		body: blogBody,
		userId: '612350cd281b585374215bf3',
		category,
		tags,
	});
	console.log(blog);
	return res.send('OK');
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

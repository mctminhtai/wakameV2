exports.blogList = function(req,res,next){
    return res.render('admin/blog-list',{user:req.user})
}
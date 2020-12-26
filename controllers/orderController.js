const User = require("../models/User");
const Course = require("../models/Course");

exports.indexOrder = async (req, res, next) => {

    const user = await User.findById(req.signedCookies.jwt).lean();
    const course = await Course.findById(req.params.courseId).lean();
    res.render('checkout', {
        user,
        course
    })
}
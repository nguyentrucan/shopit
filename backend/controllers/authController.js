const User = require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');

//Register a user => /api/v1/register
exports.registerUser = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body;
    
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:'421-4212275_transparent-default-avatar-png-avatar-img-png-download',
            url:'https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png',
        }
    })

    res.status(201).json({
        success:true,
        user
    })
})
const { check } = require('express-validator');
module.exports = {
    validateRegisterUser: () =>{
        return [
            check('userName', 'username does not Empty').not().isEmpty(),
            check('userName', 'username must be Alphanumeric').isAlphanumeric(),
            check('userName', 'username more than 6 degits').isLength({ min: 6 }),
            check('email', 'Invalid does not Empty').not().isEmpty(),
            check('email', 'Invalid email').isEmail(),
            check('password', 'password more than 6 degits').isLength({ min: 6 })
        ];
    },
    validateLogin: ()=> {
        return [
            check('email', 'Invalid does not Empty').not().isEmpty(),
            check('email', 'Invalid email').isEmail(),
            check('password', 'password more than 6 degits').isLength({ min: 6 })
        ];
    }
}
// let validate = {
//     validateRegisterUser: validateRegisterUser,
//     validateLogin: validateLogin
// };

// module.exports = { validate };
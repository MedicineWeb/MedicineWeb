const { check } = require("express-validator");

const loginValidator = [
    check('id').notEmpty(),
    check('password').notEmpty()
];

const joinValidator = [
    check('id').notEmpty(),
    check('password').notEmpty(),
    check('nickname').notEmpty(),
    check('idQuestion').notEmpty(),
    check('idAnswer').notEmpty(),
    check('pwQuestion').notEmpty(),
    check('pwANswer').notEmpty()
];

module.exports = {
    joinValidator,
    loginValidator
};
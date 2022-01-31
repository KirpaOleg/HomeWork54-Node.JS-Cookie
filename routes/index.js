const express = require('express');
const { signedCookie } = require('cookie-parser');  

const router = express.Router();

/* GET home page. */
// router.get('/', (req, res, next) => {
//   const token = 'adqwex3562yvwet4525v63v3w4';
//   res.clearCookie();
//   res.cookie('myToken', token, {signed: true});
//   res.send('set cookie');
// });

// router.get('/', (req, res, next) => {
//   const token = 'adqwex3562yvwet4525v63v3w4';
//   res.clearCookie();
//   res.cookie('myToken', token, { domain: 'http://127.0.0.1:3000', path: '/', secure: true })
//   res.send('set cookie');
// });

// router.get('/', (req, res, next) => {
//   const token = 'adqwex3562yvwet4525v63v3w4';
//   res.clearCookie();
//   res.cookie('myToken', token, { domain: 'http://127.0.0.1:3000', encode: String })
//   res.send('set cookie');
// });

// router.get('/', (req, res, next) => {
//   const token = 'adqwex3562yvwet4525v63v3w4';
//   res.clearCookie();
//   res.cookie('myToken', token, {signed: true}, { expires: new Date(Date.now() + 90000), httpOnly: true })
//   res.send('set cookie');
// });

router.get('/', (req, res, next) => {
  console.log('My cookie default', req.cookies);
  console.log('My cookie signed', req.signedCookies);
  res.send('get cookie');
});


module.exports = router;

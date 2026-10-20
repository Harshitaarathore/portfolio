const router = require('express').Router();
const path = require('path');

const dir = path.join(__dirname, '..', 'files');

router.get('/pdf', (req, res) =>
  res.download(path.join(dir, 'Harshita_Rathore_Resume.pdf'))
);

router.get('/docx', (req, res) =>
  res.download(path.join(dir, 'Harshita_Rathore_Resume.docx'))
);

module.exports = router;
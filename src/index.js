const express = require('express');
const fs = require('fs');
const { createPdf } = require('./util/createPdf');

const router = express();
// config comes from the client side via request after we authenticate the user
const { config } = require('./faker/config');

router.get('/api/v1/printPDF', async (req, res, next) => {
  const { token, config } = req.body;
  // make a request to TZ api to authenticate the token
  // if everything is valid, parse the config and create pdf
  // send back the created pdf in response
  // PSEUDO CODE:
  const response = await fetch(`https://tz.api/auth?token=${token}`);
  const authenticated = await response.json();

  if (!authenticated) {
    return res.status(401).send({
      message: 'Not Authorized'
    })
  }

  const pdfFilePath = await createPdf(config);
  res.sendFile(pdfFilePath, () => {
      // delete the file after we send it
      fs.unlinkSync(pdfFilePath);
  });
});


(async () => {
  await createPdf(config);
})();

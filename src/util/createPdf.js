const React = require('react');
const path = require('path');

const { renderToFile } = require('@react-pdf/renderer');
const { Template } = require('../templates/Template');
const { ExampleDocument } = require('../templates/Example');

async function createPdf(config) {
  try {
    const pdfPath = path.join(__dirname, '..', '..', 'tmp', `example-${new Date().getTime()}.pdf`);
    console.log(`rendering React Template to pdf...`);
    await renderToFile(<Template config={config} />, pdfPath);

    console.log(`created pdf at ${pdfPath}`);
    return pdfPath;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { createPdf };

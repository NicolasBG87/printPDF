const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    // launch a new chrome instance
    const browser = await puppeteer.launch({
        headless: true
    });

    // create a new page
    const page = await browser.newPage();

    // set your html as the pages content
    const html = fs.readFileSync(`${__dirname}/templates/example.html`, 'utf8');
    await page.setContent(html, {
        waitUntil: 'domcontentloaded'
    });

    // or a .pdf file
    await page.pdf({
        format: 'A4',
        path: `${__dirname}/print-example.pdf`
    });

    // close the browser
    await browser.close();
})();

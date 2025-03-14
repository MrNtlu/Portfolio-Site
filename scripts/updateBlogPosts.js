const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

async function scrapeMediumPosts() {
    console.log('Starting Medium scraping...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.goto('https://medium.com/@mrntlu');
        await page.waitForSelector('article', { timeout: 5000 });

        const articles = await page.evaluate(() => {
            const posts = [];
            const articleElements = document.querySelectorAll('article');

            articleElements.forEach((article) => {
                const titleElement = article.querySelector('h2');
                const descriptionElement = article.querySelector('h2 + p');
                const linkElement = article.querySelector('a[aria-label]');
                const imageElement = article.querySelector('img');

                if (titleElement && linkElement) {
                    posts.push({
                        title: titleElement.textContent.trim(),
                        description: descriptionElement ? descriptionElement.textContent.trim() : '',
                        link: linkElement.href,
                        thumbnail: imageElement ? imageElement.src : '/assets/placeholder-blog.jpg',
                        pubDate: new Date().toISOString()
                    });
                }
            });

            return posts.slice(0, 3);
        });

        await browser.close();

        if (articles.length > 0) {
            const filePath = path.join(process.cwd(), 'constants', 'BlogPosts.js');
            const fileContent = `export const BlogPosts = ${JSON.stringify(articles, null, 2)};`;
            await fs.writeFile(filePath, fileContent);
            console.log('Blog posts updated successfully!');
        } else {
            console.log('No articles found.');
        }
    } catch (error) {
        console.error('Error scraping Medium posts:', error);
        await browser.close();
    }
}

scrapeMediumPosts(); 
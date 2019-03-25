const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.name('wd')).sendKeys('掘金', Key.RETURN);
        await driver.wait(until.titleIs('掘金_百度搜索'), 1000);
    } finally {
        await driver.quit();
    }
})();
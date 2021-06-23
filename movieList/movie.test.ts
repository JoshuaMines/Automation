import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('test movie page', async () => {

    // You’ll need to select the input field and button
    let input = await driver.findElement(By.css('input'))

    await input.sendKeys('word\n')

    await driver.sleep(2000)

    let button = await driver.findElement(By.css('button'))

    await button.click()

    let buttonTwo = await driver.findElement(By.css('li button'))

    await buttonTwo.click()

    await driver.sleep(5000)

    // <aside id="message" class="hide">sdfads deleted!</aside>
    // let check = await driver.findElement.findElement(By.text('deleted!'))

    // await MessageEvent.return('deleted!')
})
import { chromium, Page } from "@playwright/test";

class LoginPage {
  lppage: Page;

  constructor(lpage: Page) {
    // parameterized constructor
    this.lppage = lpage;
  }

  async loadurl(url: string) {
    await this.lppage.goto(url);
  }

  async enterCredentials(userName: string, password: string) {
    await this.lppage.fill("#username", userName);
    await this.lppage.fill("#password", password);
  }

  async clickLogin() {
    await this.lppage.click(".decorativeSubmit");
  }

  async verifyTitle(): Promise<string> {
    //this return the method will return s Promise that resolves to a string - specifically, the title of the current web page
    return await this.lppage.title();
  }

  async closeBrowser() {
    await this.lppage.close();
  }
}

async function doLogin() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const login = new LoginPage(page); // conctructor is called immediately after the creation of the object
  await login.loadurl(`http://leaftaps.com/opentaps/control/main`);
  await login.enterCredentials("demoCSR", "crmsfa");
  await login.clickLogin();
  console.log(await login.verifyTitle());
  await login.closeBrowser();
}

doLogin();

//Create an object for the class to call all the methods

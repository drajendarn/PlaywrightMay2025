import { chromium, Page } from "@playwright/test";

export class LoginPage {

    lppage: Page

    constructor(lpage: Page) { // parameterized constructor
        this.lppage = lpage
    }

    async loadurl(url: string) {
        await this.lppage.goto(url)
    }

    async enterCredentials(userName: string, password: string) {
        await this.lppage.fill("#username", userName);
        await this.lppage.fill("#password", password)

    }

    async clickLogin() {
        await this.lppage.click(".decorativeSubmit")

    }


}




//Create an object for the class to call all the methods



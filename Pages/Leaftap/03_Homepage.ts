import { WelcomePage } from "./02_Welcomepage";


export class HomePage extends WelcomePage {


    async clickLead() {
        await this.lppage.click("//a[text()='Leads']")
    }

    async clickAccounts() {
        await this.lppage.click("//a[text()='Accounts']")
        await this.lppage.waitForTimeout(5000)

    }

    async clickContacts() {
        await this.lppage.click("//a[text()='Contacts']")

    }

    async clickOpportunities() {
        await this.lppage.click("//a[text()='Opportunities']")

    }


}
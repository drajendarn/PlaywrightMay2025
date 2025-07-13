import { HomePage } from "./03_Homepage";


export class LeadPage extends HomePage{


async clickCreateLead(){
await this.lppage.click(`//a[text()='Create Lead']`)
}

async clickMergeLead(){

}

async clickFindLead(){

}


}
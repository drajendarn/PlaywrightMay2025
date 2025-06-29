import { faker } from "@faker-js/faker";
import { test } from "@playwright/test";
import { log } from "node:console";

let token: any;
let inst_url: any;
let tokenType: any;
let id: any;

test.describe.serial(`Salesforce API testing`, async () => {
  test(`Generate a token`, async ({ request }) => {
    const response = await request.post(
      "https://login.salesforce.com/services/oauth2/token",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        form: {
          grant_type: "password",
          client_id:
            "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
          client_secret:
            "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
          username: "ravindran.ramdas@testleaf.com",
          password: "RaviSalesTest#1432",
        },
      }
    );

    const responseBody = await response.json();
    console.log(responseBody);
    console.log(response.statusText());
    token = responseBody.access_token;
    inst_url = responseBody.instance_url;
    tokenType = responseBody.token_type;
  });

  test(`Create a Lead`, async ({ request }) => {
    const response = await request.post(
      `${inst_url}/services/data/v64.0/sobjects/Lead/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${tokenType} ${token}`,
        },
        data: {
          lastname: faker.person.firstName(),
          company: faker.company.buzzNoun(),
        },
      }
    );

    const respBody = await response.json();
    console.log(respBody);
    console.log(response.statusText());
    id = respBody.id;
    console.log(id);
  });

  test(`To Fetch a specific Lead`, async ({ request }) => {
    const response = await request.get(
      `${inst_url}/services/data/v64.0/sobjects/Lead/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${tokenType} ${token}`,
        },
      }
    );

    const rBody = await response.json();
    console.log(rBody);
    console.log(response.statusText());
  });
});

//This method is Created to as utility 

import { faker } from "@faker-js/faker";
import { APIRequestContext } from "@playwright/test";

let tokenURL = "https://login.salesforce.com/services/oauth2/token";

let grant_type = "password";
let client_id =
  "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB";
let client_secret =
  "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260";
let username = "ravindran.ramdas@testleaf.com";
let password = "RaviSalesTest#1432";

let token: any;
let inst_url: any;
let tokenType: any;
let resourceId: any;

async function generateToken(request: APIRequestContext) {
  const response = await request.post(tokenURL, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    form: {
      grant_type: grant_type,
      client_id: client_id,
      client_secret: client_secret,
      username: username,
      password: password,
    },
  });

  const responseBody = await response.json();
  token = responseBody.access_token;
  inst_url = responseBody.instance_url;
  tokenType = responseBody.token_type;
}

export async function createResource(request: APIRequestContext) {
  await generateToken(request);
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

  const res = await response.json();
  resourceId = res.id;
}

export async function fetchResource(request: APIRequestContext) {
  
   await generateToken(request);
    const response = await request.get(
    `${inst_url}/services/data/v64.0/sobjects/Lead/${resourceId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${tokenType} ${token}`,
      },
    }
  );

  const res = await response.json();
  console.log(res);
  return res.LastName;
}

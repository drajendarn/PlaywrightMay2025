import { faker } from "@faker-js/faker";
import { test, expect, APIRequestContext, request } from "@playwright/test";
import axios from "axios";

let accessToken: string;
let tokenType: string;
let apiContext: APIRequestContext;

// Auth0 OAuth2 Test App (public safe test tenant)
let grant_type = "password";
const clientId =
  "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB";
const clientSecret =
  "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260";
const tokenUrl = "https://login.salesforce.com/services/oauth2/token";
const testApiUrl =
  "https://orgfarm-ca83e16b69-dev-ed.develop.my.salesforce.com/services/data/v64.0/sobjects/Lead/"; // test endpoint that echoes back the token
let username = "ravindran.ramdas@testleaf.com";
let password = "RaviSalesTest#1432";
let inst_url: any;

test.beforeAll(async () => {
  apiContext = await request.newContext();

  const response = await apiContext.post(tokenUrl, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    form: {
      grant_type: grant_type,
      client_id: clientId,
      client_secret: clientSecret,
      username: username,
      password: password,
    },
  });
  const responseBody = await response.json();
  accessToken = responseBody.access_token;
  tokenType = responseBody.token_type;
  inst_url = responseBody.instance_url;
  console.log("✅ Access Token retrieved:", accessToken.slice(0, 20) + "...");
  console.log("🔑 Auth response:", responseBody);
  expect(accessToken).toBeTruthy();
});

test("Call API using OAuth2 Bearer Token", async ({ request }) => {
  const apiResponse = await apiContext.post(
    `${inst_url}/services/data/v64.0/sobjects/Lead/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${tokenType} ${accessToken}`,
      },
      data: {
        lastname: faker.person.firstName(),
        company: faker.company.buzzNoun(),
      },
    }
  );

  //expect(apiResponse.ok()).toBeTruthy();

  const data = await apiResponse.json();
  console.log("🔐 API Response:", data);

  //expect(data).toHaveProperty('authenticated', true);
});

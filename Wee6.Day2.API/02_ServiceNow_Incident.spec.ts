//endpoint
//Headers
//Authorization
//contenttype
//Request Body for POST
//Response Body

import { test } from "@playwright/test";

let id: any; //Global data
test.describe.serial(`ServiceNow`, async () => {
  test(`Creating Instance using Playwright with API`, async ({ request }) => {
    /* const browser = chromium.launch() 
const context = browser.newContext()
const request = context.request 


to make all the request for HTTP methods we g=have to gor for request*/

    const response = await request.post(
      "https://dev281454.service-now.com/api/now/table/incident",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic YWRtaW46NHhVNkBaZ0drcEBX", // encode username and password using base64 website
        },

        data: {
          description: "Creating issue through Playwright",
        },
      }
    );

    const responseBody = await response.json();
    console.log(responseBody);

    console.log(response.status());
    console.log(response.statusText());

    console.log(responseBody.result.sys_id);
    id = responseBody.result.sys_id; //Retriving sysid to pass them to other endpoint
  });

  test(`Fetch Instance using Playwright with API`, async ({ request }) => {
    const response = await request.get(
      `https://dev281454.service-now.com/api/now/table/incident/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic YWRtaW46NHhVNkBaZ0drcEBX",
        },
      }
    );

    const respons = await response.json();
    console.log(respons);

    console.log(response.status());
    console.log(response.statusText());
  });

  test(`Update Instance using Playwright with API`, async ({ request }) => {
    const response = await request.patch(
      `https://dev281454.service-now.com/api/now/table/incident/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic YWRtaW46NHhVNkBaZ0drcEBX",
        },
        data: {
          short_description: "Incident Updation using Playwright",
          location: "Chennai",
        },
      }
    );

    const resBody = await response.json();
    console.log(resBody);

    console.log(response.status());
    console.log(response.statusText());
  });

  test(`Delete Instance using Playwright with API`, async ({ request }) => {
    const response = await request.delete(
      `https://dev281454.service-now.com/api/now/table/incident/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic YWRtaW46NHhVNkBaZ0drcEBX"
        }
        
      }
    );

   // const resBodyDel = await response.json();
   // console.log(resBodyDel);

    console.log(response.status());
    console.log(response.statusText());
  });
});

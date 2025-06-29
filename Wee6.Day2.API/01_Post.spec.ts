import { faker } from "@faker-js/faker";
import test from "@playwright/test";

test(`POST Method using playwright`, async ({ request }) => {
  const response = await request.post(
    `https://dev340392.service-now.com/api/now/table/incident`,
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Basic YWRtaW46bj1veWo0VzRJSkQv",
      },
      data: {
      description: faker.lorem.sentence(),//to generate random values
      },
    }
  )
  const responseBody = await response.json();
  console.log(responseBody);
  console.log(response.status());
  console.log(response.statusText());
  
  
});

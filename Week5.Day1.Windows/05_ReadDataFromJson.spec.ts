import test from "@playwright/test";
import credentials from "../../Data/Login.json";

for (let data of credentials) {
  test(`Read Data from Json for ${data.TCID}`, async () => {
    console.log(data.username);
    console.log(data.password);
  });
}

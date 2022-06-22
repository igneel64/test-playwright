import { test, expect } from "@playwright/test";

test.use({ headless: false, storageState: "state.json" });

test.describe("Getting started!", () => {
  test("should check the page title", async ({ page }) => {
    await page.goto("https://cosmossport.gr");
    // await page.evaluate(() =>
    //   document.querySelector("#search_query_top")?.remove()
    // );
    await expect(page).toHaveScreenshot();
  });
});

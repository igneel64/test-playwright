import { test, expect } from "@playwright/test";

test.use({ headless: false });

test.describe("Getting started!", () => {
  test("should check the page title", async ({ page }) => {
    await page.goto("https://cosmossport.gr");
    expect.soft(await page.title()).toBe("Cosmossport");
  });
});

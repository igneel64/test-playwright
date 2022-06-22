import { test, expect } from "@playwright/test";

test.describe("Getting started!", () => {
  test("should check the page title", async ({ page }) => {
    await page.goto("https://cosmossport.gr");
    expect(await page.title()).toBe("Cosmossport");
  });
});

import { test, expect } from "@playwright/test";

test.use({ headless: false, storageState: "state.json" });

test.describe("Getting started!", () => {
  test("should check the page title", async ({ page, context }) => {
    await page.route(
      (url: URL) => Boolean(url.href.match("sentry")),
      (route) => route.abort()
    );

    await page.goto("https://cosmossport.gr");
    expect.soft(await page.title()).toBe("Cosmossport");
    await page.pause();
    // await context.storageState({ path: "state.json" });
  });
});

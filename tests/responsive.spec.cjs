const { test, expect, devices } = require("@playwright/test");

for (const [name, viewport, isMobile] of [
  ["small-phone", { width: 320, height: 700 }, true],
  ["iphone-size", { width: 390, height: 844 }, true],
  ["large-phone", { width: 430, height: 932 }, true],
  ["tablet", { width: 768, height: 1024 }, false],
  ["desktop", { width: 1440, height: 900 }, false],
]) {
  test.describe(name, () => {
    test.use({ viewport, hasTouch: isMobile, isMobile });
    test("homepage has no horizontal overflow and core interactions work", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      await expect(page.locator(".px-hero h1")).toBeVisible();
      await expect(page.locator(".px-orbit-3d")).toHaveCount(1);
      await expect(page.getByRole("button", { name: "Backend", exact: true })).toBeVisible();
      await page.getByRole("button", { name: "Backend", exact: true }).click();
      await expect(page.getByRole("button", { name: "Backend", exact: true })).toHaveAttribute("aria-pressed", "true");
      await page.getByRole("button", { name: "All", exact: false }).click();
      await page.locator("#services").scrollIntoViewIfNeeded();
      await expect(page.locator(".px-service")).toHaveCount(3);
      await page.locator("#contact").scrollIntoViewIfNeeded();
      const dimensions = await page.evaluate(() => ({
        scroll: document.documentElement.scrollWidth,
        client: document.documentElement.clientWidth,
      }));
      expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.client + 1);
      await page.screenshot({ path: `test-results/${name}.png`, fullPage: true });
    });
    test("navigation remains usable", async ({ page }) => {
      await page.goto("/", { waitUntil: "domcontentloaded" });
      const burger = page.locator(".px-nav .burger");
      if (viewport.width <= 820) {
        await expect(burger).toBeVisible();
        await burger.click();
        await expect(page.locator(".px-nav .nav-links")).toHaveClass(/open/);
        await page.locator(".px-nav .nav-links a[href='/#projects']").click();
        await expect(page.locator(".px-nav .nav-links")).not.toHaveClass(/open/);
      } else {
        await expect(page.locator(".px-nav .nav-links")).toBeVisible();
      }
    });
  });
}

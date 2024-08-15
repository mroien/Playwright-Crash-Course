import { test, expect } from '@playwright/test';

test('Open homepage and verify title', async ({page}) => {
    // test steps
    await page.goto('https://www.fifa.com/en');

    // verify Title
    await expect(page).toHaveTitle('FIFA | The Home of Football');
});

test('Verify logo is visible', async ({page}) => {
    await page.goto('https://www.fifa.com/en');
    const logo = page.locator('.global-menu-top-nav_logoMargin__eOPVH');

    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/en/home');
});
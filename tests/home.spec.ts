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

test('Verify text is valid on header', async ({page}) => {
    const expectedText = ['MATCH CENTRE', 'NEWS', 'RANKINGS'];
    await page.goto('https://www.fifa.com/en');

    // await page.waitForTimeout(3000);

    const navLinks = page.locator('.global-menu-top-nav_link__label__c40IU');
    // tool to dubug and pause the screen with inspector
    // can record and change library to test runner to copy the code
    // await page.pause();
    // waits for first Nav Link to be visible
    await expect(navLinks.first()).toBeVisible();
    expect(await navLinks.allInnerTexts()).toEqual(expectedText);
});


test('test', async ({ page }) => {
    await page.goto('https://www.fifa.com/en');
    // await page.waitForTimeout(3000);
    // await page.pause();
    // await page.getByRole('button', { name: 'Reject All' }).click();
    const reject = page.getByText('Reject All');
    await expect (reject.first()).toBeVisible();
    await page.getByRole('button', { name: 'Reject All' }).click();
    // await page.pause();
    await page.getByRole('link', { name: 'MATCH CENTRE' }).click();
    await expect (page.getByText('18 Aug').first()).toBeVisible();
    await page.getByText('18 Aug').click();
    await page.locator('section').filter({ hasText: 'Match CentreMENWOMENMatches' }).getByRole('checkbox').check();
    await page.getByRole('link', { name: 'FIFA', exact: true }).click();
  });
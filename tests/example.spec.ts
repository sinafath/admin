import baseUrl from '@/playwright/config';
import { test, expect } from '@playwright/test';

test('add product', async ({ page }, testInfo) => {
  await page.goto(baseUrl);
  await expect(page.getByRole('link', { name: 'اضافه کردن' })).toBeVisible();
  await page.getByRole('link', { name: 'اضافه کردن' }).click();
  await expect(page.getByText('ضافه کردن محصول')).toBeVisible();
  await page.getByPlaceholder('نام').fill("teting");
});
test('test add form product errors', async ({ page }) => {

});
test('test edit product', async ({ page }) => {

});

test('test delete product form errors', async ({ page }) => {

});
test('test delete product', async ({ page }) => {

});


import { test as setup, expect } from '@playwright/test';
import baseUrl, { email, password } from '../playwright/config';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page.getByText("به پنل ادمین خوش آمدید")).toBeVisible();
  await page.getByLabel('ایمیل').fill(email);
  await page.getByLabel('رمز عبور').fill(password);
  await page.getByRole('button', { name: 'ورود' }).click();
  await expect(page.getByText('محصولات')).toBeVisible();
  await page.context().storageState({ path: authFile });
});
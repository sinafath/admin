import { test as setup, expect } from '@playwright/test';
import baseUrl from '../playwright/config';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page.getByText("به پنل ادمین خوش آمدید")).toBeVisible();
  await page.getByLabel('ایمیل').fill('superAdmin@gmail.com');
  await page.getByLabel('رمز عبور').fill('123');
  await page.getByRole('button', { name: 'ورود' }).click();
  await expect(page.getByText('محصولات')).toBeVisible();
  await page.context().storageState({ path: authFile });
});
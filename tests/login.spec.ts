import test, { expect } from "@playwright/test";

test('Valid Login Test', async ({ page }) => {
    await page.goto("https://demo1.cybersoft.edu.vn/");

    //Step 1: Click Dang Nhap
    // await page.locator("//h3[text()='Đăng Nhập']").click();
    // await page.getByRole('link', { name: 'Đăng Nhập' }).click();
    let lnkLogin = page.getByRole('link', { name: 'Đăng Nhập' });
    await lnkLogin.click();

    //Step 2: Enter username
    await page.getByRole('textbox', { name: 'Tài Khoản' }).fill('Testaefad88de3ff4ca2b9d3679f1199415c');

    //Step 3: Enter password
    await page.getByRole('textbox', { name: 'Mật Khẩu' }).fill('Test123456@');

    //Step 4: Click Dang Nhap
    await page.getByRole('button', { name: 'Đăng nhập' }).click();

    //Step 5: Verify login successfully
    //VP1: "Dang nhap thanh cong" message display
    await expect(page.getByRole('heading', { name: 'Đăng nhập thành công' })).toBeVisible();

    //VP2: User profile displays
    await expect(page.getByRole('link', { name: 'Avatar John Kenny' })).toBeVisible();
})

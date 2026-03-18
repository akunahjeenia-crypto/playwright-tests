const {test}= require ('@playwright/test');

// INITIALISE CONTEXT, PAGE from browser object..............
// test('Open Google',async ({browser})=>
// {
//   const context=await browser.newContext();
//   const page=await context.newPage();
//   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
// });

//REtrive two objects "Browser" and "Page" from Playwright default..............
test('Open Google Two',async({browser,page})=>
{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
})
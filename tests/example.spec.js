const {test}= require ('@playwright/test');

// INITIALISE CONTEXT, PAGE from browser object..............
// test('Open Google',async ({browser})=>
// {
//   const context=await browser.newContext();
//   const page=await context.newPage();
//   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
// });

//REtrive two objects "Browser" and "Page" from Playwright default..............
test('Open Rahul Shetty Academy',async({browser,page})=>
{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
})
test.only('Open Google', async({page})=>{
await  page.goto('https://www.google.com/'); 
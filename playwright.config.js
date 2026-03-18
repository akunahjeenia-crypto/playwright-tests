// @ts-check
const{defineConfig, chromium}=require('@playwright/test');

const config=defineConfig({
testDir:'./tests',
timeout:40*1000,
use:{
  headless: true,
  browserName:'chromium'
},
reporter:'html'
})
module.exports = config;
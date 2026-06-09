const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  const errors = [];
  const logs = [];
  page.on('console', (msg) => {
    logs.push(`[${msg.type()}] ${msg.text()}`);
  });
  page.on('pageerror', (err) => {
    errors.push(`[pageerror] ${err.message}\n${err.stack ?? ''}`);
  });

  try {
    await page.goto('http://localhost:4200/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 2000));
    const homeLoaded = await page.evaluate(() => !!document.querySelector('app-home'));
    const heroLoaded = await page.evaluate(() => !!document.querySelector('app-hero'));
    const sections = await page.evaluate(() => ({
      hero: !!document.querySelector('app-hero'),
      about: !!document.querySelector('app-about'),
      skills: !!document.querySelector('app-skills'),
      projects: !!document.querySelector('app-projects'),
      experience: !!document.querySelector('app-experience'),
      testimonials: !!document.querySelector('app-testimonials'),
      contact: !!document.querySelector('app-contact'),
      debug: !!document.querySelector('div')?.textContent?.includes('HOME LOADED'),
    }));

    console.log('\n=== RENDER REPORT ===');
    console.log('homeLoaded:', homeLoaded);
    console.log('Sections:', JSON.stringify(sections, null, 2));
    console.log('\n=== BODY TEXT (first 2000) ===');
    console.log(bodyText);
    console.log('\n=== CONSOLE LOGS ===');
    logs.forEach((l) => console.log(l));
    console.log('\n=== PAGE ERRORS ===');
    errors.forEach((e) => console.log(e));
  } catch (e) {
    console.error('Test error:', e.message);
  } finally {
    await browser.close();
  }
})();

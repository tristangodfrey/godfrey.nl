import { test, expect } from '@playwright/test';

test.describe('Article Index Page', () => {
  test('should display the home page', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/@_tristangodfrey/);
  });

  test('should display articles', async ({ page }) => {
    await page.goto('/');

    const articles = page.locator('[data-test="article"]');
    await expect(articles).not.toHaveCount(0);
  });

  test('should display test articles with their titles', async ({ page }) => {
    await page.goto('/');

    const articleTitles = page.locator('[data-test="article-title"]');
    const titles = (await articleTitles.allTextContents()).map(t => t.trim());

    // Titles are humanized by Hugo (sentence case)
    expect(titles).toContain('Test article one');
    expect(titles).toContain('Test article two');
  });

  test('should display article dates', async ({ page }) => {
    await page.goto('/');

    const articleDates = page.locator('[data-test="article-date"]');
    const dates = (await articleDates.allTextContents()).map(d => d.trim());

    expect(dates).toContain('January 15, 2025');
    expect(dates).toContain('January 10, 2025');
  });

  test('should have article links pointing to correct URLs', async ({ page }) => {
    await page.goto('/');

    const articleOneLink = page.locator('[data-test="article-title"]', { hasText: 'Test article one' });
    const articleTwoLink = page.locator('[data-test="article-title"]', { hasText: 'Test article two' });

    await expect(articleOneLink).toHaveAttribute('href', /\/posts\/test\/test-article-one\//);
    await expect(articleTwoLink).toHaveAttribute('href', /\/posts\/test\/test-article-two\//);
  });

  test('should navigate to article page when clicking title', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="article-title"]', { hasText: 'Test article one' }).click();

    await expect(page).toHaveURL(/\/posts\/test\/test-article-one\//);
    await expect(page.locator('article h1')).toContainText('Test Article One');
  });

  test('should display articles in reverse chronological order', async ({ page }) => {
    await page.goto('/');

    const articleTitles = page.locator('[data-test="article-title"]');
    const titles = (await articleTitles.allTextContents()).map(t => t.trim());

    const articleOneIndex = titles.indexOf('Test article one');
    const articleTwoIndex = titles.indexOf('Test article two');

    // Article One (Jan 15) should appear before Article Two (Jan 10)
    expect(articleOneIndex).toBeLessThan(articleTwoIndex);
  });

  test('should have working navigation back to home from article', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="article-title"]', { hasText: 'Test article one' }).click();
    await expect(page).toHaveURL(/\/posts\/test\/test-article-one\//);

    // Navigate back home via "Back to posts" link
    await page.locator('a', { hasText: 'Back to posts' }).click();
    await expect(page).toHaveURL('/');
  });
});

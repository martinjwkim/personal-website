import puppeteer from 'puppeteer'
import { existsSync, mkdirSync, readdirSync } from 'fs'
import { join } from 'path'

const url = process.argv[2] || 'http://localhost:3002'
const label = process.argv[3] || ''
const dir = './temporary screenshots'

if (!existsSync(dir)) mkdirSync(dir)

const existing = readdirSync(dir).filter(f => f.endsWith('.png'))
const n = existing.length + 1
const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`
const outPath = join(dir, filename)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 2000))

const fullPage = process.argv[4] === 'full'
const scrollY = (!fullPage && process.argv[4]) ? parseInt(process.argv[4]) : 0

if (scrollY > 0) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollY)
  await new Promise(r => setTimeout(r, 1800))
}

await page.screenshot({ path: outPath, fullPage: fullPage })
await browser.close()

console.log(`Saved: ${outPath}`)

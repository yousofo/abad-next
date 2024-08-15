/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://abad-next.vercel.app',
  generateRobotsTxt: true, 
  changefreq: 'daily',
  priority: 0.7,
  // exclude: ['/admin/*', '/login'],
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://abad-next.vercel.app/my-custom-sitemap-1.xml',
  //   ],
  // },
}
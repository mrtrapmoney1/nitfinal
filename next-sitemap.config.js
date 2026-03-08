/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nebnit.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://nebnit.com/sitemap.xml'],
  },
  exclude: ['/api/*'],
};

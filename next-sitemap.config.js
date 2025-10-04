
module.exports = {
  siteUrl: 'https://www.avtradecorp.com', 
  generateRobotsTxt: true,
  sitemapSize: 5000,


  include: [
    '/',
    '/about',
    '/contact',
    '/products',
    '/categories',
    '/cart',
    '/checkout',
    '/privacy-policy',
    '/terms',
  ],


  exclude: [
    '/admin/*',
    '/api/*',
    '/dashboard/*',
    '/server-sitemap.xml',
  ],


  changefreq: 'weekly',
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/dashboard'],
      },
    ],
  },
};

const withPlugins = require('next-compose-plugins');

const sitemap = require('./plugins/sitemap');

module.exports = withPlugins([[sitemap]], {
	// By default, Next.js removes the trailing slash. One reason this would be good
	// to include is by default, the `path` property of the router for the homepage
	// is `/` and by using that, would instantly create a redirect

	trailingSlash: true,

	env: {
		WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
	},

	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
	},
});
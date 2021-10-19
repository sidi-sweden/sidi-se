const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'SIDI',
	dest: './public',
	themeConfig: {
		repo: 'https://github.com/urudaro/sidi-se',
		repoLabel: 'Repo',
		editLinks: false,
		editLinkText: 'Found a bug? Help me improve this page!',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'News', link: '/blog/' },
			// { text: 'Archive', link: '/archive/' },
			{ text: 'Projects',
			  ariaLabel: 'Info:',
			  items: [
					{text: 'Drugle', link: '/proj/drugle.md'},
					{text: 'Drugline', link: '/proj/drugline.md'},
					{text: 'BIKT', link: '/proj/bikt.md'}
				]},
			{ text: 'Contact', link: '/contact/' },
			{ text: 'About',
			  ariaLabel: 'Info:',
			  items: [
					{text: 'About us', link: '/about/'},
					{text: 'Statutes', link: '/about/statutes.md'}
				]}
		],
		logo: '/sidi-64x64.png',
		docsDir: 'src',
		pageSize: 10,
		startPage: 0
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-reading-time',
		'vuepress-plugin-janitor'
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon.png' }],
		['link', { rel: 'icon', sizes: '32x32', href: '/sidi-32x32.png' }],
		['link', { rel: 'icon', sizes: '16x16', href: '/sidi-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
		['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}

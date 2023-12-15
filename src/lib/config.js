/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 


export const siteTitle = 'ClientsHunter'
export const siteDescription = 'Start to master the art of sales'
export const siteURL = 'clientsHunter.co'
export const siteLink = 'https://github.com/cortescode/clientsHunter'
export const siteAuthor = '- Pablo Cortés'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'Contact us',
		route: '/contact' 
	},
]
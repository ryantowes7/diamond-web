/**
 * TypeScript-style interfaces exported as JSDoc types
 * Diamond Group - Data Models
 */

/**
 * @typedef {Object} NavLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} HeroData
 * @property {string} headline
 * @property {string} subheadline
 * @property {string} videoUrl
 * @property {string} fallbackImage
 * @property {Array<{label: string, href: string, variant: string}>} ctas
 */

/**
 * @typedef {Object} NewsArticle
 * @property {string} id
 * @property {string} title
 * @property {string} excerpt
 * @property {string} category
 * @property {string} date
 * @property {string} image
 * @property {boolean} featured
 */

/**
 * @typedef {Object} StatItem
 * @property {string} label
 * @property {number} value
 * @property {string} suffix
 */

/**
 * @typedef {Object} Development
 * @property {string} id
 * @property {string} name
 * @property {string} location
 * @property {string} description
 * @property {string} image
 * @property {boolean} featured
 * @property {string} type
 */

/**
 * @typedef {Object} ProductType
 * @property {string} id
 * @property {string} name
 * @property {string} tagline
 * @property {string} description
 * @property {Object} specs
 * @property {string} specs.buildingArea
 * @property {string} specs.landArea
 * @property {string} specs.bedrooms
 * @property {string} specs.bathrooms
 * @property {string[]} specs.facilities
 * @property {string} image
 */

/**
 * @typedef {Object} ContactInfo
 * @property {string} phone
 * @property {string} email
 * @property {string} whatsapp
 * @property {string} address
 * @property {string} mapEmbed
 */

export default {}
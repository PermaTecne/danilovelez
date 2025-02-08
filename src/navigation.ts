import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Acerca de', href: getPermalink('/#about') },
    { text: 'Publicaciones', href: getBlogPermalink() },
    { text: 'Contacto', href: getPermalink('/#contact') },
  ],
  actions: [{ text: '¡Contáctame!', href: getPermalink('/#contact'), target: '' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/bjgavilanes' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://sonlosgavilanes.com/">the great Gavilanes, the Magnificent</a> · All rights reserved.
  `,
};

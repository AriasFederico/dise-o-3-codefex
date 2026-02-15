import galeria_1 from '../assets/galeria/1.jpg';
import galeria_2 from '../assets/galeria/2.jpg';
import galeria_3 from '../assets/galeria/3.jpg';
import galeria_4 from '../assets/galeria/4.jpg';
import galeria_5 from '../assets/galeria/5.jpg';
import galeria_6 from '../assets/galeria/6.jpg';

import acerca from '../assets/imagenes/about.png';

export const global = {
	logo: {
		imagen: 'Style & Shape',
		altText: '',
		url: '#',
	},

	header: {
		navLinks: [
			{ label: 'Home', url: '#hero' },
			{ label: 'Products', url: '#products' },
			{ label: 'About Us', url: '#about' },
		],
	},

	principal: {
		titulo: 'Nails that Shine bright',
		texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
	},

	titulo_servicios_productos: {
		titulo: 'Servicios',
	},

	acerca: {
		imagen: acerca,
		titulo: 'About us',
		texto:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},

	galeria: {
		titulo: 'Galery',
		imagenes: [
			galeria_1,
			galeria_2,
			galeria_3,
			galeria_4,
			galeria_5,
			galeria_6,
		],
	},

	visitanos: {
		titulo: 'Visit Us',
		info: [
			{
				titulo: 'LOCATION',
				icono: 'location-outline',
				texto: '123 Coffee Street Downtown, City 12345',
			},
			{
				titulo: 'CONTACT',
				icono: 'call-outline',
				texto: 'Mon-Fri: 6:00 AM 8:00 PM Weekends: 7:00 AM - 9:00 PM',
			},
			{
				titulo: 'HOURS',
				icono: 'time-outline',
				texto: '+1 (555) 123-BREW hello@brewandbean.com',
			},
		],
	},

	footer: {
		frase: 'Nails that Shine bright',
		redes: [
			{
				nombre: 'Instagram',
				url: 'https://codefex.site/',
				icono: 'logo-instagram',
			},
			{
				nombre: 'Facebook',
				url: 'https://codefex.site/',
				icono: 'logo-facebook',
			},
			{
				nombre: 'Twitter',
				url: 'https://codefex.site/',
				icono: 'logo-twitter',
			},
		],
	},
};

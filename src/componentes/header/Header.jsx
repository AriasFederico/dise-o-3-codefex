import { useEffect, useState } from 'react';
import { global } from '../../data/global.js';
import { Boton, Nav } from '../ui';
import estilos from './Header.module.scss';

export const Header = () => {
	const { header, logo } = global;
	const { navLinks } = header;
	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1280) {
				setMenuActive(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className={estilos.header}>
			<div className={estilos.contenedor}>
				<a href={logo.url} className={estilos.contenedor__logo}>
					{logo.imagen}
				</a>
				<Nav
					navigationLinks={navLinks}
					onCloseMenu={() => setMenuActive(false)}
					menuActive={menuActive}
				/>
				<button
					className={estilos.burger}
					onClick={() => setMenuActive(!menuActive)}
				>
					<ion-icon name={'menu-outline'}></ion-icon>
				</button>
				<div className={estilos.botonHeader}>
					<Boton text={'Visit us'} url={'#acerca'} />
				</div>
			</div>
		</header>
	);
};

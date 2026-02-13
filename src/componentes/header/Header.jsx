import estilos from  './Header.module.scss';
import { useState, useEffect } from 'react';
import { Nav,Boton } from '../ui';
import { global } from '../../data/global.js';

export const Header = () => {
	const {header, logo} = global;
	const {navLinks} = header;
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
				<Boton text={'Visit us'} />
			</div>
		</header>
	);
};
import estilos from './Nav.module.scss';

export const Nav = ({ navigationLinks, onCloseMenu, menuActive }) => {
	return (
		<nav className={`${estilos.nav} ${menuActive ? estilos.nav__mobile : ''}`}>
			<ol className={estilos.ol}>
				{navigationLinks?.map(({ label, url }) => (
					<li key={label} className={estilos.ol__li}>
						<a href={url} onClick={onCloseMenu} className={estilos.a}>
							{label}
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
};
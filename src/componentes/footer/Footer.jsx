import { LinkSocial } from '../ui';
import estilos from './Footer.module.scss';
export const Footer = ({ data, logo }) => {
	return (
		<footer className={estilos.footer}>
			<div className={estilos.contenedor}>
				<div className={estilos.logo_frase}>
					<a href={logo.url} className={estilos.logo}>
						{logo.imagen}
					</a>
					<p className={estilos.frase}>{data.frase}</p>
				</div>
				<div className={estilos.links}>
					{data.redes?.map(({ icono, nombre, url }) => (
						<LinkSocial icono={icono} nombre={nombre} url={url} key={nombre} />
					))}
				</div>
				<a href={'https://codefex.site/'} className={estilos.credito}>
					Web creada por Codefex
				</a>
			</div>
		</footer>
	);
};

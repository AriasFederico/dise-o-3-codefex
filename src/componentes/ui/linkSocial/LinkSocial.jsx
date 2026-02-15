import estilos from './LinkSocial.module.scss';
export const LinkSocial = ({ icono, url, nombre }) => {
	return (
		<div className={estilos.linkSocial}>
			<ion-icon name={icono} />
			<a href={url} className={estilos.link}>
				{nombre}
			</a>
		</div>
	);
};

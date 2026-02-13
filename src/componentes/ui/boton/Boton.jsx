import estilos from './Boton.module.scss';

export const Boton = ({ text, url, variant = 'primario' }) => {
	return (
		<button className={estilos[variant]}>
			<a
				href={url}
			>
				{text}
			</a>
		</button>
	);
};
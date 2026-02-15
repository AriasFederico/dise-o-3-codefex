import estilos from './Boton.module.scss';

export const Boton = ({ text, url = null, variant = 'primario', onClick }) => {
	return (
		<button className={estilos[variant]} onClick={onClick}>
			<a href={url} className={estilos.a}>
				{text}
			</a>
		</button>
	);
};

import estilos from './Acerca.module.scss';
export const Acerca = ({ data }) => {
	return (
		<div className={estilos.acerca}>
			<div className={estilos.contenedor}>
				<h2 className={estilos.titulo}>{data.titulo}</h2>
				<div className={estilos.contenido}>
					<img
						src={data.imagen}
						alt={data.titulo}
						className={estilos.contenido__imagen}
					/>
					<p className={estilos.contenido__texto}>{data.texto}</p>
				</div>
			</div>
		</div>
	);
};

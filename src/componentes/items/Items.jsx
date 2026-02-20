import estilos from './Items.module.scss';
export const Items = ({ imagen, nombre, texto, id }) => {
	return (
		<div
			className={`${estilos.items} ${id % 2 === 0 ? estilos.reverse : estilos.row}`}
		>
			<img
				src={imagen}
				alt={nombre}
				className={`${estilos.imagen} ${id % 2 === 0 ? estilos.reverse : estilos.row}`}
			/>
			<div className={estilos.contenido}>
				<span className={estilos.contenido__id}>0{id}</span>
				<span className={estilos.contenido__titulo}>{nombre}</span>
				<p className={estilos.contenido__texto}>{texto}</p>
			</div>
		</div>
	);
};

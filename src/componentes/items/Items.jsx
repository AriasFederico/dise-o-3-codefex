import estilos from './Items.module.scss';
export const Items = ({ imagen, nombre, texto }) => {
	return (
		<div className={estilos.items}>
			<img src={imagen} alt={nombre} className={estilos.imagen} />
			<div className={estilos.contenido}>
				<span className={estilos.contenido__titulo}>{nombre}</span>
				<p className={estilos.contenido__texto}>{texto}</p>
			</div>
		</div>
	);
};

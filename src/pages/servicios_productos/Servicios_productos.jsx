import { Items } from '../../componentes';
import estilos from './Servicios_productos.module.scss';

export const Servicios_productos = ({ data, items }) => {
	return (
		<div className={estilos.servicios_productos}>
			<div className={estilos.contenedor}>
				<h2 className={estilos.contenedor__titulo}>{data.titulo}</h2>

				<div className={estilos.contenedor__items}>
					{items?.map(({ imagen, nombre, texto }) => (
						<Items key={nombre} imagen={imagen} nombre={nombre} texto={texto} />
					))}
				</div>
			</div>
		</div>
	);
};

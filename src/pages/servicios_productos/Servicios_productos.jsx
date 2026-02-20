import { Items } from '../../componentes';
import { Titulo_Seccion } from '../../componentes/ui/';
import estilos from './Servicios_productos.module.scss';

export const Servicios_productos = ({ data, items }) => {
	return (
		<div className={estilos.servicios_productos} id='servicios'>
			<div className={estilos.contenedor}>
				<Titulo_Seccion texto={data.titulo} />

				<div className={estilos.contenedor__items}>
					{items?.map(({ imagen, nombre, texto, id }) => (
						<Items
							key={nombre}
							imagen={imagen}
							nombre={nombre}
							texto={texto}
							id={id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

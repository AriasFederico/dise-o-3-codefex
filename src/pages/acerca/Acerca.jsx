import { Titulo_Seccion } from '../../componentes/ui';
import estilos from './Acerca.module.scss';
export const Acerca = ({ data }) => {
	return (
		<div className={estilos.acerca} id='acerca'>
			<div className={estilos.contenedor}>
				<Titulo_Seccion texto={data.titulo} />
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

import { Titulo_Seccion } from '../../componentes/ui';
import estilos from './Galeria.module.scss';
export const Galeria = ({ data }) => {
	return (
		<div className={estilos.galeria}>
			<div className={estilos.contenedor}>
				<Titulo_Seccion texto={data.titulo} />
				<div className={estilos.contenido}>
					{data.imagenes?.map((e, index) => (
						<a
							href={e}
							key={index}
							className={estilos.linkImagen}
							target='blank'
						>
							<img src={e} alt={index} className={estilos.imagen} />
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

import { motion } from 'framer-motion';
import { Titulo_Seccion } from '../../componentes/ui';
import estilos from './Galeria.module.scss';
export const Galeria = ({ data }) => {
	return (
		<div className={estilos.galeria} id='galeria'>
			<div className={estilos.contenedor}>
				<Titulo_Seccion texto={data.titulo} />
				<div className={estilos.contenido}>
					{data.imagenes?.map((e, index) => (
						<motion.a
							href={e}
							key={index}
							className={estilos.linkImagen}
							target='blank'
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						>
							<img src={e} alt={index} className={estilos.imagen} />
						</motion.a>
					))}
				</div>
			</div>
		</div>
	);
};

import { motion } from 'framer-motion';
import { Titulo_Seccion } from '../../componentes/ui';
import estilos from './Acerca.module.scss';
export const Acerca = ({ data }) => {
	return (
		<div className={estilos.acerca} id='acerca'>
			<motion.div
				className={estilos.contenedor}
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<Titulo_Seccion texto={data.titulo} />
				<div className={estilos.contenido}>
					<img
						src={data.imagen}
						alt={data.titulo}
						className={estilos.contenido__imagen}
					/>
					<p className={estilos.contenido__texto}>{data.texto}</p>
				</div>
			</motion.div>
		</div>
	);
};

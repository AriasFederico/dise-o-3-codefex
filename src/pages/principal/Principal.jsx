import { motion } from 'framer-motion';
import { Boton } from '../../componentes/ui';
import estilos from './Principal.module.scss';
export const Principal = ({ data }) => {
	const handleWhatsApp = () => {
		window.open(`https://wa.me/${data.numeroContacto}`, '_blank');
	};

	return (
		<div className={estilos.principal} id='principal'>
			<motion.div
				className={estilos.contenedor}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<h1 className={estilos.titulo}>{data.titulo}</h1>
				<p className={estilos.texto}>{data.texto}</p>
				<Boton text={'CONTACT US'} onClick={handleWhatsApp} />
			</motion.div>
		</div>
	);
};

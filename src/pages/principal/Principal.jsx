import { Boton } from '../../componentes/ui';
import estilos from './Principal.module.scss';
export const Principal = ({ data }) => {
	const handleWhatsApp = () => {
		window.open(`https://wa.me/${data.numeroContacto}`, '_blank');
	};

	return (
		<div className={estilos.principal} id='principal'>
			<div className={estilos.contenedor}>
				<h1 className={estilos.titulo}>{data.titulo}</h1>
				<p className={estilos.texto}>{data.texto}</p>
				<Boton
					text={'Contact'}
					onClick={console.log('agrega el numero en el global')}
				/>
			</div>
		</div>
	);
};

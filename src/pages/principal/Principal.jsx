import { Boton } from '../../componentes/ui';
import estilos from './Principal.module.scss';
export const Principal = ({ data }) => {
	return (
		<div className={estilos.principal}>
			<div className={estilos.contenedor}>
				<h1 className={estilos.titulo}>{data.titulo}</h1>
				<p className={estilos.texto}>{data.texto}</p>
				<Boton text={'Contact'} />
			</div>
		</div>
	);
};

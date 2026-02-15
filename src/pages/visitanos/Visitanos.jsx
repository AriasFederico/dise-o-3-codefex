import { InfoVisita, Titulo_Seccion } from '../../componentes/ui';
import estilos from './Visitanos.module.scss';

export const Visitanos = ({ data }) => {
	return (
		<div className={estilos.visitanos} id='visitanos'>
			<div className={estilos.contenedor}>
				{/* <Titulo_Seccion texto={data.titulo} /> */}
				<div className={estilos.contenido}>
					{data.info?.map(({ titulo, texto, icono }) => (
						<InfoVisita
							key={titulo}
							titulo={titulo}
							texto={texto}
							icono={icono}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

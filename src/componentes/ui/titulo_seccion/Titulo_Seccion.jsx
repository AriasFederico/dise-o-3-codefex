import estilos from './Titulo_Seccion.module.scss';
export const Titulo_Seccion = ({ texto }) => {
	return <h2 className={estilos.titulo}>{texto}</h2>;
};

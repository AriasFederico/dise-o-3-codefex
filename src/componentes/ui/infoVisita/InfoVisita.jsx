import estilos from './InfoVisita.module.scss';
export const InfoVisita = ({ icono, titulo, texto }) => {
	return (
		<div className={estilos.infoVisita}>
			<ion-icon name={icono} />
			<div className={estilos.info}>
				<h3>{titulo}</h3>
				<p>{texto}</p>
			</div>
		</div>
	);
};

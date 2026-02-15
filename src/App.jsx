import './App.scss';
import { Footer, Header } from './componentes/';
import { global } from './data/global';
import { productos_servicios } from './data/productos_servicios';
import {
	Acerca,
	Galeria,
	Principal,
	Servicios_productos,
	Visitanos,
} from './pages';

function App() {
	const {
		logo,
		principal,
		titulo_servicios_productos,
		acerca,
		galeria,
		visitanos,
		footer,
	} = global;
	return (
		<div className='app'>
			<Header />
			<div className='app__contenedor'>
				<Principal data={principal} />
				<Servicios_productos
					data={titulo_servicios_productos}
					items={productos_servicios}
				/>
				<Acerca data={acerca} />
				<Visitanos data={visitanos} />
				<Galeria data={galeria} />
				<Footer data={footer} logo={logo} />
			</div>
		</div>
	);
}
export default App;

import './App.scss';
import { Header } from './componentes/';
import { global } from './data/global';
import { productos_servicios } from './data/productos_servicios';
import { Acerca, Principal, Servicios_productos } from './pages';

function App() {
	const { principal, titulo_servicios_productos, acerca } = global;
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
				asdasd
			</div>
		</div>
	);
}

export default App;

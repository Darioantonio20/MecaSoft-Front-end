import NavBar from "../atoms/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const data = [
    { id: 1, first: 'Mark', last: 'Otto', jointPiloting: 'Data', cartesianPiloting: 'Data' },
    { id: 2, first: 'Genaroooooo', last: 'Thornton', jointPiloting: 'Data', cartesianPiloting: 'Data' },
    { id: 3, first: 'Genaroooooo', last: 'Thornton', jointPiloting: 'Data', cartesianPiloting: 'Data' },
];

function Solicitudes() {
    return (
        <>
            <NavBar/>
            <h1 className="text-center mt-5 mb-5">Historial</h1>
            <div className="row">
                <div className="col-10 mx-auto d-block">
                    <table className="table table-striped table-bordered shadow" style={{borderRadius: '50px'}}>
                        <thead>
                            <tr>
                                <th scope="col">Usuario</th>
                                <th scope="col">Pilotaje Articular</th>
                                <th scope="col">Pilotaje Cartesiano</th>
                                <th scope="col" className="text-center">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr className={index % 2 === 0 ? 'table-danger' : 'table-light'} key={item.id}>
                                    <td>{item.first}</td>
                                    <td>{item.jointPiloting}</td>
                                    <td>{item.cartesianPiloting}</td>
                                    <td className="text-center">
                                        <button className="" style={{border: 'none', backgroundColor: 'transparent'}}>
                                            <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#00ff00"}}/>
                                        </button>
                                        <button className="" style={{border: 'none', backgroundColor: 'transparent'}}>
                                            <FontAwesomeIcon icon={faTimes} size="2xl" style={{color: "#ff0000"}}/>
                                        </button>
                                    </td>                              
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Solicitudes;
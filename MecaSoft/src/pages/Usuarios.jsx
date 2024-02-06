import NavBar from "../atoms/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const data = [
    { id: 1, first: 'Mark', last: 'Otto' },
    { id: 2, first: 'Genaroooooo', last: 'Thornton'},
    { id: 3, first: 'Genaroooooo', last: 'Thornton'},
];

function App() {
    return (
        <>
            <NavBar/>
            <h1 className="text-center mt-5 mb-5">Usuarios</h1>
            <div className="row">
                <div className="col-10 mx-auto d-block">
                    <table className="table table-striped table-bordered shadow" style={{borderRadius: '50px'}}>
                        <thead>
                            <tr>
                                <th scope="col">Noº</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Usuario</th>
                                <th scope="col" className="d-flex justify-content-center align-items-center">
                                    <button className="" style={{border: 'none', backgroundColor: 'transparent'}}>
                                        <FontAwesomeIcon icon={faDownload} fade size="xl" style={{color: "#000000"}}/> PDF
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr className={index % 2 === 0 ? 'table-danger' : 'table-light'} key={item.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.first}</td>
                                    <td>{item.last}</td>
                                    <td className="text-center">
                                        <button className="" style={{border: 'none', backgroundColor: 'transparent'}}>
                                            <FontAwesomeIcon icon={faTrash} bounce size="lg" style={{color: "#f90b0b"}}/>
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

export default App;
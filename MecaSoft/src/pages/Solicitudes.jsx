import NavBar from "../atoms/NavBar";

const data = [
    { id: 1, first: 'Mark', last: 'Otto', jointPiloting: 'Data', cartesianPiloting: 'Data', date: 'Date' },
    { id: 2, first: 'Genaroooooo', last: 'Thornton', jointPiloting: 'Data', cartesianPiloting: 'Data', date: 'Date' },
    { id: 3, first: 'Genaroooooo', last: 'Thornton', jointPiloting: 'Data', cartesianPiloting: 'Data', date: 'Date' },
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
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr className={index % 2 === 0 ? 'table-danger' : 'table-light'} key={item.id}>
                                    <td>{item.first}</td>
                                    <td>{item.jointPiloting}</td>
                                    <td>{item.cartesianPiloting}</td>
                                    <td>{item.date}</td>                              
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
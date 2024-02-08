import React, { useEffect, useState } from "react";
import NavBar from "../atoms/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Solicitudes() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:8080/api/data")
      .then((response) => response.json())
      .then((data) => setData(data.datos));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id) => {
    fetch("http://localhost:8080/api/data", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        fetchData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCheckClick = (item) => {
    const text = `valorX=${item.valorX}|valorY=${item.valorY}|valorZ=${item.valorZ}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "coordenadas.txt";
    link.click();
  };

  return (
    <>
      <NavBar />
      <h1 className="text-center mt-5 mb-5">Solicitudes</h1>
      <div className="row">
        <div className="col-10 mx-auto d-block">
          <table
            className="table table-striped table-bordered shadow"
            style={{ borderRadius: "50px" }}
          >
            <thead>
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Eje X</th>
                <th scope="col">Eje Y</th>
                <th scope="col">Eje Z</th>
                <th scope="col">Pilotaje Cartesiano</th>
                <th scope="col" className="text-center">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  className={index % 2 === 0 ? "table-danger" : "table-light"}
                  key={item._id}
                >
                  <td>
                    {item.idUser
                      ? `${item.idUser.nombre} (${item.idUser.correo})`
                      : "Usuario no disponible"}
                  </td>
                  <td>{item.valorX}</td>
                  <td>{item.valorY}</td>
                  <td>{item.valorZ}</td>
                  <td>{item.cartesianPiloting}</td>
                  <td className="text-center">
                    <button
                      className=""
                      style={{ backgroundColor: "white", borderRadius: "1rem" }}
                      onClick={() => handleCheckClick(item)}
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        size="2xl"
                        style={{ color: "#00ff00" }}
                      />
                    </button>
                    <button
                      className=""
                      style={{ backgroundColor: "white", borderRadius: "1rem" }}
                      onClick={() => handleClick(item._id)}
                    >
                      <FontAwesomeIcon
                        icon={faTimes}
                        size="2xl"
                        style={{ color: "#ff0000" }}
                      />
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

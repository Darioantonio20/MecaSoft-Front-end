import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../atoms/NavBar";
import ImgLogoMecaSoftUp from "../assets/img/logoMecaSoftUp.png";
import ImgFormLadoDerechoRegistro from "../assets/img/imgFormLadoDerechoRegistro.svg";
import Swal from 'sweetalert2'
import "../assets/style/Forms.css";
import "../assets/style/Reloader.css";

function Registro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [matricula, setMatricula] = useState("");

  const redirectToLogin = () => {
    navigate("/inicioDeSesion");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        correo: correo,
        password: password,
        user: user,
        matricula: matricula,
        rol: "USER_ROL",
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setIsLoading(false);
      Swal.fire({
        icon: "success",
        title: "Datos correctos",
        text: "Resgistro exitoso, bienvenido a MecaSoft",
      });
      
      redirectToLogin();
    } else {
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Datos incorrectos',
    });
   
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="loading-overlay">
          <div className="gearbox">
            <div className="gear one">
              <div className="gear-inner">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <div className="gear two">
              <div className="gear-inner">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <div className="gear three">
              <div className="gear-inner">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <div className="gear four large">
              <div className="gear-inner">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <div className="h-100 gradient-form divPadre">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                  <div className="card rounded-3 text-black">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">
                          <div className="text-center">
                            <img
                              src={ImgLogoMecaSoftUp}
                              loading="lazy"
                              width={185}
                              alt="logo"
                            />
                            <h4 className="mt-1 mb-5 pb-1 typing-effect">
                              Llene el siguiente formulario.
                            </h4>
                          </div>
                          <form onSubmit={handleSubmit}>
                            <div className="form__group_one mt-5 mb-5">
                              <input
                                type="text"
                                className="form__group_oneform__field w-100"
                                placeholder="Input text"
                                required
                                onChange={(e) => setNombre(e.target.value)}
                              />
                              <label
                                for="name"
                                className="form__group_oneform__label"
                              >
                                {" "}
                                Nombre completo{" "}
                              </label>
                            </div>
                            <div className="form__group_one mt-5 mb-5">
                              <input
                                type="text"
                                className="form__group_oneform__field w-100"
                                placeholder="Input text"
                                required
                                onChange={(e) => setUser(e.target.value)}
                              />
                              <label
                                for="name"
                                className="form__group_oneform__label"
                              >
                                {" "}
                                Nombre de usuario{" "}
                              </label>
                            </div>
                            <div className="form__group_one mt-5 mb-5">
                              <input
                                type="email"
                                className="form__group_oneform__field w-100"
                                placeholder="Input text"
                                required
                                onChange={(e) => setCorreo(e.target.value)}
                              />
                              <label
                                for="name"
                                className="form__group_oneform__label"
                              >
                                {" "}
                                Correo electrónico{" "}
                              </label>
                            </div>
                            <div className="form__group_one mt-5 mb-5">
                              <input
                                type="number"
                                className="form__group_oneform__field w-100"
                                placeholder="Input text"
                                required
                                onChange={(e) => setMatricula(e.target.value)}
                              />
                              <label
                                for="name"
                                className="form__group_oneform__label"
                              >
                                {" "}
                                Matrícula{" "}
                              </label>
                            </div>
                            <div className="form__group_one mt-5 mb-5">
                              <input
                                type="text"
                                className="form__group_oneform__field w-100"
                                placeholder="Input text"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label
                                for="name"
                                className="form__group_oneform__label"
                              >
                                {" "}
                                Contraseña{" "}
                              </label>
                            </div>
                            <div className="form__group_one mb-5">
                              <input
                                type="text"
                                className="form__group_oneform__field w-100"
                                placeholder="Input text"
                                required
                              />
                              <label
                                for="name"
                                className="form__group_oneform__label"
                              >
                                {" "}
                                Confirmar contraseña{" "}
                              </label>
                            </div>
                            {/*<div className="text-center pt-1 mb-5 pb-1">
                                                    <a className="text-muted" href="#!">Olvidaste tu contraseña?</a>
                                                </div>*/}
                            <div className="text-center d-flex justify-content-center mt-5 mb-5">
                              <button
                                style={{
                                  border: "none",
                                  backgroundColor: "transparent",
                                }}
                              >
                                <div className="container-button mt-3">
                                  <div className="hover bt-1"></div>
                                  <div className="hover bt-2"></div>
                                  <div className="hover bt-3"></div>
                                  <div className="hover bt-4"></div>
                                  <div className="hover bt-5"></div>
                                  <div className="hover bt-6"></div>
                                  <button className="buttonForm"></button>
                                </div>
                              </button>
                            </div>
                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <p className="mb-0 me-2">Ya tienes cuenta?</p>
                              <button
                                onClick={redirectToLogin}
                                type="button"
                                className="btn btn-outline-danger"
                              >
                                Inicia sesión
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center justify-content-center gradient-custom-2 red-background">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4 text-center">
                          <h1 className="mb-4 display-6 display-md-5 display-lg-4">
                            MecaSoft
                          </h1>
                          <p className="animated-text mb-0 fs-5 fs-md-4 fs-lg-3">
                            Innovación impulsa la creación, y juntos conducen al
                            éxito.
                          </p>
                          <img
                            src={ImgFormLadoDerechoRegistro}
                            loading="lazy"
                            className="img-fluid"
                            width={500}
                            alt="Img Form"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Registro;

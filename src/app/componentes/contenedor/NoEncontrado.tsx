import { NavLink } from "react-router-dom";

export const NoEncontrado = () => {
  return (
    <>
      <div className="p-5 mb-4 text-white bg-dark">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">¡Oops! Página no encontrada</h1>
          <p className="col-md-8 fs-4">
            Parece que te has perdido en el camino. No te preocupes, ¡te
            ayudaremos a encontrar el ritmo!
          </p>
          <NavLink to="/" className="btn btn-primary btn-lg" type="button">
            Volver al inicio
          </NavLink>
        </div>
      </div>
    </>
  );
};

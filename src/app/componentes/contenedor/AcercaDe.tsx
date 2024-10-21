import { NavLink } from "react-router-dom";

export const AcercaDe = () => {
  return (
    <>
      <div className="p-5 mb-4 text-white bg-dark">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Acerca de Conciertos Star</h1>
          <p className="col-md-8 fs-4">
            Conciertos Star es una plataforma online que busca conectar a los
            amantes de la música con los mejores eventos en vivo. Nuestra misión
            es facilitar el acceso a la cultura musical, ofreciendo una
            cartelera completa de conciertos, un sistema de compra de entradas
            seguro y perfiles de artistas con información detallada.
          </p>
          <NavLink to="#" className="btn btn-primary btn-lg" type="button">
            Contáctanos
          </NavLink>
        </div>
      </div>
    </>
  );
};

export const Inicio = () => {
  return (
    <>
      <div className="p-5 mb-4 text-white bg-dark">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            ¡Vive la música en Conciertos Star!
          </h1>
          <p className="col-md-8 fs-4">
            Encuentra los mejores eventos musicales en tu ciudad. Descubre
            artistas, compra tus entradas y gestiona tus conciertos favoritos,
            todo en un solo lugar. ¡Conciertos Star te conecta con la música que
            te apasiona!
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Explorar Conciertos
          </button>
        </div>
      </div>

      <div className="row px-5">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">¿Eres un artista?</h5>
              <p className="card-text">
                Regístrate en Conciertos Star y da a conocer tu música a miles
                de fans. Crea tu perfil, sube tus canciones y conéctate con
                nuevas oportunidades.
              </p>
              <a href="/artiscre" className="btn btn-primary">
                Crear Perfil
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">¿Buscas un concierto?</h5>
              <p className="card-text">
                Explora nuestra cartelera de eventos y encuentra los mejores
                conciertos en tu ciudad. Filtra por género, artista o fecha y
                compra tus entradas de forma segura.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Conciertos
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ConciertoCrear = () => {
    return (
      <>
        <div className="pt-5 d-flex justify-content-center">
          <div className="col-md-8">
            <form className="row g-3 needs-validation">
              <div className="col-md-6 position-relative">
                <label htmlFor="marc" className="form-label">
                  Nombre Del Concierto
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="marc"
                  name="marc"
                  required
                />
              </div>
  
              <div className="col-md-6 position-relative">
                <label htmlFor="colo" className="form-label">
                  Tipo De concierto
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="colo"
                  name="colo"
                  required
                />
              </div>
  
              <div className="col-md-6 position-relative">
                <label htmlFor="preci" className="form-label">
                  Precio De La Entrada
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="preci"
                  name="preci"
                  required
                />
              </div>
  
              <div className="col-md-6 position-relative">
                <label htmlFor="tall" className="form-label">
                  Capasisas Maxima Del Sito Del Concierto
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="preci"
                  name="preci"
                  required
                />
              </div>
  
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Registrar Concierto
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
  
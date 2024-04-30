import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { ConciertoCrear } from "../../componentes/conisertos/ConciertoCrear";
import { ConciertoListar } from "../../componentes/conisertos/ConciertoLista";
import { ConciertoAdmin } from "../../componentes/conisertos/ConciertoAdmin";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/concre" element={<ConciertoCrear />} />
      <Route path="/conlis" element={<ConciertoListar />} />
      <Route path="/conadm" element={<ConciertoAdmin />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};

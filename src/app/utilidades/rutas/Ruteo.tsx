import { Route, Routes } from "react-router-dom"
import { Inicio } from "../../componentes/contenedor/Inicio"
import { ArtistaCrear } from "../../componentes/artistas/ArtistaCrear"
import { ArtistaListar } from "../../componentes/artistas/ArtistaListar"
import { ArtistaAdmin } from "../../componentes/artistas/ArtistaAdmin"
import { AcercaDe } from "../../componentes/contenedor/AcercaDe"
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado"

export const Ruteo = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Inicio/> } />

                <Route path="/artista-crear" element={ <ArtistaCrear/> } />
                <Route path="/artista-listar" element={ <ArtistaListar/> } />
                <Route path="/artista-admin" element={ <ArtistaAdmin/> } />

                <Route path="/acerca-de" element={ <AcercaDe/> } />

                <Route path="*" element={ <NoEncontrado />} />
            </Routes>
        </>
    )
}
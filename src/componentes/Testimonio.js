import React from 'react'; // A partir del año 2020, la versión de React 17, se hizo un cambio que no requiere que importemos React explícitamente.
                           // Solo es obligatorio si  usamos ciertos elementos de React específicos como por ejemplo los hooks
import '../hojas-de-estilo/Testimonio.css' // En este import sí colocamos la extensión porque en caso contrario
                                            // React asumiría que es un archivo JavaScript si no lo escribimos.

// Un componente funcional de React retorna un elemento JSX
// En este archivo pudimos haber usado la extensión jsx en lugar de js y aún así funcionaría

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
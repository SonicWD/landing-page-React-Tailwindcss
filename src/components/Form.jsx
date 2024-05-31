/** @jsxImportSource react */
import React from 'react';

function Form() {
  return (
    <aside className="bg-white p-5 m-2.5 rounded-lg">
      <form action="">
        <fieldset>
          <legend>Información Personal</legend>
          <input type="text" placeholder="Nombre y apellido" required />
          <input type="email" placeholder="Email" required />
          <label htmlFor="birthdate">
            Fecha de nacimiento
            <input type="date" id="birthdate" required />
          </label>
          <label htmlFor="gender-male">
            <input
              type="radio"
              id="gender-male"
              name="gender"
              value="male"
              defaultChecked
            />{' '}
            Hombre
          </label>
          <label htmlFor="gender-female">
            <input type="radio" id="gender-female" name="gender" value="female" />{' '}
            Mujer
          </label>
          <label htmlFor="gender-other">
            <input type="radio" id="gender-other" name="gender" value="other" />{' '}
            Otro
          </label>
        </fieldset>
        <fieldset>
          <legend>Acerca del Producto</legend>
          <label htmlFor="favorite-product">
            El producto que más te gustó
            <input type="text" id="favorite-product" required />
          </label>
          <label htmlFor="rating">
            De 1 a 5, ¿qué tanto recomendarías el producto?
            <input type="number" id="rating" min="1" max="5" required />
          </label>
          <input type="submit" value="Enviar" />
        </fieldset>
      </form>
    </aside>
  );
}

export default Form;

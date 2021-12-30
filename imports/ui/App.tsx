import React from 'react';

export const App = () => (
  <main>
    <section id="form-section">
      <form>
        <div className="form-group">
          <label htmlFor="nombres">Nombres</label>
          <input type="text" id="nombres" placeholder="Nombres"/>
        </div>
        <div className="form-group">
          <label htmlFor="ap-pat">Apellido Paterno</label>
          <input type="text" id="ap-pat" placeholder="Apellido Paterno"/>
        </div>
        <div className="form-group">
          <label htmlFor="ap-mat">Apellido Materno</label>
          <input type="text" id="ap-mat" placeholder="Apellido Materno"/>
        </div>
        <div className="form-group">
          <label htmlFor="rut">RUT</label>
          <input type="text" id="rut" placeholder="RUT"/>
        </div>
        <div className="form-group">
            <label htmlFor="region">Región</label>
            <select name="region" id="region">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comuna">Comuna</label>
            <select name="comuna" id="comuna">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
      </form>
    </section>
    <section id="data-section">
      <table>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>RUT</th>
            <th>Región</th>
            <th>Comuna</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vicente Manuel</td>
            <td>Aranda</td>
            <td>Ahumada</td>
            <td>20.427.305-7</td>
            <td>Metropolitana</td>
            <td>Peñaflor</td>
          </tr>
          <tr>
            <td>Vicente Manuel</td>
            <td>Aranda</td>
            <td>Ahumada</td>
            <td>20.427.305-7</td>
            <td>Metropolitana</td>
            <td>Peñaflor</td>
          </tr>
          <tr>
            <td>Vicente Manuel</td>
            <td>Aranda</td>
            <td>Ahumada</td>
            <td>20.427.305-7</td>
            <td>Metropolitana</td>
            <td>Peñaflor</td>
          </tr>
          <tr>
            <td>Vicente Manuel</td>
            <td>Aranda</td>
            <td>Ahumada</td>
            <td>20.427.305-7</td>
            <td>Metropolitana</td>
            <td>Peñaflor</td>
          </tr>
          <tr>
            <td>Vicente Manuel</td>
            <td>Aranda</td>
            <td>Ahumada</td>
            <td>20.427.305-7</td>
            <td>Metropolitana</td>
            <td>Peñaflor</td>
          </tr>
          <tr>
            <td>Vicente Manuel</td>
            <td>Aranda</td>
            <td>Ahumada</td>
            <td>20.427.305-7</td>
            <td>Metropolitana</td>
            <td>Peñaflor</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
);

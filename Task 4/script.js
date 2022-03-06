/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) =>
    data.forEach((brand) => {
      let models = "";
      brand.models.forEach((model) => (models = `<li>${model}</li>` + models));
      document.getElementById("output")
      .innerHTML += `<div class='brand'><h3>${brand.brand}</h3><ul>${models}</ul></div>`;
    })
  );

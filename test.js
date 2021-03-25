const { somme } = require("./somme.js");
const assert = require("assert");

describe("la fonctionne somme() devrait", () => {

  it(`Avec les valeurs de paramètres 5 et 4, la fonction somme() est sensée retrourner la valeur 9`, () => {
    const résultat = somme(5, 4);
    assert.equal(résultat, 9);
  });

  it(`Avec les valeurs de paramètres -5 et 4, la fonction somme() est sensée retrourner la valeur 9`, () => {
    const résultat = somme(-5, 4);
    assert.equal(résultat, -1);
  });

  it(`Avec les valeurs de paramètres 0.5 et 4, la fonction somme() est sensée retrourner la valeur 9`, () => {
    const résultat = somme(0.5, 4);
    assert.equal(résultat, 4.5);
  });

  it(`Avec les valeurs de paramètres 1 et undefined, la fonction somme() est sensée retrourner la valeur 1`, () => {
    const résultat = somme(1);
    assert.equal(résultat, 1);
  });

  it(`Avec les valeurs de paramètres 3 et "toto", la fonction somme() est sensée retourner un erreur "paramètre invalide"`, () => {
    const expectedError = "paramètre invalide";
    assert.throws(() => { somme(1, "toto"); }, new Error(expectedError));
  });

  it(`Avec aucun paramètres, la fonction somme() est sensée retrourner la valeur 0`, () => {
    const résultat = somme();
    assert.equal(résultat, 0);
  });

});

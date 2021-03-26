const { somme } = require("./somme.js");
const assert = require("assert");
const fetch = require("node-fetch");

describe("le chat-bot devrait", () => {
  it("dire bonjour quand il reçoit une requête HTTP GET à la racine", async () => {
    // 1. envoyer une requête GET et récupérer la réponse
    const response = await fetch("http://localhost:3000/");
    const text = await response.text();
    // 2. vérifier la réponse
    assert.equal(text, "Bonjour !");
  });
});

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
    assert.throws(() => {
      // @ts-ignore
      somme(1, "toto");
    }, new Error(expectedError));
  });

  it(`Avec aucun paramètres, la fonction somme() est sensée retrourner la valeur 0`, () => {
    const résultat = somme();
    assert.equal(résultat, 0);
  });
});

module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest" // Utilise babel-jest pour les fichiers .js et .jsx
    },
    testEnvironment: "jsdom" // Simule un navigateur pour Jest
  };
  
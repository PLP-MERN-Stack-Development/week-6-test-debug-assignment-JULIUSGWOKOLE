module.exports = {
    testEnvironment: "jsdom", // For React (client-side)
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  };
  
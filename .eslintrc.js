module.exports = {
    "extends": "airbnb-base",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}],
      "func-names": ["error", "never"],
      // "promise/catch-or-return": "error",
    }
};

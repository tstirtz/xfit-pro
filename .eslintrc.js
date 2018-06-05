module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
},
  "extends": "airbnb-base",
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}],
    "func-names": ["error", "never"],
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn"
  }
};

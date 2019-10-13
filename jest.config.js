module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    '^Store/(.*)$': '<rootDir>/src/store/$1',
    '^Components/(.*)$': '<rootDir>/src/components/$1',
    '^Common/(.*)$': '<rootDir>/src/common/$1',
    '^Styles/(.*)$': '<rootDir>/src/styles/$1',
  }
};

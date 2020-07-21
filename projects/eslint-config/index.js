module.exports = {

    env: {
        es6: true,
        node: true,
        browser: true,
        jest: true
    },

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            "jsx": true
        }
    },

    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'comma-dangle': ['error', 'never']
    }

};

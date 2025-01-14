var webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            "constants": false,
            "stream": false,
            "assert": false
        }
    }
}
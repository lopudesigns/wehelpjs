module.exports = {

    // Primary class for creating operations
    Serializer: require('./files/serializer'),

    // helper functions for creating operations
    fp: require('./files/fast_parser'),

    // Low level types
    types: require('./files/types'),

    // Higher level operations (made out of generic types)
    ops: require('./files/operations'),

    // Utility that generates JSON examples
    template: require('./files/template'),

    number_utils: require('./files/number_utils'),
}

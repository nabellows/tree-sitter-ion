// ION es un lenguaje de serializacion de datos de Ignis. Inspirado en JSON y TOML.
module.exports = grammar({
  name: 'ion',

  extras: ($) => [$.line_comment, $.block_comment, /\s/],

  rules: {
    file: ($) => repeat($._statement),
    _statement: ($) => choice($.assignment, $.block),
    assignment: ($) => seq($.identifier, '=', $._value, optional(';')),
    block: ($) => seq($.identifier, '{', repeat($._statement), '}', ';'),

    _value: ($) => choice($.string, $.number, $.boolean, $.array, $.object, $.identifier),

    string: (_) => /"(?:\\["\\]|[^\n"\\])*"/,
    number: (_) => /-?\d+(\.\d+)?([eE][+-]?\d+)?/,
    boolean: (_) => choice('true', 'false'),

    array: ($) => seq('[', optional(seq($._value, repeat(seq(',', $._value)))), optional(','), ']'),
    object: ($) => seq('{', optional(seq($._statement, repeat(seq(',', $._statement)))), optional(','), '}'),
    identifier: (_) => /[a-zA-Z_]\w*/,

    line_comment: (_) => token(seq('//', /.*/)),
    block_comment: (_) => token(seq('/*', /[^*]*\*+([^/*][^*]*\*+)*/, '/')),
  },
});

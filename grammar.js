// ION es un lenguaje de serializacion de datos de Ignis. Inspirado en JSON y TOML.
module.exports = grammar({
  name: 'ion',

  extras: $ => [/\s/, $.line_comment, $.block_comment],

  rules: {
    document: $ => repeat($._value),

    _value: $ => choice(
      $.null,
      $.bool,
      $.number,
      $.decimal,
      $.string,
      $.symbol,
      $.timestamp,
      $.blob,
      $.clob,
      $.struct,
      $.list,
      $.sexp,
      $.annotated_value
    ),

    annotated_value: $ =>
      seq(repeat1(seq($.identifier, '::')), $._value),

    null: _ => /null(\.\w+)?/,
    bool: _ => choice('true', 'false'),
    number: _ => /-?\d+(\.\d+)?([eE][+-]?\d+)?/,
    decimal: _ => /-?\d+d/,
    string: _ => /"(?:\\["\\]|[^"\\])*"/,
    symbol: $ => choice(/'(?:\\['\\]|[^'\\])*'/, $.identifier),
    timestamp: _ => /\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?)?/,

    blob: _ => /\{\{[A-Za-z0-9+/=\s]*\}\}/,
    clob: _ => /\{\{"(?:\\["\\]|[^"\\])*"\}\}/,

    struct: $ =>
      seq('{', optional(commaSep1($.pair)), '}'),
    pair: $ =>
      seq($.key, ':', $._value),

    key: $ => choice(prec(1, $.identifier), $.string, $.symbol),

    list: $ =>
      seq('[', optional(commaSep1($._value)), ']'),

    sexp: $ =>
      seq('(', repeat($._value), ')'),

    identifier: _ => /[A-Za-z_][A-Za-z0-9_]*/,

    line_comment: _ => token(seq('//', /.*/)),
    block_comment: _ => token(seq('/*', /[^*]*\*+([^/*][^*]*\*+)*/, '/')),
  },

  conflicts: $ => [
    [$.annotated_value],
  ],
});

function commaSep1(rule) {
  return seq(rule, repeat(seq(',', rule)), optional(','));
}

;; Comments
(line_comment) @comment
(block_comment) @comment

;; Identifiers
(identifier) @variable

;; Primitives
(string) @string
(symbol) @constant
(number) @number
(decimal) @number
(bool) @boolean
(null) @constant.builtin
(timestamp) @constant.builtin
(clob) @string.special
(blob) @string.special

;; Annotations
(annotated_value (identifier) @attribute)

;; Structures
(struct) @structure
(pair (key (identifier) @property))
(pair ":" @operator)
(list) @structure
(sexp) @structure

;; Punctuation
"," @punctuation.delimiter
; ";" @punctuation.delimiter
"[" @punctuation.bracket
"]" @punctuation.bracket
"{" @punctuation.bracket
"}" @punctuation.bracket
":" @operator
"::" @operator


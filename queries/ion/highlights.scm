;; Comments
(line_comment) @comment
(block_comment) @comment

;; Identifiers
(
 (identifier) @variable
 (#set! "priority" 50))

;; Primitives
(string) @string
(
 (symbol) @constant
 (#set! "priority" 200))
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


# Tree-sitter ION

This repository contains the Tree-sitter grammar for the ION.
Tree-sitter is a high-performance parser used for syntax highlighting and other functionality
in text editors and development tools.

## Installation

### Neovim

To use this Tree-sitter grammar with Neovim:

```lua
local parser_config = require("nvim-treesitter.parsers").get_parser_configs()

parser_config["ion"] = {
  install_info = {
    url = "https://github.com/Ignis-lang/tree-sitter-ion.git",
    files = { "src/parser.c" },
    branch = "main",
    generate_requires_npm = false,
    requires_generate_from_grammar = true,
  },
  filetype = "ion",
}
```

And then run `:TSUpdate` or `:TSInstall ion` in Neovim.

## Usage

After installing the grammar in your editor, ION files should automatically start benefiting from
syntax highlighting and other features provided by Tree-sitter.

## Contribute

Contributions are welcome! If you encounter any problems or have suggestions for improvement,
please open an issue or send a pull request.

## License

[MIT](LICENSE) © Ignacio Perez


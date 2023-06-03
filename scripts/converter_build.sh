rm -rf dist  
antlr4 -Dlanguage=Python3 ./controllers/SCSSLexer.g4 -visitor -o ./controllers/dist
antlr4 -Dlanguage=Python3 ./controllers/SCSSParser.g4 -visitor -o ./controllers/dist

# sh converter_start.sh
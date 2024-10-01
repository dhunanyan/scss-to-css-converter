from .dist.SCSSLexer import SCSSLexer
from .dist.SCSSParser import SCSSParser
from .dist.SCSSParserVisitor import SCSSParserVisitor
from antlr4 import CommonTokenStream, FileStream, InputStream
from io import StringIO

class MyVisitor(SCSSParserVisitor):
    def __init__(self):
        self.selectorPathList = []
        self.currentSelectorPath = []
        self.nestedDepth = 0

    def visitStylesheet(self, ctx):
        for block in ctx.block():
            self.visitBlock(block)

    def visitBlock(self, ctx):
        self.nestedDepth = 0
        self.currentSelectorPath = []
        self.currentSelectorPath.append(ctx.selector().getText())

        if ctx.declaration():
            for currentDeclaration in ctx.declaration():
                print(currentDeclaration.getText())
                self.selectorPathList.append(''.join(self.currentSelectorPath) + ' {\n')
                self.selectorPathList[-1] += '\t' + currentDeclaration.getText() + '\n'
                self.selectorPathList[-1] += '}\n'
        
        for nestedBlock in ctx.nestedBlock():
            self.visitNestedBlock(nestedBlock)
            
    def visitNestedBlock(self, ctx):
        self.currentSelectorPath.append(ctx.selector().getText())

        if ctx.declaration():
            for currentDeclaration in ctx.declaration():
                print(currentDeclaration.getText())
                self.selectorPathList.append(''.join(self.currentSelectorPath) + ' {\n')
                self.selectorPathList[-1] += '\t' + currentDeclaration.getText() + '\n'
                self.selectorPathList[-1] += '}\n'

        for nestedBlock in ctx.nestedBlock():
            self.visitNestedBlock(nestedBlock)
            self.currentSelectorPath.pop()

    def getSelectorList(self):
        return self.selectorPathList
    
    def getOutput(self):
        output_string = StringIO()
        for block in self.getSelectorList():
            output_string.write(block + '\n')
        return output_string.getvalue()

    def save(self, outputFile):
        with open(outputFile, "w") as file:
            for block in self.getSelectorList():
                file.write(block + '\n')

def convertFromFile(file_name):
    visitor = MyVisitor()
    lexer = SCSSLexer(FileStream(file_name))
    token_stream = CommonTokenStream(lexer)
    parser = SCSSParser(token_stream)
    tree = parser.stylesheet()
    visitor.visit(tree)

def convertFromText(text):
    visitor = MyVisitor()
    lexer = SCSSLexer(InputStream(text))
    token_stream = CommonTokenStream(lexer)
    parser = SCSSParser(token_stream)
    tree = parser.stylesheet()
    visitor.visit(tree)
    output = visitor.getOutput()
    return output


# visitor = MyVisitor()
# file_name = "input/success1.scss"
# tree = convertFromFile(file_name)
# visitor.visit(tree)
# outputFile = "output/success1.scss"
# visitor.save(outputFile)

# file_name = "input/success2.scss"
# tree = convertFromFile(file_name)
# visitor.visit(tree)
# outputFile = "output/success2.scss"
# visitor.save(outputFile)

# file_name = "input/success3.scss"
# tree = convertFromFile(file_name)
# visitor.visit(tree)
# outputFile = "output/success3.scss"
# visitor.save(outputFile)

# file_name = "input/fail1.scss"
# tree = convertFromFile(file_name)
# visitor.visit(tree)
# outputFile = "output/fail1.scss"
# visitor.save(outputFile)

# file_name = "input/fail2.scss"
# tree = convertFromFile(file_name)
# visitor.visit(tree)
# outputFile = "output/fail2.scss"
# visitor.save(outputFile)

# file_name = "input/fail3.scss"
# tree = convertFromFile(file_name)
# visitor.visit(tree)

# file_name = "input/fail3.scss"
# tree = convertFromFile(file_name)
# visitor.visit(tree)

# outputFile = "output/fail3.scss"
# visitor.save(outputFile)
# outputFile = "output/fail4.scss"
# visitor.save(outputFile)


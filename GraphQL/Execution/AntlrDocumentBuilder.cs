using System.IO;
using System.Text;
using Antlr4.Runtime;
using GraphQL.Language;
using GraphQL.Parsing;

namespace GraphQL.Execution
{
    public class AntlrDocumentBuilder : IDocumentBuilder
    {
        public Document Build(string data)
        {
            var stream = new MemoryStream(Encoding.UTF8.GetBytes(data));
            var reader = new StreamReader(stream);
            var input = new AntlrInputStream(reader);
            var lexer = new GraphQLLexer(input);
            var tokens = new CommonTokenStream(lexer);
            var parser = new GraphQLParser(tokens);
            var documentTree = parser.document();
            var vistor = new GraphQLVisitor();
            return vistor.Visit(documentTree) as Document;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using GraphQL;
using GraphQL.Types;
using Data;

namespace Web.Controllers
{
    public class GraphQLController : ApiController
    {
        private readonly Schema _schema;

        public GraphQLController()
        {
            _schema = new GameSchema();
        }

        public async Task<ExecutionResult> Post(GraphQLQuery query)
        {
            return await Execute(_schema, null, query.Query);
        }

        public async Task<ExecutionResult> Execute(
          Schema schema,
          object rootObject,
          string query,
          string operationName = null,
          Inputs inputs = null)
        {
            var executer = new DocumentExecuter();
            return await executer.ExecuteAsync(schema, rootObject, query, operationName);
        }
    }

    public class GraphQLQuery
    {
        public string Query { get; set; }
        public string Variables { get; set; }
    }
}

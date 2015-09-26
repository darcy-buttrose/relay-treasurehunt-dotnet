using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GraphQL.Types;

namespace Data
{
    public class GameSchema : Schema
    {
        public GameSchema()
        {
            Query = new GameQuery();
        }
    }
}

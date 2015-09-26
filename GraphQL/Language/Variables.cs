using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace GraphQL.Language
{
    public class Variables : IEnumerable<Variable>
    {
        private readonly List<Variable> _variables = new List<Variable>();

        public void Add(Variable variable)
        {
            _variables.Add(variable);
        }

        public object ValueFor(string name)
        {
            var variable = _variables.FirstOrDefault(v => v.Name == name);
            return variable != null ? variable.Value : null;
        }

        public IEnumerator<Variable> GetEnumerator()
        {
            return _variables.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}

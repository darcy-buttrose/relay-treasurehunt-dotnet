namespace GraphQL.Language
{
    public class FragmentDefinition : IHaveFragmentType
    {
        public FragmentDefinition()
        {
            Directives = new Directives();
        }

        public string Name { get; set; }

        public string Type { get; set; }

        public Directives Directives { get; set; }

        public Selections Selections { get; set; }
    }
}

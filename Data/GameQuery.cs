using GraphQL.Types;

namespace Data
{
    public class GameQuery : ObjectGraphType
    {
        public GameQuery()
        {
            Name = "Query";

            Field<GameType>(
                    "game",
                    resolve: context => GameBuilder.GetGameSync()
                );
        }
    }
}
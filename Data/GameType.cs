using GraphQL.Types;

namespace Data
{
    public class GameType : ObjectGraphType
    {
        public GameType()
        {
            Name = "Game";

            Field<IntGraphType>("id", "id of the game");
            Field<ListGraphType<HidingSpotType>>("hidingSpots", "hiding spots of game");
            Field<IntGraphType>("turnsRemaining", "remaining turns in game");
        }
    }
}
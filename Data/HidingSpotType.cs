using GraphQL.Types;

namespace Data
{
    public class HidingSpotType : ObjectGraphType
    {
        public HidingSpotType()
        {
            Name = "HidingSpot";

            Field<IntGraphType>("id","id of hiding spot");
            Field<BooleanGraphType>("hasTreasure","does hiding spot have treasure");
            Field<BooleanGraphType>("hasBeenChecked","has hiding spot been checked");
        }
    }
}
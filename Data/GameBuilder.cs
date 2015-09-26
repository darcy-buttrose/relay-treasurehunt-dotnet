using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    static class GameBuilder
    {
        private static Game _game;

        public static Game Build()
        {
            var hidingSpots = new List<HidingSpot>();

            var rnd = new Random();
            var indexOfHidingSpot = rnd.Next(9);

            for (var idx = 0; idx < 9; idx++)
            {
                hidingSpots.Add(new HidingSpot
                {
                    Id = idx,
                    HasBeenChecked = false,
                    HasTreasure = idx == indexOfHidingSpot
                });
            }

            _game = new Game
            {
                Id = 1,
                TurnsRemaining = 3,
                HidingSpots = hidingSpots
            };

            return _game;
        }

        public static Task<Game> GetGameByIdSync(int id)
        {
            return Task.FromResult(_game ?? Build());
        }

        public static Task<Game> GetGameSync()
        {
            return Task.FromResult(_game ?? Build());
        }
    }
}

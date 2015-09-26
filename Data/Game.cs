using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    class Game
    {
        public int Id { get; set; }
        public int TurnsRemaining { get; set; }
        public IEnumerable<HidingSpot> HidingSpots { get; set; }
    }
}

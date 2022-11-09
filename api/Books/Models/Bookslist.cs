using System;
using System.Collections.Generic;

namespace Books.Models
{
    public partial class Bookslist
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Author { get; set; } = null!;
        public bool Wishlist { get; set; }
    }
}

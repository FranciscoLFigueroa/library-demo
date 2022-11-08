using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Books.Models;

namespace Books.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookslistsController : ControllerBase
    {
        private readonly BooksContext _context;

        public BookslistsController(BooksContext context)
        {
            _context = context;
        }

        // GET: api/Bookslists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bookslist>>> GetBookslists()
        {
            return await _context.Bookslists.ToListAsync();
        }

        // GET: api/Bookslists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bookslist>> GetBookslist(int id)
        {
            var bookslist = await _context.Bookslists.FindAsync(id);

            if (bookslist == null)
            {
                return NotFound();
            }

            return bookslist;
        }

        // PUT: api/Bookslists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookslist(int id, Bookslist bookslist)
        {
            if (id != bookslist.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookslist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookslistExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bookslists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Bookslist>> PostBookslist(Bookslist bookslist)
        {
            _context.Bookslists.Add(bookslist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookslist", new { id = bookslist.Id }, bookslist);
        }

        // DELETE: api/Bookslists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookslist(int id)
        {
            var bookslist = await _context.Bookslists.FindAsync(id);
            if (bookslist == null)
            {
                return NotFound();
            }

            _context.Bookslists.Remove(bookslist);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BookslistExists(int id)
        {
            return _context.Bookslists.Any(e => e.Id == id);
        }
    }
}

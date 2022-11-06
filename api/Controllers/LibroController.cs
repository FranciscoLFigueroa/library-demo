using ContosoLibro.Models;
using ContosoLibro.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContosoLibro.Controllers;

[ApiController]
[Route("[controller]")]
public class LibroController : ControllerBase
{
    public LibroController()
    {
    }

    // GET all action
    [HttpGet]
    public ActionResult<List<Libro>> GetAll() =>
    LibroService.GetAll();

    // GET by Id action
    [HttpGet("{id}")]
    public ActionResult<Libro> Get(int id)
    {
        var libro = LibroService.Get(id);

        if (libro == null)
            return NotFound();

        return libro;
    }

    // POST action
    [HttpPost]
    public IActionResult Create(Libro libro)
    {
        // This code will save the libro and return a result
        LibroService.Add(libro);
        return CreatedAtAction(nameof(Create), new { id = libro.Id }, libro);
    }

    // PUT action
    [HttpPut("{id}")]
    public IActionResult Update(int id, Libro libro)
    {
        // This code will update the libro and return a result
        if (id != libro.Id)
            return BadRequest();

        var existingLibro = LibroService.Get(id);
        if (existingLibro is null)
            return NotFound();

        LibroService.Update(libro);

        return NoContent();
    }

    // DELETE action
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        // This code will delete the libro and return a result
        var libro = LibroService.Get(id);

        if (libro is null)
            return NotFound();

        LibroService.Delete(id);

        return NoContent();
    }
}
using ContosoLibro.Models;

namespace ContosoLibro.Services;

public static class LibroService
{
    static List<Libro> Libros { get; }
    static int nextId = 3;
    static LibroService()
    {
        Libros = new List<Libro>
        {
            new Libro { Id = 1, Name = "Classic Italian", IsGlutenFree = false },
            new Libro { Id = 2, Name = "Veggie", IsGlutenFree = true }
        };
    }

    public static List<Libro> GetAll() => Libros;

    public static Libro? Get(int id) => Libros.FirstOrDefault(p => p.Id == id);

    public static void Add(Libro libro)
    {
        libro.Id = nextId++;
        Libros.Add(libro);
    }

    public static void Delete(int id)
    {
        var libro = Get(id);
        if(libro is null)
            return;

        Libros.Remove(libro);
    }

    public static void Update(Libro libro)
    {
        var index = Libros.FindIndex(p => p.Id == libro.Id);
        if(index == -1)
            return;

        Libros[index] = libro;
    }
}
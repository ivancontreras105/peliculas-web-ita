using Microsoft.AspNetCore.Mvc;

namespace Peliculas.Web.Controllers;

[Route("peliculas")]
public class PeliculasController : Controller
{
    public IActionResult Index()
    {
        return View("Editar");
    }

    [Route("{id}")]
    public IActionResult Editar(string id)
    {
        ViewData["id"] = id;
        return View("Editar");
    }
}
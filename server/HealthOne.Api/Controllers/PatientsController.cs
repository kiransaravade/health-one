using HealthOne.Api.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PatientsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var patients = new List<Patient>
        {
            new() { Id = 1, Name = "John Smith", Age = 35, Gender = "Male" },
            new() { Id = 2, Name = "Mary Jones", Age = 29, Gender = "Female" },
            new() { Id = 3, Name = "David Brown", Age = 42, Gender = "Male" },
            new() { Id = 4, Name = "Kiran Saravade", Age = 21, Gender = "Male" },
            new() { Id = 5, Name = "Priya Patel", Age = 28, Gender = "Female" }

        };

        return Ok(patients);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using viagol_api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace viagol_api.Controllers
{
    [ApiController]
    [Route("v1/travels")]
    [Authorize]
    public class TravelController : ControllerBase
    {
        [HttpGet]
        [Route("users/{id:int}")]
        public async Task<ActionResult<List<Travel>>> GetByUser([FromServices] DataContext context, int id)
        {
            var travels = await context.Travels
                .Include(travel => travel.User)
                .AsNoTracking()
                .Where(travel => travel.UserId == id)
                .ToListAsync();

            return travels;
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Travel>> Create(
            [FromServices] DataContext context,
            [FromBody] Travel model)
        {
            if (ModelState.IsValid)
            {
                context.Travels.Add(model);
                await context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut]
        [Route("{id:int}")]
        [Authorize]
        public Travel Edit(
            [FromServices] DataContext context, int id, [FromBody] Travel model)
        {
            var travel = context.Travels.Find(id);
            travel.Arrival = model.Arrival;
            travel.Departure = model.Departure;
            travel.Date = model.Date;
            context.SaveChangesAsync();
            return model;
        }
    

        [HttpDelete]
        [Route("{id:int}")]
        [Authorize]
        public void Delete(
            [FromServices] DataContext context, int id)
        {
            context.Travels.Remove(context.Travels.Find(id));
            context.SaveChanges();
        }
    }
}
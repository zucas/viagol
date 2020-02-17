using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using viagol_api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Web.Helpers;

namespace viagol_api.Controllers
{
    [ApiController]
    [Route("v1/users")]
    public class UserController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        [Authorize]
        public async Task<ActionResult<List<User>>> Read([FromServices] DataContext context) => await context.Users.ToListAsync();

        
        [HttpPut]
        [Route("{id:int}")]
        [Authorize]
        public User Edit(
            [FromServices] DataContext context, int id, [FromBody] User model)
        {
            var user = context.Users.Find(id);
            if (model.Name != null) {
                user.Name = model.Name;
            }
            if(model.Password != null) {
                user.Password = Crypto.HashPassword(model.Password);
            }
            context.SaveChangesAsync();
            return model;
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<User>> Create(
            [FromServices] DataContext context,
            [FromBody] User model)
        {
            if (ModelState.IsValid) {
                model.Password = Crypto.HashPassword(model.Password);
                context.Users.Add(model);
                await context.SaveChangesAsync();
                return model;
            } else {
                return BadRequest(ModelState);
            }
        }

    }
}

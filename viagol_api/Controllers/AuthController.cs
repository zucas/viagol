using System;
using System.Linq;
using System.Threading.Tasks;
using viagol_api.Data;
using viagol_api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Web.Helpers;

namespace viagol_api.Controllers
{
    public class AuthController : ControllerBase
    {
        [HttpPost]
        [Route("v1/login")]
        public ActionResult<dynamic> Authenticate(
            [FromBody]User model,
            [FromServices] DataContext context)
        {
            // Recupera o usuário
            var user = context.Users
                .Single(user => user.Email == model.Email && Crypto.VerifyHashedPassword(user.Password, model.Password));



            // Verifica se o usuário existe
            if (user == null)
                return NotFound(new { message = "Usuário ou senha inválidos" });

            // Gera o Token
            var token = TokenService.GenerateToken(user);

            // Oculta a senha
            user.Password = "";

            // Retorna os dados
            return new
            {
                user,
                token
            };
        }

        [HttpGet]
        [Route("v1/authenticated")]
        [Authorize]
        public string Authenticated() => User.Identity.ToString();

    }
}

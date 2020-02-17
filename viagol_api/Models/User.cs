using System.ComponentModel.DataAnnotations;

namespace viagol_api

{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        public string Name { get; set; }

        public string Password { get; set; }

        [MinLength(6, ErrorMessage = "Esse deve ter no minimo 6 caracteres")]
        public string Email { get; set; }
    }
}
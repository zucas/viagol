using System;
using System.ComponentModel.DataAnnotations;

namespace viagol_api

{
    public class Travel
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        public string Departure { get; set; }

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        public string Arrival { get; set; }

        [Required(ErrorMessage = "Esse Campo é obrigatório")]
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

    }
}
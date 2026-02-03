using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Architecture_API.Models
{
    public class Course
    {
        [Key]
        public int CourseId { get; set; }

        [MaxLength(50)]
        public string? Name { get; set; }

        [MaxLength(50)]
        public string? Description { get; set; }

        [MaxLength(50)]
        public string? Duration { get; set; }

    }
}

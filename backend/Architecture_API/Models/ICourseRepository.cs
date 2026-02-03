namespace Architecture_API.Models
{
    public interface ICourseRepository
    {
        // Course
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();
        Task<Course[]> GetAllCourseAsync();
        Task<Course> GetCourseAsync(int CourseId);

    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JwtMetanit.Models
{
    public class PeopleContext : DbContext
    {
        public DbSet<Person> People { get; set; }
        public DbSet<Mission> Missions { get; set; }
        public PeopleContext(DbContextOptions<PeopleContext> options)
            : base(options) { }
    }
}

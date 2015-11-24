using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Bootstrap_Design.Startup))]
namespace MVC_Bootstrap_Design
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

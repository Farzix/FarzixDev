using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Bootstrap_Design.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


        /* Main Pages */
        public ActionResult News()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Projects()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Blogs()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        
        /* News Children */
        public ActionResult NewsOne()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult NewsTwo()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult NewsThree()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        /* Blogs children */
        public ActionResult BlogsOne()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult BlogsTwo()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult BlogsThree()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        
        /* Projects Children */
        public ActionResult ProjectsOne()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult ProjectsTwo()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult ProjectsThree()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
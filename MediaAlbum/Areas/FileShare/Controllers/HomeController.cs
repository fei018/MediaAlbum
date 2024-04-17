using Microsoft.AspNetCore.Mvc;
using WalkingTec.Mvvm.Core;
using WalkingTec.Mvvm.Mvc;

namespace MediaAlbum.FileShare.Controllers
{
    [Public]
    [Area("FileShare")]
    [ActionDescription("文件分享")]
    public class HomeController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

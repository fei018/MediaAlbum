using MediaAlbum.Model.InfoManage;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.ViewModel.Services
{
    public class SiteConfigInfoService
    {
        public static string MediaRootPath { get; private set; } = "C:\\Fei\\code project\\web";

        public static string SiteHostName { get; set; } = "http://localhost:34620";


        public static void SetSiteConfig(WTMContext wtm)
        {
            var site = wtm.DC.Set<SiteConfigInfo>().ToList().FirstOrDefault();

            if (site == null)
            {
                throw new ArgumentNullException(nameof(SiteConfigInfo));
            }

            if (string.IsNullOrEmpty(site.MediaRootPath))
            {
                throw new ArgumentNullException(nameof(SiteConfigInfo.MediaRootPath));
            }           

            MediaRootPath = site.MediaRootPath;

            SiteHostName = site.SiteHostName;
        }
    }
}

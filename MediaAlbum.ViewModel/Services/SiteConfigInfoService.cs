using MediaAlbum.Model.InfoManage;
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
        public static string MediaRootPath {  get; private set; }

        private readonly WTMContext _wtm;

        public SiteConfigInfoService(WTMContext wtm)
        {
            this._wtm = wtm;
        }

        public void SetMediaRootPath()
        {
            string path = _wtm.DC.Set<SiteConfigInfo>().FirstOrDefault()?.MediaRootPath;
            if (true)
            {
                
            }
        }
    }
}

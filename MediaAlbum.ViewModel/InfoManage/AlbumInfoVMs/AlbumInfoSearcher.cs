using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WalkingTec.Mvvm.Core;
using WalkingTec.Mvvm.Core.Extensions;
using MediaAlbum.Model.InfoManage;


namespace MediaAlbum.ViewModel.InfoManage.AlbumInfoVMs
{
    public partial class AlbumInfoSearcher : BaseSearcher
    {
        [Display(Name = "專輯名稱")]
        public String Name { get; set; }
        [Display(Name = "_Model._AlbumInfo._Description")]
        public String Description { get; set; }

        protected override void InitVM()
        {
        }

    }
}

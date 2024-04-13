using MediaAlbum.Model.InfoManage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.ViewModel.AlbumInfoVMs
{
    public class AlbumInfoVM : BaseCRUDVM<AlbumInfo>
    {


        public AlbumInfoVM()
        {
            this.SetInclude(x => x.Children);
            this.SetInclude(x => x.MediaFileInfoList);
        }


    }
}

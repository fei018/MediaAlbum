using MediaAlbum.Model.InfoManage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.ViewModel.AlbumInfoVMs
{
    public class AlbumInfoListVM : BasePagedListVM<AlbumInfo_View,AlbumInfoSearcher>
    {
    }

    #region AlbumInfo_View
    public class AlbumInfo_View : AlbumInfo
    {

    }
    #endregion
}

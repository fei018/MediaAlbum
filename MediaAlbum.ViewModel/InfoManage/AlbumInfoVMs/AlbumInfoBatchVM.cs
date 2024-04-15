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
    public partial class AlbumInfoBatchVM : BaseBatchVM<AlbumInfo, AlbumInfo_BatchEdit>
    {
        public AlbumInfoBatchVM()
        {
            ListVM = new AlbumInfoListVM();
            LinkedVM = new AlbumInfo_BatchEdit();
        }

    }

	/// <summary>
    /// Class to define batch edit fields
    /// </summary>
    public class AlbumInfo_BatchEdit : BaseVM
    {

        protected override void InitVM()
        {
        }

    }

}

using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.Model.InfoManage
{
    /// <summary>
    /// 專輯信息
    /// </summary>
	[Table("Info_Album")]

    [Display(Name = "專輯信息")]
    public class AlbumInfo : BasePoco
    {
        [Display(Name = "專輯名稱")]
        [Comment("專輯名稱")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public string Name { get; set; }

        [Display(Name = "_Model._AlbumInfo._Description")]
        [Comment("專輯描述")]
        public string Description { get; set; }



        [Display(Name = "專輯媒體文件集合")]
        [Comment("專輯媒體文件集合")]
        public List<MediaFileInfo> MediaFileInfoList { get; set; } = [];
    }

}

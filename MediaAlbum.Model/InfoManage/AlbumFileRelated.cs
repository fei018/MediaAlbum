using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.Model.InfoManage
{
    /// <summary>
    /// 專輯文件關聯
    /// </summary>
	[Table("Info_AlbumFileRelated")]

    [Display(Name = "專輯文件關聯")]
    public class AlbumFileRelated : BasePoco
    {
        [Display(Name = "專輯Id")]
        [Comment("專輯Id")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public Guid AlbumInfoId { get; set; }

        [Display(Name = "專輯")]
        [Comment("專輯")]
        public AlbumInfo Album { get; set; }

        [Display(Name = "媒體文件Id")]
        [Comment("媒體文件Id")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public Guid MediaFileInfoID { get; set; }

        [Display(Name = "媒體文件")]
        [Comment("媒體文件")]
        public MediaFileInfo MediaFile { get; set; }
    }

}

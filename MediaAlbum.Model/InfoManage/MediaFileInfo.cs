using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.Model.InfoManage
{
    /// <summary>
    /// 媒體文件信息
    /// </summary>
    [Table("Info_MediaFile")]
    [Display(Name = "媒體文件信息")]
    public class MediaFileInfo : BasePoco
    {
        [Display(Name = "媒體文件名")]
        [Comment("媒體文件名")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public string FileName { get; set; }


        [Display(Name = "專輯文件關聯Id")]
        [Comment("專輯文件關聯Id")]
        public Guid? AlbumFileRelatedId { get; set; }

        [Display(Name = "專輯文件關聯")]
        [Comment("專輯文件關聯")]
        public AlbumFileRelated AlbumFileRelated { get; set; }
    }
}

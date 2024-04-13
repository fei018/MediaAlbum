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

        [Display(Name = "媒體文件類別")]
        [Comment("媒體文件類別")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public MediaFileTypeEnum FileType { get; set; }

        [Display(Name = "媒體縮圖文件名")]
        [Comment("媒體縮圖文件名")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public string ThumbnailFileName { get; set; }

        [Display(Name = "專輯Id")]
        [Comment("專輯Id")]
        public Guid? AlbumInfoId { get; set; }

        [Display(Name = "專輯信息")]
        [Comment("專輯信息")]
        public AlbumInfo AlbumInfo { get; set; }

 
    }
}

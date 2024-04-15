using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
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
        [Display(Name = "文件名")]
        [Comment("文件名")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public string FileName { get; set; }

        /// <summary>
        /// 相對文件名, 不包含根路徑
        /// </summary>
        [Display(Name = "相對文件名")]
        [Comment("相對文件名")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public string FileRelativeName { get; set; }

        [Display(Name = "媒體文件類別")]
        [Comment("媒體文件類別")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public MediaFileTypeEnum FileType { get; set; }

        [Display(Name = "媒體縮圖文件名")]
        [Comment("媒體縮圖文件名")]
        //[Required(ErrorMessage = "Validate.{0}required")]
        public string ThumbnailFileName { get; set; }


        [NotMapped]
        [Display(Name = "專輯信息")]
        [Comment("專輯信息")]
        public AlbumInfo AlbumInfo { get; set; }


        [NotMapped]
        public string FileExtention
        {
            get
            {
                return string.IsNullOrEmpty(FileName) ? FileName : Path.GetExtension(FileName);
            }
        }
    }
}

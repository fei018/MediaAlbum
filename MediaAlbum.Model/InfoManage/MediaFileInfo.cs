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

        [Display(Name = "文件擴展名")]
        [Comment("文件擴展名")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public string FileExtention { get; set; }

        /// <summary>
        /// 相對父路徑, 不包含根路徑
        /// </summary>
        [Display(Name = "相對父路徑")]
        [Comment("相對父路徑")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public string FileRelativeParentPath { get; set; }

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
  

        public static string GetFileRelativeParentPath(string mediaRootPath, string fileFullName)
        {
            var path = fileFullName.Replace(mediaRootPath, "", StringComparison.OrdinalIgnoreCase);

            var filename = Path.GetFileName(fileFullName);

            path = path.Replace(filename, "", StringComparison.OrdinalIgnoreCase);

            return path;
        }
    }
}

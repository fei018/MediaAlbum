using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.Model.InfoManage
{
    /// <summary>
    /// 站點配置信息
    /// </summary>
	[Table("Info_SiteConfig")]
    [Display(Name = "站點配置信息")]
    public class SiteConfigInfo : TopBasePoco
    {
        [Display(Name = "媒體文件搜索根路徑")]
        [Comment("媒體文件搜索根路徑")]
        //[Required(ErrorMessage = "Validate.{0}required")]
        public string MediaRootPath { get; set; }

        [Display(Name = "縮圖保存文件根路徑")]
        [Comment("縮圖保存文件根路徑")]
        //[Required(ErrorMessage = "Validate.{0}required")]
        public string ThumbnailRootPath { get; set; }
    }
}

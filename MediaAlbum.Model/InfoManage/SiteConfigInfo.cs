﻿using Microsoft.EntityFrameworkCore;
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
        [Display(Name = "媒體文件根路徑")]
        [Comment("媒體文件根路徑")]
        //[Required(ErrorMessage = "Validate.{0}required")]
        public string MediaRootPath { get; set; }

        [Display(Name = "站點主機名")]
        [Comment("站點主機名")]
        //[Required(ErrorMessage = "Validate.{0}required")]
        public string SiteHostName { get; set; }
    }
}

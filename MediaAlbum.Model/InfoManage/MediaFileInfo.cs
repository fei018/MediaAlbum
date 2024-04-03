using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MediaAlbum.Model.InfoManage
{
    /// <summary>
    /// 媒體文件信息
    /// </summary>
    [Table("Info_MediaFile")]
    [Display(Name = "媒體文件信息")]
    public class MediaFileInfo
    {
        [Display(Name = "媒體文件名")]
        [Comment("媒體文件名")]
        [Required(ErrorMessage = "Validate.{0}required")]
        public string FileName { get; set; }


    }
}

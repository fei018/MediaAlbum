using MediaAlbum.Model.InfoManage;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MediaAlbum.ViewModel.PublicMediaVMs
{
    public class PublicMediaFolder
    {
        [Display(Name= "文件夾名")]
        public string FolderName { get; set; }

        [Display(Name = "路徑")]
        public string FullPath { get; set; }
    }
}

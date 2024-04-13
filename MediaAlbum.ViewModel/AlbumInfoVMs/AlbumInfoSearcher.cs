using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.ViewModel.AlbumInfoVMs
{
    public class AlbumInfoSearcher : BaseSearcher
    {
        [Display(Name = "專輯名稱")]
        public string Name { get; set; }
    }
}

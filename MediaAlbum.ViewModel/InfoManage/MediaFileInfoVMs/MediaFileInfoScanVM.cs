using MediaAlbum.Model.InfoManage;
using MediaAlbum.ViewModel.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.ViewModel.InfoManage.MediaFileInfoVMs
{
    public class MediaFileInfoScanVM : BaseVM
    {
        public string FileName { get; set; }

        public string FileFullName {  get; set; }

        public List<MediaFileInfo> MediaFileMP3List { get; set; }

        public List<MediaFileInfo> MediaFileMP4List { get; set; }

        public void Scan()
        {
            var mp4s = Directory.EnumerateFiles(SiteConfigInfoService.MediaRootPath, "*.mp4", SearchOption.AllDirectories);

            if (mp4s != null)
            {
                MediaFileMP4List = new();
                foreach (var item in mp4s)
                {
                    var mp4 = new MediaFileInfo()
                    {
                        FileName = Path.GetFileName(item),
                        FileRelativeParentPath = MediaFileInfo.GetFileRelativeParentPath(SiteConfigInfoService.MediaRootPath, item),
                        FileType = MediaFileTypeEnum.Video,
                        FileExtention = Path.GetExtension(item)
                    };
                    MediaFileMP4List.Add(mp4);
                }
            }

            var mp3s = Directory.EnumerateFiles(SiteConfigInfoService.MediaRootPath, "*.mp3", SearchOption.AllDirectories);           

            if (mp3s != null)
            {
                MediaFileMP3List = new();
                foreach (var item in mp3s)
                {
                    var mp3 = new MediaFileInfo()
                    {
                        FileName = Path.GetFileName(item),
                        FileRelativeParentPath = MediaFileInfo.GetFileRelativeParentPath(SiteConfigInfoService.MediaRootPath, item),
                        FileType = MediaFileTypeEnum.Audio,
                        FileExtention = Path.GetExtension(item)
                    };
                    MediaFileMP3List.Add(mp3);
                }
            }
        }
    }
}

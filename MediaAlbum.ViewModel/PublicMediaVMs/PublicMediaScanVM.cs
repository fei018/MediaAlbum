using MediaAlbum.Model.InfoManage;
using MediaAlbum.ViewModel.Services;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MediaAlbum.ViewModel.PublicMediaVMs
{
    public class PublicMediaScanVM
    {
        public List<PublicMediaFile> MediaFileMP3List { get; set; } = new();

        public List<PublicMediaFile> MediaFileMP4List { get; set; } = new();

        public List<PublicMediaFolder> MediaFolderList { get; set; } = new();


        public void ScanFolders(string folderPath)
        {
            var folders = Directory.EnumerateDirectories(folderPath).Order().ToList();

            if (folders.Count == 0)
            {
                MediaFolderList = new();
                return;
            }

            if (folders.Count > 0)
            {
                MediaFolderList = new();

                foreach (var folder in folders)
                {
                    var f = new PublicMediaFolder()
                    {
                        FolderName = folder.Substring(folder.LastIndexOf('\\')+1),
                        FullPath = folder,
                    };

                    MediaFolderList.Add(f);
                }
            }
        }

        public void ScanFiles(string folderPath)
        {
            var mp4s = Directory.EnumerateFiles(folderPath, "*.mp4", SearchOption.TopDirectoryOnly).Order().ToList();

            MediaFileMP4List = new();

            if (mp4s.Count > 0)
            {
                
                foreach (var item in mp4s)
                {
                    var mp4 = new PublicMediaFile()
                    {
                        FileName = Path.GetFileName(item),
                        FileRelativeParentPath = MediaFileInfo.GetFileRelativeParentPath(SiteConfigInfoService.MediaRootPath, item),
                        FileType = MediaFileTypeEnum.Video,
                        FileExtention = Path.GetExtension(item),
                        MineType = "video/mp4",
                    };

                    mp4.StaticWebPath = $"{SiteConfigInfoService.SiteHostName}/share{mp4.FileRelativeParentPath}{mp4.FileName}".Replace('\\', '/');

                    MediaFileMP4List.Add(mp4);
                }
            }

            //MediaFileMP4List = MediaFileMP4List.OrderBy(x=> x.FileName).ToList();

            var mp3s = Directory.EnumerateFiles(folderPath, "*.mp3", SearchOption.TopDirectoryOnly).Order().ToList();

            MediaFileMP3List = new();

            if (mp3s.Count > 0)
            {
                
                foreach (var item in mp3s)
                {
                    var mp3 = new PublicMediaFile()
                    {
                        FileName = Path.GetFileName(item),
                        FileRelativeParentPath = MediaFileInfo.GetFileRelativeParentPath(SiteConfigInfoService.MediaRootPath, item),
                        FileType = MediaFileTypeEnum.Audio,
                        FileExtention = Path.GetExtension(item),
                        MineType = "audio/mpeg",
                    };

                    mp3.StaticWebPath = $"{SiteConfigInfoService.SiteHostName}/share{mp3.FileRelativeParentPath}{mp3.FileName}".Replace('\\', '/');

                    MediaFileMP3List.Add(mp3);
                }
            }

            //MediaFileMP3List = MediaFileMP3List.OrderBy(x => x.FileName).ToList();
        }
    }
}

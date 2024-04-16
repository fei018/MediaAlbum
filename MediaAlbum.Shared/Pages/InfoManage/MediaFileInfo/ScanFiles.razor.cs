using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using WalkingTec.Mvvm.Core;

namespace MediaAlbum.Shared.Pages.InfoManage.MediaFileInfo
{
    [ActionDescription("±½´y¤å¥ó")]
    public partial class ScanFiles
    {
        [Inject]
        public WTMContext Wtm { get; set; }

        private void ButtonClick()
        {
            var fileScanVM = Wtm.CreateVM<MediaAlbum.ViewModel.InfoManage.MediaFileInfoVMs.MediaFileInfoScanVM>();
            fileScanVM.Scan();
        }

        private void DoubleClick()
        {

        }
    }
}
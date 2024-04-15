using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WalkingTec.Mvvm.Core;
using WalkingTec.Mvvm.Core.Extensions;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using MediaAlbum.Model.InfoManage;


namespace MediaAlbum.ViewModel.InfoManage.AlbumInfoVMs
{
    public partial class AlbumInfoListVM : BasePagedListVM<AlbumInfo_View, AlbumInfoSearcher>
    {

        //protected override IEnumerable<IGridColumn<AlbumInfo_View>> InitGridHeader()
        //{
        //    return new List<GridColumn<AlbumInfo_View>>{
        //        this.MakeGridHeader(x => x.Name),
        //        this.MakeGridHeader(x => x.Description),
        //        this.MakeGridHeaderAction(width: 200)
        //    };
        //}

        public override IOrderedQueryable<AlbumInfo_View> GetSearchQuery()
        {
            var query = DC.Set<AlbumInfo>()
                .CheckContain(Searcher.Name, x=>x.Name)
                .CheckContain(Searcher.Description, x=>x.Description)
                .Select(x => new AlbumInfo_View
                {
				    ID = x.ID,
                    Name = x.Name,
                    Description = x.Description,
                })
                .OrderBy(x => x.ID);
            return query;
        }

    }

    public class AlbumInfo_View : AlbumInfo{

    }
}

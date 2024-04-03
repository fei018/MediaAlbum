using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WalkingTec.Mvvm.Core;
using MediaAlbum.Controllers;
using MediaAlbum.ViewModel.AlbumManage.AlbumInfoVMs;
using MediaAlbum.Model.AlbumManage;
using MediaAlbum.DataAccess;


namespace MediaAlbum.Test
{
    [TestClass]
    public class AlbumInfoApiTest
    {
        private AlbumInfoController _controller;
        private string _seed;

        public AlbumInfoApiTest()
        {
            _seed = Guid.NewGuid().ToString();
            _controller = MockController.CreateApi<AlbumInfoController>(new DataContext(_seed, DBTypeEnum.Memory), "user");
        }

        [TestMethod]
        public void SearchTest()
        {
            ContentResult rv = _controller.Search(new AlbumInfoSearcher()) as ContentResult;
            Assert.IsTrue(string.IsNullOrEmpty(rv.Content)==false);
        }

        [TestMethod]
        public void CreateTest()
        {
            AlbumInfoVM vm = _controller.Wtm.CreateVM<AlbumInfoVM>();
            AlbumInfo v = new AlbumInfo();
            
            v.Name = "9WVkE";
            v.Description = "i8O";
            vm.Entity = v;
            var rv = _controller.Add(vm);
            Assert.IsInstanceOfType(rv, typeof(OkObjectResult));

            using (var context = new DataContext(_seed, DBTypeEnum.Memory))
            {
                var data = context.Set<AlbumInfo>().Find(v.ID);
                
                Assert.AreEqual(data.Name, "9WVkE");
                Assert.AreEqual(data.Description, "i8O");
                Assert.AreEqual(data.CreateBy, "user");
                Assert.IsTrue(DateTime.Now.Subtract(data.CreateTime.Value).Seconds < 10);
            }
        }

        [TestMethod]
        public void EditTest()
        {
            AlbumInfo v = new AlbumInfo();
            using (var context = new DataContext(_seed, DBTypeEnum.Memory))
            {
       			
                v.Name = "9WVkE";
                v.Description = "i8O";
                context.Set<AlbumInfo>().Add(v);
                context.SaveChanges();
            }

            AlbumInfoVM vm = _controller.Wtm.CreateVM<AlbumInfoVM>();
            var oldID = v.ID;
            v = new AlbumInfo();
            v.ID = oldID;
       		
            v.Name = "i7ovSXTZYY0BxmwX";
            v.Description = "ajqW8Z7Wn";
            vm.Entity = v;
            vm.FC = new Dictionary<string, object>();
			
            vm.FC.Add("Entity.Name", "");
            vm.FC.Add("Entity.Description", "");
            var rv = _controller.Edit(vm);
            Assert.IsInstanceOfType(rv, typeof(OkObjectResult));

            using (var context = new DataContext(_seed, DBTypeEnum.Memory))
            {
                var data = context.Set<AlbumInfo>().Find(v.ID);
 				
                Assert.AreEqual(data.Name, "i7ovSXTZYY0BxmwX");
                Assert.AreEqual(data.Description, "ajqW8Z7Wn");
                Assert.AreEqual(data.UpdateBy, "user");
                Assert.IsTrue(DateTime.Now.Subtract(data.UpdateTime.Value).Seconds < 10);
            }

        }

		[TestMethod]
        public void GetTest()
        {
            AlbumInfo v = new AlbumInfo();
            using (var context = new DataContext(_seed, DBTypeEnum.Memory))
            {
        		
                v.Name = "9WVkE";
                v.Description = "i8O";
                context.Set<AlbumInfo>().Add(v);
                context.SaveChanges();
            }
            var rv = _controller.Get(v.ID.ToString());
            Assert.IsNotNull(rv);
        }

        [TestMethod]
        public void BatchDeleteTest()
        {
            AlbumInfo v1 = new AlbumInfo();
            AlbumInfo v2 = new AlbumInfo();
            using (var context = new DataContext(_seed, DBTypeEnum.Memory))
            {
				
                v1.Name = "9WVkE";
                v1.Description = "i8O";
                v2.Name = "i7ovSXTZYY0BxmwX";
                v2.Description = "ajqW8Z7Wn";
                context.Set<AlbumInfo>().Add(v1);
                context.Set<AlbumInfo>().Add(v2);
                context.SaveChanges();
            }

            var rv = _controller.BatchDelete(new string[] { v1.ID.ToString(), v2.ID.ToString() });
            Assert.IsInstanceOfType(rv, typeof(OkObjectResult));

            using (var context = new DataContext(_seed, DBTypeEnum.Memory))
            {
                var data1 = context.Set<AlbumInfo>().Find(v1.ID);
                var data2 = context.Set<AlbumInfo>().Find(v2.ID);
                Assert.AreEqual(data1, null);
            Assert.AreEqual(data2, null);
            }

            rv = _controller.BatchDelete(new string[] {});
            Assert.IsInstanceOfType(rv, typeof(OkResult));

        }


    }
}

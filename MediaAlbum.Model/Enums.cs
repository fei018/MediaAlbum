using System;
using System.ComponentModel.DataAnnotations;

namespace MediaAlbum.Model
{

    public class RefDicNameAttribute : Attribute
    {
        public string Name { get; set; }
    }
}
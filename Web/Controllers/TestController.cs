﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Web.Controllers
{
    public class TestController : ApiController
    {
        public string Post(object obj)
        {
            return "hello";
        }
    }
}


      function parseCookieHeader(header) {
         var pairs = header.split(';');
         var cookies = {};


         for (var i = 0; i < pairs.length; i++) {
            var nameValue = pairs[i].split('=');
            cookies[nameValue[0].trim()] = nameValue[1];
         }
         return cookies;
      }
      var header = "username=Tung; expires=, 27 Oc 2022 1:51:00 PM;"
      var cookies = parseCookieHeader(header);
      console.log(cookies)
      document.getElementById("result").innerHTML = JSON.stringify(cookies)

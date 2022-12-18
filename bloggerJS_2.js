document.getElementsByTagName("title")[0].remove();
    const ishead = document.getElementsByTagName("head")[0];
    let meta = "<title>Oilycadre Me Bloggerjs 2 Js</title><meta name=\"description\" content=\"Search your article on Oilycadre Me Bloggerjs 2 Js - \" />";
    ishead.insertAdjacentHTML("beforeend", meta);
    const ispost = document.getElementsByClassName("slot_header")[0];
    let pozt = "<div class=\"row\"><div class=\"col-md-12\"><ul class=\"list-group\"></ul></div></div>";
    ispost.insertAdjacentHTML("afterend", pozt);
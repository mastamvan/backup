var maxHeight=400;$(function(){$(".dropdown > li").hover(function(){var i=$(this),t=i.find("ul"),a=i.find("a"),e=1.1*t.height(),h=e/maxHeight;i.data("origHeight",i.height()),a.addClass("hover"),t.show().css({paddingTop:i.data("origHeight")}),h>1&&i.css({height:maxHeight,overflow:"hidden"}).mousemove(function(a){var e=i.offset(),o=(a.pageY-e.top)*h-i.data("origHeight")*h;o>i.data("origHeight")&&t.css("top",-o+i.data("origHeight"))})},function(){var i=$(this);i.height($(this).data("origHeight")).find("ul").css({top:0}).hide().end().find("a").removeClass("hover")})});
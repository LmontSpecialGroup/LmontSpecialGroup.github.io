(function(b){"function"===typeof define&&define.amd?define(["jquery","./effect"],b):b(jQuery)})(function(b){return b.effects.effect.size=function(d,x){var g,n,h,p,c,e,a=b(this),w="position top bottom left right width height overflow opacity".split(" ");c="position top bottom left right overflow opacity".split(" ");var r=["width","height","overflow"],t=["fontSize"],k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
m=b.effects.setMode(a,d.mode||"effect"),u=d.restore||"effect"!==m,q=d.scale||"both";e=d.origin||["middle","center"];var y=a.css("position"),f=u?w:c,v={height:0,width:0,outerHeight:0,outerWidth:0};"show"===m&&a.show();c={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()};"toggle"===d.mode&&"show"===m?(a.from=d.to||v,a.to=d.from||c):(a.from=d.from||("show"===m?v:c),a.to=d.to||("hide"===m?v:c));h=a.from.height/c.height;p=a.from.width/c.width;g=a.to.height/c.height;
n=a.to.width/c.width;if("box"===q||"both"===q)h!==g&&(f=f.concat(k),a.from=b.effects.setTransition(a,k,h,a.from),a.to=b.effects.setTransition(a,k,g,a.to)),p!==n&&(f=f.concat(l),a.from=b.effects.setTransition(a,l,p,a.from),a.to=b.effects.setTransition(a,l,n,a.to));"content"!==q&&"both"!==q||h===g||(f=f.concat(t).concat(r),a.from=b.effects.setTransition(a,t,h,a.from),a.to=b.effects.setTransition(a,t,g,a.to));b.effects.save(a,f);a.show();b.effects.createWrapper(a);a.css("overflow","hidden").css(a.from);
e&&(e=b.effects.getBaseline(e,c),a.from.top=(c.outerHeight-a.outerHeight())*e.y,a.from.left=(c.outerWidth-a.outerWidth())*e.x,a.to.top=(c.outerHeight-a.to.outerHeight)*e.y,a.to.left=(c.outerWidth-a.to.outerWidth)*e.x);a.css(a.from);if("content"===q||"both"===q)k=k.concat(["marginTop","marginBottom"]).concat(t),l=l.concat(["marginLeft","marginRight"]),r=w.concat(k).concat(l),a.find("*[width]").each(function(){var a=b(this),c=a.height(),e=a.width(),f=a.outerHeight(),m=a.outerWidth();u&&b.effects.save(a,
r);a.from={height:c*h,width:e*p,outerHeight:f*h,outerWidth:m*p};a.to={height:c*g,width:e*n,outerHeight:c*g,outerWidth:e*n};h!==g&&(a.from=b.effects.setTransition(a,k,h,a.from),a.to=b.effects.setTransition(a,k,g,a.to));p!==n&&(a.from=b.effects.setTransition(a,l,p,a.from),a.to=b.effects.setTransition(a,l,n,a.to));a.css(a.from);a.animate(a.to,d.duration,d.easing,function(){u&&b.effects.restore(a,r)})});a.animate(a.to,{queue:!1,duration:d.duration,easing:d.easing,complete:function(){0===a.to.opacity&&
a.css("opacity",a.from.opacity);"hide"===m&&a.hide();b.effects.restore(a,f);u||("static"===y?a.css({position:"relative",top:a.to.top,left:a.to.left}):b.each(["top","left"],function(b,c){a.css(c,function(c,d){var e=parseInt(d,10),f=b?a.to.left:a.to.top;return"auto"===d?f+"px":e+f+"px"})}));b.effects.removeWrapper(a);x()}})}});
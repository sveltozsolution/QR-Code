webpackJsonp([10],{o2c2:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("LMZF"),e=(u("6Xbx"),u("ZBFC"),u("WYiA"),u("lTiK"),u("Cw/V")),i=u("5iOo"),d=function(){function l(l){this.webservice=l,this.items=[],this.id="",this.efirstname="",this.efamilyname="",this.ejobtitle="",this.ecompany="",this.ephonedirect="",this.ephonework="",this.ephonehome="",this.efax="",this.eemail="",this.econtacturl="",this.estreet="",this.ecity="",this.ezip="",this.estate="",this.ecountry="",this.efacebook="",this.etwitter="",this.epinterest="",this.elinkedin="",this.editcontactsection=!0,this.userid="",this.signin=!0,this.signout=!1,this.mydatasection=!1,this.eurl="",this.qrtype="url",this.qrdata=""}return l.prototype.ngOnInit=function(){this.initializecontactvariable(),this.bindqrcode(),this.userid=localStorage.getItem("userid"),null==this.userid?(this.signin=!0,this.signout=!1,this.mydatasection=!1):(this.signout=!0,this.signin=!1,this.mydatasection=!0)},l.prototype.initializecontactvariable=function(){this.efirstname="",this.efamilyname="",this.ejobtitle="",this.ecompany="",this.ephonedirect="",this.ephonework="",this.ephonehome="",this.efax="",this.eemail="",this.econtacturl="",this.estreet="",this.ecity="",this.ezip="",this.estate="",this.ecountry="",this.efacebook="",this.etwitter="",this.epinterest="",this.elinkedin=""},l.prototype.bindqrcode=function(){var l=this;this.webservice.getallqrcode().subscribe(function(n){l.dynamicjsondata(n)})},l.prototype.dynamicjsondata=function(l){this.items=[];for(var n="",u=l.length-1;u>=0;u--){var t="";if("contact"==l[u].qrtype){var e=l[u].qrdata,i=Object.keys(e).map(function(l){return e[l]}).map(function(l){return l.substr(0,l.length-4)});i.join(","),console.log(i),n=i[0]+" "+i[1],t="https://sveltozsolution.github.io/QR-Code/dynamicdata/"+l[u]._id}else t=l[u].qrdata;this.items.push({id:l[u]._id,name:n,generateddate:l[u].generateddate,qrtype:l[u].qrtype,path:t})}},l.prototype.Editurl=function(l){var n=this;this.eurl=" ",this.urlid=l,this.webservice.getqrcode(this.urlid).subscribe(function(l){n.qrtype="url",n.eurl=l.qrdata,console.log(n.qrdata)})},l.prototype.updateurl=function(){var l=(new Date).toLocaleDateString();this.webservice.Updateqrcode(this.urlid,l,this.userid,"url",this.eurl),window.location.reload()},l.prototype.DownloadQRCode=function(l){var n=this.qrcode_ana.elementRef.nativeElement.innerHTML,u=n.substr(0,n.length-2).split("base64,")[1],t=document.createElement("a");t.href="data:application/octet-stream;base64,"+u,t.download="qrcode.png",t.click()},l}(),o=u("UHIZ"),a={title:"Myqrcode"},s=function(){},c=u("0nO6"),r=u("Un6q"),p=u("TMwh"),m=function(){},h=u("auLa"),f=u("V5VU"),v=u("poDJ"),g=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-primary"],["data-toggle","modal"],["style","margin-left:5px;"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.Editcontact(l.parent.context.$implicit.id)&&t),"click"===n&&(t=!1!==e.contactModal.show()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Edit"]))],null,null)}function y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-primary"],["data-toggle","modal"],["style","margin-left:5px;"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.Editurl(l.parent.context.$implicit.id)&&e),"click"===n&&(e=!1!==t["\u0275nov"](l.parent.parent.parent,8).show()&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,["Edit"]))],null,null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,58,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](2,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](4,0,null,null,51,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](6,0,null,null,46,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](8,0,[["wrapper",1]],null,12,"div",[["class","col-sm-4"],["id","wrapper"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](10,0,null,null,1,"qr-code",[["style","margin-left: 15px;"]],null,null,null,h.b,h.a)),t["\u0275did"](11,573440,[[1,4],["qrcode",4]],0,i.a,[t.ElementRef],{size:[0,"size"],value:[1,"value"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](15,0,null,null,4,"button",[["class","btn btn-sm btn-primary"],["style","margin-left: 18px;width: 74px;height: 21px;"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.DownloadQRCode(l.context.$implicit.id)&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](17,0,null,null,1,"p",[["style","margin-top:-5px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Download"])),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](22,0,null,null,29,"div",[["class","col-sm-8 Download"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](24,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](26,0,null,null,5,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275eld"](28,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),t["\u0275ted"](29,null,["",""])),t["\u0275ppd"](30,1),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](33,0,null,null,7,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275eld"](35,0,null,null,4,"p",[["style","font-size: 25px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](36,null,["","\n                "])),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](38,16384,null,0,r.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](42,0,null,null,7,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275eld"](44,0,null,null,4,"p",[["style","color: green;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](45,null,["","\n                "])),(l()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](47,16384,null,0,r.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](54,0,null,null,0,"hr",[["style","border:1px solid black;margin-top:4px;width:94%;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](57,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "]))],function(l,n){l(n,11,0,110,n.context.$implicit.path),l(n,38,0,"contact"==n.context.$implicit.qrtype),l(n,47,0,"url"==n.context.$implicit.qrtype)},function(l,n){l(n,29,0,t["\u0275unv"](n,29,0,l(n,30,0,t["\u0275nov"](n.parent.parent,0),n.context.$implicit.generateddate))),l(n,36,0,n.context.$implicit.name),l(n,45,0,n.context.$implicit.path)})}function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,19,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](2,0,null,null,11,"div",[["class","row"],["style","margin-top:10px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](6,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n\n      "])),(l()(),t["\u0275eld"](8,0,null,null,1,"h3",[["style","background-color: #3c1e1ec2;color:white;padding-left:18px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["My Dynamic Codes\n      "])),(l()(),t["\u0275ted"](-1,null,["\n\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](12,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](18,802816,null,0,r.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){l(n,18,0,n.component.items)},null)}function C(l){return t["\u0275vid"](0,[t["\u0275pid"](0,r.d,[t.LOCALE_ID]),t["\u0275qud"](671088640,1,{qrcode_ana:0}),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](4,16384,null,0,r.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n\n"])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275eld"](7,16777216,null,null,44,"div",[["aria-hidden","true"],["aria-labelledby","myModalLabel"],["bsModal",""],["class","modal fade"],["role","dialog"],["tabindex","-1"]],null,[[null,"click"],[null,"keydown.esc"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,8).onClick(u)&&e),"keydown.esc"===n&&(e=!1!==t["\u0275nov"](l,8).onEsc()&&e),e},null,null)),t["\u0275did"](8,4341760,[["urlModal",4]],0,f.a,[t.ElementRef,t.ViewContainerRef,t.Renderer,v.a],null,null),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](10,0,null,null,39,"div",[["class","modal-dialog modal-primary"],["role","document"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](12,0,null,null,35,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](14,0,null,null,10,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](16,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Modal title"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](19,0,null,null,4,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,8).hide()&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](21,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\xd7"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](26,0,null,null,11,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](28,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](30,0,null,null,5,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,31)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,31).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,31)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,31)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.eurl=u)&&e),e},null,null)),t["\u0275did"](31,16384,null,0,c.b,[t.Renderer2,t.ElementRef,[2,c.a]],null,null),t["\u0275prd"](1024,null,c.f,function(l){return[l]},[c.b]),t["\u0275did"](33,671744,null,0,c.i,[[8,null],[8,null],[8,null],[2,c.f]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,c.g,null,[c.i]),t["\u0275did"](35,16384,null,0,c.h,[c.g],null,null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](39,0,null,null,7,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](41,0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,8).hide()&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,["Close"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](44,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updateurl()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Save changes"])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,4,0,u.mydatasection),l(n,33,0,u.eurl)},function(l,n){l(n,30,0,t["\u0275nov"](n,35).ngClassUntouched,t["\u0275nov"](n,35).ngClassTouched,t["\u0275nov"](n,35).ngClassPristine,t["\u0275nov"](n,35).ngClassDirty,t["\u0275nov"](n,35).ngClassValid,t["\u0275nov"](n,35).ngClassInvalid,t["\u0275nov"](n,35).ngClassPending)})}var q=t["\u0275ccf"]("ng-component",d,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ng-component",[],null,null,null,C,g)),t["\u0275prd"](512,null,e.a,e.a,[p.e,o.l]),t["\u0275did"](2,114688,null,0,d,[e.a],null,null)],function(l,n){l(n,2,0)},null)},{},{},[]),x=u("e7TK"),R=u("LdGb"),M=u("TRAr"),j=u("BhHz"),I=u("4zAq"),E=u("PK6g"),D=u("bIam"),T=u("EQxj"),_=u("yroR"),z=u("pBJ6");u.d(n,"MyqrcodeModuleNgFactory",function(){return L});var L=t["\u0275cmf"](m,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[q,x.a,R.a,M.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,r.m,r.l,[t.LOCALE_ID,[2,r.q]]),t["\u0275mpd"](4608,c.k,c.k,[]),t["\u0275mpd"](4608,p.c,p.c,[]),t["\u0275mpd"](4608,p.h,p.b,[]),t["\u0275mpd"](5120,p.k,p.l,[]),t["\u0275mpd"](4608,p.j,p.j,[p.c,p.h,p.k]),t["\u0275mpd"](4608,p.g,p.a,[]),t["\u0275mpd"](5120,p.e,p.m,[p.j,p.g]),t["\u0275mpd"](4608,j.a,j.a,[]),t["\u0275mpd"](4608,v.a,v.a,[t.ComponentFactoryResolver,t.NgZone,t.Injector,j.a,t.ApplicationRef]),t["\u0275mpd"](4608,I.a,I.a,[]),t["\u0275mpd"](4608,E.a,E.a,[v.a]),t["\u0275mpd"](512,o.o,o.o,[[2,o.t],[2,o.l]]),t["\u0275mpd"](512,s,s,[]),t["\u0275mpd"](512,D.a,D.a,[]),t["\u0275mpd"](512,T.a,T.a,[]),t["\u0275mpd"](512,r.b,r.b,[]),t["\u0275mpd"](512,_.a,_.a,[]),t["\u0275mpd"](512,c.j,c.j,[]),t["\u0275mpd"](512,c.c,c.c,[]),t["\u0275mpd"](512,p.f,p.f,[]),t["\u0275mpd"](512,i.b,i.b,[]),t["\u0275mpd"](512,m,m,[]),t["\u0275mpd"](1024,o.j,function(){return[[{path:"",component:d,data:a}]]},[]),t["\u0275mpd"](256,z.a,{autoClose:!0},[])])})}});
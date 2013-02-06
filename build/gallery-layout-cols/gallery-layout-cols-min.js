YUI.add("gallery-layout-cols",function(b){var d=(0<b.UA.ie&&b.UA.ie<8);b.namespace("PageLayoutCols");b.PageLayoutCols.collapse_classes={vert_parent_class:b.PageLayout.module_class,horiz_parent_class:b.PageLayout.module_cols_class,collapse_parent_pattern:"("+b.PageLayout.expand_left_nub_class+"|"+b.PageLayout.expand_right_nub_class+")"};function c(f,e){var g=f;if(e.hd){g-=e.hd.get("offsetHeight");}if(e.ft){g-=e.ft.get("offsetHeight");}g-=e.bd.vertMarginBorderPadding();return Math.max(g,b.PageLayout.min_module_height);}function a(j,i,h,g,f,e){e.mbp=f.vertMarginBorderPadding();return Math.max(1,Math.floor(j*i[h][g]/100)-e.mbp);}b.PageLayoutCols.resize=function(F,E,P,x){var f=F.get("matchColumnHeights");var C=F.body_info.outers.size();if(E===b.PageLayout.FIT_TO_VIEWPORT){var u=[],s=[];for(var L=0;L<C;L++){var O=F.body_info.inner_sizes[L].slice(0);u.push(O);s.push(x);var N=0,n=0;var Q=F.body_info.modules[L];var y=Q.size();for(var K=0;K<y;K++){var g=Q.item(K);if(g.hasClass(b.PageLayout.collapsed_vert_class)){g.setStyle("height","auto");O[K]=-g.get("offsetHeight");s[L]-=g.totalHeight();}else{if(O[K]>0){N++;n+=O[K];}}}if(N<y){for(var K=0;K<y;K++){if(O[K]>0){O[K]*=(100/n);}}}}}var I={};var l=F.body_info.outer_sizes.slice(0);var N=0,n=0;for(var L=0;L<C;L++){var t=F.body_info.outers.item(L);var r=t.hasClass(b.PageLayout.collapsed_horiz_class);var Q=F.body_info.modules[L];if(r||l[L]<0){l[L]=0;if(r){t.setStyle("width","auto");Q.item(0).setStyle("width","auto");}else{if(d){var q=F._analyzeModule(Q.item(0));if(q.bd){var S=q.bd.totalWidth()+Q.item(K).horizMarginBorderPadding();q.root.setStyle("width",S+"px");t.setStyle("width",S+"px");}}}P-=t.totalWidth();}else{N++;n+=l[L];if(Q.size()==1){Q.item(0).setStyle("height","auto");}}}if(N<C){for(var L=0;L<C;L++){l[L]*=(100/n);}}var H=0,G=0,p=[];for(var L=0;L<C;L++){if(l[L]==0){var g=F.body_info.modules[L].item(0);var q=F._analyzeModule(g);if(E===b.PageLayout.FIT_TO_VIEWPORT){var M=a(s[L],u,L,0,g,I);g.setStyle("height",M+"px");if(q.bd){var z=c(M,q);var B=q.bd.insideWidth();F.fire("beforeResizeModule",{bd:q.bd,height:z,width:B});q.bd.setStyle("height",z+"px");F.fire("afterResizeModule",{bd:q.bd,height:z,width:B});}}else{if(q.bd){F.fire("beforeResizeModule",{bd:q.bd,height:"auto",width:"auto"});q.root.setStyle("height","auto");q.bd.setStyle("height","auto");if(f){p.push([[q.bd,q.bd.insideWidth()]]);}else{F.fire("afterResizeModule",{bd:q.bd,height:q.bd.insideHeight(),width:q.bd.insideWidth()});}}}continue;}G++;var A=Math.max(1,Math.floor(P*l[L]/100));H+=A;if(G==N){A+=P-H;}A=Math.max(1,A-F.body_info.outers.item(L).horizMarginBorderPadding());F.body_info.outers.item(L).setStyle("width",A+"px");A=Math.max(1,A-F.body_info.modules[0].item(0).horizMarginBorderPadding());var Q=F.body_info.modules[L];if(E===b.PageLayout.FIT_TO_VIEWPORT){var e=0;var D=Q.size();var y=D;for(var K=0;K<y;K++){var M=u[L][K];if(M<0){e+=Q.item(K).totalHeight();D--;}}var J=0;for(var K=0;K<y;K++){var g=Q.item(K);var q=F._analyzeModule(g);if(u[L][K]<0){var z=q.bd.insideHeight();var B=A-q.root.horizMarginBorderPadding()-q.bd.horizMarginBorderPadding();F.fire("beforeResizeModule",{bd:q.bd,height:z,width:B});g.setStyle("width",A+"px");F.fire("afterResizeModule",{bd:q.bd,height:z,width:B});continue;}J++;if(q.bd){var M=a(s[L],u,L,K,g,I);var z=c(M,q);e+=M+I.mbp;if(J==D){z+=x-e;}var B=Math.max(1,A-q.bd.horizMarginBorderPadding());F.fire("beforeResizeModule",{bd:q.bd,height:z,width:B});F._setWidth(q,A);q.bd.setStyle("height",z+"px");F.fire("afterResizeModule",{bd:q.bd,height:z,width:B});}}}else{p.push([]);var y=Q.size();for(var K=0;K<y;K++){var q=F._analyzeModule(Q.item(K));if(q.bd){var B=Math.max(1,A-q.bd.horizMarginBorderPadding());F.fire("beforeResizeModule",{bd:q.bd,height:"auto",width:B});F._setWidth(q,A);q.root.setStyle("height","auto");q.bd.setStyle("height","auto");if(f){p[L].push([q.bd,B]);}else{F.fire("afterResizeModule",{bd:q.bd,height:q.bd.insideHeight(),width:B});}}}}}if(E===b.PageLayout.FIT_TO_CONTENT&&f){var M=0;for(var L=0;L<C;L++){M=Math.max(M,F.body_info.outers.item(L).get("offsetHeight"));}for(var L=0;L<C;L++){var Q=F.body_info.modules[L],y=Q.size(),g=null,B=0;for(var K=y-1;K>=0;K--){var v=Q.item(K);if(y==1||(!g&&!v.hasClass(b.PageLayout.collapsed_vert_class)&&F.body_info.inner_sizes[L][K]>0)){g=v;B=p[L][K][1];}else{var o=p[L][K][0];F.fire("afterResizeModule",{bd:o,height:o.insideHeight(),width:p[L][K][1]});}}if(g){var R=M-F.body_info.outers.item(L).get("offsetHeight");if(R>0&&g.get("parentNode").hasClass(b.PageLayout.collapsed_horiz_class)){g.setStyle("height",(g.insideHeight()+R)+"px");}else{var q=F._analyzeModule(g);if(q.bd){var z=q.bd.insideHeight()+R;g.setStyle("height","auto");q.bd.setStyle("height",z+"px");F.fire("afterResizeModule",{bd:q.bd,height:z,width:B});}}}}}};},"gallery-2012.05.16-20-37",{requires:["gallery-layout"]});
"use strict";$(function(){function e(){var e=[],a=[],l=[];for(var t in R){var n=R[t],s=n.catId,d='<li><label><input type="radio" name="message" value="'+n.id+'">'+n.text+"</label></li>";switch(s){case 1:e+=d;break;case 2:a+=d;break;case 3:l+=d}}$("#want_message_list").html(e),$("#release_message_list").html(a),$("#other_message_list").html(l)}function a(){$("input[name=message][value="+bulletinBoardInfo.messageId+"]").prop("checked","checked"),u()}function l(){g=f.CONFIRM_PAGE_MOVE,(new CommonDialogClass).DisplayDialog('<p class="tx_c">カード一覧ページへ移動します。</p><p class="tx_c">よろしいですか？</p>',{yes:!0,no:!0})}function t(){deviceInfo.isMobile&&$("body").addClass("popup"),$("#comic_hint_wrapper").removeClass("display_none").addClass("display_block"),deviceInfo.isMobile?$("body").scrollTop(0):$("#comic_hint_wrapper").scrollTop(0)}function n(){deviceInfo.isMobile&&$("body").removeClass("popup"),$("#comic_hint_wrapper").removeClass("display_block").addClass("display_none")}function s(){return g===f.CONFIRM_PAGE_MOVE?void(window.location.href="/card_list"):void(g===f.CONFIRM_WANT_CLEAR?p.ChangeOrderBoardInfo(0,null,null,null,function(){I()}):g===f.CONFIRM_RELEASE_CLEAR?p.ChangeOrderBoardInfo(null,0,null,null,function(){I()}):g===f.CARD_CLEAR&&p.ChangeOrderBoardInfo(0,0,null,null,function(){I()}))}function d(){g=f.ClOSE,b.CloseDialog()}function o(){b.CloseDialog()}function i(){if(bulletinBoardInfo.wantCardId>0){g=f.CONFIRM_WANT_CLEAR;var e=p.bulletinBoardMessage.CONFIRM_CLEAR;b.DisplayDialog(e,{yes:!0,no:!0})}}function r(){if(bulletinBoardInfo.releaseCardId>0){g=f.CONFIRM_RELEASE_CLEAR;var e=p.bulletinBoardMessage.CONFIRM_CLEAR;new b.DisplayDialog(e,{yes:!0,no:!0})}}function c(){var e=$(this);$("#message_list_area li").removeClass("selected"),e.addClass("selected")}function _(){var e=parseInt($("input[name=message]:checked").val(),10);u(),p.ChangeOrderBoardInfo(null,null,e,null,function(){I()})}function C(){var e=parseInt($("#valid_setting").val(),10);p.ChangeOrderBoardInfo(null,null,null,e,function(){I()})}function m(){deviceInfo.isMobile&&$("body").addClass("popup"),$("#message_list_wrapper").removeClass("display_none").addClass("display_block"),deviceInfo.isMobile?$("body").scrollTop(0):$("#message_list_wrapper").scrollTop(0)}function u(){deviceInfo.isMobile&&$("body").removeClass("popup"),$("#message_list_wrapper").removeClass("display_block").addClass("display_none")}function I(){var e="",a="",l="",t="",n="",s="";bulletinBoardInfo.wantCardId>0?(e=masterCard[bulletinBoardInfo.wantCardId%1e4].m_img,l=masterCard[bulletinBoardInfo.wantCardId%1e4].name,bulletinBoardInfo.wantCardId>=1e4&&$("#want_card_foil").removeClass("display_none").addClass("display_block"),$("#want_card_img").css("background-image","url("+e+")"),$("#want_card_rarity").addClass("rarity_"+constant.rarity[masterCard[bulletinBoardInfo.wantCardId%1e4].rarity].tag),$("#want_card_name").html(l),$("#want_card_unset_bt").removeClass("disable")):($("#want_card_img").css("background-image","").addClass("no_set_card"),$("#want_card_unset_bt").addClass("disable"),$("#want_card_name").html(v),$("#want_card_foil").removeClass("display_block").addClass("display_none"),$("#want_card_rarity").removeClass()),bulletinBoardInfo.releaseCardId>0?(a=masterCard[bulletinBoardInfo.releaseCardId%1e4].m_img,t=masterCard[bulletinBoardInfo.releaseCardId%1e4].name,bulletinBoardInfo.releaseCardId>=1e4&&$("#present_card_foil").removeClass("display_none").addClass("display_block"),$("#present_card_img").css("background-image","url("+a+")"),$("#present_card_rarity").addClass("rarity_"+constant.rarity[masterCard[bulletinBoardInfo.releaseCardId%1e4].rarity].tag),$("#release_card_unset_bt").removeClass("disable"),$("#present_card_name").html(t)):($("#present_card_img").css("background-image","").addClass("no_set_card"),$("#release_card_unset_bt").addClass("disable"),$("#present_card_name").html(v),$("#present_card_foil").removeClass("display_block").addClass("display_none"),$("#present_card_rarity").removeClass()),bulletinBoardInfo.messageId>0?($("input[name=message][value="+bulletinBoardInfo.messageId+"]").prop("checked","checked"),n=R[bulletinBoardInfo.messageId].text):n="--",s='<option value="">'+n+"</option>",$("#set_message").html(n),$("#order_comment_preview").html(n),1==bulletinBoardInfo.usedBulletinBoardFlag?$("#valid_setting").val(bulletinBoardInfo.usedBulletinBoardFlag):$("#valid_setting").val(0)}var p=new BulletinBoardClass,b=new CommonDialogClass,f={CONFIRM_PAGE_MOVE:"CONFIRM_PAGE_MOVE",CONFIRM_WANT_CLEAR:"CONFIRM_WANT_CLEAR",CONFIRM_RELEASE_CLEAR:"CONFIRM_RELEASE_CLEAR",CARD_CLEAR:"CARD_CLEAR",ClOSE:"CLOSE"},g=f.ClOSE,v="相談してね(カード未設定)",R={1:{id:1,catId:1,text:"SR欲しいです！"},2:{id:2,catId:1,text:"VR欲しいです！"},3:{id:3,catId:1,text:"R欲しいです！"},4:{id:4,catId:1,text:"PR欲しいです！"},5:{id:5,catId:1,text:"フォイル欲しいです！"},6:{id:6,catId:1,text:"他にも欲しいです！"},7:{id:7,catId:2,text:"SR出せます！"},8:{id:8,catId:2,text:"VR出せます！"},9:{id:9,catId:2,text:"R出せます！"},10:{id:10,catId:2,text:"PR出せます！"},11:{id:11,catId:2,text:"フォイル出せます！"},12:{id:12,catId:2,text:"他にも出せます！"},13:{id:13,catId:3,text:"よろしく！"},14:{id:14,catId:3,text:"複数交換希望です！"},15:{id:15,catId:3,text:"フレンド募集中！"},16:{id:16,catId:3,text:"対戦相手募集中！"},17:{id:17,catId:3,text:"COJ団仲間募集中！"},18:{id:18,catId:3,text:"朝昼やってます！"},19:{id:19,catId:3,text:"夕方にやってます！"},20:{id:20,catId:3,text:"夜にやってます！"}};e(),p.getOrderBoardInfo(function(){if(Object.keys(masterCard).length>0)I();else{var e;e=setInterval(function(){Object.keys(masterCard).length>0&&(clearInterval(e),I())},100)}}),$("#message_list_area").on("click","li",c),$("#bt_select").on("click",m),$("#message_setting_btn").on("click",_),$("#message_cancel_btn").on("click",a),$("#game_display_information_set_bt").on("click",C),$("#want_card_unset_bt").on("click",i),$("#release_card_unset_bt").on("click",r),$("#common_popup_accept").on("click",s),$("#common_popup_decline").on("click",o),$("#common_popup_close").on("click",d),$("#bt_card_set").on("click",l),$("#bt_card_set_reset").on("click",function(){g=f.CARD_CLEAR;var e=p.bulletinBoardMessage.CONFIRM_CLEAR;(new CommonDialogClass).DisplayDialog(e,{yes:!0,no:!0})}),$("#bt_comic_hint").on("click",t),$("#hint_comic_close").on("click",n)});
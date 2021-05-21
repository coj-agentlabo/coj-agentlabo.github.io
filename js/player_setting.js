"use strict";$(function(){function e(){$.ajax({url:"/get_player_setting",dataType:"json",success:function(e,o,s){O=e.isAvailableInitPlace,D=e.prohibitPresentFlag,B=e.aimeAuthKeyValidFlag,G=e.gameAuthKey,M=e.aimeList,w=e.isExistGameAuthKey,j=e.isActiveFriend,F=e.userInfoSetting,N=e.deckOpenSettingList,L=e.friendSearchFlag,O?($("#reset_location_bt").removeClass("display_none").addClass("display_block"),$("#error_reset_location").removeClass("display_block").addClass("display_none")):($("#reset_location_bt").removeClass("display_block").addClass("display_none"),$("#error_reset_location").removeClass("display_none").addClass("display_block")),$("#select_restrict_card").val(D),$("#select_auth_key").val(B),w===!1&&1===B&&($("#select_auth_key").attr("disabled","disabled"),$("#bt_auth_key_set").addClass("disable")),w&&1===B&&($("#body_auth_verification").removeClass("display_none").addClass("display_block"),$("#body_auth_reset").removeClass("display_none").addClass("display_block"));for(var t="",l=0;l<M.length;l++){var p="",n="";M[l].isCurrent&&(n="selected"),p='<option value="'+M[l].id+'" '+n+">"+M[l].userName+"</option>",t+=p}$("#select_labo_aime").html("").html(t),localStorage.animationDeckEditType||(localStorage.animationDeckEditType=constant.activeState.ACTIVE),localStorage.foilCardDispType||(localStorage.foilCardDispType=constant.foilCardDispType.PARALLEL),localStorage.cardBoxCardCount||(localStorage.cardBoxCardCount=1),localStorage.searchFlavorFlag||(localStorage.searchFlavorFlag=0),localStorage.searchVoiceFlag||(localStorage.searchVoiceFlag=0),localStorage.searchIllFlag||(localStorage.searchIllFlag=0),$("#select_deck_anim").val(localStorage.animationDeckEditType),$("#select_foil_display").val(localStorage.foilCardDispType),$("#select_card_display").val(localStorage.cardBoxCardCount),$("#select_free_search_flavor").val(localStorage.searchFlavorFlag),$("#select_free_search_voice").val(localStorage.searchVoiceFlag),$("#select_free_search_illustrator").val(localStorage.searchIllFlag),j&&$("#setting_friend_area").removeClass("display_none").addClass("display_block"),$("#select_pub_player").val(F);for(var _="",l=0;l<N.length;l++){var c="";c='<option value="'+N[l].index+'">'+N[l].name+"</option>",_+=c}$("#select_deck").html("").html(_),$("#select_pub_deck").val(N[0].state),$("#select_ub_search").val(L),a()},error:function(e,a,o){}})}function a(){$("#reset_location_bt").on("click",p),$("#restrict_card_switch_bt").on("click",h),$("#bt_auth_key_set").on("click",k),$("#auth_verification_bt").on("click",S),$("#auth_reset_bt").on("click",g),$("#labo_animation_set_bt").on("click",g),$("#labo_aime_switch_bt").on("click",E),$("#deck_anim_set_bt").on("click",n),$("#mouse_anim_set_bt").on("click",g),$("#foil_display_set_bt").on("click",_),$("#card_display_set_bt").on("click",c),$("#free_search_flavor_set_bt").on("click",i),$("#free_search_voice_set_bt").on("click",r),$("#free_search_illustrator_set_bt").on("click",d),$("#pub_player_set_bt").on("click",T),$("#pub_deck_set_bt").on("click",P),$("#pub_search_set_bt").on("click",A),$("#auth_popup_close").on("click",m),$("#auth_popup_accept").on("click",y),$("#auth_popup_decline").on("click",C),$("#auth_popup_cancel").on("click",v),$("#select_deck").change(o),$("#entry_up_bt").on("click",u),$("#entry_down_bt").on("click",u),$("#entry_left_bt").on("click",u),$("#entry_right_bt").on("click",u),$("#common_popup_accept").on("click",s),$("#common_popup_decline").on("click",t),$("#common_popup_close").on("click",l),R=!0,deviceInfo.isMobile&&(x.mobileBtnHover($("#reset_location_bt")),x.mobileBtnHover($("#restrict_card_switch_bt")),x.mobileBtnHover($("#bt_auth_key_set")),x.mobileBtnHover($("#auth_verification_bt")),x.mobileBtnHover($("#auth_reset_bt")),x.mobileBtnHover($("#labo_aime_switch_bt")),x.mobileBtnHover($("#deck_anim_set_bt")),x.mobileBtnHover($("#foil_display_set_bt")),x.mobileBtnHover($("#card_display_set_bt")),x.mobileBtnHover($("#free_search_flavor_set_bt")),x.mobileBtnHover($("#free_search_illustrator_set_bt")),x.mobileBtnHover($("#pub_player_set_bt")),x.mobileBtnHover($("#pub_deck_set_bt")),x.mobileBtnHover($("#pub_search_set_bt")),x.mobileBtnHover($("#entry_up_bt")),x.mobileBtnHover($("#entry_down_bt")),x.mobileBtnHover($("#entry_left_bt")),x.mobileBtnHover($("#entry_right_bt")),x.mobileBtnHover($("#auth_popup_close")),x.mobileBtnHover($("#auth_popup_accept")),x.mobileBtnHover($("#auth_popup_decline")),x.mobileBtnHover($("#auth_popup_cancel")))}function o(){var e=$("#select_deck").val(),a=N[e].state;$("#select_pub_deck").val(a)}function s(){U===K.PROHIBIT_PRESENT_CARD_P1?f():U===K.RESET_PLACE_P1&&b()}function t(){U===K.PROHIBIT_PRESENT_CARD_P1&&$("#select_restrict_card").val(D),deviceInfo.isMobile&&$("body").removeClass("popup"),$("#common_popup_wrapper").removeClass("display_block").addClass("display_none"),x.resetDialogInfo(),$("#popup_container").html(""),U=K.CLOSE}function l(){deviceInfo.isMobile&&$("body").removeClass("popup"),$("#common_popup_wrapper").removeClass("display_block").addClass("display_none"),x.resetDialogInfo(),$("#popup_container").html(""),U===K.CHANGE_AIME?location.reload():U===K.TOGGLE_GAME_AUTH_KEY_P1?location.reload():U===K.RESET_PLACE_P2,U=K.CLOSE}function p(){U=K.RESET_PLACE_P1,deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_accept").removeClass("display_none"),$("#common_popup_decline").removeClass("display_none"),$("#popup_container").html("").html('<p class="tx_c">登録店舗を初期化して「未登録」に戻します。よろしいですか？</p>'),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block")}function n(){deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),0==parseInt($("#select_deck_anim").val(),10)||1==parseInt($("#select_deck_anim").val(),10)?(localStorage.animationDeckEditType=parseInt($("#select_deck_anim").val(),10),$("#popup_container").html("").html('<p class="tx_c">設定しました。</p>')):$("#popup_container").html("").html('<p class="tx_c">不適切な値が入力されました。</p>')}function _(){deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),0==parseInt($("#select_foil_display").val(),10)||1==parseInt($("#select_foil_display").val(),10)?(localStorage.foilCardDispType=parseInt($("#select_foil_display").val(),10),$("#popup_container").html("").html('<p class="tx_c">設定しました。</p>')):$("#popup_container").html("").html('<p class="tx_c">不適切な値が入力されました。</p>')}function c(){deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),parseInt($("#select_card_display").val(),10)>=0&&parseInt($("#select_card_display").val(),10)<=3?(localStorage.cardBoxCardCount=parseInt($("#select_card_display").val(),10),$("#popup_container").html("").html('<p class="tx_c">設定しました。</p>')):$("#popup_container").html("").html('<p class="tx_c">不適切な値が入力されました。</p>')}function i(){deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),0==parseInt($("#select_free_search_flavor").val(),10)||1==parseInt($("#select_free_search_flavor").val(),10)?(localStorage.searchFlavorFlag=parseInt($("#select_free_search_flavor").val(),10),$("#popup_container").html("").html('<p class="tx_c">設定しました。</p>')):$("#popup_container").html("").html('<p class="tx_c">不適切な値が入力されました。</p>')}function r(){deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),0==parseInt($("#select_free_search_voice").val(),10)||1==parseInt($("#select_free_search_voice").val(),10)?(localStorage.searchVoiceFlag=parseInt($("#select_free_search_voice").val(),10),$("#popup_container").html("").html('<p class="tx_c">設定しました。</p>')):$("#popup_container").html("").html('<p class="tx_c">不適切な値が入力されました。</p>')}function d(){deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),0==parseInt($("#select_free_search_illustrator").val(),10)||1==parseInt($("#select_free_search_illustrator").val(),10)?(localStorage.searchIllFlag=parseInt($("#select_free_search_illustrator").val(),10),$("#popup_container").html("").html('<p class="tx_c">設定しました。</p>')):$("#popup_container").html("").html('<p class="tx_c">不適切な値が入力されました。</p>')}function u(){var e='<div class="tx_c">この認証キーでよろしいですか？</div>',a=0,o="",s="",t="";if(o=String($(this).attr("id")).split("_")[1],H>=4){var l=!1;for(var p in V)V[p]!=o&&(l=!0);if(!l)return}H++,a=H,s="auth_keys_"+a,t="keys_"+o,$("#"+s).removeClass().addClass(t),V[a]=o,5===H&&(I(),$("#auth_popup_container").html("").html(e),$("#auth_popup_accept").removeClass("display_none"),$("#auth_popup_decline").removeClass("display_none"))}function m(){deviceInfo.isMobile&&$("body").removeClass("popup"),$("#auth_popup_wrapper").removeClass("display_block").addClass("display_none")}function v(){deviceInfo.isMobile&&$("body").removeClass("popup"),$("#auth_popup_wrapper").removeClass("display_block").addClass("display_none")}function y(){var e="",a={uk:uk,beforeGameAuthKey:G,afterGameAuthKey:V};$.ajax({url:"/change_auth_key_setting",contentType:"application/json",dataType:"json",data:JSON.stringify(a),type:"POST",timeout:2e4,success:function(a,o,s){return a.status!==constant.responseStatus.SUCCESS?void x.error(a.status):(e='<div class="tx_c">認証キーを設定しました。</div>',G=V,I(),$("#auth_popup_container").html("").html(e),$("#auth_popup_close").removeClass("display_none"),$("#auth_keys").removeClass("display_block").addClass("display_none"),$("#auth_button_area").removeClass("display_block").addClass("display_none"),void 0)},error:function(e,a,o){}})}function C(){deviceInfo.isMobile&&$("body").removeClass("popup"),$("#auth_button_area").removeClass("display_block").addClass("display_none"),$("#auth_popup_wrapper").removeClass("display_block").addClass("display_none")}function b(){var e="",a={uk:uk};U=K.RESET_PLACE_P2,$.ajax({url:"/init_place",contentType:"application/json",dataType:"json",data:JSON.stringify(a),type:"POST",timeout:2e4,success:function(a,o,s){return a.status!==constant.responseStatus.SUCCESS?void x.error(a.status):(e='<p class="tx_c">登録店舗を初期化しました。</p>',$("#reset_location_bt").removeClass("display_block").addClass("display_none"),$("#error_reset_location").removeClass("display_none").addClass("display_block"),deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),$("#popup_container").html("").html(e),void 0)},error:function(e,a,o){}})}function h(){U=K.PROHIBIT_PRESENT_CARD_P1;var e=$("#select_restrict_card  option:selected").text();deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_accept").removeClass("display_none"),$("#common_popup_decline").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),$("#popup_container").html("").html('<p class="tx_c">VR・SRカード保護機能を'+e+'にします。</p><p class="tx_c">よろしいですか？</p>')}function f(){if(R){var e="",a=parseInt($("#select_restrict_card").val(),10),o={uk:uk,prohibitPresentFlag:0};R=!1,U=K.PROHIBIT_PRESENT_CARD_P2,a===constant.activeState.ACTIVE?o.prohibitPresentFlag=constant.activeState.ACTIVE:o.prohibitPresentFlag=constant.activeState.INACTIVE,$.ajax({url:"/change_present_card_setting",contentType:"application/json",dataType:"json",data:JSON.stringify(o),type:"POST",success:function(a,s,t){if(a.status!==constant.responseStatus.SUCCESS)return void x.error(a.status);var l=$("#select_restrict_card  option:selected").text();e='<p class="tx_c">'+l+"に切り替えました</p>",D=o.prohibitPresentFlag,deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),$("#popup_container").html("").html(e),R=!0},error:function(e,a,o){R=!0}})}}function k(){if(w||0===B){var e="",a=parseInt($("#select_auth_key").val(),10),o={uk:uk,aimeAuthKeyValidFlag:a};U=K.TOGGLE_GAME_AUTH_KEY_P1,$.ajax({url:"/game_auth_key_toggle",contentType:"application/json",dataType:"json",data:JSON.stringify(o),type:"POST",timeout:2e4,success:function(o,s,t){return o.status!==constant.responseStatus.SUCCESS?void x.error(o.status):(e='<p class="tx_c">切り替えました</p>',B=a,deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),$("#popup_container").html("").html(e),void 0)},error:function(e,a,o){}})}}function S(){if(0!==Object.keys(G).length){for(var e in G){var a="auth_keys_"+e,o="keys_"+G[e];$("#"+a).removeClass().addClass(o)}deviceInfo.isMobile&&$("body").addClass("popup"),I(),$("#auth_popup_container").html("").html('<div class="tx_c">現在の認証キーは以下の通りです。</div>'),$("#auth_popup_close").removeClass("display_none"),$("#auth_keys").removeClass("display_none").addClass("display_block"),$("#auth_button_area").removeClass("display_block").addClass("display_none"),$("#auth_popup_wrapper").removeClass("display_none").addClass("display_block")}}function g(){var e='<div class="tx_c">新しい認証キーを入力してください。</div><div class="tx_c">※全て同じキーを入力することはできません。</div>';if(0!==Object.keys(G).length){H=0,V={};for(var a in G){var o="auth_keys_"+a;$("#"+o).removeClass()}deviceInfo.isMobile&&$("body").addClass("popup"),I(),$("#auth_popup_container").html("").html(e),$("#auth_popup_cancel").removeClass("display_none"),$("#auth_keys").removeClass("display_none").addClass("display_block"),$("#auth_button_area").removeClass("display_none").addClass("display_block"),$("#auth_popup_wrapper").removeClass("display_none").addClass("display_block")}}function I(){$("#auth_popup_container").html(""),$("#auth_button_area").removeClass("display_block").addClass("display_none"),$("#auth_popup_close").removeClass("display_block").addClass("display_none"),$("#auth_popup_accept").removeClass("display_block").addClass("display_none"),$("#auth_popup_decline").removeClass("display_block").addClass("display_none"),$("#auth_popup_cancel").removeClass("display_block").addClass("display_none")}function E(){for(var e="",a=String($("#select_labo_aime").val()),o="",s={},t=!0,l="",p={uk:uk,id:""},n=0;n<M.length;n++)a===M[n].id&&(s=M[n]),M[n].isCurrent&&(o=M[n].id);return s.isCurrent?(t=!1,l='<p class="tx_c">切り替え先のAimeが現在と同じです。</p>'):s.isDenyVer?(t=!1,l='<p class="tx_c">プレイデータがVer.2.0EX3_05未満のAimeへは切り替えを行うことができません。</p>'):s.isBanUser?(t=!1,l='<p class="tx_c">このプレイヤーアカウントは現在利用停止中です。</p>'):s.isMaintenanceUser&&(t=!1,l='<p class="tx_c">このプレイヤーアカウントは現在メンテナンス対応中のためご利用になれません。</p>'),t?(p.id=a,void $.ajax({url:"/change_aime",contentType:"application/json",dataType:"json",data:JSON.stringify(p),type:"POST",timeout:2e4,success:function(a,o,t){return a.status!==constant.responseStatus.SUCCESS?void x.error(a.status):(e='<p class="tx_c">利用Aimeを'+s.userName+"に切り替えました</p>",U=K.CHANGE_AIME,deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),$("#popup_container").html("").html(e),void 0)},error:function(e,a,o){}})):($("#select_labo_aime").val(o),deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),void $("#popup_container").html("").html(l))}function T(){var e="",a=parseInt($("#select_pub_player").val(),10),o={uk:uk,userInfoSetting:0};o.userInfoSetting=a,$.ajax({url:"/change_profile_open_setting",contentType:"application/json",dataType:"json",data:JSON.stringify(o),type:"POST",success:function(a,o,s){return a.status!==constant.responseStatus.SUCCESS?void x.error(a.status):(e='<p class="tx_c">設定しました。</p>',deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),$("#popup_container").html("").html(e),void 0)},error:function(e,a,o){}})}function P(){var e="",a={uk:uk,index:"",status:0};a.index=parseInt($("#select_deck").val(),10),a.status=parseInt($("#select_pub_deck").val(),10),$.ajax({url:"/change_deck_open_setting",contentType:"application/json",dataType:"json",data:JSON.stringify(a),type:"POST",timeout:2e4,success:function(o,s,t){return o.status!==constant.responseStatus.SUCCESS?void x.error(o.status):(N[a.index].state=a.status,e='<p class="tx_c">設定しました。</p>',deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),$("#popup_container").html("").html(e),void 0)},error:function(e,a,o){x.error(constant.responseStatus.EXCEPTION_ERROR)}})}function A(){var e="",a=parseInt($("#select_ub_search").val(),10),o={uk:uk,friendSearchFlag:0};a===constant.activeState.ACTIVE?o.friendSearchFlag=constant.activeState.ACTIVE:o.friendSearchFlag=constant.activeState.INACTIVE,$.ajax({url:"/change_search_open_setting",contentType:"application/json",dataType:"json",data:JSON.stringify(o),type:"POST",success:function(a,o,s){return a.status!==constant.responseStatus.SUCCESS?void x.error(a.status):(e='<p class="tx_c">設定しました。</p>',deviceInfo.isMobile&&$("body").addClass("popup"),x.resetDialogInfo(),$("#common_popup_close").removeClass("display_none"),$("#common_popup_wrapper").removeClass("display_none").addClass("display_block"),$("#popup_container").html("").html(e),void 0)},error:function(e,a,o){}})}var x=new commonClass,H=0,R=!1,O=!1,D=0,B=!1,M=[],w=0,j=!1,F=0,N=[],L=0,G={},V={},U="",K={CLOSE:"CLOSE",RESET_PLACE_P1:"RESET_PLACE_P1",RESET_PLACE_P2:"RESET_PLACE_P2",TOGGLE_GAME_AUTH_KEY_P1:"TOGGLE_GAME_AUTH_KEY_P1",PROHIBIT_PRESENT_CARD_P1:"PROHIBIT_PRESENT_CARD_P1",PROHIBIT_PRESENT_CARD_P2:"PROHIBIT_PRESENT_CARD_P2",CHANGE_AIME:"CHANGE_AIME"};e()});
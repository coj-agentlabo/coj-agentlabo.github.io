!function(e,n,t){var i=(n.Composition,n.Symbol),o=new MyUnitModule;!function(n){i.bindElementAction(t,n,"document","compositionReady",function(n,t){e("#event_popup_accept").on("click",function(){currentDialog===dialog.PURCHASE_PRESENT_P2&&o.getPurchaseResult(function(e){if(null===e){n.createChildSymbol("present","Stage")}isActiveEvent=!0})}),e("#event_popup_next").on("click",function(){if(currentDialog===dialog.PURCHASE_PRESENT_P3){for(var t=n.getChildSymbols(),i=0;i<t.length;i++)"present"===t[i].name&&t[i].deleteSymbol();o.afterPurchasePresentAnimation(),e("#event_popup_next").addClass("display_none"),e("#event_popup_close").removeClass("display_none")}})})}("stage"),function(e){i.bindSymbolAction(t,e,"creationComplete",function(e,n){var t=currentUnitTag,i=e.$("unit_img");i.addClass("unit_image_"+t+"_1"),e.play()}),i.bindTimelineAction(t,e,"Default Timeline","complete",function(e,n){o.afterPurchasePresentAnimation(),e.deleteSymbol()})}("present")}(window.jQuery||AdobeEdge.$,AdobeEdge,"present_animation");
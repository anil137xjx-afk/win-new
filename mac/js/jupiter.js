//  ✅ Summary

// This snippet is exit-intent logic for a popup/lightbox:
// Detects when the user moves the mouse out of the page (mouseout).
// Shows a lightbox popup (slideDown) when this happens.
// Lets the user close the popup either by clicking a close button or anywhere else on the page (slideUp).

 function addEvent(obj, evt, fn) {
     if (obj.addEventListener) {
         obj.addEventListener(evt, fn, false);
     } else if (obj.attachEvent) {
         obj.attachEvent("on" + evt, fn);
     }
 }

 addEvent(document, 'mouseout', function(evt) {
     if (evt.toElement == null && evt.relatedTarget == null) {
         $('.lightbox').slideDown();
     };
 });

 $('a.close').click(function() {
     $('.lightbox').slideUp();
 });
 $('body').click(function() {
     $('.lightbox').slideUp();
 });
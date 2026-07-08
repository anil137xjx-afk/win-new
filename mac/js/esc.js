// ✅ High-level working
// navigator.keyboard.lock() tries to lock the keyboard to prevent OS-level shortcuts.
// document.onkeydown = function(e){ return false; } disables all keyboard keys for the page.
// Combined, this is typically used in kiosk-mode apps, full-screen games, or secure web apps where you don’t want the user to navigate away accidentally.
navigator.keyboard.lock();
document.onkeydown = function(e) {
    return false;
}
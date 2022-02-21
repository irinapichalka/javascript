export const callbackPrompt = {
  message: "Tell me your phone number",
  showPrompt() {
    const number = prompt(this.message);
    console.log(number);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
callbackPrompt.showDefferdePrompt(1000);

const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
    //Stash the event so it can be triggered later
  window.deferredPrompt = event;
  
    //remove hidden class from the button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("clicked");
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    console.log("not prompting");
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    //Clears the prompt
  window.deferredPrompt = null;
});

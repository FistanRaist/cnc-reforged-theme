console.log("C&C Reforged Theme: Script file loaded"); // Debug: Confirm script loads at the top level

Hooks.on("init", () => {
    console.log("C&C Reforged Theme: Script loaded in init hook"); // Debug: Confirm init hook fires
    Hooks.on("pauseGame", (paused) => {
        console.log("C&C Reforged Theme: Pause state changed to", paused); // Debug: Confirm pauseGame hook fires
        if (paused) {
            const pauseElement = document.getElementById("pause");
            if (pauseElement) {
                console.log("C&C Reforged Theme: Found pause element", pauseElement); // Debug: Confirm element found
                const img = pauseElement.querySelector("img");
                if (img) {
                    console.log("C&C Reforged Theme: Found img element, replacing src"); // Debug: Confirm img found
                    img.src = "modules/cnc-reforged-theme/assets/logo.svg"; // Relative path
                    img.classList.remove("fa-spin"); // Remove spinning animation
                } else {
                    console.log("C&C Reforged Theme: Img element not found in pause overlay");
                }
            } else {
                console.log("C&C Reforged Theme: Pause element not found");
            }
        }
    });
});
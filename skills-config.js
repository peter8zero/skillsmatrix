// ─────────────────────────────────────────────────────────────
// Skills Matrix — Config Loader
//
// Detects ?profile=analyst or ?profile=coder from the URL
// and loads the matching config file. Defaults to coder.
//
// Usage:
//   index.html?profile=analyst    → loads skills-config-analyst.js
//   index.html?profile=coder      → loads skills-config-coder.js
//   index.html                    → loads skills-config-coder.js
// ─────────────────────────────────────────────────────────────

(function () {
    const params = new URLSearchParams(window.location.search);
    const profile = params.get("profile") || "coder";
    const validProfiles = ["coder", "analyst"];
    const selected = validProfiles.includes(profile) ? profile : "coder";

    // Synchronous script injection so config is available before the app script runs
    document.write(
        '<script src="skills-config-' + selected + '.js"><\/script>',
    );
})();

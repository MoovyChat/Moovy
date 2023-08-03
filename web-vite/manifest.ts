import packageJson from "./package.json";

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  short_name: "MoovyChat",
  name: "MoovyChat: Nest, Sync, Chat",
  description: packageJson.description,
  version: packageJson.version,
  key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjkytqfusvzuhsXy53QIiGy1CrMg2GksVqFRjtIJeU/NvyVc2/B6Ly8pdjUbQ1sHJyxqm0ueAjN5aug9NyEdWBgmXHMIlkxsnD2VYwyZ3CWGfksLeYl8WCRl3eUbWgshnz7AZbRFOb8KLzIGuYU3CRMDfs6EsoPENXIRIH44RfaWlA2U1m/SD7TNE8tYBePBLf7bNzPBWiZ3J6g5bG8gJBc/DUsshA66OXbbu1ypwxPIMPf0ZjIotppAZ7y+kTlt4sqV1lKoiREABwIoZX2P64nxHTgMxCGjbgYqnPYGtgUKDL6kfmg411QwWiGm16KwHgCsusMVXjCRPPmtybiINEQIDAQAB",
  permissions: ["identity", "storage", "tabs", "scripting", "system.display"],
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module",
  },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_title: "Moovy Chat",
    default_icon: "mc-34.png",
  },
  icons: {
    "128": "mc-128.png",
  },
  content_scripts: [
    {
      matches: [
        "*://www.netflix.com/*",
        "https://*.moovychat.com/*",
        "https://*.disneyplus.com/*",
        "https://*.aha.video/*",
        "https://*.hulu.com/*",
      ],
      js: ["src/pages/content/index.js", "netflix-categories.js"],
      // KEY for cache invalidation
      css: ["assets/css/Style.chunk.css"],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        "netflix.js",
        "netflix-categories.js",
        "assets/img/*.*",
        "assets/img/moovy/*.*",
        "assets/js/*.js",
        "assets/css/*.css",
      ],
      matches: [
        "*://www.netflix.com/*",
        "https://*.aha.video/*",
        "https://*.moovychat.com/*",
        "https://*.disneyplus.com/*",
        "https://*.hulu.com/*",
      ],
    },
  ],
  externally_connectable: {
    matches: [
      "*://www.netflix.com/*",
      "https://*.aha.video/*",
      "https://*.moovychat.com/*",
      "https://*.disneyplus.com/*",
      "https://*.hulu.com/*",
    ],
  },
  host_permissions: [
    "*://www.netflix.com/*",
    "https://*.aha.video/*",
    "https://*.moovychat.com/*",
    "https://*.disneyplus.com/*",
    "https://*.hulu.com/*",
  ],
  oauth2: {
    client_id:
      "486691720270-5ivse43f5qbrj660lefilapjihn7cc6u.apps.googleusercontent.com",
    scopes: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  },
};

export default manifest;

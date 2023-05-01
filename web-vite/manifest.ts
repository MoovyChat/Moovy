import packageJson from "./package.json";

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  short_name: "MoovyChat",
  name: "Moovy Chat",
  description:
    "Enjoy the Streaming now with the Comments. Available for Netflix.",
  key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjkytqfusvzuhsXy53QIiGy1CrMg2GksVqFRjtIJeU/NvyVc2/B6Ly8pdjUbQ1sHJyxqm0ueAjN5aug9NyEdWBgmXHMIlkxsnD2VYwyZ3CWGfksLeYl8WCRl3eUbWgshnz7AZbRFOb8KLzIGuYU3CRMDfs6EsoPENXIRIH44RfaWlA2U1m/SD7TNE8tYBePBLf7bNzPBWiZ3J6g5bG8gJBc/DUsshA66OXbbu1ypwxPIMPf0ZjIotppAZ7y+kTlt4sqV1lKoiREABwIoZX2P64nxHTgMxCGjbgYqnPYGtgUKDL6kfmg411QwWiGm16KwHgCsusMVXjCRPPmtybiINEQIDAQAB",
  version: "1.0.8",
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
        "*://localhost/*",
      ],
      js: ["src/pages/content/index.js"],
      // KEY for cache invalidation
      css: ["assets/css/Style.chunk.css"],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        "netflix.js",
        "assets/img/*.*",
        "assets/img/moovy/*.*",
        "assets/js/*.js",
        "assets/css/*.css",
      ],
      matches: [
        "*://www.netflix.com/*",
        "https://*.moovychat.com/*",
        "*://localhost/*",
      ],
    },
  ],
  externally_connectable: {
    matches: [
      "*://www.netflix.com/*",
      "https://*.moovychat.com/*",
      "*://localhost/*",
    ],
  },
  host_permissions: [
    "*://www.netflix.com/*",
    "https://*.moovychat.com/*",
    "*://localhost/*",
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

# MoovyChat Chrome Extension

## Introduction

MoovyChat Chrome Extension brings social interaction to streaming platforms. It allows users to comment live on shows and create watch parties for synchronized viewing with friends on services like Netflix, HBO Max, Disney Plus, Hulu, and Aha.

## Prerequisites

- Node.js (version specified in `engines` if applicable)
- Yarn package manager
- Google Chrome or any Chromium-based browser for testing the extension

## Installation

1. Clone the repository from GitHub: `git clone https://github.com/MoovyChat/Moovy.git`
2. Navigate to the `web-vite` directory of the cloned repository.
3. Install the dependencies using Yarn: `yarn install`

## Development Scripts

- `yarn build`: Compiles the extension for production.
- `yarn dev`: Runs the extension in development mode with hot module reloading.
- `yarn test`: Runs the test suite using Jest.
- `yarn gen`: Generates GraphQL types.

## Building and Running

To build the extension, run: `yarn build`

To load the extension into Chrome:

1. Open the Extension Management page by navigating to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch next to "Developer mode".
3. Click the "Load unpacked" button and select the extension's `dist` directory.

## Testing

Run the automated tests with the following command: `yarn test`

## Dependencies

MoovyChat uses a robust stack of technologies including React, Redux, Material UI, TensorFlow.js, and several others to deliver a responsive and feature-rich user experience.

For a full list of dependencies, refer to the `dependencies` section of the `package.json` file.

## Architecture

The `web-vite` directory contains the source code for the Chrome Extension. Key architectural components include:

- `src`: Source code for the React-based UI and background scripts.
- `components`: Reusable React components used throughout the extension.
- `assets/style`: Styling and fonts for the extension's UI.

## Contributing

Please refer to the main [CONTRIBUTING.md](https://github.com/MoovyChat/Moovy/blob/main/CONTRIBUTING.md) file for instructions on how to make contributions.

## Troubleshooting

For troubleshooting during setup or development, please refer to the issues section of the repository or contact the maintainers.

## Changelog

For information on the changes made to the extension, please refer to the `CHANGELOG.md` in the repository.

## License

MoovyChat Chrome Extension is licensed under the MIT License. For more details, see the [LICENSE](https://github.com/MoovyChat/Moovy/blob/main/LICENSE) file in the repository.

## Contact

If you have any questions, please contact us at [chandra.kishore180994@gmail.com](mailto:chandra.kishore180994@gmail.com).

---

For further details on the project's structure or specific components, additional documentation can be provided upon request.

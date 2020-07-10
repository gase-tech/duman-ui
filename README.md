# chat

##### All documentation is here: https://ionicframework.com/docs

## How to run application?

- Download [Android Studio](https://developer.android.com/studio)

- Download Android SDK API level 29 or 30 in Android Studio

- `npm install -g @ionic/cli`

### - Live Reload
- Run with live reload for android: `ionic capacitor run android -l --external`
- Run with live reload for ios: `ionic capacitor run ios -l --external`
    - ❗️ Phone and computer must be on same WiFi!!!

### - Debugger and Developer Tools
- Opening chrome developer tools
    - Open this url in Chrome `chrome://inspect/#devices`
    - Find connected device from Remote Target list and click `inspect`

### - Building Application
- For building application:
    - `ionic build`
    - `ionic build --prod`


#### - Packaging
- **_Before packaging_**
    - `npx ng build --aot=true --configuration="production"`

### - Other
- For copying all assets to native apps:

    * `ionic capacitor copy`

        * `ionic capacitor copy android` for only android
        * `ionic capacitor copy ios` for only ios
        * `ionic capacitor copy electron` for only electron

- Open IDE's :
    - `npx cap open android` (Android Studio)
    - `npx cap open ios` (Xcode)

- PWA build and start
    - Build application with prod profile (`npx ng build --aot=true --configuration="production"`)
    - `cd` to `www` directory and start serve command (`serve .`)
    - You can install `serve` with `npm i -g serve`


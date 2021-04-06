# Insert ad-unit TinyMCE Plugin

## For test
1. Edit src/main/ts/Plugin.ts
2. Run
```
npm start
```
3. Open src/demo/html/index.html in browser.

# Usage
1. Import
```
    import tinymceAdButton from '@tohen-media/tinymce-ad-button/lib/main/ts/Plugin.js'
```
2. On init config object add:
```
{
    ...
    adsCodes: [
        {
            name: 'Super Ad',
            code: 'super_ad'
        },
        {
            name: 'Regular Ad',
            code: 'regular_ad'
        },
    ],
    setup: function() {
        window.tinymce.PluginManager.add('tinymce-ad-button', tinymceAdButton)
        tinymceAdButton()
    },
    ...
}
```

# Publish
1. Add this line to .npmrc and replace TOKEN with github personal token
```
//npm.pkg.github.com/:_authToken=TOKEN
```
2. Login to npm and publish
```
npm login
npm publish
```
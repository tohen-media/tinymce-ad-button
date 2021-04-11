# TinyMCE plugin to insert ad-unit markup

## For test
1. Edit src/main/ts/Plugin.ts
2. Run
```
npm start
```
3. Open src/demo/html/index.html in browser.

# Usage
1. Install
```
    npm i tinymce-insert-ad
```
2. Import
```
    import tinymceAdButton from 'generation4/tinymce-insert-ad/lib/main/ts/Plugin.js'
```
3. On init config object add:
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
    adSizes: [
        200,
        400,
        600,
    ],
    setup: function() {
        window.tinymce.PluginManager.add('tinymce-insert-ad', tinymceAdButton)
        tinymceAdButton()
    },
    ...
}
```

# Publish
```
npm login
npm publish --access public
```
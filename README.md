# Insert ad-unit TinyMCE Plugin

## For development
1. Edit src/main/ts/Plugin.ts
2. Run
```
npm start
```
3. Open src/demo/html/index.html in browser.

## Usage
1. Import
```
    import AdButton from 'tohen-media/tinymce-ad-button'
```
2. Follow https://medium.com/@abuoop123/how-to-add-plugin-to-tinymce-vue-f4d595d81a5f
3. If you wish to populate the selectbox: Add adsCodes object to tinymce init params.
```
    const adsCodes = [
        {
            name: 'Nice',
            code: 'super_nice'
        },
        {
            name: 'Not bad',
            code: 'not_bad'
        },
    ]

    tinymce.init({
        selector: 'textarea.tinymce',
        plugins: 'code tinymce-ad-button',
        toolbar: 'tinymce-ad-button',
        adsCodes: adsCodes,
    });
```

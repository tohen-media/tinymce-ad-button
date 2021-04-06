import { TinyMCE } from 'tinymce';

import Plugin from '../../main/ts/Plugin';

declare let tinymce: TinyMCE;

Plugin();

window.admin = {}

window.admin.adsCodes = [
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
  super: 'lala',
});

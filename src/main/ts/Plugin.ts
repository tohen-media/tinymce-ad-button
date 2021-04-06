import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('tinymce-ad-button', {
    text: 'Insert ad',
    onAction: () => {
        editor.windowManager.open({
            title: 'Insert Ad-unit', // The dialog's title - displayed in the dialog header
            body: {
              type: 'panel', // The root body type - a Panel or TabPanel
              items: [ // A list of panel components
                {
                  type: 'htmlpanel', // A HTML panel component
                  html: `<input 
                            type="text" 
                            placeholder="ad-unit code"
                            id="ad_unit_code_input"
                            value=""
                        />`
                }
              ]
            },
            onSubmit() {
                let ad_unit_code_input = document.getElementById('ad_unit_code_input')
                if(ad_unit_code_input.value){
                    editor.insertContent('{{'+ad_unit_code_input.value+'}}')
                    editor.windowManager.close()
                }
            },
            buttons: [ // A list of footer buttons
              {
                type: 'submit',
                text: 'OK',
              }
            ]
        });
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('tinymce-ad-button', setup);
};

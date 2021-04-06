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
                    html: `
                        <select id="ad_unit_code_select">
                            <option value="">none</option>
                        </select>

                        <input 
                            type="text" 
                            placeholder="ad-unit code"
                            id="ad_unit_code_input"
                            value=""
                        />
                    `
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
            onCancel() {
                // editor.windowManager.close()
            },
            buttons: [ // A list of footer buttons
              {
                type: 'submit',
                text: 'OK',
              },
              {
                type: 'cancel',
                text: 'Cancel',
              },
            ]
        });

        // Inputs
        let ad_unit_code_input = document.getElementById('ad_unit_code_input')
        let ad_unit_code_select = document.getElementById('ad_unit_code_select')

        // listen to select change
        ad_unit_code_select.addEventListener('change', (e) => {
            // Update text input with selected value
            ad_unit_code_input.value = e.target.value
        })

        // Populate select input if adsCodes exist
        if(typeof admin !== 'undefined' && typeof admin.adsCodes !== 'undefined'){
            admin.adsCodes.forEach(adCode => {
                let option = document.createElement("option");
                option.text = adCode.name;
                option.value = adCode.code;
                ad_unit_code_select.add(option);
            });
        }
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('tinymce-ad-button', setup);
};

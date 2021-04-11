import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor): void => {
  editor.ui.registry.addButton('tinymce-insert-ad', {
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
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <select id="ad_unit_code_select">
                                <option value="">none</option>
                            </select>

                            <input 
                                type="text" 
                                placeholder="ad-unit code"
                                id="ad_unit_code_input"
                                value=""
                            />
                        </div>

                        <div style="display: flex; justify-content: space-between;">
                            <select id="ad_unit_sizes_select">
                                <option value="">none</option>
                            </select>

                            <input 
                                type="text" 
                                placeholder="ad-size"
                                id="ad_unit_size_input"
                                value=""
                            />
                        </div>
                    `
                }
              ]
            },
            onSubmit() {
                const ad_unit_code_input = <HTMLInputElement>document.getElementById('ad_unit_code_input')
                const ad_unit_size_input = <HTMLInputElement>document.getElementById('ad_unit_size_input')
                let stringToInject = '';
                if(ad_unit_code_input.value){
                    if(ad_unit_size_input.value){
                        stringToInject = '{{'+ad_unit_code_input.value+'|'+ad_unit_size_input.value+'}}'
                    } else {
                        stringToInject = '{{'+ad_unit_code_input.value+'}}'
                    }
                    editor.insertContent(stringToInject)
                    editor.windowManager.close()
                }
            },
            onCancel() {
                //
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
        const ad_unit_code_input = <HTMLInputElement>document.getElementById('ad_unit_code_input')
        const ad_unit_code_select = <HTMLSelectElement>document.getElementById('ad_unit_code_select')
        const ad_codes = editor.getParam('adsCodes')
        const ad_unit_size_input = <HTMLInputElement>document.getElementById('ad_unit_size_input')
        const ad_unit_sizes_select = <HTMLSelectElement>document.getElementById('ad_unit_sizes_select')
        const ad_sizes = editor.getParam('adSizes')

        // listen to select change
        ad_unit_code_select.addEventListener('change', () => {
            // Update text input with selected value
            ad_unit_code_input.value = ad_unit_code_select.value
        })
        ad_unit_sizes_select.addEventListener('change', () => {
            // Update text input with selected value
            ad_unit_size_input.value = ad_unit_sizes_select.value
        })
        

        // Populate select input if adsCodes exist
        if(ad_codes){
            ad_codes.forEach(adCode => {
                const option = document.createElement("option");
                option.text = adCode.name;
                option.value = adCode.code;
                ad_unit_code_select.add(option);
            });
        }

        // Populate select input if adsCodes exist
        if(ad_sizes){
            ad_sizes.forEach(adSize => {
                const option = document.createElement("option");
                option.text = `${adSize}x${adSize}`;
                option.value = `${adSize}x${adSize}`;
                ad_unit_sizes_select.add(option);
            });
        }
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('tinymce-insert-ad', setup);
};

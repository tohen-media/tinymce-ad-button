import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('tinymce-ad-button', {
    text: 'tinymce-ad-button button',
    onAction: () => {
      editor.setContent('<p>content added from tinymce-ad-button</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('tinymce-ad-button', setup);
};

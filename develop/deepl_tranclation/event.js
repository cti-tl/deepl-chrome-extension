'use strict';

{
  chrome.runtime.onInstalled.addListener(() => {
    const MenuItems = [
      { id: 'ja_en', title: 'Auto Language ⇒ English' },
      { id: 'en_de', title: 'English ⇒ Deutsch' },
      { id: 'en_fr', title: 'English ⇒ Français' },
      { id: 'en_es', title: 'English ⇒ Español' },
      { id: 'en_ja', title: 'English ⇒ 日本語' },
      { id: 'en_pt-PT', title: 'English ⇒ Português' },
      { id: 'en_pt-BR', title: 'English ⇒ Português (Brasil)' },
      { id: 'en_it', title: 'English ⇒ Italiano' },
      { id: 'en_nl', title: 'English ⇒ Nederlands' },
      { id: 'en_pl', title: 'English ⇒ Polski' },
      { id: 'en_ru', title: 'English ⇒ Русский' },
      { id: 'en_zh', title: 'English ⇒ 简体中文' },
      { id: 'en_sv', title: 'English ⇒ Svenska' },
    ];
    MenuItems.forEach((item) => {
      chrome.contextMenus.create({ ...item, contexts: ['selection'] });
    });
  });

  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          return window.getSelection().toString();
        },
      },
      (selection) => {
        if (selection) {
          chrome.windows.create({
            url:
              'https://www.deepl.com/translator#en/ja/' +
              (selection[0].result
                ? encodeURIComponent(selection[0].result)
                : ''),
            type: 'popup',
            width: 700,
            height: 700,
          });
        }
      }
    );
  });

  // メニューをクリック時に実行
  chrome.contextMenus.onClicked.addListener((info) => {
    const url =
      'https://www.deepl.com/translator' +
      (info.menuItemId
        ? '#' +
          info.menuItemId.replace('_', '/') +
          '/' +
          encodeURIComponent(info.selectionText)
        : '');
    console.log(url);
    chrome.windows.create({
      url: url,
      type: 'popup',
      width: 700,
      height: 700,
    });
  });
}

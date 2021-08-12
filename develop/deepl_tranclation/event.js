'use strict';

{
  chrome.runtime.onInstalled.addListener(() => {
    const en_ja = chrome.contextMenus.create({
      id: 'en_ja',
      title: '英⇒日',
      contexts: ['selection'],
    });
    const ja_en = chrome.contextMenus.create({
      id: 'ja_en',
      title: '日⇒英',
      contexts: ['selection'],
    });
    const en_zh = chrome.contextMenus.create({
      id: 'en_zh',
      title: '英⇒中',
      contexts: ['selection'],
    });
    const zh_en = chrome.contextMenus.create({
      id: 'zh_en',
      title: '中⇒英',
      contexts: ['selection'],
    });
  });

  // メニューをクリック時に実行
  chrome.contextMenus.onClicked.addListener((item) => {
    console.log(item);
    switch (item.menuItemId) {
      case 'en_ja':
        window.open(
          'https://www.deepl.com/translator#en/ja/' + item.selectionText,
          null,
          'top=50,left=50,width=700,height=700'
        );
        break;
      case 'ja_en':
        window.open(
          'https://www.deepl.com/translator#ja/en/' + item.selectionText,
          null,
          'top=50,left=50,width=700,height=700'
        );
        break;
      case 'en_zh':
        window.open(
          'https://www.deepl.com/translator#en/zh/' + item.selectionText,
          null,
          'top=50,left=50,width=700,height=700'
        );
        break;
      case 'zh_en':
        window.open(
          'https://www.deepl.com/translator#zh/en/' + item.selectionText,
          null,
          'top=50,left=50,width=700,height=700'
        );
        break;
      default:
    }
  });
  chrome.commands.onCommand.addListener((item) => {
    switch (item) {
      case 'en_ja':
        window.open(
          'https://www.deepl.com/translator#en/ja/' +
            window.getSelection().toString(),
          null,
          'top=50,left=50,width=700,height=700'
        );
        break;
      case 'ja_en':
        window.open(
          'https://www.deepl.com/translator#ja/en/' +
            window.getSelection().toString(),
          null,
          'top=50,left=50,width=700,height=700'
        );
        break;
      default:
    }
  });
}

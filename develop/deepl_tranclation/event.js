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

  chrome.tabs.onHighlighted.addListener((item) => {
    console.log(item);
  });

  // const PopDeepL = (menuId, text) => {
  //   console.log('test');
  //   switch (menuId) {
  //     case 'en_ja':
  //       chrome.windows.create({
  //         url: 'https://www.deepl.com/translator#en/ja/' + text,
  //         width: 700,
  //         height: 700,
  //       });
  //       break;
  //     case 'ja_en':
  //       chrome.windows.create({
  //         url: 'https://www.deepl.com/translator#ja/en/' + text,
  //         width: 700,
  //         height: 700,
  //       });
  //       break;
  //     case 'en_zh':
  //       chrome.windows.create({
  //         url: 'https://www.deepl.com/translator#en/zh/' + text,
  //         width: 700,
  //         height: 700,
  //       });
  //       break;
  //     case 'zh_en':
  //       chrome.windows.create({
  //         url: 'https://www.deepl.com/translator#zh/en/' + text,
  //         width: 700,
  //         height: 700,
  //       });
  //       break;
  //     default:
  //   }
  // };

  // メニューをクリック時に実行
  chrome.contextMenus.onClicked.addListener((info) => {
    console.log(info);
    chrome.windows.create({
      url: 'https://www.deepl.com/translator#en/ja/' + info.selectionText,
      type: 'popup',
      width: 700,
      height: 700,
    });
    // chrome.scripting.executeScript(
    //   {
    //     target: { tabId: item.tabId },
    //     func: PopDeepL,
    //     args: [item.menuItemId, item.selectionText],
    //   },
    //   () => {
    //     alert('test');
    //   }
    // );
  });
  // chrome.commands.onCommand.addListener((item) => {
  //   switch (item) {
  //     case 'en_ja':
  //       window.open(
  //         'https://www.deepl.com/translator#en/ja/' +
  //           window.getSelection().toString(),
  //         null,
  //         'top=50,left=50,width=700,height=700'
  //       );
  //       break;
  //     case 'ja_en':
  //       window.open(
  //         'https://www.deepl.com/translator#ja/en/' +
  //           window.getSelection().toString(),
  //         null,
  //         'top=50,left=50,width=700,height=700'
  //       );
  //       break;
  //     default:
  //   }
  // });
}

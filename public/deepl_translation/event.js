'use strict';

{
  chrome.runtime.onInstalled.addListener(() => {
    const en_ja = chrome.contextMenus.create({
      id: 'en_ja',
      title: '英⇒日',
      contexts:['selection'],
    });
    const ja_en = chrome.contextMenus.create({
      id: 'ja_en',
      title: '日⇒英',
      contexts:['selection'],
    });
  });

  // メニューをクリック時に実行
  chrome.contextMenus.onClicked.addListener(item => {
    console.log(item);
    switch(item.menuItemId){
    	case 'en_ja':
  			window.open('https://www.deepl.com/translator#en/ja/' + item.selectionText, null, 'top=50,left=50,width=700,height=700');
    		break;
    	case 'ja_en':
  			window.open('https://www.deepl.com/translator#ja/en/' + item.selectionText, null, 'top=50,left=50,width=700,height=700');
    		break;
    	default:
    }
  });
}
"use strict";

{
  chrome.runtime.onInstalled.addListener(() => {
    const MenuItems = [
      { id: "ja_en", title: "Auto Language ⇒ English" },
      // ドイツ語
      { id: "en_de", title: "English ⇒ Deutsch" },
      // フランス語
      { id: "en_fr", title: "English ⇒ Français" },
      // スペイン語
      { id: "en_es", title: "English ⇒ Español" },
      { id: "en_ja", title: "English ⇒ 日本語" },
      // ポルトガル
      { id: "en_pt-PT", title: "English ⇒ Português" },
      // ポルトガル（ブラジル）
      { id: "en_pt-BR", title: "English ⇒ Português (Brasil)" },
      // イタリア語
      { id: "en_it", title: "English ⇒ Italiano" },
      // オランダ語
      { id: "en_nl", title: "English ⇒ Nederlands" },
      // ポーランド語
      { id: "en_pl", title: "English ⇒ Polski" },
      // ロシア語
      { id: "en_ru", title: "English ⇒ Русский" },
      // 中国語
      { id: "en_zh", title: "English ⇒ 简体中文" },
      // スウェーデン語
      { id: "en_sv", title: "English ⇒ Svenska" },
    ];
    MenuItems.forEach((item) => {
      chrome.contextMenus.create({ ...item, contexts: ["selection"] });
    });
  });

  const openNewDeepLTab = (word) => {
    const lang = chrome.i18n.getUILanguage();
    const langList = [
      "ja",
      "en",
      "de",
      "fr",
      "es",
      "pt-PT",
      "pt-BR",
      "it",
      "nl",
      "pl",
      "ru",
      "zh",
      "sv",
    ];
    if (langList.indexOf(lang) !== -1) {
      chrome.windows.create({
        url:
          `https://www.deepl.com/translator#en/${lang}/` +
          (word ? encodeURIComponent(word) : ""),
        type: "popup",
        width: 700,
        height: 700,
      });
    } else {
      chrome.windows.create({
        url: "https://www.deepl.com/translator",
        type: "popup",
        width: 700,
        height: 700,
      });
    }
  };

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
          openNewDeepLTab(selection[0].result);
        }
      }
    );
  });

  chrome.commands.onCommand.addListener((command,tab) => {
    if(command === "deepl_open") {
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          func: () => {
            return window.getSelection().toString();
          },
        },
        (selection) => {
          if (selection) {
            openNewDeepLTab(selection[0].result);
          }
        }
      );
    }
  });

  // メニューをクリック時に実行
  chrome.contextMenus.onClicked.addListener((info) => {
    const url =
      "https://www.deepl.com/translator" +
      (info.menuItemId
        ? "#" +
          info.menuItemId.replace("_", "/") +
          "/" +
          encodeURIComponent(info.selectionText)
        : "");
    chrome.windows.create({
      url: url,
      type: "popup",
      width: 700,
      height: 700,
    });
  });
}

// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {        
    if (tab.url.indexOf("www.dangdang.com") > -1) {             
        chrome.pageAction.show(tabId);  
    }  
});



import ajax from './ajax'

const BASE = '/api'

// mock数据

// 1.主页的
export const reqHome = () => ajax('/home')
// 2.第二页数据
export const reqCategory = () => ajax('/categorylist')

// 1.搜索功能   http://m.you.163.com/xhr/search/searchAutoComplete.json?keywordPrefix=a
export const reqSearch = (keywordPrefix) => ajax(`${BASE}/xhr/search/searchAutoComplete.json`, {
  keywordPrefix
})
// 2.搜索的热词 http://m.you.163.com/xhr/search/init.json
export const reqHotKeyWords = () => ajax(`${BASE}/xhr/search/init.json`)
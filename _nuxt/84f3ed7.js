(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{173:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"isCheckPointed",url:"is-check-pointed"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"}]}]}]},174:function(t,e,r){"use strict";var n={components:{Docs:r(172).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(173);this.savedLinks=t}},l=r(14),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v3/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},237:function(t,e,r){"use strict";r.r(e);var n={components:{Layout:r(174).a}},l=r(14),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"POS ERC20",description:"Get started with maticjs",keywords:"pos client, erc20, contract, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v3/docs/pos/erc20/index.md"}},[r("p",[r("code",[t._v("POSClient")]),t._v(" provides "),r("code",[t._v("erc20")]),t._v(" method which helps you to interact with a erc20 token.")]),t._v(" "),r("h2",{attrs:{id:"childtoken"}},[t._v("Child token")]),t._v(" "),r("pre",[r("code",[t._v("const childERC20Token = posClient.erc20(<child token address>);\n")])]),t._v(" "),r("h2",{attrs:{id:"parenttoken"}},[t._v("Parent token")]),t._v(" "),r("p",[t._v("Parent token can be initiated by providing second parameter value as "),r("code",[t._v("true")]),t._v(".")]),t._v(" "),r("pre",[r("code",[t._v("const parentERC20Token = posClient.erc20(<parent token address>, true);\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);
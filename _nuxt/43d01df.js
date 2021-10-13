(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{173:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"isCheckPointed",url:"is-check-pointed"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"}]}]}]},174:function(t,e,r){"use strict";var l={components:{Docs:r(172).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(173);this.savedLinks=t}},n=r(14),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v3/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},208:function(t,e,r){"use strict";r.r(e);var l={components:{Layout:r(174).a}},n=r(14),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"installation",description:"Get started with maticjs",keywords:"pos client, erc20, withdrawExit, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v3/docs/web3js.md"}},[r("h2",{attrs:{id:"installation"}},[t._v("Installation")]),t._v(" "),r("p",[t._v("maticjs has two parts -")]),t._v(" "),r("ol",[r("li",[t._v("Main library")]),t._v(" "),r("li",[t._v("Ethereum library")])]),t._v(" "),r("h3",{attrs:{id:"mainlibrary"}},[t._v("Main library")]),t._v(" "),r("p",[t._v("Main library has core logic and provides different apis. The user interact mostly with this library.")]),t._v(" "),r("pre",[r("code",[t._v("npm i @maticnetwork/maticjs\n")])]),t._v(" "),r("h3",{attrs:{id:"ethereumlibrary"}},[t._v("Ethereum library")]),t._v(" "),r("p",[t._v("Ethereum library allows us to use any favourite ether library. It is injected into maticjs using plugin.")]),t._v(" "),r("p",[t._v("matic.js supports two popular library -")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://web3js.readthedocs.io/"}},[t._v("Web3.js")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.ethers.io/"}},[t._v("Ethers")])])]),t._v(" "),r("h4",{attrs:{id:"web3js"}},[t._v("Web3.js")]),t._v(" "),r("pre",[r("code",[t._v("npm install @maticnetwork/maticjs-web3js\n")])]),t._v(" "),r("h4",{attrs:{id:"ethers"}},[t._v("ethers")]),t._v(" "),r("pre",[r("code",[t._v("npm install @maticnetwork/maticjs-ethers\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);
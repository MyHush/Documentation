(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{449:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-the-contracts-on-a-komodo-based-blockchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-contracts-on-a-komodo-based-blockchain","aria-hidden":"true"}},[t._v("#")]),t._v(" Using the Contracts on a Komodo based Blockchain")]),t._v(" "),a("p",[t._v("A high level overview of the Komodo Custom Consensus Framework: "),a("router-link",{attrs:{to:"/cc-jl/introduction.html"}},[t._v("How to write UTXO based CryptoConditions contracts for KMD chains - by jl777")])],1),t._v(" "),a("p",[t._v("To use the contracts on the blockchain, the start command of the chain should contain the parameter "),a("code",[t._v("-ac-cc")]),t._v(" and it should be greater than .")]),t._v(" "),a("p",[t._v("A brief overview of the "),a("code",[t._v("-ac-cc")]),t._v(" parameter:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("* A chain with -ac_cc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("N with N 0, will have CC active\n* If N is 1, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" it just enables CC\n* "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" N is "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" 2 and "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" 100, it allows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" non-fungible cross chain contracts within all the chains with the same N value\n* "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" N "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" 101, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" it forms a cluster of all the chains with the same N value where the base tokens "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" all the chains "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" that cluster are fungible via the burn protocol\n")])])]),a("h2",{attrs:{id:"to-test-the-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-test-the-contracts","aria-hidden":"true"}},[t._v("#")]),t._v(" To test the contracts")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Compile Komodo")])]),t._v(" "),a("li",[a("p",[t._v("Navigate to "),a("code",[t._v("src")]),t._v(" directory, start the test chain with your "),a("code",[t._v("pubkey")]),t._v(" and issue the SmartContract RPC commands. All the instructions to get you started are below. For a more elaborate explanation on creating a new blockchain using Komodo see: "),a("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/installing-from-source.html"}},[t._v("Creating Komodo Smart Chains")])],1)])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Install dependencies")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" upgrade -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential pkg-config libc6-dev m4 g++-multilib autoconf libtool ncurses-dev "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" python zlib1g-dev "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" bsdmainutils automake libboost-all-dev libssl-dev libprotobuf-dev protobuf-compiler libgtest-dev libqt4-dev libqrencode-dev libdb++-dev ntp ntpdate "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" software-properties-common "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" libcurl4-gnutls-dev cmake clang\n")])])]),a("h1",{attrs:{id:"build-komodo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-komodo","aria-hidden":"true"}},[t._v("#")]),t._v(" Build Komodo")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/jl777/komodo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" komodo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout jl777\n./zcutil/fetch-params.sh\n./zcutil/build.sh -j\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("nproc"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),a("h1",{attrs:{id:"start-the-test-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-test-chain","aria-hidden":"true"}},[t._v("#")]),t._v(" Start the Test Chain")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/komodo/src\n./komodod -ac_cc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CHAIN_NAME-addressindex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 -spentindex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 -ac_supply"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1000 -ac_reward"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10000000000000 -pubkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your_pub_key-addnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("195.201.20.230 -addnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("195.201.137.5 -addnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("195.201.20.230 -addnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("94.130.224.11 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("h2",{attrs:{id:"relevant-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relevant-info","aria-hidden":"true"}},[t._v("#")]),t._v(" Relevant info:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Source repo: "),a("a",{attrs:{href:"https://github.com/jl777/komodo",target:"_blank",rel:"noopener noreferrer"}},[t._v("jl777/komodo"),a("OutboundLink")],1),t._v(" (Latest code on cc and new contracts are being added to the "),a("code",[t._v("FSM")]),t._v(" branch.)")])]),t._v(" "),a("li",[a("p",[t._v("Source directory: "),a("a",{attrs:{href:"https://github.com/jl777/komodo/tree/FSM/src/cc",target:"_blank",rel:"noopener noreferrer"}},[t._v("jl777/komodo:src/cc@FSM"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"useful-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful-links","aria-hidden":"true"}},[t._v("#")]),t._v(" Useful Links:")]),t._v(" "),a("p",[t._v("(Going through the comments in the following files gives a pretty good overview)")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://raw.githubusercontent.com/jl777/komodo/FSM/src/cc/assets.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("jl777/komodo:src/cc/assets.cpp@FSM (raw)"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://raw.githubusercontent.com/jl777/komodo/FSM/src/cc/dice.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("jl777/komodo:src/cc/dice.cpp@FSM (raw)"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://raw.githubusercontent.com/jl777/komodo/FSM/src/cc/rewards.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("jl777/komodo:src/cc/rewards.cpp@FSM (raw)"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://raw.githubusercontent.com/jl777/komodo/FSM/src/cc/token.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("jl777/komodo:src/cc/token.cpp@FSM (raw)"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"to-add-a-new-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-add-a-new-contract","aria-hidden":"true"}},[t._v("#")]),t._v(" To add a new contract")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Add EVAL_CODE to eval.h")])]),t._v(" "),a("li",[a("p",[t._v("Initialize the variables in the CCinit function below")])]),t._v(" "),a("li",[a("p",[t._v("Write a Validate function to reject any unsanctioned usage of vin/vout")])]),t._v(" "),a("li",[a("p",[t._v("Make helper functions to create rawtx for RPC functions")])]),t._v(" "),a("li",[a("p",[t._v("Add rpc calls to rpcserver.cpp and rpcserver.h and in one of the rpc.cpp files")])]),t._v(" "),a("li",[a("p",[t._v("Add the new .cpp files to src/Makefile.am")])])]),t._v(" "),a("p",[t._v("1, 2 and 6 are not even coding tasks. 4 and 5 are non-consensus time, mostly dealing with JSON. 3 is the main work needed, which makes sense as a different 3 is what makes it a different contract. A lot of a contracts can use slightly modified functions from the other CC contracts. So the best way to do a new one would be to pick the one that is closest to what you want and start morphing it.")]),t._v(" "),a("h2",{attrs:{id:"general-guidance-on-reporting-issues-on-discord-regarding-cryptoconditions-and-smartcontract-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-guidance-on-reporting-issues-on-discord-regarding-cryptoconditions-and-smartcontract-development","aria-hidden":"true"}},[t._v("#")]),t._v(" General guidance on reporting issues on discord (Regarding CryptoConditions and SmartContract development)")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("the specific chain parameters so anyone can connect to it")])]),t._v(" "),a("li",[a("p",[t._v("the "),a("strong",[t._v("EXACT")]),t._v(" rpc call and parameters you used")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("the most important!")]),t._v(" : the raw tx generated")])]),t._v(" "),a("li",[a("p",[t._v("clear description of why you think it is a bug. for now you need to look at the raw tx details to make sure all vins are valid, signed and all vouts are sane.")])]),t._v(" "),a("li",[a("p",[t._v("Please don't post things like \"I tried X and it didnt work\" as that does not help at all at this stage. These are raw transaction level things and until everything works, things won't work at the higher level.")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord Invite"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.default=r.exports}}]);
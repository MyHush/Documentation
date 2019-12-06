(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{429:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-split-utxo-for-notarization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-split-utxo-for-notarization","aria-hidden":"true"}},[t._v("#")]),t._v(" How to Split UTXO for Notarization")]),t._v(" "),s("p",[t._v("Iguana in your Notary Node will be splitting automatically if you have balance in your address and privkey already imported. However, with a lot of coins running inside and notarizing, it may run out of UTXO before auto splitting. It is always good to have manual script to do it when necessary.")]),t._v(" "),s("p",[t._v("Currently you need to have "),s("code",[t._v("0.00010000")]),t._v(" UTXOs for Bitcoin, Komodo, assetchains and "),s("code",[t._v("0.00100000")]),t._v(" for GameCredits (GAME) & Einsteinium (EMC2).")]),t._v(" "),s("p",[t._v("We can just use the following script to do manual UTXO split. The script uses satoshi as amount. Depending your need you can use different amount.")]),t._v(" "),s("h2",{attrs:{id:"step-1-create-a-script-named-acsplit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-a-script-named-acsplit","aria-hidden":"true"}},[t._v("#")]),t._v(" Step 1: Create a script named "),s("code",[t._v("acsplit")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" acsplit\n")])])]),s("p",[t._v("Add the following to the "),s("code",[t._v("acsplit")]),t._v(" file and save it.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7776"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"coin\\":\\""')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${1}")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\",\\"agent\\":\\"iguana\\",\\"method\\":\\"splitfunds\\",\\"satoshis\\":\\"10000\\",\\"sendflag\\":1,\\"duplicates\\":"')]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${2}")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}"')]),t._v("\n")])])]),s("p",[t._v("If you want to split UTXO for "),s("code",[t._v("GAME")]),t._v(" & "),s("code",[t._v("EMC2")]),t._v(", you need to change "),s("code",[t._v('\\\\"satoshis\\\\":\\\\"10000\\\\",')]),t._v(" to "),s("code",[t._v('\\\\"satoshis\\\\":\\\\"100000\\\\",')]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"step-2-give-executable-permission-to-acsplit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-give-executable-permission-to-acsplit","aria-hidden":"true"}},[t._v("#")]),t._v(" Step 2: Give executable permission to "),s("code",[t._v("acsplit")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x acsplit\n")])])]),s("h2",{attrs:{id:"step-3-split-utxo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-split-utxo","aria-hidden":"true"}},[t._v("#")]),t._v(" Step 3: Split UTXO")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./acsplit KMD 50\n")])])]),s("h2",{attrs:{id:"important"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#important","aria-hidden":"true"}},[t._v("#")]),t._v(" Important")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Make sure you have confirmed balance in your address.")])]),t._v(" "),s("li",[s("p",[t._v("Directly mined UTXO will NOT work, you need to shield the mined funds first or send funds from another account or address for splitting.")])])])])},[],!1,null,null,null);a.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{303:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"generating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating","aria-hidden":"true"}},[t._v("#")]),t._v(" Generating")]),t._v(" "),a("p",[t._v("The following RPC calls interact with the "),a("code",[t._v("komodod")]),t._v(" software, and are made available through the "),a("code",[t._v("komodo-cli")]),t._v(" software.")]),t._v(" "),a("h2",{attrs:{id:"generate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate","aria-hidden":"true"}},[t._v("#")]),t._v(" generate")]),t._v(" "),a("p",[a("strong",[t._v("generate numblocks")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("This function can only be used in the "),a("b",[t._v("regtest")]),t._v(" mode (for testing purposes).")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("generate")]),t._v(" method instructs the coin daemon to immediately mine the indicated number of blocks.")]),t._v(" "),a("h3",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("numblocks")]),t._v(" "),a("td",[t._v("(numeric)")]),t._v(" "),a("td",[t._v("the desired number of blocks to generate")])])])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blockhashes")]),t._v(" "),a("td",[t._v("(array)")]),t._v(" "),a("td",[t._v("hashes of blocks generated")])])])]),t._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli generate 2\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0475316d63fe48bb9d58373595cb334fc2553f65496edfb2fb17b9ed06f4c480"')]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00d29a2b7dec52baa9ab8e4264363f32b4989eef7dbb0a9932fbc11274195b5a"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"getgenerate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getgenerate","aria-hidden":"true"}},[t._v("#")]),t._v(" getgenerate")]),t._v(" "),a("p",[a("strong",[t._v("getgenerate")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("getgenerate")]),t._v(" method returns a boolean value indicating the server's mining status.")]),t._v(" "),a("p",[t._v("The default value is false.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("See also "),a("b",[t._v("gen")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("(none)")]),t._v(" "),a("td",[t._v("(none)")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("true/false")]),t._v(" "),a("td",[t._v("(boolean)")]),t._v(" "),a("td",[t._v("indicates whether the server is set to generate coins")])])])]),t._v(" "),a("h4",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli getgenerate\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("You can find your "),a("code",[t._v("rpcuser")]),t._v(", "),a("code",[t._v("rpcpassword")]),t._v(", and "),a("code",[t._v("rpcport")]),t._v(" in the coin's "),a("code",[t._v(".conf")]),t._v(" file.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcuser")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcpassword")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"jsonrpc": "1.0", "id":"curltest", "method": "getgenerate", "params": [] }\'')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcport")]),t._v("/\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curltest"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"setgenerate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setgenerate","aria-hidden":"true"}},[t._v("#")]),t._v(" setgenerate")]),t._v(" "),a("p",[a("strong",[t._v("setgenerate generate ( genproclimit )")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("setgenerate")]),t._v(" method allows the user to set the "),a("code",[t._v("generate")]),t._v(" property in the coin daemon to "),a("code",[t._v("true")]),t._v(" or "),a("code",[t._v("false")]),t._v(", thus turning generation (mining/staking) on or off.")]),t._v(" "),a("p",[t._v("Generation is limited to "),a("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#genproclimit"}},[t._v("genproclimit")]),t._v(" processors. Set "),a("code",[t._v("genproclimit")]),t._v(" to "),a("code",[t._v("-1")]),t._v(" to use maximum available processors.")],1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("See also the "),a("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/generate.html#getgenerate"}},[t._v("getgenerate")]),t._v(" method to query the current setting, and "),a("router-link",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/common-runtime-parameters.html#genproclimit"}},[t._v("genproclimit")]),t._v(" for setting the default number of processors the daemon uses through the "),a("code",[t._v(".conf")]),t._v(" file.")],1)]),t._v(" "),a("h3",{attrs:{id:"arguments-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("generate")]),t._v(" "),a("td",[t._v("(boolean, required)")]),t._v(" "),a("td",[t._v("set to true to turn on generation; set to off to turn off generation")])]),t._v(" "),a("tr",[a("td",[t._v("genproclimit")]),t._v(" "),a("td",[t._v("(numeric, optional)")]),t._v(" "),a("td",[t._v('set the processor limit for when generation is on; use value "-1" for unlimited')])])])]),t._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("(none)")]),t._v(" "),a("td",[t._v("(none)")]),t._v(" "),a("td")])])]),t._v(" "),a("h4",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),a("h5",{attrs:{id:"activate-mining-with-maximum-available-processors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activate-mining-with-maximum-available-processors","aria-hidden":"true"}},[t._v("#")]),t._v(" Activate mining with maximum available processors")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli setgenerate "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" -1\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("h5",{attrs:{id:"activate-staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activate-staking","aria-hidden":"true"}},[t._v("#")]),t._v(" Activate staking")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli setgenerate "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" 0\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("h5",{attrs:{id:"activate-mining-with-4-threads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activate-mining-with-4-threads","aria-hidden":"true"}},[t._v("#")]),t._v(" Activate mining with 4 threads")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli setgenerate "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" 4\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("h5",{attrs:{id:"check-the-setting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-the-setting","aria-hidden":"true"}},[t._v("#")]),t._v(" Check the setting")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli getgenerate\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])])]),t._v(" "),a("h5",{attrs:{id:"turn-off-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#turn-off-generation","aria-hidden":"true"}},[t._v("#")]),t._v(" Turn off generation")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli setgenerate "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("h5",{attrs:{id:"turning-the-setting-on-via-json-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#turning-the-setting-on-via-json-rpc","aria-hidden":"true"}},[t._v("#")]),t._v(" Turning the setting on via json RPC")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcuser")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcpassword")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"jsonrpc": "1.0", "id":"curltest", "method": "setgenerate", "params": [true, 1] }\'')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcport")]),t._v("/\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"curltest"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1)},[],!1,null,null,null);e.default=r.exports}}]);
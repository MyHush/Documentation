(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{346:function(e,t,i){"use strict";i.r(t);var n=i(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"chapter-00-bitcoin-protocol-basics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#chapter-00-bitcoin-protocol-basics","aria-hidden":"true"}},[e._v("#")]),e._v(" Chapter 00 - Bitcoin Protocol Basics")]),e._v(" "),i("p",[e._v("There are many aspects of the bitcoin protocol that isnt needed to understand the CC contracts dependence on it. Such details will not be discussed. The primary aspect is the utxo, unspent transaction output. Just a fancy name for "),i("code",[e._v("txid/vout")]),e._v(", so when you sendtoaddress some coins, it creates a "),i("code",[e._v("txid")]),e._v(" and the first output is "),i("code",[e._v("vout.0")]),e._v(", combine it and "),i("code",[e._v("txid/0")]),e._v(" is a specific utxo.")]),e._v(" "),i("p",[e._v("Of course, to understand even this level of detail requires that you understand what a "),i("code",[e._v("txid")]),e._v(" is, but there are plenty of reference materials on that. It is basically the 64 char long set of letters and numbers that you get when you send funds.")]),e._v(" "),i("p",[e._v("Implicit with the utxo is that it prevents double spends. Once you spend a utxo, you cant spend it again. This is quite an important characteristic and while advanced readers will point out chain reorgs can allow a double spend, we will not confuse the issue with such details. The important thing is that given a blockchain at a specific height's blockhash, you can know if a "),i("code",[e._v("txid/vout")]),e._v(" has been spent or not.")]),e._v(" "),i("p",[e._v("There are also the transactions that are in memory waiting to be mined, the mempool. And it is possible for the utxo to be spent by a "),i("code",[e._v("tx")]),e._v(" in the mempool. However since it isnt confirmed yet, it is still unspent at the current height, even if we are pretty sure it will be spent in the next block.")]),e._v(" "),i("p",[e._v("A useful example is to think about a queue of people lined up to get into an event. They need to have a valid ticket and also to get into the queue. After some time passes, they get their ticket stamped and allowed into the event.")]),e._v(" "),i("p",[e._v("In the utxo case, the ticket is the spending transaction and the event is the confirmed blockchain. The queue is the mempool.")])])},[],!1,null,null,null);t.default=o.exports}}]);
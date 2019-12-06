(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{417:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"setup-bitcoin-cash-for-mmv1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-bitcoin-cash-for-mmv1","aria-hidden":"true"}},[a._v("#")]),a._v(" Setup Bitcoin Cash for mmV1")]),a._v(" "),s("h2",{attrs:{id:"gui-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gui-app","aria-hidden":"true"}},[a._v("#")]),a._v(" GUI App")]),a._v(" "),s("p",[a._v("Download and install the latest GUI wallet for your OS from your choice of website.")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bitcoincash.org/#wallets",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.bitcoincash.org/#wallets"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.bitcoinabc.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.bitcoinabc.org/"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://download.bitcoinabc.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://download.bitcoinabc.org/"),s("OutboundLink")],1),a._v(" (find the latest version from here)")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://download.bitcoinabc.org/0.16.1/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://download.bitcoinabc.org/0.16.1/"),s("OutboundLink")],1),a._v(" (latest)")])]),a._v(" "),s("h2",{attrs:{id:"fixing-bitcoin-cash-and-bitcoin-core-conflicting-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixing-bitcoin-cash-and-bitcoin-core-conflicting-setup","aria-hidden":"true"}},[a._v("#")]),a._v(" Fixing Bitcoin Cash and Bitcoin-Core conflicting setup")]),a._v(" "),s("p",[a._v("As many users will be running Bitcoin-Core and Bitcoin Cash Wallets on the same machine, installing and running Bitcoin Cash on existing Bitcoin-Core running system may or may not conflict with existing Bitcoin-Core wallet setup. Just to make sure there is no chance of such case you can rename the Bitcoin Cash directory and file names.")]),a._v(" "),s("p",[a._v("If you have already Bitcoin Cash wallet running on your machine, please do these changes:")]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# assuming ~/.bitcoin is being used by bitcoin cash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" ~/.bitcoin/ ~/.bch/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# assuming ~/.bitcoin/bitcoin.conf file is setup/configured and is used for bitcoin cash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" ~/.bch/bitcoin.conf ~/.bch/bch.conf\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# If you don't have ~/.bch/bch.conf file then create one as follows:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"server=1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"listen=0"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"listenonion=0"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcport=33333"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"port=83333"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcuser=barterbch"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcpassword='),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -c 32 /dev/urandom "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" 0600 ~/.bch/bch.conf\n")])])]),s("h3",{attrs:{id:"osx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#osx","aria-hidden":"true"}},[a._v("#")]),a._v(" OSX")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# assuming $HOME/Library/Application\\ Support/Bitcoin is being used by bitcoin cash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bitcoin "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# assuming $HOME/Library/Application\\ Support/Bitcoin/bitcoin.conf file is setup/configured and is used for bitcoin cash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bitcoin.conf "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# If you don't have $HOME/Library/Application\\ Support/Bch/bch.conf file then create one as follows:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"server=1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"listen=0"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"listenonion=0"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcport=33333"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"port=83333"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcuser=barterbch"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcpassword='),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -c 32 /dev/urandom "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" 0600 "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("ul",[s("li",[a._v("Open Windows Explorer")]),a._v(" "),s("li",[a._v("Type in its address bar "),s("code",[a._v("%AppData%")]),a._v(", and press Enter key to open your logged in user's Application Data folder.")]),a._v(" "),s("li",[a._v("Assuming you have Bitcoin Cash installed and it was using the directory named "),s("code",[a._v("Bitcoin")]),a._v(" at this location, rename it to "),s("code",[a._v("Bch")]),a._v(".")]),a._v(" "),s("li",[a._v("Open "),s("code",[a._v("Bch")]),a._v(" directory and rename "),s("code",[a._v("bitcoin.conf")]),a._v(" file to "),s("code",[a._v("bch.conf")]),a._v(" file.")]),a._v(" "),s("li",[a._v("Open "),s("code",[a._v("bch.conf")]),a._v(" file in a notepad or any text editor of your choice and make sure it matches the following config settings:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("rpcuser"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("examplerpcuser\nrpcpassword"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("examplerpcpassword\nprune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4096\nserver"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\nrpcbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("127.0.0.1\nbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("127.0.0.1\nrpcport"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("33333\nport"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("83333\n\n* Make any changes required to bch.conf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" and save it.\n")])])]),s("h2",{attrs:{id:"running-bitcoin-cash-with-new-setup-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-bitcoin-cash-with-new-setup-changes","aria-hidden":"true"}},[a._v("#")]),a._v(" Running Bitcoin Cash with new setup changes")]),a._v(" "),s("p",[a._v("Since the default directory and config file of bitcoin cash has been renamed you have to now use a command to run Bitcoin Cash.")]),a._v(" "),s("h3",{attrs:{id:"linux-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# If you want to run bitcoin cash wallet with prune mode on, which saves a lot of disk space, then use this command.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if using daemon")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# assuming you have bitcoin cash daemon with name 'bitcoind'")]),a._v("\nbitcoind -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.bch/bch.conf -prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4096 -daemon\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if using QT wallet")]),a._v("\nbitcoin-qt -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.bch/bch.conf -prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4096 -daemon\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if using daemon")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# If you want to run bitcoin cash deamon with full blockchain downloaded then use this command:")]),a._v("\nbitcoind -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.bch/bch.conf -daemon\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if using QT wallet")]),a._v("\nbitcoin-qt -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/.bch/bch.conf -daemon\n")])])]),s("h3",{attrs:{id:"osx-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#osx-2","aria-hidden":"true"}},[a._v("#")]),a._v(" OSX")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# If you want to run bitcoin cash wallet with prune mode on, which saves a lot of disk space, then use this command.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if using daemon")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# assuming you have bitcoin cash daemon with name 'bitcoind'")]),a._v("\nbitcoind -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf -prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4096 -daemon\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if using QT wallet")]),a._v("\nbitcoin-qt -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf -prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4096 -daemon\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if using daemon")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# If you want to run bitcoin cash deamon with full blockchain downloaded then use this command:")]),a._v("\nbitcoind -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf -daemon\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# if using QT wallet")]),a._v("\nbitcoin-qt -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf -daemon\n")])])]),s("h3",{attrs:{id:"windows-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-2","aria-hidden":"true"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("ul",[s("li",[a._v("If you want to run bitcoin cash wallet with prune mode on, which saves a lot of disk space, then use this command.")])]),a._v(" "),s("h3",{attrs:{id:"if-using-daemon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-using-daemon","aria-hidden":"true"}},[a._v("#")]),a._v(" if using daemon")]),a._v(" "),s("ul",[s("li",[a._v("assuming you have bitcoin cash daemon with name 'bitcoind'")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("bitcoind -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%AppData%Bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%AppData%Bchbch.conf -prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4096 -daemon\n")])])]),s("h3",{attrs:{id:"if-using-qt-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-using-qt-wallet","aria-hidden":"true"}},[a._v("#")]),a._v(" if using QT wallet")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" Bitcoin-QT -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%AppData%Bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%AppData%Bchbch.conf -prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4096 -daemon\n")])])]),s("h3",{attrs:{id:"if-using-daemon-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-using-daemon-2","aria-hidden":"true"}},[a._v("#")]),a._v(" if using daemon")]),a._v(" "),s("ul",[s("li",[a._v("If you want to run bitcoin cash deamon with full blockchain downloaded then use this command:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("bitcoind -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%AppData%Bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%AppData%Bchbch.conf -daemon\n")])])]),s("h3",{attrs:{id:"if-using-qt-wallet-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-using-qt-wallet-2","aria-hidden":"true"}},[a._v("#")]),a._v(" if using QT wallet")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("Bitcoin-QT -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%AppData%Bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%AppData%Bchbch.conf -daemon\n")])])]),s("h2",{attrs:{id:"if-you-want-to-install-and-run-bitcoin-cash-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-you-want-to-install-and-run-bitcoin-cash-from-source","aria-hidden":"true"}},[a._v("#")]),a._v(" If you want to install and run Bitcoin Cash from source")]),a._v(" "),s("p",[a._v("You need Bitcoin Cash (BCH) blockchain synced and the wallet daemon running.")]),a._v(" "),s("p",[a._v("Compile and run BitcoinABC wallet from source:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/Bitcoin-ABC/bitcoin-abc\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" bitcoin-abc\n./autogen.sh\n./configure --with-incompatible-bdb --with-gui"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("no --disable-tests --disable-bench --without-miniupnpc\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j4\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" src/bitcoind /usr/local/bin/bchd\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" src/bitcoin-cli /usr/local/bin/bch-cli\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" src/bitcoin-tx /usr/local/bin/bch-tx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/.bch\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"server=1"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"listen=0"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"listenonion=0"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcport=33333"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"port=83333"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcuser=barterbch"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rpcpassword='),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -c 32 /dev/urandom "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v('"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.bch/bch.conf\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" 0600 ~/.bch/bch.conf\nbchd -daemon -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("~/.bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bch.conf\n")])])]),s("p",[a._v("If you already have this installed, just run "),s("code",[a._v("bchd -datadir=/home/<user>/.bch -conf=bch.conf -prune=4096 -daemon")])]),a._v(" "),s("p",[a._v("If you already have Bitcoin ABC istalled on MacOS, you can restart using this command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/Applications/BitcoinABC-Qt.app/Contents/MacOS/BitcoinABC-Qt -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf  -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/\n")])])]),s("p",[a._v("Basically, just run the daemon with "),s("code",[a._v(".bch/bch.conf")]),a._v(" for native and then start BarterDEX and test. That means to run Bitcoin Cash with BarterDEX the BCH users "),s("strong",[a._v("must")]),a._v(" change their Bitcoin Cash data directory, setup "),s("code",[a._v("bitcoin.conf")]),a._v(" as "),s("code",[a._v("bch.conf")]),a._v(" file.")]),a._v(" "),s("p",[s("code",[a._v("bch.conf")]),a._v(" file contents:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("rpcuser"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("examplerpcuser\nrpcpassword"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("examplerpcpassword\nprune"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4096\nserver"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\nrpcbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("127.0.0.1\nbind"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("127.0.0.1\nrpcport"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("33333\nport"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("83333\n")])])]),s("p",[a._v("BaterDEX GUI will automatically show you BitcoinCash (BCH)")]),a._v(" "),s("p",[a._v("Use RPC commands like this")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("bch-cli -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/home/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/.bch -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bch.conf getinfo\n")])])]),s("p",[a._v("to query data.")]),a._v(" "),s("p",[a._v("Optional: This entry goes to "),s("code",[a._v("coins.json")]),a._v(" file (add this if this is not there).")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v('\\"coin\\":\\"BCH\\",\\"name\\":\\"bch\\",\\"active\\":1,\\"rpcport\\":33333,\\"pubtype\\":0,\\"p2shtype\\":5,\\"wiftype\\":128,\\"txfee\\":1000'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"tips-and-tricks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips-and-tricks","aria-hidden":"true"}},[a._v("#")]),a._v(" Tips and Tricks")]),a._v(" "),s("p",[a._v("With the above setup it becomes bit inconvinient to run BitcoinABC app. As it always looks for "),s("code",[a._v("bitcoin")]),a._v(" data directory on it's platform and to make it run with our own custom renamed "),s("code",[a._v("Bch")]),a._v(" direcotry we have to always issue a command to run with the desired path.")]),a._v(" "),s("p",[a._v("But these few tips and tricks may help someone.")]),a._v(" "),s("h3",{attrs:{id:"osx-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#osx-3","aria-hidden":"true"}},[a._v("#")]),a._v(" OSX")]),a._v(" "),s("p",[a._v("Follow these commands to make setup your "),s("code",[a._v("BitcoinABC.app")]),a._v(" to use "),s("code",[a._v("Bch")]),a._v(" data directory on startup.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" /Applications/BitcoinABC-Qt.app/Contents/MacOS\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Rename existing BitcoinABC-Qt file to something else, like BitcoinABCQt")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" BitcoinABC-Qt BitcoinABCQt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Now create a new shells script and paste this line into it")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" BitcoinABC-Qt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Paste this line in this script:")]),a._v("\n/Applications/BitcoinABC-Qt.app/Contents/MacOS/BitcoinABCQt -conf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/bch.conf  -datadir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HOME")]),a._v("/Library/Application\\ Support/Bch/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Press CTRL+O to write this change to file")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Press CTRL+X to exit the text editor and get back to command prompt")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Now change this shell script's permissions to executable")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x BitcoinABC-Qt\n")])])]),s("p",[a._v("With the above change, the "),s("code",[a._v("BitcoinABC-QT.app")]),a._v(" will always start with directory and configuration file of "),s("code",[a._v("Bch")]),a._v(".")]),a._v(" "),s("p",[a._v("And in case you are doing upgrade of "),s("code",[a._v("BitcoinABC-QT.app")]),a._v(" or anything similar for Bitcoin Cash wallet for QT wallet, you can probably apply the same method to set them up for "),s("code",[a._v("Bch")]),a._v(" directory by default.")])])},[],!1,null,null,null);t.default=e.exports}}]);
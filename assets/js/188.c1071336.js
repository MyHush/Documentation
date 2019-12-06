(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{405:function(a,t,e){"use strict";e.r(t);var n=e(0),s=Object(n.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"compile-marketmaker-binary-with-static-nanomsg-in-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-marketmaker-binary-with-static-nanomsg-in-macos","aria-hidden":"true"}},[a._v("#")]),a._v(" Compile marketmaker Binary with Static nanomsg in MacOS")]),a._v(" "),e("p",[a._v("This guide will help you to compile your own marketmaker binary in MacOS (OSX) with static nanomsg. Follow this\n"),e("router-link",{attrs:{to:"/mmV1/guides/compile-marketmaker-binary-with-static-nanomsg-in-Linux.html"}},[a._v("guide")]),a._v(" for Linux.")],1),a._v(" "),e("h2",{attrs:{id:"install-dependency-packages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-dependency-packages","aria-hidden":"true"}},[a._v("#")]),a._v(" Install Dependency packages:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" cmake "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" libcurl4-openssl-dev build-essential\n")])])]),e("h2",{attrs:{id:"install-nanomsg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-nanomsg","aria-hidden":"true"}},[a._v("#")]),a._v(" Install "),e("code",[a._v("nanomsg")])]),a._v(" "),e("p",[a._v("You'll need to install "),e("code",[a._v("homebrew")]),a._v(" (Google how to do it)")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nanomsg\n")])])]),e("h2",{attrs:{id:"clone-supernet-repo-and-compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clone-supernet-repo-and-compile","aria-hidden":"true"}},[a._v("#")]),a._v(" Clone SuperNET repo and compile")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/jl777/SuperNET\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" ~/SuperNET/iguana\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n./m_mm\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n./osx_deploy.sh\n")])])]),e("p",[a._v("Once all done, you should be able to find both "),e("code",[a._v("iguana")]),a._v(" and "),e("code",[a._v("marketmaker")]),a._v(" static binaries in user's home directory, under "),e("code",[a._v("~/tmp/iguana/")]),a._v(".")])])},[],!1,null,null,null);t.default=s.exports}}]);
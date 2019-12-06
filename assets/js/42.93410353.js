(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{259:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-series-—-final-conceptual-discussion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-series-—-final-conceptual-discussion","aria-hidden":"true"}},[t._v("#")]),t._v(" Advanced Series — Final Conceptual Discussion")]),t._v(" "),a("p",[t._v("Up to this point in the tutorial series we have discussed the general concepts of the Antara Framework and we have discussed initial preparations to build a simplified prototype of the Heir Antara Module.")]),t._v(" "),a("p",[t._v("This section of the tutorial series reviews many of the conceptual aspects of the Antara Framework while also diving more thoroughly into technical details.")]),t._v(" "),a("p",[t._v("This is the final conceptual discussion necessary before we begin writing code.")]),t._v(" "),a("h2",{attrs:{id:"understanding-cryptoconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-cryptoconditions","aria-hidden":"true"}},[t._v("#")]),t._v(" Understanding CryptoConditions")]),t._v(" "),a("p",[t._v("According to the industry-wide CryptoConditions standard, a CryptoCondition is a logical expression evaluated on electronic signatures and hashes of transaction data.")]),t._v(" "),a("p",[t._v("CryptoConditions are stored in the scripts of transactions and are evaluated by a supporting CryptoCondition C library.")]),t._v(" "),a("p",[t._v("In a Komodo Smart Chain, the default CC library is included during the installation procedure.")]),t._v(" "),a("h4",{attrs:{id:"antara-extensions-to-cryptoconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-extensions-to-cryptoconditions","aria-hidden":"true"}},[t._v("#")]),t._v(" Antara Extensions to CryptoConditions")]),t._v(" "),a("p",[t._v("In addition to the industry-standard CryptoCondition (CC) library, Komodo's implementation of CC integrates the ability to add arbitrary code into a Smart Chain's consensus mechanism. This allows developers to create essentially an unlimited number of application-specific transaction-validation rules.")]),t._v(" "),a("p",[t._v("For example, in the Heir Module, if the heir attempts to claim funds, the validation code checks whether the owner of the fund has shown recent activity, according to a specified amount of time. The owner can show activity by either adding to or spending from the fund. If the owner has not shown signs of activity, the validation code allows the heir to claim the funds.")]),t._v(" "),a("p",[t._v("Through CryptoConditions and Antara's extensions, the consensus mechanism can rule over the outcome of the cryptocondition logic and arbitrary validation code across the Smart Chain's decentralized network of nodes.")]),t._v(" "),a("h4",{attrs:{id:"makeup-of-a-cryptocondition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makeup-of-a-cryptocondition","aria-hidden":"true"}},[t._v("#")]),t._v(" Makeup of a CryptoCondition")]),t._v(" "),a("p",[t._v("A CryptoCondition consists of two parts:")]),t._v(" "),a("ul",[a("li",[a("b",[t._v("Part I: A condition that must be met")]),t._v(" "),a("ul",[a("li",[t._v("This is stored in the transaction output's "),a("code",[t._v("scriptPubKey")])])])]),t._v(" "),a("li",[a("b",[t._v("Part II: A fulfillment")]),t._v(" "),a("ul",[a("li",[t._v("This is stored in the "),a("code",[t._v("scriptSig")]),t._v(" field of the input of the transaction that spends the above output")])])])]),t._v(" "),a("h5",{attrs:{id:"part-i-logical-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-i-logical-condition","aria-hidden":"true"}},[t._v("#")]),t._v(" Part I: Logical Condition")]),t._v(" "),a("p",[t._v("The "),a("b",[t._v("condition")]),t._v(' contains data that checks the CryptoCondition in "fingerprinted" form.')]),t._v(" "),a("p",[t._v("The term "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fingerprint_(computing)",target:"_blank",rel:"noopener noreferrer"}},[t._v('"fingerprinted"'),a("OutboundLink")],1),t._v(' is a common term in the technology industry. To "fingerprint" data means to convert an arbitrary set of data to a fixed-length byte array. In this manner, a fingerprint uniquely identifies the source data. (A fingerprint is similar in nature to a hash.)')]),t._v(" "),a("p",[t._v("To fingerprint data in the CryptoConditions environment, the CC library acquires the target data, combines it with other data that the developer does not need to manage, and then creates the fingerprint.")]),t._v(" "),a("p",[t._v("Fingerprints are useful in Antara Module development. For example, a logical condition can be a requirement that only a specific fingerprinted "),a("code",[t._v("pubkey")]),t._v(" be allowed to spend a transaction output.")]),t._v(" "),a("h5",{attrs:{id:"part-ii-logical-fulfillment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-ii-logical-fulfillment","aria-hidden":"true"}},[t._v("#")]),t._v(" Part II: Logical Fulfillment")]),t._v(" "),a("p",[t._v("The "),a("b",[t._v("fulfillment")]),t._v(" contains instructions and data about how the consensus mechanism should evaluate the CryptoCondition. For example, the fulfillment could include an instruction to check a spending-transaction's electronic signature as well as the the "),a("code",[t._v("pubkey")]),t._v(" associated with this signature.")]),t._v(" "),a("p",[t._v("To spend a CC output of a transaction, a node on the network sends a spending transaction that contains a CC input that fulfills the CC output's condition. The consensus mechanism of the Smart Chain checks that the fulfillment is correct. For this it uses the C CryptoCondition library to evaluate the fulfillment of the spending transaction. The result of this evaluation is checked against the condition stored in the previous transaction output.")]),t._v(" "),a("p",[t._v("For our example above of an electronic signature, the consensus mechanism runs the logical conditions and fulfillments of the CryptoCondition to verify the electronic signature with the provided pubkey. Then the validation logic calculates the fingerprint of the pubkey and checks it against the condition.")]),t._v(" "),a("p",[t._v("In adding Cryptoconditions to the Antara framework, Komodo extended the original CC protocol by adding an additional aspect beyond the inputs and outputs. This additional part is called the "),a("b",[t._v("EVAL")]),t._v(" CryptoCondition, or eval code.")]),t._v(" "),a("p",[t._v("Each Antara Module has its own unique eval code. The eval code is a number between 0 and 255, and it identifies the specific Antara Module that is associated with a CC transaction. When the consensus validation logic encounters the Antara Module's eval code in a transaction input, the validation logic calls the module's validation function.")]),t._v(" "),a("p",[t._v("The process of validation of an Antara Module's transaction is depicted on the diagram below:")]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",float:"right",display:"block"}},[a("img",{staticStyle:{border:"1rem solid white",margin:"1rem 0rem 1rem 0rem"},attrs:{src:"/cc-verify-work-v2.3.png"}})]),t._v(" "),a("h4",{attrs:{id:"the-simplest-form-of-a-cryptocondition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-simplest-form-of-a-cryptocondition","aria-hidden":"true"}},[t._v("#")]),t._v(" The Simplest form of a CryptoCondition")]),t._v(" "),a("p",[t._v("The simplest CryptoCondition evaluates an electronic signature of a spending-transaction's "),a("code",[t._v("scriptsig")]),t._v(". Assuming the evaluation is successful, the spending-transaction is then able to spend funds from the output of another transaction.")]),t._v(" "),a("p",[t._v("At first glance, you may be confused about why a CryptoCondition is useful in this event, as a normal blockchain protocol can already accomplish this task.")]),t._v(" "),a("p",[t._v("The answer is that there is an important difference in the CryptoCondition implementation. When a CryptoCondition transaction output is spent, the Antara Module's code can enforce additional validation logic. This is accomplished via the eval code that is stored as a part of the CryptoCondition's inputs and outputs. We will describe this further in the Heir Module development section.")]),t._v(" "),a("p",[t._v("The ability to enforce additional logic is the key difference that illuminates the power of Antara. For example, additional arbitrary validation code can include logic that allows a user to spend the output only at the appropriate time. The transaction output can be spent only via a spending transaction that has the matching fulfillment, and both the CryptoCondition and the Antara Module validation code evaluate to "),a("code",[t._v("true")]),t._v(".")]),t._v(" "),a("p",[t._v("Even the basic CryptoCondition features offer more complex logical expressions than a normal Bitcoin Script. For example, with CC a spending transaction could be required to have signatures from at least "),a("code",[t._v("M")]),t._v(" of "),a("code",[t._v("N")]),t._v(" acceptable "),a("code",[t._v("pubkeys")]),t._v(".")]),t._v(" "),a("p",[t._v("As logical conditions and subconditions can be added to a CryptoCondition as desired, the developer can utilize both the CryptoConditions features and customized module's validation code to build complex logic that governs the movement of Smart Chain assets. In this sense, Antara is an advanced evolution of the basic Bitcoin Script security features, such as pubkey or pubkey hash scripts. We will examine validation code in greater detail later in this tutorial.")]),t._v(" "),a("p",[t._v("In this section, we became acquainted with the concept of logical conditions that are associated with transaction outputs, and logical fulfillments associated with spending-transactions. These two elements make up the rudimentary aspect of a CryptoCondition.")]),t._v(" "),a("p",[t._v("There are yet other elements of an Antara-based CryptoCondition. One element is called the "),a("code",[t._v("EVAL")]),t._v(" code, and it is stored in the CryptoCondition's inputs and outputs. We will touch on this topic soon.")]),t._v(" "),a("h4",{attrs:{id:"antara-module-as-data-and-business-logic-layer-of-business-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-module-as-data-and-business-logic-layer-of-business-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Antara Module as Data and Business Logic Layer of Business Application")]),t._v(" "),a("p",[t._v("An Antara Module can be described as a combination of a data layer and a business-logic layer in an application. The data layer is the collection of transactions related to the Antara Module, and the business-logic layer is the module's arbitrary code.")]),t._v(" "),a("p",[t._v("These two layers tie in with other layers in an Antara-based software application. For example, the software external to the blockchain could include a presentation layer, consisting of a Graphical User Interface (GUI) and other visual elements. External applications interact with an Antara Module via its RPC calls.")]),t._v(" "),a("p",[t._v("Also, there can often be an additional oracle layer, wherein oracle software connects nodes to external data sources across the Internet. This can be the case in Antara-based software applications that make use of the "),a("router-link",{attrs:{to:"/basic-docs/antara/antara-api/oracles.html#introduction"}},[a("b",[t._v("Oracles")])]),t._v(" Antara Module.")],1),t._v(" "),a("h4",{attrs:{id:"a-global-cc-address-in-the-antara-framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-global-cc-address-in-the-antara-framework","aria-hidden":"true"}},[t._v("#")]),t._v(" A Global CC Address in the Antara Framework")]),t._v(" "),a("p",[t._v("Recall that each Antara Module has an associated global CC address. The private key to this global CC address is publicly available. The address can be used for such tasks as sharing funds between users of this module, and anyone can attempt to spend funds from this address.")]),t._v(" "),a("p",[t._v("The following is an example of a global CC address created and assigned for the Heir module.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HeirCCaddr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RDVHcSekmXgeYBqRupNTmqo3Rn8QRXNduy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("HeirNormaladdr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RTPwUjKYECcGn6Y4KYChLhgaht1RSU4jwf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" HeirCChexstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("67")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"03c91bef3d7cc59c3a89286833a3446b29e52a5e773f738a1ad2b09785e5f4179e"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint8_t")]),t._v(" HeirCCpriv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x9d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xa1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xf8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xf7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x91")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x89")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x9a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x86")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xd7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xdf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xaa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xe3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x2b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xc0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x66")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x9c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x93")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xc4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x5e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x9d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xb9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xce")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Function")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("HeirCCaddr")]),t._v(" "),a("td",[t._v("the global CC address itself")])]),t._v(" "),a("tr",[a("td",[t._v("HeirCChexstr")]),t._v(" "),a("td",[t._v("the pubkey")])]),t._v(" "),a("tr",[a("td",[t._v("HeirCCpriv")]),t._v(" "),a("td",[t._v("the privkey for the global CC address")])]),t._v(" "),a("tr",[a("td",[t._v("HeirNormaladdr")]),t._v(" "),a("td",[t._v("The normal address for the same pubkey and privkey. Spending from this address does not validation by the Antara Module")])])])]),t._v(" "),a("p",[t._v('In the Antara codebase, the global CC address is sometimes called the "unspendable" address. This is likely a reference to the fact that for any user to spend funds from this address, the spending transaction must pass the module\'s validation code.')]),t._v(" "),a("p",[t._v("For example, the global CC address could store funds shared between several users. As a global CC address's privkey is publicly available, anyone might try to spend these funds. This is where the Antara validation code will exercise control over whom is allowed to spend funds, and by which rules. The RPC aspect of the Antara Module must prevent the creation of inappropriate transactions as well.")]),t._v(" "),a("p",[t._v("A transaction can also send a nominal fee to the global CC address with the intention of turning this transaction's output into a search key (called a marker). To ensure these markers remain publicly visible forever, the module's validation code can disable spending for these markers. With this combination, the developer can use the "),a("code",[t._v("SetCCunspents")]),t._v(" SDK function to enumerate all transactions in the global CC address, and thus discover the module's transaction history.")]),t._v(" "),a("h2",{attrs:{id:"antara-development-checklist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-development-checklist","aria-hidden":"true"}},[t._v("#")]),t._v(" Antara Development Checklist")]),t._v(" "),a("p",[t._v("Development requirements for each Antara Module:")]),t._v(" "),a("ul",[a("li",[t._v("Allocate a new "),a("code",[t._v("EVAL")]),t._v(" code for your module")]),t._v(" "),a("li",[t._v("Assign a global address for the module")]),t._v(" "),a("li",[t._v("Define the module's transactions\n"),a("ul",[a("li",[t._v("This includes the structure of their inputs, outputs, and opreturn format")])])]),t._v(" "),a("li",[t._v("Implement the common RPC functions that nearly all modules feature\n"),a("ul",[a("li",[t._v("These are typically functions for retrieving a list of all of the module's initial transactions, and for retrieving user addresses and the global CC address")])])]),t._v(" "),a("li",[t._v("Implement the module's specific RPC functions\n"),a("ul",[a("li",[t._v("These are used to create the module-related transactions and to return relevant information about the module's data and state")])])]),t._v(" "),a("li",[t._v("Implement the module's validation code")])]),t._v(" "),a("h2",{attrs:{id:"antara-module-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-module-architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" Antara Module Architecture")]),t._v(" "),a("p",[t._v("From an architectural standpoint, an Antara Module is simply a C/C++ source file.")]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",float:"right",display:"block"}},[a("img",{staticStyle:{border:"0.5rem solid white",margin:"1rem 0rem 1rem 0rem"},attrs:{src:"/CC-Antara-arch-v2.3.png"}})]),t._v(" "),a("p",[t._v("There are two parts to the module's source file: the implementation of RPC's and the validation code. You also need to inform the basic komodod source code of your new Antara Module through the following steps.")]),t._v(" "),a("ul",[a("li",[t._v("Allocate a new eval code for your Antara Module in "),a("code",[t._v("src/cc/eval.h")])]),t._v(" "),a("li",[t._v("add your module's global addresses and the validation code entry function into the registry of Antara Modules in "),a("code",[t._v("src/cc/CCcustom.cpp")])])]),t._v(" "),a("h4",{attrs:{id:"rpc-implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc-implementations","aria-hidden":"true"}},[t._v("#")]),t._v(" RPC Implementations")]),t._v(" "),a("p",[t._v("The first part of the Antara's module source file consists of the implementation of all Remote Procedure Calls (RPC's) for this module. These typically either perform transactions or query information about state and data.")]),t._v(" "),a("p",[t._v("The developer must also implement high-level functions for any desired RPC commands that are called by the RPC engine and are responsible for converting the RPC data to native C++ data types.")]),t._v(" "),a("p",[t._v("These functions should be added into an existing source in the "),a("code",[t._v("/src/rpc")]),t._v(" directory. Alternatively, the developer might create his own RPC source file.")]),t._v(" "),a("p",[t._v("A reference to the RPC-command functions should be added to the global RPC command table in the "),a("code",[t._v("/src/rpc/server.cpp")]),t._v(" source file.")]),t._v(" "),a("p",[t._v("With this properly completed, the Smart Chain daemon's compiler will automatically make each RPC available at the command line through the "),a("code",[t._v("komodo-cli")]),t._v(" software and via the "),a("code",[t._v("curl")]),t._v(" utility.")]),t._v(" "),a("p",[t._v("Essentially all modules have at least these two RPC's.")]),t._v(" "),a("ul",[a("li",[t._v("XXXXlist\n"),a("ul",[a("li",[t._v("This lists all initial transactions relevant to the module")])])]),t._v(" "),a("li",[t._v("XXXXinfo\n"),a("ul",[a("li",[t._v("This RPC typically also requires an additional input -- a transaction ID for which information is desired")]),t._v(" "),a("li",[t._v("When called, the method then returns information about this transaction ID")])])])]),t._v(" "),a("p",[t._v("Include other RPC implementations as desired.")]),t._v(" "),a("h4",{attrs:{id:"antara-module-validation-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-module-validation-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Antara Module Validation Code")]),t._v(" "),a("p",[t._v("The main purpose of Antara Module validation code is two-fold. First, it ensures that the structure of the sequence of an Antara Module related transactions and their data is accurate. Second, the validation code prevents inappropriate Antara-related transactions from entering the chain. In other words, module validation code should protect against malicious transactions, and this is the code's most important task.")]),t._v(" "),a("p",[t._v("Antara Module Validation code is triggered anytime a node attempts to add a CC spending-transaction to the chain.")]),t._v(" "),a("p",[t._v("A module's validation code is activated only when a transaction has at least one CC input that bears the module's "),a("code",[t._v("EVAL")]),t._v(" code inside the "),a("b",[t._v("scriptSig")]),t._v(" in the transaction.")]),t._v(" "),a("p",[t._v("A module's initial transaction may not have a CC input. When this happens, the validation code is not triggered. Therefore, the transaction may be handled by the normal blockchain protocol.")]),t._v(" "),a("p",[t._v("As an aside, when the developer needs to write code that validates a spending transaction that spends a utxo that has no CC inputs, the code must first validate the utxo as well. If the result of the validation of the utxo is "),a("code",[t._v("false")]),t._v(", then the code can also reject the spending transaction. We will delve into this topic in thorough detail further in the tutorial.")]),t._v(" "),a("h4",{attrs:{id:"the-eval-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-eval-code","aria-hidden":"true"}},[t._v("#")]),t._v(" The EVAL Code")]),t._v(" "),a("p",[t._v("A unique 8-bit "),a("code",[t._v("EVAL")]),t._v(" code is attached to each Antara Module. The "),a("code",[t._v("EVAL")]),t._v(" code is used by the core Smart Chain daemon's transaction-validation code to route any relevant transactions to the appropriate module's validation code.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("EVAL")]),t._v(" code itself is actually a simple CryptoCondition. The CryptoCondition tests for the byte value and, if the value is "),a("code",[t._v("true")]),t._v(", routes the result according to the core Smart Chain daemon's code.")]),t._v(" "),a("h3",{attrs:{id:"antara-module-transaction-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-module-transaction-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Antara Module Transaction Structure")]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",float:"right",display:"block"}},[a("img",{staticStyle:{border:"1rem solid white"},attrs:{src:"/cc-tx-structure-for-guide-v3.2.png"}})]),t._v(" "),a("p",[t._v('A CryptoCondition (CC) input is called a "vin" and a CryptoCondition output is called a "vout".')]),t._v(" "),a("p",[t._v("A CC transaction has one or more vins and one or more vouts.")]),t._v(" "),a("p",[t._v("When creating a CC transaction, the transaction's vins can consume the vouts of previous transactions that were either related to CC, or not related.")]),t._v(" "),a("p",[t._v("When they are not related to CC, the vin of the current transaction does not need to include a CC fulfillment.")]),t._v(" "),a("p",[t._v("However, if the current transaction's vins are consuming vouts from a CC-related transaction, then the current transaction's vins must contain logical fulfillments that meet the requirements of the previous transaction's CC vouts. Also, the current transaction's CC vins contain the transaction id (txid) of the previous transaction.")]),t._v(" "),a("p",[t._v("A CC transaction typically also has an opreturn vout that contains module data.")]),t._v(" "),a("h4",{attrs:{id:"antara-module-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-module-sdk","aria-hidden":"true"}},[t._v("#")]),t._v(" Antara Module SDK")]),t._v(" "),a("p",[t._v("Komodo is building an SDK for Antara Module development. The SDK is still in the early stages. Some of the SDK functions are already available, and can be found in the following source files:")]),t._v(" "),a("ul",[a("li",[t._v("CCtx.cpp")]),t._v(" "),a("li",[t._v("CCutils.cpp")]),t._v(" "),a("li",[t._v("cc.cpp")]),t._v(" "),a("li",[t._v("eval.cpp")])]),t._v(" "),a("p",[t._v("We will return to the SDK functions when we discuss the Heir module development process.")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("router-link",{attrs:{to:"/basic-docs/antara/antara-tutorials/advanced-series-5.html"}},[a("b",[t._v("Link to Next Tutorial in Advanced Series")])])],1)])},[],!1,null,null,null);e.default=s.exports}}]);
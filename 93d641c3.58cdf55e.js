(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return l}));var n=a(2),c=a(6),s=(a(0),a(142)),b={title:"Message"},o={unversionedId:"api/message",id:"api/message",isDocsHomePage:!1,title:"Message",description:"All wechat messages will be encapsulated as a Message.",source:"@site/docs/api/message.md",slug:"/api/message",permalink:"/docs/api/message",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/message.md",version:"current",lastUpdatedBy:"m4d3bug",lastUpdatedAt:1599745104,sidebar:"docs",previous:{title:"Wechaty",permalink:"/docs/api/wechaty"},next:{title:"Contact",permalink:"/docs/api/contact"}},r=[{value:"Message",id:"message",children:[{value:"message.from() \u21d2 <code>Contact | null</code>",id:"messagefrom-\u21d2-contact--null",children:[]},{value:"message.to() \u21d2 <code>Contact</code> | <code>null</code>",id:"messageto-\u21d2-contact--null",children:[]},{value:"message.room() \u21d2 <code>Room</code> | <code>null</code>",id:"messageroom-\u21d2-room--null",children:[]},{value:"<del>message.content()</del>",id:"messagecontent",children:[]},{value:"message.text() \u21d2 <code>string</code>",id:"messagetext-\u21d2-string",children:[]},{value:"message.toRecalled() \u21d2 <code>Promise &lt;Message | null&gt;</code>",id:"messagetorecalled-\u21d2-promise-message--null",children:[]},{value:"message.say(textOrContactOrFileOrUrlLinkOrMiniProgram) \u21d2 <code>Promise &lt;void&gt;</code>",id:"messagesaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void",children:[]},{value:"message.type() \u21d2 <code>MessageType</code>",id:"messagetype-\u21d2-messagetype",children:[]},{value:"message.self() \u21d2 <code>boolean</code>",id:"messageself-\u21d2-boolean",children:[]},{value:"message.mention() \u21d2 <code>Promise &lt;Contact []&gt;</code>",id:"messagemention-\u21d2-promise-contact-",children:[]},{value:"message.mentionSelf() \u21d2 <code>Promise &lt;boolean&gt;</code>",id:"messagementionself-\u21d2-promise-boolean",children:[]},{value:"message.forward(to) \u21d2 <code>Promise &lt;void&gt;</code>",id:"messageforwardto-\u21d2-promise-void",children:[]},{value:"message.date() \u21d2 <code>Date</code>",id:"messagedate-\u21d2-date",children:[]},{value:"message.age() \u21d2 <code>number</code>",id:"messageage-\u21d2-number",children:[]},{value:"<del>message.file()</del>",id:"messagefile",children:[]},{value:"message.toFileBox() \u21d2 <code>Promise &lt;FileBox&gt;</code>",id:"messagetofilebox-\u21d2-promise-filebox",children:[]},{value:"message.toContact() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"messagetocontact-\u21d2-promise-contact",children:[]},{value:"message.toUrlLink() \u21d2 <code>Promise &lt;UrlLink&gt;</code>",id:"messagetourllink-\u21d2-promise-urllink",children:[]},{value:"Message.find() \u21d2 <code>Promise &lt;Message | null&gt;</code>",id:"messagefind-\u21d2-promise-message--null",children:[]},{value:"Message.findAll() \u21d2 <code>Promise &lt;Message []&gt;</code>",id:"messagefindall-\u21d2-promise-message-",children:[]}]}],i={rightToc:r};function l(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"All wechat messages will be encapsulated as a Message."),Object(s.b)("h2",{id:"message"},"Message"),Object(s.b)("p",null,"All wechat messages will be encapsulated as a Message."),Object(s.b)("p",null,Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts"}),"Examples/Ding-Dong-Bot")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": global class"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message"}),"Message"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"instance"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+from"}),".from","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Contact")," ","|"," ",Object(s.b)("inlineCode",{parentName:"li"},"null")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+to"}),".to","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Contact")," ","|"," ",Object(s.b)("inlineCode",{parentName:"li"},"null")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+room"}),".room","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Room")," ","|"," ",Object(s.b)("inlineCode",{parentName:"li"},"null")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+content"}),Object(s.b)("del",{parentName:"a"},".content","(",")"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+text"}),".text","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"string")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+say"}),".say","(","textOrContactOrFile",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+type"}),".type","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"MessageType")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+self"}),".self","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"boolean")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+mention"}),".mention","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <Contact []>")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+mentionSelf"}),".mentionSelf","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <boolean>")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+forward"}),".forward","(","to",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+date"}),".date","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Date")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+age"}),".age","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"number")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+file"}),Object(s.b)("del",{parentName:"a"},".file","(",")"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+toFileBox"}),".toFileBox","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <FileBox>")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+toContact"}),".toContact","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <Contact>")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message+toUrlLink"}),".toUrlLink","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <UrlLink>")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"static"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message.find"}),".find","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <Message>")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/message#Message.findAll"}),".findAll","(",")")," \u21d2 ",Object(s.b)("inlineCode",{parentName:"li"},"Promise <Message []>"))))))),Object(s.b)("h3",{id:"messagefrom-\u21d2-contact--null"},"message.from","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Contact | null")),Object(s.b)("p",null,"Get the sender from a message."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),Object(s.b)("h3",{id:"messageto-\u21d2-contact--null"},"message.to","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Contact")," ","|"," ",Object(s.b)("inlineCode",{parentName:"h3"},"null")),Object(s.b)("p",null,"Get the destination of the message Message.to","(",")"," will return null if a message is in a room, use Message.room","(",")"," to get the room."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h4",{id:"example"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = message.from()\n  const text = message.text()\n  const toContact = message.to()\n  if (toContact) {\n    const name = toContact.name()\n    console.log(`toContact: ${name} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),Object(s.b)("h3",{id:"messageroom-\u21d2-room--null"},"message.room","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Room")," ","|"," ",Object(s.b)("inlineCode",{parentName:"h3"},"null")),Object(s.b)("p",null,"Get the room from the message. If the message is not in a room, then will return ",Object(s.b)("inlineCode",{parentName:"p"},"null")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h4",{id:"example-1"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),Object(s.b)("h3",{id:"messagecontent"},Object(s.b)("del",{parentName:"h3"},"message.content","(",")")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},Object(s.b)("strong",{parentName:"em"},"Deprecated"))),Object(s.b)("p",null,"use ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message+text"}),"text")," instead"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h3",{id:"messagetext-\u21d2-string"},"message.text","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"string")),Object(s.b)("p",null,"Get the text content of the message"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const contact = msg.from()\n  const text = msg.text()\n  const room = msg.room()\n  if (room) {\n    const topic = await room.topic()\n    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)\n  } else {\n    console.log(`Contact: ${contact.name()} Text: ${text}`)\n  }\n})\n.start()\n")),Object(s.b)("h3",{id:"messagetorecalled-\u21d2-promise-message--null"},"message.toRecalled","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <Message | null>")),Object(s.b)("p",null,"Get the text content of the recalled message"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  if (m.type() === bot.Message.Type.Recalled) {\n    const recalledMessage = await m.toRecalled()\n    console.log(`Message: ${recalledMessage} has been recalled.`)\n  }\n})\n.start()\n")),Object(s.b)("h3",{id:"messagesaytextorcontactorfileorurllinkorminiprogram-\u21d2-promise-void"},"message.say","(","textOrContactOrFileOrUrlLinkOrMiniProgram",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(s.b)("p",null,"Reply a Text, Contact Card, Media File or Link message to the sender."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"}),"puppet-compatible-table"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(s.b)("strong",{parentName:"p"},"See"),": ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts"}),"Examples/ding-dong-bot")),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"textOrContactOrFileOrUrlLinkOrMiniProgram"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(s.b)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(s.b)("inlineCode",{parentName:"td"},"Contact")," ","|"," ",Object(s.b)("inlineCode",{parentName:"td"},"FileBox")," ","|"," ",Object(s.b)("inlineCode",{parentName:"td"},"UrlLink")," ","|"," ",Object(s.b)("inlineCode",{parentName:"td"},"MiniProgram")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"send text, Contact, UrlLink, MiniProgram or file to bot.   You can use ",Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.npmjs.com/package/file-box"}),"FileBox")," to send file")))),Object(s.b)("h4",{id:"example-2"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { FileBox }  from 'file-box'\nimport {\n  Wechaty,\n  UrlLink,\n  MiniProgram,\n}  from 'wechaty'\n\nconst bot = new Wechaty()\nbot\n.on('message', async m => {\n\n// 1. send Image\n\n  if (/^ding$/i.test(m.text())) {\n    const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\n    await msg.say(fileBox)\n  }\n\n// 2. send Text\n\n  if (/^dong$/i.test(m.text())) {\n    await msg.say('dingdingding')\n  }\n\n// 3. send Contact\n\n  if (/^lijiarui$/i.test(m.text())) {\n    const contactCard = await bot.Contact.find({name: 'lijiarui'})\n    if (!contactCard) {\n      console.log('not found')\n      return\n    }\n    await msg.say(contactCard)\n  }\n\n// 4. send UrlLink\n\n  if (/^link$/i.test(m.text())) {\n    const urlLink = new UrlLink({\n      description: 'Wechaty is a Bot SDK for Wechat Individual Account which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.',\n      thumbnailUrl: 'https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67',\n      title: 'Wechaty',\n      url: 'https://github.com/wechaty/wechaty',\n    });\n\n    await msg.say(urlLink);\n  }\n\n// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)\n\n  if (/^mini-program$/i.test(m.text())) {\n    const miniProgram = new MiniProgram ({\n      appid              : 'gh_0aa444a25adc',\n      title              : '\u6211\u6b63\u5728\u4f7f\u7528Authing\u8ba4\u8bc1\u8eab\u4efd\uff0c\u4f60\u4e5f\u6765\u8bd5\u8bd5\u5427',\n      pagePath           : 'routes/explore.html',\n      description        : '\u8eab\u4efd\u7ba1\u5bb6',\n      thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',\n      thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',\n    });\n\n    await msg.say(miniProgram);\n  }\n})\n.start()\n")),Object(s.b)("h3",{id:"messagetype-\u21d2-messagetype"},"message.type","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"MessageType")),Object(s.b)("p",null,"Get the type from the message."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Tips: MessageType is Enum here. ","<","/br",">"),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"MessageType.Unknown"),Object(s.b)("li",{parentName:"ul"},"MessageType.Attachment"),Object(s.b)("li",{parentName:"ul"},"MessageType.Audio"),Object(s.b)("li",{parentName:"ul"},"MessageType.Contact"),Object(s.b)("li",{parentName:"ul"},"MessageType.Emoticon"),Object(s.b)("li",{parentName:"ul"},"MessageType.Image"),Object(s.b)("li",{parentName:"ul"},"MessageType.Text"),Object(s.b)("li",{parentName:"ul"},"MessageType.Video"),Object(s.b)("li",{parentName:"ul"},"MessageType.Url"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nif (message.type() === bot.Message.Type.Text) {\n  console.log('This is a text message')\n}\n")),Object(s.b)("h3",{id:"messageself-\u21d2-boolean"},"message.self","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"boolean")),Object(s.b)("p",null,"Check if a message is sent by self."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(s.b)("strong",{parentName:"p"},"Returns"),": ",Object(s.b)("inlineCode",{parentName:"p"},"boolean")," - - Return ",Object(s.b)("inlineCode",{parentName:"p"},"true")," for send from self, ",Object(s.b)("inlineCode",{parentName:"p"},"false")," for send from others. ",Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"if (message.self()) {\n console.log('this message is sent by myself!')\n}\n")),Object(s.b)("h3",{id:"messagemention-\u21d2-promise-contact-"},"message.mention","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <Contact []>")),Object(s.b)("p",null,"Get message mentioned contactList."),Object(s.b)("p",null,"Message event table as follows"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Web"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Mac PC Client"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"iOS Mobile"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"android Mobile"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"[","You were mentioned","]"," tip ","(","[","\u6709\u4eba@\u6211","]","\u7684\u63d0\u793a",")"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u221a"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u221a"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u221a")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Identify magic code ","(","8197",")"," by copy & paste in mobile"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u221a"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u221a"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Identify magic code ","(","8197",")"," by programming"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Identify two contacts with the same roomAlias by ","[","You were  mentioned","]"," tip"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2718"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u221a"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u221a")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(s.b)("strong",{parentName:"p"},"Returns"),": ",Object(s.b)("inlineCode",{parentName:"p"},"Promise <Contact []>")," - - Return message mentioned contactList ",Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const contactList = await message.mention()\nconsole.log(contactList)\n")),Object(s.b)("h3",{id:"messagementionself-\u21d2-promise-boolean"},"message.mentionSelf","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <boolean>")),Object(s.b)("p",null,"Check if a message is mention self."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))," ",Object(s.b)("strong",{parentName:"p"},"Returns"),": ",Object(s.b)("inlineCode",{parentName:"p"},"Promise <boolean>")," - - Return ",Object(s.b)("inlineCode",{parentName:"p"},"true")," for mention me. ",Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"if (await message.mentionSelf()) {\n console.log('this message were mentioned me! [You were mentioned] tip ([\u6709\u4eba@\u6211]\u7684\u63d0\u793a)')\n}\n")),Object(s.b)("h3",{id:"messageforwardto-\u21d2-promise-void"},"message.forward","(","to",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(s.b)("p",null,"Forward the received message. This action doesn't trigger the on-message events."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"to"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(s.b)("inlineCode",{parentName:"td"},"Sayable")," ","|"," ",Object(s.b)("inlineCode",{parentName:"td"},"Array")),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Room or Contact The recipient of the message, the room, or the contact")))),Object(s.b)("h4",{id:"example-3"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot\n.on('message', async m => {\n  const room = await bot.Room.find({topic: 'wechaty'})\n  if (room) {\n    await m.forward(room)\n    console.log('forward this message to wechaty room!')\n  }\n})\n.start()\n")),Object(s.b)("h3",{id:"messagedate-\u21d2-date"},"message.date","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Date")),Object(s.b)("p",null,"Message sent date"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h3",{id:"messageage-\u21d2-number"},"message.age","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"number")),Object(s.b)("p",null,"Returns the message age in seconds."),Object(s.b)("p",null,"For example, the message is sent at time ",Object(s.b)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",Object(s.b)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",Object(s.b)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h3",{id:"messagefile"},Object(s.b)("del",{parentName:"h3"},"message.file","(",")")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},Object(s.b)("strong",{parentName:"em"},"Deprecated"))),Object(s.b)("p",null,"use ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message+toFileBox"}),"toFileBox")," instead"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h3",{id:"messagetofilebox-\u21d2-promise-filebox"},"message.toFileBox","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <FileBox>")),Object(s.b)("p",null,"Extract the Media File from the Message, and put it into the FileBox."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"}),"puppet-compatible-table"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h3",{id:"messagetocontact-\u21d2-promise-contact"},"message.toContact","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <Contact>")),Object(s.b)("p",null,"Get Share Card of the Message Extract the Contact Card from the Message, and encapsulate it into Contact class"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"}),"puppet-compatible-table"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h3",{id:"messagetourllink-\u21d2-promise-urllink"},"message.toUrlLink","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <UrlLink>")),Object(s.b)("p",null,"Get Url Link of the Message Extract the Url Link from the Message, and encapsulate it into UrlLink class"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Tips: This function is depending on the Puppet Implementation, see ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table"}),"puppet-compatible-table"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h3",{id:"messagefind-\u21d2-promise-message--null"},"Message.find","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <Message | null>")),Object(s.b)("p",null,"Find message in cache"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))),Object(s.b)("h3",{id:"messagefindall-\u21d2-promise-message-"},"Message.findAll","(",")"," \u21d2 ",Object(s.b)("inlineCode",{parentName:"h3"},"Promise <Message []>")),Object(s.b)("p",null,"Find messages in cache"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/message#Message"}),Object(s.b)("inlineCode",{parentName:"a"},"Message"))))}l.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var n=a(0),c=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),l=function(e){var t=c.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,b=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,g=m["".concat(b,".").concat(d)]||m[d]||p[d]||s;return a?c.a.createElement(g,o(o({ref:t},i),{},{components:a})):c.a.createElement(g,o({ref:t},i))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,b=new Array(s);b[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<s;i++)b[i]=a[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
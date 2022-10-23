(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{303:function(t,a,s){"use strict";s.r(a);var e=s(12),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"渲染流程-上-html、css和javascript是如何变成页面的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程-上-html、css和javascript是如何变成页面的"}},[t._v("#")]),t._v(" 渲染流程（上）：HTML、CSS和JavaScript是如何变成页面的")]),t._v(" "),a("p",[t._v("在上一篇文章中我们介绍了导航相关的流程，那导航被提交后又会怎么样呢？就进入了渲染阶段。这个阶段很重要，了解其相关流程能让你“看透”页面是如何工作的，有了这些知识，你可以解决一系列相关的问题，比如能熟练使用开发者工具，因为能够理解开发者工具里面大部分项目的含义，能优化页面卡顿问题，使用JavaScript优化动画流程，通过优化样式表来防止强制同步布局，等等。")]),t._v(" "),a("p",[t._v("既然它的功能这么强大，那么今天，我们就来好好聊聊渲染流程。")]),t._v(" "),a("p",[t._v("通常，我们编写好HTML、CSS、JavaScript等文件，经过浏览器就会显示出漂亮的页面（如下图所示），但是你知道它们是如何转化成页面的吗？这背后的原理，估计很多人都答不上来。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/2b/79/2b08a85c63bee68c6fd95dabb648fd79.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出，左边输入的是HTML、CSS、JavaScript数据，这些数据经过中间渲染模块的处理，最终输出为屏幕上的像素。")]),t._v(" "),a("p",[t._v("这中间的渲染模块就是我们今天要讨论的主题。为了能更好地理解下文，你可以先结合下图快速抓住HTML、CSS和JavaScript的含义：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/31/e6/31cd7172f743193d682d088a60cb44e6.png",alt:""}})]),t._v(" "),a("p",[t._v("从上图可以看出，HTML的内容是由标记和文本组成。标记也称为标签，每个标签都有它自己的语意，浏览器会根据标签的语意来正确展示HTML内容。比如上面的"),a("code",[t._v("<p>")]),t._v("标签是告诉浏览器在这里的内容需要创建一个新段落，中间的文本就是段落中需要显示的内容")]),t._v(" "),a("p",[t._v("如果需要改变HTML的字体颜色、大小等信息，就需要用到CSS。CSS又称为层叠样式表，是由选择器和属性组成，比如图中的p选择器，它会把HTML里面"),a("code",[t._v("<p>")]),t._v("标签的内容选择出来，然后再把选择器的属性值应用到"),a("code",[t._v("<p>")]),t._v("标签内容上。选择器里面有个"),a("code",[t._v("color")]),t._v("属性，它的值是red，这是告诉渲染引擎把"),a("code",[t._v("<p>")]),t._v("标签的内容显示为红色")]),t._v(" "),a("p",[t._v("至于JavaScript（简称为JS），使用它可以使网页的内容“动”起来，比如上图中，可以通过JavaScript来修改CSS样式值，从而达到修改文本颜色的目的。")]),t._v(" "),a("p",[t._v("搞清楚HTML、CSS和JavaScript的含义后，那么接下来我们就正式开始分析渲染模块了。")]),t._v(" "),a("p",[t._v("由于渲染机制过于复杂，所以渲染模块在执行过程中会被划分为很多子阶段，输入的HTML经过这些子阶段，最后输出像素。我们把这样的一个处理流程叫做渲染流水线，其大致流程如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/92/e8/9259f8732ddad472e5e08a633ad46de8.png",alt:""}})]),t._v(" "),a("p",[t._v("按照渲染的时间顺序，流水线可分为如下几个子阶段：构建DOM树、样式计算、布局阶段、分层、绘制、分块、光栅化和合成。内容比较多，我会用两篇文章来为你详细讲解这各个子阶段。接下来，在介绍每个阶段的过程中，你应该重点关注以下三点内容")]),t._v(" "),a("ul",[a("li",[t._v("开始每个子阶段都有其输入的内容；")]),t._v(" "),a("li",[t._v("然后每个子阶段有其处理过程；")]),t._v(" "),a("li",[t._v("最终每个子阶段会生成输出内容。")])]),t._v(" "),a("p",[t._v("理解了这三部分内容，能让你更加清晰地理解每个子阶段。")]),t._v(" "),a("h2",{attrs:{id:"构建dom树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建dom树"}},[t._v("#")]),t._v(" 构建DOM树")]),t._v(" "),a("p",[a("strong",[t._v("为什么要构建DOM树呢")]),t._v("？这是因为浏览器无法直接理解和使用HTML，所以需要将HTML转换为浏览器能够理解的结构——DOM树。")]),t._v(" "),a("p",[t._v("这里我们还需要简单介绍下什么是树结构，为了更直观地理解，你可以参考下面我画的几个树结构：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/fc/38/fcad0a4e3e73c796f00d6120284a3638.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出，树这种结构非常像我们现实生活中的“树”，其中每个点我们称为节点，相连的节点称为父子节点。树结构在浏览器中的应用还是比较多的，比如下面我们要介绍的渲染流程，就在频繁地使用树结构。")]),t._v(" "),a("p",[t._v("接下来咱们还是言归正传，来看看DOM树的构建过程，你可以参考下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/12/79/125849ec56a3ea98d4b476c66c754f79.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出，构建DOM树的输入内容是一个非常简单的HTML文件，然后经由HTML解析器解析，最终输出树状结构的DOM。")]),t._v(" "),a("p",[t._v("为了更加直观地理解DOM树，你可以打开Chrome的“开发者工具”，选择“Console”标签来打开控制台，然后在控制台里面输入“document”后回车，这样你就能看到一个完整的DOM树结构，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/47/73/47f57c3eee749dd838939bfe5dd64573.png",alt:""}})]),t._v(" "),a("p",[t._v("图中的document就是DOM结构，你可以看到，DOM和HTML内容几乎是一样的，但是和HTML不同的是，DOM是保存在内存中树状结构，可以通过JavaScript来查询或修改其内容。")]),t._v(" "),a("p",[t._v("那下面就来看看如何通过JavaScript来修改DOM的内容，在控制台中输入：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('document.getElementsByTagName("p")[0].innerText = "black"\n')])])]),a("p",[t._v("这行代码的作用是把第一个"),a("code",[t._v("<p>")]),t._v("标签的内容修改为black，具体执行结果你可以参考下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/e7/74/e730aa1d73c1151c588e2f8c7e22c274.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出，在执行了一段修改第一个"),a("code",[t._v("<p>")]),t._v("标签的JavaScript代码后，DOM的第一个p节点的内容成功被修改，同时页面中的内容也被修改了")]),t._v(" "),a("p",[t._v("好了，现在我们已经生成DOM树了，但是DOM节点的样式我们依然不知道，要让DOM节点拥有正确的样式，这就需要样式计算了")]),t._v(" "),a("h2",{attrs:{id:"样式计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式计算"}},[t._v("#")]),t._v(" 样式计算")]),t._v(" "),a("p",[t._v("样式计算的目的是为了计算出DOM节点中每个元素的具体样式，这个阶段大体可分为三步来完成")]),t._v(" "),a("h3",{attrs:{id:"_1-把css转换为浏览器能够理解的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-把css转换为浏览器能够理解的结构"}},[t._v("#")]),t._v(" 1. 把CSS转换为浏览器能够理解的结构")]),t._v(" "),a("p",[t._v("那CSS样式的来源主要有哪些呢？你可以先参考下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/bc/7c/bc93df7b8d03b2675f21e1d9e4e1407c.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出，CSS样式来源主要有三种：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过link引用的外部CSS文件")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<style>")]),t._v("标记内的 CSS")])]),t._v(" "),a("li",[a("p",[t._v("元素的style属性内嵌的CSS")])]),t._v(" "),a("li",[a("p",[t._v("和HTML文件一样，浏览器也是无法直接理解这些纯文本的CSS样式，所以当渲染引擎接收到CSS文本时，会执行一个转换操作，将CSS文本转换为浏览器可以理解的结构——styleSheets。")])]),t._v(" "),a("li",[a("p",[t._v("为了加深理解，你可以在Chrome控制台中查看其结构，只需要在控制台中输入"),a("code",[t._v("document.styleSheets")]),t._v("，然后就看到如下图所示的结构")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/8e/ab/8ec7d5ecfadcd05b3f1ec762223a9aab.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出，这个样式表包含了很多种样式，已经把那三种来源的样式都包含进去了。当然样式表的具体结构不是我们今天讨论的重点，你只需要知道渲染引擎会把获取到的CSS文本全部转换为styleSheets结构中的数据，并且该结构同时具备了查询和修改功能，这会为后面的样式操作提供基础")]),t._v(" "),a("h3",{attrs:{id:"_2-转换样式表中的属性值-使其标准化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-转换样式表中的属性值-使其标准化"}},[t._v("#")]),t._v(" 2. 转换样式表中的属性值，使其标准化")]),t._v(" "),a("p",[t._v("现在我们已经把现有的CSS文本转化为浏览器可以理解的结构了，那么接下来就要对其进行属性值的标准化操作。")]),t._v(" "),a("p",[t._v("要理解什么是属性值标准化，你可以看下面这样一段CSS文本")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2em "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div  p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("可以看到上面的CSS文本中有很多属性值，如2em、blue、bold，这些类型数值不容易被渲染引擎理解，所以需要将所有值转换为渲染引擎容易理解的、标准化的计算值，这个过程就是属性值标准化。")]),t._v(" "),a("p",[t._v("那标准化后的属性值是什么样子的？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/12/60/1252c6d3c1a51714606daa6bdad3a560.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看到，2em被解析成了32px，red被解析成了rgb(255,0,0)，bold被解析成了700……")]),t._v(" "),a("h3",{attrs:{id:"_3-计算出dom树中每个节点的具体样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-计算出dom树中每个节点的具体样式"}},[t._v("#")]),t._v(" 3. 计算出DOM树中每个节点的具体样式")]),t._v(" "),a("p",[t._v("现在样式的属性已被标准化了，接下来就需要计算DOM树中每个节点的样式属性了，如何计算呢？")]),t._v(" "),a("p",[a("strong",[t._v("这就涉及到CSS的继承规则和层叠规则了。")])]),t._v(" "),a("p",[t._v("首先是CSS继承。CSS继承就是每个DOM节点都包含有父节点的样式。这么说可能有点抽象，我们可以结合具体例子，看下面这样一张样式表是如何应用到DOM节点上的")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div  p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这张样式表最终应用到DOM节点的效果如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/fe/b4/fe9a0ea868dc02a3c4a59f6080aa80b4.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出，所有子节点都继承了父节点样式。比如body节点的font-size属性是20，那body节点下面的所有节点的font-size都等于20。")]),t._v(" "),a("p",[t._v("为了加深你对CSS继承的理解，你可以打开Chrome的“开发者工具”，选择第一个“element”标签，再选择“style”子标签，你会看到如下界面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/88/b2/88a3aac427cc7c09361eac01a85fc7b2.png",alt:""}})]),t._v(" "),a("p",[t._v("这个界面展示的信息很丰富，大致可描述为如下")]),t._v(" "),a("ul",[a("li",[t._v("首先，可以选择要查看的元素的样式（位于图中的区域2中），在图中的第1个区域中点击对应的元素元素，就可以了下面的区域查看该元素的样式了。比如这里我们选择的元素是"),a("code",[t._v("<p>")]),t._v("标签，位于"),a("code",[t._v("html.body.div.")]),t._v("这个路径下面")]),t._v(" "),a("li",[t._v("其次，可以从样式来源（位于图中的区域3中）中查看样式的具体来源信息，看看是来源于样式文件，还是来源于UserAgent样式表。这里需要特别提下UserAgent样式，它是浏览器提供的一组默认样式，如果你不提供任何样式，默认使用的就是UserAgent样式。")]),t._v(" "),a("li",[t._v("最后，可以通过区域2和区域3来查看样式继承的具体过程。")])]),t._v(" "),a("p",[t._v("以上就是CSS继承的一些特性，样式计算过程中，会根据DOM节点的继承关系来合理计算节点样式。")]),t._v(" "),a("p",[t._v("样式计算过程中的第二个规则是样式层叠。"),a("strong",[t._v("层叠是CSS的一个基本特征，它是一个定义了如何合并来自多个源的属性值的算法")]),t._v("。它在CSS处于核心地位，CSS的全称“层叠样式表”正是强调了这一点。关于层叠的具体规则这里就不做过多介绍了，网上资料也非常多，你可以自行搜索学习")]),t._v(" "),a("p",[t._v("总之，样式计算阶段的目的是为了计算出DOM节点中每个元素的具体样式，在计算过程中需要遵守CSS的继承和层叠两个规则。这个阶段最终输出的内容是每个DOM节点的样式，并被保存在ComputedStyle的结构内。")]),t._v(" "),a("p",[t._v("如果你想了解每个DOM元素最终的计算样式，可以打开Chrome的“开发者工具”，选择第一个“element”标签，然后再选择“Computed”子标签，如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/d8/46/d87415b0187e3860404bf963f1c3d646.png",alt:""}})]),t._v(" "),a("p",[t._v("上图红色方框中显示了html.body.div.p标签的ComputedStyle的值。你想要查看哪个元素，点击左边对应的标签就可以了")]),t._v(" "),a("h2",{attrs:{id:"布局阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局阶段"}},[t._v("#")]),t._v(" 布局阶段")]),t._v(" "),a("p",[t._v("现在，我们有DOM树和DOM树中元素的样式，但这还不足以显示页面，因为我们还不知道DOM元素的几何位置信息。那么接下来就需要计算出DOM树中可见元素的几何位置，我们把这个计算过程叫做布局。")]),t._v(" "),a("p",[t._v("Chrome在布局阶段需要完成两个任务：创建布局树和布局计算")]),t._v(" "),a("h3",{attrs:{id:"_1-创建布局树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建布局树"}},[t._v("#")]),t._v(" 1. 创建布局树")]),t._v(" "),a("p",[t._v("你可能注意到了DOM树还含有很多不可见的元素，比如head标签，还有使用了"),a("code",[t._v("display:none")]),t._v("属性的元素。所以在显示之前，我们还要额外地构建一棵只包含可见元素布局树。")]),t._v(" "),a("p",[t._v("我们结合下图来看看布局树的构造过程：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/8e/0e/8e48b77dd48bdc509958e73b9935710e.png",alt:""}})]),t._v(" "),a("p",[t._v("从上图可以看出，DOM树中所有不可见的节点都没有包含到布局树中。")]),t._v(" "),a("p",[t._v("为了构建布局树，浏览器大体上完成了下面这些工作")]),t._v(" "),a("ul",[a("li",[t._v("遍历DOM树中的所有可见节点，并把这些节点加到布局中；")]),t._v(" "),a("li",[t._v("而不可见的节点会被布局树忽略掉，如"),a("code",[t._v("head")]),t._v("标签下面的全部内容，再比如"),a("code",[t._v("body.p.span")]),t._v("这个元素，因为它的属性包含 "),a("code",[t._v("dispaly:none")]),t._v("，所以这个元素也没有被包进布局树")])]),t._v(" "),a("h3",{attrs:{id:"_2-布局计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-布局计算"}},[t._v("#")]),t._v(" 2. 布局计算")]),t._v(" "),a("p",[t._v("现在我们有了一棵完整的布局树。那么接下来，就要计算布局树节点的坐标位置了。布局的计算过程非常复杂，我们这里先跳过不讲，等到后面章节中我再做详细的介绍。")]),t._v(" "),a("p",[t._v("在执行布局操作的时候，会把布局运算的结果重新写回布局树中，所以布局树既是输入内容也是输出内容，这是布局阶段一个不合理的地方，因为在布局阶段并没有清晰地将输入内容和输出内容区分开来。针对这个问题，Chrome团队正在重构布局代码，下一代布局系统叫LayoutNG，试图更清晰地分离输入和输出，从而让新设计的布局算法更加简单。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("好了，今天正文就到这里，我画了下面这张比较完整的渲染流水线，你可以结合这张图来回顾下今天的内容。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static001.geekbang.org/resource/image/a4/9a/a4a0ea4da58260aafc9aabdd37613f9a.png",alt:""}})]),t._v(" "),a("p",[t._v("从图中可以看出，本节内容我们介绍了渲染流程的前三个阶段：DOM生成、样式计算和布局。要点可大致总结为如下：")]),t._v(" "),a("ul",[a("li",[t._v("浏览器不能直接理解HTML数据，所以第一步需要将其转换为浏览器能够理解的DOM树结构；")]),t._v(" "),a("li",[t._v("生成DOM树后，还需要根据CSS样式表，来计算出DOM树所有节点的样式；")]),t._v(" "),a("li",[t._v("最后计算DOM元素的布局信息，使其都保存在布局树中。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
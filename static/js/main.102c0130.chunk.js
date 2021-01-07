(this["webpackJsonpalgorithms-visualizer"]=this["webpackJsonpalgorithms-visualizer"]||[]).push([[0],{62:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var i=a(3),s=a(0),r=a(12),n=a.n(r),c=a(35),o=a(36),h=a(42),l=a(41),u=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Algorithms Visualizer"}),Object(i.jsx)("p",{children:"This is a project I made to visualize various algorithms in computer science."}),Object(i.jsx)("hr",{}),Object(i.jsx)("h4",{children:"Sort"}),Object(i.jsx)("p",{children:"Simulates various sorting algorithms on an array. Includes merge sort, bubble sort, and quick sort."}),Object(i.jsx)("hr",{}),Object(i.jsx)("h4",{children:"Graph"}),Object(i.jsx)("p",{children:"Simulates graph theory algorithms on a grid of nodes."})]})}}]),a}(s.Component),d=a(51),b=a(74),m=a(71),g=a(75),j=a(73),y=a(72);function p(e,t,a,i,s,r){if(r&&t.push(["focus",a,i]),a!==i){var n=Math.floor((a+i)/2);p(e,t,a,n,s,r),p(e,t,n+1,i,s,r),r&&t.push(["focus",a,i]);for(var c=[],o=[],h=a;h<=n;h++)c.push(e[h]);c.push(s?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);for(var l=n+1;l<=i;l++)o.push(e[l]);o.push(s?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);for(var u=a,d=0,b=0;u<=i;u++){var m=d===c.length-1?-1:a+d,g=b===o.length-1?-1:n+1+b;t.push(["crimson",m,g]),r&&t.push(["lime",u,u]),s?c[d]>=o[b]?(t.push(["update",u,c[d]]),e[u]=c[d++]):(t.push(["update",u,o[b]]),e[u]=o[b++]):c[d]<=o[b]?(t.push(["update",u,c[d]]),e[u]=c[d++]):(t.push(["update",u,o[b]]),e[u]=o[b++]),t.push(["lightskyblue",m,g]),r&&t.push(["lightskyblue",u,u])}}}function v(e,t,a,i,s,r){if(a<i){r&&t.push(["focus",a,i]);var n=function(e,t,a,i,s,r){for(var n=e[i],c=a-1,o=a;o<i;o++){t.push(["crimson",o,i]),r&&t.push(["lime",c+1,c+1]);var h=0;if(s){if(e[o]>n){h=1,c++,t.push(["swap",c,o]);var l=e[c];e[c]=e[o],e[o]=l}}else if(e[o]<n){h=1,c++,t.push(["swap",c,o]);var u=e[c];e[c]=e[o],e[o]=u}t.push(["lightskyblue",o,i]),r&&t.push(["lightskyblue",c+1-h,c+1-h])}t.push(["crimson",c+1,i]),t.push(["swap",c+1,i]),t.push(["lightskyblue",c+1,i]);var d=e[c+1];return e[c+1]=e[i],e[i]=d,c+1}(e,t,a,i,s,r);v(e,t,a,n-1,s,r),v(e,t,n+1,i,s,r),r&&t.push(["focus",a,i])}}function f(e,t,a){for(var i=e.length-1;i>0;i--)for(var s=0;s<i;s++){if(t.push(["crimson",s,s+1]),a){if(e[s]<e[s+1]){var r=e[s];e[s]=e[s+1],e[s+1]=r,t.push(["swap",s,s+1])}}else if(e[s]>e[s+1]){var n=e[s];e[s]=e[s+1],e[s+1]=n,t.push(["swap",s,s+1])}t.push(["lightskyblue",s,s+1])}}function x(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var O=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).timeouts=[],e.decreasing=!1,e.showMergeFocus=!1,e.showQuickFocus=!1,e.endMargin=40,e.maxArraySize=200,e.state={array:[],anim:[],btnActive:!0,showModal:!0,arraySize:e.maxArraySize,animDelay:3,arrayWidth:(window.innerWidth-2*e.endMargin)/(2*e.maxArraySize),arrayMargin:(window.innerWidth-2*e.endMargin)/(4*e.maxArraySize)},e.updWidth=function(){e.setState({arrayWidth:(window.innerWidth-2*e.endMargin)/(2*e.maxArraySize),arrayMargin:(window.innerWidth-2*e.endMargin)/(4*e.maxArraySize)})},e.hideModal=function(){e.setState({showModal:!1})},e.resetArray=function(){for(var t=[],a=0;a<e.state.arraySize;a++)t.push(x(100,500));e.setState({array:t})},e.playAnimations=function(){for(var t=function(t){var a=document.getElementsByClassName("array-bar"),i=Object(d.a)(e.state.anim[t],3),s=i[0],r=i[1],n=i[2];if(["lightskyblue","crimson","lime"].includes(s))e.timeouts.push(setTimeout((function(){-1!==r&&(a[r].style.backgroundColor=s),-1!==n&&(a[n].style.backgroundColor=s)}),t*e.state.animDelay));else switch(s){case"update":e.timeouts.push(setTimeout((function(){e.state.array[r]=n,a[r].style.height="".concat(n/10,"vh")}),t*e.state.animDelay));break;case"swap":e.timeouts.push(setTimeout((function(){var t=e.state.array[r];e.state.array[r]=e.state.array[n],e.state.array[n]=t,a[r].style.height="".concat(e.state.array[r]/10,"vh"),a[n].style.height="".concat(e.state.array[n]/10,"vh")}),t*e.state.animDelay));break;case"focus":e.timeouts.push(setTimeout((function(){for(var e=0;e<a.length;e++)a[e].style.opacity=r<=e&&e<=n?"100%":"30%"}),t*e.state.animDelay))}},a=0;a<e.state.anim.length;a++)t(a);e.timeouts.push(e.timeout=setTimeout((function(){e.setState({btnActive:!0})}),e.state.anim.length*e.state.animDelay))},e.bubbleSort=function(){e.setState({anim:[],btnActive:!1}),f(e.state.array.slice(),e.state.anim,e.decreasing),e.playAnimations()},e.mergeSort=function(){e.setState({anim:[],btnActive:!1}),p(e.state.array.slice(),e.state.anim,0,e.state.array.length-1,e.decreasing,e.showMergeFocus),e.playAnimations()},e.quickSort=function(){e.setState({anim:[],btnActive:!1}),v(e.state.array.slice(),e.state.anim,0,e.state.array.length-1,e.decreasing,e.showQuickFocus),e.playAnimations()},e.stopAlgorithm=function(){for(var t=document.getElementsByClassName("array-bar"),a=0;a<t.length;a++)t[a].style.backgroundColor="lightskyblue",t[a].style.opacity="100%";for(var i=0;i<e.timeouts.length;i++)clearTimeout(e.timeouts[i]);e.setState({btnActive:!0})},e.changedSize=function(t){e.setState({arraySize:t.target.value})},e.changedDecreasing=function(t){e.decreasing=t.target.checked},e.changedShowMergeFocus=function(t){e.showMergeFocus=t.target.checked},e.changedShowQuickFocus=function(t){e.showQuickFocus=t.target.checked,console.log(e.showQuickFocus)},e.changedDelay=function(t){e.setState({animDelay:t.target.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.resetArray(),window.addEventListener("resize",this.updWidth)}},{key:"componentWillUnmount",value:function(){for(var e=0;e<this.timeouts.length;e++)clearTimeout(this.timeouts[e]);window.removeEventListener("resize",this.updWidth)}},{key:"render",value:function(){var e=this,t=this.state.array;return Object(i.jsxs)("div",{children:[Object(i.jsxs)(b.a,{onHide:this.hideModal,show:this.state.showModal,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(i.jsxs)(b.a.Body,{children:[Object(i.jsx)("h4",{children:"Sorting Visualizer"}),Object(i.jsx)("p",{children:"This app visualizes sorting algorithms on an array. Here are the algorithms it supports:"}),Object(i.jsx)("hr",{}),Object(i.jsx)("h5",{children:"Bubble Sort"}),Object(i.jsx)("p",{children:"A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order."}),Object(i.jsx)("hr",{}),Object(i.jsx)("h5",{children:"Merge Sort"}),Object(i.jsx)("p",{children:"A divide and conquer sorting algorithm that uses O(n) merging of two sorted segments."}),Object(i.jsx)("hr",{}),Object(i.jsx)("h5",{children:"Quick Sort"}),Object(i.jsx)("p",{children:"A divide and conquer sorting algorithm that uses a pivot to sort subarrays recursively."})]}),Object(i.jsx)(b.a.Footer,{children:Object(i.jsx)(m.a,{onClick:this.hideModal,children:"Close"})})]}),Object(i.jsx)("div",{className:"array-bar-fake",style:{height:"".concat(50,"vh")}}),t.map((function(t,a){return Object(i.jsx)("div",{className:"array-bar",style:{height:"".concat(t/10,"vh"),width:e.state.arrayWidth,margin:"0px ".concat(e.state.arrayMargin,"px")}},a)})),Object(i.jsx)("div",{className:"array-bar-fake",style:{height:"".concat(50,"vh")}}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{style:{display:"inline-block"},children:[Object(i.jsx)(m.a,{variant:"success",disabled:!this.state.btnActive,onClick:this.resetArray,children:"New Array"}),Object(i.jsx)(m.a,{variant:"primary",disabled:!this.state.btnActive,onClick:this.bubbleSort,children:"Bubble Sort"}),Object(i.jsx)(m.a,{variant:"info",disabled:!this.state.btnActive,onClick:this.mergeSort,children:"Merge Sort"}),Object(i.jsx)(m.a,{variant:"dark",disabled:!this.state.btnActive,onClick:this.quickSort,children:"Quick Sort"}),Object(i.jsx)(m.a,{variant:"danger",disabled:this.state.btnActive,onClick:this.stopAlgorithm,children:"Stop Algorithm"}),Object(i.jsxs)(g.a,{children:[Object(i.jsx)(g.a.Check,{inline:!0,type:"checkbox",style:{marginRight:30,marginBottom:5},label:"Sort in decreasing order",onChange:this.changedDecreasing,disabled:!this.state.btnActive}),Object(i.jsx)(j.a,{placement:"right",delay:{show:250,hide:400},overlay:Object(i.jsx)(y.a,{children:"Highlights the segment of the array processed by each recursive call of merge sort as well as the current element being adjusted."}),children:Object(i.jsx)(g.a.Check,{inline:!0,type:"checkbox",style:{marginRight:30,marginBottom:5},label:"Show focus of merge sort",onChange:this.changedShowMergeFocus,disabled:!this.state.btnActive})}),Object(i.jsx)(j.a,{placement:"right",delay:{show:250,hide:400},overlay:Object(i.jsx)(y.a,{children:"Highlights the segment of the array processed by each recursive call of quick sort as well as the current element being adjusted."}),children:Object(i.jsx)(g.a.Check,{inline:!0,type:"checkbox",style:{marginRight:30,marginBottom:5},label:"Show focus of quick sort",onChange:this.changedShowQuickFocus,disabled:!this.state.btnActive})}),Object(i.jsxs)(g.a.Group,{controlId:"formBasicRange",children:[Object(i.jsxs)(g.a.Label,{children:["Array Size: ",this.state.arraySize]}),Object(i.jsx)(g.a.Control,{disabled:!this.state.btnActive,type:"range",defaultValue:this.state.arraySize,min:"10",max:this.maxArraySize,tooltip:"auto",onChange:function(t){return e.changedSize(t)}}),Object(i.jsxs)(g.a.Label,{children:["Animation Delay: ",this.state.animDelay," ms"]}),Object(i.jsx)(g.a.Control,{disabled:!this.state.btnActive,type:"range",defaultValue:this.state.animDelay,min:"1",max:"200",tooltip:"auto",onChange:function(t){return e.changedDelay(t)}})]})]})]})]})}}]),a}(s.Component),k=a(77),S=a(76),w=a.p+"static/media/icon.df8e9b2c.png",A=function(e){var t=e.Component,a=e.activeKey;return Object(i.jsxs)("div",{children:[Object(i.jsxs)(k.a,{bg:"dark",variant:"dark",children:[Object(i.jsx)(k.a.Brand,{href:"#/",children:Object(i.jsx)("img",{src:w,alt:"Icon",className:"icon"})}),Object(i.jsxs)(S.a,{activeKey:a,className:"mr-auto",children:[Object(i.jsx)(S.a.Link,{href:"#/",children:"Home"}),Object(i.jsx)(S.a.Link,{href:"#/sort",children:"Sort"})]})]}),Object(i.jsx)(t,{})]})},M=a(49),C=a(7);a(62);n.a.render(Object(i.jsxs)(M.a,{basename:"/",children:[Object(i.jsx)(C.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(A,{Component:u,activeKey:"#/"})}}),Object(i.jsx)(C.a,{path:"/sort",render:function(){return Object(i.jsx)(A,{Component:O,activeKey:"#/sort"})}})]}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.102c0130.chunk.js.map
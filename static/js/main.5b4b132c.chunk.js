(this["webpackJsonpreact-agora-sdk"]=this["webpackJsonpreact-agora-sdk"]||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),l=(a(20),a(5)),i=a.n(l),s=a(9),u=a(8),m=(a(22),a(6)),d=a.n(m),p=a(32),h=a(31),f=(d.a.createClient({mode:"live",codec:"vp8"}),{client:null,localAudioTrack:null,localVideoTrack:null}),v="3c959e7eb4864d75b2539f38e289f6e6",b=null;function k(){return(k=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.client=d.a.createClient({mode:"rtc",codec:"h264"}),e.next=3,f.client.join(v,t,b,null);case 3:return e.sent,e.next=6,d.a.createMicrophoneAudioTrack();case 6:return f.localAudioTrack=e.sent,e.next=9,d.a.createCameraVideoTrack();case 9:return f.localVideoTrack=e.sent,e.next=12,f.client.publish([f.localAudioTrack,f.localVideoTrack]);case 12:f.localVideoTrack.play("local-stream"),f.client.on("user-published",function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.client.subscribe(t);case 2:console.log("subscribe success"),"video"!==a&&"all"!==a||(t.videoTrack,n=c.a.createElement("div",{id:t.uid,className:"stream"}),o.a.render(n,document.getElementById("remote-stream")),t.remoteVideoTrack.play("".concat(t.uid))),"audio"!==a&&"all"!==a||t.audioTrack.play(),f.client.on("user-unpublished",(function(e){document.getElementById(e.uid).remove()}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),console.log("publish success!");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.localAudioTrack.close(),f.localVideoTrack.close(),f.client.remoteUsers.forEach((function(e){var t=document.getElementById(e.uid);t&&t.remove()})),e.next=5,f.client.leave();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("SUBMIT"),l=Object(s.a)(o,2),i=l[0],u=l[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),f=d[0],b=d[1];return f?c.a.createElement("div",{className:"container"},c.a.createElement(p.a,{variant:"primary",type:"submit"},i),c.a.createElement("div",{id:"local-stream",style:{height:480,width:640},className:"stream local-stream"}),c.a.createElement("div",{id:"remote-stream",className:"stream remote-stream"}),c.a.createElement("input",{type:"submit",value:i,onClick:E})):c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Agora WebSDK NG Beta Testing"),c.a.createElement(h.a,{onSubmit:function(){!1===f?(!function(e){k.apply(this,arguments)}(a),u("LEAVE"),b(!0),console.log(f)):(E(),b(!1))}},c.a.createElement(h.a.Group,{controlId:"formBasicEmail"},c.a.createElement(h.a.Label,null,"Channel Name"),c.a.createElement(h.a.Control,{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Channel Name"}),c.a.createElement(h.a.Text,{className:"text-muted"},'AppID : "',v,'"')),c.a.createElement(p.a,{variant:"primary",type:"submit"},i)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(28);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5b4b132c.chunk.js.map
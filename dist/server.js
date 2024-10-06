"use strict";var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var l=s((A,c)=>{"use strict";function u(r){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(r)}function x(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function a(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,D(n.key),n)}}function C(r,e,t){return e&&a(r.prototype,e),t&&a(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function D(r){var e=P(r,"string");return u(e)=="symbol"?e:e+""}function P(r,e){if(u(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(u(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var S=require("../node_modules/mongoose/index.js"),E="mongodb+srv://test:".concat(encodeURIComponent("Test@1234"),"@cluster.qinev.mongodb.net/?retryWrites=true&w=majority"),k=function(){function r(){x(this,r),console.log("constructor"),this.connect()}return C(r,[{key:"connect",value:function(){S.connect(E,{maxPoolSize:50}).then(function(){return console.log("Connected MongoDb.")}).catch(function(t){return console.error("Error Connect Mongo:: ".concat(t.message))})}}],[{key:"getInstance",value:function(){return console.log("getInstance"),r._instance||(r._instance=new r),r._instance}}])}(),G=new k;c.exports=G});var f=s((K,v)=>{"use strict";function I(r,e,t){e.status(404);var n=new Error("\u{1F50D} - Not Found - ".concat(r.originalUrl));t(n)}function N(r,e,t,n){var w=t.statusCode!==200?t.statusCode:500;t.status(w),t.json({message:r.message,stack:"\u{1F95E}"})}v.exports={notFound:I,errorHandler:N}});var g=s((L,m)=>{"use strict";var O=require("../node_modules/express/index.js"),p=O.Router();p.get("/",function(r,e){e.json(["\u{1F600}","\u{1F633}","\u{1F644}"])});m.exports=p});var b=s((W,y)=>{"use strict";var F=require("../node_modules/express/index.js"),R=g(),i=F.Router();i.get("/",function(r,e){e.json({message:"API - \u{1F44B}\u{1F30E}\u{1F30D}\u{1F30F}"})});i.use("/emojis",R);y.exports=i});var j=s((B,h)=>{"use strict";require("../node_modules/dotenv/lib/main.js").config();l();var d=require("../node_modules/express/index.js"),T=require("../node_modules/morgan/index.js"),H=require("../node_modules/helmet/index.cjs"),M=require("../node_modules/cors/lib/index.js"),q=f(),U=b(),o=d();o.use(T("dev"));o.use(H());o.use(M());o.use(d.json());o.get("/",function(r,e){var t=process.env.GGG||"no env";e.json({message:"\u{1F984}\u{1F308}\u2728\u{1F44B}\u{1F30E}\u{1F30D}\u{1F30F}\u2728\u{1F308}\u{1F984}",msg:"qqqq",sss:"1"})});o.use("/api/v1",U);o.use(q.notFound);o.use(q.errorHandler);h.exports=o});var V=j(),_=process.env.PORT||5e3;V.listen(_,function(){console.log("Listening: http://localhost:".concat(_))});
//# sourceMappingURL=server.js.map

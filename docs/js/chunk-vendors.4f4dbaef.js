(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},"01b4":function(t,e){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=n},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),s=n("40d5"),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),s=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return s(t)}catch(e){return o(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?c(t):s(i(t))}},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return xo})),n.d(e,"b",(function(){return qs})),n.d(e,"c",(function(){return $s})),n.d(e,"d",(function(){return Co})),n.d(e,"e",(function(){return Ks})),n.d(e,"f",(function(){return Ao}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function y(t,e){t||v()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class O{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class I{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new u(t)}}class S{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class k{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.p;return this.p=t.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(y("string"==typeof t.token),this.p=t.token,new C(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */x.A=-1;class j{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function D(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return R.fromMillis(Date.now())}static fromDate(t){return R.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new R(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new R(0,0))}static max(){return new P(new R(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function F(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===V.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof V?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends V{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new w(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends V{construct(t,e,n){return new $(t,e,n)}static isValidIdentifier(t){return q.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new w(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new w(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new w(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new w(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $(e)}static emptyPath(){return new $([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.fields=t,t.sort($.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new z(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new z(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}z.EMPTY_BYTE_STRING=new z("");const K=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function W(t){if(y(!!t),"string"==typeof t){let e=0;const n=K.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:G(t.seconds),nanos:G(t.nanos)}}function G(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function X(t){return"string"==typeof t?z.fromBase64String(t):z.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Q(t){const e=t.mapValue.fields.__previous_value__;return Y(e)?Q(e):e}function J(t){const e=W(t.mapValue.fields.__local_write_time__.timestampValue);return new R(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class tt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new tt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof tt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return null==t}function nt(t){return 0===t&&1/t==-1/0}function rt(t){return"number"==typeof t&&Number.isInteger(t)&&!nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(B.fromString(t))}static fromName(t){return new it(B.fromString(t).popFirst(5))}static empty(){return new it(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new B(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Y(t)?4:yt(t)?9:10:v()}function ot(t,e){if(t===e)return!0;const n=st(t);if(n!==st(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return J(t).isEqual(J(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=W(t.timestampValue),r=W(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return X(t.bytesValue).isEqual(X(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return G(t.geoPointValue.latitude)===G(e.geoPointValue.latitude)&&G(t.geoPointValue.longitude)===G(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return G(t.integerValue)===G(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=G(t.doubleValue),r=G(e.doubleValue);return n===r?nt(n)===nt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(M(n)!==M(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ot(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function at(t,e){return void 0!==(t.values||[]).find(t=>ot(t,e))}function ct(t,e){if(t===e)return 0;const n=st(t),r=st(e);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=G(t.integerValue||t.doubleValue),r=G(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ut(t.timestampValue,e.timestampValue);case 4:return ut(J(t),J(e));case 5:return D(t.stringValue,e.stringValue);case 6:return function(t,e){const n=X(t),r=X(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=D(n[i],r[i]);if(0!==t)return t}return D(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=D(G(t.latitude),G(e.latitude));return 0!==n?n:D(G(t.longitude),G(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ct(n[i],r[i]);if(t)return t}return D(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=D(r[o],s[o]);if(0!==t)return t;const e=ct(n[r[o]],i[s[o]]);if(0!==e)return e}return D(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function ut(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return D(t,e);const n=W(t),r=W(e),i=D(n.seconds,r.seconds);return 0!==i?i:D(n.nanos,r.nanos)}function lt(t){return ht(t)}function ht(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=W(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?X(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,it.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ht(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ht(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function dt(t){return!!t&&"integerValue"in t}function ft(t){return!!t&&"arrayValue"in t}function pt(t){return!!t&&"nullValue"in t}function gt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mt(t){return!!t&&"mapValue"in t}function vt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return F(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=vt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!mt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=vt(e)}setAll(t){let e=$.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=vt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());mt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];mt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){F(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new bt(vt(this.value))}}function _t(t){const e=[];return F(t.fields,(t,n)=>{const r=new $([t]);if(mt(n)){const t=_t(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new H(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wt{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new wt(t,0,P.min(),P.min(),bt.empty(),0)}static newFoundDocument(t,e,n){return new wt(t,1,e,P.min(),n,0)}static newNoDocument(t,e){return new wt(t,2,e,P.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,P.min(),bt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Et{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Et.UNKNOWN_ID=-1;function Tt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=P.fromTimestamp(1e9===r?new R(n+1,0):new R(n,r));return new It(i,it.empty(),e)}function Ot(t){return new It(t.readTime,t.key,-1)}class It{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new It(P.min(),it.empty(),-1)}static max(){return new It(P.max(),it.empty(),-1)}}function St(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=it.comparator(t.documentKey,e.documentKey),0!==n?n:D(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function Ct(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kt(t,e,n,r,i,s,o)}function At(t){const e=b(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+lt(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),et(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>lt(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>lt(t)).join(",")),e.P=t}return e.P}function xt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${lt(e.value)}`;var e}).join(", ")}]`),et(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>lt(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>lt(t)).join(",")),`Target(${e})`}function Nt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Ht(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ot(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kt(t.startAt,e.startAt)&&Kt(t.endAt,e.endAt)}function jt(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Dt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new Lt(t,e,n):"array-contains"===e?new Ft(t,n):"in"===e?new Ut(t,n):"not-in"===e?new Vt(t,n):"array-contains-any"===e?new Bt(t,n):new Dt(t,e,n)}static V(t,e,n){return"in"===e?new Rt(t,n):new Pt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ct(e,this.value)):null!==e&&st(this.value)===st(e)&&this.v(ct(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Lt extends Dt{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.v(e)}}class Rt extends Dt{constructor(t,e){super(t,"in",e),this.keys=Mt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pt extends Dt{constructor(t,e){super(t,"not-in",e),this.keys=Mt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Mt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>it.fromName(t.referenceValue))}class Ft extends Dt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ft(e)&&at(e.arrayValue,this.value)}}class Ut extends Dt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&at(this.value.arrayValue,e)}}class Vt extends Dt{constructor(t,e){super(t,"not-in",e)}matches(t){if(at(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!at(this.value.arrayValue,e)}}class Bt extends Dt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ft(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>at(this.value.arrayValue,t))}}class qt{constructor(t,e){this.position=t,this.inclusive=e}}class $t{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ht(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function zt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?it.comparator(it.fromName(o.referenceValue),n.key):ct(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Kt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ot(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Gt(t,e,n,r,i,s,o,a){return new Wt(t,e,n,r,i,s,o,a)}function Xt(t){return new Wt(t)}function Yt(t){return!et(t.limit)&&"F"===t.limitType}function Qt(t){return!et(t.limit)&&"L"===t.limitType}function Jt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zt(t){for(const e of t.filters)if(e.S())return e.field;return null}function te(t){return null!==t.collectionGroup}function ee(t){const e=b(t);if(null===e.D){e.D=[];const t=Zt(e),n=Jt(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new $t(t)),e.D.push(new $t($.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new $t($.keyField(),t))}}}return e.D}function ne(t){const e=b(t);if(!e.C)if("F"===e.limitType)e.C=Ct(e.path,e.collectionGroup,ee(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ee(e)){const e="desc"===i.dir?"asc":"desc";t.push(new $t(i.field,e))}const n=e.endAt?new qt(e.endAt.position,!e.endAt.inclusive):null,r=e.startAt?new qt(e.startAt.position,!e.startAt.inclusive):null;e.C=Ct(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}function re(t,e,n){return new Wt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ie(t,e){return Nt(ne(t),ne(e))&&t.limitType===e.limitType}function se(t){return`${At(ne(t))}|lt:${t.limitType}`}function oe(t){return`Query(target=${xt(ne(t))}; limitType=${t.limitType})`}function ae(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=zt(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,ee(t),e))&&!(t.endAt&&!function(t,e,n){const r=zt(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,ee(t),e))}(t,e)}function ce(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ue(t){return(e,n)=>{let r=!1;for(const i of ee(t)){const t=le(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function le(t,e,n){const r=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ct(r,i):v()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nt(e)?"-0":e}}function de(t){return{integerValue:""+t}}function fe(t,e){return rt(e)?de(e):he(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this._=void 0}}function ge(t,e,n){return t instanceof ye?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof be?_e(t,e):t instanceof we?Ee(t,e):function(t,e){const n=ve(t,e),r=Oe(n)+Oe(t.k);return dt(n)&&dt(t.k)?de(r):he(t.M,r)}(t,e)}function me(t,e,n){return t instanceof be?_e(t,e):t instanceof we?Ee(t,e):n}function ve(t,e){return t instanceof Te?dt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ye extends pe{}class be extends pe{constructor(t){super(),this.elements=t}}function _e(t,e){const n=Ie(e);for(const r of t.elements)n.some(t=>ot(t,r))||n.push(r);return{arrayValue:{values:n}}}class we extends pe{constructor(t){super(),this.elements=t}}function Ee(t,e){let n=Ie(e);for(const r of t.elements)n=n.filter(t=>!ot(t,r));return{arrayValue:{values:n}}}class Te extends pe{constructor(t,e){super(),this.M=t,this.k=e}}function Oe(t){return G(t.integerValue||t.doubleValue)}function Ie(t){return ft(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof be&&e instanceof be||t instanceof we&&e instanceof we?L(t.elements,e.elements,ot):t instanceof Te&&e instanceof Te?ot(t.k,e.k):t instanceof ye&&e instanceof ye}(t.transform,e.transform)}class ke{constructor(t,e){this.version=t,this.transformResults=e}}class Ce{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ce}static exists(t){return new Ce(void 0,t)}static updateTime(t){return new Ce(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ae(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class xe{}function Ne(t,e,n){t instanceof Pe?function(t,e,n){const r=t.value.clone(),i=Ue(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Me?function(t,e,n){if(!Ae(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ue(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Fe(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function je(t,e,n){t instanceof Pe?function(t,e,n){if(!Ae(t.precondition,e))return;const r=t.value.clone(),i=Ve(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Re(e),r).setHasLocalMutations()}(t,e,n):t instanceof Me?function(t,e,n){if(!Ae(t.precondition,e))return;const r=Ve(t.fieldTransforms,n,e),i=e.data;i.setAll(Fe(t)),i.setAll(r),e.convertToFoundDocument(Re(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Ae(t.precondition,e)&&e.convertToNoDocument(P.min())}(t,e)}function De(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ve(r.transform,t||null);null!=i&&(null==n&&(n=bt.empty()),n.set(r.field,i))}return n||null}function Le(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>Se(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Re(t){return t.isFoundDocument()?t.version:P.min()}class Pe extends xe{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Me extends xe{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Fe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ue(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,me(o,a,n[i]))}return r}function Ve(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ge(t,s,e))}return r}class Be extends xe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class qe extends xe{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ze;function Ke(t){switch(t){default:return v();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function We(t){if(void 0===t)return p("GRPC error has no .code"),_.UNKNOWN;switch(t){case He.OK:return _.OK;case He.CANCELLED:return _.CANCELLED;case He.UNKNOWN:return _.UNKNOWN;case He.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case He.INTERNAL:return _.INTERNAL;case He.UNAVAILABLE:return _.UNAVAILABLE;case He.UNAUTHENTICATED:return _.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case He.NOT_FOUND:return _.NOT_FOUND;case He.ALREADY_EXISTS:return _.ALREADY_EXISTS;case He.PERMISSION_DENIED:return _.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case He.ABORTED:return _.ABORTED;case He.OUT_OF_RANGE:return _.OUT_OF_RANGE;case He.UNIMPLEMENTED:return _.UNIMPLEMENTED;case He.DATA_LOSS:return _.DATA_LOSS;default:return v()}}(ze=He||(He={}))[ze.OK=0]="OK",ze[ze.CANCELLED=1]="CANCELLED",ze[ze.UNKNOWN=2]="UNKNOWN",ze[ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ze[ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ze[ze.NOT_FOUND=5]="NOT_FOUND",ze[ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",ze[ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",ze[ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",ze[ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ze[ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ze[ze.ABORTED=10]="ABORTED",ze[ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",ze[ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",ze[ze.INTERNAL=13]="INTERNAL",ze[ze.UNAVAILABLE=14]="UNAVAILABLE",ze[ze.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){F(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return U(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,e){this.comparator=t,this.root=e||Qe.EMPTY}insert(t,e){return new Xe(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(t){return new Xe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ye(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ye(this.root,t,this.comparator,!0)}}class Ye{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qe{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Qe.RED,this.left=null!=r?r:Qe.EMPTY,this.right=null!=i?i:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Qe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Qe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1,Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(t){this.comparator=t,this.data=new Xe(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ze(this.data.getIterator())}getIteratorFrom(t){return new Ze(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Je))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Je(this.comparator);return e.data=t,e}}class Ze{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn=new Xe(it.comparator);function en(){return tn}const nn=new Xe(it.comparator);function rn(){return nn}function sn(){return new Ge(t=>t.toString(),(t,e)=>t.isEqual(e))}const on=new Xe(it.comparator),an=new Je(it.comparator);function cn(...t){let e=an;for(const n of t)e=e.add(n);return e}const un=new Je(D);function ln(){return un}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,e)),new hn(P.min(),n,ln(),en(),cn())}}class dn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new dn(z.EMPTY_BYTE_STRING,e,cn(),cn(),cn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e,n,r){this.O=t,this.removedTargetIds=e,this.key=n,this.F=r}}class pn{constructor(t,e){this.targetId=t,this.$=e}}class gn{constructor(t,e,n=z.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class mn{constructor(){this.B=0,this.L=bn(),this.U=z.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=cn(),e=cn(),n=cn();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new dn(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=bn()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class vn{constructor(t){this.nt=t,this.st=new Map,this.it=en(),this.rt=yn(),this.ot=new Je(D)}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach((t,n)=>{this.ft(n)&&e(n)})}_t(t){const e=t.targetId,n=t.$.count,r=this.wt(e);if(r){const t=r.target;if(jt(t))if(0===n){const n=new it(t.path);this.ct(e,n,wt.newNoDocument(n,P.min()))}else y(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&jt(i.target)){const e=new it(i.target.path);null!==this.it.get(e)||this.It(r,e)||this.ct(r,e,wt.newNoDocument(e,t))}n.j&&(e.set(r,n.H()),n.J())}});let n=cn();this.rt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.it.forEach((e,n)=>n.setReadTime(t));const r=new hn(t,e,this.ot,this.it,n);return this.it=en(),this.rt=yn(),this.ot=new Je(D),r}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const r=this.lt(t);this.It(t,e)?r.Y(e,1):r.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new mn,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Je(D),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new mn),this.nt.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function yn(){return new Xe(it.comparator)}function bn(){return new Xe(it.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),wn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class En{constructor(t,e){this.databaseId=t,this.N=e}}function Tn(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function On(t,e){return t.N?e.toBase64():e.toUint8Array()}function In(t,e){return Tn(t,e.toTimestamp())}function Sn(t){return y(!!t),P.fromTimestamp(function(t){const e=W(t);return new R(e.seconds,e.nanos)}(t))}function kn(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Cn(t){const e=B.fromString(t);return y(Qn(e)),e}function An(t,e){return kn(t.databaseId,e.path)}function xn(t,e){const n=Cn(e);if(n.get(1)!==t.databaseId.projectId)throw new w(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(Ln(n))}function Nn(t,e){return kn(t.databaseId,e)}function jn(t){const e=Cn(t);return 4===e.length?B.emptyPath():Ln(e)}function Dn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ln(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Rn(t,e,n){return{name:An(t,e),fields:n.value.mapValue.fields}}function Pn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.N?(y(void 0===e||"string"==typeof e),z.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),z.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?_.UNKNOWN:We(t.code);return new w(e,t.message||"")}(o);n=new gn(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xn(t,r.document.name),s=Sn(r.document.updateTime),o=new bt({mapValue:{fields:r.document.fields}}),a=wt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new fn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xn(t,r.document),s=r.readTime?Sn(r.readTime):P.min(),o=wt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xn(t,r.document),s=r.removedTargetIds||[];n=new fn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new $e(r),s=t.targetId;n=new pn(s,i)}}return n}function Mn(t,e){let n;if(e instanceof Pe)n={update:Rn(t,e.key,e.value)};else if(e instanceof Be)n={delete:An(t,e.key)};else if(e instanceof Me)n={update:Rn(t,e.key,e.data),updateMask:Yn(e.fieldMask)};else{if(!(e instanceof qe))return v();n={verify:An(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ye)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof be)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof we)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Te)return{fieldPath:e.field.canonicalString(),increment:n.k};throw v()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:In(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function Fn(t,e){return t&&t.length>0?(y(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Sn(t.updateTime):Sn(e);return n.isEqual(P.min())&&(n=Sn(e)),new ke(n,t.transformResults||[])}(t,e))):[]}function Un(t,e){return{documents:[Nn(t,e.path)]}}function Vn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Nn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(gt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NAN"}};if(pt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(gt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NOT_NAN"}};if(pt(t.value))return{unaryFilter:{field:Kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kn(t.field),op:zn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Kn(t.field),direction:Hn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.N||et(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Bn(t){let e=jn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=$n(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new $t(Wn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,et(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new qt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new qt(n,e)}(n.endAt)),Gt(e,i,o,s,a,"F",c,u)}function qn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function $n(t){return t?void 0!==t.unaryFilter?[Xn(t)]:void 0!==t.fieldFilter?[Gn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>$n(t)).reduce((t,e)=>t.concat(e)):v():[]}function Hn(t){return _n[t]}function zn(t){return wn[t]}function Kn(t){return{fieldPath:t.canonicalString()}}function Wn(t){return $.fromServerFormat(t.fieldPath)}function Gn(t){return Dt.create(Wn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Xn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Wn(t.unaryFilter.field);return Dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Wn(t.unaryFilter.field);return Dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Wn(t.unaryFilter.field);return Dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Wn(t.unaryFilter.field);return Dt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Yn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Zn=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new nr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof nr?e:nr.resolve(e)}catch(t){return nr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):nr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):nr.reject(e)}static resolve(t){return new nr((e,n)=>{e(t)})}static reject(t){return new nr((e,n)=>{n(t)})}static waitFor(t){return new nr((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=nr.resolve(!1);for(const n of t)e=e.next(t=>t?nr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ne(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&je(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&je(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(P.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),cn())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Le(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Le(t,e))}}class sr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){y(t.mutations.length===n.length);let r=on;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new sr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,r,i=P.min(),s=P.min(),o=z.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new ar(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.Jt=t}}function ur(t){const e=Bn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?re(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(){}Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(G(t.integerValue));else if("doubleValue"in t){const n=G(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),nt(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(""+(n.seconds||"")),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(X(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?yt(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):v()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const r of Object.keys(n))this.re(r,e),this.te(n[r],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const r of n)this.te(r,e)}ae(t,e){this.ne(e,37),it.fromName(t).path.forEach(t=>{this.ne(e,60),this.le(t,e)})}ne(t,e){t.se(e)}oe(t){t.se(2)}}lr.fe=new lr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(){this.qe=new dr}addToCollectionParentIndex(t,e){return this.qe.add(e),nr.resolve()}getCollectionParents(t,e){return nr.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return nr.resolve()}deleteFieldIndex(t,e){return nr.resolve()}getDocumentsMatchingTarget(t,e){return nr.resolve(null)}getFieldIndex(t,e){return nr.resolve(null)}getFieldIndexes(t,e){return nr.resolve([])}getNextCollectionGroupToUpdate(t){return nr.resolve(null)}updateCollectionGroup(t,e,n){return nr.resolve()}updateIndexEntries(t,e){return nr.resolve()}}class dr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Je(B.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Je(B.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class fr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new fr(t,fr.DEFAULT_COLLECTION_PERCENTILE,fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr.DEFAULT_COLLECTION_PERCENTILE=10,fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fr.DEFAULT=new fr(41943040,fr.DEFAULT_COLLECTION_PERCENTILE,fr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fr.DISABLED=new fr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new pr(0)}static yn(){return new pr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==tr)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){this.changes=new Ge(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?nr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Us(t,e,n))}Us(t,e,n){return this.ds.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}qs(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Ks(t,e){return this.ds.getEntries(t,e).next(e=>this.Gs(t,e).next(()=>e))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.qs(e,t))}Qs(t,e,n){return function(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.js(t,e.path):te(e)?this.Ws(t,e,n):this.zs(t,e,n)}js(t,e){return this.Ls(t,new it(e)).next(t=>{let e=rn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Ws(t,e,n){const r=e.collectionGroup;let i=rn();return this.indexManager.getCollectionParents(t,r).next(s=>nr.forEach(s,s=>{const o=function(t,e){return new Wt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.zs(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}zs(t,e,n){let r;return this.ds.getAllFromCollection(t,e.path,n).next(n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e))).next(t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=wt.newInvalidDocument(n),r=r.insert(n,i)),je(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((t,n)=>{ae(e,n)||(r=r.remove(t))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=r}static Ys(t,e){let n=cn(),r=cn();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new yr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{Xs(t){this.Zs=t}Qs(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(P.min())?this.ti(t,e):this.Zs.Ks(t,r).next(i=>{const o=this.ei(e,i);return(Yt(e)||Qt(e))&&this.ni(e.limitType,o,r,n)?this.ti(t,e):(d()<=s["a"].DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oe(e)),this.Zs.Qs(t,e,Tt(n,-1)).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}ei(t,e){let n=new Je(ue(t));return e.forEach((e,r)=>{ae(t,r)&&(n=n.add(r))}),n}ni(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(t,e){return d()<=s["a"].DEBUG&&f("QueryEngine","Using full collection scan to execute query:",oe(e)),this.Zs.Qs(t,e,It.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e,n,r){this.persistence=t,this.si=e,this.M=r,this.ii=new Xe(D),this.ri=new Ge(t=>At(t),Nt),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(n)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new vr(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ii))}}function wr(t,e,n,r){return new _r(t,e,n,r)}async function Er(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.Bs.getAllMutationBatches(t).next(i=>(r=i,n.ai(e),n.Bs.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=cn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.ci.Ks(t,o).next(t=>({hi:t,removedBatchIds:i,addedBatchIds:s}))})})}function Tr(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=nr.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);y(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.Bs.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.Bs.performConsistencyCheck(t)).next(()=>n.ci.Ks(t,r))})}function Or(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.fs.getLastRemoteSnapshotVersion(t))}function Ir(t,e){const n=b(t),r=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.fs.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(z.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.fs.updateTargetData(t,u))});let a=en();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Sr(t,s,e.documentUpdates).next(t=>{a=t})),!r.isEqual(P.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next(e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return nr.waitFor(o).next(()=>s.apply(t)).next(()=>n.ci.Gs(t,a)).next(()=>a)}).then(t=>(n.ii=i,t))}function Sr(t,e,n){let r=cn();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=en();return n.forEach((n,i)=>{const s=t.get(n);i.isNoDocument()&&i.version.isEqual(P.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)}),r})}function kr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e)))}function Cr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.fs.getTargetData(t,e).next(i=>i?(r=i,nr.resolve(r)):n.fs.allocateTargetId(t).next(i=>(r=new ar(e,i,0,t.currentSequenceNumber),n.fs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.ii.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(t.targetId,t),n.ri.set(e,t.targetId)),t})}async function Ar(t,e,n){const r=b(t),i=r.ii.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!rr(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ii=r.ii.remove(e),r.ri.delete(i.target)}function xr(t,e,n){const r=b(t);let i=P.min(),s=cn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.ri.get(n);return void 0!==i?nr.resolve(r.ii.get(i)):r.fs.getTargetData(e,n)}(r,t,ne(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.si.Qs(t,e,n?i:P.min(),n?s:cn())).next(t=>(Nr(r,ce(e),t),{documents:t,li:s})))}function Nr(t,e,n){let r=P.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.oi.set(e,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,e){return nr.resolve(this.wi.get(e))}saveBundleMetadata(t,e){var n;return this.wi.set(e.id,{id:(n=e).id,version:n.version,createTime:Sn(n.createTime)}),nr.resolve()}getNamedQuery(t,e){return nr.resolve(this.mi.get(e))}saveNamedQuery(t,e){return this.mi.set(e.name,function(t){return{name:t.name,query:ur(t.bundledQuery),readTime:Sn(t.readTime)}}(e)),nr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.overlays=new Xe(it.comparator),this.gi=new Map}getOverlay(t,e){return nr.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.Xt(t,e,r)}),nr.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.gi.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.gi.delete(n)),nr.resolve()}getOverlaysForCollection(t,e,n){const r=sn(),i=e.length+1,s=new it(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return nr.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Xe((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=sn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=sn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return nr.resolve(o)}Xt(t,e,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const t=this.gi.get(r.largestBatchId).delete(n.key);this.gi.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new or(e,n));let i=this.gi.get(e);void 0===i&&(i=cn(),this.gi.set(e,i)),this.gi.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.yi=new Je(Rr.pi),this.Ii=new Je(Rr.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,e){const n=new Rr(t,e);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Ai(new Rr(t,e))}Ri(t,e){t.forEach(t=>this.removeReference(t,e))}Pi(t){const e=new it(new B([])),n=new Rr(e,t),r=new Rr(e,t+1),i=[];return this.Ii.forEachInRange([n,r],t=>{this.Ai(t),i.push(t.key)}),i}bi(){this.yi.forEach(t=>this.Ai(t))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const e=new it(new B([])),n=new Rr(e,t),r=new Rr(e,t+1);let i=cn();return this.Ii.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Rr(t,0),n=this.yi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Rr{constructor(t,e){this.key=t,this.vi=e}static pi(t,e){return it.comparator(t.key,e.key)||D(t.vi,e.vi)}static Ti(t,e){return D(t.vi,e.vi)||it.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.Si=1,this.Di=new Je(Rr.pi)}checkEmpty(t){return nr.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new ir(i,e,n,r);this.Bs.push(s);for(const o of r)this.Di=this.Di.add(new Rr(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return nr.resolve(s)}lookupMutationBatch(t,e){return nr.resolve(this.Ci(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.xi(n),i=r<0?0:r;return nr.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return nr.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(t){return nr.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Rr(e,0),r=new Rr(e,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([n,r],t=>{const e=this.Ci(t.vi);i.push(e)}),nr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Je(D);return e.forEach(t=>{const e=new Rr(t,0),r=new Rr(t,Number.POSITIVE_INFINITY);this.Di.forEachInRange([e,r],t=>{n=n.add(t.vi)})}),nr.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const s=new Rr(new it(i),0);let o=new Je(D);return this.Di.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.vi)),!0)},s),nr.resolve(this.Ni(o))}Ni(t){const e=[];return t.forEach(t=>{const n=this.Ci(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.ki(e.batchId,"removed")),this.Bs.shift();let n=this.Di;return nr.forEach(e.mutations,r=>{const i=new Rr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Di=n})}_n(t){}containsKey(t,e){const n=new Rr(e,0),r=this.Di.firstAfterOrEqual(n);return nr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.Bs.length,nr.resolve()}ki(t,e){return this.xi(t)}xi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}Ci(t){const e=this.xi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t){this.Mi=t,this.docs=new Xe(it.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mi(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return nr.resolve(n?n.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let n=en();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():wt.newInvalidDocument(t))}),nr.resolve(n)}getAllFromCollection(t,e,n){let r=en();const i=new it(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||St(Ot(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return nr.resolve(r)}getAllFromCollectionGroup(t,e,n,r){v()}Oi(t,e){return nr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Fr(this)}getSize(t){return nr.resolve(this.size)}}class Fr extends mr{constructor(t){super(),this.Kn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Kn.addEntry(t,r)):this.Kn.removeEntry(n)}),nr.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.persistence=t,this.Fi=new Ge(t=>At(t),Nt),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Lr,this.targetCount=0,this.Li=pr.gn()}forEachTarget(t,e){return this.Fi.forEach((t,n)=>e(n)),nr.resolve()}getLastRemoteSnapshotVersion(t){return nr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return nr.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),nr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$i&&(this.$i=e),nr.resolve()}Tn(t){this.Fi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Li=new pr(e),this.highestTargetId=e),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,nr.resolve()}updateTargetData(t,e){return this.Tn(e),nr.resolve()}removeTargetData(t,e){return this.Fi.delete(e.target),this.Bi.Pi(e.targetId),this.targetCount-=1,nr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Fi.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fi.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),nr.waitFor(i).next(()=>r)}getTargetCount(t){return nr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fi.get(e)||null;return nr.resolve(n)}addMatchingKeys(t,e,n){return this.Bi.Ei(e,n),nr.resolve()}removeMatchingKeys(t,e,n){this.Bi.Ri(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),nr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Bi.Pi(e),nr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Bi.Vi(e);return nr.resolve(n)}containsKey(t,e){return nr.resolve(this.Bi.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e){this.Ui={},this.overlays={},this.es=new x(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Ur(this),this.indexManager=new hr,this.ds=function(t){return new Mr(t)}(t=>this.referenceDelegate.qi(t)),this.M=new cr(e),this._s=new jr(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Dr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ui[t.toKey()];return n||(n=new Pr(e,this.referenceDelegate),this.Ui[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new Br(this.es.next());return this.referenceDelegate.Ki(),n(r).next(t=>this.referenceDelegate.Gi(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Qi(t,e){return nr.or(Object.values(this.Ui).map(n=>()=>n.containsKey(t,e)))}}class Br extends er{constructor(t){super(),this.currentSequenceNumber=t}}class qr{constructor(t){this.persistence=t,this.ji=new Lr,this.Wi=null}static zi(t){return new qr(t)}get Hi(){if(this.Wi)return this.Wi;throw v()}addReference(t,e,n){return this.ji.addReference(n,e),this.Hi.delete(n.toString()),nr.resolve()}removeReference(t,e,n){return this.ji.removeReference(n,e),this.Hi.add(n.toString()),nr.resolve()}markPotentiallyOrphaned(t,e){return this.Hi.add(e.toString()),nr.resolve()}removeTarget(t,e){this.ji.Pi(e.targetId).forEach(t=>this.Hi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Hi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ki(){this.Wi=new Set}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return nr.forEach(this.Hi,n=>{const r=it.fromPath(n);return this.Ji(t,r).next(t=>{t||e.removeEntry(r,P.min())})}).next(()=>(this.Wi=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ji(t,e).next(t=>{t?this.Hi.delete(e.toString()):this.Hi.add(e.toString())})}qi(t){return 0}Ji(t,e){return nr.or([()=>nr.resolve(this.ji.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Qi(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.activeTargetIds=ln()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hr{constructor(){this.$r=new $r,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,e,n){this.Br[t]=e}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new $r,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{Lr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.io=e+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,e,n,r,i){const s=this.uo(t,e);f("RestConnection","Sending: ",s,n);const o={};return this.ao(o,r,i),this.co(t,s,o,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ho(t,e,n,r,i){return this.oo(t,e,n,r,i)}ao(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}uo(t,e){const n=Wr[t];return`${this.io}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new w(_.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(e)>=0?e:_.UNKNOWN}(t.status);s(new w(e,t.message))}else s(new w(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new w(_.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}lo(t,e,n){const r=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.ao(c.initMessageHeaders,e,n),Object(o["q"])()||Object(o["r"])()||Object(o["m"])()||Object(o["o"])()||Object(o["t"])()||Object(o["l"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");f("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const p=new Gr({Wr:t=>{d?f("Connection","Not sending because WebChannel is closed:",t):(h||(f("Connection","Opening WebChannel transport."),l.open(),h=!0),f("Connection","WebChannel sending:",t),l.send(t))},zr:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||f("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,f("Connection","WebChannel transport closed"),p.no())}),m(l,a["f"].EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),p.no(new w(_.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];y(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=He[t];if(void 0!==e)return We(e)}(t),n=i.message;void 0===e&&(e=_.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,p.no(new w(e,n)),l.close()}else f("Connection","WebChannel received:",n),p.so(n)}}),m(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?f("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.eo()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){return new En(t,!0)}class Jr{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Yn=t,this.timerId=e,this.fo=n,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const e=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.po=Date.now(),t())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e,n,r,i,s,o,a){this.Yn=t,this.Ro=n,this.Po=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new Jr(t,e)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,e){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==t?this.Do.reset():e&&e.code===_.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):e&&e.code===_.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(e)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Vo===e&&this.qo(t,n)},e=>{t(()=>{const t=new w(_.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ko(t)})})}qo(t,e){const n=this.Uo(this.Vo);this.stream=this.Go(t,e),this.stream.Hr(()=>{n(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(t=>{n(()=>this.Ko(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Yn.enqueueAndForget(()=>this.Vo===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ti extends Zr{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.M=i}Go(t,e){return this.bo.lo("Listen",t,e)}onMessage(t){this.Do.reset();const e=Pn(this.M,t),n=function(t){if(!("targetChange"in t))return P.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?P.min():e.readTime?Sn(e.readTime):P.min()}(t);return this.listener.Qo(e,n)}jo(t){const e={};e.database=Dn(this.M),e.addTarget=function(t,e){let n;const r=e.target;return n=jt(r)?{documents:Un(t,r)}:{query:Vn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=On(t,e.resumeToken):e.snapshotVersion.compareTo(P.min())>0&&(n.readTime=Tn(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=qn(this.M,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=Dn(this.M),e.removeTarget=t,this.Fo(e)}}class ei extends Zr{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(t,e){return this.bo.lo("Write",t,e)}onMessage(t){if(y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.zo){this.Do.reset();const e=Fn(t.writeResults,t.commitTime),n=Sn(t.commitTime);return this.listener.Yo(n,e)}return y(!t.writeResults||0===t.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const t={};t.database=Dn(this.M),this.Fo(t)}Jo(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Mn(this.M,t))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=r,this.tu=!1}eu(){if(this.tu)throw new w(_.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.oo(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new w(_.UNKNOWN,t.toString())})}ho(t,e,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ho(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new w(_.UNKNOWN,t.toString())})}terminate(){this.tu=!0}}class ri{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(t){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu("Connection failed 1 times. Most recent error: "+t.toString()),this.ou("Offline")))}set(t){this.cu(),this.nu=0,"Online"===t&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(p(e),this.iu=!1):f("OnlineStateTracker",e)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr(t=>{n.enqueueAndForget(async()=>{fi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.fu.add(4),await oi(e),e.wu.set("Unknown"),e.fu.delete(4),await si(e)}(this))})}),this.wu=new ri(n,r)}}async function si(t){if(fi(t))for(const e of t.du)await e(!0)}async function oi(t){for(const e of t.du)await e(!1)}function ai(t,e){const n=b(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),di(n)?hi(n):Ni(n).xo()&&ui(n,e))}function ci(t,e){const n=b(t),r=Ni(n);n.lu.delete(e),r.xo()&&li(n,e),0===n.lu.size&&(r.xo()?r.Mo():fi(n)&&n.wu.set("Unknown"))}function ui(t,e){t.mu.Z(e.targetId),Ni(t).jo(e)}function li(t,e){t.mu.Z(e),Ni(t).Wo(e)}function hi(t){t.mu=new vn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Ni(t).start(),t.wu.ru()}function di(t){return fi(t)&&!Ni(t).Co()&&t.lu.size>0}function fi(t){return 0===b(t).fu.size}function pi(t){t.mu=void 0}async function gi(t){t.lu.forEach((e,n)=>{ui(t,e)})}async function mi(t,e){pi(t),di(t)?(t.wu.au(e),hi(t)):t.wu.set("Unknown")}async function vi(t,e,n){if(t.wu.set("Online"),e instanceof gn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.lu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.lu.delete(r),t.mu.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await yi(t,n)}else if(e instanceof fn?t.mu.ut(e):e instanceof pn?t.mu._t(e):t.mu.ht(e),!n.isEqual(P.min()))try{const e=await Or(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.mu.yt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.lu.get(r);i&&t.lu.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.lu.get(e);if(!n)return;t.lu.set(e,n.withResumeToken(z.EMPTY_BYTE_STRING,n.snapshotVersion)),li(t,e);const r=new ar(n.target,e,1,n.sequenceNumber);ui(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await yi(t,e)}}async function yi(t,e,n){if(!rr(e))throw e;t.fu.add(1),await oi(t),t.wu.set("Offline"),n||(n=()=>Or(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await si(t)})}function bi(t,e){return e().catch(n=>yi(t,n,e))}async function _i(t){const e=b(t),n=ji(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;wi(e);)try{const t=await kr(e.localStore,r);if(null===t){0===e.hu.length&&n.Mo();break}r=t.batchId,Ei(e,t)}catch(t){await yi(e,t)}Ti(e)&&Oi(e)}function wi(t){return fi(t)&&t.hu.length<10}function Ei(t,e){t.hu.push(e);const n=ji(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function Ti(t){return fi(t)&&!ji(t).Co()&&t.hu.length>0}function Oi(t){ji(t).start()}async function Ii(t){ji(t).Zo()}async function Si(t){const e=ji(t);for(const n of t.hu)e.Jo(n.mutations)}async function ki(t,e,n){const r=t.hu.shift(),i=sr.from(r,e,n);await bi(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _i(t)}async function Ci(t,e){e&&ji(t).Ho&&await async function(t,e){if(n=e.code,Ke(n)&&n!==_.ABORTED){const n=t.hu.shift();ji(t).ko(),await bi(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await _i(t)}var n}(t,e),Ti(t)&&Oi(t)}async function Ai(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.fu.add(3),await oi(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await si(n)}async function xi(t,e){const n=b(t);e?(n.fu.delete(2),await si(n)):e||(n.fu.add(2),await oi(n),n.wu.set("Unknown"))}function Ni(t){return t.gu||(t.gu=function(t,e,n){const r=b(t);return r.eu(),new ti(e,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Hr:gi.bind(null,t),Yr:mi.bind(null,t),Qo:vi.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),di(t)?hi(t):t.wu.set("Unknown")):(await t.gu.stop(),pi(t))})),t.gu}function ji(t){return t.yu||(t.yu=function(t,e,n){const r=b(t);return r.eu(),new ei(e,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(t.datastore,t.asyncQueue,{Hr:Ii.bind(null,t),Yr:Ci.bind(null,t),Xo:Si.bind(null,t),Yo:ki.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await _i(t)):(await t.yu.stop(),t.hu.length>0&&(f("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Di{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Di(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Li(t,e){if(p("AsyncQueue",`${e}: ${t}`),rr(t))return new w(_.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=rn(),this.sortedSet=new Xe(this.comparator)}static emptySet(t){return new Ri(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ri))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ri;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.pu=new Xe(it.comparator)}track(t){const e=t.doc.key,n=this.pu.get(e);n?0!==t.type&&3===n.type?this.pu=this.pu.insert(e,t):3===t.type&&1!==n.type?this.pu=this.pu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.pu=this.pu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.pu=this.pu.remove(e):1===t.type&&2===n.type?this.pu=this.pu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.pu=this.pu.insert(e,{type:2,doc:t.doc}):v():this.pu=this.pu.insert(e,t)}Iu(){const t=[];return this.pu.inorderTraversal((e,n)=>{t.push(n)}),t}}class Mi{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Mi(t,e,Ri.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ie(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.Tu=void 0,this.listeners=[]}}class Ui{constructor(){this.queries=new Ge(t=>se(t),ie),this.onlineState="Unknown",this.Eu=new Set}}async function Vi(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Fi),i)try{s.Tu=await n.onListen(r)}catch(t){const n=Li(t,`Initialization of query '${oe(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Au(n.onlineState),s.Tu&&e.Ru(s.Tu)&&Hi(n)}async function Bi(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qi(t,e){const n=b(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Ru(i)&&(r=!0);e.Tu=i}}r&&Hi(n)}function $i(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hi(t){t.Eu.forEach(t=>{t.next()})}class zi{constructor(t,e,n){this.query=t,this.Pu=e,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Mi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),e=!0):this.Su(t,this.onlineState)&&(this.Du(t),e=!0),this.Vu=t,e}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let e=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),e=!0),e}Su(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Cu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Du(t){t=Mi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(t){this.key=t}}class Wi{constructor(t){this.key=t}}class Gi{constructor(t,e){this.query=t,this.$u=e,this.Bu=null,this.current=!1,this.Lu=cn(),this.mutatedKeys=cn(),this.Uu=ue(t),this.qu=new Ri(this.Uu)}get Ku(){return this.$u}Gu(t,e){const n=e?e.Qu:new Pi,r=e?e.qu:this.qu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Yt(this.query)&&r.size===this.query.limit?r.last():null,c=Qt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=ae(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ju(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Uu(l,a)>0||c&&this.Uu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Yt(this.query)||Qt(this.query))for(;s.size>this.query.limit;){const t=Yt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{qu:s,Qu:n,ni:o,mutatedKeys:i}}ju(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const i=t.Qu.Iu();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Uu(t.doc,e.doc)),this.Wu(n);const s=e?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==i.length||a?{snapshot:new Mi(this.query,t.qu,r,i,t.mutatedKeys,0===o,a,!1),Hu:s}:{Hu:s}}Au(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new Pi,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach(t=>this.$u=this.$u.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.$u=this.$u.delete(t)),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=cn(),this.qu.forEach(t=>{this.Ju(t.key)&&(this.Lu=this.Lu.add(t.key))});const e=[];return t.forEach(t=>{this.Lu.has(t)||e.push(new Wi(t))}),this.Lu.forEach(n=>{t.has(n)||e.push(new Ki(n))}),e}Yu(t){this.$u=t.li,this.Lu=cn();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Xu(){return Mi.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class Xi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Yi{constructor(t){this.key=t,this.Zu=!1}}class Qi{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ta={},this.ea=new Ge(t=>se(t),ie),this.na=new Map,this.sa=new Set,this.ia=new Xe(it.comparator),this.ra=new Map,this.oa=new Lr,this.ua={},this.aa=new Map,this.ca=pr.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function Ji(t,e){const n=vs(t);let r,i;const s=n.ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Xu();else{const t=await Cr(n.localStore,ne(e));n.isPrimaryClient&&ai(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Zi(n,e,r,"current"===s)}return i}async function Zi(t,e,n,r){t.la=(e,n,r)=>async function(t,e,n,r){let i=e.view.Gu(n);i.ni&&(i=await xr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Gu(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return hs(t,e.targetId,o.Hu),o.snapshot}(t,e,n,r);const i=await xr(t.localStore,e,!0),s=new Gi(e,i.li),o=s.Gu(i.documents),a=dn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);hs(t,n,c.Hu);const u=new Xi(e,n,s);return t.ea.set(e,u),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),c.snapshot}async function ts(t,e){const n=b(t),r=n.ea.get(e),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter(t=>!ie(t,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ar(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ci(n.remoteStore,r.targetId),us(n,r.targetId)}).catch(gr)):(us(n,r.targetId),await Ar(n.localStore,r.targetId,!0))}async function es(t,e,n){const r=ys(t);try{const t=await function(t,e){const n=b(t),r=R.now(),i=e.reduce((t,e)=>t.add(e.key),cn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.ci.Ks(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=De(t,s.get(t.key));null!=e&&o.push(new Me(t.key,e,_t(e.value.mapValue),Ce.exists(!0)))}return n.Bs.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.ua[t.currentUser.toKey()];r||(r=new Xe(D)),r=r.insert(e,n),t.ua[t.currentUser.toKey()]=r}(r,t.batchId,n),await ps(r,t.changes),await _i(r.remoteStore)}catch(t){const e=Li(t,"Failed to persist write");n.reject(e)}}async function ns(t,e){const n=b(t);try{const t=await Ir(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.ra.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Zu=!0:t.modifiedDocuments.size>0?y(r.Zu):t.removedDocuments.size>0&&(y(r.Zu),r.Zu=!1))}),await ps(n,t,e)}catch(t){await gr(t)}}function rs(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ea.forEach((n,r)=>{const i=r.view.Au(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.Au(e)&&(r=!0)}),r&&Hi(n)}(r.eventManager,e),t.length&&r.ta.Qo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function is(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ra.get(e),s=i&&i.key;if(s){let t=new Xe(it.comparator);t=t.insert(s,wt.newNoDocument(s,P.min()));const n=cn().add(s),i=new hn(P.min(),new Map,new Je(D),t,n);await ns(r,i),r.ia=r.ia.remove(s),r.ra.delete(e),fs(r)}else await Ar(r.localStore,e,!1).then(()=>us(r,e,n)).catch(gr)}async function ss(t,e){const n=b(t),r=e.batch.batchId;try{const t=await Tr(n.localStore,e);cs(n,r,null),as(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ps(n,t)}catch(t){await gr(t)}}async function os(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.Bs.lookupMutationBatch(t,e).next(e=>(y(null!==e),r=e.keys(),n.Bs.removeMutationBatch(t,e))).next(()=>n.Bs.performConsistencyCheck(t)).next(()=>n.ci.Ks(t,r))})}(r.localStore,e);cs(r,e,n),as(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ps(r,t)}catch(n){await gr(n)}}function as(t,e){(t.aa.get(e)||[]).forEach(t=>{t.resolve()}),t.aa.delete(e)}function cs(t,e,n){const r=b(t);let i=r.ua[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.ua[r.currentUser.toKey()]=i}}function us(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(e=>{t.oa.containsKey(e)||ls(t,e)})}function ls(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);null!==n&&(ci(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),fs(t))}function hs(t,e,n){for(const r of n)r instanceof Ki?(t.oa.addReference(r.key,e),ds(t,r)):r instanceof Wi?(f("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||ls(t,r.key)):v()}function ds(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(f("SyncEngine","New document in limbo: "+n),t.sa.add(r),fs(t))}function fs(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new it(B.fromString(e)),r=t.ca.next();t.ra.set(r,new Yi(n)),t.ia=t.ia.insert(n,r),ai(t.remoteStore,new ar(ne(Xt(n.path)),r,2,x.A))}}async function ps(t,e,n){const r=b(t),i=[],s=[],o=[];r.ea.isEmpty()||(r.ea.forEach((t,a)=>{o.push(r.la(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=yr.Ys(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.ta.Qo(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>nr.forEach(e,e=>nr.forEach(e.Hs,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>nr.forEach(e.Js,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!rr(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ii.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ii=n.ii.insert(t,i)}}}(r.localStore,s))}async function gs(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await Er(n.localStore,e);n.currentUser=e,function(t,e){t.aa.forEach(t=>{t.forEach(t=>{t.reject(new w(_.CANCELLED,e))})}),t.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ps(n,t.hi)}}function ms(t,e){const n=b(t),r=n.ra.get(e);if(r&&r.Zu)return cn().add(r.key);{let t=cn();const r=n.na.get(e);if(!r)return t;for(const e of r){const r=n.ea.get(e);t=t.unionWith(r.view.Ku)}return t}}function vs(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ns.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ms.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=is.bind(null,e),e.ta.Qo=qi.bind(null,e.eventManager),e.ta.fa=$i.bind(null,e.eventManager),e}function ys(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ss.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=os.bind(null,e),e}class bs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=Qr(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return wr(this.persistence,new br,t.initialUser,this.M)}wa(t){return new Vr(qr.zi,this.M)}_a(t){return new Hr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _s{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>rs(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=gs.bind(null,this.syncEngine),await xi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ui}createDatastore(t){const e=Qr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Xr(r));var r;return function(t,e,n,r){return new ni(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>rs(this.syncEngine,t,0),s=Kr.vt()?new Kr:new zr,new ii(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Qi(t,e,n,r,i,s);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);f("RemoteStore","RemoteStore shutting down."),e.fu.add(5),await oi(e),e._u.shutdown(),e.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=j.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{f("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(f("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Li(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ts(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Er(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Os(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Is(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>Ai(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Ai(e.remoteStore,n)),t.onlineComponents=e}async function Is(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await Ts(t,new bs)),t.offlineComponents}async function Ss(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Os(t,new _s)),t.onlineComponents}function ks(t){return Ss(t).then(t=>t.syncEngine)}async function Cs(t){const e=await Ss(t),n=e.eventManager;return n.onListen=Ji.bind(null,e.syncEngine),n.onUnlisten=ts.bind(null,e.syncEngine),n}function As(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new ws({next:n=>{e.enqueueAndForget(()=>Bi(t,o)),n.fromCache&&"server"===r.source?i.reject(new w(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new zi(n,s,{includeMetadataChanges:!0,Cu:!0});return Vi(t,o)}(await Cs(t),t.asyncQueue,e,n,r)),r.promise}const xs=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t,e,n){if(!n)throw new w(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function js(t,e,n,r){if(!0===e&&!0===r)throw new w(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ds(t){if(!it.isDocumentKey(t))throw new w(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ls(t){if(it.isDocumentKey(t))throw new w(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Ps(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rs(t);throw new w(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new w(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new w(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,js("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ms({}),this._settingsFrozen=!1,t instanceof tt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new w(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tt(t.options.projectId)}(t))}get app(){if(!this._app)throw new w(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new w(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ms(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new O;switch(t.type){case"gapi":const e=t.client;return y(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new k(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=xs.get(t);e&&(f("ComponentProvider","Removing Datastore"),xs.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Us(this.firestore,t,this._key)}}class Vs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Vs(this.firestore,t,this._query)}}class Bs extends Vs{constructor(t,e,n){super(t,e,Xt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Us(this.firestore,null,new it(t))}withConverter(t){return new Bs(this.firestore,t,this._path)}}function qs(t,e,...n){if(t=Object(o["j"])(t),Ns("collection","path",e),t instanceof Fs){const r=B.fromString(e,...n);return Ls(r),new Bs(t,null,r)}{if(!(t instanceof Us||t instanceof Bs))throw new w(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Ls(r),new Bs(t.firestore,null,r)}}function $s(t,e,...n){if(t=Object(o["j"])(t),1===arguments.length&&(e=j.R()),Ns("doc","path",e),t instanceof Fs){const r=B.fromString(e,...n);return Ds(r),new Us(t,null,new it(r))}{if(!(t instanceof Us||t instanceof Bs))throw new w(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Ds(r),new Us(t.firestore,t instanceof Bs?t.converter:null,new it(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Jr(this,"async_queue_retry"),this.qa=()=>{const t=Yr();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Do.Ao()};const t=Yr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const e=Yr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise(()=>{});const e=new E;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ma.push(t),this.Qa()))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(t){if(!rr(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(t){const e=this.ka.then(()=>(this.Ba=!0,t().catch(t=>{this.$a=t,this.Ba=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ba=!1,t))));return this.ka=e,e}enqueueAfterDelay(t,e,n){this.Ka(),this.Ua.indexOf(t)>-1&&(e=0);const r=Di.createAndSchedule(this,t,e,n,t=>this.ja(t));return this.Fa.push(r),r}Ka(){this.$a&&v()}verifyOperationInProgress(){}async Wa(){let t;do{t=this.ka,await t}while(t!==this.ka)}za(t){for(const e of this.Fa)if(e.timerId===t)return!0;return!1}Ha(t){return this.Wa().then(()=>{this.Fa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Fa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Wa()})}Ja(t){this.Ua.push(t)}ja(t){const e=this.Fa.indexOf(t);this.Fa.splice(e,1)}}class zs extends Fs{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Hs,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Gs(this),this._firestoreClient.terminate()}}function Ks(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function Ws(t){return t._firestoreClient||Gs(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gs(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Z(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Es(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new w(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ys(z.fromBase64String(t))}catch(t){throw new w(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ys(z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=/^__.*__$/;class to{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Me(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pe(t,this.data,e,this.fieldTransforms)}}function eo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class no{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(t){return new no(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Za({path:n,ec:!1});return r.nc(t),r}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Za({path:n,ec:!1});return r.Ya(),r}ic(t){return this.Za({path:void 0,ec:!0})}rc(t){return po(t,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ya(){if(this.path)for(let t=0;t<this.path.length;t++)this.nc(this.path.get(t))}nc(t){if(0===t.length)throw this.rc("Document fields must not be empty");if(eo(this.Xa)&&Zs.test(t))throw this.rc('Document fields cannot begin and end with "__"')}}class ro{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Qr(t)}ac(t,e,n,r=!1){return new no({Xa:t,methodName:e,uc:n,path:$.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function io(t){const e=t._freezeSettings(),n=Qr(t._databaseId);return new ro(t._databaseId,!!e.ignoreUndefinedProperties,n)}function so(t,e,n,r,i,s={}){const o=t.ac(s.merge||s.mergeFields?2:0,e,n,i);uo("Data must be an object, but it was:",o,r);const a=ao(r,o);let c,u;if(s.merge)c=new H(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=lo(e,r,n);if(!o.contains(i))throw new w(_.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);go(t,i)||t.push(i)}c=new H(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new to(new bt(a),c,u)}function oo(t,e){if(co(t=Object(o["j"])(t)))return uo("Unsupported field value:",e,t),ao(t,e);if(t instanceof Qs)return function(t,e){if(!eo(e.Xa))throw e.rc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.rc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&4!==e.Xa)throw e.rc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=oo(i,e.ic(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["j"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return fe(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=R.fromDate(t);return{timestampValue:Tn(e.M,n)}}if(t instanceof R){const n=new R(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Tn(e.M,n)}}if(t instanceof Js)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ys)return{bytesValue:On(e.M,t._byteString)};if(t instanceof Us){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.rc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:kn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.rc("Unsupported field value: "+Rs(t))}(t,e)}function ao(t,e){const n={};return U(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):F(t,(t,r)=>{const i=oo(r,e.tc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function co(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof R||t instanceof Js||t instanceof Ys||t instanceof Us||t instanceof Qs)}function uo(t,e,n){if(!co(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Rs(n);throw"an object"===r?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function lo(t,e,n){if((e=Object(o["j"])(e))instanceof Xs)return e._internalPath;if("string"==typeof e)return fo(t,e);throw po("Field path arguments must be of type string or ",t,!1,void 0,n)}const ho=new RegExp("[~\\*/\\[\\]]");function fo(t,e,n){if(e.search(ho)>=0)throw po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xs(...e.split("."))._internalPath}catch(r){throw po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function po(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new w(_.INVALID_ARGUMENT,a+t+c)}function go(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Us(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new vo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(yo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class vo extends mo{data(){return super.data()}}function yo(t,e){return"string"==typeof e?fo(t,e):e instanceof Xs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _o extends mo{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(yo("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class wo extends _o{data(t={}){return super.data(t)}}class Eo{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new bo(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new wo(this._firestore,this._userDataWriter,n.key,n,new bo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new w(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new wo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new bo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new wo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new bo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:To(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function To(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oo(t){if(Qt(t)&&0===t.explicitOrderBy.length)throw new w(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{convertValue(t,e="none"){switch(st(t)){case 0:return null;case 1:return t.booleanValue;case 2:return G(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(X(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return F(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Js(G(t.latitude),G(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Q(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(J(t));default:return null}}convertTimestamp(t){const e=W(t);return new R(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);y(Qn(n));const r=new tt(n.get(1),n.get(3)),i=new it(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ko extends Io{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ys(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Us(this.firestore,null,e)}}function Co(t){t=Ps(t,Vs);const e=Ps(t.firestore,zs),n=Ws(e),r=new ko(e);return Oo(t._query),As(n,t._query).then(n=>new Eo(e,r,t,n))}function Ao(t,e,n){t=Ps(t,Us);const r=Ps(t.firestore,zs),i=So(t.converter,e,n);return No(r,[so(io(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ce.none())])}function xo(t,e){const n=Ps(t.firestore,zs),r=$s(t),i=So(t.converter,e);return No(n,[so(io(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Ce.exists(!1))]).then(()=>r)}function No(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>es(await ks(t),e,n)),n.promise}(Ws(t),e)}!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new zs(r,new I(t.getProvider("auth-internal")),new A(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.4.8",t),Object(r["g"])(c,"3.4.8","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,s(e)&&(e===u||i(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},"13d2":function(t,e,n){var r=n("d039"),i=n("1626"),s=n("1a2d"),o=n("9bf2").f,a=n("5e77").CONFIGURABLE,c=n("8925"),u=n("69f3"),l=u.enforce,h=u.get,d=!r((function(){return 8!==o((function(){}),"length",{value:8}).length})),f=String(String).split("String"),p=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&o(t,"name",{value:e,configurable:!0}),d&&n&&s(n,"arity")&&t.length!==n.arity&&o(t,"length",{value:n.arity});var r=l(t);return s(r,"source")||(r.source=f.join("string"==typeof e?e:"")),t};Function.prototype.toString=p((function(){return i(this)&&h(this).source||c(this)}),"toString")},"14e5":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("59ed"),o=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{all:function(t){var e=this,n=o.f(e),r=n.resolve,u=n.reject,l=a((function(){var n=s(e.resolve),o=[],a=0,l=1;c(t,(function(t){var s=a++,c=!1;l++,i(n,e,t).then((function(t){c||(c=!0,o[s]=t,--l||r(o))}),u)})),--l||r(o)}));return l.error&&u(l.value),n.promise}})},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var o=t.apply(e,n);function a(t){r(o,i,s,a,c,"next",t)}function c(t){r(o,i,s,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return T})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return D})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return M})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return p})),n.d(e,"m",(function(){return m})),n.d(e,"n",(function(){return k})),n.d(e,"o",(function(){return v})),n.d(e,"p",(function(){return _})),n.d(e,"q",(function(){return d})),n.d(e,"r",(function(){return g})),n.d(e,"s",(function(){return b})),n.d(e,"t",(function(){return y})),n.d(e,"u",(function(){return $})),n.d(e,"v",(function(){return x})),n.d(e,"w",(function(){return N})),n.d(e,"x",(function(){return w}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){return h().indexOf("Electron/")>=0}function v(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return h().indexOf("MSAppHost/")>=0}function b(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){return"object"===typeof indexedDB}function w(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class T extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?I(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new T(r,o,n);return a}}function I(t,e){return t.replace(S,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function C(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(A(n)&&A(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function A(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function N(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function j(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){const n=new L(t,e);return n.subscribe.bind(n)}class L{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=R(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e){return new Promise((n,r)=>{t.onsuccess=t=>{n(t.target.result)},t.onerror=t=>{var n;r(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`)}})}class U{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,e="readonly"){return new V(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new B(this._db.createObjectStore(t,e))}close(){this._db.close()}}class V{constructor(t){this._transaction=t,this.complete=new Promise((t,e)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{e(this._transaction.error)},this._transaction.onabort=()=>{e(this._transaction.error)}})}objectStore(t){return new B(this._transaction.objectStore(t))}}class B{constructor(t){this._store=t}index(t){return new q(this._store.index(t))}createIndex(t,e,n){return new q(this._store.createIndex(t,e,n))}get(t){const e=this._store.get(t);return F(e,"Error reading from IndexedDB")}put(t,e){const n=this._store.put(t,e);return F(n,"Error writing to IndexedDB")}delete(t){const e=this._store.delete(t);return F(e,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return F(t,"Error clearing IndexedDB object store")}}class q{constructor(t){this._index=t}get(t){const e=this._index.get(t);return F(e,"Error reading from IndexedDB")}}function $(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=t=>{r(new U(t.target.result))},s.onerror=t=>{var e;i("Error opening indexedDB: "+(null===(e=t.target.error)||void 0===e?void 0:e.message))},s.onupgradeneeded=t=>{n(new U(s.result),t.oldVersion,t.newVersion,new V(s.transaction))}}catch(s){i("Error opening indexedDB: "+s.message)}})}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,g=function(t,e){this.stopped=t,this.result=e},m=g.prototype;t.exports=function(t,e,n){var r,v,y,b,_,w,E,T=n&&n.that,O=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),k=i(e,T),C=function(t){return r&&f(r,"normal",t),new g(!0,t)},A=function(t){return O?(o(t),S?k(t[0],t[1],C):k(t[0],t[1])):S?k(t,C):k(t)};if(I)r=t;else{if(v=d(t),!v)throw p(a(t)+" is not iterable");if(c(v)){for(y=0,b=u(t);b>y;y++)if(_=A(t[y]),_&&l(m,_))return _;return new g(!1)}r=h(t,v)}w=r.next;while(!(E=s(w,r)).done){try{_=A(E.value)}catch(x){f(r,"throw",x)}if("object"==typeof _&&_&&l(m,_))return _}return new g(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("cb2d"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var i="firebase",s="9.7.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,s,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},"2ba4":function(t,e,n){var r=n("40d5"),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},"2cf4":function(t,e,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("d6d6"),v=n("1cdc"),y=n("605d"),b=a.setImmediate,_=a.clearImmediate,w=a.process,E=a.Dispatch,T=a.Function,O=a.MessageChannel,I=a.String,S=0,k={},C="onreadystatechange";try{r=a.location}catch(D){}var A=function(t){if(h(k,t)){var e=k[t];delete k[t],e()}},x=function(t){return function(){A(t)}},N=function(t){A(t.data)},j=function(t){a.postMessage(I(t),r.protocol+"//"+r.host)};b&&_||(b=function(t){m(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return k[++S]=function(){c(e,void 0,n)},i(S),S},_=function(t){delete k[t]},y?i=function(t){w.nextTick(x(t))}:E&&E.now?i=function(t){E.now(x(t))}:O&&!v?(s=new O,o=s.port2,s.port1.onmessage=N,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(j)?(i=j,a.addEventListener("message",N,!1)):i=C in g("script")?function(t){f.appendChild(g("script"))[C]=function(){f.removeChild(this),A(t)}}:function(t){setTimeout(x(t),0)}),t.exports={set:b,clear:_}},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},3529:function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("59ed"),o=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{race:function(t){var e=this,n=o.f(e),r=n.reject,u=a((function(){var o=s(e.resolve);c(t,(function(t){i(o,e,t).then(n.resolve,r)}))}));return u.error&&r(u.value),n.promise}})},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||s[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},"3d87":function(t,e,n){var r=n("4930");t.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"3f8c":function(t,e){t.exports={}},"40d5":function(t,e,n){var r=n("d039");t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"428f":function(t,e,n){var r=n("da84");t.exports=r},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},4738:function(t,e,n){var r=n("da84"),i=n("d256"),s=n("1626"),o=n("94ca"),a=n("8925"),c=n("b622"),u=n("6069"),l=n("c430"),h=n("2d00"),d=i&&i.prototype,f=c("species"),p=!1,g=s(r.PromiseRejectionEvent),m=o("Promise",(function(){var t=a(i),e=t!==String(i);if(!e&&66===h)return!0;if(l&&(!d["catch"]||!d["finally"]))return!0;if(h>=51&&/native code/.test(t))return!1;var n=new i((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},s=n.constructor={};return s[f]=r,p=n.then((function(){}))instanceof r,!p||!e&&u&&!g}));t.exports={CONSTRUCTOR:m,REJECTION_EVENT:g,SUBCLASSING:p}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),s=n("07fa"),o=n("8418"),a=r.Array,c=Math.max;t.exports=function(t,e,n){for(var r=s(t),u=i(e,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)o(h,d,t[u]);return h.length=d,h}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5134:function(t,e,n){"use strict";(function(t){let r,i;function s(){var e;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,i=window.performance):"undefined"!==typeof t&&(null===(e=t.perf_hooks)||void 0===e?void 0:e.performance)?(r=!0,i=t.perf_hooks.performance):r=!1),r}function o(){return s()?i.now():Date.now()}n.d(e,"a",(function(){return o}))}).call(this,n("c8ba"))},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},"57b9":function(t,e,n){var r=n("c65b"),i=n("d066"),s=n("b622"),o=n("cb2d");t.exports=function(){var t=i("Symbol"),e=t&&t.prototype,n=e&&e.valueOf,a=s("toPrimitive");e&&!e[a]&&o(e,a,(function(t){return r(n,this)}),{arity:1})}},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return W})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return $})),n.d(e,"e",(function(){return X})),n.d(e,"f",(function(){return G})),n.d(e,"g",(function(){return Y}));var r=n("22e5"),i=n("e691"),s=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.22",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",O="@firebase/messaging",I="@firebase/messaging-compat",S="@firebase/performance",k="@firebase/performance-compat",C="@firebase/remote-config",A="@firebase/remote-config-compat",x="@firebase/storage",N="@firebase/storage-compat",j="@firebase/firestore",D="@firebase/firestore-compat",L="firebase",R="9.7.0",P="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[O]:"fire-fcm",[I]:"fire-fcm-compat",[S]:"fire-perf",[k]:"fire-perf-compat",[C]:"fire-rc",[A]:"fire-rc-compat",[x]:"fire-gcs",[N]:"fire-gcs-compat",[j]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},F=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())V(n,t);return!0}function q(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $(t,e,n=P){q(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},z=new s["b"]("app","Firebase",H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=R;function G(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:P,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["h"])(t,o.options)&&Object(s["h"])(n,o.config))return o;throw z.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new K(t,n,a);return F.set(i,c),c}function X(t=P){const e=F.get(t);if(!e)throw z.create("no-app",{appName:t});return e}function Y(t,e,n){var i;let s=null!==(i=M[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="firebase-heartbeat-database",J=1,Z="firebase-heartbeat-store";let tt=null;function et(){return tt||(tt=Object(s["u"])(Q,J,(t,e)=>{switch(e){case 0:t.createObjectStore(Z)}}).catch(t=>{throw z.create("storage-open",{originalErrorMessage:t.message})})),tt}async function nt(t){try{const e=await et();return e.transaction(Z).objectStore(Z).get(it(t))}catch(e){throw z.create("storage-get",{originalErrorMessage:e.message})}}async function rt(t,e){try{const n=await et(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(e,it(t)),r.complete}catch(n){throw z.create("storage-set",{originalErrorMessage:n.message})}}function it(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=1024,ot=2592e6;class at{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new lt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=ct();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ot}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=ct(),{heartbeatsToSend:e,unsentEntries:n}=ut(this._heartbeatsCache.heartbeats),r=Object(s["e"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ct(){const t=new Date;return t.toISOString().substring(0,10)}function ut(t,e=st){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),ht(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ht(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["p"])()&&Object(s["x"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await nt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function ht(t){return Object(s["e"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){B(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),B(new r["a"]("heartbeat",t=>new at(t),"PRIVATE")),Y(c,u,t),Y(c,u,"esm2017"),Y("fire-js","")}dt("")},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},"5a47":function(t,e,n){var r=n("23e7"),i=n("4930"),s=n("d039"),o=n("7418"),a=n("7b0b"),c=!i||s((function(){o.f(1)}));r({target:"Object",stat:!0,forced:c},{getOwnPropertySymbols:function(t){var e=o.f;return e?e(a(t)):[]}})},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5e7e":function(t,e,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("605d"),l=n("da84"),h=n("c65b"),d=n("cb2d"),f=n("d2bb"),p=n("d44e"),g=n("2626"),m=n("59ed"),v=n("1626"),y=n("861d"),b=n("19aa"),_=n("4840"),w=n("2cf4").set,E=n("b575"),T=n("44de"),O=n("e667"),I=n("01b4"),S=n("69f3"),k=n("d256"),C=n("4738"),A=n("f069"),x="Promise",N=C.CONSTRUCTOR,j=C.REJECTION_EVENT,D=C.SUBCLASSING,L=S.getterFor(x),R=S.set,P=k&&k.prototype,M=k,F=P,U=l.TypeError,V=l.document,B=l.process,q=A.f,$=q,H=!!(V&&V.createEvent&&l.dispatchEvent),z="unhandledrejection",K="rejectionhandled",W=0,G=1,X=2,Y=1,Q=2,J=function(t){var e;return!(!y(t)||!v(e=t.then))&&e},Z=function(t,e){var n,r,i,s=e.value,o=e.state==G,a=o?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(o||(e.rejection===Q&&it(e),e.rejection=Y),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),i=!0)),n===t.promise?u(U("Promise-chain cycle")):(r=J(n))?h(r,n,c,u):c(n)):u(s)}catch(d){l&&!i&&l.exit(),u(d)}},tt=function(t,e){t.notified||(t.notified=!0,E((function(){var n,r=t.reactions;while(n=r.get())Z(n,t);t.notified=!1,e&&!t.rejection&&nt(t)})))},et=function(t,e,n){var r,i;H?(r=V.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),l.dispatchEvent(r)):r={promise:e,reason:n},!j&&(i=l["on"+t])?i(r):t===z&&T("Unhandled promise rejection",n)},nt=function(t){h(w,l,(function(){var e,n=t.facade,r=t.value,i=rt(t);if(i&&(e=O((function(){u?B.emit("unhandledRejection",r,n):et(z,n,r)})),t.rejection=u||rt(t)?Q:Y,e.error))throw e.value}))},rt=function(t){return t.rejection!==Y&&!t.parent},it=function(t){h(w,l,(function(){var e=t.facade;u?B.emit("rejectionHandled",e):et(K,e,t.value)}))},st=function(t,e,n){return function(r){t(e,r,n)}},ot=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=X,tt(t,!0))},at=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw U("Promise can't be resolved itself");var r=J(e);r?E((function(){var n={done:!1};try{h(r,e,st(at,n,t),st(ot,n,t))}catch(i){ot(n,i,t)}})):(t.value=e,t.state=G,tt(t,!1))}catch(i){ot({done:!1},i,t)}}};if(N&&(M=function(t){b(this,F),m(t),h(r,this);var e=L(this);try{t(st(at,e),st(ot,e))}catch(n){ot(e,n)}},F=M.prototype,r=function(t){R(this,{type:x,done:!1,notified:!1,parent:!1,reactions:new I,rejection:!1,state:W,value:void 0})},r.prototype=d(F,"then",(function(t,e){var n=L(this),r=q(_(this,M));return n.parent=!0,r.ok=!v(t)||t,r.fail=v(e)&&e,r.domain=u?B.domain:void 0,n.state==W?n.reactions.add(r):E((function(){Z(r,n)})),r.promise})),i=function(){var t=new r,e=L(t);this.promise=t,this.resolve=st(at,e),this.reject=st(ot,e)},A.f=q=function(t){return t===M||t===s?new i(t):$(t)},!c&&v(k)&&P!==Object.prototype)){o=P.then,D||d(P,"then",(function(t,e){var n=this;return new M((function(t,e){h(o,n,t,e)})).then(t,e)}),{unsafe:!0});try{delete P.constructor}catch(ct){}f&&f(P,F)}a({global:!0,wrap:!0,forced:N},{Promise:M}),p(M,x,!1,!0),g(x)},"5eed":function(t,e,n){var r=n("d256"),i=n("1c7e"),s=n("4738").CONSTRUCTOR;t.exports=s||!i((function(t){r.all(t).then(void 0,(function(){}))}))},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window&&"object"!=typeof Deno},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);t.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=d({},t)[n]||a(d({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var g,m=h(arguments[o++]),v=d?p(a(m),d(m)):a(m),y=v.length,b=0;while(y>b)g=v[b++],r&&!s(f,m,g)||(n[g]=m[g])}return n}:d},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(t){if(!s(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},m=function(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(t))}catch(e){return!0}};m.sham=!0,t.exports=!h||i((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?m:g},"69f3":function(t,e,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var _=d.state||(d.state=new v),w=c(_.get),E=c(_.has),T=c(_.set);r=function(t,e){if(E(_,t))throw new m(g);return e.facade=t,T(_,t,e),e},i=function(t){return w(_,t)||{}},s=function(t){return E(_,t)}}else{var O=f("state");p[O]=!0,r=function(t,e){if(h(t,O))throw new m(g);return e.facade=t,l(t,O,e),e},i=function(t){return h(t,O)?t[O]:{}},s=function(t){return h(t,O)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:b}},"6a7c":function(t,e,n){"use strict";n.d(e,"a",(function(){return ae})),n.d(e,"b",(function(){return cr})),n.d(e,"c",(function(){return ue})),n.d(e,"d",(function(){return ce})),n.d(e,"e",(function(){return le}));var r=n("1fd5"),i=n("589b");function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function d(t,...e){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw m(t,...e)}function p(t,...e){return m(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r["b"]("auth","Firebase",i);return s.create(e,{appName:t.name})}function m(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw m(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(t){b(t instanceof Function,"Expected a class definition");let e=_.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["h"])(i,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const s=n.initialize({options:e});return s}function T(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["l"])()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["q"])()||Object(r["r"])()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function R(t,e,n,i,s={}){return P(t,s,async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=Object(r["v"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),N.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function P(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},j),e);try{const e=new U(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);f(t,a)}}catch(s){if(s instanceof r["c"])throw s;f(t,"network-request-failed")}}async function M(t,e,n,r,i={}){const s=await R(t,e,n,r,i);return"mfaPendingCredential"in s&&f(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?x(t.config,i):`${t.config.apiScheme}://${i}`}class U{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"network-request-failed")),D.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return R(t,"POST","/v1/accounts:delete",e)}async function q(t,e){return R(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=Object(r["j"])(t),i=await n.getIdToken(e),s=K(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:$(z(s.auth_time)),issuedAtTime:$(z(s.iat)),expirationTime:$(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(t){return 1e3*Number(t)}function K(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function W(t){const e=K(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t){var e;const n=t.auth,r=await t.getIdToken(),i=await G(t,q(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=Object(r["j"])(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await P(t,{},async()=>{const n=Object(r["v"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token","key="+s),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",N.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):W(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await G(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await G(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:E,stsTokenManager:T}=e;v(b&&T,t,"internal-error");const O=rt.fromJSON(this.name,T);v("string"===typeof b,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof _,t,"internal-error"),v("boolean"===typeof w,t,"internal-error"),it(d,t.name),it(f,t.name),it(p,t.name),it(g,t.name),it(m,t.name),it(y,t.name);const I=new st({uid:b,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:O,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map(t=>Object.assign({},t))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(w(at),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||w(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(s)}catch(c){}})),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(gt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=Object(r["k"])()){return/firefox\//i.test(t)}function dt(t=Object(r["k"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=Object(r["k"])()){return/crios\//i.test(t)}function pt(t=Object(r["k"])()){return/iemobile/i.test(t)}function gt(t=Object(r["k"])()){return/android/i.test(t)}function mt(t=Object(r["k"])()){return/blackberry/i.test(t)}function vt(t=Object(r["k"])()){return/webos/i.test(t)}function yt(t=Object(r["k"])()){return/iphone|ipad|ipod/i.test(t)}function bt(t=Object(r["k"])()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _t(){return Object(r["o"])()&&10===document.documentMode}function wt(t=Object(r["k"])()){return yt(t)||gt(t)||vt(t)||mt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e=[]){let n;switch(t){case"Browser":n=lt(Object(r["k"])());break;case"Worker":n=`${lt(Object(r["k"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new St(this),this.idTokenSubscription=new St(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["j"])(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function It(t){return Object(r["j"])(t)}class St{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["g"])(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(t,e){return R(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}async function Nt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends kt{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new jt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new jt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return At(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xt(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Ct(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="http://localhost";class Rt extends kt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Rt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Rt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Dt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Dt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Dt(t,e)}buildRequest(){const t={requestUri:Lt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["v"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e){return R(t,"POST","/v1/accounts:sendVerificationCode",L(t,e))}async function Mt(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e))}async function Ft(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Ut={["USER_NOT_FOUND"]:"user-not-found"};async function Vt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",L(t,n),Ut)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends kt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Bt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Bt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Mt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Vt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Bt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $t(t){const e=Object(r["w"])(Object(r["i"])(t))["link"],n=e?Object(r["w"])(Object(r["i"])(e))["deep_link_id"]:null,i=Object(r["w"])(Object(r["i"])(t))["deep_link_id"],s=i?Object(r["w"])(Object(r["i"])(i))["link"]:null;return s||i||n||e||t}class Ht{constructor(t){var e,n,i,s,o,a;const c=Object(r["w"])(Object(r["i"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=qt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=$t(t);try{return new Ht(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(){this.providerId=zt.PROVIDER_ID}static credential(t,e){return jt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Ht.parseLink(e);return v(n,"argument-error"),jt._fromEmailAndCode(t,n.code,n.tenantId)}}zt.PROVIDER_ID="password",zt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",zt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Kt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends Wt{constructor(){super("facebook.com")}static credential(t){return Rt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch(e){return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Rt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com",Xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Wt{constructor(){super("github.com")}static credential(t){return Rt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Wt{constructor(){super("twitter.com")}static credential(t,e){return Rt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Qt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jt(t,e){return M(t,"POST","/v1/accounts:signUp",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.TWITTER_SIGN_IN_METHOD="twitter.com",Qt.PROVIDER_ID="twitter.com";class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=te(n),o=new Zt({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=te(n);return new Zt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ee.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ee(t,e,n,r)}}function ne(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ee._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const r=await G(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ie(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await G(t,ne(r,i,e,t),n);v(s.idToken,r,"internal-error");const o=K(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),Zt._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(t,e,n=!1){const r="signIn",i=await ne(t,r,e),s=await Zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oe(t,e){return se(It(t),e)}async function ae(t,e,n){const r=It(t),i=await Jt(r,{returnSecureToken:!0,email:e,password:n}),s=await Zt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ce(t,e,n){return oe(Object(r["j"])(t),zt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e,n,i){return Object(r["j"])(t).onAuthStateChanged(e,n,i)}function le(t){return Object(r["j"])(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:start",L(t,e))}function de(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:finalize",L(t,e))}new WeakMap;const fe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(fe,"1"),this.storage.removeItem(fe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){const t=Object(r["k"])();return dt(t)||yt(t)}const me=1e3,ve=10;class ye extends pe{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ge()&&Et(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);_t()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,ve):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},me)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}ye.type="LOCAL";const be=ye;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends pe{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}_e.type="SESSION";const we=_e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Te(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async t=>t(e.origin,i)),a=await Ee(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oe(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te.receivers=[];class Ie{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Oe("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return window}function ke(t){Se().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return"undefined"!==typeof Se()["WorkerGlobalScope"]&&"function"===typeof Se()["importScripts"]}async function Ae(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function xe(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ne(){return Ce()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="firebaseLocalStorageDb",De=1,Le="firebaseLocalStorage",Re="fbase_key";class Pe{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Me(t,e){return t.transaction([Le],e?"readwrite":"readonly").objectStore(Le)}function Fe(){const t=indexedDB.deleteDatabase(je);return new Pe(t).toPromise()}function Ue(){const t=indexedDB.open(je,De);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Le,{keyPath:Re})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Le)?e(n):(n.close(),await Fe(),e(await Ue()))})})}async function Ve(t,e,n){const r=Me(t,!0).put({[Re]:e,value:n});return new Pe(r).toPromise()}async function Be(t,e){const n=Me(t,!1).get(e),r=await new Pe(n).toPromise();return void 0===r?null:r.value}function qe(t,e){const n=Me(t,!0).delete(e);return new Pe(n).toPromise()}const $e=800,He=3;class ze{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ue()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>He)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ce()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Te._getInstance(Ne()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ae(),!this.activeServiceWorker)return;this.sender=new Ie(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&xe()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ue();return await Ve(t,fe,"1"),await qe(t,fe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ve(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Be(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>qe(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Me(t,!1).getAll();return new Pe(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$e)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ze.type="LOCAL";const Ke=ze;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:start",L(t,e))}function Ge(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:finalize",L(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Ye(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Xe().appendChild(r)})}function Qe(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Qe("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="recaptcha";async function Ze(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===Je,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await he(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await We(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Pt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(t){this.providerId=tn.PROVIDER_ID,this.auth=It(t)}verifyPhoneNumber(t,e){return Ze(this.auth,t,Object(r["j"])(e))}static credential(t,e){return Bt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return tn.credentialFromTaggedObject(e)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Bt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(t,e){return e?w(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.PROVIDER_ID="phone",tn.PHONE_SIGN_IN_METHOD="phone";class nn extends kt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Dt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Dt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function rn(t){return se(t.auth,new nn(t),t.bypassAuthState)}function sn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ie(n,new nn(t),t.bypassAuthState)}async function on(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),re(n,new nn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return sn;default:f(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new A(2e3,1e4);class un extends an{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=Oe();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,cn.get())};t()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="pendingRedirect",hn=new Map;class dn extends an{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=hn.get(this.auth._key());if(!t){try{const e=await fn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}hn.set(this.auth._key(),t)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(t,e){const n=gn(e),r=pn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function pn(t){return w(t._redirectPersistence)}function gn(t){return ct(ln,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(t,e,n=!1){const r=It(t),i=en(r,e),s=new dn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=6e5;class yn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!wn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!_n(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(t))}saveEventToCache(t){this.cachedEventUids.add(bn(t)),this.lastProcessedEventTime=Date.now()}}function bn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function _n({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function wn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _n(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e={}){return R(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,On=/^https?/;async function In(t){if(t.config.emulator)return;const{authorizedDomains:e}=await En(t);for(const r of e)try{if(Sn(r))return}catch(n){}f(t,"unauthorized-domain")}function Sn(t){const e=O(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!On.test(n))return!1;if(Tn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new A(3e4,6e4);function Cn(){const t=Se().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function An(t){return new Promise((e,n)=>{var r,i,s;function o(){Cn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cn(),n(p(t,"network-request-failed"))},timeout:kn.get()})}if(null===(i=null===(r=Se().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Se().gapi)||void 0===s?void 0:s.load)){const e=Qe("iframefcb");return Se()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},Ye("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw xn=null,t})}let xn=null;function Nn(t){return xn=xn||An(t),xn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new A(5e3,15e3),Dn="__/auth/iframe",Ln="emulator/auth/iframe",Rn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?x(e,Ln):`https://${t.config.authDomain}/${Dn}`,s={apiKey:e.apiKey,appName:t.name,v:i["a"]},o=Pn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["v"])(s).slice(1)}`}async function Fn(t){const e=await Nn(t),n=Se().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Mn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Se().setTimeout(()=>{r(i)},jn.get());function o(){Se().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,Bn=600,qn="_blank",$n="http://localhost";class Hn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function zn(t,e,n,i=Vn,s=Bn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Un),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["k"])().toLowerCase();n&&(c=ft(l)?qn:n),ht(l)&&(e=e||$n,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(bt(l)&&"_self"!==c)return Kn(e||"",c),new Hn(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Hn(d)}function Kn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="__/auth/handler",Gn="emulator/auth/handler";function Xn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i["a"],eventId:o};if(e instanceof Kt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["n"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Wt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Yn(t)}?${Object(r["v"])(u).slice(1)}`}function Yn({config:t}){return t.emulator?x(t,Gn):`https://${t.authDomain}/${Wn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="webStorageSupport";class Jn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=we,this._completeRedirectFn=mn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Xn(t,e,n,O(),r);return zn(t,s,Oe())}async _openRedirect(t,e,n,r){return await this._originValidation(t),ke(Xn(t,e,n,O(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await Fn(t),n=new yn(t);return e.register("authEvent",e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Qn,{type:Qn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Qn];void 0!==i&&e(!!i),f(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=In(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||dt()||yt()}}const Zn=Jn;class tr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class er extends tr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new er(t)}_finalizeEnroll(t,e,n){return de(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ge(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(t){return er._fromCredential(t)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",ir="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ar(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tt(t)},a=new Ot(e,r,i);return T(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=It(t.getProvider("auth").getImmediate());return(t=>new sr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(rr,ir,or(t)),Object(i["g"])(rr,ir,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:Zn,persistence:[Ke,be,we]})}ar("Browser")},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return ee})),n.d(e,"b",(function(){return z}));var r=n("7a23");n("abc5");n("5134");
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=t=>i?Symbol(t):"_vr_"+t,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function d(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const f=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const g=()=>{};const m=/\/$/,v=t=>t.replace(m,"");function y(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=S(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function w(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&E(e.matched[r],n.matched[i])&&T(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function E(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function T(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!O(t[n],e[n]))return!1;return!0}function O(t,e){return Array.isArray(t)?I(t,e):Array.isArray(e)?I(e,t):t===e}function I(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function S(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,C;(function(t){t["pop"]="pop",t["push"]="push"})(k||(k={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(C||(C={}));function A(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const x=/^[^#]+#/;function N(t,e){return t.replace(x,"#")+e}function j(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=j(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function R(t,e){const n=history.state?history.state.position-e:-1;return n+t}const P=new Map;function M(t,e){P.set(t,e)}function F(t){const e=P.get(t);return P.delete(t),e}let U=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),_(n,"")}const o=_(n,t);return o+r+i}function B(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=V(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:k.pop,direction:l?l>0?C.forward:C.back:C.unknown})})};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(f({},t.state,{scroll:D()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?D():null}}function $(t){const{history:e,location:n}=window,r={value:V(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:U()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=f({},e.state,q(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=f({},i.value,e.state,{forward:t,scroll:D()});s(o.current,o,!0);const a=f({},q(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function H(t){t=A(t);const e=$(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=f({location:"",base:t,go:r,createHref:N.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function z(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),H(t)}function K(t){return"string"===typeof t||t&&"object"===typeof t}function W(t){return"string"===typeof t||"symbol"===typeof t}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X=s("nf");var Y;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(Y||(Y={}));function Q(t,e){return f(new Error,{type:t,[X]:!0},e)}function J(t,e){return t instanceof Error&&X in t&&(null==e||!!(t.type&e))}const Z="[^/]+?",tt={sensitive:!1,strict:!1,start:!0,end:!0},et=/[.+*?^${}()[\]/\\]/g;function nt(t,e){const n=f({},tt,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(et,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const s of i)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:c}=s,u=o in e?e[o]:"";if(Array.isArray(u)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(u)?u.join("/"):u;if(!l){if(!c)throw new Error(`Missing required param "${o}"`);i.length<2&&t.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function rt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function it(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=rt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const st={type:0,value:""},ot=/[a-zA-Z0-9_]/;function at(t){if(!t)return[[]];if("/"===t)return[[st]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ot.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ct(t,e,n){const r=nt(at(t.path),n);const i=f(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ut(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=ht(t);a.aliasOf=r&&r.record;const u=gt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(f({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,d;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=ct(e,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&t.name&&!ft(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(t){if(W(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&it(t,n[e])>=0&&(t.record.path!==n[e].record.path||!mt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw Q(1,{location:t});o=i.record.name,a=f(lt(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find(t=>t.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw Q(1,{location:t,currentLocation:e});o=i.record.name,a=f({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:pt(c)}}return e=gt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>s(t)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function lt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ht(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function dt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pt(t){return t.reduce((t,e)=>f(t,e.meta),{})}function gt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function mt(t,e){return e.children.some(e=>e===t||mt(t,e))}const vt=/#/g,yt=/&/g,bt=/\//g,_t=/=/g,wt=/\?/g,Et=/\+/g,Tt=/%5B/g,Ot=/%5D/g,It=/%5E/g,St=/%60/g,kt=/%7B/g,Ct=/%7C/g,At=/%7D/g,xt=/%20/g;function Nt(t){return encodeURI(""+t).replace(Ct,"|").replace(Tt,"[").replace(Ot,"]")}function jt(t){return Nt(t).replace(kt,"{").replace(At,"}").replace(It,"^")}function Dt(t){return Nt(t).replace(Et,"%2B").replace(xt,"+").replace(vt,"%23").replace(yt,"%26").replace(St,"`").replace(kt,"{").replace(At,"}").replace(It,"^")}function Lt(t){return Dt(t).replace(_t,"%3D")}function Rt(t){return Nt(t).replace(vt,"%23").replace(wt,"%3F")}function Pt(t){return null==t?"":Rt(t).replace(bt,"%2F")}function Mt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Ft(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(Et," "),n=t.indexOf("="),s=Mt(n<0?t:t.slice(0,n)),o=n<0?null:Mt(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Ut(t){let e="";for(let n in t){const r=t[n];if(n=Lt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&Dt(t)):[r&&Dt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Vt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=t=>{!1===t?a(Q(4,{from:n,to:e})):t instanceof Error?a(t):K(t)?a(Q(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function $t(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Ht(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push(qt(c,n,r,s,t))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=d(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&qt(c,n,r,s,t)()}))}}return i}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function zt(t){const e=Object(r["l"])(c),n=Object(r["l"])(u),i=Object(r["b"])(()=>e.resolve(Object(r["A"])(t.to))),s=Object(r["b"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(E.bind(null,r));if(o>-1)return o;const a=Yt(t[e-2]);return e>1&&Yt(r)===a&&s[s.length-1].path!==a?s.findIndex(E.bind(null,t[e-2])):o}),o=Object(r["b"])(()=>s.value>-1&&Xt(n.params,i.value.params)),a=Object(r["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&T(n.params,i.value.params));function l(n={}){return Gt(n)?e[Object(r["A"])(t.replace)?"replace":"push"](Object(r["A"])(t.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const Kt=Object(r["i"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zt,setup(t,{slots:e}){const n=Object(r["u"])(zt(t)),{options:i}=Object(r["l"])(c),s=Object(r["b"])(()=>({[Qt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["k"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Wt=Kt;function Gt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Xt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Yt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Jt=Object(r["i"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Object(r["l"])(l),s=Object(r["b"])(()=>t.route||i.value),c=Object(r["l"])(a,0),u=Object(r["b"])(()=>s.value.matched[c]);Object(r["s"])(a,c+1),Object(r["s"])(o,u),Object(r["s"])(l,s);const h=Object(r["v"])();return Object(r["C"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&E(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[t.name],c=t.name;if(!a)return Zt(n.default,{Component:a,route:i});const l=o.props[t.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(o.instances[c]=null)},g=Object(r["k"])(a,f({},d,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:g,route:i})||g}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Jt;function ee(t){const e=ut(t.routes,t),n=t.parseQuery||Ft,i=t.stringifyQuery||Ut,s=t.history;const o=Bt(),a=Bt(),d=Bt(),m=Object(r["y"])(G);let v=G;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,t=>""+t),E=p.bind(null,Pt),T=p.bind(null,Mt);function O(t,n){let r,i;return W(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function I(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map(t=>t.record)}function C(t){return!!e.getRecordMatcher(t)}function A(t,r){if(r=f({},r||m.value),"string"===typeof t){const i=y(n,t,r.path),o=e.resolve({path:i.path},r),a=s.createHref(i.fullPath);return f(i,o,{params:T(o.params),hash:Mt(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in t)o=f({},t,{path:y(n,t.path,r.path).path});else{const e=f({},t.params);for(const t in e)null==e[t]&&delete e[t];o=f({},t,{params:E(t.params)}),r.params=E(r.params)}const a=e.resolve(o,r),c=t.hash||"";a.params=_(T(a.params));const u=b(i,f({},t,{hash:jt(c),path:a.path})),l=s.createHref(u);return f({fullPath:u,hash:c,query:i===Ut?Vt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function x(t){return"string"===typeof t?y(n,t,m.value.path):f({},t)}function N(t,e){if(v!==t)return Q(8,{from:e,to:t})}function j(t){return V(t)}function P(t){return j(f(x(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),f({query:t.query,hash:t.hash,params:t.params},r)}}function V(t,e){const n=v=A(t),r=m.value,s=t.state,o=t.force,a=!0===t.replace,c=U(n);if(c)return V(f(x(c),{state:s,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&w(i,r,n)&&(l=Q(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch(t=>J(t)?J(t,2)?t:nt(t):tt(t,u,r)).then(t=>{if(t){if(J(t,2))return V(f(x(t.to),{state:s,force:o,replace:a}),e||u)}else t=H(u,r,!0,a,s);return $(u,r,t),t})}function B(t,e){const n=N(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,s]=re(t,e);n=$t(r.reverse(),"beforeRouteLeave",t,e);for(const o of r)o.leaveGuards.forEach(r=>{n.push(qt(r,t,e))});const c=B.bind(null,t,e);return n.push(c),ne(n).then(()=>{n=[];for(const r of o.list())n.push(qt(r,t,e));return n.push(c),ne(n)}).then(()=>{n=$t(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(qt(r,t,e))});return n.push(c),ne(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(qt(i,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(c),ne(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=$t(s,"beforeRouteEnter",t,e),n.push(c),ne(n))).then(()=>{n=[];for(const r of a.list())n.push(qt(r,t,e));return n.push(c),ne(n)}).catch(t=>J(t,8)?t:Promise.reject(t))}function $(t,e,n){for(const r of d.list())r(t,e,n)}function H(t,e,n,r,i){const o=N(t,e);if(o)return o;const a=e===G,c=h?history.state:{};n&&(r||a?s.replace(t.fullPath,f({scroll:a&&c&&c.scroll},i)):s.push(t.fullPath,i)),m.value=t,rt(t,e,n,a),nt()}let z;function K(){z||(z=s.listen((t,e,n)=>{const r=A(t),i=U(r);if(i)return void V(f(i,{replace:!0}),r).catch(g);v=r;const o=m.value;h&&M(R(o.fullPath,n.delta),D()),q(r,o).catch(t=>J(t,12)?t:J(t,2)?(V(t.to,r).then(t=>{J(t,20)&&!n.delta&&n.type===k.pop&&s.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&s.go(-n.delta,!1),tt(t,r,o))).then(t=>{t=t||H(r,o,!1),t&&(n.delta?s.go(-n.delta,!1):n.type===k.pop&&J(t,20)&&s.go(-1,!1)),$(r,o,t)}).catch(g)}))}let X,Y=Bt(),Z=Bt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return X&&m.value!==G?Promise.resolve():new Promise((t,e)=>{Y.add([t,e])})}function nt(t){return X||(X=!t,K(),Y.list().forEach(([e,n])=>t?n(t):e()),Y.reset()),t}function rt(e,n,i,s){const{scrollBehavior:o}=t;if(!h||!o)return Promise.resolve();const a=!i&&F(R(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["m"])().then(()=>o(e,n,a)).then(t=>t&&L(t)).catch(t=>tt(t,e,n))}const it=t=>s.go(t);let st;const ot=new Set,at={currentRoute:m,addRoute:O,removeRoute:I,hasRoute:C,getRoutes:S,resolve:A,options:t,push:j,replace:P,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["A"])(m)}),h&&!st&&m.value===G&&(st=!0,j(s.location).catch(t=>{0}));const n={};for(const s in G)n[s]=Object(r["b"])(()=>m.value[s]);t.provide(c,e),t.provide(u,Object(r["u"])(n)),t.provide(l,m);const i=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(v=G,z&&z(),z=null,m.value=G,st=!1,X=!1),i()}}};return at}function ne(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find(t=>E(t,s))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find(t=>E(t,a))||i.push(a))}return[n,r,i]}},7149:function(t,e,n){"use strict";var r=n("23e7"),i=n("d066"),s=n("c430"),o=n("d256"),a=n("4738").CONSTRUCTOR,c=n("cdf9"),u=i("Promise"),l=s&&!a;r({target:"Promise",stat:!0,forced:s||a},{resolve:function(t){return c(l&&this===u?o:this,t)}})},7418:function(t,e){e.f=Object.getOwnPropertySymbols},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"7a23":function(t,e,n){"use strict";n.d(e,"u",(function(){return bt})),n.d(e,"v",(function(){return Lt})),n.d(e,"y",(function(){return Rt})),n.d(e,"A",(function(){return Ft})),n.d(e,"z",(function(){return r["M"]})),n.d(e,"a",(function(){return vr})),n.d(e,"b",(function(){return vi})),n.d(e,"d",(function(){return Ar})),n.d(e,"e",(function(){return Br})),n.d(e,"f",(function(){return Cr})),n.d(e,"g",(function(){return Rr})),n.d(e,"h",(function(){return Pr})),n.d(e,"i",(function(){return Ze})),n.d(e,"j",(function(){return ei})),n.d(e,"k",(function(){return yi})),n.d(e,"l",(function(){return Pe})),n.d(e,"m",(function(){return oe})),n.d(e,"n",(function(){return rn})),n.d(e,"o",(function(){return sn})),n.d(e,"p",(function(){return vn})),n.d(e,"q",(function(){return Tr})),n.d(e,"r",(function(){return Ie})),n.d(e,"s",(function(){return Re})),n.d(e,"t",(function(){return Oe})),n.d(e,"w",(function(){return Wr})),n.d(e,"x",(function(){return fr})),n.d(e,"C",(function(){return Fe})),n.d(e,"D",(function(){return Jn})),n.d(e,"c",(function(){return Is})),n.d(e,"B",(function(){return ys})),n.d(e,"E",(function(){return ws}));var r=n("9ff4");let i;class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=i){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];c(i)&&!u(i)?i.delete(t):e[n++]=i,i.w&=~p,i.n&=~p}e.length=n}},d=new WeakMap;let f=0,p=1;const g=30;let m;const v=Symbol(""),y=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=w;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,w=!0,p=1<<++f,f<=g?l(this):_(this),this.fn()}finally{f<=g&&h(this),p=1<<--f,m=this.parent,w=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let w=!0;const E=[];function T(){E.push(w),w=!1}function O(){const t=E.pop();w=void 0===t||t}function I(t,e,n){if(w&&m){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const i=void 0;S(r,i)}}function S(t,e){let n=!1;f<=g?u(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function k(t,e,n,i,s,o){const c=d.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&Object(r["o"])(t))c.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(c.get(n)),e){case"add":Object(r["o"])(t)?Object(r["t"])(n)&&u.push(c.get("length")):(u.push(c.get(v)),Object(r["u"])(t)&&u.push(c.get(y)));break;case"delete":Object(r["o"])(t)||(u.push(c.get(v)),Object(r["u"])(t)&&u.push(c.get(y)));break;case"set":Object(r["u"])(t)&&u.push(c.get(v));break}if(1===u.length)u[0]&&C(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);C(a(t))}}function C(t,e){for(const n of Object(r["o"])(t)?t:[...t])(n!==m||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const A=Object(r["I"])("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["F"])),N=P(),j=P(!1,!0),D=P(!0),L=R();function R(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=kt(this);for(let e=0,i=this.length;e<i;e++)I(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(kt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){T();const n=kt(this)[e].apply(this,t);return O(),n}}),t}function P(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?mt:gt:e?pt:ft).get(n))return n;const o=Object(r["o"])(n);if(!t&&o&&Object(r["k"])(L,i))return Reflect.get(L,i,s);const a=Reflect.get(n,i,s);if(Object(r["F"])(i)?x.has(i):A(i))return a;if(t||I(n,"get",i),e)return a;if(Dt(a)){const t=!o||!Object(r["t"])(i);return t?a.value:a}return Object(r["w"])(a)?t?wt(a):bt(a):a}}const M=U(),F=U(!0);function U(t=!1){return function(e,n,i,s){let o=e[n];if(Ot(o)&&Dt(o)&&!Dt(i))return!1;if(!t&&!Ot(i)&&(It(i)||(i=kt(i),o=kt(o)),!Object(r["o"])(e)&&Dt(o)&&!Dt(i)))return o.value=i,!0;const a=Object(r["o"])(e)&&Object(r["t"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,i,s);return e===kt(s)&&(a?Object(r["j"])(i,o)&&k(e,"set",n,i,o):k(e,"add",n,i)),c}}function V(t,e){const n=Object(r["k"])(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&k(t,"delete",e,void 0,i),s}function B(t,e){const n=Reflect.has(t,e);return Object(r["F"])(e)&&x.has(e)||I(t,"has",e),n}function q(t){return I(t,"iterate",Object(r["o"])(t)?"length":v),Reflect.ownKeys(t)}const $={get:N,set:M,deleteProperty:V,has:B,ownKeys:q},H={get:D,set(t,e){return!0},deleteProperty(t,e){return!0}},z=Object(r["h"])({},$,{get:j,set:F}),K=t=>t,W=t=>Reflect.getPrototypeOf(t);function G(t,e,n=!1,r=!1){t=t["__v_raw"];const i=kt(t),s=kt(e);e!==s&&!n&&I(i,"get",e),!n&&I(i,"get",s);const{has:o}=W(i),a=r?K:n?xt:At;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=kt(n),i=kt(t);return t!==i&&!e&&I(r,"has",t),!e&&I(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Y(t,e=!1){return t=t["__v_raw"],!e&&I(kt(t),"iterate",v),Reflect.get(t,"size",t)}function Q(t){t=kt(t);const e=kt(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),k(e,"add",t,t)),this}function J(t,e){e=kt(e);const n=kt(this),{has:i,get:s}=W(n);let o=i.call(n,t);o||(t=kt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?Object(r["j"])(e,a)&&k(n,"set",t,e,a):k(n,"add",t,e),this}function Z(t){const e=kt(this),{has:n,get:r}=W(e);let i=n.call(e,t);i||(t=kt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&k(e,"delete",t,void 0,s),o}function tt(){const t=kt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&k(t,"clear",void 0,void 0,n),r}function et(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=kt(s),a=e?K:t?xt:At;return!t&&I(o,"iterate",v),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function nt(t,e,n){return function(...i){const s=this["__v_raw"],o=kt(s),a=Object(r["u"])(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?K:e?xt:At;return!e&&I(o,"iterate",u?y:v),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function rt(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return G(this,t)},get size(){return Y(this)},has:X,add:Q,set:J,delete:Z,clear:tt,forEach:et(!1,!1)},e={get(t){return G(this,t,!1,!0)},get size(){return Y(this)},has:X,add:Q,set:J,delete:Z,clear:tt,forEach:et(!1,!0)},n={get(t){return G(this,t,!0)},get size(){return Y(this,!0)},has(t){return X.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:et(!0,!1)},r={get(t){return G(this,t,!0,!0)},get size(){return Y(this,!0)},has(t){return X.call(this,t,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:et(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=nt(i,!1,!1),n[i]=nt(i,!0,!1),e[i]=nt(i,!1,!0),r[i]=nt(i,!0,!0)}),[t,n,e,r]}const[st,ot,at,ct]=it();function ut(t,e){const n=e?t?ct:at:t?ot:st;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["k"])(n,i)&&i in e?n:e,i,s)}const lt={get:ut(!1,!1)},ht={get:ut(!1,!0)},dt={get:ut(!0,!1)};const ft=new WeakMap,pt=new WeakMap,gt=new WeakMap,mt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt(Object(r["P"])(t))}function bt(t){return Ot(t)?t:Et(t,!1,$,lt,ft)}function _t(t){return Et(t,!1,z,ht,pt)}function wt(t){return Et(t,!0,H,dt,gt)}function Et(t,e,n,i,s){if(!Object(r["w"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=yt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function Tt(t){return Ot(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ot(t){return!(!t||!t["__v_isReadonly"])}function It(t){return!(!t||!t["__v_isShallow"])}function St(t){return Tt(t)||Ot(t)}function kt(t){const e=t&&t["__v_raw"];return e?kt(e):t}function Ct(t){return Object(r["g"])(t,"__v_skip",!0),t}const At=t=>Object(r["w"])(t)?bt(t):t,xt=t=>Object(r["w"])(t)?wt(t):t;function Nt(t){w&&m&&(t=kt(t),S(t.dep||(t.dep=a())))}function jt(t,e){t=kt(t),t.dep&&C(t.dep)}function Dt(t){return!(!t||!0!==t.__v_isRef)}function Lt(t){return Pt(t,!1)}function Rt(t){return Pt(t,!0)}function Pt(t,e){return Dt(t)?t:new Mt(t,e)}class Mt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:kt(t),this._value=e?t:At(t)}get value(){return Nt(this),this._value}set value(t){t=this.__v_isShallow?t:kt(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:At(t),jt(this,t))}}function Ft(t){return Dt(t)?t.value:t}const Ut={get:(t,e,n)=>Ft(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Dt(i)&&!Dt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Vt(t){return Tt(t)?t:new Proxy(t,Ut)}class Bt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(t,()=>{this._dirty||(this._dirty=!0,jt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=kt(this);return Nt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qt(t,e,n=!1){let i,s;const o=Object(r["q"])(t);o?(i=t,s=r["d"]):(i=t.get,s=t.set);const a=new Bt(i,s,o||!s,n);return a}function $t(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){zt(s,e,n)}return i}function Ht(t,e,n,i){if(Object(r["q"])(t)){const s=$t(t,e,n,i);return s&&Object(r["z"])(s)&&s.catch(t=>{zt(t,e,n)}),s}const s=[];for(let r=0;r<t.length;r++)s.push(Ht(t[r],e,n,i));return s}function zt(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void $t(o,null,10,[t,i,s])}Kt(t,n,i,r)}function Kt(t,e,n,r=!0){console.error(t)}let Wt=!1,Gt=!1;const Xt=[];let Yt=0;const Qt=[];let Jt=null,Zt=0;const te=[];let ee=null,ne=0;const re=Promise.resolve();let ie=null,se=null;function oe(t){const e=ie||re;return t?e.then(this?t.bind(this):t):e}function ae(t){let e=Yt+1,n=Xt.length;while(e<n){const r=e+n>>>1,i=me(Xt[r]);i<t?e=r+1:n=r}return e}function ce(t){Xt.length&&Xt.includes(t,Wt&&t.allowRecurse?Yt+1:Yt)||t===se||(null==t.id?Xt.push(t):Xt.splice(ae(t.id),0,t),ue())}function ue(){Wt||Gt||(Gt=!0,ie=re.then(ve))}function le(t){const e=Xt.indexOf(t);e>Yt&&Xt.splice(e,1)}function he(t,e,n,i){Object(r["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),ue()}function de(t){he(t,Jt,Qt,Zt)}function fe(t){he(t,ee,te,ne)}function pe(t,e=null){if(Qt.length){for(se=e,Jt=[...new Set(Qt)],Qt.length=0,Zt=0;Zt<Jt.length;Zt++)Jt[Zt]();Jt=null,Zt=0,se=null,pe(t,e)}}function ge(t){if(te.length){const t=[...new Set(te)];if(te.length=0,ee)return void ee.push(...t);for(ee=t,ee.sort((t,e)=>me(t)-me(e)),ne=0;ne<ee.length;ne++)ee[ne]();ee=null,ne=0}}const me=t=>null==t.id?1/0:t.id;function ve(t){Gt=!1,Wt=!0,pe(t),Xt.sort((t,e)=>me(t)-me(e));r["d"];try{for(Yt=0;Yt<Xt.length;Yt++){const t=Xt[Yt];t&&!1!==t.active&&$t(t,null,14)}}finally{Yt=0,Xt.length=0,ge(t),Wt=!1,ie=null,(Xt.length||Qt.length||te.length)&&ve(t)}}new Set;new Map;function ye(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||r["b"];let s=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:o}=i[t]||r["b"];o?s=n.map(t=>t.trim()):e&&(s=n.map(r["O"]))}let c;let u=i[c=Object(r["N"])(e)]||i[c=Object(r["N"])(Object(r["e"])(e))];!u&&o&&(u=i[c=Object(r["N"])(Object(r["l"])(e))]),u&&Ht(u,t,6,s);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Ht(l,t,6,s)}}function be(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!Object(r["q"])(t)){const i=t=>{const n=be(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(t=>a[t]=null):Object(r["h"])(a,o),i.set(t,a),a):(i.set(t,null),null)}function _e(t,e){return!(!t||!Object(r["x"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let we=null,Ee=null;function Te(t){const e=we;return we=t,Ee=t&&t.type.__scopeId||null,e}function Oe(t){Ee=t}function Ie(){Ee=null}function Se(t,e=we,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Sr(-1);const i=Te(e),s=t(...n);return Te(i),r._d&&Sr(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function ke(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:m}=t;let v,y;const b=Te(t);try{if(4&n.shapeFlag){const t=s||i;v=qr(h.call(t,t,d,o,p,f,g)),y=u}else{const t=e;0,v=qr(t.length>1?t(o,{attrs:u,slots:c,emit:l}):t(o,null)),y=e.props?u:Ce(u)}}catch(w){wr.length=0,zt(w,t,1),v=Pr(br)}let _=v;if(y&&!1!==m){const t=Object.keys(y),{shapeFlag:e}=_;t.length&&7&e&&(a&&t.some(r["v"])&&(y=Ae(y,a)),_=Ur(_,y))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,Te(b),v}const Ce=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["x"])(n))&&((e||(e={}))[n]=t[n]);return e},Ae=(t,e)=>{const n={};for(const i in t)Object(r["v"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function xe(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Ne(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Ne(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!_e(u,n))return!0}}return!1}function Ne(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!_e(n,s))return!0}return!1}function je({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const De=t=>t.__isSuspense;function Le(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):fe(t)}function Re(t,e){if(ti){let n=ti.provides;const r=ti.parent&&ti.parent.provides;r===n&&(n=ti.provides=Object.create(r)),n[t]=e}else 0}function Pe(t,e,n=!1){const i=ti||we;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Object(r["q"])(e)?e.call(i.proxy):e}else 0}const Me={};function Fe(t,e,n){return Ue(t,e,n)}function Ue(t,e,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=ti;let u,l,h=!1,d=!1;if(Dt(t)?(u=()=>t.value,h=It(t)):Tt(t)?(u=()=>t,i=!0):Object(r["o"])(t)?(d=!0,h=t.some(Tt),u=()=>t.map(t=>Dt(t)?t.value:Tt(t)?qe(t):Object(r["q"])(t)?$t(t,c,2):void 0)):u=Object(r["q"])(t)?e?()=>$t(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Ht(t,c,3,[f])}:r["d"],e&&i){const t=u;u=()=>qe(t())}let f=t=>{l=v.onStop=()=>{$t(t,c,4)}};if(ai)return f=r["d"],e?n&&Ht(e,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:Me;const g=()=>{if(v.active)if(e){const t=v.run();(i||h||(d?t.some((t,e)=>Object(r["j"])(t,p[e])):Object(r["j"])(t,p)))&&(l&&l(),Ht(e,c,3,[t,p===Me?void 0:p,f]),p=t)}else v.run()};let m;g.allowRecurse=!!e,m="sync"===s?g:"post"===s?()=>sr(g,c&&c.suspense):()=>{!c||c.isMounted?de(g):g()};const v=new b(u,m);return e?n?g():p=v.run():"post"===s?sr(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,v)}}function Ve(t,e,n){const i=this.proxy,s=Object(r["E"])(t)?t.includes(".")?Be(i,t):()=>i[t]:t.bind(i,i);let o;Object(r["q"])(e)?o=e:(o=e.handler,n=e);const a=ti;ni(this);const c=Ue(s,o.bind(i),n);return a?ni(a):ri(),c}function Be(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function qe(t,e){if(!Object(r["w"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Dt(t))qe(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)qe(t[n],e);else if(Object(r["C"])(t)||Object(r["u"])(t))t.forEach(t=>{qe(t,e)});else if(Object(r["y"])(t))for(const n in t)qe(t[n],e);return t}function $e(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fn(()=>{t.isMounted=!0}),mn(()=>{t.isUnmounting=!0}),t}const He=[Function,Array],ze={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(t,{slots:e}){const n=ei(),r=$e();let i;return()=>{const s=e.default&&Je(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==br){0,o=e,t=!0;break}}const a=kt(t),{mode:c}=a;if(r.isLeaving)return Xe(o);const u=Ye(o);if(!u)return Xe(o);const l=Ge(u,a,r,n);Qe(u,l);const h=n.subTree,d=h&&Ye(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,f=!0)}if(d&&d.type!==br&&(!Nr(u,d)||f)){const t=Ge(d,a,r,n);if(Qe(d,t),"out-in"===c)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},Xe(o);"in-out"===c&&u.type!==br&&(t.delayLeave=(t,e,n)=>{const i=We(r,d);i[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},Ke=ze;function We(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ge(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=e,b=String(t.key),_=We(n,t),w=(t,e)=>{t&&Ht(t,r,9,e)},E={mode:s,persisted:o,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=g||a}e._leaveCb&&e._leaveCb(!0);const s=_[b];s&&Nr(t,s)&&s.el._leaveCb&&s.el._leaveCb(),w(r,[e])},enter(t){let e=c,r=u,s=l;if(!n.isMounted){if(!i)return;e=m||c,r=v||u,s=y||l}let o=!1;const a=t._enterCb=e=>{o||(o=!0,w(e?s:r,[t]),E.delayedLeave&&E.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();w(h,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),w(n?p:f,[e]),e._leaveCb=void 0,_[i]===t&&delete _[i])};_[i]=t,d?(d(e,o),d.length<=1&&o()):o()},clone(t){return Ge(t,e,n,r)}};return E}function Xe(t){if(en(t))return t=Ur(t),t.children=null,t}function Ye(t){return en(t)?t.children?t.children[0]:void 0:t}function Qe(t,e){6&t.shapeFlag&&t.component?Qe(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Je(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===vr?(128&o.patchFlag&&i++,r=r.concat(Je(o.children,e,a))):(e||o.type!==br)&&r.push(null!=a?Ur(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Ze(t){return Object(r["q"])(t)?{setup:t,name:t.name}:t}const tn=t=>!!t.type.__asyncLoader;const en=t=>t.type.__isKeepAlive;RegExp,RegExp;function nn(t,e){return Object(r["o"])(t)?t.some(t=>nn(t,e)):Object(r["E"])(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function rn(t,e){on(t,"a",e)}function sn(t,e){on(t,"da",e)}function on(t,e,n=ti){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(ln(e,r,n),n){let t=n.parent;while(t&&t.parent)en(t.parent.vnode)&&an(r,e,n,t),t=t.parent}}function an(t,e,n,i){const s=ln(e,t,i,!0);vn(()=>{Object(r["L"])(i[e],s)},n)}function cn(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function un(t){return 128&t.shapeFlag?t.ssContent:t}function ln(t,e,n=ti,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;T(),ni(n);const i=Ht(e,n,t,r);return ri(),O(),i});return r?i.unshift(s):i.push(s),s}}const hn=t=>(e,n=ti)=>(!ai||"sp"===t)&&ln(t,e,n),dn=hn("bm"),fn=hn("m"),pn=hn("bu"),gn=hn("u"),mn=hn("bum"),vn=hn("um"),yn=hn("sp"),bn=hn("rtg"),_n=hn("rtc");function wn(t,e=ti){ln("ec",t,e)}let En=!0;function Tn(t){const e=kn(t),n=t.proxy,i=t.ctx;En=!1,e.beforeCreate&&In(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:_,unmounted:w,render:E,renderTracked:T,renderTriggered:O,errorCaptured:I,serverPrefetch:S,expose:k,inheritAttrs:C,components:A,directives:x,filters:N}=e,j=null;if(l&&On(l,i,j,t.appContext.config.unwrapInjectedRef),a)for(const L in a){const t=a[L];Object(r["q"])(t)&&(i[L]=t.bind(n))}if(s){0;const e=s.call(n,n);0,Object(r["w"])(e)&&(t.data=bt(e))}if(En=!0,o)for(const L in o){const t=o[L],e=Object(r["q"])(t)?t.bind(n,n):Object(r["q"])(t.get)?t.get.bind(n,n):r["d"];0;const s=!Object(r["q"])(t)&&Object(r["q"])(t.set)?t.set.bind(n):r["d"],a=vi({get:e,set:s});Object.defineProperty(i,L,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)Sn(c[r],i,n,r);if(u){const t=Object(r["q"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{Re(e,t[e])})}function D(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&In(h,t,"c"),D(dn,d),D(fn,f),D(pn,p),D(gn,g),D(rn,m),D(sn,v),D(wn,I),D(_n,T),D(bn,O),D(mn,b),D(vn,w),D(yn,S),Object(r["o"])(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});E&&t.render===r["d"]&&(t.render=E),null!=C&&(t.inheritAttrs=C),A&&(t.components=A),x&&(t.directives=x)}function On(t,e,n=r["d"],i=!1){Object(r["o"])(t)&&(t=jn(t));for(const s in t){const n=t[s];let o;o=Object(r["w"])(n)?"default"in n?Pe(n.from||s,n.default,!0):Pe(n.from||s):Pe(n),Dt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function In(t,e,n){Ht(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sn(t,e,n,i){const s=i.includes(".")?Be(n,i):()=>n[i];if(Object(r["E"])(t)){const n=e[t];Object(r["q"])(n)&&Fe(s,n)}else if(Object(r["q"])(t))Fe(s,t.bind(n));else if(Object(r["w"])(t))if(Object(r["o"])(t))t.forEach(t=>Sn(t,e,n,i));else{const i=Object(r["q"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["q"])(i)&&Fe(s,i,t)}else 0}function kn(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Cn(c,t,o,!0)),Cn(c,e,o)):c=e,s.set(e,c),c}function Cn(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Cn(t,s,n,!0),i&&i.forEach(e=>Cn(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=An[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const An={data:xn,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:Dn,created:Dn,beforeMount:Dn,mounted:Dn,beforeUpdate:Dn,updated:Dn,beforeDestroy:Dn,beforeUnmount:Dn,destroyed:Dn,unmounted:Dn,activated:Dn,deactivated:Dn,errorCaptured:Dn,serverPrefetch:Dn,components:Ln,directives:Ln,watch:Rn,provide:xn,inject:Nn};function xn(t,e){return e?t?function(){return Object(r["h"])(Object(r["q"])(t)?t.call(this,this):t,Object(r["q"])(e)?e.call(this,this):e)}:e:t}function Nn(t,e){return Ln(jn(t),jn(e))}function jn(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dn(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function Rn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=Dn(t[r],e[r]);return n}function Pn(t,e,n,i=!1){const s={},o={};Object(r["g"])(o,jr,1),t.propsDefaults=Object.create(null),Fn(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:_t(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Mn(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=kt(s),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;Fn(t,e,s,o)&&(l=!0);for(const o in c)e&&(Object(r["k"])(e,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(e,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=Un(u,c,o,void 0,t,!0)):delete s[o]);if(o!==c)for(const t in o)e&&Object(r["k"])(e,t)||(delete o[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];if(_e(t.emitsOptions,a))continue;const h=e[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const e=Object(r["e"])(a);s[e]=Un(u,c,e,h,t,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&k(t,"set","$attrs")}function Fn(t,e,n,i){const[s,o]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["A"])(u))continue;const l=e[u];let h;s&&Object(r["k"])(s,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:_e(t.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(o){const e=kt(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=Un(s,e,c,i[c],t,!Object(r["k"])(i,c))}}return c}function Un(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["q"])(t)){const{propsDefaults:r}=s;n in r?i=r[n]:(ni(s),i=r[n]=t.call(null,e),ri())}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Vn(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!Object(r["q"])(t)){const i=t=>{u=!0;const[n,i]=Vn(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const t=Object(r["e"])(o[h]);Bn(t)&&(a[t]=r["b"])}else if(o){0;for(const t in o){const e=Object(r["e"])(t);if(Bn(e)){const n=o[t],i=a[e]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(i){const t=Hn(Boolean,i.type),n=Hn(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["k"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function Bn(t){return"$"!==t[0]}function qn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function $n(t,e){return qn(t)===qn(e)}function Hn(t,e){return Object(r["o"])(e)?e.findIndex(e=>$n(e,t)):Object(r["q"])(e)&&$n(e,t)?0:-1}const zn=t=>"_"===t[0]||"$stable"===t,Kn=t=>Object(r["o"])(t)?t.map(qr):[qr(t)],Wn=(t,e,n)=>{const r=Se((...t)=>Kn(e(...t)),n);return r._c=!1,r},Gn=(t,e,n)=>{const i=t._ctx;for(const s in t){if(zn(s))continue;const n=t[s];if(Object(r["q"])(n))e[s]=Wn(s,n,i);else if(null!=n){0;const t=Kn(n);e[s]=()=>t}}},Xn=(t,e)=>{const n=Kn(e);t.slots.default=()=>n},Yn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=kt(e),Object(r["g"])(e,"_",n)):Gn(e,t.slots={})}else t.slots={},e&&Xn(t,e);Object(r["g"])(t.slots,jr,1)},Qn=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(r["h"])(s,e),n||1!==t||delete s._):(o=!e.$stable,Gn(e,s)),a=e}else e&&(Xn(t,e),a={default:1});if(o)for(const r in s)zn(r)||r in a||delete s[r]};function Jn(t,e){const n=we;if(null===n)return t;const i=pi(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=r["b"]]=e[o];Object(r["q"])(t)&&(t={mounted:t,updated:t}),t.deep&&qe(n),s.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Zn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(T(),Ht(c,n,8,[t.el,a,t,e]),O())}}function tr(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let er=0;function nr(t,e){return function(n,i=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==i||Object(r["w"])(i)||(i=null);const s=tr(),o=new Set;let a=!1;const c=s.app={_uid:er++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:bi,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(r["q"])(t.install)?(o.add(t),t.install(c,...e)):Object(r["q"])(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(r,o,u){if(!a){const l=Pr(n,i);return l.appContext=s,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,pi(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function rr(t,e,n,i,s=!1){if(Object(r["o"])(t))return void t.forEach((t,o)=>rr(t,e&&(Object(r["o"])(e)?e[o]:e),n,i,s));if(tn(i)&&!s)return;const o=4&i.shapeFlag?pi(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["E"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):Dt(l)&&(l.value=null)),Object(r["q"])(u))$t(u,c,12,[a,h]);else{const e=Object(r["E"])(u),i=Dt(u);if(e||i){const i=()=>{if(t.f){const n=e?h[u]:u.value;s?Object(r["o"])(n)&&Object(r["L"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):e?(h[u]=[o],Object(r["k"])(d,u)&&(d[u]=h[u])):(u.value=[o],t.k&&(h[t.k]=u.value))}else e?(h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)):Dt(u)&&(u.value=a,t.k&&(h[t.k]=a))};a?(i.id=-1,sr(i,n)):i()}else 0}}function ir(){}const sr=Le;function or(t){return ar(t)}function ar(t,e){ir();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:m}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Nr(t,e)&&(r=G(t),$(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case yr:y(t,e,n,r);break;case br:_(t,e,n,r);break;case _r:null==t&&w(e,n,r,o);break;case vr:D(t,e,n,r,i,s,o,a,c);break;default:1&h?S(t,e,n,r,i,s,o,a,c):6&h?L(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,Y)}null!=l&&i&&rr(l,t&&t.ref,s,e||t,!e)},y=(t,e,n,r)=>{if(null==t)i(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},_=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},E=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=f(t),i(t,n,r),t=s;i(e,n,r)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=f(t),s(t),t=n;s(e)},S=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?k(e,n,r,i,s,o,a,c):x(t,e,i,s,o,a,c)},k=(t,e,n,s,c,u,l,d)=>{let f,p;const{type:m,props:v,shapeFlag:y,transition:b,patchFlag:_,dirs:w}=t;if(t.el&&void 0!==g&&-1===_)f=t.el=g(t.el);else{if(f=t.el=a(t.type,u,v&&v.is,v),8&y?h(f,t.children):16&y&&A(t.children,f,null,s,c,u&&"foreignObject"!==m,l,d),w&&Zn(t,null,s,"created"),v){for(const e in v)"value"===e||Object(r["A"])(e)||o(f,e,null,v[e],u,t.children,s,c,W);"value"in v&&o(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&Kr(p,s,t)}C(f,t,t.scopeId,l,s)}w&&Zn(t,null,s,"beforeMount");const E=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;E&&b.beforeEnter(f),i(f,e,n),((p=v&&v.onVnodeMounted)||E||w)&&sr(()=>{p&&Kr(p,s,t),E&&b.enter(f),w&&Zn(t,null,s,"mounted")},c)},C=(t,e,n,r,i)=>{if(n&&p(t,n),r)for(let s=0;s<r.length;s++)p(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;C(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},A=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?$r(t[u]):qr(t[u]);v(null,c,e,n,r,i,s,o,a)}},x=(t,e,n,i,s,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;n&&cr(n,!1),(m=g.onVnodeBeforeUpdate)&&Kr(m,n,e,t),f&&Zn(e,t,n,"beforeUpdate"),n&&cr(n,!0);const v=s&&"foreignObject"!==e.type;if(d?N(t.dynamicChildren,d,u,n,i,v,a):c||U(t,e,u,null,n,i,v,a,!1),l>0){if(16&l)j(u,e,p,g,n,i,s);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,s),4&l&&o(u,"style",p.style,g.style,s),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,s,t.children,n,i,W)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=d||j(u,e,p,g,n,i,s);((m=g.onVnodeUpdated)||f)&&sr(()=>{m&&Kr(m,n,e,t),f&&Zn(e,t,n,"updated")},i)},N=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===vr||!Nr(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},j=(t,e,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["A"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,s,a,W)}if(n!==r["b"])for(const u in n)Object(r["A"])(u)||u in i||o(t,u,n[u],null,c,e.children,s,a,W);"value"in i&&o(t,"value",n.value,i.value)}},D=(t,e,n,r,s,o,a,u,l)=>{const h=e.el=t?t.el:c(""),d=e.anchor=t?t.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(i(h,n,r),i(d,n,r),A(e.children,n,d,s,o,a,u,l)):f>0&&64&f&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,s,o,a,u),(null!=e.key||s&&e===s.subTree)&&ur(t,e,!0)):U(t,e,n,d,s,o,a,u,l)},L=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):R(e,n,r,i,s,o,c):P(t,e,c)},R=(t,e,n,r,i,s,o)=>{const a=t.component=Zr(t,r,i);if(en(t)&&(a.ctx.renderer=Y),ci(a),a.asyncDep){if(i&&i.registerDep(a,M),!t.el){const t=a.subTree=Pr(br);_(null,t,e,n)}}else M(a,t,e,n,i,s,o)},P=(t,e,n)=>{const r=e.component=t.component;if(xe(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,e,n);r.next=e,le(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,i,s,o,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:u,vnode:l}=t,h=n;0,cr(t,!1),n?(n.el=l.el,F(t,n,a)):n=l,i&&Object(r["n"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Kr(e,u,n,l),cr(t,!0);const f=ke(t);0;const p=t.subTree;t.subTree=f,v(p,f,d(p.el),G(p),t,s,o),n.el=f.el,null===h&&je(t,f.el),c&&sr(c,s),(e=n.props&&n.props.onVnodeUpdated)&&sr(()=>Kr(e,u,n,l),s)}else{let a;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=tn(e);if(cr(t,!1),l&&Object(r["n"])(l),!f&&(a=u&&u.onVnodeBeforeMount)&&Kr(a,d,e),cr(t,!0),c&&J){const n=()=>{t.subTree=ke(t),J(c,t.subTree,t,s,null)};f?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=ke(t);0,v(null,r,n,i,t,s,o),e.el=r.el}if(h&&sr(h,s),!f&&(a=u&&u.onVnodeMounted)){const t=e;sr(()=>Kr(a,d,t),s)}256&e.shapeFlag&&t.a&&sr(t.a,s),t.isMounted=!0,e=n=i=null}},u=t.effect=new b(c,()=>ce(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,cr(t,!0),l()},F=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,Mn(t,e.props,r,n),Qn(t,e.children,n),T(),pe(void 0,t.update),O()},U=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,d=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void B(u,d,n,r,i,s,o,a,c);if(256&f)return void V(u,d,n,r,i,s,o,a,c)}8&p?(16&l&&W(u,i,s),d!==u&&h(n,d)):16&l?16&p?B(u,d,n,r,i,s,o,a,c):W(u,i,s,!0):(8&l&&h(n,""),16&p&&A(d,n,r,i,s,o,a,c))},V=(t,e,n,i,s,o,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?$r(e[f]):qr(e[f]);v(t[f],r,n,null,s,o,a,c,u)}l>h?W(t,s,o,!0,!1,d):A(e,n,i,s,o,a,c,u,d)},B=(t,e,n,i,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?$r(e[l]):qr(e[l]);if(!Nr(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?$r(e[f]):qr(e[f]);if(!Nr(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,r=t<h?e[t].el:i;while(l<=f)v(null,e[l]=u?$r(e[l]):qr(e[l]),n,r,s,o,a,c,u),l++}}else if(l>f)while(l<=d)$(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const t=e[l]=u?$r(e[l]):qr(e[l]);null!=t.key&&m.set(t.key,l)}let y,b=0;const _=f-g+1;let w=!1,E=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=t[l];if(b>=_){$(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Nr(r,e[y])){i=y;break}void 0===i?$(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:w=!0,v(r,e[i],n,null,s,o,a,c,u),b++)}const O=w?lr(T):r["a"];for(y=O.length-1,l=_-1;l>=0;l--){const t=g+l,r=e[t],d=t+1<h?e[t+1].el:i;0===T[l]?v(null,r,n,d,s,o,a,c,u):w&&(y<0||l!==O[y]?q(r,n,d,2):y--)}}},q=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void q(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,Y);if(a===vr){i(o,e,n);for(let t=0;t<u.length;t++)q(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===_r)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),sr(()=>c.enter(o),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,()=>{a(),s&&s()})};r?r(o,a,u):u()}else i(o,e,n)},$=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&rr(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!tn(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&Kr(g,e,t),6&l)K(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&Zn(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,Y,r):u&&(s!==vr||h>0&&64&h)?W(u,e,n,!1,!0):(s===vr&&384&h||!i&&16&l)&&W(c,e,n),r&&H(t)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&sr(()=>{g&&Kr(g,e,t),f&&Zn(t,null,e,"unmounted")},n)},H=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===vr)return void z(n,r);if(e===_r)return void I(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},z=(t,e)=>{let n;while(t!==e)n=f(t),s(t),t=n;s(e)},K=(t,e,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=t;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,$(a,t,e,n)),c&&sr(c,e),sr(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},W=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)$(t[o],e,n,r,i)},G=t=>6&t.shapeFlag?G(t.component.subTree):128&t.shapeFlag?t.suspense.next():f(t.anchor||t.el),X=(t,e,n)=>{null==t?e._vnode&&$(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),ge(),e._vnode=t},Y={p:v,um:$,m:q,r:H,mt:R,mc:A,pc:U,pbc:N,n:G,o:t};let Q,J;return e&&([Q,J]=e(Y)),{render:X,hydrate:Q,createApp:nr(X,Q)}}function cr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ur(t,e,n=!1){const i=t.children,s=e.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=$r(s[r]),e.el=t.el),n||ur(t,e))}}function lr(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const hr=t=>t.__isTeleport;const dr="components";function fr(t,e){return gr(dr,t,!0,e)||t}const pr=Symbol();function gr(t,e,n=!0,i=!1){const s=we||ti;if(s){const n=s.type;if(t===dr){const t=gi(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const o=mr(s[t]||n[t],e)||mr(s.appContext[t],e);return!o&&i?n:o}}function mr(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const vr=Symbol(void 0),yr=Symbol(void 0),br=Symbol(void 0),_r=Symbol(void 0),wr=[];let Er=null;function Tr(t=!1){wr.push(Er=t?null:[])}function Or(){wr.pop(),Er=wr[wr.length-1]||null}let Ir=1;function Sr(t){Ir+=t}function kr(t){return t.dynamicChildren=Ir>0?Er||r["a"]:null,Or(),Ir>0&&Er&&Er.push(t),t}function Cr(t,e,n,r,i,s){return kr(Rr(t,e,n,r,i,s,!0))}function Ar(t,e,n,r,i){return kr(Pr(t,e,n,r,i,!0))}function xr(t){return!!t&&!0===t.__v_isVNode}function Nr(t,e){return t.type===e.type&&t.key===e.key}const jr="__vInternal",Dr=({key:t})=>null!=t?t:null,Lr=({ref:t,ref_key:e,ref_for:n})=>null!=t?Object(r["E"])(t)||Dt(t)||Object(r["q"])(t)?{i:we,r:t,k:e,f:!!n}:t:null;function Rr(t,e=null,n=null,i=0,s=null,o=(t===vr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dr(e),ref:e&&Lr(e),scopeId:Ee,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Hr(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["E"])(n)?8:16),Ir>0&&!a&&Er&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Er.push(u),u}const Pr=Mr;function Mr(t,e=null,n=null,i=0,s=null,o=!1){if(t&&t!==pr||(t=br),xr(t)){const r=Ur(t,e,!0);return n&&Hr(r,n),r}if(mi(t)&&(t=t.__vccOpts),e){e=Fr(e);let{class:t,style:n}=e;t&&!Object(r["E"])(t)&&(e.class=Object(r["J"])(t)),Object(r["w"])(n)&&(St(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["K"])(n))}const a=Object(r["E"])(t)?1:De(t)?128:hr(t)?64:Object(r["w"])(t)?4:Object(r["q"])(t)?2:0;return Rr(t,e,n,i,s,a,o,!0)}function Fr(t){return t?St(t)||jr in t?Object(r["h"])({},t):t:null}function Ur(t,e,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=t,c=e?zr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Dr(c),ref:e&&e.ref?n&&s?Object(r["o"])(s)?s.concat(Lr(e)):[s,Lr(e)]:Lr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vr?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor};return u}function Vr(t=" ",e=0){return Pr(yr,null,t,e)}function Br(t="",e=!1){return e?(Tr(),Ar(br,null,t)):Pr(br,null,t)}function qr(t){return null==t||"boolean"===typeof t?Pr(br):Object(r["o"])(t)?Pr(vr,null,t.slice()):"object"===typeof t?$r(t):Pr(yr,null,String(t))}function $r(t){return null===t.el||t.memo?t:Ur(t)}function Hr(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),Hr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||jr in e?3===r&&we&&(1===we.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=we}}else Object(r["q"])(e)?(e={default:e,_ctx:we},n=32):(e=String(e),64&i?(n=16,e=[Vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function zr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["J"])([e.class,i.class]));else if("style"===t)e.style=Object(r["K"])([e.style,i.style]);else if(Object(r["x"])(t)){const n=e[t],s=i[t];!s||n===s||Object(r["o"])(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function Kr(t,e,n,r=null){Ht(t,e,7,[n,r])}function Wr(t,e,n,i){let s;const o=n&&n[i];if(Object(r["o"])(t)||Object(r["E"])(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if(Object(r["w"])(t))if(t[Symbol.iterator])s=Array.from(t,(t,n)=>e(t,n,void 0,o&&o[n]));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}const Gr=t=>t?ii(t)?pi(t)||t.proxy:Gr(t.parent):null,Xr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gr(t.parent),$root:t=>Gr(t.root),$emit:t=>t.emit,$options:t=>kn(t),$forceUpdate:t=>()=>ce(t.update),$nextTick:t=>oe.bind(t.proxy),$watch:t=>Ve.bind(t)}),Yr={get({_:t},e){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=1,i[e];if(s!==r["b"]&&Object(r["k"])(s,e))return a[e]=2,s[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=3,o[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=4,n[e];En&&(a[e]=0)}}const h=Xr[e];let d,f;return h?("$attrs"===e&&I(t,"get",e),h(t)):(d=c.__cssModules)&&(d=d[e])?d:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=4,n[e]):(f=u.config.globalProperties,Object(r["k"])(f,e)?f[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return s!==r["b"]&&Object(r["k"])(s,e)?(s[e]=n,!0):i!==r["b"]&&Object(r["k"])(i,e)?(i[e]=n,!0):!Object(r["k"])(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==r["b"]&&Object(r["k"])(t,a)||e!==r["b"]&&Object(r["k"])(e,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(Xr,a)||Object(r["k"])(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:Object(r["k"])(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const Qr=tr();let Jr=0;function Zr(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||Qr,a={uid:Jr++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vn(i,o),emitsOptions:be(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=ye.bind(null,a),t.ce&&t.ce(a),a}let ti=null;const ei=()=>ti||we,ni=t=>{ti=t,t.scope.on()},ri=()=>{ti&&ti.scope.off(),ti=null};function ii(t){return 4&t.vnode.shapeFlag}let si,oi,ai=!1;function ci(t,e=!1){ai=e;const{props:n,children:r}=t.vnode,i=ii(t);Pn(t,n,i,e),Yn(t,r);const s=i?ui(t,e):void 0;return ai=!1,s}function ui(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ct(new Proxy(t.ctx,Yr));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?fi(t):null;ni(t),T();const s=$t(i,t,0,[t.props,n]);if(O(),ri(),Object(r["z"])(s)){if(s.then(ri,ri),e)return s.then(n=>{li(t,n,e)}).catch(e=>{zt(e,t,0)});t.asyncDep=s}else li(t,s,e)}else hi(t,e)}function li(t,e,n){Object(r["q"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["w"])(e)&&(t.setupState=Vt(e)),hi(t,n)}function hi(t,e,n){const i=t.type;if(!t.render){if(!e&&si&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=si(e,c)}}t.render=i.render||r["d"],oi&&oi(t)}ni(t),T(),Tn(t),O(),ri()}function di(t){return new Proxy(t.attrs,{get(e,n){return I(t,"get","$attrs"),e[n]}})}function fi(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=di(t))},slots:t.slots,emit:t.emit,expose:e}}function pi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vt(Ct(t.exposed)),{get(e,n){return n in e?e[n]:n in Xr?Xr[n](t):void 0}}))}function gi(t){return Object(r["q"])(t)&&t.displayName||t.name}function mi(t){return Object(r["q"])(t)&&"__vccOpts"in t}const vi=(t,e)=>qt(t,e,ai);function yi(t,e,n){const i=arguments.length;return 2===i?Object(r["w"])(e)&&!Object(r["o"])(e)?xr(e)?Pr(t,null,[e]):Pr(t,e):Pr(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&xr(n)&&(n=[n]),Pr(t,e,n))}Symbol("");const bi="3.2.33",_i="http://www.w3.org/2000/svg",wi="undefined"!==typeof document?document:null,Ei=wi&&wi.createElement("template"),Ti={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?wi.createElementNS(_i,t):wi.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>wi.createTextNode(t),createComment:t=>wi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{Ei.innerHTML=r?`<svg>${t}</svg>`:t;const i=Ei.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Oi(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ii(t,e,n){const i=t.style,s=Object(r["E"])(n);if(n&&!s){for(const t in n)ki(i,t,n[t]);if(e&&!Object(r["E"])(e))for(const t in e)null==n[t]&&ki(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Si=/\s*!important$/;function ki(t,e,n){if(Object(r["o"])(n))n.forEach(n=>ki(t,e,n));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=xi(t,e);Si.test(n)?t.setProperty(Object(r["l"])(i),n.replace(Si,""),"important"):t[i]=n}}const Ci=["Webkit","Moz","ms"],Ai={};function xi(t,e){const n=Ai[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return Ai[e]=i;i=Object(r["f"])(i);for(let r=0;r<Ci.length;r++){const n=Ci[r]+i;if(n in t)return Ai[e]=n}return e}const Ni="http://www.w3.org/1999/xlink";function ji(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Ni,e.slice(6,e.length)):t.setAttributeNS(Ni,e,n);else{const i=Object(r["D"])(e);null==n||i&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Di(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=Object(r["m"])(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[Li,Ri]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Pi=0;const Mi=Promise.resolve(),Fi=()=>{Pi=0},Ui=()=>Pi||(Mi.then(Fi),Pi=Li());function Vi(t,e,n,r){t.addEventListener(e,n,r)}function Bi(t,e,n,r){t.removeEventListener(e,n,r)}function qi(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=Hi(e);if(r){const o=s[e]=zi(r,i);Vi(t,n,o,a)}else o&&(Bi(t,n,o,a),s[e]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function Hi(t){let e;if($i.test(t)){let n;e={};while(n=t.match($i))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["l"])(t.slice(2)),e]}function zi(t,e){const n=t=>{const r=t.timeStamp||Li();(Ri||r>=n.attached-1)&&Ht(Ki(t,n.value),e,5,[t])};return n.value=t,n.attached=Ui(),n}function Ki(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const Wi=/^on[a-z]/,Gi=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?Oi(t,i,s):"style"===e?Ii(t,n,i):Object(r["x"])(e)?Object(r["v"])(e)||qi(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Xi(t,e,i,s))?Di(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),ji(t,e,i,s))};function Xi(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&Wi.test(e)&&Object(r["q"])(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Wi.test(e)||!Object(r["E"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Yi="transition",Qi="animation",Ji=(t,{slots:e})=>yi(Ke,ns(t),e);Ji.displayName="Transition";const Zi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ts=(Ji.props=Object(r["h"])({},Ke.props,Zi),(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),es=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function ns(t){const e={};for(const r in t)r in Zi||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=rs(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:O=b,onAppearCancelled:I=_}=e,S=(t,e,n)=>{os(t,e?h:c),os(t,e?l:a),n&&n()},k=(t,e)=>{os(t,p),os(t,f),e&&e()},C=t=>(e,n)=>{const r=t?O:b,s=()=>S(e,t,n);ts(r,[e,s]),as(()=>{os(e,t?u:o),ss(e,t?h:c),es(r)||us(e,i,m,s)})};return Object(r["h"])(e,{onBeforeEnter(t){ts(y,[t]),ss(t,o),ss(t,a)},onBeforeAppear(t){ts(T,[t]),ss(t,u),ss(t,l)},onEnter:C(!1),onAppear:C(!0),onLeave(t,e){const n=()=>k(t,e);ss(t,d),fs(),ss(t,f),as(()=>{os(t,d),ss(t,p),es(w)||us(t,i,v,n)}),ts(w,[t,n])},onEnterCancelled(t){S(t,!1),ts(_,[t])},onAppearCancelled(t){S(t,!0),ts(I,[t])},onLeaveCancelled(t){k(t),ts(E,[t])}})}function rs(t){if(null==t)return null;if(Object(r["w"])(t))return[is(t.enter),is(t.leave)];{const e=is(t);return[e,e]}}function is(t){const e=Object(r["O"])(t);return e}function ss(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function os(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function as(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let cs=0;function us(t,e,n,r){const i=t._endId=++cs,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=ls(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function ls(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(Yi+"Delay"),s=r(Yi+"Duration"),o=hs(i,s),a=r(Qi+"Delay"),c=r(Qi+"Duration"),u=hs(a,c);let l=null,h=0,d=0;e===Yi?o>0&&(l=Yi,h=o,d=s.length):e===Qi?u>0&&(l=Qi,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?Yi:Qi:null,d=l?l===Yi?s.length:c.length:0);const f=l===Yi&&/\b(transform|all)(,|$)/.test(n[Yi+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function hs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>ds(e)+ds(t[n])))}function ds(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function fs(){return document.body.offsetHeight}new WeakMap,new WeakMap;const ps=t=>{const e=t.props["onUpdate:modelValue"];return Object(r["o"])(e)?t=>Object(r["n"])(e,t):e};function gs(t){t.target.composing=!0}function ms(t){const e=t.target;e.composing&&(e.composing=!1,vs(e,"input"))}function vs(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ys={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=ps(s);const o=i||s.props&&"number"===s.props.type;Vi(t,e?"change":"input",e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():o&&(i=Object(r["O"])(i)),t._assign(i)}),n&&Vi(t,"change",()=>{t.value=t.value.trim()}),e||(Vi(t,"compositionstart",gs),Vi(t,"compositionend",ms),Vi(t,"change",ms))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=ps(o),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&Object(r["O"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const bs=["ctrl","shift","alt","meta"],_s={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>bs.some(n=>t[n+"Key"]&&!e.includes(n))},ws=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=_s[e[t]];if(r&&r(n,e))return}return t(n,...r)};const Es=Object(r["h"])({patchProp:Gi},Ti);let Ts;function Os(){return Ts||(Ts=or(Es))}const Is=(...t)=>{const e=Os().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=Ss(t);if(!i)return;const s=e._component;Object(r["q"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ss(t){if(Object(r["E"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),s=r.Object;t.exports=function(t){return s(i(t))}},"7b17":function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"top",(function(){return i})),n.d(r,"bottom",(function(){return s})),n.d(r,"right",(function(){return o})),n.d(r,"left",(function(){return a})),n.d(r,"auto",(function(){return c})),n.d(r,"basePlacements",(function(){return u})),n.d(r,"start",(function(){return l})),n.d(r,"end",(function(){return h})),n.d(r,"clippingParents",(function(){return d})),n.d(r,"viewport",(function(){return f})),n.d(r,"popper",(function(){return p})),n.d(r,"reference",(function(){return g})),n.d(r,"variationPlacements",(function(){return m})),n.d(r,"placements",(function(){return v})),n.d(r,"beforeRead",(function(){return y})),n.d(r,"read",(function(){return b})),n.d(r,"afterRead",(function(){return _})),n.d(r,"beforeMain",(function(){return w})),n.d(r,"main",(function(){return E})),n.d(r,"afterMain",(function(){return T})),n.d(r,"beforeWrite",(function(){return O})),n.d(r,"write",(function(){return I})),n.d(r,"afterWrite",(function(){return S})),n.d(r,"modifierPhases",(function(){return k})),n.d(r,"applyStyles",(function(){return R})),n.d(r,"arrow",(function(){return st})),n.d(r,"computeStyles",(function(){return ht})),n.d(r,"eventListeners",(function(){return pt})),n.d(r,"flip",(function(){return Pt})),n.d(r,"hide",(function(){return Vt})),n.d(r,"offset",(function(){return $t})),n.d(r,"popperOffsets",(function(){return zt})),n.d(r,"preventOverflow",(function(){return Gt})),n.d(r,"popperGenerator",(function(){return se})),n.d(r,"detectOverflow",(function(){return jt})),n.d(r,"createPopperBase",(function(){return oe})),n.d(r,"createPopper",(function(){return ce})),n.d(r,"createPopperLite",(function(){return le}));var i="top",s="bottom",o="right",a="left",c="auto",u=[i,s,o,a],l="start",h="end",d="clippingParents",f="viewport",p="popper",g="reference",m=u.reduce((function(t,e){return t.concat([e+"-"+l,e+"-"+h])}),[]),v=[].concat(u,[c]).reduce((function(t,e){return t.concat([e,e+"-"+l,e+"-"+h])}),[]),y="beforeRead",b="read",_="afterRead",w="beforeMain",E="main",T="afterMain",O="beforeWrite",I="write",S="afterWrite",k=[y,b,_,w,E,T,O,I,S];function C(t){return t?(t.nodeName||"").toLowerCase():null}function A(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function x(t){var e=A(t).Element;return t instanceof e||t instanceof Element}function N(t){var e=A(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function j(t){if("undefined"===typeof ShadowRoot)return!1;var e=A(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function D(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},i=e.elements[t];N(i)&&C(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))}function L(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],i=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]),o=s.reduce((function(t,e){return t[e]="",t}),{});N(r)&&C(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(t){r.removeAttribute(t)})))}))}}var R={name:"applyStyles",enabled:!0,phase:"write",fn:D,effect:L,requires:["computeStyles"]};function P(t){return t.split("-")[0]}var M=Math.max,F=Math.min,U=Math.round;function V(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),r=1,i=1;if(N(t)&&e){var s=t.offsetHeight,o=t.offsetWidth;o>0&&(r=U(n.width)/o||1),s>0&&(i=U(n.height)/s||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function B(t){var e=V(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function q(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&j(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function $(t){return A(t).getComputedStyle(t)}function H(t){return["table","td","th"].indexOf(C(t))>=0}function z(t){return((x(t)?t.ownerDocument:t.document)||window.document).documentElement}function K(t){return"html"===C(t)?t:t.assignedSlot||t.parentNode||(j(t)?t.host:null)||z(t)}function W(t){return N(t)&&"fixed"!==$(t).position?t.offsetParent:null}function G(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&N(t)){var r=$(t);if("fixed"===r.position)return null}var i=K(t);j(i)&&(i=i.host);while(N(i)&&["html","body"].indexOf(C(i))<0){var s=$(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||e&&"filter"===s.willChange||e&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function X(t){var e=A(t),n=W(t);while(n&&H(n)&&"static"===$(n).position)n=W(n);return n&&("html"===C(n)||"body"===C(n)&&"static"===$(n).position)?e:n||G(t)||e}function Y(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Q(t,e,n){return M(t,F(e,n))}function J(t,e,n){var r=Q(t,e,n);return r>n?n:r}function Z(){return{top:0,right:0,bottom:0,left:0}}function tt(t){return Object.assign({},Z(),t)}function et(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var nt=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,tt("number"!==typeof t?t:et(t,u))};function rt(t){var e,n=t.state,r=t.name,c=t.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=P(n.placement),d=Y(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(u&&l){var g=nt(c.padding,n),m=B(u),v="y"===d?i:a,y="y"===d?s:o,b=n.rects.reference[p]+n.rects.reference[d]-l[d]-n.rects.popper[p],_=l[d]-n.rects.reference[d],w=X(u),E=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,T=b/2-_/2,O=g[v],I=E-m[p]-g[y],S=E/2-m[p]/2+T,k=Q(O,S,I),C=d;n.modifiersData[r]=(e={},e[C]=k,e.centerOffset=k-S,e)}}function it(t){var e=t.state,n=t.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=e.elements.popper.querySelector(i),i))&&q(e.elements.popper,i)&&(e.elements.arrow=i)}var st={name:"arrow",enabled:!0,phase:"main",fn:rt,effect:it,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ot(t){return t.split("-")[1]}var at={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ct(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:U(e*i)/i||0,y:U(n*i)/i||0}}function ut(t){var e,n=t.popper,r=t.popperRect,c=t.placement,u=t.variation,l=t.offsets,d=t.position,f=t.gpuAcceleration,p=t.adaptive,g=t.roundOffsets,m=t.isFixed,v=l.x,y=void 0===v?0:v,b=l.y,_=void 0===b?0:b,w="function"===typeof g?g({x:y,y:_}):{x:y,y:_};y=w.x,_=w.y;var E=l.hasOwnProperty("x"),T=l.hasOwnProperty("y"),O=a,I=i,S=window;if(p){var k=X(n),C="clientHeight",x="clientWidth";if(k===A(n)&&(k=z(n),"static"!==$(k).position&&"absolute"===d&&(C="scrollHeight",x="scrollWidth")),k=k,c===i||(c===a||c===o)&&u===h){I=s;var N=m&&k===S&&S.visualViewport?S.visualViewport.height:k[C];_-=N-r.height,_*=f?1:-1}if(c===a||(c===i||c===s)&&u===h){O=o;var j=m&&k===S&&S.visualViewport?S.visualViewport.width:k[x];y-=j-r.width,y*=f?1:-1}}var D,L=Object.assign({position:d},p&&at),R=!0===g?ct({x:y,y:_}):{x:y,y:_};return y=R.x,_=R.y,f?Object.assign({},L,(D={},D[I]=T?"0":"",D[O]=E?"0":"",D.transform=(S.devicePixelRatio||1)<=1?"translate("+y+"px, "+_+"px)":"translate3d("+y+"px, "+_+"px, 0)",D)):Object.assign({},L,(e={},e[I]=T?_+"px":"",e[O]=E?y+"px":"",e.transform="",e))}function lt(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:P(e.placement),variation:ot(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ut(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ut(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var ht={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:lt,data:{}},dt={passive:!0};function ft(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=A(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach((function(t){t.addEventListener("scroll",n.update,dt)})),a&&c.addEventListener("resize",n.update,dt),function(){s&&u.forEach((function(t){t.removeEventListener("scroll",n.update,dt)})),a&&c.removeEventListener("resize",n.update,dt)}}var pt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ft,data:{}},gt={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(t){return t.replace(/left|right|bottom|top/g,(function(t){return gt[t]}))}var vt={start:"end",end:"start"};function yt(t){return t.replace(/start|end/g,(function(t){return vt[t]}))}function bt(t){var e=A(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function _t(t){return V(z(t)).left+bt(t).scrollLeft}function wt(t){var e=A(t),n=z(t),r=e.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+_t(t),y:a}}function Et(t){var e,n=z(t),r=bt(t),i=null==(e=t.ownerDocument)?void 0:e.body,s=M(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+_t(t),c=-r.scrollTop;return"rtl"===$(i||n).direction&&(a+=M(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Tt(t){var e=$(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Ot(t){return["html","body","#document"].indexOf(C(t))>=0?t.ownerDocument.body:N(t)&&Tt(t)?t:Ot(K(t))}function It(t,e){var n;void 0===e&&(e=[]);var r=Ot(t),i=r===(null==(n=t.ownerDocument)?void 0:n.body),s=A(r),o=i?[s].concat(s.visualViewport||[],Tt(r)?r:[]):r,a=e.concat(o);return i?a:a.concat(It(K(o)))}function St(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function kt(t){var e=V(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function Ct(t,e){return e===f?St(wt(t)):x(e)?kt(e):St(Et(z(t)))}function At(t){var e=It(K(t)),n=["absolute","fixed"].indexOf($(t).position)>=0,r=n&&N(t)?X(t):t;return x(r)?e.filter((function(t){return x(t)&&q(t,r)&&"body"!==C(t)})):[]}function xt(t,e,n){var r="clippingParents"===e?At(t):[].concat(e),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(e,n){var r=Ct(t,n);return e.top=M(r.top,e.top),e.right=F(r.right,e.right),e.bottom=F(r.bottom,e.bottom),e.left=M(r.left,e.left),e}),Ct(t,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Nt(t){var e,n=t.reference,r=t.element,c=t.placement,u=c?P(c):null,d=c?ot(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(u){case i:e={x:f,y:n.y-r.height};break;case s:e={x:f,y:n.y+n.height};break;case o:e={x:n.x+n.width,y:p};break;case a:e={x:n.x-r.width,y:p};break;default:e={x:n.x,y:n.y}}var g=u?Y(u):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case l:e[g]=e[g]-(n[m]/2-r[m]/2);break;case h:e[g]=e[g]+(n[m]/2-r[m]/2);break;default:}}return e}function jt(t,e){void 0===e&&(e={});var n=e,r=n.placement,a=void 0===r?t.placement:r,c=n.boundary,l=void 0===c?d:c,h=n.rootBoundary,m=void 0===h?f:h,v=n.elementContext,y=void 0===v?p:v,b=n.altBoundary,_=void 0!==b&&b,w=n.padding,E=void 0===w?0:w,T=tt("number"!==typeof E?E:et(E,u)),O=y===p?g:p,I=t.rects.popper,S=t.elements[_?O:y],k=xt(x(S)?S:S.contextElement||z(t.elements.popper),l,m),C=V(t.elements.reference),A=Nt({reference:C,element:I,strategy:"absolute",placement:a}),N=St(Object.assign({},I,A)),j=y===p?N:C,D={top:k.top-j.top+T.top,bottom:j.bottom-k.bottom+T.bottom,left:k.left-j.left+T.left,right:j.right-k.right+T.right},L=t.modifiersData.offset;if(y===p&&L){var R=L[a];Object.keys(D).forEach((function(t){var e=[o,s].indexOf(t)>=0?1:-1,n=[i,s].indexOf(t)>=0?"y":"x";D[t]+=R[n]*e}))}return D}function Dt(t,e){void 0===e&&(e={});var n=e,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?v:c,h=ot(r),d=h?a?m:m.filter((function(t){return ot(t)===h})):u,f=d.filter((function(t){return l.indexOf(t)>=0}));0===f.length&&(f=d);var p=f.reduce((function(e,n){return e[n]=jt(t,{placement:n,boundary:i,rootBoundary:s,padding:o})[P(n)],e}),{});return Object.keys(p).sort((function(t,e){return p[t]-p[e]}))}function Lt(t){if(P(t)===c)return[];var e=mt(t);return[yt(t),e,yt(e)]}function Rt(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,v=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,_=void 0===b||b,w=n.allowedAutoPlacements,E=e.options.placement,T=P(E),O=T===E,I=p||(O||!_?[mt(E)]:Lt(E)),S=[E].concat(I).reduce((function(t,n){return t.concat(P(n)===c?Dt(e,{placement:n,boundary:m,rootBoundary:v,padding:g,flipVariations:_,allowedAutoPlacements:w}):n)}),[]),k=e.rects.reference,C=e.rects.popper,A=new Map,x=!0,N=S[0],j=0;j<S.length;j++){var D=S[j],L=P(D),R=ot(D)===l,M=[i,s].indexOf(L)>=0,F=M?"width":"height",U=jt(e,{placement:D,boundary:m,rootBoundary:v,altBoundary:y,padding:g}),V=M?R?o:a:R?s:i;k[F]>C[F]&&(V=mt(V));var B=mt(V),q=[];if(h&&q.push(U[L]<=0),f&&q.push(U[V]<=0,U[B]<=0),q.every((function(t){return t}))){N=D,x=!1;break}A.set(D,q)}if(x)for(var $=_?3:1,H=function(t){var e=S.find((function(e){var n=A.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return N=e,"break"},z=$;z>0;z--){var K=H(z);if("break"===K)break}e.placement!==N&&(e.modifiersData[r]._skip=!0,e.placement=N,e.reset=!0)}}var Pt={name:"flip",enabled:!0,phase:"main",fn:Rt,requiresIfExists:["offset"],data:{_skip:!1}};function Mt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Ft(t){return[i,o,s,a].some((function(e){return t[e]>=0}))}function Ut(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=jt(e,{elementContext:"reference"}),a=jt(e,{altBoundary:!0}),c=Mt(o,r),u=Mt(a,i,s),l=Ft(c),h=Ft(u);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Vt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ut};function Bt(t,e,n){var r=P(t),s=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},e,{placement:t})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*s,[a,o].indexOf(r)>=0?{x:l,y:u}:{x:u,y:l}}function qt(t){var e=t.state,n=t.options,r=t.name,i=n.offset,s=void 0===i?[0,0]:i,o=v.reduce((function(t,n){return t[n]=Bt(n,e.rects,s),t}),{}),a=o[e.placement],c=a.x,u=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=o}var $t={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qt};function Ht(t){var e=t.state,n=t.name;e.modifiersData[n]=Nt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var zt={name:"popperOffsets",enabled:!0,phase:"read",fn:Ht,data:{}};function Kt(t){return"x"===t?"y":"x"}function Wt(t){var e=t.state,n=t.options,r=t.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,v=n.tether,y=void 0===v||v,b=n.tetherOffset,_=void 0===b?0:b,w=jt(e,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),E=P(e.placement),T=ot(e.placement),O=!T,I=Y(E),S=Kt(I),k=e.modifiersData.popperOffsets,C=e.rects.reference,A=e.rects.popper,x="function"===typeof _?_(Object.assign({},e.rects,{placement:e.placement})):_,N="number"===typeof x?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),j=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,D={x:0,y:0};if(k){if(u){var L,R="y"===I?i:a,U="y"===I?s:o,V="y"===I?"height":"width",q=k[I],$=q+w[R],H=q-w[U],z=y?-A[V]/2:0,K=T===l?C[V]:A[V],W=T===l?-A[V]:-C[V],G=e.elements.arrow,tt=y&&G?B(G):{width:0,height:0},et=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Z(),nt=et[R],rt=et[U],it=Q(0,C[V],tt[V]),st=O?C[V]/2-z-it-nt-N.mainAxis:K-it-nt-N.mainAxis,at=O?-C[V]/2+z+it+rt+N.mainAxis:W+it+rt+N.mainAxis,ct=e.elements.arrow&&X(e.elements.arrow),ut=ct?"y"===I?ct.clientTop||0:ct.clientLeft||0:0,lt=null!=(L=null==j?void 0:j[I])?L:0,ht=q+st-lt-ut,dt=q+at-lt,ft=Q(y?F($,ht):$,q,y?M(H,dt):H);k[I]=ft,D[I]=ft-q}if(d){var pt,gt="x"===I?i:a,mt="x"===I?s:o,vt=k[S],yt="y"===S?"height":"width",bt=vt+w[gt],_t=vt-w[mt],wt=-1!==[i,a].indexOf(E),Et=null!=(pt=null==j?void 0:j[S])?pt:0,Tt=wt?bt:vt-C[yt]-A[yt]-Et+N.altAxis,Ot=wt?vt+C[yt]+A[yt]-Et-N.altAxis:_t,It=y&&wt?J(Tt,vt,Ot):Q(y?Tt:bt,vt,y?Ot:_t);k[S]=It,D[S]=It-vt}e.modifiersData[r]=D}}var Gt={name:"preventOverflow",enabled:!0,phase:"main",fn:Wt,requiresIfExists:["offset"]};function Xt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Yt(t){return t!==A(t)&&N(t)?Xt(t):bt(t)}function Qt(t){var e=t.getBoundingClientRect(),n=U(e.width)/t.offsetWidth||1,r=U(e.height)/t.offsetHeight||1;return 1!==n||1!==r}function Jt(t,e,n){void 0===n&&(n=!1);var r=N(e),i=N(e)&&Qt(e),s=z(e),o=V(t,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==C(e)||Tt(s))&&(a=Yt(e)),N(e)?(c=V(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):s&&(c.x=_t(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Zt(t){var e=new Map,n=new Set,r=[];function i(t){n.add(t.name);var s=[].concat(t.requires||[],t.requiresIfExists||[]);s.forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&i(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),r}function te(t){var e=Zt(t);return k.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}function ee(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}function ne(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var re={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function se(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,i=e.defaultOptions,s=void 0===i?re:i;return function(t,e,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},re,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:x(t)?It(t):t.contextElement?It(t.contextElement):[],popper:It(e)};var a=te(ne([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(t){return t.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var t=i.elements,e=t.reference,n=t.popper;if(ie(e,n)){i.rects={reference:Jt(e,X(n),"fixed"===i.options.strategy),popper:B(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(t){return i.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:ee((function(){return new Promise((function(t){c.forceUpdate(),t(i)}))})),destroy:function(){l(),a=!0}};if(!ie(t,e))return c;function u(){i.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,s=t.effect;if("function"===typeof s){var a=s({state:i,name:e,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(t){return t()})),o=[]}return c.setOptions(n).then((function(t){!a&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var oe=se(),ae=[pt,zt,ht,R,$t,Pt,Gt,st,Vt],ce=se({defaultModifiers:ae}),ue=[pt,zt,ht,R],le=se({defaultModifiers:ue});
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const he=1e6,de=1e3,fe="transitionend",pe=t=>null===t||void 0===t?""+t:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),ge=t=>{do{t+=Math.floor(Math.random()*he)}while(document.getElementById(t));return t},me=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),e=n&&"#"!==n?n.trim():null}return e},ve=t=>{const e=me(t);return e&&document.querySelector(e)?e:null},ye=t=>{const e=me(t);return e?document.querySelector(e):null},be=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const r=Number.parseFloat(e),i=Number.parseFloat(n);return r||i?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*de):0},_e=t=>{t.dispatchEvent(new Event(fe))},we=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),Ee=t=>we(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,Te=(t,e,n)=>{Object.keys(n).forEach(r=>{const i=n[r],s=e[r],o=s&&we(s)?"element":pe(s);if(!new RegExp(i).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)})},Oe=t=>!(!we(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),Ie=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),Se=t=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?Se(t.parentNode):null},ke=()=>{},Ce=t=>{t.offsetHeight},Ae=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},xe=[],Ne=t=>{"loading"===document.readyState?(xe.length||document.addEventListener("DOMContentLoaded",()=>{xe.forEach(t=>t())}),xe.push(t)):t()},je=()=>"rtl"===document.documentElement.dir,De=t=>{Ne(()=>{const e=Ae();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}})},Le=t=>{"function"===typeof t&&t()},Re=(t,e,n=!0)=>{if(!n)return void Le(t);const r=5,i=be(e)+r;let s=!1;const o=({target:n})=>{n===e&&(s=!0,e.removeEventListener(fe,o),Le(t))};e.addEventListener(fe,o),setTimeout(()=>{s||_e(e)},i)},Pe=(t,e,n,r)=>{let i=t.indexOf(e);if(-1===i)return t[!n&&r?t.length-1:0];const s=t.length;return i+=n?1:-1,r&&(i=(i+s)%s),t[Math.max(0,Math.min(i,s-1))]},Me=/[^.]*(?=\..*)\.|.*/,Fe=/\..*/,Ue=/::\d+$/,Ve={};let Be=1;const qe={mouseenter:"mouseover",mouseleave:"mouseout"},$e=/^(mouseenter|mouseleave)/i,He=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ze(t,e){return e&&`${e}::${Be++}`||t.uidEvent||Be++}function Ke(t){const e=ze(t);return t.uidEvent=e,Ve[e]=Ve[e]||{},Ve[e]}function We(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&en.off(t,r.type,e),e.apply(t,[r])}}function Ge(t,e,n){return function r(i){const s=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&en.off(t,i.type,e,n),n.apply(o,[i]);return null}}function Xe(t,e,n=null){const r=Object.keys(t);for(let i=0,s=r.length;i<s;i++){const s=t[r[i]];if(s.originalHandler===e&&s.delegationSelector===n)return s}return null}function Ye(t,e,n){const r="string"===typeof e,i=r?n:e;let s=tn(t);const o=He.has(s);return o||(s=t),[r,i,s]}function Qe(t,e,n,r,i){if("string"!==typeof e||!t)return;if(n||(n=r,r=null),$e.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r?r=t(r):n=t(n)}const[s,o,a]=Ye(e,n,r),c=Ke(t),u=c[a]||(c[a]={}),l=Xe(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=ze(o,e.replace(Me,"")),d=s?Ge(t,n,r):We(t,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,u[h]=d,t.addEventListener(a,d,s)}function Je(t,e,n,r,i){const s=Xe(e[n],r,i);s&&(t.removeEventListener(n,s,Boolean(i)),delete e[n][s.uidEvent])}function Ze(t,e,n,r){const i=e[n]||{};Object.keys(i).forEach(s=>{if(s.includes(r)){const r=i[s];Je(t,e,n,r.originalHandler,r.delegationSelector)}})}function tn(t){return t=t.replace(Fe,""),qe[t]||t}const en={on(t,e,n,r){Qe(t,e,n,r,!1)},one(t,e,n,r){Qe(t,e,n,r,!0)},off(t,e,n,r){if("string"!==typeof e||!t)return;const[i,s,o]=Ye(e,n,r),a=o!==e,c=Ke(t),u=e.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void Je(t,c,o,s,i?n:null)}u&&Object.keys(c).forEach(n=>{Ze(t,c,n,e.slice(1))});const l=c[o]||{};Object.keys(l).forEach(n=>{const r=n.replace(Ue,"");if(!a||e.includes(r)){const e=l[n];Je(t,c,o,e.originalHandler,e.delegationSelector)}})},trigger(t,e,n){if("string"!==typeof e||!t)return null;const r=Ae(),i=tn(e),s=e!==i,o=He.has(i);let a,c=!0,u=!0,l=!1,h=null;return s&&r&&(a=r.Event(e,n),r(t).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(e,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach(t=>{Object.defineProperty(h,t,{get(){return n[t]}})}),l&&h.preventDefault(),u&&t.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},nn=new Map,rn={set(t,e,n){nn.has(t)||nn.set(t,new Map);const r=nn.get(t);r.has(e)||0===r.size?r.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(t,e){return nn.has(t)&&nn.get(t).get(e)||null},remove(t,e){if(!nn.has(t))return;const n=nn.get(t);n.delete(e),0===n.size&&nn.delete(t)}},sn="5.1.3";class on{constructor(t){t=Ee(t),t&&(this._element=t,rn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){rn.remove(this._element,this.constructor.DATA_KEY),en.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(t=>{this[t]=null})}_queueCallback(t,e,n=!0){Re(t,e,n)}static getInstance(t){return rn.get(Ee(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return sn}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const an=(t,e="hide")=>{const n="click.dismiss"+t.EVENT_KEY,r=t.NAME;en.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Ie(this))return;const i=ye(this)||this.closest("."+r),s=t.getOrCreateInstance(i);s[e]()}))},cn="alert",un="bs.alert",ln="."+un,hn="close"+ln,dn="closed"+ln,fn="fade",pn="show";class gn extends on{static get NAME(){return cn}close(){const t=en.trigger(this._element,hn);if(t.defaultPrevented)return;this._element.classList.remove(pn);const e=this._element.classList.contains(fn);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),en.trigger(this._element,dn),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=gn.getOrCreateInstance(this);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}an(gn,"close"),De(gn);const mn="button",vn="bs.button",yn="."+vn,bn=".data-api",_n="active",wn='[data-bs-toggle="button"]',En=`click${yn}${bn}`;class Tn extends on{static get NAME(){return mn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(_n))}static jQueryInterface(t){return this.each((function(){const e=Tn.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function On(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function In(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}en.on(document,En,wn,t=>{t.preventDefault();const e=t.target.closest(wn),n=Tn.getOrCreateInstance(e);n.toggle()}),De(Tn);const Sn={setDataAttribute(t,e,n){t.setAttribute("data-bs-"+In(e),n)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+In(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=On(t.dataset[n])}),e},getDataAttribute(t,e){return On(t.getAttribute("data-bs-"+In(e)))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}},kn=3,Cn={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(t=>t.matches(e))},parents(t,e){const n=[];let r=t.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==kn)r.matches(e)&&n.push(r),r=r.parentNode;return n},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>t+':not([tabindex^="-"])').join(", ");return this.find(e,t).filter(t=>!Ie(t)&&Oe(t))}},An="carousel",xn="bs.carousel",Nn="."+xn,jn=".data-api",Dn="ArrowLeft",Ln="ArrowRight",Rn=500,Pn=40,Mn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Fn={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Un="next",Vn="prev",Bn="left",qn="right",$n={[Dn]:qn,[Ln]:Bn},Hn="slide"+Nn,zn="slid"+Nn,Kn="keydown"+Nn,Wn="mouseenter"+Nn,Gn="mouseleave"+Nn,Xn="touchstart"+Nn,Yn="touchmove"+Nn,Qn="touchend"+Nn,Jn="pointerdown"+Nn,Zn="pointerup"+Nn,tr="dragstart"+Nn,er=`load${Nn}${jn}`,nr=`click${Nn}${jn}`,rr="carousel",ir="active",sr="slide",or="carousel-item-end",ar="carousel-item-start",cr="carousel-item-next",ur="carousel-item-prev",lr="pointer-event",hr=".active",dr=".active.carousel-item",fr=".carousel-item",pr=".carousel-item img",gr=".carousel-item-next, .carousel-item-prev",mr=".carousel-indicators",vr="[data-bs-target]",yr="[data-bs-slide], [data-bs-slide-to]",br='[data-bs-ride="carousel"]',_r="touch",wr="pen";class Er extends on{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=Cn.findOne(mr,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Mn}static get NAME(){return An}next(){this._slide(Un)}nextWhenVisible(){!document.hidden&&Oe(this._element)&&this.next()}prev(){this._slide(Vn)}pause(t){t||(this._isPaused=!0),Cn.findOne(gr,this._element)&&(_e(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=Cn.findOne(dr,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void en.one(this._element,zn,()=>this.to(t));if(e===t)return this.pause(),void this.cycle();const n=t>e?Un:Vn;this._slide(n,this._items[t])}_getConfig(t){return t={...Mn,...Sn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(An,t,Fn),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=Pn)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?qn:Bn)}_addEventListeners(){this._config.keyboard&&en.on(this._element,Kn,t=>this._keydown(t)),"hover"===this._config.pause&&(en.on(this._element,Wn,t=>this.pause(t)),en.on(this._element,Gn,t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&(t.pointerType===wr||t.pointerType===_r),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},n=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},r=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),Rn+this._config.interval))};Cn.find(pr,this._element).forEach(t=>{en.on(t,tr,t=>t.preventDefault())}),this._pointerEvent?(en.on(this._element,Jn,t=>e(t)),en.on(this._element,Zn,t=>r(t)),this._element.classList.add(lr)):(en.on(this._element,Xn,t=>e(t)),en.on(this._element,Yn,t=>n(t)),en.on(this._element,Qn,t=>r(t)))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=$n[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?Cn.find(fr,t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const n=t===Un;return Pe(this._items,e,n,this._config.wrap)}_triggerSlideEvent(t,e){const n=this._getItemIndex(t),r=this._getItemIndex(Cn.findOne(dr,this._element));return en.trigger(this._element,Hn,{relatedTarget:t,direction:e,from:r,to:n})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=Cn.findOne(hr,this._indicatorsElement);e.classList.remove(ir),e.removeAttribute("aria-current");const n=Cn.find(vr,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){n[r].classList.add(ir),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||Cn.findOne(dr,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const n=this._directionToOrder(t),r=Cn.findOne(dr,this._element),i=this._getItemIndex(r),s=e||this._getItemByOrder(n,r),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Un,u=c?ar:or,l=c?cr:ur,h=this._orderToDirection(n);if(s&&s.classList.contains(ir))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!r||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{en.trigger(this._element,zn,{relatedTarget:s,direction:h,from:i,to:o})};if(this._element.classList.contains(sr)){s.classList.add(l),Ce(s),r.classList.add(u),s.classList.add(u);const t=()=>{s.classList.remove(u,l),s.classList.add(ir),r.classList.remove(ir,l,u),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(t,r,!0)}else r.classList.remove(ir),s.classList.add(ir),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(t){return[qn,Bn].includes(t)?je()?t===Bn?Vn:Un:t===Bn?Un:Vn:t}_orderToDirection(t){return[Un,Vn].includes(t)?je()?t===Vn?Bn:qn:t===Vn?qn:Bn:t}static carouselInterface(t,e){const n=Er.getOrCreateInstance(t,e);let{_config:r}=n;"object"===typeof e&&(r={...r,...e});const i="string"===typeof e?e:r.slide;if("number"===typeof e)n.to(e);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(t){return this.each((function(){Er.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=ye(this);if(!e||!e.classList.contains(rr))return;const n={...Sn.getDataAttributes(e),...Sn.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),Er.carouselInterface(e,n),r&&Er.getInstance(e).to(r),t.preventDefault()}}en.on(document,nr,yr,Er.dataApiClickHandler),en.on(window,er,()=>{const t=Cn.find(br);for(let e=0,n=t.length;e<n;e++)Er.carouselInterface(t[e],Er.getInstance(t[e]))}),De(Er);const Tr="collapse",Or="bs.collapse",Ir="."+Or,Sr=".data-api",kr={toggle:!0,parent:null},Cr={toggle:"boolean",parent:"(null|element)"},Ar="show"+Ir,xr="shown"+Ir,Nr="hide"+Ir,jr="hidden"+Ir,Dr=`click${Ir}${Sr}`,Lr="show",Rr="collapse",Pr="collapsing",Mr="collapsed",Fr=`:scope .${Rr} .${Rr}`,Ur="collapse-horizontal",Vr="width",Br="height",qr=".collapse.show, .collapse.collapsing",$r='[data-bs-toggle="collapse"]';class Hr extends on{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const n=Cn.find($r);for(let r=0,i=n.length;r<i;r++){const t=n[r],e=ve(t),i=Cn.find(e).filter(t=>t===this._element);null!==e&&i.length&&(this._selector=e,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return kr}static get NAME(){return Tr}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=Cn.find(Fr,this._config.parent);e=Cn.find(qr,this._config.parent).filter(e=>!t.includes(e))}const n=Cn.findOne(this._selector);if(e.length){const r=e.find(t=>n!==t);if(t=r?Hr.getInstance(r):null,t&&t._isTransitioning)return}const r=en.trigger(this._element,Ar);if(r.defaultPrevented)return;e.forEach(e=>{n!==e&&Hr.getOrCreateInstance(e,{toggle:!1}).hide(),t||rn.set(e,Or,null)});const i=this._getDimension();this._element.classList.remove(Rr),this._element.classList.add(Pr),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Pr),this._element.classList.add(Rr,Lr),this._element.style[i]="",en.trigger(this._element,xr)},o=i[0].toUpperCase()+i.slice(1),a="scroll"+o;this._queueCallback(s,this._element,!0),this._element.style[i]=this._element[a]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;const t=en.trigger(this._element,Nr);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",Ce(this._element),this._element.classList.add(Pr),this._element.classList.remove(Rr,Lr);const n=this._triggerArray.length;for(let i=0;i<n;i++){const t=this._triggerArray[i],e=ye(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Pr),this._element.classList.add(Rr),en.trigger(this._element,jr)};this._element.style[e]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Lr)}_getConfig(t){return t={...kr,...Sn.getDataAttributes(this._element),...t},t.toggle=Boolean(t.toggle),t.parent=Ee(t.parent),Te(Tr,t,Cr),t}_getDimension(){return this._element.classList.contains(Ur)?Vr:Br}_initializeChildren(){if(!this._config.parent)return;const t=Cn.find(Fr,this._config.parent);Cn.find($r,this._config.parent).filter(e=>!t.includes(e)).forEach(t=>{const e=ye(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))})}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach(t=>{e?t.classList.remove(Mr):t.classList.add(Mr),t.setAttribute("aria-expanded",e)})}static jQueryInterface(t){return this.each((function(){const e={};"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const n=Hr.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t]()}}))}}en.on(document,Dr,$r,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=ve(this),n=Cn.find(e);n.forEach(t=>{Hr.getOrCreateInstance(t,{toggle:!1}).toggle()})})),De(Hr);const zr="dropdown",Kr="bs.dropdown",Wr="."+Kr,Gr=".data-api",Xr="Escape",Yr="Space",Qr="Tab",Jr="ArrowUp",Zr="ArrowDown",ti=2,ei=new RegExp(`${Jr}|${Zr}|${Xr}`),ni="hide"+Wr,ri="hidden"+Wr,ii="show"+Wr,si="shown"+Wr,oi=`click${Wr}${Gr}`,ai=`keydown${Wr}${Gr}`,ci=`keyup${Wr}${Gr}`,ui="show",li="dropup",hi="dropend",di="dropstart",fi="navbar",pi='[data-bs-toggle="dropdown"]',gi=".dropdown-menu",mi=".navbar-nav",vi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",yi=je()?"top-end":"top-start",bi=je()?"top-start":"top-end",_i=je()?"bottom-end":"bottom-start",wi=je()?"bottom-start":"bottom-end",Ei=je()?"left-start":"right-start",Ti=je()?"right-start":"left-start",Oi={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ii={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Si extends on{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Oi}static get DefaultType(){return Ii}static get NAME(){return zr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ie(this._element)||this._isShown(this._menu))return;const t={relatedTarget:this._element},e=en.trigger(this._element,ii,t);if(e.defaultPrevented)return;const n=Si.getParentFromElement(this._element);this._inNavbar?Sn.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(mi)&&[].concat(...document.body.children).forEach(t=>en.on(t,"mouseover",ke)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ui),this._element.classList.add(ui),en.trigger(this._element,si,t)}hide(){if(Ie(this._element)||!this._isShown(this._menu))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){const e=en.trigger(this._element,ni,t);e.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>en.off(t,"mouseover",ke)),this._popper&&this._popper.destroy(),this._menu.classList.remove(ui),this._element.classList.remove(ui),this._element.setAttribute("aria-expanded","false"),Sn.removeDataAttribute(this._menu,"popper"),en.trigger(this._element,ri,t))}_getConfig(t){if(t={...this.constructor.Default,...Sn.getDataAttributes(this._element),...t},Te(zr,t,this.constructor.DefaultType),"object"===typeof t.reference&&!we(t.reference)&&"function"!==typeof t.reference.getBoundingClientRect)throw new TypeError(zr.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_createPopper(t){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:we(this._config.reference)?e=Ee(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const n=this._getPopperConfig(),i=n.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=ce(e,this._menu,n),i&&Sn.setDataAttribute(this._menu,"popper","static")}_isShown(t=this._element){return t.classList.contains(ui)}_getMenuElement(){return Cn.next(this._element,gi)[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains(hi))return Ei;if(t.classList.contains(di))return Ti;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains(li)?e?bi:yi:e?wi:_i}_detectNavbar(){return null!==this._element.closest("."+fi)}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"===typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=Cn.find(vi,this._menu).filter(Oe);n.length&&Pe(n,e,t===Zr,!n.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Si.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(t&&(t.button===ti||"keyup"===t.type&&t.key!==Qr))return;const e=Cn.find(pi);for(let n=0,r=e.length;n<r;n++){const r=Si.getInstance(e[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(t){const e=t.composedPath(),n=e.includes(r._menu);if(e.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(t.target)&&("keyup"===t.type&&t.key===Qr||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;"click"===t.type&&(i.clickEvent=t)}r._completeHide(i)}}static getParentFromElement(t){return ye(t)||t.parentNode}static dataApiKeydownHandler(t){if(/input|textarea/i.test(t.target.tagName)?t.key===Yr||t.key!==Xr&&(t.key!==Zr&&t.key!==Jr||t.target.closest(gi)):!ei.test(t.key))return;const e=this.classList.contains(ui);if(!e&&t.key===Xr)return;if(t.preventDefault(),t.stopPropagation(),Ie(this))return;const n=this.matches(pi)?this:Cn.prev(this,pi)[0],r=Si.getOrCreateInstance(n);if(t.key!==Xr)return t.key===Jr||t.key===Zr?(e||r.show(),void r._selectMenuItem(t)):void(e&&t.key!==Yr||Si.clearMenus());r.hide()}}en.on(document,ai,pi,Si.dataApiKeydownHandler),en.on(document,ai,gi,Si.dataApiKeydownHandler),en.on(document,oi,Si.clearMenus),en.on(document,ci,Si.clearMenus),en.on(document,oi,pi,(function(t){t.preventDefault(),Si.getOrCreateInstance(this).toggle()})),De(Si);const ki=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ci=".sticky-top";class Ai{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(ki,"paddingRight",e=>e+t),this._setElementAttributes(Ci,"marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const r=this.getWidth(),i=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+r)return;this._saveInitialAttribute(t,e);const i=window.getComputedStyle(t)[e];t.style[e]=n(Number.parseFloat(i))+"px"};this._applyManipulationCallback(t,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(ki,"paddingRight"),this._resetElementAttributes(Ci,"marginRight")}_saveInitialAttribute(t,e){const n=t.style[e];n&&Sn.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=t=>{const n=Sn.getDataAttribute(t,e);"undefined"===typeof n?t.style.removeProperty(e):(Sn.removeDataAttribute(t,e),t.style[e]=n)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){we(t)?e(t):Cn.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const xi={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ni={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},ji="backdrop",Di="fade",Li="show",Ri="mousedown.bs."+ji;class Pi{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&Ce(this._getElement()),this._getElement().classList.add(Li),this._emulateAnimation(()=>{Le(t)})):Le(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(Li),this._emulateAnimation(()=>{this.dispose(),Le(t)})):Le(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Di),this._element=t}return this._element}_getConfig(t){return t={...xi,..."object"===typeof t?t:{}},t.rootElement=Ee(t.rootElement),Te(ji,t,Ni),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),en.on(this._getElement(),Ri,()=>{Le(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(en.off(this._element,Ri),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){Re(t,this._getElement(),this._config.isAnimated)}}const Mi={trapElement:null,autofocus:!0},Fi={trapElement:"element",autofocus:"boolean"},Ui="focustrap",Vi="bs.focustrap",Bi="."+Vi,qi="focusin"+Bi,$i="keydown.tab"+Bi,Hi="Tab",zi="forward",Ki="backward";class Wi{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),en.off(document,Bi),en.on(document,qi,t=>this._handleFocusin(t)),en.on(document,$i,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,en.off(document,Bi))}_handleFocusin(t){const{target:e}=t,{trapElement:n}=this._config;if(e===document||e===n||n.contains(e))return;const r=Cn.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===Ki?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===Hi&&(this._lastTabNavDirection=t.shiftKey?Ki:zi)}_getConfig(t){return t={...Mi,..."object"===typeof t?t:{}},Te(Ui,t,Fi),t}}const Gi="modal",Xi="bs.modal",Yi="."+Xi,Qi=".data-api",Ji="Escape",Zi={backdrop:!0,keyboard:!0,focus:!0},ts={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},es="hide"+Yi,ns="hidePrevented"+Yi,rs="hidden"+Yi,is="show"+Yi,ss="shown"+Yi,os="resize"+Yi,as="click.dismiss"+Yi,cs="keydown.dismiss"+Yi,us="mouseup.dismiss"+Yi,ls="mousedown.dismiss"+Yi,hs=`click${Yi}${Qi}`,ds="modal-open",fs="fade",ps="show",gs="modal-static",ms=".modal.show",vs=".modal-dialog",ys=".modal-body",bs='[data-bs-toggle="modal"]';class _s extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._dialog=Cn.findOne(vs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ai}static get Default(){return Zi}static get NAME(){return Gi}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=en.trigger(this._element,is,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ds),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),en.on(this._dialog,ls,()=>{en.one(this._element,us,t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(){if(!this._isShown||this._isTransitioning)return;const t=en.trigger(this._element,es);if(t.defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ps),en.off(this._element,as),en.off(this._dialog,ls),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(t=>en.off(t,Yi)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Pi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Wi({trapElement:this._element})}_getConfig(t){return t={...Zi,...Sn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(Gi,t,ts),t}_showElement(t){const e=this._isAnimated(),n=Cn.findOne(ys,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),e&&Ce(this._element),this._element.classList.add(ps);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,en.trigger(this._element,ss,{relatedTarget:t})};this._queueCallback(r,this._dialog,e)}_setEscapeEvent(){this._isShown?en.on(this._element,cs,t=>{this._config.keyboard&&t.key===Ji?(t.preventDefault(),this.hide()):this._config.keyboard||t.key!==Ji||this._triggerBackdropTransition()}):en.off(this._element,cs)}_setResizeEvent(){this._isShown?en.on(window,os,()=>this._adjustDialog()):en.off(window,os)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ds),this._resetAdjustments(),this._scrollBar.reset(),en.trigger(this._element,rs)})}_showBackdrop(t){en.on(this._element,as,t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains(fs)}_triggerBackdropTransition(){const t=en.trigger(this._element,ns);if(t.defaultPrevented)return;const{classList:e,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||e.contains(gs)||(i||(r.overflowY="hidden"),e.add(gs),this._queueCallback(()=>{e.remove(gs),i||this._queueCallback(()=>{r.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;(!n&&t&&!je()||n&&!t&&je())&&(this._element.style.paddingLeft=e+"px"),(n&&!t&&!je()||!n&&t&&je())&&(this._element.style.paddingRight=e+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const n=_s.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof n[t])throw new TypeError(`No method named "${t}"`);n[t](e)}}))}}en.on(document,hs,bs,(function(t){const e=ye(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),en.one(e,is,t=>{t.defaultPrevented||en.one(e,rs,()=>{Oe(this)&&this.focus()})});const n=Cn.findOne(ms);n&&_s.getInstance(n).hide();const r=_s.getOrCreateInstance(e);r.toggle(this)})),an(_s),De(_s);const ws="offcanvas",Es="bs.offcanvas",Ts="."+Es,Os=".data-api",Is=`load${Ts}${Os}`,Ss="Escape",ks={backdrop:!0,keyboard:!0,scroll:!1},Cs={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},As="show",xs="offcanvas-backdrop",Ns=".offcanvas.show",js="show"+Ts,Ds="shown"+Ts,Ls="hide"+Ts,Rs="hidden"+Ts,Ps=`click${Ts}${Os}`,Ms="keydown.dismiss"+Ts,Fs='[data-bs-toggle="offcanvas"]';class Us extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return ws}static get Default(){return ks}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=en.trigger(this._element,js,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Ai).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(As);const n=()=>{this._config.scroll||this._focustrap.activate(),en.trigger(this._element,Ds,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const t=en.trigger(this._element,Ls);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(As),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ai).reset(),en.trigger(this._element,Rs)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...ks,...Sn.getDataAttributes(this._element),..."object"===typeof t?t:{}},Te(ws,t,Cs),t}_initializeBackDrop(){return new Pi({className:xs,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Wi({trapElement:this._element})}_addEventListeners(){en.on(this._element,Ms,t=>{this._config.keyboard&&t.key===Ss&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=Us.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}en.on(document,Ps,Fs,(function(t){const e=ye(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ie(this))return;en.one(e,Rs,()=>{Oe(this)&&this.focus()});const n=Cn.findOne(Ns);n&&n!==e&&Us.getInstance(n).hide();const r=Us.getOrCreateInstance(e);r.toggle(this)})),en.on(window,Is,()=>Cn.find(Ns).forEach(t=>Us.getOrCreateInstance(t).show())),an(Us),De(Us);const Vs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Bs=/^aria-[\w-]*$/i,qs=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,$s=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Hs=(t,e)=>{const n=t.nodeName.toLowerCase();if(e.includes(n))return!Vs.has(n)||Boolean(qs.test(t.nodeValue)||$s.test(t.nodeValue));const r=e.filter(t=>t instanceof RegExp);for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},zs={"*":["class","dir","id","lang","role",Bs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Ks(t,e,n){if(!t.length)return t;if(n&&"function"===typeof n)return n(t);const r=new window.DOMParser,i=r.parseFromString(t,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const t=s[o],n=t.nodeName.toLowerCase();if(!Object.keys(e).includes(n)){t.remove();continue}const r=[].concat(...t.attributes),i=[].concat(e["*"]||[],e[n]||[]);r.forEach(e=>{Hs(e,i)||t.removeAttribute(e.nodeName)})}return i.body.innerHTML}const Ws="tooltip",Gs="bs.tooltip",Xs="."+Gs,Ys="bs-tooltip",Qs=new Set(["sanitize","allowList","sanitizeFn"]),Js={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Zs={AUTO:"auto",TOP:"top",RIGHT:je()?"left":"right",BOTTOM:"bottom",LEFT:je()?"right":"left"},to={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:zs,popperConfig:null},eo={HIDE:"hide"+Xs,HIDDEN:"hidden"+Xs,SHOW:"show"+Xs,SHOWN:"shown"+Xs,INSERTED:"inserted"+Xs,CLICK:"click"+Xs,FOCUSIN:"focusin"+Xs,FOCUSOUT:"focusout"+Xs,MOUSEENTER:"mouseenter"+Xs,MOUSELEAVE:"mouseleave"+Xs},no="fade",ro="modal",io="show",so="show",oo="out",ao=".tooltip-inner",co="."+ro,uo="hide.bs.modal",lo="hover",ho="focus",fo="click",po="manual";class go extends on{constructor(t,e){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return to}static get NAME(){return Ws}static get Event(){return eo}static get DefaultType(){return Js}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains(io))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),en.off(this._element.closest(co),uo,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=en.trigger(this._element,this.constructor.Event.SHOW),e=Se(this._element),n=null===e?this._element.ownerDocument.documentElement.contains(this._element):e.contains(this._element);if(t.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ao).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),i=ge(this.constructor.NAME);r.setAttribute("id",i),this._element.setAttribute("aria-describedby",i),this._config.animation&&r.classList.add(no);const s="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,o=this._getAttachment(s);this._addAttachmentClass(o);const{container:a}=this._config;rn.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(r),en.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ce(this._element,r,this._getPopperConfig(o)),r.classList.add(io);const c=this._resolvePossibleFunction(this._config.customClass);c&&r.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{en.on(t,"mouseover",ke)});const u=()=>{const t=this._hoverState;this._hoverState=null,en.trigger(this._element,this.constructor.Event.SHOWN),t===oo&&this._leave(null,this)},l=this.tip.classList.contains(no);this._queueCallback(u,this.tip,l)}hide(){if(!this._popper)return;const t=this.getTipElement(),e=()=>{this._isWithActiveTrigger()||(this._hoverState!==so&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),en.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=en.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;t.classList.remove(io),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>en.off(t,"mouseover",ke)),this._activeTrigger[fo]=!1,this._activeTrigger[ho]=!1,this._activeTrigger[lo]=!1;const r=this.tip.classList.contains(no);this._queueCallback(e,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");t.innerHTML=this._config.template;const e=t.children[0];return this.setContent(e),e.classList.remove(no,io),this.tip=e,this.tip}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),ao)}_sanitizeAndSetContent(t,e,n){const r=Cn.findOne(n,t);e||!r?this.setElementContent(r,e):r.remove()}setElementContent(t,e){if(null!==t)return we(e)?(e=Ee(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.append(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Ks(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){const t=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(t)}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){return e||this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:t}=this._config;return"string"===typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"===typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"===typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)}_getAttachment(t){return Zs[t.toUpperCase()]}_setListeners(){const t=this._config.trigger.split(" ");t.forEach(t=>{if("click"===t)en.on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if(t!==po){const e=t===lo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=t===lo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;en.on(this._element,e,this._config.selector,t=>this._enter(t)),en.on(this._element,n,this._config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},en.on(this._element.closest(co),uo,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?ho:lo]=!0),e.getTipElement().classList.contains(io)||e._hoverState===so?e._hoverState=so:(clearTimeout(e._timeout),e._hoverState=so,e._config.delay&&e._config.delay.show?e._timeout=setTimeout(()=>{e._hoverState===so&&e.show()},e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?ho:lo]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=oo,e._config.delay&&e._config.delay.hide?e._timeout=setTimeout(()=>{e._hoverState===oo&&e.hide()},e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=Sn.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{Qs.has(t)&&delete e[t]}),t={...this.constructor.Default,...e,..."object"===typeof t&&t?t:{}},t.container=!1===t.container?document.body:Ee(t.container),"number"===typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"===typeof t.title&&(t.title=t.title.toString()),"number"===typeof t.content&&(t.content=t.content.toString()),Te(Ws,t,this.constructor.DefaultType),t.sanitize&&(t.template=Ks(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=t.getAttribute("class").match(e);null!==n&&n.length>0&&n.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_getBasicClassPrefix(){return Ys}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(t){return this.each((function(){const e=go.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}De(go);const mo="popover",vo="bs.popover",yo="."+vo,bo="bs-popover",_o={...go.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},wo={...go.DefaultType,content:"(string|element|function)"},Eo={HIDE:"hide"+yo,HIDDEN:"hidden"+yo,SHOW:"show"+yo,SHOWN:"shown"+yo,INSERTED:"inserted"+yo,CLICK:"click"+yo,FOCUSIN:"focusin"+yo,FOCUSOUT:"focusout"+yo,MOUSEENTER:"mouseenter"+yo,MOUSELEAVE:"mouseleave"+yo},To=".popover-header",Oo=".popover-body";class Io extends go{static get Default(){return _o}static get NAME(){return mo}static get Event(){return Eo}static get DefaultType(){return wo}isWithContent(){return this.getTitle()||this._getContent()}setContent(t){this._sanitizeAndSetContent(t,this.getTitle(),To),this._sanitizeAndSetContent(t,this._getContent(),Oo)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return bo}static jQueryInterface(t){return this.each((function(){const e=Io.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}De(Io);const So="scrollspy",ko="bs.scrollspy",Co="."+ko,Ao=".data-api",xo={offset:10,method:"auto",target:""},No={offset:"number",method:"string",target:"(string|element)"},jo="activate"+Co,Do="scroll"+Co,Lo=`load${Co}${Ao}`,Ro="dropdown-item",Po="active",Mo='[data-bs-spy="scroll"]',Fo=".nav, .list-group",Uo=".nav-link",Vo=".nav-item",Bo=".list-group-item",qo=`${Uo}, ${Bo}, .${Ro}`,$o=".dropdown",Ho=".dropdown-toggle",zo="offset",Ko="position";class Wo extends on{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,en.on(this._scrollElement,Do,()=>this._process()),this.refresh(),this._process()}static get Default(){return xo}static get NAME(){return So}refresh(){const t=this._scrollElement===this._scrollElement.window?zo:Ko,e="auto"===this._config.method?t:this._config.method,n=e===Ko?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=Cn.find(qo,this._config.target);r.map(t=>{const r=ve(t),i=r?Cn.findOne(r):null;if(i){const t=i.getBoundingClientRect();if(t.width||t.height)return[Sn[e](i).top+n,r]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){en.off(this._scrollElement,Co),super.dispose()}_getConfig(t){return t={...xo,...Sn.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},t.target=Ee(t.target)||document.documentElement,Te(So,t,No),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;){const n=this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&("undefined"===typeof this._offsets[e+1]||t<this._offsets[e+1]);n&&this._activate(this._targets[e])}}}_activate(t){this._activeTarget=t,this._clear();const e=qo.split(",").map(e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`),n=Cn.findOne(e.join(","),this._config.target);n.classList.add(Po),n.classList.contains(Ro)?Cn.findOne(Ho,n.closest($o)).classList.add(Po):Cn.parents(n,Fo).forEach(t=>{Cn.prev(t,`${Uo}, ${Bo}`).forEach(t=>t.classList.add(Po)),Cn.prev(t,Vo).forEach(t=>{Cn.children(t,Uo).forEach(t=>t.classList.add(Po))})}),en.trigger(this._scrollElement,jo,{relatedTarget:t})}_clear(){Cn.find(qo,this._config.target).filter(t=>t.classList.contains(Po)).forEach(t=>t.classList.remove(Po))}static jQueryInterface(t){return this.each((function(){const e=Wo.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}en.on(window,Lo,()=>{Cn.find(Mo).forEach(t=>new Wo(t))}),De(Wo);const Go="tab",Xo="bs.tab",Yo="."+Xo,Qo=".data-api",Jo="hide"+Yo,Zo="hidden"+Yo,ta="show"+Yo,ea="shown"+Yo,na=`click${Yo}${Qo}`,ra="dropdown-menu",ia="active",sa="fade",oa="show",aa=".dropdown",ca=".nav, .list-group",ua=".active",la=":scope > li > .active",ha='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',da=".dropdown-toggle",fa=":scope > .dropdown-menu .active";class pa extends on{static get NAME(){return Go}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ia))return;let t;const e=ye(this._element),n=this._element.closest(ca);if(n){const e="UL"===n.nodeName||"OL"===n.nodeName?la:ua;t=Cn.find(e,n),t=t[t.length-1]}const r=t?en.trigger(t,Jo,{relatedTarget:this._element}):null,i=en.trigger(this._element,ta,{relatedTarget:t});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{en.trigger(t,Zo,{relatedTarget:this._element}),en.trigger(this._element,ea,{relatedTarget:t})};e?this._activate(e,e.parentNode,s):s()}_activate(t,e,n){const r=!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?Cn.children(e,ua):Cn.find(la,e),i=r[0],s=n&&i&&i.classList.contains(sa),o=()=>this._transitionComplete(t,i,n);i&&s?(i.classList.remove(oa),this._queueCallback(o,t,!0)):o()}_transitionComplete(t,e,n){if(e){e.classList.remove(ia);const t=Cn.findOne(fa,e.parentNode);t&&t.classList.remove(ia),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(ia),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Ce(t),t.classList.contains(sa)&&t.classList.add(oa);let r=t.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(ra)){const e=t.closest(aa);e&&Cn.find(da,e).forEach(t=>t.classList.add(ia)),t.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=pa.getOrCreateInstance(this);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}en.on(document,na,ha,(function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ie(this))return;const e=pa.getOrCreateInstance(this);e.show()})),De(pa);const ga="toast",ma="bs.toast",va="."+ma,ya="mouseover"+va,ba="mouseout"+va,_a="focusin"+va,wa="focusout"+va,Ea="hide"+va,Ta="hidden"+va,Oa="show"+va,Ia="shown"+va,Sa="fade",ka="hide",Ca="show",Aa="showing",xa={animation:"boolean",autohide:"boolean",delay:"number"},Na={animation:!0,autohide:!0,delay:5e3};class ja extends on{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return xa}static get Default(){return Na}static get NAME(){return ga}show(){const t=en.trigger(this._element,Oa);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Sa);const e=()=>{this._element.classList.remove(Aa),en.trigger(this._element,Ia),this._maybeScheduleHide()};this._element.classList.remove(ka),Ce(this._element),this._element.classList.add(Ca),this._element.classList.add(Aa),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Ca))return;const t=en.trigger(this._element,Ea);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(ka),this._element.classList.remove(Aa),this._element.classList.remove(Ca),en.trigger(this._element,Ta)};this._element.classList.add(Aa),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Ca)&&this._element.classList.remove(Ca),super.dispose()}_getConfig(t){return t={...Na,...Sn.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},Te(ga,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){en.on(this._element,ya,t=>this._onInteraction(t,!0)),en.on(this._element,ba,t=>this._onInteraction(t,!1)),en.on(this._element,_a,t=>this._onInteraction(t,!0)),en.on(this._element,wa,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ja.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}an(ja),De(ja)},"7c73":function(t,e,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}_="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=o.length;while(t--)delete _[f][o[t]];return _()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[f]=i(t),n=new m,m[f]=null,n[g]=t):n=_(),void 0===e?n:s.f(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("cb2d"),p=n("b622"),g=n("3f8c"),m=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=m.IteratorPrototype,_=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),E="keys",T="values",O="entries",I=function(){return this};t.exports=function(t,e,n,o,p,m,S){c(n,e,o);var k,C,A,x=function(t){if(t===p&&R)return R;if(!_&&t in D)return D[t];switch(t){case E:return function(){return new n(this,t)};case T:return function(){return new n(this,t)};case O:return function(){return new n(this,t)}}return function(){return new n(this)}},N=e+" Iterator",j=!1,D=t.prototype,L=D[w]||D["@@iterator"]||p&&D[p],R=!_&&L||x(p),P="Array"==e&&D.entries||L;if(P&&(k=u(P.call(new t)),k!==Object.prototype&&k.next&&(s||u(k)===b||(l?l(k,b):a(k[w])||f(k,w,I)),h(k,N,!0,!0),s&&(g[N]=I))),v&&p==T&&L&&L.name!==T&&(!s&&y?d(D,"name",T):(j=!0,R=function(){return i(L,this)})),p)if(C={values:x(T),keys:m?R:x(E),entries:x(O)},S)for(A in C)(_||j||!(A in D))&&f(D,A,C[A]);else r({target:e,proto:!0,forced:_||j},C);return s&&!S||D[w]===R||f(D,w,R,{name:p}),g[e]=R,C}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Cr})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return Ar})),n.d(e,"d",(function(){return jr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return Dr})),n.d(e,"g",(function(){return Lr})),n.d(e,"h",(function(){return Sr})),n.d(e,"i",(function(){return kr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var _=0,w={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=_)){var t=h(this);delete w[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function O(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function I(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t){return/^[\s\xa0]*$/.test(t)}var C,A=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var j=a.navigator;if(j){var D=j.userAgent;if(D){C=D;break t}}C=""}function L(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function R(t){const e={};for(const n in t)e[n]=t[n];return e}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<P.length;e++)n=P[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function U(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var V,B=x(C,"Opera"),q=x(C,"Trident")||x(C,"MSIE"),$=x(C,"Edge"),H=$||q,z=x(C,"Gecko")&&!(x(C.toLowerCase(),"webkit")&&!x(C,"Edge"))&&!(x(C,"Trident")||x(C,"MSIE"))&&!x(C,"Edge"),K=x(C.toLowerCase(),"webkit")&&!x(C,"Edge");function W(){var t=a.document;return t?t.documentMode:void 0}t:{var G="",X=function(){var t=C;return z?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):K?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(X&&(G=X?X[1]:""),q){var Y=W();if(null!=Y&&Y>parseFloat(G)){V=String(Y);break t}}V=G}var Q,J={};function Z(){return U((function(){let t=0;const e=A(String(V)).split("."),n=A("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=W();Q=tt||(parseInt(V,10)||void 0)}else Q=void 0;var et=Q,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(z){t:{try{F(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},y(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,r,i);return null}return n=It(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[ft]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yt(t,e[s],n,r,i);return null}return n=It(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=It(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function wt(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&_t(t),t=n.call(r,e)}return t}function Tt(t){return t=t[ft],t instanceof lt?t:null}var Ot="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[Ot]||(t[Ot]=function(e){return t.handleEvent(e)}),t[Ot])}function St(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),M(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ct(o,r,!0,e)&&i}if(o=e.g=t,i=Ct(o,r,!0,e)&&i,i=Ct(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ct(o,r,!1,e)&&i}function Ct(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(St,b),St.prototype[ot]=!0,St.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=a.JSON.stringify;function xt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var jt,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Lt,t=>t.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Rt(t){a.setTimeout(()=>{throw t},0)}function Pt(t,e){jt||Mt(),Ft||(jt(),Ft=!0),Ut.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);jt=function(){t.then(Vt)}}var Ft=!1,Ut=new Nt;function Vt(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Rt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Ht(t){t.g=$t(()=>{t.g=null,t.i&&(t.i=!1,Ht(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Bt,St),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kt(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),qt(this),delete this.g};class zt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(t){b.call(this),this.h=t,this.g={}}y(Kt,b);var Wt=[];function Gt(t,e,n,r){Array.isArray(n)||(n&&(Wt[0]=n.toString()),n=Wt);for(var i=0;i<n.length;i++){var s=gt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Yt(){this.g=!0}function Qt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return At(n)}catch(a){return e}}Kt.prototype.M=function(){Kt.Z.M.call(this),Xt(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new St}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();kt(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();kt(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",y(se,rt),ne.STAT_EVENT="statevent",y(ae,rt),ne.Na="timingevent",y(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ye(){rt.call(this,"d")}function be(){rt.call(this,"c")}function _e(){}function we(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Kt(this),this.P=Te,t=H?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}y(ye,rt),y(be,rt),y(_e,fe),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},me=new _e;var Te=45e3,Oe={},Ie={};function Se(t,e,n){t.K=1,t.v=Qe(ze(e)),t.s=n,t.U=!0,ke(t,null)}function ke(t,e){t.F=Date.now(),Ne(t),t.A=ze(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zt(m(t.Ia,t,t.g),t.O)),Gt(t.V,t.g,"readystatechange",t.gb),e=t.H?R(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Qt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ae(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==Ie){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Oe){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Pe(t,r)}Ce(t)&&r!=Ie&&r!=Oe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Re(t),Le(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ie:(n=Number(e.substring(n,r)),isNaN(n)?Oe:(r+=1,r+n>e.length?Ie:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,je(t,t.P)}function je(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function De(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||pr(t.l,t)}function Re(t){De(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Xt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||wn(n.i,t)))if(n.I=t.N,!t.J&&wn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=_n(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&fr(n),!k(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(En(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Ye(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=yr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(De(a),Ne(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Me(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ue)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ve(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=we.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Gn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Gn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||H||this.g&&(this.h.h||this.g.ga()||Xn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),De(this);var n=this.g.ba();this.N=n;e:if(Ce(this)){var r=Xn(this.g);t="";var i=r.length,s=4==Gn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Re(this),Le(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Re(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pe(this,n)}this.U?(Ae(this,h,o),H&&this.i&&3==h&&(Gt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Pe(this,o)),4==h&&Re(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Re(this),Le(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Gn(this.g),e=this.g.ga();this.C<e.length&&(De(this),Ae(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Re(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Re(this),this.o=2,Le(this)):je(this,this.Y-t)},r=Ue.prototype,r.R=function(){Ve(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ve(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function He(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof He){this.g=void 0!==e?e:t.g,Ke(this,t.j),this.s=t.s,We(this,t.i),Ge(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Xe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,Ke(this,n[1]||"",!0),this.s=tn(n[2]||""),We(this,n[3]||"",!0),Ge(this,n[4]),this.l=tn(n[5]||"",!0),Xe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function ze(t){return new He(t)}function Ke(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function We(t,e,n){t.i=n?tn(e,!0):e}function Ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xe(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Ye(t,e,n){t.h.set(e,n)}function Qe(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof He?ze(t):new He(t,void 0)}function Ze(t,e,n,r){var i=new He(null,void 0);return t&&Ke(i,t),e&&We(i,e),n&&Ge(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}He.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ue,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ve(t)))}function dn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function fn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=I(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=I(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function vn(t){this.l=t||yn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _n(t){return t.h?1:t.g?t.g.size:0}function wn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function On(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function In(){}function Sn(){this.g=new In}function kn(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;l(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cn(t,e){const n=new Yt;if(a.Image){const r=new Image;r.onload=v(An,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(An,n,r,"TestLoadImage: error",!1,e),r.onabort=v(An,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(An,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function An(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=jn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=On(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},In.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},In.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(xn,fe),xn.prototype.g=function(){return new Nn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),y(Nn,St);var jn=0;function Dn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rn(t)}function Rn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=jn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ln(this)),this.readyState=jn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ln(this):Rn(this),3==this.readyState&&Dn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Ln(this))},r.Ta=function(t){this.g&&(this.response=t,Ln(this))},r.ha=function(){this.g&&Ln(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Pn=a.JSON.parse;function Mn(t){St.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(Mn,St);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function Bn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hn(t),Kn(t)}function Hn(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}function zn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Gn(t)||2!=t.ba()))if(t.v&&4==Gn(t))$t(t.Fa,0,t);else if(kt(t,"readystatechange"),4==Gn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(qe)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var c=2<Gn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Hn(t)}}finally{Kn(t)}}}function Kn(t,e){if(t.g){Wn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||kt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Wn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}function Xn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yn(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Yn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ye(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Yt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=ze(t.F);Ye(n,"SID",t.J),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),ar(t,n),e=new we(t,t.h,e,void 0),e.K=2,e.v=Qe(ze(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}vr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,Pt(t.Ha,t),t.C=0)}function sr(t,e){return!(_n(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=ze(t.F);Ye(r,"SID",t.J),Ye(r,"RID",n),Ye(r,"AID",t.U),ar(t,r),t.o&&t.s&&Qn(r,t.o,t.s),n=new we(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Se(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Ye(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{kn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Pt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new we(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ze(t.oa);Ye(e,"RID","rpc"),Ye(e,"SID",t.J),Ye(e,"CI",t.N?"0":"1"),Ye(e,"AID",t.U),ar(t,e),Ye(e,"TYPE","xmlhttp"),t.o&&t.s&&Qn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qe(ze(e)),n.s=null,n.U=!0,ke(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),hr(t),t.g=null;var r=2}else{if(!wn(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),kt(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new He("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Ke(n,"https"),Qe(n)),Cn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),vr(t),nr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==On(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function yr(t,e,n){let r=Je(n);if(""!=r.i)e&&We(r,e+"."+r.i),Ge(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&L(t.aa,(function(t,e){Ye(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ye(r,e,n),Ye(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new xn({ib:!0})):new Mn(t.qa),e.L=t.H,e}function _r(){}function wr(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!k(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ir(this)}function Tr(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Or(){be.call(this),this.status=1}function Ir(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void $n(this,s)}t=n||"";const i=new Ue(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=O(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Vn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=$t(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$n(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),Kn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?zn(this):this.cb())},r.cb=function(){zn(this)},r.ba=function(){try{return 2<Gn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Pn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new we(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=R(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=ze(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Qn(n,this.o,s),En(this.i,i),this.Ra&&Ye(n,"TYPE","init"),this.ja?(Ye(n,"$req",e),Ye(n,"SID","null"),i.$=!0,Se(i,n,null)):Se(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=_r.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},wr.prototype.g=function(t,e){return new Er(t,e)},y(Er,St),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Pt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=yr(t,null,t.W),ir(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=At(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},y(Tr,ye),y(Or,be),y(Ir,_r),Ir.prototype.xa=function(){kt(this.g,"a")},Ir.prototype.wa=function(t){kt(this.g,new Tr(t))},Ir.prototype.va=function(t){kt(this.g,new Or(t))},Ir.prototype.ua=function(){kt(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",St.prototype.listen=St.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=s.createWebChannelTransport=function(){return new wr},kr=s.getStatEventTarget=function(){return ie()},Cr=s.ErrorCode=he,Ar=s.EventType=de,xr=s.Event=ne,Nr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},jr=s.FetchXmlHttpFactory=xn,Dr=s.WebChannel=ge,Lr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,s=Object.create(i.prototype),o=new A(r||[]);return s._invoke=I(t,n,o),s}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function m(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,s)&&(b=w);var E=y.prototype=m.prototype=Object.create(b);function T(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,s,o,a){var c=l(t[i],t,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,a)}))}a(c.arg)}var i;function s(t,r){function s(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function I(t,e,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=S(o,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var s=i.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function x(t){if(t){var n=t[s];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return v.prototype=y,c(E,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},T(O.prototype),c(O.prototype,o,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,i,s){void 0===s&&(s=Promise);var o=new O(u(e,n,r,i),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},T(E),c(E,a,"Generator"),c(E,s,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(s(n))return o(i(n,t));throw u(a(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";e.f=i?o?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=h(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(a(t),e=c(e),a(n),s)try{return l(t,e,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n,u){var l=e+" Iterator";return t.prototype=i(r,{next:s(+!u,n)}),o(t,l,!1,!0),a[l]=c,t}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return I})),n.d(e,"e",(function(){return J})),n.d(e,"f",(function(){return et})),n.d(e,"g",(function(){return st})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return ct})),n.d(e,"j",(function(){return rt})),n.d(e,"k",(function(){return D})),n.d(e,"l",(function(){return tt})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return it})),n.d(e,"o",(function(){return L})),n.d(e,"p",(function(){return X})),n.d(e,"q",(function(){return F})),n.d(e,"r",(function(){return s})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return W})),n.d(e,"u",(function(){return R})),n.d(e,"v",(function(){return A})),n.d(e,"w",(function(){return B})),n.d(e,"x",(function(){return C})),n.d(e,"y",(function(){return K})),n.d(e,"z",(function(){return q})),n.d(e,"A",(function(){return G})),n.d(e,"B",(function(){return v})),n.d(e,"C",(function(){return P})),n.d(e,"D",(function(){return a})),n.d(e,"E",(function(){return U})),n.d(e,"F",(function(){return V})),n.d(e,"G",(function(){return b})),n.d(e,"H",(function(){return _})),n.d(e,"I",(function(){return r})),n.d(e,"J",(function(){return f})),n.d(e,"K",(function(){return u})),n.d(e,"L",(function(){return N})),n.d(e,"M",(function(){return w})),n.d(e,"N",(function(){return nt})),n.d(e,"O",(function(){return ot})),n.d(e,"P",(function(){return z}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=U(r)?d(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return U(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function f(t){let e="";if(U(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),v=r(g);function y(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=M(t),r=M(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=L(t),r=L(e),n||r)return!(!n||!r)&&y(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function _(t,e){return t.findIndex(t=>b(t,e))}const w=t=>U(t)?t:null==t?"":L(t)||B(t)&&(t.toString===$||!F(t.toString))?JSON.stringify(t,E,2):String(t),E=(t,e)=>e&&e.__v_isRef?E(t,e.value):R(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:P(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||L(e)||K(e)?e:String(e),T={},O=[],I=()=>{},S=()=>!1,k=/^on[^a-z]/,C=t=>k.test(t),A=t=>t.startsWith("onUpdate:"),x=Object.assign,N=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},j=Object.prototype.hasOwnProperty,D=(t,e)=>j.call(t,e),L=Array.isArray,R=t=>"[object Map]"===H(t),P=t=>"[object Set]"===H(t),M=t=>t instanceof Date,F=t=>"function"===typeof t,U=t=>"string"===typeof t,V=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,q=t=>B(t)&&F(t.then)&&F(t.catch),$=Object.prototype.toString,H=t=>$.call(t),z=t=>H(t).slice(8,-1),K=t=>"[object Object]"===H(t),W=t=>U(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Y=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},Q=/-(\w)/g,J=Y(t=>t.replace(Q,(t,e)=>e?e.toUpperCase():"")),Z=/\B([A-Z])/g,tt=Y(t=>t.replace(Z,"-$1").toLowerCase()),et=Y(t=>t.charAt(0).toUpperCase()+t.slice(1)),nt=Y(t=>t?"on"+et(t):""),rt=(t,e)=>!Object.is(t,e),it=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},st=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ot=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let at;const ct=()=>at||(at="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(t,e,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("d256"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("cb2d"),d=s&&s.prototype,f=!!s&&o((function(){d["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(s)){var p=a("Promise").prototype["finally"];d["finally"]!==p&&h(d,"finally",p,{unsafe:!0})}},ab8b:function(t,e,n){},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(t,e,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("cb2d"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var t={};return r[f].call(t)!==t}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(t,e,n){var r=n("83ab"),i=n("d039");t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b4f8:function(t,e,n){var r=n("23e7"),i=n("d066"),s=n("1a2d"),o=n("577e"),a=n("5692"),c=n("3d87"),u=a("string-to-symbol-registry"),l=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=o(t);if(s(u,e))return u[e];var n=i("Symbol")(e);return u[e]=n,l[n]=e,n}})},b575:function(t,e,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,_=h.document,w=h.process,E=h.Promise,T=f(h,"queueMicrotask"),O=T&&T.value;O||(r=function(){var t,e;y&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},g||y||v||!b||!_?!m&&E&&E.resolve?(u=E.resolve(void 0),u.constructor=E,l=d(u.then,u),o=function(){l(r)}):y?o=function(){w.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=_.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=O||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return s(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,g,m,v){for(var y,b,_=o(p),w=s(_),E=r(g,m),T=a(w),O=0,I=v||c,S=e?I(p,T):n||d?I(p,0):void 0;T>O;O++)if((f||O in w)&&(y=w[O],b=E(y,O,_),t))if(e)S[O]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:u(S,y)}else switch(t){case 4:return!1;case 7:u(S,y)}return h?-1:i||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c430:function(t,e){t.exports=!1},c513:function(t,e,n){var r=n("23e7"),i=n("1a2d"),s=n("d9b5"),o=n("0d51"),a=n("5692"),c=n("3d87"),u=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{keyFor:function(t){if(!s(t))throw TypeError(o(t)+" is not a symbol");if(i(u,t))return u[t]}})},c65b:function(t,e,n){var r=n("40d5"),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},cb2d:function(t,e,n){var r=n("da84"),i=n("1626"),s=n("9112"),o=n("13d2"),a=n("ce4e");t.exports=function(t,e,n,c){var u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:e;return i(n)&&o(n,d,c),t===r?(l?t[e]=n:a(e,n),t):(u?!h&&t[e]&&(l=!0):delete t[e],l?t[e]=n:s(t,e,n),t)}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cc98:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("4738").CONSTRUCTOR,o=n("d256"),a=n("d066"),c=n("1626"),u=n("cb2d"),l=o&&o.prototype;if(r({target:"Promise",proto:!0,forced:s,real:!0},{catch:function(t){return this.then(void 0,t)}}),!i&&c(o)){var h=a("Promise").prototype["catch"];l["catch"]!==h&&u(l,"catch",h,{unsafe:!0})}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,arity:2,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),s=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d256:function(t,e,n){var r=n("da84");t.exports=r.Promise},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),s=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("cb2d"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!i(t,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d6d6:function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t,e){if(t<e)throw i("Not enough arguments");return t}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,s=n("1dde"),o=s("map");r({target:"Array",proto:!0,forced:!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},d9f5:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("c65b"),o=n("e330"),a=n("c430"),c=n("83ab"),u=n("4930"),l=n("d039"),h=n("1a2d"),d=n("3a9b"),f=n("825a"),p=n("fc6a"),g=n("a04b"),m=n("577e"),v=n("5c6c"),y=n("7c73"),b=n("df75"),_=n("241c"),w=n("057f"),E=n("7418"),T=n("06cf"),O=n("9bf2"),I=n("37e8"),S=n("d1e7"),k=n("cb2d"),C=n("5692"),A=n("f772"),x=n("d012"),N=n("90e3"),j=n("b622"),D=n("e538"),L=n("746f"),R=n("57b9"),P=n("d44e"),M=n("69f3"),F=n("b727").forEach,U=A("hidden"),V="Symbol",B="prototype",q=M.set,$=M.getterFor(V),H=Object[B],z=i.Symbol,K=z&&z[B],W=i.TypeError,G=i.QObject,X=T.f,Y=O.f,Q=w.f,J=S.f,Z=o([].push),tt=C("symbols"),et=C("op-symbols"),nt=C("wks"),rt=!G||!G[B]||!G[B].findChild,it=c&&l((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=X(H,e);r&&delete H[e],Y(t,e,n),r&&t!==H&&Y(H,e,r)}:Y,st=function(t,e){var n=tt[t]=y(K);return q(n,{type:V,tag:t,description:e}),c||(n.description=e),n},ot=function(t,e,n){t===H&&ot(et,e,n),f(t);var r=g(e);return f(n),h(tt,r)?(n.enumerable?(h(t,U)&&t[U][r]&&(t[U][r]=!1),n=y(n,{enumerable:v(0,!1)})):(h(t,U)||Y(t,U,v(1,{})),t[U][r]=!0),it(t,r,n)):Y(t,r,n)},at=function(t,e){f(t);var n=p(e),r=b(n).concat(dt(n));return F(r,(function(e){c&&!s(ut,n,e)||ot(t,e,n[e])})),t},ct=function(t,e){return void 0===e?y(t):at(y(t),e)},ut=function(t){var e=g(t),n=s(J,this,e);return!(this===H&&h(tt,e)&&!h(et,e))&&(!(n||!h(this,e)||!h(tt,e)||h(this,U)&&this[U][e])||n)},lt=function(t,e){var n=p(t),r=g(e);if(n!==H||!h(tt,r)||h(et,r)){var i=X(n,r);return!i||!h(tt,r)||h(n,U)&&n[U][r]||(i.enumerable=!0),i}},ht=function(t){var e=Q(p(t)),n=[];return F(e,(function(t){h(tt,t)||h(x,t)||Z(n,t)})),n},dt=function(t){var e=t===H,n=Q(e?et:p(t)),r=[];return F(n,(function(t){!h(tt,t)||e&&!h(H,t)||Z(r,tt[t])})),r};u||(z=function(){if(d(K,this))throw W("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,e=N(t),n=function(t){this===H&&s(n,et,t),h(this,U)&&h(this[U],e)&&(this[U][e]=!1),it(this,e,v(1,t))};return c&&rt&&it(H,e,{configurable:!0,set:n}),st(e,t)},K=z[B],k(K,"toString",(function(){return $(this).tag})),k(z,"withoutSetter",(function(t){return st(N(t),t)})),S.f=ut,O.f=ot,I.f=at,T.f=lt,_.f=w.f=ht,E.f=dt,D.f=function(t){return st(j(t),t)},c&&(Y(K,"description",{configurable:!0,get:function(){return $(this).description}}),a||k(H,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),F(b(nt),(function(t){L(t)})),r({target:V,stat:!0,forced:!u},{useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:ct,defineProperty:ot,defineProperties:at,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ht}),R(),P(z,V),x[U]=!0},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,e=u[h++]),void 0!==n&&c(l,e,n);return l}})},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);t.exports=c(Array,"Array",(function(t,e){d(this,{type:h,target:r(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e330:function(t,e,n){var r=n("40d5"),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(s(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e6cf:function(t,e,n){n("5e7e"),n("14e5"),n("cc98"),n("3529"),n("f22b"),n("7149")},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]}))},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},e9c4:function(t,e,n){var r=n("23e7"),i=n("d066"),s=n("2ba4"),o=n("c65b"),a=n("e330"),c=n("d039"),u=n("e8b5"),l=n("1626"),h=n("861d"),d=n("d9b5"),f=n("f36a"),p=n("4930"),g=i("JSON","stringify"),m=a(/./.exec),v=a("".charAt),y=a("".charCodeAt),b=a("".replace),_=a(1..toString),w=/[\uD800-\uDFFF]/g,E=/^[\uD800-\uDBFF]$/,T=/^[\uDC00-\uDFFF]$/,O=!p||c((function(){var t=i("Symbol")();return"[null]"!=g([t])||"{}"!=g({a:t})||"{}"!=g(Object(t))})),I=c((function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")})),S=function(t,e){var n=f(arguments),r=e;if((h(e)||void 0!==t)&&!d(t))return u(e)||(e=function(t,e){if(l(r)&&(e=o(r,this,t,e)),!d(e))return e}),n[1]=e,s(g,null,n)},k=function(t,e,n){var r=v(n,e-1),i=v(n,e+1);return m(E,t)&&!m(T,i)||m(T,t)&&!m(E,r)?"\\u"+_(y(t,0),16):t};g&&r({target:"JSON",stat:!0,arity:3,forced:O||I},{stringify:function(t,e,n){var r=f(arguments),i=s(O?S:g,null,r);return I&&"string"==typeof i?b(i,w,k):i}})},ea7b:function(t,e,n){"use strict";var r=n("6a7c");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]}))},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f22b:function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("f069"),o=n("4738").CONSTRUCTOR;r({target:"Promise",stat:!0,forced:o},{reject:function(t){var e=s.f(this);return i(e.reject,void 0,t),e.promise}})},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=chunk-vendors.4f4dbaef.js.map
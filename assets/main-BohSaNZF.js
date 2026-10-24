import{C as Sn,c as Xe,G as Mu,a as ea,S as jn,A as la,b as yn,i as _h,F as Su,T as qc,d as bu,e as Eu,v as wu,f as Au,g as Tu}from"./audio-CMPNIqyJ.js";const mc="180",Cu=0,Yc=1,Ru=2,yh=1,Mh=2,Yn=3,fi=0,en=1,ke=2,hi=0,hs=1,$c=2,jc=3,Jc=4,Pu=5,wi=100,Iu=101,Du=102,Lu=103,Uu=104,Nu=200,Ou=201,Fu=202,Bu=203,fo=204,po=205,zu=206,ku=207,Hu=208,Vu=209,Gu=210,Wu=211,Xu=212,qu=213,Yu=214,mo=0,go=1,xo=2,fs=3,vo=4,_o=5,yo=6,Mo=7,Sh=0,$u=1,ju=2,ui=0,Ju=1,Zu=2,Ku=3,ar=4,Qu=5,td=6,ed=7,bh=300,ps=301,ms=302,So=303,bo=304,ha=306,Eo=1e3,Ti=1001,wo=1002,cn=1003,nd=1004,gr=1005,In=1006,_a=1007,Ci=1008,Fn=1009,Eh=1010,wh=1011,js=1012,gc=1013,Pi=1014,Dn=1015,or=1016,xc=1017,vc=1018,Js=1020,Ah=35902,Th=35899,Ch=1021,Rh=1022,bn=1023,Zs=1026,Ks=1027,_c=1028,yc=1029,Ph=1030,Mc=1031,Sc=1033,$r=33776,jr=33777,Jr=33778,Zr=33779,Ao=35840,To=35841,Co=35842,Ro=35843,Po=36196,Io=37492,Do=37496,Lo=37808,Uo=37809,No=37810,Oo=37811,Fo=37812,Bo=37813,zo=37814,ko=37815,Ho=37816,Vo=37817,Go=37818,Wo=37819,Xo=37820,qo=37821,Yo=36492,$o=36494,jo=36495,Jo=36283,Zo=36284,Ko=36285,Qo=36286,id=3200,sd=3201,Ih=0,rd=1,li="",ze="srgb",gs="srgb-linear",na="linear",de="srgb",ki=7680,Zc=519,ad=512,od=513,cd=514,Dh=515,ld=516,hd=517,ud=518,dd=519,tc=35044,Kc="300 es",Ln=2e3,ia=2001;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ya=Math.PI/180,ec=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function fd(i,t){return(i%t+t)%t}function Ma(i,t,e){return(1-e)*i+e*t}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3];const f=r[a+0],u=r[a+1],d=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p;return}if(o===1){t[e+0]=f,t[e+1]=u,t[e+2]=d,t[e+3]=x;return}if(p!==x||c!==f||l!==u||h!==d){let g=1-o;const m=c*f+l*u+h*d+p*x,w=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,m*w);g=Math.sin(g*A)/C,o=Math.sin(o*A)/C}const y=o*w;if(c=c*g+f*y,l=l*g+u*y,h=h*g+d*y,p=p*g+x*y,g===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=C,l*=C,h*=C,p*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],f=r[a+1],u=r[a+2],d=r[a+3];return t[e]=o*d+h*p+c*u-l*f,t[e+1]=c*d+h*f+l*p-o*u,t[e+2]=l*d+h*u+o*f-c*p,t[e+3]=h*d-o*p-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),f=c(n/2),u=c(s/2),d=c(r/2);switch(a){case"XYZ":this._x=f*h*p+l*u*d,this._y=l*u*p-f*h*d,this._z=l*h*d+f*u*p,this._w=l*h*p-f*u*d;break;case"YXZ":this._x=f*h*p+l*u*d,this._y=l*u*p-f*h*d,this._z=l*h*d-f*u*p,this._w=l*h*p+f*u*d;break;case"ZXY":this._x=f*h*p-l*u*d,this._y=l*u*p+f*h*d,this._z=l*h*d+f*u*p,this._w=l*h*p-f*u*d;break;case"ZYX":this._x=f*h*p-l*u*d,this._y=l*u*p+f*h*d,this._z=l*h*d-f*u*p,this._w=l*h*p+f*u*d;break;case"YZX":this._x=f*h*p+l*u*d,this._y=l*u*p+f*h*d,this._z=l*h*d-f*u*p,this._w=l*h*p-f*u*d;break;case"XZY":this._x=f*h*p-l*u*d,this._y=l*u*p-f*h*d,this._z=l*h*d+f*u*p,this._w=l*h*p+f*u*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],p=e[10],f=n+o+p;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>p){const u=2*Math.sqrt(1+n-o-p);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>p){const u=2*Math.sqrt(1+o-n-p);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),p=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new D,Qc=new cr;class Yt{constructor(t,e,n,s,r,a,o,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],f=n[2],u=n[5],d=n[8],x=s[0],g=s[3],m=s[6],w=s[1],v=s[4],y=s[7],C=s[2],A=s[5],S=s[8];return r[0]=a*x+o*w+c*C,r[3]=a*g+o*v+c*A,r[6]=a*m+o*y+c*S,r[1]=l*x+h*w+p*C,r[4]=l*g+h*v+p*A,r[7]=l*m+h*y+p*S,r[2]=f*x+u*w+d*C,r[5]=f*g+u*v+d*A,r[8]=f*m+u*y+d*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=h*a-o*l,f=o*c-h*r,u=l*r-a*c,d=e*p+n*f+s*u;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/d;return t[0]=p*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=u*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Yt;function Lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){const i=sa("canvas");return i.style.display="block",i}const tl={};function Qs(i){i in tl||(tl[i]=!0,console.warn(i))}function md(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const el=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){const i={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gs]:{primaries:t,whitePoint:n,transfer:na,toXYZ:el,fromXYZ:nl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:de,toXYZ:el,fromXYZ:nl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}const re=gd();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class xd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hi===void 0&&(Hi=sa("canvas")),Hi.width=t.width,Hi.height=t.height;const s=Hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vd=0;class bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ea(s[a].image)):r.push(Ea(s[a]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;const wa=new D;class Ye extends ws{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Ti,s=Ti,r=In,a=Ci,o=bn,c=Fn,l=Ye.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Jn(),this.name="",this.source=new bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=bh;Ye.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],p=c[8],f=c[1],u=c[5],d=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-x)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+x)<.1&&Math.abs(d+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(u+1)/2,C=(m+1)/2,A=(h+f)/4,S=(p+x)/4,b=(d+g)/4;return v>y&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=S/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=S/r,s=b/r),this.set(n,s,r,e),this}let w=Math.sqrt((g-d)*(g-d)+(p-x)*(p-x)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-d)/w,this.y=(p-x)/w,this.z=(f-h)/w,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yd extends ws{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ye(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new bc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends yd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uh extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),vr.subVectors(this.max,Ps),Vi.subVectors(t.a,Ps),Gi.subVectors(t.b,Ps),Wi.subVectors(t.c,Ps),ti.subVectors(Gi,Vi),ei.subVectors(Wi,Gi),vi.subVectors(Vi,Wi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!Aa(e,Vi,Gi,Wi,vr)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,Vi,Gi,Wi,vr))?!1:(_r.crossVectors(ti,ei),e=[_r.x,_r.y,_r.z],Aa(e,Vi,Gi,Wi,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,xr=new Ni,Vi=new D,Gi=new D,Wi=new D,ti=new D,ei=new D,vi=new D,Ps=new D,vr=new D,_r=new D,_i=new D;function Aa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=t.dot(_i),l=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Sd=new Ni,Is=new D,Ta=new D;class As{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Ta)),this.expandByPoint(Is.copy(t.center).sub(Ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Vn=new D,Ca=new D,yr=new D,ni=new D,Ra=new D,Mr=new D,Pa=new D;class Ec{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ca.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Ca);const r=t.distanceTo(e)*.5,a=-this.direction.dot(yr),o=ni.dot(this.direction),c=-ni.dot(yr),l=ni.lengthSq(),h=Math.abs(1-a*a);let p,f,u,d;if(h>0)if(p=a*c-o,f=a*o-c,d=r*h,p>=0)if(f>=-d)if(f<=d){const x=1/h;p*=x,f*=x,u=p*(p+a*f+2*o)+f*(a*p+f+2*c)+l}else f=r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*c)+l;else f<=-d?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-c),r),u=-p*p+f*(f+2*c)+l):f<=d?(p=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-c),r),u=-p*p+f*(f+2*c)+l);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ca).addScaledVector(yr,f),u}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-f.z)*p,c=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,c=(t.min.z-f.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){Ra.subVectors(e,t),Mr.subVectors(n,t),Pa.crossVectors(Ra,Mr);let a=this.direction.dot(Pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const c=o*this.direction.dot(Mr.crossVectors(ni,Mr));if(c<0)return null;const l=o*this.direction.dot(Ra.cross(ni));if(l<0||c+l>a)return null;const h=-o*ni.dot(Pa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,c,l,h,p,f,u,d,x,g){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,p,f,u,d,x,g)}set(t,e,n,s,r,a,o,c,l,h,p,f,u,d,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=p,m[14]=f,m[3]=u,m[7]=d,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const f=a*h,u=a*p,d=o*h,x=o*p;e[0]=c*h,e[4]=-c*p,e[8]=l,e[1]=u+d*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=d+u*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,u=c*p,d=l*h,x=l*p;e[0]=f+x*o,e[4]=d*o-u,e[8]=a*l,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=u*o-d,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,u=c*p,d=l*h,x=l*p;e[0]=f-x*o,e[4]=-a*p,e[8]=d+u*o,e[1]=u+d*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,u=a*p,d=o*h,x=o*p;e[0]=c*h,e[4]=d*l-u,e[8]=f*l+x,e[1]=c*p,e[5]=x*l+f,e[9]=u*l-d,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,u=a*l,d=o*c,x=o*l;e[0]=c*h,e[4]=x-f*p,e[8]=d*p+u,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*p+d,e[10]=f-x*p}else if(t.order==="XZY"){const f=a*c,u=a*l,d=o*c,x=o*l;e[0]=c*h,e[4]=-p,e[8]=l*h,e[1]=f*p+x,e[5]=a*h,e[9]=u*p-d,e[2]=d*p-u,e[6]=o*h,e[10]=x*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,Ed)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),Sr.crossVectors(rn,ii),s[0]=ii.x,s[4]=Sr.x,s[8]=rn.x,s[1]=ii.y,s[5]=Sr.y,s[9]=rn.y,s[2]=ii.z,s[6]=Sr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],f=n[9],u=n[13],d=n[2],x=n[6],g=n[10],m=n[14],w=n[3],v=n[7],y=n[11],C=n[15],A=s[0],S=s[4],b=s[8],M=s[12],_=s[1],I=s[5],U=s[9],z=s[13],V=s[2],q=s[6],G=s[10],nt=s[14],X=s[3],dt=s[7],vt=s[11],Mt=s[15];return r[0]=a*A+o*_+c*V+l*X,r[4]=a*S+o*I+c*q+l*dt,r[8]=a*b+o*U+c*G+l*vt,r[12]=a*M+o*z+c*nt+l*Mt,r[1]=h*A+p*_+f*V+u*X,r[5]=h*S+p*I+f*q+u*dt,r[9]=h*b+p*U+f*G+u*vt,r[13]=h*M+p*z+f*nt+u*Mt,r[2]=d*A+x*_+g*V+m*X,r[6]=d*S+x*I+g*q+m*dt,r[10]=d*b+x*U+g*G+m*vt,r[14]=d*M+x*z+g*nt+m*Mt,r[3]=w*A+v*_+y*V+C*X,r[7]=w*S+v*I+y*q+C*dt,r[11]=w*b+v*U+y*G+C*vt,r[15]=w*M+v*z+y*nt+C*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],p=t[6],f=t[10],u=t[14],d=t[3],x=t[7],g=t[11],m=t[15];return d*(+r*c*p-s*l*p-r*o*f+n*l*f+s*o*u-n*c*u)+x*(+e*c*u-e*l*f+r*a*f-s*a*u+s*l*h-r*c*h)+g*(+e*l*p-e*o*u-r*a*p+n*a*u+r*o*h-n*l*h)+m*(-s*o*h-e*c*p+e*o*f+s*a*p-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=t[9],f=t[10],u=t[11],d=t[12],x=t[13],g=t[14],m=t[15],w=p*g*l-x*f*l+x*c*u-o*g*u-p*c*m+o*f*m,v=d*f*l-h*g*l-d*c*u+a*g*u+h*c*m-a*f*m,y=h*x*l-d*p*l+d*o*u-a*x*u-h*o*m+a*p*m,C=d*p*c-h*x*c-d*o*f+a*x*f+h*o*g-a*p*g,A=e*w+n*v+s*y+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/A;return t[0]=w*S,t[1]=(x*f*r-p*g*r-x*s*u+n*g*u+p*s*m-n*f*m)*S,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*m+n*c*m)*S,t[3]=(p*c*r-o*f*r-p*s*l+n*f*l+o*s*u-n*c*u)*S,t[4]=v*S,t[5]=(h*g*r-d*f*r+d*s*u-e*g*u-h*s*m+e*f*m)*S,t[6]=(d*c*r-a*g*r-d*s*l+e*g*l+a*s*m-e*c*m)*S,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*u+e*c*u)*S,t[8]=y*S,t[9]=(d*p*r-h*x*r-d*n*u+e*x*u+h*n*m-e*p*m)*S,t[10]=(a*x*r-d*o*r+d*n*l-e*x*l-a*n*m+e*o*m)*S,t[11]=(h*o*r-a*p*r-h*n*l+e*p*l+a*n*u-e*o*u)*S,t[12]=C*S,t[13]=(h*x*s-d*p*s+d*n*f-e*x*f-h*n*g+e*p*g)*S,t[14]=(d*o*s-a*x*s-d*n*c+e*x*c+a*n*g-e*o*g)*S,t[15]=(a*p*s-h*o*s+h*n*c-e*p*c-a*n*f+e*o*f)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,p=o+o,f=r*l,u=r*h,d=r*p,x=a*h,g=a*p,m=o*p,w=c*l,v=c*h,y=c*p,C=n.x,A=n.y,S=n.z;return s[0]=(1-(x+m))*C,s[1]=(u+y)*C,s[2]=(d-v)*C,s[3]=0,s[4]=(u-y)*A,s[5]=(1-(f+m))*A,s[6]=(g+w)*A,s[7]=0,s[8]=(d+v)*S,s[9]=(g-w)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Xi.set(s[0],s[1],s[2]).length();const a=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/r,h=1/a,p=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=p,xn.elements[9]*=p,xn.elements[10]*=p,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ln,c=!1){const l=this.elements,h=2*r/(e-t),p=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,x;if(c)d=r/(a-r),x=a*r/(a-r);else if(o===Ln)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ia)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ln,c=!1){const l=this.elements,h=2/(e-t),p=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s);let d,x;if(c)d=1/(a-r),x=a/(a-r);else if(o===Ln)d=-2/(a-r),x=-(a+r)/(a-r);else if(o===ia)d=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new D,xn=new le,bd=new D(0,0,0),Ed=new D(1,1,1),ii=new D,Sr=new D,rn=new D,il=new le,sl=new cr;class Bn{constructor(t=0,e=0,n=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sl.setFromEuler(this),this.setFromQuaternion(sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wd=0;const rl=new D,qi=new cr,Gn=new le,br=new D,Ds=new D,Ad=new D,Td=new cr,al=new D(1,0,0),ol=new D(0,1,0),cl=new D(0,0,1),ll={type:"added"},Cd={type:"removed"},Yi={type:"childadded",child:null},Ia={type:"childremoved",child:null};class Te extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new D,e=new Bn,n=new cr,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Yt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ol,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return rl.copy(t).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ol,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ds,br,this.up):Gn.lookAt(br,Ds,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Gn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ll),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cd),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ll),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),p=a(t.shapes),f=a(t.skeletons),u=a(t.animations),d=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),d.length>0&&(n.nodes=d)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new D(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new D,Wn=new D,Da=new D,Xn=new D,$i=new D,ji=new D,hl=new D,La=new D,Ua=new D,Na=new D,Oa=new me,Fa=new me,Ba=new me;class mn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Wn.subVectors(n,e),Da.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(Wn),c=vn.dot(Da),l=Wn.dot(Wn),h=Wn.dot(Da),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const f=1/p,u=(l*c-o*h)*f,d=(a*h-o*c)*f;return r.set(1-u-d,d,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oa.setScalar(0),Fa.setScalar(0),Ba.setScalar(0),Oa.fromBufferAttribute(t,e),Fa.fromBufferAttribute(t,n),Ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oa,r.x),a.addScaledVector(Fa,r.y),a.addScaledVector(Ba,r.z),a}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Wn.subVectors(t,e),vn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;$i.subVectors(s,n),ji.subVectors(r,n),La.subVectors(t,n);const c=$i.dot(La),l=ji.dot(La);if(c<=0&&l<=0)return e.copy(n);Ua.subVectors(t,s);const h=$i.dot(Ua),p=ji.dot(Ua);if(h>=0&&p<=h)return e.copy(s);const f=c*p-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector($i,a);Na.subVectors(t,r);const u=$i.dot(Na),d=ji.dot(Na);if(d>=0&&u<=d)return e.copy(r);const x=u*l-c*d;if(x<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(ji,o);const g=h*d-u*p;if(g<=0&&p-h>=0&&u-d>=0)return hl.subVectors(r,s),o=(p-h)/(p-h+(u-d)),e.copy(s).addScaledVector(hl,o);const m=1/(g+x+f);return a=x*m,o=f*m,e.copy(n).addScaledVector($i,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Er={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=fd(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=za(a,r,t+1/3),this.g=za(a,r,t),this.b=za(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return re.workingToColorSpace(We.copy(this),t),Math.round(Kt(We.r*255,0,255))*65536+Math.round(Kt(We.g*255,0,255))*256+Math.round(Kt(We.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ze){re.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(Er);const n=Ma(si.h,Er.h,e),s=Ma(si.s,Er.s,e),r=Ma(si.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Xt;Xt.NAMES=Nh;let Rd=0;class Oi extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=hs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fe extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new D,wr=new ct;let Pd=0;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class Oh extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fh extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Id=0;const dn=new le,ka=new Te,Ji=new D,an=new Ni,Ls=new Ni,Oe=new D;class Ce extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Fh:Oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(an.min,Ls.min),an.expandByPoint(Oe),Oe.addVectors(an.max,Ls.max),an.expandByPoint(Oe)):(an.expandByPoint(Ls.min),an.expandByPoint(Ls.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Oe.fromBufferAttribute(o,l),c&&(Ji.fromBufferAttribute(t,l),Oe.add(Ji)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let b=0;b<n.count;b++)o[b]=new D,c[b]=new D;const l=new D,h=new D,p=new D,f=new ct,u=new ct,d=new ct,x=new D,g=new D;function m(b,M,_){l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),p.fromBufferAttribute(n,_),f.fromBufferAttribute(r,b),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,_),h.sub(l),p.sub(l),u.sub(f),d.sub(f);const I=1/(u.x*d.y-d.x*u.y);isFinite(I)&&(x.copy(h).multiplyScalar(d.y).addScaledVector(p,-u.y).multiplyScalar(I),g.copy(p).multiplyScalar(u.x).addScaledVector(h,-d.x).multiplyScalar(I),o[b].add(x),o[M].add(x),o[_].add(x),c[b].add(g),c[M].add(g),c[_].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,M=w.length;b<M;++b){const _=w[b],I=_.start,U=_.count;for(let z=I,V=I+U;z<V;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new D,y=new D,C=new D,A=new D;function S(b){C.fromBufferAttribute(s,b),A.copy(C);const M=o[b];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(A,M);const I=y.dot(c[b])<0?-1:1;a.setXYZW(b,v.x,v.y,v.z,I)}for(let b=0,M=w.length;b<M;++b){const _=w[b],I=_.start,U=_.count;for(let z=I,V=I+U;z<V;z+=3)S(t.getX(z+0)),S(t.getX(z+1)),S(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,p=new D;if(t)for(let f=0,u=t.count;f<u;f+=3){const d=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,d),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,d),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,p=o.normalized,f=new l.constructor(c.length*h);let u=0,d=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?u=c[x]*o.data.stride+o.offset:u=c[x]*h;for(let m=0;m<h;m++)f[d++]=l[u++]}return new Ve(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){const f=l[h],u=t(f,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,f=l.length;p<f;p++){const u=l[p];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],p=r[l];for(let f=0,u=p.length;f<u;f++)h.push(p[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new le,yi=new Ec,Ar=new As,dl=new D,Tr=new D,Cr=new D,Rr=new D,Ha=new D,Pr=new D,fl=new D,Ir=new D;class Ft extends Te{constructor(t=new Ce,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],p=r[c];h!==0&&(Ha.fromBufferAttribute(p,t),a?Pr.addScaledVector(Ha,h):Pr.addScaledVector(Ha.sub(e),h))}e.add(Pr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Ar.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Ar,dl)===null||yi.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(ul.copy(r).invert(),yi.copy(t.ray).applyMatrix4(ul),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,x=f.length;d<x;d++){const g=f[d],m=a[g.materialIndex],w=Math.max(g.start,u.start),v=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let y=w,C=v;y<C;y+=3){const A=o.getX(y),S=o.getX(y+1),b=o.getX(y+2);s=Dr(this,m,t,n,l,h,p,A,S,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const d=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let g=d,m=x;g<m;g+=3){const w=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);s=Dr(this,a,t,n,l,h,p,w,v,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let d=0,x=f.length;d<x;d++){const g=f[d],m=a[g.materialIndex],w=Math.max(g.start,u.start),v=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=w,C=v;y<C;y+=3){const A=y,S=y+1,b=y+2;s=Dr(this,m,t,n,l,h,p,A,S,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const d=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let g=d,m=x;g<m;g+=3){const w=g,v=g+1,y=g+2;s=Dr(this,a,t,n,l,h,p,w,v,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Dd(i,t,e,n,s,r,a,o){let c;if(t.side===en?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===fi,o),c===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ir);return l<e.near||l>e.far?null:{distance:l,point:Ir.clone(),object:i}}function Dr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Tr),i.getVertexPosition(c,Cr),i.getVertexPosition(l,Rr);const h=Dd(i,t,e,n,Tr,Cr,Rr,fl);if(h){const p=new D;mn.getBarycoord(fl,Tr,Cr,Rr,p),s&&(h.uv=mn.getInterpolatedAttribute(s,o,c,l,p,new ct)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,c,l,p,new ct)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,c,l,p,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};mn.getNormal(Tr,Cr,Rr,f.normal),h.face=f,h.barycoord=p}return h}class ae extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],p=[];let f=0,u=0;d("z","y","x",-1,-1,n,e,t,a,r,0),d("z","y","x",1,-1,n,e,-t,a,r,1),d("x","z","y",1,1,t,n,e,s,a,2),d("x","z","y",1,-1,t,n,-e,s,a,3),d("x","y","z",1,-1,t,e,n,s,r,4),d("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(p,2));function d(x,g,m,w,v,y,C,A,S,b,M){const _=y/S,I=C/b,U=y/2,z=C/2,V=A/2,q=S+1,G=b+1;let nt=0,X=0;const dt=new D;for(let vt=0;vt<G;vt++){const Mt=vt*I-z;for(let Wt=0;Wt<q;Wt++){const ee=Wt*_-U;dt[x]=ee*w,dt[g]=Mt*v,dt[m]=V,l.push(dt.x,dt.y,dt.z),dt[x]=0,dt[g]=0,dt[m]=A>0?1:-1,h.push(dt.x,dt.y,dt.z),p.push(Wt/S),p.push(1-vt/b),nt+=1}}for(let vt=0;vt<b;vt++)for(let Mt=0;Mt<S;Mt++){const Wt=f+Mt+q*vt,ee=f+Mt+q*(vt+1),he=f+(Mt+1)+q*(vt+1),ie=f+(Mt+1)+q*vt;c.push(Wt,ee,ie),c.push(ee,he,ie),X+=6}o.addGroup(u,X,M),u+=X,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=xs(i[e]);for(const s in n)t[s]=n[s]}return t}function Ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Ud={clone:xs,merge:Je};var Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new D,pl=new ct,ml=new ct;class He extends zh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ec*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ki=1;class Fd extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(Zi,Ki,t,e);s.layers=this.layers,this.add(s);const r=new He(Zi,Ki,t,e);r.layers=this.layers,this.add(r);const a=new He(Zi,Ki,t,e);a.layers=this.layers,this.add(a);const o=new He(Zi,Ki,t,e);o.layers=this.layers,this.add(o);const c=new He(Zi,Ki,t,e);c.layers=this.layers,this.add(c);const l=new He(Zi,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(p,f,u),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class kh extends Ye{constructor(t=[],e=ps,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bd extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ae(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:hi});r.uniforms.tEquirect.value=e;const a=new Ft(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=In),new Fd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Ht extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=h.position.distanceTo(p.position),u=.02,d=.005;l.inputState.pinching&&f>u+d?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-d&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ua{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new ua(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lr extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new D;class ra{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ra(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fi extends Oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qi;const Us=new D,ts=new D,es=new D,ns=new ct,Ns=new ct,Hh=new le,Lr=new D,Os=new D,Ur=new D,gl=new ct,Ga=new ct,xl=new ct;class Ts extends Te{constructor(t=new Fi){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kd(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new ra(n,3,0,!1)),Qi.setAttribute("uv",new ra(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Hh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Nr(Lr.set(-.5,-.5,0),es,a,ts,s,r),Nr(Os.set(.5,-.5,0),es,a,ts,s,r),Nr(Ur.set(.5,.5,0),es,a,ts,s,r),gl.set(0,0),Ga.set(1,0),xl.set(1,1);let o=t.ray.intersectTriangle(Lr,Os,Ur,!1,Us);if(o===null&&(Nr(Os.set(-.5,.5,0),es,a,ts,s,r),Ga.set(0,1),o=t.ray.intersectTriangle(Lr,Ur,Os,!1,Us),o===null))return;const c=t.ray.origin.distanceTo(Us);c<t.near||c>t.far||e.push({distance:c,point:Us.clone(),uv:mn.getInterpolation(Us,Lr,Os,Ur,gl,Ga,xl,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nr(i,t,e,n,s,r){ns.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ns.x=r*ns.x-s*ns.y,Ns.y=s*ns.x+r*ns.y):Ns.copy(ns),i.copy(t),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4(Hh)}class Hd extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,c,l=cn,h=cn,p,f){super(null,a,o,c,l,h,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const is=new le,_l=new le,Or=[],yl=new Ni,Vd=new le,Fs=new Ft,Bs=new As;class ds extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),yl.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(yl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),Bs.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),_l.multiplyMatrices(n,is),Fs.matrixWorld=_l,Fs.raycast(t,Or);for(let a=0,o=Or.length;a<o;a++){const c=Or[a];c.instanceId=r,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hd(new Float32Array(s*this.count),s,this.count,_c,Dn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wa=new D,Gd=new D,Wd=new Yt;class ai{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wa.subVectors(n,e).cross(Gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wd.getNormalMatrix(t),s=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new As,Xd=new ct(.5,.5),Fr=new D;class Ac{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],f=r[6],u=r[7],d=r[8],x=r[9],g=r[10],m=r[11],w=r[12],v=r[13],y=r[14],C=r[15];if(s[0].setComponents(l-a,u-h,m-d,C-w).normalize(),s[1].setComponents(l+a,u+h,m+d,C+w).normalize(),s[2].setComponents(l+o,u+p,m+x,C+v).normalize(),s[3].setComponents(l-o,u-p,m-x,C-v).normalize(),n)s[4].setComponents(c,f,g,y).normalize(),s[5].setComponents(l-c,u-f,m-g,C-y).normalize();else if(s[4].setComponents(l-c,u-f,m-g,C-y).normalize(),e===Ln)s[5].setComponents(l+c,u+f,m+g,C+y).normalize();else if(e===ia)s[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=Xd.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hr extends Oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ml=new le,nc=new Ec,Br=new As,zr=new D;class da extends Te{constructor(t=new Ce,e=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;Ml.copy(s).invert(),nc.copy(t.ray).applyMatrix4(Ml);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let d=f,x=u;d<x;d++){const g=l.getX(d);zr.fromBufferAttribute(p,g),Sl(zr,g,c,s,t,e,this)}}else{const f=Math.max(0,a.start),u=Math.min(p.count,a.start+a.count);for(let d=f,x=u;d<x;d++)zr.fromBufferAttribute(p,d),Sl(zr,d,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sl(i,t,e,n,s,r,a){const o=nc.distanceSqToPoint(i);if(o<e){const c=new D;nc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class wn extends Ye{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vh extends Ye{constructor(t,e,n=Pi,s,r,a,o=cn,c=cn,l,h=Zs,p=1){if(h!==Zs&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:p};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Gh extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fa extends Ce{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],h=e/2,p=Math.PI/2*t,f=e,u=2*p+f,d=n*2+r,x=s+1,g=new D,m=new D;for(let w=0;w<=d;w++){let v=0,y=0,C=0,A=0;if(w<=n){const M=w/n,_=M*Math.PI/2;y=-h-t*Math.cos(_),C=t*Math.sin(_),A=-t*Math.cos(_),v=M*p}else if(w<=n+r){const M=(w-n)/r;y=-h+M*e,C=t,A=0,v=p+M*f}else{const M=(w-n-r)/n,_=M*Math.PI/2;y=h+t*Math.sin(_),C=t*Math.cos(_),A=t*Math.sin(_),v=p+f+M*p}const S=Math.max(0,Math.min(1,v/u));let b=0;w===0?b=.5/s:w===d&&(b=-.5/s);for(let M=0;M<=s;M++){const _=M/s,I=_*Math.PI*2,U=Math.sin(I),z=Math.cos(I);m.x=-C*z,m.y=y,m.z=C*U,o.push(m.x,m.y,m.z),g.set(-C*z,A,C*U),g.normalize(),c.push(g.x,g.y,g.z),l.push(_+b,S)}if(w>0){const M=(w-1)*x;for(let _=0;_<s;_++){const I=M+_,U=M+_+1,z=w*x+_,V=w*x+_+1;a.push(I,U,z),a.push(U,V,z)}}}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Zt extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],f=[],u=[];let d=0;const x=[],g=n/2;let m=0;w(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(u,2));function w(){const y=new D,C=new D;let A=0;const S=(e-t)/n;for(let b=0;b<=r;b++){const M=[],_=b/r,I=_*(e-t)+t;for(let U=0;U<=s;U++){const z=U/s,V=z*c+o,q=Math.sin(V),G=Math.cos(V);C.x=I*q,C.y=-_*n+g,C.z=I*G,p.push(C.x,C.y,C.z),y.set(q,S,G).normalize(),f.push(y.x,y.y,y.z),u.push(z,1-_),M.push(d++)}x.push(M)}for(let b=0;b<s;b++)for(let M=0;M<r;M++){const _=x[M][b],I=x[M+1][b],U=x[M+1][b+1],z=x[M][b+1];(t>0||M!==0)&&(h.push(_,I,z),A+=3),(e>0||M!==r-1)&&(h.push(I,U,z),A+=3)}l.addGroup(m,A,0),m+=A}function v(y){const C=d,A=new ct,S=new D;let b=0;const M=y===!0?t:e,_=y===!0?1:-1;for(let U=1;U<=s;U++)p.push(0,g*_,0),f.push(0,_,0),u.push(.5,.5),d++;const I=d;for(let U=0;U<=s;U++){const V=U/s*c+o,q=Math.cos(V),G=Math.sin(V);S.x=M*G,S.y=g*_,S.z=M*q,p.push(S.x,S.y,S.z),f.push(0,_,0),A.x=q*.5+.5,A.y=G*.5*_+.5,u.push(A.x,A.y),d++}for(let U=0;U<s;U++){const z=C+U,V=I+U;y===!0?h.push(V,V+1,z):h.push(V+1,V,z),b+=3}l.addGroup(m,b,y===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class On extends Zt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new On(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pa extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const v=new D,y=new D,C=new D;for(let A=0;A<e.length;A+=3)u(e[A+0],v),u(e[A+1],y),u(e[A+2],C),c(v,y,C,w)}function c(w,v,y,C){const A=C+1,S=[];for(let b=0;b<=A;b++){S[b]=[];const M=w.clone().lerp(y,b/A),_=v.clone().lerp(y,b/A),I=A-b;for(let U=0;U<=I;U++)U===0&&b===A?S[b][U]=M:S[b][U]=M.clone().lerp(_,U/I)}for(let b=0;b<A;b++)for(let M=0;M<2*(A-b)-1;M++){const _=Math.floor(M/2);M%2===0?(f(S[b][_+1]),f(S[b+1][_]),f(S[b][_])):(f(S[b][_+1]),f(S[b+1][_+1]),f(S[b+1][_]))}}function l(w){const v=new D;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(w),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const w=new D;for(let v=0;v<r.length;v+=3){w.x=r[v+0],w.y=r[v+1],w.z=r[v+2];const y=g(w)/2/Math.PI+.5,C=m(w)/Math.PI+.5;a.push(y,1-C)}d(),p()}function p(){for(let w=0;w<a.length;w+=6){const v=a[w+0],y=a[w+2],C=a[w+4],A=Math.max(v,y,C),S=Math.min(v,y,C);A>.9&&S<.1&&(v<.2&&(a[w+0]+=1),y<.2&&(a[w+2]+=1),C<.2&&(a[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function u(w,v){const y=w*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function d(){const w=new D,v=new D,y=new D,C=new D,A=new ct,S=new ct,b=new ct;for(let M=0,_=0;M<r.length;M+=9,_+=6){w.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),A.set(a[_+0],a[_+1]),S.set(a[_+2],a[_+3]),b.set(a[_+4],a[_+5]),C.copy(w).add(v).add(y).divideScalar(3);const I=g(C);x(A,_+0,w,I),x(S,_+2,v,I),x(b,_+4,y,I)}}function x(w,v,y,C){C<0&&w.x===1&&(a[v]=w.x-1),y.x===0&&y.z===0&&(a[v]=C/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.vertices,t.indices,t.radius,t.details)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,u=(a-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ct:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],a=[],o=new D,c=new le;for(let u=0;u<=t;u++){const d=u/t;s[u]=this.getTangentAt(d,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();const d=Math.acos(Kt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,d))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Kt(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let d=1;d<=t;d++)r[d].applyMatrix4(c.makeRotationAxis(s[d],u*d)),a[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tc extends zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*p+this.aX,l=f*p+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qd extends Tc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,p){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+p)+(c-o)/p;f*=h,u*=h,s(a,o,f,u)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const kr=new D,Xa=new Cc,qa=new Cc,Ya=new Cc;class Wh extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(kr.subVectors(s[0],s[1]).add(s[0]),l=kr);const p=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let d=Math.pow(l.distanceToSquared(p),u),x=Math.pow(p.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),d<1e-4&&(d=x),g<1e-4&&(g=x),Xa.initNonuniformCatmullRom(l.x,p.x,f.x,h.x,d,x,g),qa.initNonuniformCatmullRom(l.y,p.y,f.y,h.y,d,x,g),Ya.initNonuniformCatmullRom(l.z,p.z,f.z,h.z,d,x,g)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(l.x,p.x,f.x,h.x,this.tension),qa.initCatmullRom(l.y,p.y,f.y,h.y,this.tension),Ya.initCatmullRom(l.z,p.z,f.z,h.z,this.tension));return n.set(Xa.calc(c),qa.calc(c),Ya.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Yd(i,t){const e=1-i;return e*e*t}function $d(i,t){return 2*(1-i)*i*t}function jd(i,t){return i*i*t}function Ws(i,t,e,n){return Yd(i,t)+$d(i,e)+jd(i,n)}function Jd(i,t){const e=1-i;return e*e*e*t}function Zd(i,t){const e=1-i;return 3*e*e*i*t}function Kd(i,t){return 3*(1-i)*i*i*t}function Qd(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return Jd(i,t)+Zd(i,e)+Kd(i,n)+Qd(i,s)}class Xh extends zn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tf extends zn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y),Xs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends zn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ef extends zn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends zn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends zn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y),Ws(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jh extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(bl(o,c.x,l.x,h.x,p.x),bl(o,c.y,l.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var aa=Object.freeze({__proto__:null,ArcCurve:qd,CatmullRomCurve3:Wh,CubicBezierCurve:Xh,CubicBezierCurve3:tf,EllipseCurve:Tc,LineCurve:qh,LineCurve3:ef,QuadraticBezierCurve:Yh,QuadraticBezierCurve3:$h,SplineCurve:jh});class nf extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new aa[s.type]().fromJSON(s))}return this}}class El extends nf{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qh(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Yh(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Xh(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new jh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Tc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kr extends El{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new El().fromJSON(s))}return this}}function sf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=lf(i,t,r,e)),i.length>80*e){o=1/0,c=1/0;let h=-1/0,p=-1/0;for(let f=e;f<s;f+=e){const u=i[f],d=i[f+1];u<o&&(o=u),d<c&&(c=d),u>h&&(h=u),d>p&&(p=d)}l=Math.max(h-o,p-c),l=l!==0?32767/l:0}return tr(r,a,e,o,c,l,0),a}function Jh(i,t,e,n,s){let r;if(s===yf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=wl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=wl(a/n|0,i[a],i[a+1],r);return r&&vs(r,r.next)&&(nr(r),r=r.next),r}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vs(e,e.next)||Ee(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&pf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?af(i,n,s,r):rf(i)){t.push(c.i,i.i,l.i),nr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=of(Di(i),t),tr(i,t,e,n,s,r,2)):a===2&&cf(i,t,e,n,s,r):tr(Di(i),t,e,n,s,r,1);break}}}function rf(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),p=Math.min(o,c,l),f=Math.max(s,r,a),u=Math.max(o,c,l);let d=n.next;for(;d!==t;){if(d.x>=h&&d.x<=f&&d.y>=p&&d.y<=u&&Vs(s,o,r,c,a,l,d.x,d.y)&&Ee(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function af(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ee(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,p=r.y,f=a.y,u=Math.min(o,c,l),d=Math.min(h,p,f),x=Math.max(o,c,l),g=Math.max(h,p,f),m=ic(u,d,t,e,n),w=ic(x,g,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=w;){if(v.x>=u&&v.x<=x&&v.y>=d&&v.y<=g&&v!==s&&v!==a&&Vs(o,h,c,p,l,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=u&&y.x<=x&&y.y>=d&&y.y<=g&&y!==s&&y!==a&&Vs(o,h,c,p,l,f,y.x,y.y)&&Ee(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=u&&v.x<=x&&v.y>=d&&v.y<=g&&v!==s&&v!==a&&Vs(o,h,c,p,l,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=w;){if(y.x>=u&&y.x<=x&&y.y>=d&&y.y<=g&&y!==s&&y!==a&&Vs(o,h,c,p,l,f,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function of(i,t){let e=i;do{const n=e.prev,s=e.next.next;!vs(n,s)&&Kh(n,e,e.next,s)&&er(n,s)&&er(s,n)&&(t.push(n.i,e.i,s.i),nr(e),nr(e.next),e=i=s),e=e.next}while(e!==i);return Di(e)}function cf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xf(a,o)){let c=Qh(a,o);a=Di(a,a.next),c=Di(c,c.next),tr(a,t,e,n,s,r,0),tr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function lf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Jh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(gf(l))}s.sort(hf);for(let r=0;r<s.length;r++)e=uf(s[r],e);return e}function hf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function uf(i,t){const e=df(i,t);if(!e)return t;const n=Qh(e,i);return Di(n,n.next),Di(e,e.next)}function df(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(vs(i,e))return e;do{if(vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Zh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const p=Math.abs(s-e.y)/(n-e.x);er(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&ff(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function ff(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function pf(i,t,e,n){let s=i;do s.z===0&&(s.z=ic(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mf(s)}function mf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function ic(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Vs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Zh(i,t,e,n,s,r,a,o)}function xf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vf(i,t)&&(er(i,t)&&er(t,i)&&_f(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||vs(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vs(i,t){return i.x===t.x&&i.y===t.y}function Kh(i,t,e,n){const s=Vr(Ee(i,t,e)),r=Vr(Ee(i,t,n)),a=Vr(Ee(e,n,i)),o=Vr(Ee(e,n,t));return!!(s!==r&&a!==o||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||a===0&&Hr(e,i,n)||o===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vr(i){return i>0?1:i<0?-1:0}function vf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function er(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function _f(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qh(i,t){const e=sc(i.i,i.x,i.y),n=sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wl(i,t,e,n){const s=sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Mf{static triangulate(t,e,n=2){return sf(t,e,n)}}class as{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return as.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Al(t),Tl(n,t);let a=t.length;e.forEach(Al);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Tl(n,e[c]);const o=Mf.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Al(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class qs extends Ce{constructor(t=new Kr([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Sf;let v,y=!1,C,A,S,b;m&&(v=m.getSpacedPoints(h),y=!0,f=!1,C=m.computeFrenetFrames(h,!1),A=new D,S=new D,b=new D),f||(g=0,u=0,d=0,x=0);const M=o.extractPoints(l);let _=M.shape;const I=M.holes;if(!as.isClockWise(_)){_=_.reverse();for(let tt=0,Z=I.length;tt<Z;tt++){const J=I[tt];as.isClockWise(J)&&(I[tt]=J.reverse())}}function z(tt){const J=10000000000000001e-36;let j=tt[0];for(let ht=1;ht<=tt.length;ht++){const it=ht%tt.length,ut=tt[it],Vt=ut.x-j.x,kt=ut.y-j.y,R=Vt*Vt+kt*kt,E=Math.max(Math.abs(ut.x),Math.abs(ut.y),Math.abs(j.x),Math.abs(j.y)),B=J*E*E;if(R<=B){tt.splice(it,1),ht--;continue}j=ut}}z(_),I.forEach(z);const V=I.length,q=_;for(let tt=0;tt<V;tt++){const Z=I[tt];_=_.concat(Z)}function G(tt,Z,J){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Z,J)}const nt=_.length;function X(tt,Z,J){let j,ht,it;const ut=tt.x-Z.x,Vt=tt.y-Z.y,kt=J.x-tt.x,R=J.y-tt.y,E=ut*ut+Vt*Vt,B=ut*R-Vt*kt;if(Math.abs(B)>Number.EPSILON){const W=Math.sqrt(E),Q=Math.sqrt(kt*kt+R*R),Y=Z.x-Vt/W,Ct=Z.y+ut/W,lt=J.x-R/Q,wt=J.y+kt/Q,At=((lt-Y)*R-(wt-Ct)*kt)/(ut*R-Vt*kt);j=Y+ut*At-tt.x,ht=Ct+Vt*At-tt.y;const st=j*j+ht*ht;if(st<=2)return new ct(j,ht);it=Math.sqrt(st/2)}else{let W=!1;ut>Number.EPSILON?kt>Number.EPSILON&&(W=!0):ut<-Number.EPSILON?kt<-Number.EPSILON&&(W=!0):Math.sign(Vt)===Math.sign(R)&&(W=!0),W?(j=-Vt,ht=ut,it=Math.sqrt(E)):(j=ut,ht=Vt,it=Math.sqrt(E/2))}return new ct(j/it,ht/it)}const dt=[];for(let tt=0,Z=q.length,J=Z-1,j=tt+1;tt<Z;tt++,J++,j++)J===Z&&(J=0),j===Z&&(j=0),dt[tt]=X(q[tt],q[J],q[j]);const vt=[];let Mt,Wt=dt.concat();for(let tt=0,Z=V;tt<Z;tt++){const J=I[tt];Mt=[];for(let j=0,ht=J.length,it=ht-1,ut=j+1;j<ht;j++,it++,ut++)it===ht&&(it=0),ut===ht&&(ut=0),Mt[j]=X(J[j],J[it],J[ut]);vt.push(Mt),Wt=Wt.concat(Mt)}let ee;if(g===0)ee=as.triangulateShape(q,I);else{const tt=[],Z=[];for(let J=0;J<g;J++){const j=J/g,ht=u*Math.cos(j*Math.PI/2),it=d*Math.sin(j*Math.PI/2)+x;for(let ut=0,Vt=q.length;ut<Vt;ut++){const kt=G(q[ut],dt[ut],it);Pt(kt.x,kt.y,-ht),j===0&&tt.push(kt)}for(let ut=0,Vt=V;ut<Vt;ut++){const kt=I[ut];Mt=vt[ut];const R=[];for(let E=0,B=kt.length;E<B;E++){const W=G(kt[E],Mt[E],it);Pt(W.x,W.y,-ht),j===0&&R.push(W)}j===0&&Z.push(R)}}ee=as.triangulateShape(tt,Z)}const he=ee.length,ie=d+x;for(let tt=0;tt<nt;tt++){const Z=f?G(_[tt],Wt[tt],ie):_[tt];y?(S.copy(C.normals[0]).multiplyScalar(Z.x),A.copy(C.binormals[0]).multiplyScalar(Z.y),b.copy(v[0]).add(S).add(A),Pt(b.x,b.y,b.z)):Pt(Z.x,Z.y,0)}for(let tt=1;tt<=h;tt++)for(let Z=0;Z<nt;Z++){const J=f?G(_[Z],Wt[Z],ie):_[Z];y?(S.copy(C.normals[tt]).multiplyScalar(J.x),A.copy(C.binormals[tt]).multiplyScalar(J.y),b.copy(v[tt]).add(S).add(A),Pt(b.x,b.y,b.z)):Pt(J.x,J.y,p/h*tt)}for(let tt=g-1;tt>=0;tt--){const Z=tt/g,J=u*Math.cos(Z*Math.PI/2),j=d*Math.sin(Z*Math.PI/2)+x;for(let ht=0,it=q.length;ht<it;ht++){const ut=G(q[ht],dt[ht],j);Pt(ut.x,ut.y,p+J)}for(let ht=0,it=I.length;ht<it;ht++){const ut=I[ht];Mt=vt[ht];for(let Vt=0,kt=ut.length;Vt<kt;Vt++){const R=G(ut[Vt],Mt[Vt],j);y?Pt(R.x,R.y+v[h-1].y,v[h-1].x+J):Pt(R.x,R.y,p+J)}}}$(),et();function $(){const tt=s.length/3;if(f){let Z=0,J=nt*Z;for(let j=0;j<he;j++){const ht=ee[j];Et(ht[2]+J,ht[1]+J,ht[0]+J)}Z=h+g*2,J=nt*Z;for(let j=0;j<he;j++){const ht=ee[j];Et(ht[0]+J,ht[1]+J,ht[2]+J)}}else{for(let Z=0;Z<he;Z++){const J=ee[Z];Et(J[2],J[1],J[0])}for(let Z=0;Z<he;Z++){const J=ee[Z];Et(J[0]+nt*h,J[1]+nt*h,J[2]+nt*h)}}n.addGroup(tt,s.length/3-tt,0)}function et(){const tt=s.length/3;let Z=0;yt(q,Z),Z+=q.length;for(let J=0,j=I.length;J<j;J++){const ht=I[J];yt(ht,Z),Z+=ht.length}n.addGroup(tt,s.length/3-tt,1)}function yt(tt,Z){let J=tt.length;for(;--J>=0;){const j=J;let ht=J-1;ht<0&&(ht=tt.length-1);for(let it=0,ut=h+g*2;it<ut;it++){const Vt=nt*it,kt=nt*(it+1),R=Z+j+Vt,E=Z+ht+Vt,B=Z+ht+kt,W=Z+j+kt;Qt(R,E,B,W)}}}function Pt(tt,Z,J){c.push(tt),c.push(Z),c.push(J)}function Et(tt,Z,J){xe(tt),xe(Z),xe(J);const j=s.length/3,ht=w.generateTopUV(n,s,j-3,j-2,j-1);L(ht[0]),L(ht[1]),L(ht[2])}function Qt(tt,Z,J,j){xe(tt),xe(Z),xe(j),xe(Z),xe(J),xe(j);const ht=s.length/3,it=w.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);L(it[0]),L(it[1]),L(it[3]),L(it[1]),L(it[2]),L(it[3])}function xe(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function L(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new aa[s.type]().fromJSON(s)),new qs(n,t.options)}}const Sf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ct(r,a),new ct(o,c),new ct(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],p=t[n*3+2],f=t[s*3],u=t[s*3+1],d=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ct(a,1-c),new ct(l,1-p),new ct(f,1-d),new ct(x,1-m)]:[new ct(o,1-c),new ct(h,1-p),new ct(u,1-d),new ct(g,1-m)]}};function bf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kn extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kn(t.radius,t.detail)}}class Rc extends pa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rc(t.radius,t.detail)}}class ln extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=t/o,f=e/c,u=[],d=[],x=[],g=[];for(let m=0;m<h;m++){const w=m*f-a;for(let v=0;v<l;v++){const y=v*p-r;d.push(y,-w,0),x.push(0,0,1),g.push(v/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<o;w++){const v=w+l*m,y=w+l*(m+1),C=w+1+l*(m+1),A=w+1+l*m;u.push(v,y,A),u.push(y,C,A)}this.setIndex(u),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class os extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let p=t;const f=(e-t)/s,u=new D,d=new ct;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const m=r+g/n*a;u.x=p*Math.cos(m),u.y=p*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),d.x=(u.x/e+1)/2,d.y=(u.y/e+1)/2,h.push(d.x,d.y)}p+=f}for(let x=0;x<s;x++){const g=x*(n+1);for(let m=0;m<n;m++){const w=m+g,v=w,y=w+n+1,C=w+n+2,A=w+1;o.push(v,y,A),o.push(y,C,A)}}this.setIndex(o),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ae extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],p=new D,f=new D,u=[],d=[],x=[],g=[];for(let m=0;m<=n;m++){const w=[],v=m/n;let y=0;m===0&&a===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const A=C/e;p.x=-t*Math.cos(s+A*r)*Math.sin(a+v*o),p.y=t*Math.cos(a+v*o),p.z=t*Math.sin(s+A*r)*Math.sin(a+v*o),d.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),g.push(A+y,1-v),w.push(l++)}h.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){const v=h[m][w+1],y=h[m][w],C=h[m+1][w],A=h[m+1][w+1];(m!==0||a>0)&&u.push(v,y,A),(m!==n-1||c<Math.PI)&&u.push(y,C,A)}this.setIndex(u),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Le extends Ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new D,p=new D,f=new D;for(let u=0;u<=n;u++)for(let d=0;d<=s;d++){const x=d/s*r,g=u/n*Math.PI*2;p.x=(t+e*Math.cos(g))*Math.cos(x),p.y=(t+e*Math.cos(g))*Math.sin(x),p.z=e*Math.sin(g),o.push(p.x,p.y,p.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(p,h).normalize(),c.push(f.x,f.y,f.z),l.push(d/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let d=1;d<=s;d++){const x=(s+1)*u+d-1,g=(s+1)*(u-1)+d-1,m=(s+1)*(u-1)+d,w=(s+1)*u+d;a.push(x,g,w),a.push(g,m,w)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pc extends Ce{constructor(t=new $h(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,l=new ct;let h=new D;const p=[],f=[],u=[],d=[];x(),this.setIndex(d),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(u,2));function x(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),w(),m()}function g(v){h=t.getPointAt(v/e,h);const y=a.normals[v],C=a.binormals[v];for(let A=0;A<=s;A++){const S=A/s*Math.PI*2,b=Math.sin(S),M=-Math.cos(S);c.x=M*y.x+b*C.x,c.y=M*y.y+b*C.y,c.z=M*y.z+b*C.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,p.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const C=(s+1)*(v-1)+(y-1),A=(s+1)*v+(y-1),S=(s+1)*v+y,b=(s+1)*(v-1)+y;d.push(C,A,b),d.push(A,S,b)}}function w(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)l.x=v/e,l.y=y/s,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pc(new aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ne extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ef extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wf extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ic extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ur extends Ic{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $a=new le,Cl=new D,Rl=new D;class tu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cl),Rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rl),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pl=new le,zs=new D,ja=new D;class Af extends tu{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(zs),ja.copy(n.position),ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ja),n.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),Pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl,n.coordinateSystem,n.reversedDepth)}}class Tf extends Ic{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Af}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dc extends zh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Cf extends tu{constructor(){super(new Dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Li extends Ic{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Cf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rf extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Il=new le;class Pf{constructor(t,e,n=0,s=1/0){this.ray=new Ec(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Il.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Il),this}intersectObject(t,e=!0,n=[]){return rc(t,this,n,e),n.sort(Dl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rc(t[s],this,n,e);return n.sort(Dl),n}}function Dl(i,t){return i.distance-t.distance}function rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)rc(r[a],t,e,!0)}}function Ll(i,t,e,n){const s=If(n);switch(e){case Ch:return i*t;case _c:return i*t/s.components*s.byteLength;case yc:return i*t/s.components*s.byteLength;case Ph:return i*t*2/s.components*s.byteLength;case Mc:return i*t*2/s.components*s.byteLength;case Rh:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Sc:return i*t*4/s.components*s.byteLength;case $r:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case Ao:case Co:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yo:case $o:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ko:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function If(i){switch(i){case Fn:case Eh:return{byteLength:1,components:1};case js:case wh:case or:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Pi:case gc:case Dn:return{byteLength:4,components:1};case Ah:case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);function eu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Df(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((u,d)=>u.start-d.start);let f=0;for(let u=1;u<p.length;u++){const d=p[f],x=p[u];x.start<=d.start+d.count+1?d.count=Math.max(d.count,x.start+x.count-d.start):(++f,p[f]=x)}p.length=f+1;for(let u=0,d=p.length;u<d;u++){const x=p[u];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,np=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ip=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,em=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,om=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Lf,alphahash_pars_fragment:Uf,alphamap_fragment:Nf,alphamap_pars_fragment:Of,alphatest_fragment:Ff,alphatest_pars_fragment:Bf,aomap_fragment:zf,aomap_pars_fragment:kf,batching_pars_vertex:Hf,batching_vertex:Vf,begin_vertex:Gf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:qf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Jf,clipping_planes_vertex:Zf,color_fragment:Kf,color_pars_fragment:Qf,color_pars_vertex:tp,color_vertex:ep,common:np,cube_uv_reflection_fragment:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:cp,colorspace_fragment:lp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:wp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:xp,fog_fragment:vp,fog_pars_fragment:_p,gradientmap_pars_fragment:yp,lightmap_pars_fragment:Mp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:bp,lights_pars_begin:Ep,lights_toon_fragment:Ap,lights_toon_pars_fragment:Tp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Pp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Dp,lights_fragment_maps:Lp,lights_fragment_end:Up,logdepthbuf_fragment:Np,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Bp,map_fragment:zp,map_pars_fragment:kp,map_particle_fragment:Hp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Gp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:Xp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:$p,morphtarget_vertex:jp,normal_fragment_begin:Jp,normal_fragment_maps:Zp,normal_pars_fragment:Kp,normal_pars_vertex:Qp,normal_vertex:tm,normalmap_pars_fragment:em,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:im,clearcoat_pars_fragment:sm,iridescence_pars_fragment:rm,opaque_fragment:am,packing:om,premultiplied_alpha_fragment:cm,project_vertex:lm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:dm,roughnessmap_pars_fragment:fm,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:xm,skinbase_vertex:vm,skinning_pars_vertex:_m,skinning_vertex:ym,skinnormal_vertex:Mm,specularmap_fragment:Sm,specularmap_pars_fragment:bm,tonemapping_fragment:Em,tonemapping_pars_fragment:wm,transmission_fragment:Am,transmission_pars_fragment:Tm,uv_pars_fragment:Cm,uv_pars_vertex:Rm,uv_vertex:Pm,worldpos_vertex:Im,background_vert:Dm,background_frag:Lm,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:Om,cube_frag:Fm,depth_vert:Bm,depth_frag:zm,distanceRGBA_vert:km,distanceRGBA_frag:Hm,equirect_vert:Vm,equirect_frag:Gm,linedashed_vert:Wm,linedashed_frag:Xm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:$m,meshlambert_frag:jm,meshmatcap_vert:Jm,meshmatcap_frag:Zm,meshnormal_vert:Km,meshnormal_frag:Qm,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:a0,points_frag:o0,shadow_vert:c0,shadow_frag:l0,sprite_vert:h0,sprite_frag:u0},pt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Rn={basic:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Je([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Je([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Je([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Je([pt.points,pt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Je([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Je([pt.common,pt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Je([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Je([pt.sprite,pt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Je([pt.common,pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Je([pt.lights,pt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Rn.physical={uniforms:Je([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Gr={r:0,b:0,g:0},Si=new Bn,d0=new le;function f0(i,t,e,n,s,r,a){const o=new Xt(0);let c=r===!0?0:1,l,h,p=null,f=0,u=null;function d(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1;const C=d(v);C===null?m(o,c):C&&C.isColor&&(m(C,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,y){const C=d(y);C&&(C.isCubeTexture||C.mapping===ha)?(h===void 0&&(h=new Ft(new ae(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:xs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(y.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(Si)),h.material.toneMapped=re.getTransfer(C.colorSpace)!==de,(p!==C||f!==C.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=C,f=C.version,u=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Ft(new ln(2,2),new pi({name:"BackgroundMaterial",uniforms:xs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=re.getTransfer(C.colorSpace)!==de,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||f!==C.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,p=C,f=C.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Gr,Bh(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,y,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),c=y,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(o,c)},render:x,addToRenderList:g,dispose:w}}function p0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(_,I,U,z,V){let q=!1;const G=p(z,U,I);r!==G&&(r=G,l(r.object)),q=u(_,z,U,V),q&&d(_,z,U,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(_,I,U,z),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function p(_,I,U){const z=U.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let q=V[I.id];q===void 0&&(q={},V[I.id]=q);let G=q[z];return G===void 0&&(G=f(c()),q[z]=G),G}function f(_){const I=[],U=[],z=[];for(let V=0;V<e;V++)I[V]=0,U[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:z,object:_,attributes:{},index:null}}function u(_,I,U,z){const V=r.attributes,q=I.attributes;let G=0;const nt=U.getAttributes();for(const X in nt)if(nt[X].location>=0){const vt=V[X];let Mt=q[X];if(Mt===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(Mt=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(Mt=_.instanceColor)),vt===void 0||vt.attribute!==Mt||Mt&&vt.data!==Mt.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function d(_,I,U,z){const V={},q=I.attributes;let G=0;const nt=U.getAttributes();for(const X in nt)if(nt[X].location>=0){let vt=q[X];vt===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor));const Mt={};Mt.attribute=vt,vt&&vt.data&&(Mt.data=vt.data),V[X]=Mt,G++}r.attributes=V,r.attributesNum=G,r.index=z}function x(){const _=r.newAttributes;for(let I=0,U=_.length;I<U;I++)_[I]=0}function g(_){m(_,0)}function m(_,I){const U=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;U[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),V[_]!==I&&(i.vertexAttribDivisor(_,I),V[_]=I)}function w(){const _=r.newAttributes,I=r.enabledAttributes;for(let U=0,z=I.length;U<z;U++)I[U]!==_[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function v(_,I,U,z,V,q,G){G===!0?i.vertexAttribIPointer(_,I,U,V,q):i.vertexAttribPointer(_,I,U,z,V,q)}function y(_,I,U,z){x();const V=z.attributes,q=U.getAttributes(),G=I.defaultAttributeValues;for(const nt in q){const X=q[nt];if(X.location>=0){let dt=V[nt];if(dt===void 0&&(nt==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),nt==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor)),dt!==void 0){const vt=dt.normalized,Mt=dt.itemSize,Wt=t.get(dt);if(Wt===void 0)continue;const ee=Wt.buffer,he=Wt.type,ie=Wt.bytesPerElement,$=he===i.INT||he===i.UNSIGNED_INT||dt.gpuType===gc;if(dt.isInterleavedBufferAttribute){const et=dt.data,yt=et.stride,Pt=dt.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<X.locationSize;Et++)m(X.location+Et,et.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<X.locationSize;Et++)g(X.location+Et);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Et=0;Et<X.locationSize;Et++)v(X.location+Et,Mt/X.locationSize,he,vt,yt*ie,(Pt+Mt/X.locationSize*Et)*ie,$)}else{if(dt.isInstancedBufferAttribute){for(let et=0;et<X.locationSize;et++)m(X.location+et,dt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let et=0;et<X.locationSize;et++)g(X.location+et);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let et=0;et<X.locationSize;et++)v(X.location+et,Mt/X.locationSize,he,vt,Mt*ie,Mt/X.locationSize*et*ie,$)}}else if(G!==void 0){const vt=G[nt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(X.location,vt);break;case 3:i.vertexAttrib3fv(X.location,vt);break;case 4:i.vertexAttrib4fv(X.location,vt);break;default:i.vertexAttrib1fv(X.location,vt)}}}}w()}function C(){b();for(const _ in n){const I=n[_];for(const U in I){const z=I[U];for(const V in z)h(z[V].object),delete z[V];delete I[U]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const I=n[_.id];for(const U in I){const z=I[U];for(const V in z)h(z[V].object),delete z[V];delete I[U]}delete n[_.id]}function S(_){for(const I in n){const U=n[I];if(U[_.id]===void 0)continue;const z=U[_.id];for(const V in z)h(z[V].object),delete z[V];delete U[_.id]}}function b(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function m0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),e.update(h,n,p))}function o(l,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let u=0;for(let d=0;d<p;d++)u+=h[d];e.update(u,n,1)}function c(l,h,p,f){if(p===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<l.length;d++)a(l[d],h[d],f[d]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,p);let d=0;for(let x=0;x<p;x++)d+=h[x]*f[x];e.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function g0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==bn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const b=S===or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Fn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Dn&&!b)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=d>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:d,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function x0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ai,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const u=p.length!==0||f||n!==0||s;return s=f,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=h(p,f,0)},this.setState=function(p,f,u){const d=p.clippingPlanes,x=p.clipIntersection,g=p.clipShadows,m=i.get(p);if(!s||d===null||d.length===0||r&&!g)r?h(null):l();else{const w=r?0:n,v=w*4;let y=m.clippingState||null;c.value=y,y=h(d,f,v,u);for(let C=0;C!==v;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,f,u,d){const x=p!==null?p.length:0;let g=null;if(x!==0){if(g=c.value,d!==!0||g===null){const m=u+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=u;v!==x;++v,y+=4)a.copy(p[v]).applyMatrix4(w,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function v0(i){let t=new WeakMap;function e(a,o){return o===So?a.mapping=ps:o===bo&&(a.mapping=ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===So||o===bo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Bd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const cs=4,Ul=[.125,.215,.35,.446,.526,.582],Ai=20,Ja=new Dc,Nl=new Xt;let Za=null,Ka=0,Qa=0,to=!1;const Ei=(1+Math.sqrt(5))/2,ss=1/Ei,Ol=[new D(-Ei,ss,0),new D(Ei,ss,0),new D(-ss,0,Ei),new D(ss,0,Ei),new D(0,Ei,-ss),new D(0,Ei,ss),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],_0=new D;class Fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=_0}=r;Za=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Ka,Qa),this._renderer.xr.enabled=to,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:or,format:bn,colorSpace:gs,depthBuffer:!1},s=Bl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y0(r)),this._blurMaterial=M0(r,t,e)}return s}_compileMaterial(t){const e=new Ft(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,s,r){const c=new He(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,u=p.toneMapping;p.getClearColor(Nl),p.toneMapping=ui,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null));const x=new fe({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Ft(new ae,x);let m=!1;const w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,m=!0):(x.color.copy(Nl),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):y===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));const C=this._cubeSize;Wr(s,y*C,v>2?C:0,C,C),p.setRenderTarget(s),m&&p.render(g,c),p.render(t,c)}g.geometry.dispose(),g.material.dispose(),p.toneMapping=u,p.autoClear=f,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ol[(s-r-1)%Ol.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Ft(this._lodPlanes[s],l),f=l.uniforms,u=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ai-1),x=r/d,g=isFinite(r)?1+Math.floor(h*x):Ai;g>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const m=[];let w=0;for(let S=0;S<Ai;++S){const b=S/x,M=Math.exp(-b*b/2);m.push(M),S===0?w+=M:S<g&&(w+=2*M)}for(let S=0;S<m.length;S++)m[S]=m[S]/w;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=d,f.mipInt.value=v-n;const y=this._sizeLods[s],C=3*y*(s>v-cs?s-v+cs:0),A=4*(this._cubeSize-y);Wr(e,C,A,3*y,2*y),c.setRenderTarget(e),c.render(p,Ja)}}function y0(i){const t=[],e=[],n=[];let s=i;const r=i-cs+1+Ul.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-cs?c=Ul[a-i+cs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,p=1+l,f=[h,h,p,h,p,p,h,h,p,p,h,p],u=6,d=6,x=3,g=2,m=1,w=new Float32Array(x*d*u),v=new Float32Array(g*d*u),y=new Float32Array(m*d*u);for(let A=0;A<u;A++){const S=A%3*2/3-1,b=A>2?0:-1,M=[S,b,0,S+2/3,b,0,S+2/3,b+1,0,S,b,0,S+2/3,b+1,0,S,b+1,0];w.set(M,x*d*A),v.set(f,g*d*A);const _=[A,A,A,A,A,A];y.set(_,m*d*A)}const C=new Ce;C.setAttribute("position",new Ve(w,x)),C.setAttribute("uv",new Ve(v,g)),C.setAttribute("faceIndex",new Ve(y,m)),t.push(C),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bl(i,t,e){const n=new Ii(i,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M0(i,t,e){const n=new Float32Array(Ai),s=new D(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function zl(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function kl(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===So||c===bo,h=c===ps||c===ms;if(l||h){let p=t.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Fl(i)),p=l?e.fromEquirectangular(o,p):e.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),p.texture;if(p!==void 0)return p.texture;{const u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new Fl(i)),p=l?e.fromEquirectangular(o):e.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,t.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function b0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function E0(i,t,e,n){const s={},r=new WeakMap;function a(p){const f=p.target;f.index!==null&&t.remove(f.index);for(const d in f.attributes)t.remove(f.attributes[d]);f.removeEventListener("dispose",a),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(p){const f=p.attributes;for(const u in f)t.update(f[u],i.ARRAY_BUFFER)}function l(p){const f=[],u=p.index,d=p.attributes.position;let x=0;if(u!==null){const w=u.array;x=u.version;for(let v=0,y=w.length;v<y;v+=3){const C=w[v+0],A=w[v+1],S=w[v+2];f.push(C,A,A,S,S,C)}}else if(d!==void 0){const w=d.array;x=d.version;for(let v=0,y=w.length/3-1;v<y;v+=3){const C=v+0,A=v+1,S=v+2;f.push(C,A,A,S,S,C)}}else return;const g=new(Lh(f)?Fh:Oh)(f,1);g.version=x;const m=r.get(p);m&&t.remove(m),r.set(p,g)}function h(p){const f=r.get(p);if(f){const u=p.index;u!==null&&f.version<u.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function w0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let g=0;for(let m=0;m<d;m++)g+=u[m];e.update(g,n,1)}function p(f,u,d,x){if(d===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/a,u[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,x,0,d);let m=0;for(let w=0;w<d;w++)m+=u[w]*x[w];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function A0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function T0(i,t,e){const n=new WeakMap,s=new me;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==p){let M=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const u=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;u===!0&&(v=1),d===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*C*4*p),S=new Uh(A,y,C,p);S.type=Dn,S.needsUpdate=!0;const b=v*4;for(let _=0;_<p;_++){const I=g[_],U=m[_],z=w[_],V=y*C*4*_;for(let q=0;q<I.count;q++){const G=q*b;u===!0&&(s.fromBufferAttribute(I,q),A[V+G+0]=s.x,A[V+G+1]=s.y,A[V+G+2]=s.z,A[V+G+3]=0),d===!0&&(s.fromBufferAttribute(U,q),A[V+G+4]=s.x,A[V+G+5]=s.y,A[V+G+6]=s.z,A[V+G+7]=0),x===!0&&(s.fromBufferAttribute(z,q),A[V+G+8]=s.x,A[V+G+9]=s.y,A[V+G+10]=s.z,A[V+G+11]=z.itemSize===4?s.w:1)}}f={count:p,texture:S,size:new ct(y,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];const d=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",d),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function C0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,p=t.get(c,h);if(s.get(p)!==l&&(t.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return p}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const nu=new Ye,Hl=new Vh(1,1),iu=new Uh,su=new Md,ru=new kh,Vl=[],Gl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vl[s];if(r===void 0&&(r=new Float32Array(s),Vl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=Gl[t];e===void 0&&(e=new Int32Array(t),Gl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function L0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),Ne(e,n)}}function U0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),Ne(e,n)}}function N0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),Ne(e,n)}}function O0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function k0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=Dh,r=Hl):r=nu,e.setTexture2D(t||r,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||su,s)}function q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ru,s)}function Y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||iu,s)}function $0(i){switch(i){case 5126:return R0;case 35664:return P0;case 35665:return I0;case 35666:return D0;case 35674:return L0;case 35675:return U0;case 35676:return N0;case 5124:case 35670:return O0;case 35667:case 35671:return F0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return k0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function j0(i,t){i.uniform1fv(this.addr,t)}function J0(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function Z0(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function K0(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function Q0(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tg(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function eg(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ng(i,t){i.uniform1iv(this.addr,t)}function ig(i,t){i.uniform2iv(this.addr,t)}function sg(i,t){i.uniform3iv(this.addr,t)}function rg(i,t){i.uniform4iv(this.addr,t)}function ag(i,t){i.uniform1uiv(this.addr,t)}function og(i,t){i.uniform2uiv(this.addr,t)}function cg(i,t){i.uniform3uiv(this.addr,t)}function lg(i,t){i.uniform4uiv(this.addr,t)}function hg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nu,r[a])}function ug(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||su,r[a])}function dg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ru,r[a])}function fg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||iu,r[a])}function pg(i){switch(i){case 5126:return j0;case 35664:return J0;case 35665:return Z0;case 35666:return K0;case 35674:return Q0;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return cg;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}class mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}}class gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pg(e.type)}}class xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function Yl(i,t){i.seq.push(t),i.map[t.id]=t}function vg(i,t,e){const n=i.name,s=n.length;for(eo.lastIndex=0;;){const r=eo.exec(n),a=eo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yl(e,l===void 0?new mg(o,i,t):new gg(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new xg(o),Yl(e,p)),e=p}}}class Qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);vg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function $l(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _g=37297;let yg=0;function Mg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const jl=new Yt;function Sg(i){re._getMatrix(jl,re.workingColorSpace,i);const t=`mat3( ${jl.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case na:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Mg(i.getShaderSource(t),o)}else return r}function bg(i,t){const e=Sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Eg(i,t){let e;switch(t){case Ju:e="Linear";break;case Zu:e="Reinhard";break;case Ku:e="Cineon";break;case ar:e="ACESFilmic";break;case td:e="AgX";break;case ed:e="Neutral";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xr=new D;function wg(){re.getLuminanceCoefficients(Xr);const i=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Tg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gs(i){return i!==""}function Zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(Rg,Ig)}const Pg=new Map;function Ig(i,t){let e=$t[t];if(e===void 0){const n=Pg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ac(e)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(Dg,Lg)}function Lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Og(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ms&&(t="ENVMAP_MODE_REFRACTION"),t}function Fg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sh:t="ENVMAP_BLENDING_MULTIPLY";break;case $u:t="ENVMAP_BLENDING_MIX";break;case ju:t="ENVMAP_BLENDING_ADD";break}return t}function Bg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ug(e),l=Ng(e),h=Og(e),p=Fg(e),f=Bg(e),u=Ag(e),d=Tg(r),x=s.createProgram();let g,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Gs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Gs).join(`
`),m.length>0&&(m+=`
`)):(g=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),m=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?$t.tonemapping_pars_fragment:"",e.toneMapping!==ui?Eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),a=ac(a),a=Zl(a,e),a=Kl(a,e),o=ac(o),o=Zl(o,e),o=Kl(o,e),a=Ql(a),o=Ql(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=w+g+a,y=w+m+o,C=$l(s,s.VERTEX_SHADER,v),A=$l(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(I){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(C)||"",V=s.getShaderInfoLog(A)||"",q=U.trim(),G=z.trim(),nt=V.trim();let X=!0,dt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,A);else{const vt=Jl(s,C,"vertex"),Mt=Jl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+vt+`
`+Mt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||nt==="")&&(dt=!1);dt&&(I.diagnostics={runnable:X,programLog:q,vertexShader:{log:G,prefix:g},fragmentShader:{log:nt,prefix:m}})}s.deleteShader(C),s.deleteShader(A),b=new Qr(s,x),M=Cg(s,x)}let b;this.getUniforms=function(){return b===void 0&&S(this),b};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,_g)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let kg=0;class Hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vg(t),e.set(t,n)),n}}class Vg{constructor(t){this.id=kg++,this.code=t,this.usedTimes=0}}function Gg(i,t,e,n,s,r,a){const o=new wc,c=new Hg,l=new Set,h=[],p=s.logarithmicDepthBuffer,f=s.vertexTextures;let u=s.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,_,I,U,z){const V=U.fog,q=z.geometry,G=M.isMeshStandardMaterial?U.environment:null,nt=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),X=nt&&nt.mapping===ha?nt.image.height:null,dt=d[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=vt!==void 0?vt.length:0;let Wt=0;q.morphAttributes.position!==void 0&&(Wt=1),q.morphAttributes.normal!==void 0&&(Wt=2),q.morphAttributes.color!==void 0&&(Wt=3);let ee,he,ie,$;if(dt){const ce=Rn[dt];ee=ce.vertexShader,he=ce.fragmentShader}else ee=M.vertexShader,he=M.fragmentShader,c.update(M),ie=c.getVertexShaderID(M),$=c.getFragmentShaderID(M);const et=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,Et=z.isBatchedMesh===!0,Qt=!!M.map,xe=!!M.matcap,L=!!nt,tt=!!M.aoMap,Z=!!M.lightMap,J=!!M.bumpMap,j=!!M.normalMap,ht=!!M.displacementMap,it=!!M.emissiveMap,ut=!!M.metalnessMap,Vt=!!M.roughnessMap,kt=M.anisotropy>0,R=M.clearcoat>0,E=M.dispersion>0,B=M.iridescence>0,W=M.sheen>0,Q=M.transmission>0,Y=kt&&!!M.anisotropyMap,Ct=R&&!!M.clearcoatMap,lt=R&&!!M.clearcoatNormalMap,wt=R&&!!M.clearcoatRoughnessMap,At=B&&!!M.iridescenceMap,st=B&&!!M.iridescenceThicknessMap,xt=W&&!!M.sheenColorMap,Ot=W&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,mt=!!M.specularColorMap,qt=!!M.specularIntensityMap,N=Q&&!!M.transmissionMap,ot=Q&&!!M.thicknessMap,ft=!!M.gradientMap,St=!!M.alphaMap,rt=M.alphaTest>0,K=!!M.alphaHash,Tt=!!M.extensions;let Gt=ui;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const ve={shaderID:dt,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:he,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Et,batchingColor:Et&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:gs,alphaToCoverage:!!M.alphaToCoverage,map:Qt,matcap:xe,envMap:L,envMapMode:L&&nt.mapping,envMapCubeUVHeight:X,aoMap:tt,lightMap:Z,bumpMap:J,normalMap:j,displacementMap:f&&ht,emissiveMap:it,normalMapObjectSpace:j&&M.normalMapType===rd,normalMapTangentSpace:j&&M.normalMapType===Ih,metalnessMap:ut,roughnessMap:Vt,anisotropy:kt,anisotropyMap:Y,clearcoat:R,clearcoatMap:Ct,clearcoatNormalMap:lt,clearcoatRoughnessMap:wt,dispersion:E,iridescence:B,iridescenceMap:At,iridescenceThicknessMap:st,sheen:W,sheenColorMap:xt,sheenRoughnessMap:Ot,specularMap:Rt,specularColorMap:mt,specularIntensityMap:qt,transmission:Q,transmissionMap:N,thicknessMap:ot,gradientMap:ft,opaque:M.transparent===!1&&M.blending===hs&&M.alphaToCoverage===!1,alphaMap:St,alphaTest:rt,alphaHash:K,combine:M.combine,mapUv:Qt&&x(M.map.channel),aoMapUv:tt&&x(M.aoMap.channel),lightMapUv:Z&&x(M.lightMap.channel),bumpMapUv:J&&x(M.bumpMap.channel),normalMapUv:j&&x(M.normalMap.channel),displacementMapUv:ht&&x(M.displacementMap.channel),emissiveMapUv:it&&x(M.emissiveMap.channel),metalnessMapUv:ut&&x(M.metalnessMap.channel),roughnessMapUv:Vt&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:Ct&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:lt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(M.sheenRoughnessMap.channel),specularMapUv:Rt&&x(M.specularMap.channel),specularColorMapUv:mt&&x(M.specularColorMap.channel),specularIntensityMapUv:qt&&x(M.specularIntensityMap.channel),transmissionMapUv:N&&x(M.transmissionMap.channel),thicknessMapUv:ot&&x(M.thicknessMap.channel),alphaMapUv:St&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||kt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Qt||St),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Wt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Qt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:it&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ke,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Tt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&M.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function m(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)_.push(I),_.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(w(_,M),v(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function w(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function v(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const _=d[M.type];let I;if(_){const U=Rn[_];I=Ud.clone(U.uniforms)}else I=M.uniforms;return I}function C(M,_){let I;for(let U=0,z=h.length;U<z;U++){const V=h[U];if(V.cacheKey===_){I=V,++I.usedTimes;break}}return I===void 0&&(I=new zg(i,_,M,r),h.push(I)),I}function A(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function S(M){c.remove(M)}function b(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:S,programs:h,dispose:b}}function Wg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p,f,u,d,x,g){let m=i[t];return m===void 0?(m={id:p.id,object:p,geometry:f,material:u,groupOrder:d,renderOrder:p.renderOrder,z:x,group:g},i[t]=m):(m.id=p.id,m.object=p,m.geometry=f,m.material=u,m.groupOrder=d,m.renderOrder=p.renderOrder,m.z=x,m.group=g),t++,m}function o(p,f,u,d,x,g){const m=a(p,f,u,d,x,g);u.transmission>0?n.push(m):u.transparent===!0?s.push(m):e.push(m)}function c(p,f,u,d,x,g){const m=a(p,f,u,d,x,g);u.transmission>0?n.unshift(m):u.transparent===!0?s.unshift(m):e.unshift(m)}function l(p,f){e.length>1&&e.sort(p||Xg),n.length>1&&n.sort(f||eh),s.length>1&&s.sort(f||eh)}function h(){for(let p=t,f=i.length;p<f;p++){const u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function qg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new nh,i.set(n,[a])):s>=r.length?(a=new nh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Xt};break;case"SpotLight":e={position:new D,direction:new D,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function $g(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jg=0;function Jg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zg(i){const t=new Yg,e=$g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new le,a=new le;function o(l){let h=0,p=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,d=0,x=0,g=0,m=0,w=0,v=0,y=0,C=0,A=0,S=0;l.sort(Jg);for(let M=0,_=l.length;M<_;M++){const I=l[M],U=I.color,z=I.intensity,V=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*z,p+=U.g*z,f+=U.b*z;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],z);S++}else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const nt=I.shadow,X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[u]=X,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=I.shadow.matrix,w++}n.directional[u]=G,u++}else if(I.isSpotLight){const G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=V,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[x]=G;const nt=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,nt.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=nt.matrix,I.castShadow){const X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=q,y++}x++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=G,g++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const nt=I.shadow,X=e.get(I);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[d]=X,n.pointShadowMap[d]=q,n.pointShadowMatrix[d]=I.shadow.matrix,v++}n.point[d]=G,d++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(z),G.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=G,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==u||b.pointLength!==d||b.spotLength!==x||b.rectAreaLength!==g||b.hemiLength!==m||b.numDirectionalShadows!==w||b.numPointShadows!==v||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==S)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=g,n.point.length=d,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=S,b.directionalLength=u,b.pointLength=d,b.spotLength=x,b.rectAreaLength=g,b.hemiLength=m,b.numDirectionalShadows=w,b.numPointShadows=v,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=S,n.version=jg++)}function c(l,h){let p=0,f=0,u=0,d=0,x=0;const g=h.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const v=l[m];if(v.isDirectionalLight){const y=n.directional[p];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(v.isSpotLight){const y=n.spot[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(v.isRectAreaLight){const y=n.rectArea[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function ih(i){const t=new Zg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Kg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ih(i),t.set(s,[o])):r>=a.length?(o=new ih(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ex(i,t,e){let n=new Ac;const s=new ct,r=new ct,a=new me,o=new Ef({depthPacking:sd}),c=new wf,l={},h=e.maxTextureSize,p={[fi]:en,[en]:fi,[ke]:ke},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Qg,fragmentShader:tx}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const d=new Ce;d.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ft(d,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let m=this.type;this.render=function(A,S,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(hi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=m!==Yn&&this.type===Yn,V=m===Yn&&this.type!==Yn;for(let q=0,G=A.length;q<G;q++){const nt=A[q],X=nt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const dt=X.getFrameExtents();if(s.multiply(dt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,X.mapSize.y=r.y)),X.map===null||z===!0||V===!0){const Mt=this.type!==Yn?{minFilter:cn,magFilter:cn}:{};X.map!==null&&X.map.dispose(),X.map=new Ii(s.x,s.y,Mt),X.map.texture.name=nt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const vt=X.getViewportCount();for(let Mt=0;Mt<vt;Mt++){const Wt=X.getViewport(Mt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),U.viewport(a),X.updateMatrices(nt,Mt),n=X.getFrustum(),y(S,b,X.camera,nt,this.type)}X.isPointLightShadow!==!0&&this.type===Yn&&w(X,b),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,_,I)};function w(A,S){const b=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ii(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(S,null,b,f,x,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(S,null,b,u,x,null)}function v(A,S,b,M){let _=null;const I=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)_=I;else if(_=b.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const U=_.uuid,z=S.uuid;let V=l[U];V===void 0&&(V={},l[U]=V);let q=V[z];q===void 0&&(q=_.clone(),V[z]=q,S.addEventListener("dispose",C)),_=q}if(_.visible=S.visible,_.wireframe=S.wireframe,M===Yn?_.side=S.shadowSide!==null?S.shadowSide:S.side:_.side=S.shadowSide!==null?S.shadowSide:p[S.side],_.alphaMap=S.alphaMap,_.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,_.map=S.map,_.clipShadows=S.clipShadows,_.clippingPlanes=S.clippingPlanes,_.clipIntersection=S.clipIntersection,_.displacementMap=S.displacementMap,_.displacementScale=S.displacementScale,_.displacementBias=S.displacementBias,_.wireframeLinewidth=S.wireframeLinewidth,_.linewidth=S.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const U=i.properties.get(_);U.light=b}return _}function y(A,S,b,M,_){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const z=t.update(A),V=A.material;if(Array.isArray(V)){const q=z.groups;for(let G=0,nt=q.length;G<nt;G++){const X=q[G],dt=V[X.materialIndex];if(dt&&dt.visible){const vt=v(A,dt,M,_);A.onBeforeShadow(i,A,S,b,z,vt,X),i.renderBufferDirect(b,null,z,vt,A,X),A.onAfterShadow(i,A,S,b,z,vt,X)}}}else if(V.visible){const q=v(A,V,M,_);A.onBeforeShadow(i,A,S,b,z,q,null),i.renderBufferDirect(b,null,z,q,A,null),A.onAfterShadow(i,A,S,b,z,q,null)}}const U=A.children;for(let z=0,V=U.length;z<V;z++)y(U[z],S,b,M,_)}function C(A){A.target.removeEventListener("dispose",C);for(const b in l){const M=l[b],_=A.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const nx={[mo]:go,[xo]:yo,[vo]:Mo,[fs]:_o,[go]:mo,[yo]:xo,[Mo]:vo,[_o]:fs};function ix(i,t){function e(){let N=!1;const ot=new me;let ft=null;const St=new me(0,0,0,0);return{setMask:function(rt){ft!==rt&&!N&&(i.colorMask(rt,rt,rt,rt),ft=rt)},setLocked:function(rt){N=rt},setClear:function(rt,K,Tt,Gt,ve){ve===!0&&(rt*=Gt,K*=Gt,Tt*=Gt),ot.set(rt,K,Tt,Gt),St.equals(ot)===!1&&(i.clearColor(rt,K,Tt,Gt),St.copy(ot))},reset:function(){N=!1,ft=null,St.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,ft=null,St=null,rt=null;return{setReversed:function(K){if(ot!==K){const Tt=t.get("EXT_clip_control");K?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ot=K;const Gt=rt;rt=null,this.setClear(Gt)}},getReversed:function(){return ot},setTest:function(K){K?et(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(K){ft!==K&&!N&&(i.depthMask(K),ft=K)},setFunc:function(K){if(ot&&(K=nx[K]),St!==K){switch(K){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case xo:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case vo:i.depthFunc(i.EQUAL);break;case _o:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=K}},setLocked:function(K){N=K},setClear:function(K){rt!==K&&(ot&&(K=1-K),i.clearDepth(K),rt=K)},reset:function(){N=!1,ft=null,St=null,rt=null,ot=!1}}}function s(){let N=!1,ot=null,ft=null,St=null,rt=null,K=null,Tt=null,Gt=null,ve=null;return{setTest:function(ce){N||(ce?et(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(ce){ot!==ce&&!N&&(i.stencilMask(ce),ot=ce)},setFunc:function(ce,kn,Tn){(ft!==ce||St!==kn||rt!==Tn)&&(i.stencilFunc(ce,kn,Tn),ft=ce,St=kn,rt=Tn)},setOp:function(ce,kn,Tn){(K!==ce||Tt!==kn||Gt!==Tn)&&(i.stencilOp(ce,kn,Tn),K=ce,Tt=kn,Gt=Tn)},setLocked:function(ce){N=ce},setClear:function(ce){ve!==ce&&(i.clearStencil(ce),ve=ce)},reset:function(){N=!1,ot=null,ft=null,St=null,rt=null,K=null,Tt=null,Gt=null,ve=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},p={},f=new WeakMap,u=[],d=null,x=!1,g=null,m=null,w=null,v=null,y=null,C=null,A=null,S=new Xt(0,0,0),b=0,M=!1,_=null,I=null,U=null,z=null,V=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,nt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=nt>=2);let dt=null,vt={};const Mt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),ee=new me().fromArray(Mt),he=new me().fromArray(Wt);function ie(N,ot,ft,St){const rt=new Uint8Array(4),K=i.createTexture();i.bindTexture(N,K),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Tt=0;Tt<ft;Tt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ot+Tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return K}const $={};$[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(fs),J(!1),j(Yc),et(i.CULL_FACE),tt(hi);function et(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function yt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Pt(N,ot){return p[N]!==ot?(i.bindFramebuffer(N,ot),p[N]=ot,N===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ot),N===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Et(N,ot){let ft=u,St=!1;if(N){ft=f.get(ot),ft===void 0&&(ft=[],f.set(ot,ft));const rt=N.textures;if(ft.length!==rt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let K=0,Tt=rt.length;K<Tt;K++)ft[K]=i.COLOR_ATTACHMENT0+K;ft.length=rt.length,St=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,St=!0);St&&i.drawBuffers(ft)}function Qt(N){return d!==N?(i.useProgram(N),d=N,!0):!1}const xe={[wi]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};xe[Lu]=i.MIN,xe[Uu]=i.MAX;const L={[Nu]:i.ZERO,[Ou]:i.ONE,[Fu]:i.SRC_COLOR,[fo]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[po]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(N,ot,ft,St,rt,K,Tt,Gt,ve,ce){if(N===hi){x===!0&&(yt(i.BLEND),x=!1);return}if(x===!1&&(et(i.BLEND),x=!0),N!==Pu){if(N!==g||ce!==M){if((m!==wi||y!==wi)&&(i.blendEquation(i.FUNC_ADD),m=wi,y=wi),ce)switch(N){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFunc(i.ONE,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $c:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,v=null,C=null,A=null,S.set(0,0,0),b=0,g=N,M=ce}return}rt=rt||ot,K=K||ft,Tt=Tt||St,(ot!==m||rt!==y)&&(i.blendEquationSeparate(xe[ot],xe[rt]),m=ot,y=rt),(ft!==w||St!==v||K!==C||Tt!==A)&&(i.blendFuncSeparate(L[ft],L[St],L[K],L[Tt]),w=ft,v=St,C=K,A=Tt),(Gt.equals(S)===!1||ve!==b)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ve),S.copy(Gt),b=ve),g=N,M=!1}function Z(N,ot){N.side===ke?yt(i.CULL_FACE):et(i.CULL_FACE);let ft=N.side===en;ot&&(ft=!ft),J(ft),N.blending===hs&&N.transparent===!1?tt(hi):tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const St=N.stencilWrite;o.setTest(St),St&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),it(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){_!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),_=N)}function j(N){N!==Cu?(et(i.CULL_FACE),N!==I&&(N===Yc?i.cullFace(i.BACK):N===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),I=N}function ht(N){N!==U&&(G&&i.lineWidth(N),U=N)}function it(N,ot,ft){N?(et(i.POLYGON_OFFSET_FILL),(z!==ot||V!==ft)&&(i.polygonOffset(ot,ft),z=ot,V=ft)):yt(i.POLYGON_OFFSET_FILL)}function ut(N){N?et(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Vt(N){N===void 0&&(N=i.TEXTURE0+q-1),dt!==N&&(i.activeTexture(N),dt=N)}function kt(N,ot,ft){ft===void 0&&(dt===null?ft=i.TEXTURE0+q-1:ft=dt);let St=vt[ft];St===void 0&&(St={type:void 0,texture:void 0},vt[ft]=St),(St.type!==N||St.texture!==ot)&&(dt!==ft&&(i.activeTexture(ft),dt=ft),i.bindTexture(N,ot||$[N]),St.type=N,St.texture=ot)}function R(){const N=vt[dt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(N){ee.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function Ot(N){he.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function Rt(N,ot){let ft=l.get(ot);ft===void 0&&(ft=new WeakMap,l.set(ot,ft));let St=ft.get(N);St===void 0&&(St=i.getUniformBlockIndex(ot,N.name),ft.set(N,St))}function mt(N,ot){const St=l.get(ot).get(N);c.get(ot)!==St&&(i.uniformBlockBinding(ot,St,N.__bindingPointIndex),c.set(ot,St))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,vt={},p={},f=new WeakMap,u=[],d=null,x=!1,g=null,m=null,w=null,v=null,y=null,C=null,A=null,S=new Xt(0,0,0),b=0,M=!1,_=null,I=null,U=null,z=null,V=null,ee.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:yt,bindFramebuffer:Pt,drawBuffers:Et,useProgram:Qt,setBlending:tt,setMaterial:Z,setFlipSided:J,setCullFace:j,setLineWidth:ht,setPolygonOffset:it,setScissorTest:ut,activeTexture:Vt,bindTexture:kt,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:B,texImage2D:At,texImage3D:st,updateUBOMapping:Rt,uniformBlockBinding:mt,texStorage2D:lt,texStorage3D:wt,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ct,scissor:xt,viewport:Ot,reset:qt}}function sx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap;let p;const f=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,E){return u?new OffscreenCanvas(R,E):sa("canvas")}function x(R,E,B){let W=1;const Q=kt(R);if((Q.width>B||Q.height>B)&&(W=B/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(W*Q.width),Ct=Math.floor(W*Q.height);p===void 0&&(p=d(Y,Ct));const lt=E?d(Y,Ct):p;return lt.width=Y,lt.height=Ct,lt.getContext("2d").drawImage(R,0,0,Y,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Ct+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,E,B,W,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=E;if(E===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),E===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),E===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),E===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),E===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),E===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),E===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),E===i.RGBA){const Ct=Q?na:re.getTransfer(W);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Ct===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(R,E){let B;return R?E===null||E===Pi||E===Js?B=i.DEPTH24_STENCIL8:E===Dn?B=i.DEPTH32F_STENCIL8:E===js&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===Js?B=i.DEPTH_COMPONENT24:E===Dn?B=i.DEPTH_COMPONENT32F:E===js&&(B=i.DEPTH_COMPONENT16),B}function C(R,E){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),b(E),E.isVideoTexture&&h.delete(E)}function S(R){const E=R.target;E.removeEventListener("dispose",S),_(E)}function b(R){const E=n.get(R);if(E.__webglInit===void 0)return;const B=R.source,W=f.get(B);if(W){const Q=W[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(W).length===0&&f.delete(B)}n.remove(R)}function M(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const B=R.source,W=f.get(B);delete W[E.__cacheKey],a.memory.textures--}function _(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(E.__webglFramebuffer[W]))for(let Q=0;Q<E.__webglFramebuffer[W].length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[W][Q]);else i.deleteFramebuffer(E.__webglFramebuffer[W]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[W])}else{if(Array.isArray(E.__webglFramebuffer))for(let W=0;W<E.__webglFramebuffer.length;W++)i.deleteFramebuffer(E.__webglFramebuffer[W]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let W=0;W<E.__webglColorRenderbuffer.length;W++)E.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[W]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=R.textures;for(let W=0,Q=B.length;W<Q;W++){const Y=n.get(B[W]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(R)}let I=0;function U(){I=0}function z(){const R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function q(R,E){const B=n.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,R,E);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+E)}function G(R,E){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){$(B,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+E)}function nt(R,E){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){$(B,R,E);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+E)}function X(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){et(B,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+E)}const dt={[Eo]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},vt={[cn]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},Mt={[ad]:i.NEVER,[dd]:i.ALWAYS,[od]:i.LESS,[Dh]:i.LEQUAL,[cd]:i.EQUAL,[ud]:i.GEQUAL,[ld]:i.GREATER,[hd]:i.NOTEQUAL};function Wt(R,E){if(E.type===Dn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===_a||E.magFilter===gr||E.magFilter===Ci||E.minFilter===In||E.minFilter===_a||E.minFilter===gr||E.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,dt[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,dt[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,dt[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,vt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===cn||E.minFilter!==gr&&E.minFilter!==Ci||E.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ee(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const W=E.source;let Q=f.get(W);Q===void 0&&(Q={},f.set(W,Q));const Y=V(E);if(Y!==R.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[Y].usedTimes++;const Ct=Q[R.__cacheKey];Ct!==void 0&&(Q[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&M(E)),R.__cacheKey=Y,R.__webglTexture=Q[Y].texture}return B}function he(R,E,B){return Math.floor(Math.floor(R/B)/E)}function ie(R,E,B,W){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,B,W,E.data);else{Y.sort((st,xt)=>st.start-xt.start);let Ct=0;for(let st=1;st<Y.length;st++){const xt=Y[Ct],Ot=Y[st],Rt=xt.start+xt.count,mt=he(Ot.start,E.width,4),qt=he(xt.start,E.width,4);Ot.start<=Rt+1&&mt===qt&&he(Ot.start+Ot.count-1,E.width,4)===mt?xt.count=Math.max(xt.count,Ot.start+Ot.count-xt.start):(++Ct,Y[Ct]=Ot)}Y.length=Ct+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let st=0,xt=Y.length;st<xt;st++){const Ot=Y[st],Rt=Math.floor(Ot.start/4),mt=Math.ceil(Ot.count/4),qt=Rt%E.width,N=Math.floor(Rt/E.width),ot=mt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,qt,N,ot,ft,B,W,E.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function $(R,E,B){let W=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(W=i.TEXTURE_3D);const Q=ee(R,E),Y=E.source;e.bindTexture(W,R.__webglTexture,i.TEXTURE0+B);const Ct=n.get(Y);if(Y.version!==Ct.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const lt=re.getPrimaries(re.workingColorSpace),wt=E.colorSpace===li?null:re.getPrimaries(E.colorSpace),At=E.colorSpace===li||lt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let st=x(E.image,!1,s.maxTextureSize);st=Vt(E,st);const xt=r.convert(E.format,E.colorSpace),Ot=r.convert(E.type);let Rt=v(E.internalFormat,xt,Ot,E.colorSpace,E.isVideoTexture);Wt(W,E);let mt;const qt=E.mipmaps,N=E.isVideoTexture!==!0,ot=Ct.__version===void 0||Q===!0,ft=Y.dataReady,St=C(E,st);if(E.isDepthTexture)Rt=y(E.format===Ks,E.type),ot&&(N?e.texStorage2D(i.TEXTURE_2D,1,Rt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Rt,st.width,st.height,0,xt,Ot,null));else if(E.isDataTexture)if(qt.length>0){N&&ot&&e.texStorage2D(i.TEXTURE_2D,St,Rt,qt[0].width,qt[0].height);for(let rt=0,K=qt.length;rt<K;rt++)mt=qt[rt],N?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,mt.width,mt.height,xt,Ot,mt.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,mt.width,mt.height,0,xt,Ot,mt.data);E.generateMipmaps=!1}else N?(ot&&e.texStorage2D(i.TEXTURE_2D,St,Rt,st.width,st.height),ft&&ie(E,st,xt,Ot)):e.texImage2D(i.TEXTURE_2D,0,Rt,st.width,st.height,0,xt,Ot,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,qt[0].width,qt[0].height,st.depth);for(let rt=0,K=qt.length;rt<K;rt++)if(mt=qt[rt],E.format!==bn)if(xt!==null)if(N){if(ft)if(E.layerUpdates.size>0){const Tt=Ll(mt.width,mt.height,E.format,E.type);for(const Gt of E.layerUpdates){const ve=mt.data.subarray(Gt*Tt/mt.data.BYTES_PER_ELEMENT,(Gt+1)*Tt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Gt,mt.width,mt.height,1,xt,ve)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,st.depth,xt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,mt.width,mt.height,st.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,st.depth,xt,Ot,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,mt.width,mt.height,st.depth,0,xt,Ot,mt.data)}else{N&&ot&&e.texStorage2D(i.TEXTURE_2D,St,Rt,qt[0].width,qt[0].height);for(let rt=0,K=qt.length;rt<K;rt++)mt=qt[rt],E.format!==bn?xt!==null?N?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,mt.width,mt.height,xt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,mt.width,mt.height,xt,Ot,mt.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,mt.width,mt.height,0,xt,Ot,mt.data)}else if(E.isDataArrayTexture)if(N){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Rt,st.width,st.height,st.depth),ft)if(E.layerUpdates.size>0){const rt=Ll(st.width,st.height,E.format,E.type);for(const K of E.layerUpdates){const Tt=st.data.subarray(K*rt/st.data.BYTES_PER_ELEMENT,(K+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,st.width,st.height,1,xt,Ot,Tt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Ot,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,st.width,st.height,st.depth,0,xt,Ot,st.data);else if(E.isData3DTexture)N?(ot&&e.texStorage3D(i.TEXTURE_3D,St,Rt,st.width,st.height,st.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Ot,st.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,st.width,st.height,st.depth,0,xt,Ot,st.data);else if(E.isFramebufferTexture){if(ot)if(N)e.texStorage2D(i.TEXTURE_2D,St,Rt,st.width,st.height);else{let rt=st.width,K=st.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Rt,rt,K,0,xt,Ot,null),rt>>=1,K>>=1}}else if(qt.length>0){if(N&&ot){const rt=kt(qt[0]);e.texStorage2D(i.TEXTURE_2D,St,Rt,rt.width,rt.height)}for(let rt=0,K=qt.length;rt<K;rt++)mt=qt[rt],N?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt,Ot,mt):e.texImage2D(i.TEXTURE_2D,rt,Rt,xt,Ot,mt);E.generateMipmaps=!1}else if(N){if(ot){const rt=kt(st);e.texStorage2D(i.TEXTURE_2D,St,Rt,rt.width,rt.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ot,st)}else e.texImage2D(i.TEXTURE_2D,0,Rt,xt,Ot,st);g(E)&&m(W),Ct.__version=Y.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function et(R,E,B){if(E.image.length!==6)return;const W=ee(R,E),Q=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const Y=n.get(Q);if(Q.version!==Y.__version||W===!0){e.activeTexture(i.TEXTURE0+B);const Ct=re.getPrimaries(re.workingColorSpace),lt=E.colorSpace===li?null:re.getPrimaries(E.colorSpace),wt=E.colorSpace===li||Ct===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let K=0;K<6;K++)!At&&!st?xt[K]=x(E.image[K],!0,s.maxCubemapSize):xt[K]=st?E.image[K].image:E.image[K],xt[K]=Vt(E,xt[K]);const Ot=xt[0],Rt=r.convert(E.format,E.colorSpace),mt=r.convert(E.type),qt=v(E.internalFormat,Rt,mt,E.colorSpace),N=E.isVideoTexture!==!0,ot=Y.__version===void 0||W===!0,ft=Q.dataReady;let St=C(E,Ot);Wt(i.TEXTURE_CUBE_MAP,E);let rt;if(At){N&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,qt,Ot.width,Ot.height);for(let K=0;K<6;K++){rt=xt[K].mipmaps;for(let Tt=0;Tt<rt.length;Tt++){const Gt=rt[Tt];E.format!==bn?Rt!==null?N?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt,0,0,Gt.width,Gt.height,Rt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt,qt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt,0,0,Gt.width,Gt.height,Rt,mt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt,qt,Gt.width,Gt.height,0,Rt,mt,Gt.data)}}}else{if(rt=E.mipmaps,N&&ot){rt.length>0&&St++;const K=kt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,qt,K.width,K.height)}for(let K=0;K<6;K++)if(st){N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xt[K].width,xt[K].height,Rt,mt,xt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,xt[K].width,xt[K].height,0,Rt,mt,xt[K].data);for(let Tt=0;Tt<rt.length;Tt++){const ve=rt[Tt].image[K].image;N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt+1,0,0,ve.width,ve.height,Rt,mt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt+1,qt,ve.width,ve.height,0,Rt,mt,ve.data)}}else{N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,mt,xt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,Rt,mt,xt[K]);for(let Tt=0;Tt<rt.length;Tt++){const Gt=rt[Tt];N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt+1,0,0,Rt,mt,Gt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Tt+1,qt,Rt,mt,Gt.image[K])}}}g(E)&&m(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function yt(R,E,B,W,Q,Y){const Ct=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),wt=v(B.internalFormat,Ct,lt,B.colorSpace),At=n.get(E),st=n.get(B);if(st.__renderTarget=E,!At.__hasExternalTextures){const xt=Math.max(1,E.width>>Y),Ot=Math.max(1,E.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,wt,xt,Ot,E.depth,0,Ct,lt,null):e.texImage2D(Q,Y,wt,xt,Ot,0,Ct,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),it(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Q,st.__webglTexture,0,ht(E)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Q,st.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(R,E,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const W=E.depthTexture,Q=W&&W.isDepthTexture?W.type:null,Y=y(E.stencilBuffer,Q),Ct=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=ht(E);it(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,E.width,E.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Y,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{const W=E.textures;for(let Q=0;Q<W.length;Q++){const Y=W[Q],Ct=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),wt=v(Y.internalFormat,Ct,lt,Y.colorSpace),At=ht(E);B&&it(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,wt,E.width,E.height):it(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,wt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,wt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(E.depthTexture);W.__renderTarget=E,(!W.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const Q=W.__webglTexture,Y=ht(E);if(E.depthTexture.format===Zs)it(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Ks)it(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Qt(R){const E=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),W){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=W}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const W=R.texture.mipmaps;W&&W.length>0?Et(E.__webglFramebuffer[0],R):Et(E.__webglFramebuffer,R)}else if(B){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]===void 0)E.__webglDepthbuffer[W]=i.createRenderbuffer(),Pt(E.__webglDepthbuffer[W],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Pt(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(R,E,B){const W=n.get(R);E!==void 0&&yt(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Qt(R)}function L(R){const E=R.texture,B=n.get(R),W=n.get(E);R.addEventListener("dispose",S);const Q=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Ct=Q.length>1;if(Ct||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=E.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let wt=0;wt<E.mipmaps.length;wt++)B.__webglFramebuffer[lt][wt]=i.createFramebuffer()}else B.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<E.mipmaps.length;lt++)B.__webglFramebuffer[lt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let lt=0,wt=Q.length;lt<wt;lt++){const At=n.get(Q[lt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&it(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const wt=Q[lt];B.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);const At=r.convert(wt.format,wt.colorSpace),st=r.convert(wt.type),xt=v(wt.internalFormat,At,st,wt.colorSpace,R.isXRRenderTarget===!0),Ot=ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,xt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,E);for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let wt=0;wt<E.mipmaps.length;wt++)yt(B.__webglFramebuffer[lt][wt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt);else yt(B.__webglFramebuffer[lt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(E)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let lt=0,wt=Q.length;lt<wt;lt++){const At=Q[lt],st=n.get(At);let xt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,st.__webglTexture),Wt(xt,At),yt(B.__webglFramebuffer,R,At,i.COLOR_ATTACHMENT0+lt,xt,0),g(At)&&m(xt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,W.__webglTexture),Wt(lt,E),E.mipmaps&&E.mipmaps.length>0)for(let wt=0;wt<E.mipmaps.length;wt++)yt(B.__webglFramebuffer[wt],R,E,i.COLOR_ATTACHMENT0,lt,wt);else yt(B.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,lt,0);g(E)&&m(lt),e.unbindTexture()}R.depthBuffer&&Qt(R)}function tt(R){const E=R.textures;for(let B=0,W=E.length;B<W;B++){const Q=E[B];if(g(Q)){const Y=w(R),Ct=n.get(Q).__webglTexture;e.bindTexture(Y,Ct),m(Y),e.unbindTexture()}}}const Z=[],J=[];function j(R){if(R.samples>0){if(it(R)===!1){const E=R.textures,B=R.width,W=R.height;let Q=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),lt=E.length>1;if(lt)for(let At=0;At<E.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const wt=R.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let At=0;At<E.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const st=n.get(E[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Q,i.NEAREST),c===!0&&(Z.length=0,J.length=0,Z.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(Y),J.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let At=0;At<E.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const st=n.get(E[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ht(R){return Math.min(s.maxSamples,R.samples)}function it(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(R){const E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Vt(R,E){const B=R.colorSpace,W=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==gs&&B!==li&&(re.getTransfer(B)===de?(W!==bn||Q!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=xe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=it}function rx(i,t){function e(n,s=li){let r;const a=re.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===wh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===or)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Rh)return i.RGB;if(n===bn)return i.RGBA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===yc)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===Mc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===$r||n===jr||n===Jr||n===Zr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===To||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Io||n===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Io)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Uo||n===No||n===Oo||n===Fo||n===Bo||n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===$o||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===Zo||n===Ko||n===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Gh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pi({vertexShader:ax,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lx extends ws{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,f=null,u=null,d=null;const x=typeof XRWebGLBinding<"u",g=new cx,m={},w=e.getContextAttributes();let v=null,y=null;const C=[],A=[],S=new ct;let b=null;const M=new He;M.viewport=new me;const _=new He;_.viewport=new me;const I=[M,_],U=new Rf;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=C[$];return et===void 0&&(et=new Va,C[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=C[$];return et===void 0&&(et=new Va,C[$]=et),et.getGripSpace()},this.getHand=function($){let et=C[$];return et===void 0&&(et=new Va,C[$]=et),et.getHandSpace()};function q($){const et=A.indexOf($.inputSource);if(et===-1)return;const yt=C[et];yt!==void 0&&(yt.update($.inputSource,$.frame,l||a),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let $=0;$<C.length;$++){const et=A[$];et!==null&&(A[$]=null,C[$].disconnect(et))}z=null,V=null,g.reset();for(const $ in m)delete m[$];t.setRenderTarget(v),u=null,f=null,p=null,s=null,y=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),w.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Pt=null,Et=null;w.depth&&(Et=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=w.stencil?Ks:Zs,Pt=w.stencil?Js:Pi);const Qt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(Qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ii(f.textureWidth,f.textureHeight,{format:bn,type:Fn,depthTexture:new Vh(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ii(u.framebufferWidth,u.framebufferHeight,{format:bn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt($){for(let et=0;et<$.removed.length;et++){const yt=$.removed[et],Pt=A.indexOf(yt);Pt>=0&&(A[Pt]=null,C[Pt].disconnect(yt))}for(let et=0;et<$.added.length;et++){const yt=$.added[et];let Pt=A.indexOf(yt);if(Pt===-1){for(let Qt=0;Qt<C.length;Qt++)if(Qt>=A.length){A.push(yt),Pt=Qt;break}else if(A[Qt]===null){A[Qt]=yt,Pt=Qt;break}if(Pt===-1)break}const Et=C[Pt];Et&&Et.connect(yt)}}const X=new D,dt=new D;function vt($,et,yt){X.setFromMatrixPosition(et.matrixWorld),dt.setFromMatrixPosition(yt.matrixWorld);const Pt=X.distanceTo(dt),Et=et.projectionMatrix.elements,Qt=yt.projectionMatrix.elements,xe=Et[14]/(Et[10]-1),L=Et[14]/(Et[10]+1),tt=(Et[9]+1)/Et[5],Z=(Et[9]-1)/Et[5],J=(Et[8]-1)/Et[0],j=(Qt[8]+1)/Qt[0],ht=xe*J,it=xe*j,ut=Pt/(-J+j),Vt=ut*-J;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Vt),$.translateZ(ut),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Et[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const kt=xe+ut,R=L+ut,E=ht-Vt,B=it+(Pt-Vt),W=tt*L/R*kt,Q=Z*L/R*kt;$.projectionMatrix.makePerspective(E,B,W,Q,kt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Mt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,yt=$.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),U.near=_.near=M.near=et,U.far=_.far=M.far=yt,(z!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,V=U.far),U.layers.mask=$.layers.mask|6,M.layers.mask=U.layers.mask&3,_.layers.mask=U.layers.mask&5;const Pt=$.parent,Et=U.cameras;Mt(U,Pt);for(let Qt=0;Qt<Et.length;Qt++)Mt(Et[Qt],Pt);Et.length===2?vt(U,M,_):U.projectionMatrix.copy(M.projectionMatrix),Wt($,U,Pt)};function Wt($,et,yt){yt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ec*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function($){return m[$]};let ee=null;function he($,et){if(h=et.getViewerPose(l||a),d=et,h!==null){const yt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Pt=!1;yt.length!==U.cameras.length&&(U.cameras.length=0,Pt=!0);for(let L=0;L<yt.length;L++){const tt=yt[L];let Z=null;if(u!==null)Z=u.getViewport(tt);else{const j=p.getViewSubImage(f,tt);Z=j.viewport,L===0&&(t.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(y))}let J=I[L];J===void 0&&(J=new He,J.layers.enable(L),J.viewport=new me,I[L]=J),J.matrix.fromArray(tt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(tt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Z.x,Z.y,Z.width,Z.height),L===0&&(U.matrix.copy(J.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pt===!0&&U.cameras.push(J)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();const L=p.getDepthInformation(yt[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),p=n.getBinding();for(let L=0;L<yt.length;L++){const tt=yt[L].camera;if(tt){let Z=m[tt];Z||(Z=new Gh,m[tt]=Z);const J=p.getCameraImage(tt);Z.sourceTexture=J}}}}for(let yt=0;yt<C.length;yt++){const Pt=A[yt],Et=C[yt];Pt!==null&&Et!==void 0&&Et.update(Pt,et,l||a)}ee&&ee($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),d=null}const ie=new eu;ie.setAnimationLoop(he),this.setAnimationLoop=function($){ee=$},this.dispose=function(){}}}const bi=new Bn,hx=new le;function ux(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Bh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),p(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&u(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),d(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,w,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===en&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===en&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=t.get(m),v=w.envMap,y=w.envMapRotation;v&&(g.envMap.value=v,bi.copy(y),bi.x*=-1,bi.y*=-1,bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),g.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(bi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const w=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,v){const y=v.program;n.uniformBlockBinding(w,y)}function l(w,v){let y=s[w.id];y===void 0&&(d(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",g));const C=v.program;n.updateUBOMapping(w,C);const A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function h(w){const v=p();w.__bindingPointIndex=v;const y=i.createBuffer(),C=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function p(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const v=s[w.id],y=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,S=y.length;A<S;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,_=b.length;M<_;M++){const I=b[M];if(u(I,A,M,C)===!0){const U=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let q=0;q<z.length;q++){const G=z[q],nt=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+V,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,V),V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(w,v,y,C){const A=w.value,S=v+"_"+y;if(C[S]===void 0)return typeof A=="number"||typeof A=="boolean"?C[S]=A:C[S]=A.clone(),!0;{const b=C[S];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[S]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function d(w){const v=w.uniforms;let y=0;const C=16;for(let S=0,b=v.length;S<b;S++){const M=Array.isArray(v[S])?v[S]:[v[S]];for(let _=0,I=M.length;_<I;_++){const U=M[_],z=Array.isArray(U.value)?U.value:[U.value];for(let V=0,q=z.length;V<q;V++){const G=z[V],nt=x(G),X=y%C,dt=X%nt.boundary,vt=X+dt;y+=dt,vt!==0&&C-vt<nt.storage&&(y+=C-vt),U.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=nt.storage}}}const A=y%C;return A>0&&(y+=C-A),w.__size=y,w.__cache={},this}function x(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function g(w){const v=w.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}class dr{constructor(t={}){const{canvas:e=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const d=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const w=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let C=!1;this._outputColorSpace=ze;let A=0,S=0,b=null,M=-1,_=null;const I=new me,U=new me;let z=null;const V=new Xt(0);let q=0,G=e.width,nt=e.height,X=1,dt=null,vt=null;const Mt=new me(0,0,G,nt),Wt=new me(0,0,G,nt);let ee=!1;const he=new Ac;let ie=!1,$=!1;const et=new le,yt=new D,Pt=new me,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function xe(){return b===null?X:1}let L=n;function tt(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",rt,!1),L===null){const O="webgl2";if(L=tt(O,T),L===null)throw tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Z,J,j,ht,it,ut,Vt,kt,R,E,B,W,Q,Y,Ct,lt,wt,At,st,xt,Ot,Rt,mt,qt;function N(){Z=new b0(L),Z.init(),Rt=new rx(L,Z),J=new g0(L,Z,t,Rt),j=new ix(L,Z),J.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),ht=new A0(L),it=new Wg,ut=new sx(L,Z,j,it,J,Rt,ht),Vt=new v0(y),kt=new S0(y),R=new Df(L),mt=new p0(L,R),E=new E0(L,R,ht,mt),B=new C0(L,E,R,ht),st=new T0(L,J,ut),lt=new x0(it),W=new Gg(y,Vt,kt,Z,J,mt,lt),Q=new ux(y,it),Y=new qg,Ct=new Kg(Z),At=new f0(y,Vt,kt,j,B,u,c),wt=new ex(y,B,J),qt=new dx(L,ht,J,j),xt=new m0(L,Z,ht),Ot=new w0(L,Z,ht),ht.programs=W.programs,y.capabilities=J,y.extensions=Z,y.properties=it,y.renderLists=Y,y.shadowMap=wt,y.state=j,y.info=ht}N();const ot=new lx(y,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Z.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Z.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(G,nt,!1))},this.getSize=function(T){return T.set(G,nt)},this.setSize=function(T,O,k=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,nt=O,e.width=Math.floor(T*X),e.height=Math.floor(O*X),k===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(G*X,nt*X).floor()},this.setDrawingBufferSize=function(T,O,k){G=T,nt=O,X=k,e.width=Math.floor(T*k),e.height=Math.floor(O*k),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Mt)},this.setViewport=function(T,O,k,H){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,O,k,H),j.viewport(I.copy(Mt).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,O,k,H){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,O,k,H),j.scissor(U.copy(Wt).multiplyScalar(X).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){j.setScissorTest(ee=T)},this.setOpaqueSort=function(T){dt=T},this.setTransparentSort=function(T){vt=T},this.getClearColor=function(T){return T.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,k=!0){let H=0;if(T){let F=!1;if(b!==null){const at=b.texture.format;F=at===Sc||at===Mc||at===yc}if(F){const at=b.texture.type,gt=at===Fn||at===Pi||at===js||at===Js||at===xc||at===vc,bt=At.getClearColor(),_t=At.getClearAlpha(),Nt=bt.r,Bt=bt.g,It=bt.b;gt?(d[0]=Nt,d[1]=Bt,d[2]=It,d[3]=_t,L.clearBufferuiv(L.COLOR,0,d)):(x[0]=Nt,x[1]=Bt,x[2]=It,x[3]=_t,L.clearBufferiv(L.COLOR,0,x))}else H|=L.COLOR_BUFFER_BIT}O&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),At.dispose(),Y.dispose(),Ct.dispose(),it.dispose(),Vt.dispose(),kt.dispose(),B.dispose(),mt.dispose(),qt.dispose(),W.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Tn),ot.removeEventListener("sessionend",kc),gi.stop()};function ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=ht.autoReset,O=wt.enabled,k=wt.autoUpdate,H=wt.needsUpdate,F=wt.type;N(),ht.autoReset=T,wt.enabled=O,wt.autoUpdate=k,wt.needsUpdate=H,wt.type=F}function rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function K(T){const O=T.target;O.removeEventListener("dispose",K),Tt(O)}function Tt(T){Gt(T),it.remove(T)}function Gt(T){const O=it.get(T).programs;O!==void 0&&(O.forEach(function(k){W.releaseProgram(k)}),T.isShaderMaterial&&W.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,k,H,F,at){O===null&&(O=Et);const gt=F.isMesh&&F.matrixWorld.determinant()<0,bt=mu(T,O,k,H,F);j.setMaterial(H,gt);let _t=k.index,Nt=1;if(H.wireframe===!0){if(_t=E.getWireframeAttribute(k),_t===void 0)return;Nt=2}const Bt=k.drawRange,It=k.attributes.position;let te=Bt.start*Nt,ue=(Bt.start+Bt.count)*Nt;at!==null&&(te=Math.max(te,at.start*Nt),ue=Math.min(ue,(at.start+at.count)*Nt)),_t!==null?(te=Math.max(te,0),ue=Math.min(ue,_t.count)):It!=null&&(te=Math.max(te,0),ue=Math.min(ue,It.count));const we=ue-te;if(we<0||we===1/0)return;mt.setup(F,H,bt,k,_t);let _e,ge=xt;if(_t!==null&&(_e=R.get(_t),ge=Ot,ge.setIndex(_e)),F.isMesh)H.wireframe===!0?(j.setLineWidth(H.wireframeLinewidth*xe()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(F.isLine){let Dt=H.linewidth;Dt===void 0&&(Dt=1),j.setLineWidth(Dt*xe()),F.isLineSegments?ge.setMode(L.LINES):F.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else F.isPoints?ge.setMode(L.POINTS):F.isSprite&&ge.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ge.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Dt=F._multiDrawStarts,Me=F._multiDrawCounts,se=F._multiDrawCount,nn=_t?R.get(_t).bytesPerElement:1,zi=it.get(H).currentProgram.getUniforms();for(let sn=0;sn<se;sn++)zi.setValue(L,"_gl_DrawID",sn),ge.render(Dt[sn]/nn,Me[sn])}else if(F.isInstancedMesh)ge.renderInstances(te,we,F.count);else if(k.isInstancedBufferGeometry){const Dt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,Dt);ge.renderInstances(te,we,Me)}else ge.render(te,we)};function ve(T,O,k){T.transparent===!0&&T.side===ke&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,mr(T,O,k),T.side=fi,T.needsUpdate=!0,mr(T,O,k),T.side=ke):mr(T,O,k)}this.compile=function(T,O,k=null){k===null&&(k=T),m=Ct.get(k),m.init(O),v.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==k&&T.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const bt=at[gt];ve(bt,k,F),H.add(bt)}else ve(at,k,F),H.add(at)}),m=v.pop(),H},this.compileAsync=function(T,O,k=null){const H=this.compile(T,O,k);return new Promise(F=>{function at(){if(H.forEach(function(gt){it.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){F(T);return}setTimeout(at,10)}Z.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ce=null;function kn(T){ce&&ce(T)}function Tn(){gi.stop()}function kc(){gi.start()}const gi=new eu;gi.setAnimationLoop(kn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(T){ce=T,ot.setAnimationLoop(T),T===null?gi.stop():gi.start()},ot.addEventListener("sessionstart",Tn),ot.addEventListener("sessionend",kc),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(O),O=ot.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,O,b),m=Ct.get(T,v.length),m.init(O),v.push(m),et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),he.setFromProjectionMatrix(et,Ln,O.reversedDepth),$=this.localClippingEnabled,ie=lt.init(this.clippingPlanes,$),g=Y.get(T,w.length),g.init(),w.push(g),ot.enabled===!0&&ot.isPresenting===!0){const at=y.xr.getDepthSensingMesh();at!==null&&xa(at,O,-1/0,y.sortObjects)}xa(T,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(dt,vt),Qt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Qt&&At.addToRenderList(g,T),this.info.render.frame++,ie===!0&&lt.beginShadows();const k=m.state.shadowsArray;wt.render(k,T,O),ie===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,F=g.transmissive;if(m.setupLights(),O.isArrayCamera){const at=O.cameras;if(F.length>0)for(let gt=0,bt=at.length;gt<bt;gt++){const _t=at[gt];Vc(H,F,T,_t)}Qt&&At.render(T);for(let gt=0,bt=at.length;gt<bt;gt++){const _t=at[gt];Hc(g,T,_t,_t.viewport)}}else F.length>0&&Vc(H,F,T,O),Qt&&At.render(T),Hc(g,T,O);b!==null&&S===0&&(ut.updateMultisampleRenderTarget(b),ut.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(y,T,O),mt.resetDefaultState(),M=-1,_=null,v.pop(),v.length>0?(m=v[v.length-1],ie===!0&&lt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function xa(T,O,k,H){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||he.intersectsSprite(T)){H&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(et);const gt=B.update(T),bt=T.material;bt.visible&&g.push(T,gt,bt,k,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||he.intersectsObject(T))){const gt=B.update(T),bt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Pt.copy(gt.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(et)),Array.isArray(bt)){const _t=gt.groups;for(let Nt=0,Bt=_t.length;Nt<Bt;Nt++){const It=_t[Nt],te=bt[It.materialIndex];te&&te.visible&&g.push(T,gt,te,k,Pt.z,It)}}else bt.visible&&g.push(T,gt,bt,k,Pt.z,null)}}const at=T.children;for(let gt=0,bt=at.length;gt<bt;gt++)xa(at[gt],O,k,H)}function Hc(T,O,k,H){const F=T.opaque,at=T.transmissive,gt=T.transparent;m.setupLightsView(k),ie===!0&&lt.setGlobalState(y.clippingPlanes,k),H&&j.viewport(I.copy(H)),F.length>0&&pr(F,O,k),at.length>0&&pr(at,O,k),gt.length>0&&pr(gt,O,k),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Vc(T,O,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Ii(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?or:Fn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const at=m.state.transmissionRenderTarget[H.id],gt=H.viewport||I;at.setSize(gt.z*y.transmissionResolutionScale,gt.w*y.transmissionResolutionScale);const bt=y.getRenderTarget(),_t=y.getActiveCubeFace(),Nt=y.getActiveMipmapLevel();y.setRenderTarget(at),y.getClearColor(V),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Qt&&At.render(k);const Bt=y.toneMapping;y.toneMapping=ui;const It=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),ie===!0&&lt.setGlobalState(y.clippingPlanes,H),pr(T,k,H),ut.updateMultisampleRenderTarget(at),ut.updateRenderTargetMipmap(at),Z.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ue=0,we=O.length;ue<we;ue++){const _e=O[ue],ge=_e.object,Dt=_e.geometry,Me=_e.material,se=_e.group;if(Me.side===ke&&ge.layers.test(H.layers)){const nn=Me.side;Me.side=en,Me.needsUpdate=!0,Gc(ge,k,H,Dt,Me,se),Me.side=nn,Me.needsUpdate=!0,te=!0}}te===!0&&(ut.updateMultisampleRenderTarget(at),ut.updateRenderTargetMipmap(at))}y.setRenderTarget(bt,_t,Nt),y.setClearColor(V,q),It!==void 0&&(H.viewport=It),y.toneMapping=Bt}function pr(T,O,k){const H=O.isScene===!0?O.overrideMaterial:null;for(let F=0,at=T.length;F<at;F++){const gt=T[F],bt=gt.object,_t=gt.geometry,Nt=gt.group;let Bt=gt.material;Bt.allowOverride===!0&&H!==null&&(Bt=H),bt.layers.test(k.layers)&&Gc(bt,O,k,_t,Bt,Nt)}}function Gc(T,O,k,H,F,at){T.onBeforeRender(y,O,k,H,F,at),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(y,O,k,H,T,at),F.transparent===!0&&F.side===ke&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,y.renderBufferDirect(k,O,H,F,T,at),F.side=fi,F.needsUpdate=!0,y.renderBufferDirect(k,O,H,F,T,at),F.side=ke):y.renderBufferDirect(k,O,H,F,T,at),T.onAfterRender(y,O,k,H,F,at)}function mr(T,O,k){O.isScene!==!0&&(O=Et);const H=it.get(T),F=m.state.lights,at=m.state.shadowsArray,gt=F.state.version,bt=W.getParameters(T,F.state,at,O,k),_t=W.getProgramCacheKey(bt);let Nt=H.programs;H.environment=T.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(T.isMeshStandardMaterial?kt:Vt).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",K),Nt=new Map,H.programs=Nt);let Bt=Nt.get(_t);if(Bt!==void 0){if(H.currentProgram===Bt&&H.lightsStateVersion===gt)return Xc(T,bt),Bt}else bt.uniforms=W.getUniforms(T),T.onBeforeCompile(bt,y),Bt=W.acquireProgram(bt,_t),Nt.set(_t,Bt),H.uniforms=bt.uniforms;const It=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=lt.uniform),Xc(T,bt),H.needsLights=xu(T),H.lightsStateVersion=gt,H.needsLights&&(It.ambientLightColor.value=F.state.ambient,It.lightProbe.value=F.state.probe,It.directionalLights.value=F.state.directional,It.directionalLightShadows.value=F.state.directionalShadow,It.spotLights.value=F.state.spot,It.spotLightShadows.value=F.state.spotShadow,It.rectAreaLights.value=F.state.rectArea,It.ltc_1.value=F.state.rectAreaLTC1,It.ltc_2.value=F.state.rectAreaLTC2,It.pointLights.value=F.state.point,It.pointLightShadows.value=F.state.pointShadow,It.hemisphereLights.value=F.state.hemi,It.directionalShadowMap.value=F.state.directionalShadowMap,It.directionalShadowMatrix.value=F.state.directionalShadowMatrix,It.spotShadowMap.value=F.state.spotShadowMap,It.spotLightMatrix.value=F.state.spotLightMatrix,It.spotLightMap.value=F.state.spotLightMap,It.pointShadowMap.value=F.state.pointShadowMap,It.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Bt,H.uniformsList=null,Bt}function Wc(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Qr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Xc(T,O){const k=it.get(T);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function mu(T,O,k,H,F){O.isScene!==!0&&(O=Et),ut.resetTextureUnits();const at=O.fog,gt=H.isMeshStandardMaterial?O.environment:null,bt=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gs,_t=(H.isMeshStandardMaterial?kt:Vt).get(H.envMap||gt),Nt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Bt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!k.morphAttributes.position,te=!!k.morphAttributes.normal,ue=!!k.morphAttributes.color;let we=ui;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(we=y.toneMapping);const _e=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ge=_e!==void 0?_e.length:0,Dt=it.get(H),Me=m.state.lights;if(ie===!0&&($===!0||T!==_)){const $e=T===_&&H.id===M;lt.setState(H,T,$e)}let se=!1;H.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Me.state.version||Dt.outputColorSpace!==bt||F.isBatchedMesh&&Dt.batching===!1||!F.isBatchedMesh&&Dt.batching===!0||F.isBatchedMesh&&Dt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Dt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Dt.instancing===!1||!F.isInstancedMesh&&Dt.instancing===!0||F.isSkinnedMesh&&Dt.skinning===!1||!F.isSkinnedMesh&&Dt.skinning===!0||F.isInstancedMesh&&Dt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Dt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Dt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Dt.instancingMorph===!1&&F.morphTexture!==null||Dt.envMap!==_t||H.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==lt.numPlanes||Dt.numIntersection!==lt.numIntersection)||Dt.vertexAlphas!==Nt||Dt.vertexTangents!==Bt||Dt.morphTargets!==It||Dt.morphNormals!==te||Dt.morphColors!==ue||Dt.toneMapping!==we||Dt.morphTargetsCount!==ge)&&(se=!0):(se=!0,Dt.__version=H.version);let nn=Dt.currentProgram;se===!0&&(nn=mr(H,O,F));let zi=!1,sn=!1,Rs=!1;const Se=nn.getUniforms(),hn=Dt.uniforms;if(j.useProgram(nn.program)&&(zi=!0,sn=!0,Rs=!0),H.id!==M&&(M=H.id,sn=!0),zi||_!==T){j.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",T.projectionMatrix),Se.setValue(L,"viewMatrix",T.matrixWorldInverse);const Ke=Se.map.cameraPosition;Ke!==void 0&&Ke.setValue(L,yt.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Se.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,sn=!0,Rs=!0)}if(F.isSkinnedMesh){Se.setOptional(L,F,"bindMatrix"),Se.setOptional(L,F,"bindMatrixInverse");const $e=F.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Se.setValue(L,"boneTexture",$e.boneTexture,ut))}F.isBatchedMesh&&(Se.setOptional(L,F,"batchingTexture"),Se.setValue(L,"batchingTexture",F._matricesTexture,ut),Se.setOptional(L,F,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",F._indirectTexture,ut),Se.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",F._colorsTexture,ut));const un=k.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&st.update(F,k,nn),(sn||Dt.receiveShadow!==F.receiveShadow)&&(Dt.receiveShadow=F.receiveShadow,Se.setValue(L,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(hn.envMap.value=_t,hn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(hn.envMapIntensity.value=O.environmentIntensity),sn&&(Se.setValue(L,"toneMappingExposure",y.toneMappingExposure),Dt.needsLights&&gu(hn,Rs),at&&H.fog===!0&&Q.refreshFogUniforms(hn,at),Q.refreshMaterialUniforms(hn,H,X,nt,m.state.transmissionRenderTarget[T.id]),Qr.upload(L,Wc(Dt),hn,ut)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qr.upload(L,Wc(Dt),hn,ut),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Se.setValue(L,"center",F.center),Se.setValue(L,"modelViewMatrix",F.modelViewMatrix),Se.setValue(L,"normalMatrix",F.normalMatrix),Se.setValue(L,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const $e=H.uniformsGroups;for(let Ke=0,va=$e.length;Ke<va;Ke++){const xi=$e[Ke];qt.update(xi,nn),qt.bind(xi,nn)}}return nn}function gu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function xu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,O,k){const H=it.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),it.get(T.texture).__webglTexture=O,it.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const k=it.get(T);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0};const vu=L.createFramebuffer();this.setRenderTarget=function(T,O=0,k=0){b=T,A=O,S=k;let H=!0,F=null,at=!1,gt=!1;if(T){const _t=it.get(T);if(_t.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(_t.__webglFramebuffer===void 0)ut.setupRenderTarget(T);else if(_t.__hasExternalTextures)ut.rebindTextures(T,it.get(T.texture).__webglTexture,it.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const It=T.depthTexture;if(_t.__boundDepthTexture!==It){if(It!==null&&it.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(T)}}const Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(gt=!0);const Bt=it.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?F=Bt[O][k]:F=Bt[O],at=!0):T.samples>0&&ut.useMultisampledRTT(T)===!1?F=it.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?F=Bt[k]:F=Bt,I.copy(T.viewport),U.copy(T.scissor),z=T.scissorTest}else I.copy(Mt).multiplyScalar(X).floor(),U.copy(Wt).multiplyScalar(X).floor(),z=ee;if(k!==0&&(F=vu),j.bindFramebuffer(L.FRAMEBUFFER,F)&&H&&j.drawBuffers(T,F),j.viewport(I),j.scissor(U),j.setScissorTest(z),at){const _t=it.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,k)}else if(gt){const _t=O;for(let Nt=0;Nt<T.textures.length;Nt++){const Bt=it.get(T.textures[Nt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Nt,Bt.__webglTexture,k,_t)}}else if(T!==null&&k!==0){const _t=it.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_t.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(T,O,k,H,F,at,gt,bt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=it.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(_t=_t[gt]),_t){j.bindFramebuffer(L.FRAMEBUFFER,_t);try{const Nt=T.textures[bt],Bt=Nt.format,It=Nt.type;if(!J.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-H&&k>=0&&k<=T.height-F&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt),L.readPixels(O,k,H,F,Rt.convert(Bt),Rt.convert(It),at))}finally{const Nt=b!==null?it.get(b).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,O,k,H,F,at,gt,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=it.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(_t=_t[gt]),_t)if(O>=0&&O<=T.width-H&&k>=0&&k<=T.height-F){j.bindFramebuffer(L.FRAMEBUFFER,_t);const Nt=T.textures[bt],Bt=Nt.format,It=Nt.type;if(!J.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+bt),L.readPixels(O,k,H,F,Rt.convert(Bt),Rt.convert(It),0);const ue=b!==null?it.get(b).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,ue);const we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await md(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at),L.deleteBuffer(te),L.deleteSync(we),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,k=0){const H=Math.pow(2,-k),F=Math.floor(T.image.width*H),at=Math.floor(T.image.height*H),gt=O!==null?O.x:0,bt=O!==null?O.y:0;ut.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,gt,bt,F,at),j.unbindTexture()};const _u=L.createFramebuffer(),yu=L.createFramebuffer();this.copyTextureToTexture=function(T,O,k=null,H=null,F=0,at=null){at===null&&(F!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=F,F=0):at=0);let gt,bt,_t,Nt,Bt,It,te,ue,we;const _e=T.isCompressedTexture?T.mipmaps[at]:T.image;if(k!==null)gt=k.max.x-k.min.x,bt=k.max.y-k.min.y,_t=k.isBox3?k.max.z-k.min.z:1,Nt=k.min.x,Bt=k.min.y,It=k.isBox3?k.min.z:0;else{const un=Math.pow(2,-F);gt=Math.floor(_e.width*un),bt=Math.floor(_e.height*un),T.isDataArrayTexture?_t=_e.depth:T.isData3DTexture?_t=Math.floor(_e.depth*un):_t=1,Nt=0,Bt=0,It=0}H!==null?(te=H.x,ue=H.y,we=H.z):(te=0,ue=0,we=0);const ge=Rt.convert(O.format),Dt=Rt.convert(O.type);let Me;O.isData3DTexture?(ut.setTexture3D(O,0),Me=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ut.setTexture2DArray(O,0),Me=L.TEXTURE_2D_ARRAY):(ut.setTexture2D(O,0),Me=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const se=L.getParameter(L.UNPACK_ROW_LENGTH),nn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zi=L.getParameter(L.UNPACK_SKIP_PIXELS),sn=L.getParameter(L.UNPACK_SKIP_ROWS),Rs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,It);const Se=T.isDataArrayTexture||T.isData3DTexture,hn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const un=it.get(T),$e=it.get(O),Ke=it.get(un.__renderTarget),va=it.get($e.__renderTarget);j.bindFramebuffer(L.READ_FRAMEBUFFER,Ke.__webglFramebuffer),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,va.__webglFramebuffer);for(let xi=0;xi<_t;xi++)Se&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.get(T).__webglTexture,F,It+xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.get(O).__webglTexture,at,we+xi)),L.blitFramebuffer(Nt,Bt,gt,bt,te,ue,gt,bt,L.DEPTH_BUFFER_BIT,L.NEAREST);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||it.has(T)){const un=it.get(T),$e=it.get(O);j.bindFramebuffer(L.READ_FRAMEBUFFER,_u),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,yu);for(let Ke=0;Ke<_t;Ke++)Se?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,un.__webglTexture,F,It+Ke):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,un.__webglTexture,F),hn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$e.__webglTexture,at,we+Ke):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$e.__webglTexture,at),F!==0?L.blitFramebuffer(Nt,Bt,gt,bt,te,ue,gt,bt,L.COLOR_BUFFER_BIT,L.NEAREST):hn?L.copyTexSubImage3D(Me,at,te,ue,we+Ke,Nt,Bt,gt,bt):L.copyTexSubImage2D(Me,at,te,ue,Nt,Bt,gt,bt);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else hn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Me,at,te,ue,we,gt,bt,_t,ge,Dt,_e.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,at,te,ue,we,gt,bt,_t,ge,_e.data):L.texSubImage3D(Me,at,te,ue,we,gt,bt,_t,ge,Dt,_e):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,at,te,ue,gt,bt,ge,Dt,_e.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,at,te,ue,_e.width,_e.height,ge,_e.data):L.texSubImage2D(L.TEXTURE_2D,at,te,ue,gt,bt,ge,Dt,_e);L.pixelStorei(L.UNPACK_ROW_LENGTH,se),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,nn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zi),L.pixelStorei(L.UNPACK_SKIP_ROWS,sn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rs),at===0&&O.generateMipmaps&&L.generateMipmap(Me),j.unbindTexture()},this.initRenderTarget=function(T){it.get(T).__webglFramebuffer===void 0&&ut.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ut.setTextureCube(T,0):T.isData3DTexture?ut.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ut.setTexture2DArray(T,0):ut.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){A=0,S=0,b=null,j.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}function Uc(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ce;let l=0;for(let h=0;h<i.length;++h){const p=i[h];let f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u])}if(t){let u;if(e)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(e){let h=0;const p=[];for(let f=0;f<i.length;++f){const u=i[f].index;for(let d=0;d<u.count;++d)p.push(u.getX(d)+h);h+=i[f].attributes.position.count}c.setIndex(p)}for(const h in r){const p=sh(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(const h in a){const p=a[h][0].length;if(p===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<p;++f){const u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][f]);const d=sh(u);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(d)}}return c}function sh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ve(a,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const p=c/e;for(let f=0,u=h.count;f<u;f++)for(let d=0;d<e;d++){const x=h.getComponent(f,d);o.setComponent(f+p,d,x)}}else a.set(h.array,c);c+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function rh(i){const t=[i.userData.head,...i.userData.limbs],e=new Set(t),n=new Set,s=new Set;i.updateMatrixWorld(!0);for(const r of[i,...t]){const a=[],o=f=>{for(const u of f.children)e.has(u)||(u.isMesh&&!Array.isArray(u.material)&&!u.material.transparent&&!u.material.map?a.push(u):o(u))};if(o(r),!a.length)continue;const c=r.matrixWorld.clone().invert(),l=a.map(f=>{const u=f.geometry.index?f.geometry.toNonIndexed():f.geometry.clone();u.applyMatrix4(new le().multiplyMatrices(c,f.matrixWorld));for(const g of Object.keys(u.attributes))["position","normal"].includes(g)||u.deleteAttribute(g);const d=f.material.color,x=new Float32Array(u.attributes.position.count*3);for(let g=0;g<x.length;g+=3)x[g]=d.r,x[g+1]=d.g,x[g+2]=d.b;return u.setAttribute("color",new Ve(x,3)),u}),h=Uc(l);if(l.forEach(f=>f.dispose()),!h)continue;const p=new Ft(h,new ne({vertexColors:!0,roughness:.8}));p.castShadow=p.receiveShadow=!0,r.add(p);for(const f of a)f.removeFromParent(),n.add(f.geometry),s.add(f.material)}n.forEach(r=>r.dispose()),s.forEach(r=>r.dispose())}function au(i=!1){const t=new Ht,e=new Ht,n=[],s=[],r=new ne({color:7423277,roughness:.8}),a=new ne({color:13937784,roughness:.8}),o=new ne({color:1582383}),c=new ne({color:16768113}),l=(g,m,w,v,y,C,A,S)=>{const b=new Ft(new Ae(1,12,8),m);return b.position.set(w,v,y),b.scale.set(C,A,S),b.castShadow=b.receiveShadow=!0,g.add(b),b};l(t,r,0,.57,0,.29,.36,.23),l(t,a,0,.56,.21,.19,.25,.045),e.position.set(0,1.12,.035),t.add(e),l(e,r,0,0,0,.31,.29,.265),l(e,a,0,-.085,.17,.23,.175,.15);for(const g of[-1,1]){const m=new Ht;m.position.set(g*.31,.015,0),e.add(m),l(m,r,0,0,0,.125,.15,.065),l(m,a,0,0,.05,.085,.1,.023),s.push(m),l(e,a,g*.115,.055,.22,.105,.11,.04),l(e,o,g*.115,.055,.255,.032,.044,.021),l(e,c,g*.12,.069,.274,.009,.011,.006);const w=new Ht;w.position.set(g*.29,.79,0),t.add(w),l(w,r,g*.045,-.2,0,.095,.29,.09),l(w,a,g*.045,-.43,.035,.09,.085,.085),n.push(w);const v=new Ht;v.position.set(g*.16,.28,-.045),t.add(v),l(v,r,0,-.075,0,.12,.19,.12),l(v,a,0,-.22,.085,.12,.085,.19),n.push(v)}l(e,o,0,-.09,.31,.067,.04,.029);const h=new Ft(new Le(.085,.009,5,14,Math.PI),o);h.position.set(0,-.125,.306),h.rotation.z=Math.PI,e.add(h);const p=new Ht;p.position.set(0,.4,-.18),t.add(p);const f=new Wh([new D(0,0,0),new D(.15,.12,-.35),new D(.34,.45,-.5),new D(.18,.7,-.42),new D(.025,.58,-.38)]);p.add(new Ft(new Pc(f,16,.044,6,!1),r)),l(e,o,0,.2,-.015,.32,.13,.27),l(e,c,0,.235,.22,.26,.023,.15),l(e,c,0,.3,.21,.045,.045,.02);const u=new Ht;u.position.set(.045,-.39,.1),n[2].add(u);const d=new Ft(new Zt(.045,.045,.14,8),c);u.add(d);const x=l(t,c,0,.72,.255,.07,.035,.012);return t.userData={head:e,limbs:n,ears:s,tail:p,can:u,badge:x,character:{id:"macaco",idle:"monkey"},legs:[n[1],n[3]],arms:[n[0],n[2]],saddle:null},i&&(t.scale.setScalar(1.12),e.position.y=.98,e.position.z=.19,t.userData.saddle=l(t,o,0,.81,-.035,.21,.045,.16)),{rig:t,head:e,limbs:n}}const ks=new D;function fn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ks.copy(t),ks[n]=0,ks.normalize();const l=.5*a/(a+o),h=1-ks.angleTo(i)/c;return Math.sign(ks[e])===1?h*l:o/(a+o)+l+l*(1-h)}class Be extends ae{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new D,l=new D,h=new D(t,e,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,d=p.length/6,x=new D,g=.5/a;for(let m=0,w=0;m<p.length;m+=3,w+=2)switch(c.fromArray(p,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),p[m+0]=h.x*Math.sign(c.x)+l.x*r,p[m+1]=h.y*Math.sign(c.y)+l.y*r,p[m+2]=h.z*Math.sign(c.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/d)){case 0:x.set(1,0,0),u[w+0]=fn(x,l,"z","y",r,n),u[w+1]=1-fn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),u[w+0]=1-fn(x,l,"z","y",r,n),u[w+1]=1-fn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),u[w+0]=1-fn(x,l,"x","z",r,t),u[w+1]=fn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),u[w+0]=1-fn(x,l,"x","z",r,t),u[w+1]=1-fn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),u[w+0]=1-fn(x,l,"x","y",r,t),u[w+1]=1-fn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),u[w+0]=fn(x,l,"x","y",r,t),u[w+1]=1-fn(x,l,"y","x",r,e);break}}static fromJSON(t){return new Be(t.width,t.height,t.depth,t.segments,t.radius)}}const Ie=i=>new ne({color:i,roughness:.8});function Qn(i,t=!1,e=!1){if(i==="macaco"&&!t){const A=au();return A.rig.userData.character=Xe(i),e&&rh(A.rig),{...A,character:Xe(i)}}const n=t?Mu:Xe(i),s=new Ht,r=[],a=new Ht,o=Ie(n.skin),c=Ie(n.shirt),l=Ie(n.pants||2237739),h=Ie(n.color),p=Ie(n.hairColor||2695969),f=Ie(16052705),u=(A,S,b,M=0,_=0,I=0)=>{const U=new Ft(A,S);return U.position.set(M,_,I),U.castShadow=U.receiveShadow=!0,b.add(U),U},d=(A,S,b,M,_,I)=>u(new Ae(A,12,9),S,b,M,_,I),x=(A,S,b,M,_,I,U,z,V=.045)=>u(new Be(A,S,b,2,Math.min(V,A/3,S/3,b/3)),M,_,I,U,z),g=n.wide?1.12:1,m=n.hair==="yeti";x(.49*g,.48,.32,c,s,0,.65,0,.1),x(.44*g,.18,.29,l,s,0,.38,0,.05),a.position.y=1.14,s.add(a);const w=x(.54,.52,.45,o,a,0,0,0,.13);for(const A of[-1,1]){d(.085,o,a,A*.275,-.045,0);const S=new Ht;S.position.set(A*.33*g,.82,0),s.add(S),u(new fa(.095,.18,3,8),n.bareTorso?o:c,S,0,-.12,0),d(.095,o,S,0,-.275,.005),r.push(S);const b=new Ht;b.position.set(A*.14,.34,0),s.add(b),x(.15,.23,.17,l,b,0,-.07,0),x(.22,.16,.3,m?f:h,b,0,-.23,.045),x(.225,.04,.31,f,b,0,-.3,.045),r.push(b),n.glasses||(x(.044,.072,.023,l,a,A*.105,.015,.227,.009),x(.105,.028,.023,p,a,A*.103,.12,.229,.008))}if(d(.047,o,a,0,-.06,.252),x(.13,.018,.024,n.beard?p:l,a,0,-.16,.232,.008),n.beard&&(n.beard==="full"?(d(.245,p,a,0,-.145,.047).scale.set(1,.66,1),x(.18,.06,.035,o,a,0,-.105,.264)):n.beard==="goatee"?(x(.14,.065,.035,p,a,0,-.225,.213),x(.18,.024,.035,p,a,0,-.14,.23)):n.beard==="short"?x(.38,.07,.055,p,a,0,-.222,.16):x(.21,.035,.025,p,a,0,-.13,.252,.01)),n.glasses){for(const A of[-1,1])d(.127,h,a,A*.123,.03,.247).scale.set(1,.62,.21),d(.108,l,a,A*.123,.035,.273).scale.set(1,.62,.17),x(.028,.022,.025,f,a,A*.14,.064,.293,.006);x(.1,.025,.025,h,a,0,.046,.263)}if(n.piercing){const A=u(new Le(.046,.012,5,14),h,a,-.297,-.09,.04);A.rotation.y=.4}n.earbuds&&x(.04,.09,.05,h,a,-.31,-.05,.035);const v=n.hair;if(["crop","quiff","fringe"].includes(v)&&(d(.286,p,a,0,.14,-.025).scale.set(1,.58,.91),v!=="crop"))for(let S=0;S<4;S++){const b=d(.115,p,a,(S-1.5)*.105,.235+(v==="quiff"?.03:0),.105);b.scale.set(1,v==="fringe"?1:1.3,1),v==="fringe"&&(b.position.y-=S*.022)}if(["curls","afro"].includes(v)){const A=v==="afro"?13:10;for(let S=0;S<A;S++){const b=S/A*Math.PI*2;d(v==="afro"?.135:.105,p,a,Math.cos(b)*.27,.14+Math.sin(b)*.135,-.055+Math.sin(b)*.2)}for(let S=0;S<5;S++)d(.12,p,a,(S-2)*.103,.315,-.05);if(v==="curls")for(const S of[-1,1])for(let b=0;b<3;b++)d(.105,p,a,S*.285,.08-b*.13,-.04)}if(v==="bowlLong"){d(.31,p,a,0,.18,-.025).scale.set(1,.7,1);for(const S of[-1,1]){const b=x(.14,.57,.34,p,a,S*.255,-.1,-.065,.065);b.rotation.z=S*.045}x(.49,.52,.13,p,a,0,-.09,-.23,.06);for(let S=0;S<5;S++)x(.1,.1,.05,p,a,(S-2)*.094,.16-Math.abs(S-2)*.013,.218,.025)}if(v==="longWaves"){d(.29,p,a,0,.17,-.05).scale.set(1,.7,1),x(.48,.75,.13,p,a,0,-.14,-.235,.06);for(const S of[-1,1])for(let b=0;b<5;b++)d(.135,p,a,S*(.255+.025*Math.sin(b*1.5)),.16-b*.15,-.075).scale.set(.85,1.45,1)}if(v==="bucket"){const A=Ie(n.hat);u(new Zt(.3,.33,.27,16),A,a,0,.3,0),u(new Zt(.4,.43,.055,18),A,a,0,.16,0),u(new Zt(.321,.331,.045,16),Ie(12729665),a,0,.205,0)}if(n.earrings)for(const A of[-1,1]){const S=u(new Le(.075,.014,5,14),Ie(12371924),a,A*.29,-.14,.045);S.rotation.y=A*.25}if(n.cheekStud&&d(.022,Ie(14805229),a,.22,-.055,.232),n.lips&&x(.145,.04,.025,Ie(n.lips),a,0,-.157,.252,.015),n.necklace){const A=u(new Le(.19,.009,4,18),Ie(12898011),s,0,.84,.12);A.rotation.x=.7;for(const S of[-1,1])d(.027,Ie(6932956),s,S*.085,.69,.183),d(.012,l,s,S*.085,.69,.209)}if(n.bareTorso){for(const A of[-1,1]){for(let S=0;S<4;S++)x(.14,.023,.11,p,r[A<0?0:2],0,-.04-S*.052,.04);for(let S=0;S<3;S++)x(.08,.035,.022,p,s,A*.17,.76-S*.075,.168)}x(.11,.1,.025,p,a,-.2,-.21,.13,.025)}if(v==="cap"){const A=Ie(n.hat);d(.29,A,a,0,.18,-.015).scale.set(1,.63,1),x(.39,.045,.31,A,a,0,.22,.256),x(.07,.065,.021,h,a,0,.285,.24)}if(v==="beanie"){const A=Ie(n.hat);d(.31,A,a,0,.23,0).scale.set(1,.85,.95),u(new Zt(.302,.302,.105,16),A,a,0,.18,0);for(let b=0;b<9;b++)x(.018,.092,.025,n.id==="mm"?l:h,a,(b-4)*.058,.185,.264);x(.075,.06,.015,f,a,.13,.19,.293)}if(v==="fedora"){const A=Ie(n.hat);u(new Zt(.41,.41,.045,18),A,a,0,.22,0),u(new Zt(.255,.28,.25,14),A,a,0,.34,0),u(new Zt(.278,.287,.06,14),Ie(14109749),a,0,.245,0)}if(v==="hood"){const A=d(.36,c,a,0,.02,-.045);A.scale.set(1,1.08,1),a.remove(w),a.add(w),w.position.z=.13;for(const S of[...a.children])S!==A&&S!==w&&S.position.z>0&&(S.position.z+=.12)}if(m){const A=d(.36,f,a,0,.05,-.025);A.scale.set(1,1.02,1),w.scale.set(.83,.85,1),w.position.z=.12,a.remove(w),a.add(w);for(const S of[...a.children])S!==A&&S!==w&&S.position.z>0&&(S.position.z+=.14);for(const S of[-1,1]){const b=u(new On(.065,.19,8),h,a,S*.28,.35,-.03);b.rotation.z=-S*.5;for(let M=0;M<3;M++)u(new On(.085,.16,6),f,s,S*.29,.83-M*.13,0).rotation.z=S*.5}s.scale.x=1.14}if(n.skater){x(.55,.15,.37,c,s,0,.44,0,.045);for(const S of[-1,1])x(.018,.19,.02,f,s,S*.08,.77,.182,.006);const A=new Ht;s.add(A),A.position.set(-.37,.55,-.22),A.rotation.z=.22,x(.22,.91,.07,h,A,0,0,0,.07),x(.15,.75,.025,l,A,0,0,.045,.02);for(const S of[-.3,.3])for(const b of[-.14,.14]){const M=u(new Zt(.043,.043,.05,8),f,A,b,S,-.05);M.rotation.z=Math.PI/2}x(.26,.06,.02,h,s,0,.64,.18,.006)}if(n.scarf&&(u(new Le(.205,.075,6,16),f,s,0,.895,0).rotation.x=Math.PI/2,x(.1,.21,.035,f,s,.11,.74,.19)),n.vest)for(const A of[-1,1])x(.13,.42,.08,l,s,A*.17,.67,.18);if(n.strap){const A=x(.055,.54,.045,l,s,0,.65,.18);A.rotation.z=-.55,x(.22,.26,.14,n.id==="erraro"?Ie(11812162):l,s,.13,.55,-.22)}if(n.tattoo)for(let A=0;A<3;A++)x(.14,.015,.1,l,r[0],0,-.2-A*.03,.045);if(n.pattern)for(let A=0;A<5;A++)x(.045,.085,.023,Ie(A%2?2369579:13977659),s,(A%3-1)*.13,.54+Math.floor(A/3)*.16,.17).rotation.z=.45;const y=new Ht;r[2].add(y),y.position.set(0,-.3,.06),u(new Zt(.047,.047,.15,8),h,y,0,-.03,0),u(new Zt(.038,.038,.025,8),f,y,0,.058,0),x(.022,.025,.025,l,y,0,.08,0);const C=x(.115,.035,.023,h,s,-.07,.72,.17);return s.userData={head:a,limbs:r,character:n,can:y,badge:C},e&&rh(s),{rig:s,limbs:r,head:a,character:n}}function _s(i,t,e=0,n=!1){const s=i.userData;if(!s.head)return;const r=t*.001,a=(1-e)*(n?.12:1),o=s.character.idle;s.head.rotation.z=(o==="sway"?.09:o==="lean"?.06:.025)*Math.sin(r*1.6)*a,s.head.rotation.y=Math.sin(r*.9)*.1*a,o==="nod"&&(s.head.rotation.x=Math.sin(r*2.3)*.065*a);const c=Math.max(0,Math.sin(r*.75))**8*a;o==="peace"&&(s.limbs[0].rotation.z=-c*.7),o==="hat"&&(s.limbs[2].rotation.x-=c*1.6),o==="skate"&&(s.limbs[0].rotation.z=-.1*a,s.limbs[2].rotation.z=.12*a,s.head.rotation.x=Math.sin(r*1.2)*.08*a),o==="spray"&&(s.limbs[2].rotation.x-=.25*a+Math.sin(r*2.5)*.12*a,s.head.rotation.y+=.12*a),o==="wave"&&(s.limbs[0].rotation.z=-c*.8,s.limbs[0].rotation.x-=c*.4,s.head.rotation.z+=Math.sin(r*1.3)*.03*a),o==="yeti"&&(s.head.rotation.x=Math.sin(r*1.4)*.1*a,s.limbs[0].rotation.z=-.15*a,s.limbs[2].rotation.z=.15*a),o==="monkey"&&(s.head.rotation.x=Math.sin(r*2.4)*.1*a,s.limbs[0].rotation.z=-.3*a,s.limbs[2].rotation.z=.3*a,s.tail&&(s.tail.rotation.y=Math.sin(r*2.5)*.2))}function ys(i){const t=new Set,e=new Set;i.traverse(n=>{n.geometry&&t.add(n.geometry),n.material&&e.add(n.material)});for(const n of t)n.dispose();for(const n of e)n.dispose()}class fx{constructor(t){this.host=t,this.renderer=new dr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=ze,this.renderer.toneMapping=ar,this.scene=new lr,this.camera=new He(30,1,.1,20),this.camera.position.set(2,1.75,4.5),this.camera.lookAt(0,.9,0),this.scene.add(new ur(16777215,7832203,3));const e=new Li(16770762,4);e.position.set(-3,5,4),this.scene.add(e),this.renderer.setSize(220,220),this.portraits={};for(const n of Sn){const{rig:s}=Qn(n.id);this.scene.add(s),this.renderer.render(this.scene,this.camera),this.portraits[n.id]=this.renderer.domElement.toDataURL("image/png"),this.scene.remove(s),ys(s)}this.renderer.setSize(matchMedia("(pointer:coarse)").matches?240:400,matchMedia("(pointer:coarse)").matches?240:400),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",t.appendChild(this.renderer.domElement),this.select("priks")}select(t){this.id!==t&&(this.id=t,this.avatar&&(this.scene.remove(this.avatar),ys(this.avatar)),this.avatar=Qn(t).rig,this.avatar.rotation.y=-.15,this.scene.add(this.avatar),this.renderer.domElement.setAttribute("aria-label",`Personagem 3D ${Xe(t).name}`))}render(t){if(!this.avatar)return;this.avatar.userData.limbs.forEach(n=>{n.rotation.x=0,n.rotation.z=0}),this.avatar.position.y=Math.sin(t*.0018)*.02,this.avatar.rotation.y=.05+Math.sin(t*45e-5)*.18,_s(this.avatar,t,0,matchMedia("(prefers-reduced-motion:reduce)").matches),this.renderer.render(this.scene,this.camera)}}class px{constructor(t){this.host=t,this.active=!1,this.key=""}update(t){if(!(t.matchMode!=="territory"&&["results","champion"].includes(t.phase))){this.close();return}const n=`${t.round}:${t.phase}:${t.winner}:${t.championId}`;if(n===this.key)return;this.close(),this.key=n,this.active=!0,this.started=performance.now(),this.host.hidden=!1,this.renderer=new dr({antialias:!0,alpha:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=ze,this.renderer.toneMapping=ar,this.host.replaceChildren(this.renderer.domElement),this.scene=new lr,this.camera=new He(32,1,.1,25),this.scene.add(new ur(14413823,2438225,3));const s=new Li(16773052,4);s.position.set(-3,5,4),this.scene.add(s);const r=new Li(10611199,2);r.position.set(3,2,-3),this.scene.add(r);const a=t.phase==="champion"?t.championId:t.winner,o=t.players.find(u=>u.id===a);this.tie=!o,this.actors=[];const c=o?[o]:t.players.slice(0,matchMedia("(pointer:coarse)").matches?2:4);if(c.forEach((u,d)=>{const x=Qn(u.characterId,!1,!0).rig;x.position.x=(d-(c.length-1)/2)*1.25,x.rotation.y=-.12,this.scene.add(x),this.actors.push(x)}),o){const u=this.actors[0].userData;this.cup=new Ht;const d=new ne({color:16768111,metalness:.6,roughness:.25}),x=new ne({color:2704218}),g=(w,v,y)=>{const C=new Ft(w,v);C.position.y=y,this.cup.add(C)};g(new Zt(.13,.17,.08,12),x,-.21),g(new Zt(.035,.06,.2,10),d,-.07),g(new Zt(.19,.07,.23,16,1,!0),d,.12),g(new Ae(.07,10,8),d,.2);for(const w of[-1,1]){const v=new Ft(new Le(.1,.022,6,16),d);v.position.set(w*.18,.13,0),this.cup.add(v)}u.limbs[2].add(this.cup),this.cup.position.set(0,-.35,.11);const m=new Ft(new Zt(.75,.9,.13,24),x);m.position.y=-.12,this.scene.add(m)}const l=this.tie?20:64,h=new Float32Array(l*3),p=new Float32Array(l*3);this.confettiBase=[];for(let u=0;u<l;u++){const d=[Math.sin(u*12.9)*2.3,u%11/5+.9,Math.cos(u*9.1)*.6];h.set(d,u*3),this.confettiBase.push(d);const x=new Xt([16768888,9428991,16748725,11726209][u%4]);p.set([x.r,x.g,x.b],u*3)}const f=new Ce;f.setAttribute("position",new Ve(h,3)),f.setAttribute("color",new Ve(p,3)),this.confetti=new da(f,new hr({size:.055,vertexColors:!0})),this.scene.add(this.confetti)}close(){this.active&&(ys(this.scene),this.renderer.dispose(),this.renderer.forceContextLoss(),this.host.replaceChildren(),this.host.hidden=!0,this.active=!1,this.key="")}render(t){if(!this.active)return;const e=this.host.clientWidth,n=this.host.clientHeight;if(!e||!n)return;const s=this.renderer.getPixelRatio();(this.renderer.domElement.width!==Math.round(e*s)||this.renderer.domElement.height!==Math.round(n*s))&&(this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix());const r=(t-this.started)*.001,a=matchMedia("(prefers-reduced-motion:reduce)").matches;this.actors.forEach((c,l)=>{const h=c.userData;h.limbs.forEach(p=>{p.rotation.x=0,p.rotation.z=0}),_s(c,t,0,a),c.rotation.y=this.tie?Math.sin(r*.8+l)*.1:Math.sin(r*1.8)*.17,c.position.y=a?0:this.tie?Math.sin(r*2+l)*.025:Math.max(0,Math.sin(r*3))*Math.min(.12,r*.1),h.head.rotation.x=this.tie?.16:Math.sin(r*2)*.07,this.tie?(h.limbs[0].rotation.z=-.4,h.limbs[2].rotation.z=.4):(h.limbs[0].rotation.z=-.9,h.limbs[2].rotation.x=-2.65,h.limbs[2].rotation.z=.25)});const o=this.confetti.geometry.attributes.position;a||(this.confettiBase.forEach((c,l)=>o.setXYZ(l,c[0]+Math.sin(r+l)*.13,(c[1]-r*.3+3)%3-.1,c[2])),o.needsUpdate=!0),this.camera.position.set(this.tie?.25:1,1.35,Math.max(this.tie?6.4:4.6,(this.tie?2.1:1.05)/(Math.tan(16*Math.PI/180)*this.camera.aspect))),this.camera.lookAt(0,.85,0),this.renderer.render(this.scene,this.camera)}}const ah=[{x:-3,z:-2},{x:3,z:-2},{x:-3,z:2},{x:3,z:2}];function oh(i,t){return Number.isInteger(i)&&i>=1&&i<=Math.min(4,t||1)}class mx{constructor({audio:t,choose:e,release:n}){this.audio=t,this.choose=e,this.release=n,this.overlay=document.getElementById("storyMap"),this.host=document.getElementById("storyMapCanvas"),this.active=!1,this.keys=new Set,this.pointers=new Map,this.destination=null,document.getElementById("mapClose").onclick=()=>this.close(),document.getElementById("mapEnter").onclick=()=>this.enter(),document.getElementById("storyMapBtn").onclick=()=>this.open(this.state,this.myId),addEventListener("keydown",s=>{!this.active||s.target.matches("input,select")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyS","KeyA","KeyD","Enter","Escape"].includes(s.code)&&(s.preventDefault(),s.stopImmediatePropagation(),s.code==="Escape"?this.close():s.code==="Enter"&&!s.repeat?this.enter():(this.keys.add(s.code),this.destination=null))},!0),addEventListener("keyup",s=>{this.active&&this.keys.delete(s.code)},!0),addEventListener("blur",()=>{this.keys.clear(),this.pointers.clear()});for(const s of this.overlay.querySelectorAll("[data-map-dir]")){s.addEventListener("pointerdown",r=>{r.preventDefault(),s.setPointerCapture(r.pointerId),this.pointers.set(r.pointerId,s.dataset.mapDir),this.destination=null});for(const r of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(r,a=>this.pointers.delete(a.pointerId))}this.host.addEventListener("pointerdown",s=>{if(!this.active)return;const r=this.host.getBoundingClientRect(),a=new ct((s.clientX-r.left)/r.width*2-1,1-(s.clientY-r.top)/r.height*2),o=new Pf;o.setFromCamera(a,this.camera);const c=o.ray.intersectPlane(new ai(new D(0,1,0),0),new D);c&&(this.destination={x:Math.max(-4.1,Math.min(4.1,c.x)),z:Math.max(-3.1,Math.min(3.1,c.z))})})}sync(t,e){this.state=t,this.myId=e,this.active&&(t.phase!=="lobby"||t.matchMode!=="story")&&this.close(),this.active&&(this.unlocked=t.storyUnlocked||1,this.refresh())}open(t=this.state,e=this.myId){if(!t||t.matchMode!=="story"||t.phase!=="lobby"||this.active)return;this.state=t,this.myId=e,this.unlocked=t.storyUnlocked||1,this.release(),this.active=!0,this.overlay.hidden=!1,document.body.classList.add("map-open"),this.keys.clear(),this.pointers.clear(),this.destination=null,this.renderer=new dr({antialias:!0,alpha:!1,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.4)),this.renderer.outputColorSpace=ze,this.host.replaceChildren(this.renderer.domElement),this.scene=new lr,this.scene.background=new Xt(1517888),this.scene.add(new ur(15071999,2899522,3));const n=new Li(16770229,3);n.position.set(-4,8,4),this.scene.add(n),this.camera=new He(42,1,.1,50);const s=(a,o,c,l,h)=>{const p=new Ft(a,new ne({color:o,roughness:.8}));return p.position.set(c,l,h),this.scene.add(p),p};s(new ae(10,.15,8),3163221,0,-.12,0),s(new ae(2.4,.025,7.8),5465209,0,0,0),s(new ae(9.8,.025,1.4),5465209,0,.004,0),this.portals=[];const r=[8836754,10280959,14724351,16750460];ah.forEach((a,o)=>{s(new Zt(.8,.85,.09,20),r[o],a.x,.05,a.z);const c=s(new Le(.57,.055,8,28),r[o],a.x,.9,a.z);this.portals.push(c);const l=document.createElement("canvas");l.width=512,l.height=128;const h=l.getContext("2d");h.fillStyle="#102139",h.fillRect(0,0,512,128),h.textAlign="center",h.font="900 27px Arial",h.fillStyle="#eef8ff",h.fillText(`${o+1}. ${ea[o].subtitle}`,256,51),h.font="700 22px Arial",h.fillStyle="#ffe67a",h.fillText(o<this.unlocked?"MISSÃO LIBERADA":"SALVE O MURAL ANTERIOR",256,93);const p=new Ts(new Fi({map:new wn(l),depthTest:!1}));p.position.set(a.x,2.15,a.z),p.scale.set(2.5,.625,1),this.scene.add(p)});for(const a of[-1,1])for(let o=0;o<3;o++){const c=1.1+o%2*.5;s(new ae(.9,c,.8),[3891323,4867688,4418400][o],a*4.8,c/2,(o-1)*2.4);for(let l=0;l<2;l++)s(new ae(.12,.15,.02),16768912,a*4.8-.15+l*.3,c*.65,(o-1)*2.4+.41)}this.avatar=Qn(t.players.find(a=>a.id===e)?.characterId||"nepo",!1,!0).rig,this.scene.add(this.avatar),this.avatar.position.set(0,0,2.7),this.facing=0,this.lastAt=performance.now(),this.refresh(),document.getElementById("mapEnter").focus()}refresh(){if(!this.active)return;let t=null,e=1/0;ah.forEach((a,o)=>{const c=Math.hypot(a.x-this.avatar.position.x,a.z-this.avatar.position.z);c<e&&(t=o+1,e=c),this.portals[o].material.color.setHex(o<this.unlocked?[8836754,10280959,14724351,16750460][o]:5464432)}),this.near=e<1.15?t:null;const n=this.myId===this.state.hostId,s=oh(this.near,this.unlocked);document.getElementById("mapMission").textContent=this.near?ea[this.near-1].subtitle:"Escolha seu próximo mural",document.getElementById("mapHint").textContent=n?this.near?s?"Toque em Selecionar missão para reunir a crew.":"Salve o mural anterior para liberar esta missão.":"Ande com as setas, WASD ou toque no chão para caminhar.":"Explore a praça. O anfitrião escolhe a missão.";const r=document.getElementById("mapEnter");r.disabled=!n||!s,r.textContent=this.near&&!s?"Missão bloqueada":"Selecionar missão"}enter(){if(!this.active||this.myId!==this.state.hostId||!oh(this.near,this.unlocked))return;const t=this.near;this.audio.click(),this.choose(t),this.close()}close(){this.active&&(this.active=!1,this.keys.clear(),this.pointers.clear(),this.overlay.hidden=!0,document.body.classList.remove("map-open"),ys(this.scene),this.scene.traverse(t=>t.material?.map?.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),this.host.replaceChildren(),document.getElementById("readyBtn").focus())}render(t){if(!this.active)return;const e=Math.min(.05,(t-this.lastAt)/1e3);this.lastAt=t;const n=this.host.clientWidth,s=this.host.clientHeight;if(!n||!s)return;const r=this.renderer.getPixelRatio();(this.renderer.domElement.width!==Math.round(n*r)||this.renderer.domElement.height!==Math.round(s*r))&&(this.renderer.setSize(n,s,!1),this.camera.aspect=n/s,this.camera.updateProjectionMatrix());const a=[...this.pointers.values()],o=this.keys;let c=Number(o.has("ArrowRight")||o.has("KeyD")||a.includes("right"))-Number(o.has("ArrowLeft")||o.has("KeyA")||a.includes("left")),l=Number(o.has("ArrowDown")||o.has("KeyS")||a.includes("down"))-Number(o.has("ArrowUp")||o.has("KeyW")||a.includes("up"));this.destination&&!c&&!l&&(c=this.destination.x-this.avatar.position.x,l=this.destination.z-this.avatar.position.z,Math.hypot(c,l)<.1&&(this.destination=null,c=l=0));const h=Math.hypot(c,l),p=h>.01?1:0;if(p){const u=Math.min(h,e*2.8);this.avatar.position.x=Math.max(-4.1,Math.min(4.1,this.avatar.position.x+c/h*u)),this.avatar.position.z=Math.max(-3.1,Math.min(3.1,this.avatar.position.z+l/h*u)),this.facing=Math.atan2(c,l)}this.avatar.rotation.y=this.facing,this.avatar.userData.limbs.forEach((u,d)=>u.rotation.x=Math.sin(t*.012+d*Math.PI)*p*.5),this.avatar.position.y=p?Math.abs(Math.sin(t*.012))*.04:0,_s(this.avatar,t,p,matchMedia("(prefers-reduced-motion:reduce)").matches),this.portals.forEach((u,d)=>{u.rotation.y=Math.sin(t*8e-4+d)*.12,u.scale.setScalar(1+Math.sin(t*.002+d)*.04)}),this.refresh();const f=Math.max(10.4,5.5/(Math.tan(21*Math.PI/180)*this.camera.aspect));this.camera.position.set(0,f*.75,f*.72),this.camera.lookAt(0,.25,0),this.renderer.render(this.scene,this.camera)}}const gx={priks:"A rua tem nossa marca!",nepo:"Chegou a crew!",norok:"Pode vir pra arena!",trane:"Vamos colorir isso aqui!",gom:"Hoje tem graffiti!",off:"Bora pro corre!",aska:"Deixa comigo!",sinuk:"A arte não para!",talyn:"Nossa cor tá viva!",anjo:"Tamo junto!",mm:"É a TDG!",bola:"Cheguei pra somar!",patek:"Partiu arena!",icon:"Cada traço, uma história!",skyf:"O frio chegou!",rodef:"De skate pela cidade!",erraro:"Sem medo de errar!",caldas:"Agora é nossa vez!",macaco:"Uh, uh! É a TDG!"};class xx{constructor(t){this.audio=t,this.enabled=!0,this.volume=.8,this.current=null,this.lastAt=-1/0;try{const e=JSON.parse(localStorage.getItem("tdg-voice")||"null");e&&(this.enabled=e.enabled!==!1,this.volume=e.volume??.8)}catch{}this.synth=globalThis.speechSynthesis}available(){return!!this.synth?.getVoices().some(t=>/^pt\b/i.test(t.lang))}save(){try{localStorage.setItem("tdg-voice",JSON.stringify({enabled:this.enabled,volume:this.volume}))}catch{}}stop(){this.current&&(this.current=null,this.synth?.cancel(),this.audio.ducked=!1,this.audio.fadeMusic())}say(t,e="nepo",n=!1){const s=this.audio;if(!t||!this.enabled||!s.enabled||!s.unlocked||s.suspended||!this.synth||typeof globalThis.SpeechSynthesisUtterance!="function")return!1;const r=this.synth.getVoices().filter(h=>/^pt\b/i.test(h.lang)).sort((h,p)=>Number(/^pt-BR/i.test(p.lang))-Number(/^pt-BR/i.test(h.lang)));if(!r.length)return!1;const a=performance.now();if(!n&&(this.current||a-this.lastAt<2800))return!1;this.stop();const o=Math.max(0,Sn.findIndex(h=>h.id===e)),c=new SpeechSynthesisUtterance(t);c.voice=r[o%r.length],c.lang=c.voice.lang,c.rate=e==="skyf"?.88:e==="macaco"?1.12:1.02+o%3*.035,c.pitch=e==="skyf"?.7:e==="caldas"?1.18:e==="macaco"?1.35:.9+o%4*.075,c.volume=this.volume*s.volume,this.current=c,this.lastAt=a,s.ducked=!0,s.fadeMusic();const l=()=>{this.current===c&&(this.current=null,s.ducked=!1,s.fadeMusic())};return c.onend=l,c.onerror=l,this.synth.speak(c),!0}callout(t,e){const n=Xe(t),s=e==="select"?gx[n.id]:e==="win"?`${n.name}! Mais um troféu pra crew!`:e==="hurt"?"Ainda estamos no corre!":e==="start"?"Bora pra arena!":e==="kick"?"Chute liberado!":e==="monkey"?"O macaco da TDG chegou!":e==="pickup"?"Mais poder pra crew!":"";return this.say(s,n.id,e==="win")}dialogue(t,e){const n=Sn.find(s=>s.name===t)?.id||"nepo";return this.say(e,n,!0)}}function vx(i){let t=null,e=-1/0;const n=r=>{const a=r.target.closest?.("button");return a&&!a.disabled&&!a.closest("#touch,#mobileEditor,#film")&&!["bombBtn","abilityBtn"].includes(a.id)?a:null},s=r=>{const a=n(r);!a||!i.unlocked||a===t&&performance.now()-e<100||(t=a,e=performance.now(),i.hover())};document.addEventListener("pointerover",r=>{r.pointerType==="mouse"&&s(r)},{passive:!0}),document.addEventListener("focusin",s),document.addEventListener("click",r=>{n(r)&&(i.unlocked||i.unlock(),i.click())},{passive:!0})}const ch="tdg-controls-v1",no="tdg-iphone-install-v1",oi=["stick","bombBtn","abilityBtn"],Ri={stick:120,bombBtn:80,abilityBtn:58},ir=(i,t)=>t>=i?"portrait":"landscape";function ou(i,t){const e=ir(i,t)==="portrait";return{stick:{x:62/i,y:(t-(e?92:76))/t},bombBtn:{x:(i-60)/i,y:(t-(e?92:76))/t},abilityBtn:{x:(i-(e?146:60))/i,y:(t-(e?92:170))/t},scale:1}}function ta(i,t,e,n,s=1){const r=Ri[i]*s/2+8,a=ir(e,n)==="portrait",o=a?190:112,c=a?0:40,l=a?28:16;return{x:Math.max(r+c,Math.min(e-r-c,t.x*e))/e,y:Math.max(o+r,Math.min(n-r-l,t.y*n))/n}}function qr(i,t,e){const n=ou(t,e),s=i?.[ir(t,e)],r=Number.isFinite(s?.scale)?Math.max(.8,Math.min(1.2,s.scale)):1,a={scale:r};for(const o of oi){const c=s?.[o];a[o]=ta(o,Number.isFinite(c?.x)&&Number.isFinite(c?.y)?c:n[o],t,e,r)}return a}function io(i,t,e,n,s){return oi.some(r=>r!==t&&Math.hypot((i[r].x-e.x)*n,(i[r].y-e.y)*s)<(Ri[t]+Ri[r])*i.scale/2+8)}function _x({userAgent:i,standalone:t,seen:e}){return/iPhone/i.test(i)&&!t&&!e}class yx{constructor(t=1){this.max=Math.min(Math.max(1,t),2),this.min=Math.min(this.max,1.25),this.ratio=Math.min(this.max,1.75),this.mode="auto",this.reset()}reset(){this.elapsed=0,this.frames=0,this.cost=0}setMode(t){this.mode=["auto","sharp","fast"].includes(t)?t:"auto",this.ratio=this.mode==="sharp"?this.max:this.mode==="fast"?this.min:Math.min(this.max,1.75),this.dirty=!0,this.reset()}sample(t,e){const n=!!this.dirty;if(this.dirty=!1,this.mode!=="auto"||(this.elapsed+=t,this.frames++,this.cost+=e,this.elapsed<3))return n;const s=this.elapsed*1e3/this.frames,r=this.cost/this.frames,a=this.ratio;return s>24?this.ratio=Math.max(this.min,this.ratio-.25):s<18.5&&r<7&&(this.ratio=Math.min(this.max,this.ratio+.25)),this.reset(),n||a!==this.ratio}}const Yr=i=>{try{return JSON.parse(localStorage.getItem(i)||"null")}catch{return null}},Hs=(i,t)=>{try{return localStorage.setItem(i,JSON.stringify(t)),!0}catch{return!1}};function Mx({coarse:i,release:t,quality:e,audio:n,online:s}){const r=/iPhone/i.test(navigator.userAgent),a=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,o=S=>document.getElementById(S);let c=Yr("tdg-touch-style")==="arrows"?"arrows":"analog";document.body.dataset.touchStyle=c;let l=Yr(ch);(!l||typeof l!="object"||Array.isArray(l))&&(l={});let h=null,p="",f=null,u={};const d=document.createElement("button");d.id="mobileSettingsBtn",d.className="icon-button",d.ariaLabel="Configurar controles e gráficos",d.title="Controles e gráficos",d.textContent="⚙",d.hidden=!i,document.querySelector(".tools").insertBefore(d,o("fullscreen")),document.body.insertAdjacentHTML("beforeend",`<dialog id="mobileSettings" class="mobile-dialog" aria-labelledby="mobileSettingsTitle"><div class="guide-top"><div><span class="eyebrow">DO SEU JEITO</span><h2 id="mobileSettingsTitle">Ajustes do celular</h2></div><button id="closeMobileSettings" class="icon-button" aria-label="Fechar ajustes">×</button></div><p class="vertical-advice"><span>↕</span> Recomendamos jogar com a tela em pé.</p><label for="touchStyle">COMO VOCÊ QUER MOVER?</label><select id="touchStyle"><option value="analog">Analógico</option><option value="arrows">Setinhas · controle direcional</option></select><button id="editControls" class="primary">Posicionar meus controles <span>✥</span></button><p class="settings-detail">Arraste os botões e salve. Cada posição da tela tem seu próprio layout.</p><label for="mobileQuality">GRÁFICOS</label><select id="mobileQuality"><option value="auto">Automático · equilibra fluidez e nitidez</option><option value="fast">Desempenho · menor carga gráfica</option><option value="sharp">Nitidez · maior resolução</option></select><button id="mobileAudio" class="secondary">Volume da música e dos efeitos ♪</button><button id="showInstallHelp" class="secondary" ${r?"":"hidden"}>Como colocar na Tela de Início ↗</button><small id="mobilePauseNote"></small></dialog>
 <dialog id="controlEditor" aria-labelledby="controlEditorTitle"><div class="editor-top"><span class="eyebrow">CONTROLES PERSONALIZADOS</span><h2 id="controlEditorTitle">Arraste para onde preferir</h2><div class="editor-actions"><button id="cancelControls" class="secondary">Cancelar</button><button id="resetControls" class="secondary">Padrão</button><button id="saveControls" class="primary">Salvar ✓</button></div><label for="controlSize">TAMANHO <input id="controlSize" type="range" min="80" max="120" step="5"><output id="controlSizeValue">100%</output></label><p id="controlEditNote" role="status"></p></div><div id="controlPreview" aria-label="Arraste os controles nesta área"><button data-control="stick" class="edit-stick" aria-label="Posicionar analógico"><span>＋</span><small>MOVER</small></button><button data-control="bombBtn" class="edit-bomb" aria-label="Posicionar bomba"><span>●</span><small>BOMBA</small></button><button data-control="abilityBtn" class="edit-ability" aria-label="Posicionar habilidade"><span>↟</span><small>MONTARIA</small></button></div></dialog>
 <dialog id="iphoneInstall" class="mobile-dialog" aria-labelledby="iphoneInstallTitle"><div class="install-brand"><img src="/icons/apple-touch-icon.png" width="64" height="64" alt=""><span>TDG<br><small>BOMB ARENA 64</small></span></div><span class="eyebrow">BEM-VINDO, IPHONE</span><h2 id="iphoneInstallTitle">Sua arena na Tela de Início</h2><p>Abra pelo ícone para jogar como um app, com mais espaço na tela.</p><ol><li><b>Abra este jogo no Safari.</b><span>Veio pelo WhatsApp? Abra o link no Safari primeiro.</span></li><li><b>Toque em Compartilhar <i class="share-icon">↑</i></b><span>Procure o quadrado com uma seta para cima. Em alguns layouts, ele fica no menu da página.</span></li><li><b>Adicionar à Tela de Início</b><span>Role a lista até encontrar essa opção.</span></li><li><b>Confirme em Adicionar</b><span>Se aparecer “Abrir como App da Web”, deixe ativado. Depois, abra pelo novo ícone.</span></li></ol><p class="install-vertical">↕ Para jogar, recomendamos deixar o iPhone em pé.</p><button id="dismissInstall" class="primary">Entendi, vamos jogar ✓</button><small>Você pode rever este guia em ⚙ Ajustes.</small></dialog>`),o("touchStyle").value=c,o("touchStyle").onchange=()=>{t(),c=o("touchStyle").value,document.body.dataset.touchStyle=c,Hs("tdg-touch-style",c),m()};const x=()=>({w:innerWidth,h:innerHeight}),g=(S,b,M,_)=>{S.style.left=M.x*innerWidth+"px",S.style.top=M.y*innerHeight+"px",S.style.width=S.style.height=_+"px"},m=()=>{if(!i)return;const{w:S,h:b}=x(),M=qr(l,S,b);for(const _ of oi){const I=o(_);if(I.classList.add("custom-control"),g(I,_,M[_],Ri[_]*M.scale),_==="stick"){const U=o("dpad");U.classList.add("custom-control"),g(U,_,M[_],Ri[_]*M.scale)}}},w=()=>{const S=document.querySelector("[data-control=stick]");S.classList.toggle("arrows-preview",c==="arrows"),S.querySelector("span").textContent=c==="arrows"?`↑
← · →
↓`:"＋";for(const b of oi)g(document.querySelector(`[data-control="${b}"]`),b,h[b],Ri[b]*h.scale);o("controlSize").value=Math.round(h.scale*100),o("controlSizeValue").textContent=Math.round(h.scale*100)+"%"},v=()=>{o("controlEditNote").textContent=p==="portrait"?"Layout vertical · arraste os três controles.":"Layout horizontal · o layout vertical fica salvo separadamente."},y=()=>{f=null,h=null,u={},o("controlEditor").close(),m()};d.onclick=()=>{t(),o("mobilePauseNote").textContent=s()?"A partida online continua durante os ajustes.":"A partida com bots pausa enquanto você configura.",o("mobileSettings").showModal()},o("closeMobileSettings").onclick=()=>o("mobileSettings").close(),o("editControls").onclick=()=>{t();const{w:S,h:b}=x();u={},h=qr(l,S,b),p=ir(S,b),o("mobileSettings").close(),o("controlEditor").showModal(),v(),w()},o("cancelControls").onclick=y,o("controlEditor").addEventListener("cancel",()=>{h=null,f=null,m()}),o("resetControls").onclick=()=>{h=qr({[p]:ou(innerWidth,innerHeight)},innerWidth,innerHeight),v(),w()},o("saveControls").onclick=()=>{if(oi.some(b=>io(h,b,h[b],innerWidth,innerHeight))){o("controlEditNote").textContent="Separe os controles antes de salvar.";return}l={...l,...u,[p]:h};const S=Hs(ch,l);y(),S||(o("mobilePauseNote").textContent="Aplicado nesta sessão. Seu navegador não permitiu salvar neste aparelho.",o("mobileSettings").showModal())},o("controlSize").oninput=()=>{const S={...h,scale:Number(o("controlSize").value)/100};for(const b of oi)S[b]=ta(b,h[b],innerWidth,innerHeight,S.scale);oi.some(b=>io(S,b,S[b],innerWidth,innerHeight))?o("controlEditNote").textContent="Afaste os botões para aumentar o tamanho.":(h=S,v()),w()};for(const S of document.querySelectorAll("[data-control]")){S.addEventListener("pointerdown",b=>{b.preventDefault();const M=S.dataset.control;f={id:M,pointerId:b.pointerId,dx:b.clientX-h[M].x*innerWidth,dy:b.clientY-h[M].y*innerHeight},S.setPointerCapture(b.pointerId)}),S.addEventListener("pointermove",b=>{if(!f||f.pointerId!==b.pointerId)return;const M=f.id,_=ta(M,{x:(b.clientX-f.dx)/innerWidth,y:(b.clientY-f.dy)/innerHeight},innerWidth,innerHeight,h.scale);_.y=Math.max(_.y,(document.querySelector(".editor-top").getBoundingClientRect().bottom+Ri[M]*h.scale/2+8)/innerHeight),io(h,M,_,innerWidth,innerHeight)?o("controlEditNote").textContent="Deixe um espaço entre os controles.":(h[M]=_,v(),w())});for(const b of["pointerup","pointercancel","lostpointercapture"])S.addEventListener(b,M=>{f?.pointerId===M.pointerId&&(f=null)})}let C=Yr("tdg-mobile-quality")||"auto";o("mobileQuality").value=["auto","sharp","fast"].includes(C)?C:"auto",e(o("mobileQuality").value),o("mobileQuality").onchange=()=>{e(o("mobileQuality").value),Hs("tdg-mobile-quality",o("mobileQuality").value)},o("mobileAudio").onclick=()=>{o("mobileSettings").close(),n()};const A=()=>{Hs(no,!0),o("iphoneInstall").close()};return o("dismissInstall").onclick=A,o("iphoneInstall").addEventListener("cancel",()=>Hs(no,!0)),o("showInstallHelp").onclick=()=>{r&&(o("mobileSettings").close(),o("iphoneInstall").showModal())},addEventListener("resize",()=>{if(t(),m(),h){const S=ir(innerWidth,innerHeight);if(S!==p)u[p]=h,h=qr({...l,...u},innerWidth,innerHeight),p=S;else for(const b of oi)h[b]=ta(b,h[b],innerWidth,innerHeight,h.scale);v(),w()}}),m(),_x({userAgent:navigator.userAgent,standalone:a(),seen:Yr(no)})&&o("iphoneInstall").showModal(),{get open(){return o("mobileSettings").open||o("controlEditor").open||o("iphoneInstall").open}}}const Fe=i=>document.getElementById(i),Sx={island:["#325a4a","#edf0c6","#c99b55"],ice:["#305b89","#d8f1ff","#6db4dc"],factory:["#292d4b","#bec9da","#e7b157"],volcano:["#302a36","#514752","#a15f58"],rooftop:["#aaa38f","#698998","#eebc61"],subway:["#303b44","#cbd8db","#488f9e"],garden:["#214e49","#538c58","#a66285"],ruins:["#e3bf83","#b18d59","#977745"]};function bx(i){const t=r=>{document.body.dataset.menuScreen=r;for(const[a,o]of[["menuPlay","play"],["menuWriters","writers"]])Fe(a).setAttribute("aria-pressed",r===o);scrollTo(0,0)};t("play");for(const r of["menuWriters","writerShortcut","chooseWriter"])Fe(r).onclick=()=>t("writers");for(const r of["menuPlay","confirmWriter"])Fe(r).onclick=()=>t("play");const e=()=>{const r=i.settings();for(const a of Fe("stageCards").children)a.setAttribute("aria-pressed",a.dataset.stage===r.stage);for(const a of Fe("durationChips").children)a.setAttribute("aria-pressed",Number(a.dataset.duration)===r.duration);Fe("stagePickerDescription").textContent=jn[r.stage]?.description||"Uma fase diferente a cada rodada."},n=()=>{i.settings().matchMode!=="territory"&&(e(),Fe("stagePicker").showModal())};for(const r of["menuArena","arenaShortcut","lobbyArenaBtn"])Fe(r).onclick=n;for(const r of["closeStages","confirmStage"])Fe(r).onclick=()=>Fe("stagePicker").close();Fe("stageCards").innerHTML=Object.entries(jn).map(([r,a],o)=>`<button data-stage="${r}" class="stage-card" aria-pressed="false"><span class="stage-card-top">STAGE ${String(o+1).padStart(2,"0")}</span><canvas width="208" height="128" aria-hidden="true"></canvas><b>${a.name}</b><small>${a.tag}</small></button>`).join("")+'<button data-stage="tour" class="stage-card tour-card" aria-pressed="false"><span class="stage-card-top">MIX</span><b>Rodízio</b><small>Todas as fases</small></button>';for(const r of Fe("stageCards").children){const a=r.dataset.stage,o=r.querySelector("canvas");if(!o)continue;const[c,l,h]=Sx[a],p=o.getContext("2d"),f=new la({stage:a,random:()=>.3}),u=8,d=52,x=10;p.fillStyle=c,p.fillRect(0,0,208,128);for(let g=0;g<13;g++)for(let m=0;m<13;m++){const w=_h(m,g),v=f.crates.has(yn(m,g));p.fillStyle=w?l:v?h:c,p.fillRect(d+m*u,x+g*u,u-1,u-1)}for(const[g,[m,w]]of[[1,1],[11,11],[1,11],[11,1]].entries())p.fillStyle=["#8edfff","#ff87ac","#ffe281","#b89eff"][g],p.beginPath(),p.arc(d+m*u+3,x+w*u+3,3,0,Math.PI*2),p.fill()}Fe("stageCards").onclick=r=>{const a=r.target.closest("[data-stage]");a&&(i.stage(a.dataset.stage),e())},Fe("durationChips").onclick=r=>{const a=r.target.closest("[data-duration]");a&&(i.duration(Number(a.dataset.duration)),e())};const s=()=>{for(const r of Fe("capacityChips").children)r.setAttribute("aria-pressed",Number(r.dataset.capacity)===Number(Fe("capacitySelect").value))};return Fe("capacityChips").onclick=r=>{const a=r.target.closest("[data-capacity]");a&&(i.capacity(Number(a.dataset.capacity)),s())},Fe("capacitySelect").addEventListener("change",s),s(),{screen:t}}function oc(i){const t=new Ht,e=new Ht;t.add(e);const n=i==="boss",s=new ne({color:n?5592675:9213598,roughness:.5,metalness:.2}),r=new ne({color:2434354,roughness:.6}),a=new ne({color:11234287,emissive:10106328,emissiveIntensity:.7}),o=new fe({color:15055103}),c=(d,x,g,m=0,w=0,v=0)=>{const y=new Ft(d,x);return y.position.set(m,w,v),y.castShadow=y.receiveShadow=!0,g.add(y),y},l=(d,x,g,m,w,v,y,C)=>c(new Be(d,x,g,2,.04),m,w,v,y,C),h=[];if(n){l(.85,.83,.5,s,e,0,.82,0),l(.54,.6,.14,r,e,0,.83,.27),c(new Zt(.24,.24,.78,10),a,e,0,.77,-.4);const d=new ne({color:14133901,roughness:.7}),x=new ne({color:3353386,roughness:.9}),g=new ne({color:15920873,roughness:.65}),m=new ne({color:10464968,roughness:.45});l(.66,.58,.5,d,e,0,1.48,.025),c(new Ae(.34,14,9),x,e,0,1.73,-.03).scale.set(1,.42,.9),l(.42,.21,.05,g,e,0,1.12,.282),l(.1,.36,.045,m,e,0,.96,.31);for(const v of[-1,1]){l(.07,.05,.03,r,e,v*.15,1.5,.29);const y=l(.18,.027,.032,x,e,v*.14,1.59,.285);y.rotation.z=v*.13}l(.1,.09,.055,d,e,0,1.43,.31),l(.22,.025,.025,r,e,0,1.31,.291);for(const v of[-1,1]){const y=new Ht;y.position.set(v*.55,1.02,0),e.add(y),l(.29,.65,.31,s,y,0,-.21,0),l(.36,.31,.38,r,y,0,-.51,.07),h.push(y);const C=c(new Zt(.115,.115,.45,9),a,y,v*.12,-.6,.28);C.rotation.z=Math.PI/2,l(.27,.42,.31,r,e,v*.22,.23,0),l(.35,.16,.43,s,e,v*.22,.08,.04)}}else{l(.46,.44,.37,s,e,0,.47,0),l(.5,.16,.13,r,e,0,.54,.17);for(const d of[-1,1]){l(.075,.065,.025,o,e,d*.13,.55,.25);const x=c(new fa(.08,.2,3,7),s,e,d*.32,.42,0);h.push(x),c(new Ae(.11,8,6),r,e,d*.15,.16,0)}c(new Zt(.02,.02,.21,5),s,e,0,.83,0),c(new Ae(.06,7,5),a,e,0,.94,0),i==="sentry"&&(c(new Le(.3,.045,5,16),a,e,0,.69,0).rotation.x=Math.PI/2)}const p=document.createElement("canvas");p.width=256,p.height=64;const f=p.getContext("2d");f.fillStyle="#32233bec",f.beginPath(),f.roundRect(12,6,232,48,10),f.fill(),f.font="900 21px Arial",f.textAlign="center",f.fillStyle="#edc7ff",f.fillText(n?"FLÁVIO B.":i==="sentry"?"SENTINELA":"INVASOR",128,38);const u=new Ts(new Fi({map:new wn(p),depthTest:!1}));return u.position.y=n?2.25:1.28,u.scale.set(n?1.9:1.3,n?.475:.325,1),t.add(u),t.userData={rig:e,arms:h,tag:u,boss:n},t}function Ex(i,t,e,n){const s=i.userData;s.rig.rotation.y={down:0,left:-Math.PI/2,right:Math.PI/2,up:Math.PI}[t.dir]||0,s.rig.position.y=Math.sin(e*.004+t.x)*.035,s.arms.forEach((r,a)=>r.rotation.x=Math.sin(e*.005+a*Math.PI)*.13),s.rig.visible=t.hitUntil<=n||Math.sin(e*.04)>0}function wx(){const i=new Ht,t=new fe({color:13041504,transparent:!0,opacity:.9,side:ke}),e=new Ft(new Le(.42,.055,6,32),t);e.rotation.x=-Math.PI/2,i.add(e);const n=new Ft(new Zt(.27,.36,1.8,16,1,!0),new fe({color:11140984,transparent:!0,opacity:.16,side:ke,depthWrite:!1}));n.position.y=.9,i.add(n);const s=document.createElement("canvas");s.width=256,s.height=64;const r=s.getContext("2d");r.font="900 26px Arial",r.textAlign="center",r.fillStyle="#17211ce8",r.fillRect(12,4,232,52),r.fillStyle="#c6ff60",r.fillText("SAÍDA",128,40);const a=new Ts(new Fi({map:new wn(s),depthTest:!1}));return a.position.y=2,a.scale.set(1.3,.325,1),i.add(a),i.userData={ring:e,beam:n},i}class Ax{constructor(t,e){this.audio=t,this.voice=e,this.active=!1,this.lastKey="",this.host=document.getElementById("filmCanvas"),this.overlay=document.getElementById("film"),document.getElementById("filmSkip").onclick=()=>this.finish(),document.getElementById("filmNext").onclick=()=>this.next(),addEventListener("keydown",n=>{this.active&&["Enter","Space","Escape"].includes(n.code)&&(n.preventDefault(),n.stopImmediatePropagation(),n.code==="Escape"?this.finish():this.next())},!0)}play(t,e=()=>{}){if(this.active&&this.finish(!1),this.key=t,this.film=Su[t],!this.film){e();return}this.done=e,this.active=!0,this.index=0,this.overlay.hidden=!1,document.body.classList.add("film-open"),this.audio.setMusic(this.film.music),document.getElementById("filmChapter").textContent=this.film.title,document.getElementById("filmSubtitle").textContent=this.film.subtitle,this.renderer=new dr({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(matchMedia("(pointer:coarse)").matches?Math.min(devicePixelRatio,1.5):Math.min(devicePixelRatio,1.4)),this.renderer.outputColorSpace=ze,this.renderer.toneMapping=ar,this.host.replaceChildren(this.renderer.domElement),this.camera=new He(38,1,.1,100),this.changeShot(),document.getElementById("filmNext").focus()}changeShot(){this.scene&&ys(this.scene),this.scene=new lr,this.scene.background=new Xt(1053467),this.scene.fog=new ua(1053467,18,45),this.actors=[];const t=this.film.shots[this.index];this.shot=t,this.shotAt=performance.now(),this.scene.add(new ur(11389183,1382691,2.4));const e=new Li(16769720,4);e.position.set(3,7,4),this.scene.add(e);const n=new Li(12386148,3);n.position.set(-6,4,-5),this.scene.add(n);const s=f=>new ne({color:f,roughness:.8}),r=new Ft(new ae(30,.2,24),s(2107185));r.position.y=-.14,this.scene.add(r);const a=document.createElement("canvas");a.width=1024,a.height=512;const o=a.getContext("2d");o.fillStyle="#1f2734",o.fillRect(0,0,1024,512),o.textAlign="center",o.font="italic 900 260px Arial",o.fillStyle="#c6ff60",o.fillText("TDG",512,330),o.font="900 31px Arial",o.fillStyle="#f3f6ec",o.fillText("A ARTE CONTINUA.",512,400),this.muralColor=new fe({map:new wn(a)});const c=new Ft(new ln(13,6.5),this.muralColor);c.position.set(0,3.1,-2.2),this.scene.add(c);const l=new Ft(new ae(17,8,.4),s(3160910));l.position.set(0,3,-2.5),this.scene.add(l);const h=["crew","title"].includes(t.scene);if((h?Sn.map(f=>f.id):t.scene==="mascot"?["macaco","priks","rodef"]:t.scene==="rollcall"?["caldas","erraro","nepo","sinuk"]:t.scene==="ice"?["skyf","nepo"]:t.scene==="factory"?["rodef","off","nepo"]:["nepo","priks","rodef"]).forEach((f,u)=>{const d=Qn(f,!1,matchMedia("(pointer:coarse)").matches).rig,x=h?Math.floor(u/9):0,g=h?u%9:u;d.position.set(h?(g-4)*1.25+(x?.35:0):(g-1)*1.55,x?.55:0,h?x*-1.35:.4),d.userData.baseY=x?.55:0,d.userData.filmId=f,d.userData.baseX=d.position.x,d.userData.baseZ=d.position.z,d.rotation.y=h?Math.sin(u)*.1:-.1+u*.1,this.scene.add(d),this.actors.push(d)}),h){const f=new Ft(new ae(13,.55,1.6),s(2636596));f.position.set(.35,.25,-1.45),this.scene.add(f)}if(t.scene==="villain"){for(const u of this.actors)u.visible=!1;const f=oc("boss");f.position.set(0,0,.5),f.userData.tag.visible=!1,this.scene.add(f),this.boss=f}else this.boss=null;if(t.scene==="etek"){for(const d of this.actors)d.visible=!1;const f=Qn("etek",!0).rig;f.position.set(0,.12,.4),this.scene.add(f),this.actors.push(f);const u=new Ft(new Ae(.26,12,9),s(12189573));u.scale.set(1,1.3,.85),u.position.set(.68,1.25,.3),this.scene.add(u);for(const d of[-1,1]){const x=new Ft(new Ae(.07,8,6),s(1387811));x.scale.set(.7,1.4,.3),x.position.set(.68+d*.095,1.29,.52),x.rotation.z=-d*.25,this.scene.add(x)}}if(this.curtain=new Ft(new ln(13,6.5),new fe({color:7435130,transparent:!0,opacity:t.scene==="restore"?1:t.scene==="erase"?0:.02})),this.curtain.position.set(0,3.1,-2.15),this.scene.add(this.curtain),this.speakerActor=this.actors.find(f=>f.userData.filmId===t.speaker.toLowerCase())||this.actors[0],this.voice?.dialogue(t.speaker,t.text),["erase","factory","villain"].includes(t.scene)?(this.drone=oc("drone"),this.drone.position.set(-5,4.8,1),this.drone.userData.tag.visible=!1,this.scene.add(this.drone)):this.drone=null,t.scene==="ice"){r.material.color.setHex(8304083),l.material.color.setHex(5338769);const f=[];for(let d=0;d<38;d++)f.push(d*7.31%18-9,d*.37%6+.1,d*3.81%10-5);const u=new Ce;u.setAttribute("position",new oe(f,3)),this.snow=new da(u,new hr({color:15268607,size:.075,transparent:!0,opacity:.85})),this.scene.add(this.snow)}else this.snow=null;if(t.scene==="factory"){r.material.color.setHex(1649464);for(let f=0;f<10;f++){const u=new Ft(new ae(.55,.05,2.4),s(f%2?9157839:2506073));u.position.set((f-5)*.6,.02,1.1),this.scene.add(u)}l.material.color.setHex(2372429)}t.scene==="villain"&&(this.curtain.material.opacity=.95),this.pulseLight=new Tf(10216959,0,15),this.pulseLight.position.set(0,3,1),this.scene.add(this.pulseLight),document.getElementById("filmSpeaker").textContent=t.speaker,document.getElementById("filmLine").textContent=t.scene==="title"?"":t.text,document.getElementById("filmTitle").hidden=t.scene!=="title",document.getElementById("filmCount").textContent=`${this.index+1} / ${this.film.shots.length}`,document.getElementById("filmNext").textContent=this.index===this.film.shots.length-1?this.key==="opening"?"Entrar no jogo":"Continuar":"Próximo"}next(){this.active&&(this.audio.click(),++this.index>=this.film.shots.length?this.finish():this.changeShot())}finish(t=!0){if(!this.active)return;this.active=!1,this.voice?.stop(),this.overlay.hidden=!0,document.body.classList.remove("film-open"),this.scene&&ys(this.scene),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.host.replaceChildren();const e=this.done;this.done=null,t&&e?.()}render(t){if(!this.active)return;const e=this.shot,n=(t-this.shotAt)/1e3,s=this.host.clientWidth,r=this.host.clientHeight;(this.renderer.domElement.width!==Math.round(s*this.renderer.getPixelRatio())||this.renderer.domElement.height!==Math.round(r*this.renderer.getPixelRatio()))&&(this.renderer.setSize(s,r,!1),this.camera.aspect=s/r,this.camera.updateProjectionMatrix());const a=Math.min(1,n/3.8),o=a*a*(3-2*a),c=["crew","title"].includes(e.scene),l=c&&this.index===1&&this.key==="opening";for(const[v,y]of this.actors.entries()){const C=c&&!l&&e.scene!=="title"?Math.max(0,1-n/2.3):0;if(y.position.x=(y.userData.baseX||0)+Math.sign(y.userData.baseX||0||1)*C*2.6,y.position.z=(y.userData.baseZ||0)+C*.6,y.userData.limbs.forEach((A,S)=>{A.rotation.x=C?Math.sin(n*8+S*Math.PI)*.45:0,A.rotation.z=0}),y.position.y=(y.userData.baseY||0)+Math.sin(t*.002+v)*.015+Math.abs(Math.sin(n*8))*C*.035,_s(y,t,C*.65,!1),this.key==="opening"&&!C){y.userData.character?.idle;const A=y.userData;A.limbs[0].rotation.z=-.15-Math.sin(n*2+v)*.12,A.limbs[2].rotation.x=e.scene==="title"?-.9:Math.sin(n*1.9+v)*.3,e.scene==="mascot"&&y.userData.filmId==="macaco"&&(y.position.y=Math.max(0,Math.sin(Math.min(1,n/1.6)*Math.PI))*.65,y.rotation.y=Math.sin(n*2)*.28,A.limbs[0].rotation.x=-1.4,A.limbs[2].rotation.x=-1.4)}y===this.speakerActor&&(y.rotation.y=-.1+Math.sin(n*.3)*.08,y.userData.limbs[0].rotation.x=-.3-Math.sin(n*1.7)*.18)}const h=c&&!l,p=this.speakerActor,f=h?0:p?.position.x||0,u=h?1.1:1.15,d=7/(Math.tan(Math.PI*38/360)*this.camera.aspect),x=h?Math.max(14,d):this.camera.aspect<.7?7.3:e.scene==="villain"?5.8:5.5,g=h?-2:f+1.35,m=h?.35:f+.2,w=x+(1-o)*1.9;if(this.camera.position.set(g+(m-g)*o,h?3.7-o*.4:1.75-o*.25,w),this.camera.lookAt(f,u,-.1),this.key==="opening"&&e.scene==="rollcall"&&(this.camera.position.x=f+1.3-o*2,this.camera.position.y=1.25,this.camera.lookAt(f,.95,.15)),e.scene==="erase"){const v=Math.min(1,n*.22);this.curtain.material.opacity=.98,this.curtain.scale.x=Math.max(.001,v),this.curtain.position.x=-6.5+6.5*v}if(e.scene==="restore"){const v=Math.max(0,1-n*.2);this.curtain.material.opacity=.98,this.curtain.scale.x=Math.max(.001,v),this.curtain.position.x=-6.5+6.5*v,this.pulseLight.intensity=Math.sin(Math.min(1,n/5)*Math.PI)*5}this.drone&&(this.drone.position.x=-5+Math.min(10,n*1.5),this.drone.position.y=4.5+Math.sin(n*2)*.16,this.drone.rotation.y=.4),this.snow&&(this.snow.rotation.y=n*.04,this.snow.position.y=-n*.1%1),this.boss&&(this.boss.position.z=-1.7+Math.min(2.2,n*.7),this.boss.rotation.y=-.18+Math.sin(n*.3)*.1,this.boss.userData.arms.forEach((v,y)=>v.rotation.x=-.3+Math.sin(t*.003+y)*.14),this.pulseLight.color.setHex(12944895),this.pulseLight.intensity=2+Math.sin(n*3)*.6),this.renderer.render(this.scene,this.camera),e.duration&&t-this.shotAt>=e.duration&&this.next()}}const on=i=>`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`,Un={roller:{title:"ROLO DE RUA",short:"ROLO",color:"#c8f45d",description:"Exclusivo da Guerra de Tinta. Pinta um caminho mais largo andando e aumenta a largura do spray.",icon:on('<rect x="6" y="7" width="46" height="20" rx="5" fill="currentColor"/><path d="M54 17h4v20H31v8" stroke="#f7efda" stroke-width="5" stroke-linejoin="round"/><rect x="24" y="42" width="14" height="19" rx="4" fill="currentColor"/>')},nozzle:{title:"BICO DE PRESSÃO",short:"BICO +",color:"#ff7a8a",description:"Exclusivo da Guerra de Tinta. Aumenta o alcance do spray em 2 casas, até 7. O jato para nos obstáculos.",limit:7,icon:on('<rect x="8" y="23" width="25" height="34" rx="6" fill="currentColor"/><path d="M13 23V12h15v11m0-8h8" stroke="currentColor" stroke-width="5"/><path d="M41 15h16m-17-7l13-6m-13 21l13 6" stroke="#f7efda" stroke-width="4" stroke-linecap="round"/><path d="M16 33v15" stroke="#f7efda" stroke-width="4"/>')},inktank:{title:"TANQUE DE TINTA",short:"TINTA +",color:"#72dfb0",description:"Exclusivo da Guerra de Tinta. Recarrega toda a tinta e aumenta o tanque em 10, até 150.",limit:150,icon:on('<rect x="13" y="12" width="38" height="46" rx="7" fill="currentColor"/><path d="M24 13V6h16v7" stroke="currentColor" stroke-width="5"/><path d="M32 24c-14 16-14 24 0 26 14-2 14-10 0-26z" fill="#f7efda"/>')},paintshield:{title:"ESCUDO DE TINTA",short:"ESCUDO",color:"#c9a2ff",description:"Exclusivo da Guerra de Tinta. Absorve um jato rival e protege por um instante. Não acumula.",icon:on('<path d="M32 5L9 15v20c0 13 23 25 23 25s23-12 23-25V15z" fill="currentColor"/><path d="M23 32l6 6 13-15" stroke="#f7efda" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>')},kick:{title:"CHUTE DE BOMBA",short:"CHUTE",color:"#ffd764",description:"Encoste numa bomba para chutá-la pelo corredor. Ela para em obstáculos ou jogadores; o pavio continua.",icon:on('<path d="M8 24l17 4 3 13 14 6v10H7V44l1-20z" fill="currentColor"/><circle cx="47" cy="20" r="11" fill="#283744"/><path d="M48 8l5-5m-19 9h-8m7 8H20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>')},monkey:{title:"MACACO SURPRESA",short:"TDG ★",color:"#ffdc71",description:"Montaria rara da TDG. Absorve 1 golpe e salta 2 casas com sua habilidade.",icon:on('<circle cx="10" cy="30" r="9" fill="currentColor"/><circle cx="54" cy="30" r="9" fill="currentColor"/><ellipse cx="32" cy="33" rx="22" ry="24" fill="#875338"/><ellipse cx="32" cy="38" rx="16" ry="15" fill="currentColor"/><circle cx="25" cy="27" r="3" fill="#1c2935"/><circle cx="39" cy="27" r="3" fill="#1c2935"/><path d="M24 43q8 8 16 0" stroke="#1c2935" stroke-width="3" stroke-linecap="round"/>')},heart:{title:"VIDA EXTRA",short:"VIDA +1",color:"#ff6794",description:"Dá +1 vida, até 5. Na batalha, absorve mais um golpe; na história, aumenta sua reserva.",limit:5,icon:on('<path d="M32 56L9 33C-5 14 20 1 32 17 44 1 69 14 55 33z" fill="currentColor"/><path d="M22 21q-8-4-10 5" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M38 38h16m-8-8v16" stroke="#fff" stroke-width="4"/>')},bomb:{title:"BOMBA EXTRA",short:"BOMBA +",color:"#63caff",description:"Aumenta quantas bombas você pode deixar ao mesmo tempo.",limit:5,icon:on('<circle cx="29" cy="37" r="18" fill="currentColor"/><path d="M34 18l6-8c5-5 11-1 11 4" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M19 29l3-3" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M45 38h14m-7-7v14" stroke="#fff" stroke-width="4"/>')},fire:{title:"CHAMA LONGA",short:"FOGO +",color:"#ff9b50",description:"Aumenta o alcance da explosão em cada direção.",limit:6,icon:on('<path d="M34 5c10 12-3 16 1 25 5-1 8-6 8-12 18 19 14 37-10 39C9 58 8 34 21 22c-1 11 7 13 7 13-7-13 5-16 6-30z" fill="currentColor"/><path d="M33 33c9 10 12 19 0 22-13-3-10-12 0-22z" fill="#fff3ae"/>')},speed:{title:"TÊNIS VELOZ",short:"VELOZ",color:"#b6f46c",description:"Aumenta sua velocidade para escapar e mudar de corredor.",limit:6.5,icon:on('<path d="M22 19l12 4 2 12 18 5c5 2 5 12-1 12H16c-6 0-8-5-6-11l7-21z" fill="currentColor"/><path d="M9 51h45M28 30l8 2m-9 5l9 2M7 24h10M4 33h10" stroke="#f6fff0" stroke-width="4" stroke-linecap="round"/>')},pink:{title:"MONTARIA ROSA",short:"SALTO",color:"#ff9cbc",description:"Absorve 1 golpe. A habilidade salta 2 casas sobre caixas e bombas.",icon:on('<path d="M32 9C19 9 14 34 16 45c3 16 29 16 32 0C50 34 44 9 32 9z" fill="currentColor"/><path d="M20 39l8-8 8 12 10-8" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>')},green:{title:"MONTARIA VERDE",short:"DISPARADA",color:"#76d990",description:"Absorve 1 golpe. A habilidade dispara em linha reta até o obstáculo.",icon:on('<path d="M32 9C19 9 14 34 16 45c3 16 29 16 32 0C50 34 44 9 32 9z" fill="currentColor"/><path d="M22 30l8 8-8 8m12-16l8 8-8 8" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>')},black:{title:"PRETA LENDÁRIA",short:"LENDÁRIA",color:"#c39bff",description:"Resiste a 2 golpes. O salto sombrio atravessa até 3 casas.",icon:on('<path d="M32 9C19 9 14 34 16 45c3 16 29 16 32 0C50 34 44 9 32 9z" fill="#393547" stroke="currentColor" stroke-width="3"/><path d="M32 24l4 9 10 2-8 6 2 10-8-5-8 5 2-10-8-6 10-2z" fill="currentColor"/>')}},cu=i=>i.kind==="egg"?["pink","green","black","monkey"].includes(i.mount)?i.mount:"pink":i.kind;function Tx(i){const t=cu(i),e=Un[t];if(!e)return null;const n=i.before===i.after,s=Number.isFinite(i.before)&&Number.isFinite(i.after)?`${i.before} → ${i.after}`:"";let r=e.description;return t==="kick"&&(r=n?"O chute já está equipado.":"Chute liberado! Encoste na bomba na direção desejada."),t==="heart"&&(r=n?"Você já tem 5 vidas.":`+1 vida! Agora você tem ${i.after} vidas.`),t==="bomb"&&(r=n?"Você já tem o máximo: 5 bombas simultâneas.":`Agora você pode deixar ${i.after} bombas ao mesmo tempo.`),t==="fire"&&(r=n?"Alcance máximo: 6 casas em cada direção.":`Sua explosão alcança ${i.after} casas em cada direção.`),t==="speed"&&(r=n?"Velocidade máxima atingida.":`Movimento mais rápido: ${Number(i.after).toFixed(1)} casas por segundo.`),{...e,key:t,change:s,detail:r}}const _n=1.12,ls=i=>(i-12)*_n;function Cx(){const i=new Ht,t=h=>new ne({color:h,roughness:.92}),e=(h,p,f,u,d,x,g)=>{const m=new Ft(new ae(h,p,f),t(u));return m.position.set(d,x,g),m.castShadow=m.receiveShadow=!0,i.add(m),m};e(28,.3,28,2697768,0,-.22,0),e(26,.02,3.6,4539712,0,0,0),e(3.6,.02,26,4539712,0,.005,0);for(let h=-10;h<=10;h+=2)e(.09,.02,.8,14933703,h,.025,0),e(.8,.02,.09,14933703,0,.03,h);for(const h of[-14,14])e(29,.7,.4,6710104,0,.2,h);for(const h of[-14,14])e(.4,.7,29,6710104,h,.2,0);for(const[h,p,f,u,d]of[[6,6,4,4,"water"],[15,15,4,4,"water"],[6,15,3,2,"planter"],[16,7,3,2,"planter"],[10,7,1,3,"wall"],[14,15,1,3,"wall"],[7,12,3,1,"container"],[15,12,3,1,"container"],[12,10,1,1,"column"],[12,14,1,1,"column"]]){const x=ls(h+(f-1)/2),g=ls(p+(u-1)/2);if(d==="water"){e(f*_n,.1,u*_n,3303531,x,-.06,g);for(const m of[-1,1])e(f*_n+.1,.12,.12,8030336,x,.06,g+m*u*_n/2)}else{const m=d==="wall"?1.8:d==="column"?1.4:d==="container"?1.05:.5;if(e(f*_n*.97,m,u*_n*.97,d==="container"?h<10?9848396:6718800:7500388,x,m/2,g),d==="planter"){e(f*_n*.87,.13,u*_n*.87,6648141,x,m+.03,g);for(let w=0;w<3;w++){const v=new Ft(new Kn(.45,0),t(8627543));v.position.set(x+(w-1)*.6,m+.35,g),i.add(v)}}if(d==="container")for(let w=0;w<f*3;w++)e(.028,m,.03,11644295,x-f*_n/2+.14+w*.35,m/2,g+u*_n/2+.01)}}for(let h=0;h<8;h++){const p=(h-3.5)*3.5,f=2+h%3*.5;e(2.7,f,1.4,[7166800,5858126,6378598][h%3],p,f/2,-15.5),e(2.8,.15,1.5,2895144,p,f+.04,-15.5)}const n=document.createElement("canvas");n.width=1024,n.height=256;const s=n.getContext("2d");s.fillStyle="#272723",s.fillRect(0,0,1024,256),s.font="italic 900 135px Impact, Arial",s.textAlign="center",s.lineWidth=12,s.strokeStyle="#f4edda",s.strokeText("TDG / COR NA RUA",512,168),s.fillStyle="#c8f45d",s.fillText("TDG / COR NA RUA",512,168);const r=new Ft(new ln(12,3),new fe({map:new wn(n)}));r.position.set(0,2.1,-14.15),i.add(r);const a=document.createElement("canvas");a.width=1024,a.height=1024;const o=a.getContext("2d");o.strokeStyle="#d1d3b53a",o.lineWidth=5,o.beginPath();for(let h=0;h<90;h++){const p=h*137%1024,f=h*263%1024;o.moveTo(p,f),o.lineTo(p+10,f+4)}o.stroke(),o.font="italic 900 120px Arial",o.textAlign="center",o.fillStyle="#d1d3b533",o.save(),o.translate(180,270),o.rotate(-.35),o.fillText("TDG",0,0),o.restore(),o.save(),o.translate(820,800),o.rotate(.25),o.fillText("TDG",0,0),o.restore();const c=new Ft(new ln(27,27),new fe({map:new wn(a),transparent:!0,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.021,i.add(c);const l=new Map;for(const h of[...i.children]){if(!h.isMesh||h.material.map)continue;h.updateMatrix();const p=h.material.color.getHex(),f=l.get(p)||[];f.push(h.geometry.clone().applyMatrix4(h.matrix)),l.set(p,f),i.remove(h),h.geometry.dispose(),h.material.dispose()}for(const[h,p]of l){const f=Uc(p);if(f){const u=new Ft(f,t(h));u.castShadow=u.receiveShadow=!0,i.add(u)}for(const u of p)u.dispose()}return{group:i,animated:[]}}class Rx{constructor(t){this.scene=t,this.revision=-1,this.tag=null,this.key="",this.paint=new ds(new ln(1.095,1.095),new ne({color:16777215,roughness:.65,polygonOffset:!0,polygonOffsetFactor:-1}),qc*qc),this.paint.count=0,this.paint.frustumCulled=!1,t.add(this.paint),this.dummy=new Te,this.color=new Xt}sync(t){const e=t.matchMode==="territory";if(this.paint.visible=e,!e){this.closeTag(),this.revision=-1;return}if(this.revision!==t.paintRevision){this.revision=t.paintRevision;const p=t.paint||[];p.forEach((f,u)=>{this.dummy.position.set(ls(f.x),.033,ls(f.z)),this.dummy.rotation.set(-Math.PI/2,0,0),this.dummy.updateMatrix(),this.paint.setMatrixAt(u,this.dummy.matrix),this.paint.setColorAt(u,this.color.setHex(f.color))}),this.paint.count=p.length,this.paint.instanceMatrix.needsUpdate=!0,this.paint.instanceColor&&(this.paint.instanceColor.needsUpdate=!0)}if(t.phase!=="results"||!t.winner){this.closeTag();return}const n=t.round+":"+t.winner;if(this.key===n)return;this.closeTag(),this.key=n;const s=t.players.find(p=>p.id===t.winner);if(!s)return;const r=document.createElement("canvas");r.width=1536,r.height=512;const a=r.getContext("2d"),o=s.name.toUpperCase();a.textAlign="center",a.translate(768,256),a.rotate(-.075);let c=220;for(a.font=`italic 900 ${c}px Impact, Arial Black, sans-serif`;a.measureText(o).width>1370;)c-=8,a.font=`italic 900 ${c}px Impact, Arial Black, sans-serif`;a.shadowColor="#000a",a.shadowBlur=14,a.lineJoin="round",a.lineWidth=30,a.strokeStyle="#171a15",a.strokeText(o,0,40),a.lineWidth=14,a.strokeStyle="#f7efda",a.strokeText(o,0,40),a.fillStyle="#"+s.color.toString(16).padStart(6,"0"),a.fillText(o,0,40),a.lineWidth=9,a.strokeStyle=a.fillStyle,a.beginPath(),a.moveTo(-600,115),a.quadraticCurveTo(0,50,610,105),a.stroke(),a.shadowBlur=0,a.font="900 36px Arial",a.fillStyle="#f7efda",a.fillText("A RUA TEM A SUA MARCA.",0,190),this.tag=new Ts(new Fi({map:new wn(r),transparent:!0,depthTest:!1,opacity:0})),this.tag.position.set(ls(t.territoryTagX),2.6,ls(t.territoryTagZ)),this.scene.add(this.tag),this.started=performance.now(),this.sparks=[];const l=new Ce,h=new Float32Array(144);l.setAttribute("position",new Ve(h,3)),this.spark=new da(l,new hr({color:s.color,size:.12,transparent:!0,opacity:1,depthTest:!1})),this.scene.add(this.spark)}closeTag(){this.tag&&(this.scene.remove(this.tag),this.tag.material.map.dispose(),this.tag.material.dispose(),this.tag=null),this.spark&&(this.scene.remove(this.spark),this.spark.geometry.dispose(),this.spark.material.dispose(),this.spark=null),this.key=""}render(t,e){if(!this.tag)return;const n=Math.max(0,(t-this.started)/1e3),s=1-Math.exp(-n*4);this.tag.material.opacity=Math.min(1,n*2),this.tag.scale.set(9*s,3*s,1),this.tag.position.y=2.6+(e?0:Math.sin(n*2)*.15),this.tag.material.rotation=e?0:Math.sin(n*1.6)*.025;const r=this.spark.geometry.attributes.position;for(let a=0;a<48;a++){const o=a*2.399,c=Math.min(4,n*2.2)*(1+a%3*.13);r.setXYZ(a,this.tag.position.x+Math.cos(o)*c,this.tag.position.y+Math.sin(o)*c*.4,this.tag.position.z+Math.sin(o*.7)*c*.45)}r.needsUpdate=!0,this.spark.material.opacity=e?0:Math.max(0,1-n/3.5)}clear(){this.paint.count=0,this.revision=-1,this.closeTag()}}function Px(i,t=0){if(!["up","down","left","right"].includes(i))return null;Number.isFinite(t)||(t=0);const e={x:Math.sin(t),z:Math.cos(t)},n={x:-Math.cos(t),z:Math.sin(t)},s=i==="up"||i==="down"?e:n,r=i==="down"||i==="left"?-1:1,a=s.x*r,o=s.z*r;return Math.abs(a)>Math.abs(o)?a>0?"right":"left":o>0?"down":"up"}const lh=i=>({down:0,right:Math.PI/2,up:Math.PI,left:-Math.PI/2})[i]??0,Ix=(i,t)=>Math.atan2(Math.sin(t-i),Math.cos(t-i));class Dx{reset(){this.press=null,this.world=null}direction(t,e){return t?(t!==this.press&&(this.press=t,this.world=Px(t,e)),this.world):(this.reset(),null)}}class Lx{constructor(){this.input=null,this.previous=new Map,this.elapsed=0,this.corrections=new Map,this.remoteWindow=200}setInput(t){this.input=t}accept(t,e,n=0){const s=this.g?.phase==="playing"&&t.phase==="playing"&&this.round===t.round?this.visualPosition(e):null;this.round=t.round,this.id=e,this.elapsed=0,this.corrections.clear(),this.remoteWindow=Math.max(200,Math.min(350,(t.now-(this.lastServerNow??t.now))*.7+n*.25)),this.lastServerNow=t.now;const r=Object.create(la.prototype);Object.assign(r,{matchMode:t.matchMode,territoryObstacles:new Map((t.territoryObstacles||[]).map(o=>[yn(o.x,o.z),o])),phase:t.phase,now:t.now,grid:t.grid,players:new Map(t.players.map(o=>[o.id,{...o}])),crates:new Map(t.crates.map(o=>[yn(o.x,o.z),o])),walls:new Map(t.walls.map(o=>[yn(o.x,o.z),o])),bombs:new Map(t.bombs.map(o=>[o.id,o])),hazards:new Map(t.hazards.map(o=>[yn(o.x,o.z),o])),ghostBombs:new Map,motion:new Map});for(const o of t.bombs)r.ghostBombs.set(o.id,new Set(t.players.filter(c=>Math.round(c.x)===o.x&&Math.round(c.z)===o.z).map(c=>c.id)));r.kickBomb=()=>!1,r.checkCell=o=>{for(const[c,l]of r.ghostBombs){const h=r.bombs.get(c);(!h||Math.round(o.x)!==h.x||Math.round(o.z)!==h.z)&&l.delete(o.id)}},this.directions=new Map;for(const o of t.players){const c=this.previous.get(o.id),l=c?o.x-c.x:0,h=c?o.z-c.z:0;this.directions.set(o.id,Math.hypot(l,h)>.005?Math.abs(l)>Math.abs(h)?l>0?"right":"left":h>0?"down":"up":null),r.motion.set(o.id,o.dir)}this.previous=new Map(t.players.map(o=>[o.id,{x:o.x,z:o.z}])),this.g=r,this.advance(Math.min(150,Math.max(0,n/2)));const a=r.players.get(e);if(s&&a?.alive&&!a.dashDir&&a.jumpingUntil<=r.now){const o=s.x-a.x,c=s.z-a.z;Math.hypot(o,c)<=1&&Math.min(Math.abs(o),Math.abs(c))<.04&&this.clearPath(e,a,s)&&this.corrections.set(e,{x:o,z:c})}}advance(t){if(!this.g||this.g.phase!=="playing")return;let e=Math.min(t,400);for(;e>0;){const n=Math.min(25,e);for(const s of this.g.players.values()){const r=s.id===this.id?this.input:this.directions.get(s.id);r&&(s.id===this.id||this.elapsed<this.remoteWindow)&&!s.dashDir&&s.jumpingUntil<=this.g.now&&this.g.move(s.id,r,n)}e-=n}}step(t){const e=Math.max(0,Math.min(t*1e3,500-this.elapsed));this.advance(e),this.elapsed+=t*1e3;const n=Math.exp(-t*10);for(const s of this.corrections.values())s.x*=n,s.z*=n}position(t){return this.g?.players.get(t)}clearPath(t,e,n){const s=Math.hypot(n.x-e.x,n.z-e.z),r=Math.max(1,Math.ceil(s/.08));for(let a=1;a<=r;a++){const o=e.x+(n.x-e.x)*a/r,c=e.z+(n.z-e.z)*a/r;if(this.g.blockedFor(t,Math.round(o),Math.round(c))||Math.abs(n.x-e.x)>.01&&this.g.blockedFor(t,n.x>e.x?Math.ceil(o-1e-5):Math.floor(o+1e-5),Math.round(c))||Math.abs(n.z-e.z)>.01&&this.g.blockedFor(t,Math.round(o),n.z>e.z?Math.ceil(c-1e-5):Math.floor(c+1e-5)))return!1}return!0}visualPosition(t){const e=this.position(t),n=this.corrections.get(t);if(!e||!n)return e;const s={...e,x:e.x+n.x,z:e.z+n.z};return this.clearPath(t,e,s)?s:(this.corrections.delete(t),e)}reset(){this.g=null,this.previous.clear(),this.input=null,this.corrections.clear(),this.lastServerNow=null}}function Ux(i){if(i==="monkey")return au(!0).rig;const t=new Ht,e=new ne({color:i==="black"?2499376:i==="pink"?16092073:7652971,roughness:.67}),n=new ne({color:i==="black"?15264504:16773076,roughness:.8}),s=new ne({color:2374722,roughness:.5}),r=(f,u,d,x,g,m,w,v)=>{const y=new Ft(new Ae(1,12,8),u);return y.position.set(d,x,g),y.scale.set(m,w,v),y.castShadow=y.receiveShadow=!0,f.add(y),y};r(t,e,0,.43,0,.29,.36,.28),r(t,n,0,.42,.235,.19,.25,.075);const a=r(t,e,0,.25,-.36,.12,.14,.38);a.rotation.x=-.25;const o=new Ht;o.position.set(0,.93,.22),t.add(o),r(o,e,0,0,0,.27,.25,.26),r(o,n,0,-.1,.22,.2,.14,.19),r(o,s,0,-.02,.375,.065,.047,.037);const c=[];for(const f of[-1,1]){const u=new Ht;u.position.set(f*.13,.18,-.03),u.rotation.z=-f*.17,o.add(u),r(u,e,0,.19,0,.075,.25,.065),r(u,n,0,.19,.054,.034,.16,.018),c.push(u),r(o,i==="black"?new ne({color:16733772,emissive:8065045,emissiveIntensity:.35}):s,f*.2,.06,.185,.052,.073,.045),r(o,n,f*.206,.083,.22,.016,.023,.012),r(t,e,f*.28,.52,.18,.083,.16,.09)}const l=[];for(const f of[-1,1])l.push(r(o,i==="pink"?new ne({color:15360652}):e,f*.22,-.095,.18,.06,.025,.025));const h=[];for(const f of[-1,1]){const u=new Ht;u.position.set(f*.23,.25,-.03),t.add(u),r(u,e,0,0,0,.16,.2,.18),r(u,e,0,-.15,.13,.13,.09,.26),h.push(u)}if(i==="black"){for(let f=0;f<6;f++){const u=new Ft(new On(.085,.22,4),e);u.position.set(Math.sin(f)*.19,.76,Math.cos(f)*.14+.06),u.rotation.z=(f-3)*.3,u.rotation.x=Math.PI,t.add(u)}o.scale.set(1.04,1.04,1.04),c.forEach(f=>f.scale.y=1.35),a.scale.set(.16,.19,.46)}const p=r(t,s,0,.73,-.1,.23,.065,.19);return t.userData={head:o,ears:c,legs:h,tail:a,saddle:p,cheeks:l},t}function Nx(i){const t=new Ht,e=new ne({color:i==="monkey"?16772535:16774363,roughness:.6}),n=new ne({color:i==="monkey"?7423277:i==="black"?2631221:i==="green"?7652971:16092073,roughness:.6}),s=new Ft(new Ae(.26,14,10),e);s.scale.set(.86,1.35,.86),s.castShadow=!0,t.add(s);for(let a=0;a<5;a++){const o=a/5*Math.PI*2,c=new Ft(new Ae(.075,8,6),n);c.position.set(Math.cos(o)*.19,a%2?-.09:.07,Math.sin(o)*.19),c.scale.set(1,.8,.6),c.rotation.y=-o,t.add(c)}const r=new Ft(new Le(.34,.018,4,24),n);return r.rotation.x=Math.PI/2,r.position.y=-.35,t.add(r),t}function Ox(i,t,{time:e,phase:n,stride:s,jump:r=0,dashing:a=!1,reduced:o=!1}){const c=i.userData,l=e*.001,h=1-s;if(t==="monkey")return c.head.rotation.y=Math.sin(l*1.7)*.14*h,c.head.rotation.x=-.1+s*.1,c.legs.forEach((f,u)=>f.rotation.x=Math.sin(n+u*Math.PI)*s*.6),c.arms.forEach((f,u)=>{f.rotation.x=Math.sin(n+u*Math.PI)*s*.5-(r>0?.4:0),f.rotation.z=(u?1:-1)*.15}),c.tail.rotation.y=Math.sin(l*2+n)*.18,c.ears.forEach((f,u)=>f.rotation.z=Math.sin(l*3+u)*.05),{hop:o?0:Math.abs(Math.sin(n))*.05*s,lean:s*.08};if(t==="black"){const f=Math.sin(l*1.8)*.018*h;return c.head.rotation.y=Math.sin(l*.55)*.12*h,c.head.rotation.z=0,c.head.rotation.x=-.08+s*.07,c.ears.forEach((u,d)=>{u.rotation.x=-.1+Math.sin(l*.8+d)*.045*h+(r>0?.45:s*.18),u.rotation.z=d?-.1:.1}),c.legs.forEach((u,d)=>u.rotation.x=Math.sin(n*.55+d*Math.PI)*.26*s+(r>0?-.4:0)),c.tail.rotation.x=-.15+Math.sin(n*.55)*.15*s,c.tail.rotation.z=Math.sin(l*.8)*.055*h,i.scale.set(1,1+f,1),{hop:o?0:Math.abs(Math.sin(n*.55))*.055*s,lean:r>0?.1:0}}if(t==="pink"){const f=Math.abs(Math.sin(n*.68))*.12*s;return c.head.rotation.z=Math.sin(l*1.7)*.1*h,c.head.rotation.y=Math.sin(l*.9)*.2*h,c.head.rotation.x=-.05+Math.sin(n*.68)*.06*s,c.ears.forEach((u,d)=>{u.rotation.x=Math.sin(l*3.6+d*1.8)*.12*h+Math.sin(n*.68+d)*.12*s,u.rotation.z=(d?-.17:.17)+Math.sin(l*2.1+d)*.035}),c.legs.forEach(u=>u.rotation.x=Math.sin(n*.68)*.38*s+(r>0?-.25:0)),c.tail.rotation.x=-.25+Math.sin(n*.68)*.2*s+Math.sin(l*2)*.05*h,i.scale.set(1+Math.sin(n*1.36)*s*.035,1-Math.sin(n*1.36)*s*.045,1),{hop:o?0:f,lean:0}}const p=Math.pow(Math.max(0,Math.sin(l*2.4)),10)*h;return c.head.rotation.y=Math.sin(l*2.4)*.09*h,c.head.rotation.z=0,c.head.rotation.x=(a?.22:.07)+Math.sin(l*6)*.035*h,c.ears.forEach((f,u)=>{f.rotation.x=(a?.85:.35*s)+Math.sin(l*5+u)*.08*h,f.rotation.z=u?-.12:.12}),c.legs.forEach((f,u)=>f.rotation.x=Math.sin(n*.95+u*Math.PI)*.48*s+Math.sin(l*12+u*Math.PI)*p*.2),c.tail.rotation.x=-.3+(a?.32:.1*s),c.tail.rotation.z=Math.sin(n*.9)*s*.1,i.scale.set(a?1.02:1,a?.96:1,1),{hop:o?0:Math.abs(Math.sin(n*.95))*.035*s+p*.018,lean:a?.16:.05*s}}function Fx(i){const t=cu(i),e=Un[t]||Un.bomb,n=new Ht,s=new Ht;n.add(s);const r=new Xt(e.color),a=new ne({color:r,roughness:.55,emissive:r,emissiveIntensity:.12}),o=new ne({color:16774619,roughness:.6}),c=new ne({color:2503749,roughness:.4}),l=(d,x,g,m=0,w=0,v=0)=>{const y=new Ft(d,x);return y.position.set(m,w,v),y.castShadow=!0,g.add(y),y};if(i.kind==="egg"){const d=Nx(i.mount);d.scale.setScalar(1.15),s.add(d)}else if(t==="heart"){const d=new Kr;d.moveTo(0,-.28),d.bezierCurveTo(-.56,.12,-.25,.49,0,.22),d.bezierCurveTo(.25,.49,.56,.12,0,-.28),l(new qs(d,{depth:.11,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.025,bevelThickness:.025}),a,s,0,0,-.06),l(new ae(.22,.055,.035),o,s,.11,.035,.095),l(new ae(.055,.22,.035),o,s,.11,.035,.095)}else if(t==="roller"){const d=l(new Zt(.16,.16,.62,12),a,s,0,.17,0);d.rotation.z=Math.PI/2,l(new ae(.025,.28,.025),o,s,.35,.02,0),l(new ae(.35,.025,.025),o,s,.19,-.11,0),l(new Zt(.07,.07,.25,8),c,s,.02,-.24,0)}else if(t==="nozzle"){l(new Zt(.16,.16,.43,12),a,s,0,0,0),l(new Zt(.1,.1,.08,10),c,s,0,.25,0),l(new ae(.18,.065,.09),o,s,.09,.29,0);for(let d=0;d<3;d++){const x=l(new ae(.15,.026,.025),a,s,.34,.23+d*.07,0);x.rotation.z=(d-1)*.4}}else if(t==="inktank")l(new Be(.43,.49,.25,2,.04),a,s,0,.02,0),l(new Le(.09,.025,5,14),o,s,0,.32,0),l(new On(.07,.16,9),o,s,0,.03,.145),l(new Ae(.07,8,6),o,s,0,-.06,.145);else if(t==="paintshield"){const d=new Kr;d.moveTo(-.25,.28),d.lineTo(0,.38),d.lineTo(.25,.28),d.lineTo(.25,-.07),d.lineTo(0,-.32),d.lineTo(-.25,-.07),d.closePath(),l(new qs(d,{depth:.08,bevelEnabled:!1}),a,s,0,0,-.04),l(new ae(.08,.3,.03),o,s,0,.02,.075),l(new ae(.27,.08,.03),o,s,0,.02,.075)}else if(t==="bomb"){l(new Ae(.26,12,10),c,s,0,.04,0);const d=l(new Zt(.023,.023,.17,6),o,s,.05,.32,0);d.rotation.z=-.35,l(new Kn(.057,0),a,s,.085,.41,0),l(new Be(.08,.28,.04,2,.015),a,s,.2,.07,.19),l(new Be(.28,.08,.04,2,.015),a,s,.2,.07,.19)}else if(t==="fire"){const d=new Kr;d.moveTo(0,-.26),d.bezierCurveTo(-.39,-.16,-.26,.11,-.18,.19),d.bezierCurveTo(-.23,-.04,-.04,.12,.01,.45),d.bezierCurveTo(.3,.15,.07,.04,.18,.04),d.bezierCurveTo(.2,.21,.4,-.15,0,-.26),l(new qs(d,{depth:.09,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.025,bevelThickness:.025}),a,s,0,.02,-.05),l(new On(.105,.28,7),new ne({color:16772483,emissive:16765284,emissiveIntensity:.5}),s,0,-.08,.08)}else{l(new Be(.57,.17,.28,2,.07),o,s,0,-.15,.035),l(new Be(.52,.22,.25,2,.07),a,s,0,-.04,.02),l(new Be(.23,.23,.24,2,.055),a,s,-.13,.12,-.01);for(let d=0;d<3;d++){const x=l(new ae(.14,.025,.025),o,s,.01+d*.04,.079,.128);x.rotation.z=-.28}for(const d of[-1,1]){const x=l(new On(.12,.3,3),o,s,-.27,.1,d*.17);x.rotation.z=-.7}if(t==="kick"){l(new Ae(.14,10,8),c,s,.39,.14,0),l(new Zt(.013,.013,.1,5),o,s,.41,.32,0);for(let d=0;d<2;d++)l(new ae(.11,.025,.025),a,s,.38+d*.05,.34+d*.07,0)}}const h=l(new Le(.37,.024,5,28),new fe({color:r}),n,0,-.34,0);h.rotation.x=Math.PI/2;const p=document.createElement("canvas");p.width=256,p.height=64;const f=p.getContext("2d");f.fillStyle="#1e2931e8",f.beginPath(),f.roundRect(20,8,216,46,9),f.fill(),f.textAlign="center",f.font="900 22px Arial",f.fillStyle=e.color,f.fillText(e.short,128,39);const u=new Ts(new Fi({map:new wn(p),depthTest:!1}));return u.position.y=.62,u.scale.set(.95,.238,1),n.add(u),n.userData={...i,model:s,ring:h,tag:u,key:t},n}function Bx(i,t,e,n){const s=i.userData;i.position.y=.58+Math.sin(t*.003+i.position.x)*.075,s.model.rotation.y+=n?0:e*.65,s.ring.material.opacity=.9}const Ys={island:{floor:[10079607,10998913],stone:15984586,crate:13932896,trim:9197882,base:2522240,edge:15984072,sea:7653829,fog:11134169},ice:{floor:[11854831,13168881],stone:15792895,crate:9293023,trim:14612735,base:5405601,edge:14875135,sea:8433352,fog:11916782},factory:{floor:[4546669,5467766],stone:9612977,crate:11371451,trim:15844712,base:2307397,edge:16172891,sea:3163220,fog:8953002},volcano:{floor:[3156534,4469056],stone:5326674,crate:10575704,trim:15772521,base:3877698,edge:15699030,sea:15628364,fog:14134429},rooftop:{floor:[12630438,11116426],stone:6916504,crate:15645793,trim:3425620,base:4541022,edge:14992514,sea:5265517,fog:12437465},subway:{floor:[3291715,13682863],stone:13359323,crate:4755358,trim:16754514,base:2306625,edge:15640908,sea:1581355,fog:6648704},garden:{floor:[1654334,2578258],stone:5475416,crate:10904197,trim:15963592,base:1519415,edge:6911315,sea:1584967,fog:7898783},ruins:{floor:[14925699,13412979],stone:11636057,crate:9926469,trim:16242802,base:8546372,edge:14469787,sea:11244912,fog:14993567}};function zx(i,t=bu){const e=(t-1)/2*1.08+1.35,n=e*2,s=t/13,r=Ys[i]||Ys.island,a=new Ht,o=[],c=(S,b=0)=>new ne({color:S,roughness:.8,emissive:b,emissiveIntensity:.35}),l=(S,b,M=a)=>{const _=new Ft(S,typeof b=="number"?c(b):b);return _.castShadow=_.receiveShadow=!0,M.add(_),_},h=(S,b,M,_,I,U,z,V=.08,q=a)=>{const G=l(new Be(S,b,M,2,V),_,q);return G.position.set(I,U,z),G},p=(S,b,M,_,I,U=1,z=1,V=1,q=a)=>{const G=l(new Ae(S,9,7),b,q);return G.position.set(M,_,I),G.scale.set(U,z,V),G};h(n,.7,n,r.base,0,-.86,0,.25),h(n+.1,.22,n+.1,r.edge,0,-.39,0,.13),h(n-.15,.28,n-.15,r.floor[0],0,-.2,0,.12);const f=1.08,u=S=>(S-(t-1)/2)*f,d=new Te,x=new ds(new ae(f*.975,.055,f*.975),c(16777215),t*t);let g=0;for(let S=0;S<t;S++)for(let b=0;b<t;b++)d.position.set(u(b),-.035,u(S)),d.updateMatrix(),x.setMatrixAt(g,d.matrix),x.setColorAt(g++,new Xt(r.floor[(b+S)%2]));x.receiveShadow=!0,a.add(x);const m=[{geo:new Be(.99,.49,.99,2,.09),color:r.stone,positions:[]},{geo:i==="garden"?new Kn(.61,1):i==="subway"?new Zt(.43,.43,1.05,12):i==="ice"?new Zt(.37,.53,1.06,5):i==="ruins"?new Zt(.29,.49,1.18,4):i==="volcano"?new Kn(.61,0):new Be(.99,.86,.99,2,.09),color:r.stone,positions:[]},{geo:new Be(.72,.055,.72,2,.025),color:r.trim,positions:[]}];for(let S=0;S<t;S++)for(let b=0;b<t;b++)if(_h(b,S,t)){const M=b===0||S===0||b===t-1||S===t-1;m[M?0:1].positions.push([u(b),M?.24:.42,u(S)]),M||m[2].positions.push([u(b),.86,u(S)])}for(const S of m){const b=new ds(S.geo,c(S.color),S.positions.length);S.positions.forEach(([M,_,I],U)=>{d.position.set(M,_,I),d.updateMatrix(),b.setMatrixAt(U,d.matrix)}),b.castShadow=b.receiveShadow=!0,a.add(b)}const w=l(new Zt(18*s,18*s,.15,64),c(r.sea,i==="volcano"?14499861:0));w.position.y=-2.05,w.castShadow=!1;for(const[S,b]of[[-e+.8,-e+.8],[e-.8,-e+.8],[-e+.8,e-.8],[e-.8,e-.8]])if(i==="island"){const M=l(new Zt(.12,.2,1.8,7),12223072);M.position.set(S,.8,b),M.rotation.z=S>0?-.1:.1;for(let _=0;_<6;_++){const I=_/6*Math.PI*2,U=p(.63,_%2?4168819:5945219,S+Math.cos(I)*.43,1.78,b+Math.sin(I)*.43,.6,.23,1.7);U.rotation.y=-I+Math.PI/2,U.rotation.z=.14}}else if(i==="ice")for(let M=0;M<3;M++){const _=l(new On(.28,1.4+M*.45,5),c(M%2?10873333:15269375));_.position.set(S+(M-1)*.3,.45,b+M%2*.25),_.rotation.z=(M-1)*.2}else if(i==="factory"){h(.8,.25,.8,3229011,S,.05,b),l(new Zt(.33,.33,1.5,12),8427941).position.set(S,.9,b);const _=l(new Le(.34,.05,5,12),c(7792078,3325370));_.rotation.x=Math.PI/2,_.position.set(S,1.62,b),o.push({object:_,type:"beacon"}),h(.13,1.2,.13,16106849,S+.4,.7,b+.15,.025)}else if(i==="volcano"){for(let _=0;_<3;_++){const I=l(new Kn(.55,0),_%2?6769498:9197921);I.position.set(S+(_-1)*.35,.3+_%2*.25,b),I.scale.set(1,1.5,1)}const M=p(.15,c(16757861,16738587),S,.22,b+.5);o.push({object:M,type:"lava"})}if(i==="factory")for(const S of[3,t-4])for(let b=1;b<=t-2;b++){h(.75,.012,.44,2835277,u(b),.012,u(S),.015);for(const M of[-.17,.17]){const _=h(.07,.014,.38,15515993,u(b)+M,.025,u(S),.01);_.rotation.y=-.35}}if(i==="ice")for(let S=0;S<10;S++)p(.22,16055551,(S-5)*1.35,.12,S%2?e-.7:-e+.7,1.6,.5,1);if(i==="volcano")for(const S of[-e+.55,e-.55])h(12,.015,.11,c(16754528,16739105),0,-.02,S,.02);const v=(S,b,M,_,I=0)=>{const U=h(S,.012,.028,b,M,.026,_,.005);return U.rotation.y=I,U};for(let S=1;S<t-1;S+=2)for(let b=1;b<t-1;b+=2){const M=u(b),_=u(S);if(i==="island"&&(p(.1,6922570,M+.36,.025,_+.31,1.5,.22,1),p(.055,16046235,M-.35,.024,_-.3,1,.22,1)),i==="ice"&&(v(.61,7976915,M,_,.55),v(.29,15662847,M+.2,_+.1,-.7)),i==="factory"){for(const I of[-.25,0,.25])v(.66,2374726,M,_+I);h(.1,.018,.1,16040283,M-.38,.028,_-.38,.01)}if(i==="volcano"&&(v(.47,c(15307596,11748377),M,_,.5),v(.3,c(16099926,10761488),M+.2,_+.15,-.65)),i==="rooftop"&&(v(.78,16181162,M,_+.33),v(.4,9076846,M-.3,_,Math.PI/2)),i==="subway"&&h(.7,.015,.16,7576993,M,.021,_,.01),i==="garden"){for(const I of[-.27,0,.27])v(.72,3765867,M,_+I);p(.04,16433789,M+.36,.045,_+.3)}i==="ruins"&&(v(.5,11242832,M,_,Math.PI/4),v(.5,15849366,M,_,-Math.PI/4),h(.09,.015,.09,8936789,M,.032,_,.005))}if(i==="rooftop"){for(let b=0;b<10;b++){const M=(b-4.5)*2.1,_=2+b%3*1.3;h(1.6,_,1.8,6780298,M,_/2-1.5,-e-2,.05);for(let I=0;I<3;I++)h(.65,.23,.02,13748114,M,-.8+I*.8,-e-1.085,.01)}for(const b of[-e+.7,e-.7]){h(.75,.65,.75,7440533,b,.35,0);const M=l(new Le(.26,.045,5,12),c(12636360));M.rotation.x=-Math.PI/2,M.position.set(b,.71,0),o.push({object:M,type:"fan"})}const S=v(n-.6,2635852,0,-e+.55);S.position.y=1.35;for(let b=0;b<6;b++){const M=h(.5,.58,.035,[15241609,9686719,15980427][b%3],(b-2.5)*1.2,1.05,-e+.55,.02);o.push({object:M,type:"cloth",offset:b})}}if(i==="subway")for(const S of[5,t-6]){h((t-2)*f,.018,.84,2304820,0,.025,u(S),.01);for(const _ of[-.3,.3])h((t-2)*f,.035,.06,11123139,0,.045,u(S)+_,.005);for(let _=1;_<t-1;_++)h(.11,.015,.8,7495501,u(_),.04,u(S),.005);const b=new Ht;a.add(b);for(let _=0;_<3;_++){h(2.8,1.08,.87,14929560,_*3,.6,0,.1,b),h(2.6,.2,.9,13069142,_*3,.24,0,.01,b);for(const I of[-.85,0,.85])h(.55,.42,.91,3499637,_*3+I,.7,0,.025,b)}b.visible=!1,o.push({object:b,type:"train",row:S});const M=p(.13,c(16736600,16720401),-e+.7,1.15,u(S));h(.1,1.1,.1,6848389,-e+.7,.5,u(S),.01),o.push({object:M,type:"beacon"})}if(i==="garden"){for(const _ of[-e+.55,e-.55])for(const I of[-e+.55,e-.55]){h(.13,1.2,.13,6773110,_,.6,I,.01);const U=p(.26,c(16764559,16750135),_,1.35,I);o.push({object:U,type:"beacon"});for(let z=0;z<5;z++){const V=z*1.256;p(.17,z%2?14917065:7322499,_+Math.cos(V)*.35,.18,I+Math.sin(V)*.35)}}const S=[];for(let _=0;_<30;_++)S.push(Math.sin(_*17)*e,.5+_%5*.16,Math.cos(_*23)*e);const b=new Ce;b.setAttribute("position",new oe(S,3));const M=new da(b,new hr({color:15400858,size:.055,transparent:!0,opacity:.8}));a.add(M),o.push({object:M,type:"fireflies"})}if(i==="ruins"){for(const S of[-e+.65,e-.65]){h(.8,1.6,.6,11570524,S,.8,0),h(1,.2,.8,14337427,S,1.64,0);const b=l(new Rc(.22),c(13603823,8140476));b.position.set(S,1.98,0),o.push({object:b,type:"gem"})}for(const S of[-e+.55,e-.55]){h(3,.22,.8,9597768,0,.1,S);for(let b=0;b<3;b++)h(.42,.45,.6,13084006,(b-1)*.75,.32,S)}}if(i==="island"||i==="ice")for(let S=0;S<4;S++){const b=new Ht;for(let M=0;M<3;M++)p(1+M*.2,i==="ice"?15398655:15990770,(M-1)*1.3,0,0,1,.45,.6,b);b.position.set((S%2?1:-1)*16,3+S%2,S<2?-14:14),a.add(b),o.push({object:b,type:"cloud",offset:S})}const y=document.createElement("canvas");y.width=1024,y.height=128;const C=y.getContext("2d");return C.font="italic 900 71px Arial",C.fillStyle="#c6ff60",C.textAlign="center",C.fillText("TDG / CREW ARENA",512,88),l(new ln(5.6,.45),new fe({map:new wn(y),transparent:!0,depthWrite:!1})).position.set(0,-.7,e+.025),{group:a,animated:o}}const rs=1.08,Cn=(i,t=.75)=>new ne({color:i,roughness:t}),so={stone:15984586,wood:13932896,darkwood:9197882};class kx{constructor(t){this.host=t,this.networkMotion=new Lx,this.networked=!1,this.grid=13,this.follow=!1,this.myId="",this.enemies=new Map,this.portal=null,this.mobile=matchMedia("(pointer:coarse)").matches,this.reduced=matchMedia("(prefers-reduced-motion:reduce)").matches,this.effects=[],this.syncAt=performance.now(),this.serverTime=0,this.phase="lobby",this.flash=0,this.flashElement=document.createElement("div"),this.flashElement.id="blastFlash",document.body.appendChild(this.flashElement),this.scene=new lr,this.scene.fog=new ua(11134169,34,70),this.camera=new Dc(-10,10,10,-10,.1,100),this.overheadCamera=this.camera,this.eyeCamera=new He(73,1,.035,100),this.firstPerson=!1,this.lookYaw=0,this.lookPitch=-.22,this.steering=new Dx,this.turnTarget=null,this.camera.position.set(0,20.5,14),this.camera.lookAt(0,0,0),this.renderer=new dr({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.quality=new yx(devicePixelRatio),this.renderer.setPixelRatio(this.mobile?this.quality.ratio:Math.min(devicePixelRatio,1.7)),this.renderer.shadowMap.enabled=!this.mobile,this.renderer.shadowMap.type=Mh,this.renderer.outputColorSpace=ze,this.renderer.toneMapping=ar,this.renderer.toneMappingExposure=1.16,this.renderer.domElement.setAttribute("aria-label","Ilha do Caos: arena 3D com quatro personagens e blocos"),t.appendChild(this.renderer.domElement),this.scene.add(new ur(15400951,4095365,2.3));const e=new Li(16772558,3.4);this.sun=e,e.position.set(-9,20,9),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.left=-11,e.shadow.camera.right=11,e.shadow.camera.top=11,e.shadow.camera.bottom=-11,e.shadow.normalBias=.045,e.shadow.bias=-2e-4,e.shadow.camera.far=60,this.scene.add(e),this.stage="",this.environmentGroup=null,this.decorations=[],this.walls=new Map,this.hazards=new Map,this.players=new Map,this.crates=new Map,this.bombs=new Map,this.flames=new Map,this.powerups=new Map,this.particles=[],this.clouds=[],this.last=0,this.shake=0,this.geo={stone:new Be(.99,.86,.99,2,.09),crate:new Be(.91,.85,.91,2,.055),bomb:new Ae(.31,12,10),fire:new Ae(.46,9,7),particle:new ae(.13,.13,.13)},this.mats={stone:Cn(so.stone),crate:Cn(so.wood),wood:Cn(so.darkwood),bomb:Cn(2241347,.35),fire:new fe({color:16762463,transparent:!0,opacity:.9}),fireCore:new fe({color:16773036}),white:Cn(16250088,.5),dark:Cn(1518654,.4)};const n=document.createElement("canvas");n.width=256,n.height=128;const s=n.getContext("2d");s.translate(128,64),s.rotate(-.12),s.font="italic 1000 80px Arial",s.textAlign="center",s.lineWidth=8,s.strokeStyle="#202621",s.strokeText("TDG",0,25),s.fillStyle="#d3ff82",s.fillText("TDG",0,25),s.strokeStyle="#d3ff82",s.lineWidth=4,s.beginPath(),s.moveTo(-78,39),s.lineTo(90,32),s.stroke(),this.mats.graffiti=new fe({map:new wn(n),transparent:!0,depthWrite:!1}),this.geo.graffiti=new ln(.69,.35),this.geo.plank=new ae(.095,.84,.025),this.crateInstances=new Ht,this.crateBatches=[new ds(this.geo.crate,this.mats.crate,320),new ds(this.geo.plank,this.mats.wood,640),new ds(this.geo.graffiti,this.mats.graffiti,320)];for(const r of this.crateBatches)r.count=0,r.castShadow=r.receiveShadow=!0,this.crateInstances.add(r);this.scene.add(this.crateInstances),this.crateSignature="",this.territoryLayer=new Rx(this.scene),this.environment(),this.resize(),new ResizeObserver(()=>this.resize()).observe(t)}mesh(t,e,n=this.scene){const s=new Ft(t,e);return s.castShadow=s.receiveShadow=!0,n.add(s),s}box(t,e,n,s,r,a,o,c=.08,l=this.scene){const h=this.mesh(new Be(t,e,n,2,c),Cn(s),l);return h.position.set(r,a,o),h}wx(t){return(t-(this.grid-1)/2)*rs}environment(t="island",e=13){if(this.stage===t&&this.grid===e)return;const n=this.grid!==e;this.stage=t,this.grid=e,this.environmentGroup&&(this.scene.remove(this.environmentGroup),this.disposeObject(this.environmentGroup));const s=this.territoryMode?Cx():zx(t,e);this.renderer.shadowMap.enabled=!this.mobile;const r=e/2+3;if(this.sun.shadow.camera.left=-r,this.sun.shadow.camera.right=r,this.sun.shadow.camera.top=r,this.sun.shadow.camera.bottom=-r,this.sun.shadow.camera.updateProjectionMatrix(),n&&this.resize(),this.environmentGroup=s.group,t==="factory"&&!this.territoryMode){const o=new Ht;s.group.add(o);const c=new ne({color:2567481,roughness:.5,metalness:.4}),l=new fe({color:15251037});for(const h of[3,e-4])for(let p=1;p<e-1;p++){const f=new Ft(new ae(.99,.035,.84),c);f.position.set(this.wx(p),.04,this.wx(h)),o.add(f);for(const u of[-1,1]){const d=new Ft(new ae(.27,.02,.045),l);d.position.set(this.wx(p),.067,this.wx(h)+u*.095),d.rotation.y=u*.65,o.add(d)}}}this.decorations=s.animated,this.mobile&&this.batchStaticScenery(s.group,s.animated),this.scene.add(s.group),this.geo.crate.dispose(),this.geo.crate=t==="island"||t==="garden"?new Zt(.4,.43,.85,10):t==="volcano"?new Kn(.57,0):t==="ice"?new Zt(.34,.48,.85,5):new Be(.91,.85,.91,2,t==="ruins"?.025:.09),this.crateBatches[0].geometry=this.geo.crate,this.crateSignature="",this.crateBatches[1].visible=["rooftop","ruins"].includes(t);const a=Ys[t]||Ys.island;this.eyeSky=new Xt(["garden","subway"].includes(t)?a.sea:a.fog),this.scene.fog.color.setHex(a.fog),this.mats.crate.color.setHex(a.crate),this.mats.wood.color.setHex(a.trim),this.mats.stone.color.setHex(a.stone)}batchStaticScenery(t,e){const n=new Set(e.map(a=>a.object)),s=new Map;t.updateMatrixWorld(!0),t.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||!a.material?.color||a.material.map||a.material.transparent||Array.isArray(a.material))return;for(let l=a;l;l=l.parent)if(n.has(l))return;const o=a.material,c=[o.type,o.color.getHex(),o.emissive?.getHex(),o.roughness,o.metalness,o.emissiveIntensity].join(":");s.has(c)||s.set(c,[]),s.get(c).push(a)});const r=new Set;for(const a of s.values())a.length>1&&r.add(a[0].material);for(const a of s.values()){if(a.length<2)continue;const o=a.map(h=>h.geometry.clone().applyMatrix4(h.matrixWorld)),c=Uc(o);if(o.forEach(h=>h.dispose()),!c)continue;const l=new Ft(c,a[0].material);l.castShadow=l.receiveShadow=!0,t.add(l);for(const h of a)h.removeFromParent(),h.geometry.dispose(),r.has(h.material)||h.material.dispose()}}makeWall(t){const e=new Ht,n=this.mesh(this.geo.stone,this.mats.stone,e);n.scale.y=1.25;const s=this.mesh(new ln(.94,.94),new fe({color:16740438,transparent:!0,opacity:.55,side:ke}),e);s.rotation.x=-Math.PI/2,s.position.y=.065;const r=this.mesh(new os(.22,.35,24),new fe({color:16773543,side:ke}),e);return r.rotation.x=-Math.PI/2,r.position.y=.08,e.position.set(this.wx(t.x),0,this.wx(t.z)),e.userData={w:t,box:n,warning:s,ring:r},this.scene.add(e),e}makeHazard(t){const e={tide:5689311,frost:13957631,belt:16767328,geyser:16739899,ink:12547839,gust:11656959,train:16736857,bloom:16358362,gate:12553215}[t.kind],n=new Ht,s=this.mesh(new ln(.94,.94),new fe({color:e,transparent:!0,opacity:.36,side:ke}),n);s.rotation.x=-Math.PI/2,s.position.y=.07;const r=this.mesh(new On(.25,1.25,7),new fe({color:16761211,transparent:!0,opacity:.9}),n);r.position.y=.65;const a=this.mesh(new Le(.28,.023,4,18),new fe({color:e}),n);if(a.rotation.x=-Math.PI/2,a.position.y=.09,t.kind==="belt"||t.kind==="gust"){a.visible=!1;const o=new Ht;n.add(o);for(const c of[-1,1]){const l=this.mesh(new ae(.3,.025,.045),new fe({color:16769698}),o);l.position.z=c*.095,l.rotation.y=c*.65}o.position.y=.11,n.userData.flow=o}return t.kind==="gate"&&(a.rotation.x=0,a.position.y=.7,a.scale.setScalar(1.8),r.visible=!1),n.position.set(this.wx(t.x),0,this.wx(t.z)),n.userData={...n.userData,h:t,plate:s,core:r,mark:a},this.scene.add(n),n}makePlayer(t,e){const n=new Ht,{rig:s,limbs:r}=Qn(t.characterId,!1,this.mobile);n.add(s);{const p=this.mesh(new Le(.43,.025,5,32),new fe({color:t.color}),n);p.rotation.x=Math.PI/2,p.position.y=.025}const a=this.mesh(new Ae(.66,12,9),new fe({color:12189573,transparent:!0,opacity:.13,wireframe:!0,depthWrite:!1}),n);a.position.y=.74,a.visible=!1;const o=document.createElement("canvas");o.width=256,o.height=64;const c=o.getContext("2d");c.font="800 22px system-ui",c.textAlign="center",c.fillStyle="#20262bec",c.beginPath(),c.roundRect(28,8,200,42,12),c.fill(),c.fillStyle="#f8ffe5",c.fillText(e?"VOCÊ":t.name,128,36);const l=new wn(o),h=new Ts(new Fi({map:l,depthTest:!1}));return h.position.y=1.98,h.scale.set(1.8,.45,1),n.add(h),n.position.set(this.wx(t.x),0,this.wx(t.z)),n.userData={rig:s,limbs:r,tag:h,shield:a,mount:null,mountKind:"",characterId:t.characterId,p:t,tx:this.wx(t.x),tz:this.wx(t.z),angle:0,phase:0,me:e,squash:0,death:0,wasAlive:t.alive,stride:0},this.scene.add(n),n}makeCrate(t){const e=new Ht;return e.position.set(this.wx(t.x),0,this.wx(t.z)),this.scene.add(e),e}syncCrateInstances(t){const e=this.grid+":"+t.map(o=>yn(o.x,o.z)).join(";");if(e===this.crateSignature)return;this.crateSignature=e;const n=new Te,[s,r,a]=this.crateBatches;t.forEach((o,c)=>{const l=this.wx(o.x),h=this.wx(o.z);n.rotation.set(0,0,0),n.position.set(l,.425,h),n.updateMatrix(),s.setMatrixAt(c,n.matrix);for(const[p,f]of[[0,-1],[1,1]])n.position.set(l+f*.27,.425,h+.467),n.rotation.z=f*.64,n.updateMatrix(),r.setMatrixAt(c*2+p,n.matrix);n.position.set(l,.47,h+.475),n.rotation.z=((o.x+o.z)%3-1)*.12,n.updateMatrix(),a.setMatrixAt(c,n.matrix)});for(const[o,c]of[[s,t.length],[r,t.length*2],[a,t.length]])o.count=c,o.instanceMatrix.needsUpdate=!0,o.computeBoundingSphere()}makeBomb(t){const e=new Ht,n=new ne({color:2241347,roughness:.32,metalness:.15,emissive:16736284,emissiveIntensity:0}),s=this.mesh(this.geo.bomb,n,e);s.position.y=.34;const r=this.mesh(new Zt(.022,.022,.26,6),Cn(15319420),e),a=this.mesh(new Kn(.065,0),new fe({color:16772995}),e),o=this.mesh(new os(.41,.465,40),new fe({color:16762463,transparent:!0,opacity:.9,side:ke}),e);o.rotation.x=-Math.PI/2,o.position.y=.035;const c=this.mesh(new os(.41,.465,40),new fe({color:2112838,transparent:!0,opacity:.17,side:ke}),e);return c.rotation.x=-Math.PI/2,c.position.y=.025,e.position.set(this.wx(t.x),0,this.wx(t.z)),e.userData={b:t,shell:s,fuse:r,spark:a,ring:o,beadAt:0},this.scene.add(e),e}makeItem(t){const e=Fx(t);return e.position.set(this.wx(t.x),.58,this.wx(t.z)),this.scene.add(e),e}disposeObject(t){const e=new Set(Object.values(this.geo)),n=new Set(Object.values(this.mats));t.traverse(s=>{s.geometry&&!e.has(s.geometry)&&s.geometry.dispose(),s.material&&!n.has(s.material)&&(s.material.map?.dispose(),s.material.dispose())})}visualNow(){return this.serverTime+(this.phase==="playing"?Math.min(150,performance.now()-this.syncAt):0)}sync(t,e){this.networked&&this.networkMotion.accept(t,e,this.networkLatency||0);const n=t.matchMode==="territory";if(this.territoryMode!==n&&(this.territoryMode=n,this.stage=""),this.territorySnapshot=t,this.territoryLayer.sync(t),this.myId=e,this.environment(t.stage||"island",t.grid||13),this.serverTime=t.now,this.syncAt=performance.now(),this.phase=t.phase,this.story=t.matchMode==="story",this.etekUntil=t.etekUntil||0,this.etekUntil>t.now&&!this.etek){const a=new Ht,{rig:o}=Qn("etek",!0,this.mobile);a.add(o);const c=new Ht;a.add(c),c.position.set(.55,1.1,0);const l=Cn(12189573);this.mesh(new Ae(.21,12,10),l,c).scale.set(1,1.3,.8);for(const f of[-.077,.077]){const u=this.mesh(new Ae(.07,8,6),this.mats.dark,c);u.position.set(f,.04,.14),u.scale.set(.65,1.25,.3),u.rotation.z=f>0?-.35:.35}const p=this.mesh(new Le(.45,.022,5,32),new fe({color:12189573}),a);p.rotation.x=Math.PI/2,a.userData={rig:o,alien:c},a.position.set(0,2.2,0),this.scene.add(a),this.etek=a}this.etek&&this.etekUntil<=t.now&&(this.scene.remove(this.etek),this.disposeObject(this.etek),this.etek=null);const s=this.round!==t.round;this.round=t.round;const r=(a,o,c,l,h)=>{const p=new Set(o.map(c));for(const[f,u]of a)p.has(f)||(this.scene.remove(u),a===this.crates&&t.phase==="playing"&&!s&&this.debris(u.position,Ys[this.stage].crate,5),this.disposeObject(u),a.delete(f));for(const f of o){const u=c(f);let d=a.get(u);d||(d=l(f),a.set(u,d)),h?.(d,f)}};r(this.players,t.players,a=>a.id,a=>this.makePlayer(a,a.id===e),(a,o)=>{a.userData.p=o,a.userData.tx=this.wx(o.x),a.userData.tz=this.wx(o.z);const c=a.userData;if(c.characterId!==o.characterId){a.remove(c.rig),this.disposeObject(c.rig);const l=Qn(o.characterId,!1,this.mobile);c.rig=l.rig,c.limbs=l.limbs,c.characterId=o.characterId,a.add(c.rig)}c.mountKind!==(o.mount||"")&&(c.mount&&(a.remove(c.mount),this.disposeObject(c.mount)),c.mount=o.mount?Ux(o.mount):null,c.mountKind=o.mount||"",c.mount&&a.add(c.mount)),c.wasAlive&&!o.alive&&(c.death=.42),!c.wasAlive&&o.alive&&(c.death=0,c.rig.scale.setScalar(1),c.rig.position.y=0),c.wasAlive=o.alive,a.visible=o.alive||c.death>0}),r(this.enemies,t.enemies||[],a=>a.id,a=>{const o=oc(a.kind);return o.position.set(this.wx(a.x),0,this.wx(a.z)),o.userData.e=a,this.scene.add(o),o},(a,o)=>a.userData.e=o),t.portalOpen&&!this.portal&&(this.portal=wx(),this.portal.position.set(this.wx(11),.02,this.wx(11)),this.scene.add(this.portal)),!t.portalOpen&&this.portal&&(this.scene.remove(this.portal),this.disposeObject(this.portal),this.portal=null),r(this.walls,t.walls||[],a=>yn(a.x,a.z),a=>this.makeWall(a),(a,o)=>a.userData.w=o),r(this.hazards,[...t.hazards||[],...t.enemyHazards||[]],a=>yn(a.x,a.z),a=>this.makeHazard(a),(a,o)=>{a.userData.h=o;const c={tide:5689311,frost:13957631,belt:16767328,geyser:16739899,ink:12547839,gust:11656959,train:16736857,bloom:16358362,gate:12553215}[o.kind];a.userData.plate.material.color.setHex(c),a.userData.mark.material.color.setHex(c),a.userData.core.material.color.setHex(o.kind==="ink"?13607935:16761211)}),r(this.crates,t.crates,a=>yn(a.x,a.z),a=>this.makeCrate(a)),this.syncCrateInstances(t.crates),r(this.bombs,t.bombs,a=>a.id,a=>this.makeBomb(a),(a,o)=>a.userData.b=o),r(this.flames,t.flames,a=>yn(a.x,a.z),a=>{const o=new Ht,c=this.mesh(this.geo.fire,this.mats.fireCore,o),l=this.mesh(this.geo.fire,this.mats.fire,o);return c.scale.set(.55,.8,.55),l.scale.set(.95,1,.95),o.position.set(this.wx(a.x),.3,this.wx(a.z)),o.userData={until:a.until,expiresAt:performance.now()+Math.max(0,a.until-t.now)},this.scene.add(o),o},(a,o)=>{o.until>a.userData.until&&(a.userData.expiresAt=performance.now()+Math.max(0,o.until-t.now)),a.userData.until=o.until}),r(this.powerups,t.powerups.filter(a=>a.revealAt<=t.now),a=>yn(a.x,a.z)+":"+a.kind+":"+a.mount,a=>this.makeItem(a))}debris(t,e,n=8){n=Math.min(n,this.reduced?1:this.mobile?5:n);for(let s=0;s<n&&this.particles.length<100;s++){const r=this.mesh(this.geo.particle,Cn(e));r.position.copy(t),r.position.y=.65,r.userData={vx:(Math.random()-.5)*4,vy:2+Math.random()*3,vz:(Math.random()-.5)*4,life:.6+Math.random()*.4},this.particles.push(r)}}burst(t,e,n=16768138){const s=this.mesh(new os(.82,1,32),new fe({color:n,transparent:!0,opacity:.7,side:ke}));s.rotation.x=-Math.PI/2,s.position.set(this.wx(t),.065,this.wx(e)),s.userData={life:.34,total:.34},this.effects.push(s)}event(t){if(t.type==="spray"&&(this.burst(t.x,t.z,t.color),this.debris(new D(this.wx(t.x),.4,this.wx(t.z)),t.color,t.burst?12:4)),t.type==="inkHit"&&this.burst(t.x,t.z,16183259),t.type==="phaseShift"&&(this.burst(t.fromX,t.fromZ,12553215),this.burst(t.x,t.z,12553215)),t.type==="enemyHit"&&this.burst(t.x,t.z,13208063),t.type==="enemyDefeated"&&this.debris(new D(this.wx(t.x),.5,this.wx(t.z)),11515321,8),t.type==="etek")for(const e of this.players.values())e.userData.p.alive&&this.burst(e.userData.p.x,e.userData.p.z,12189573);if(t.type==="explosion"){this.reduced||(this.shake=Math.max(this.shake,.065),this.flash=Math.max(this.flash,.085)),this.burst(t.x??t.cells[0].x,t.z??t.cells[0].z);for(const e of t.cells)this.debris(new D(this.wx(e.x),.4,this.wx(e.z)),16766835,this.mobile?1:2)}if(t.type==="wallDrop"&&(this.debris(new D(this.wx(t.x),.5,this.wx(t.z)),12105388,4),this.reduced||(this.shake=Math.max(this.shake,.025))),t.type==="crush"&&this.burst(t.x,t.z,16744548),t.type==="mountLost"&&(this.debris(new D(this.wx(t.x),.5,this.wx(t.z)),t.kind==="black"?11242715:t.kind==="pink"?16092073:7652971,10),this.burst(t.x,t.z,15400879)),t.type==="ability"){const e=this.players.get(t.id);e&&(e.userData.squash=.16,this.burst(e.userData.p.x,e.userData.p.z,t.kind==="black"?11242715:t.kind==="pink"?16092073:7652971))}if(t.type==="bomb"){const e=this.players.get(t.id);e&&(e.userData.squash=.2)}if(t.type==="pickup"){const e=this.players.get(t.id);e&&(e.userData.squash=.14,this.debris(e.position,12842878,8),this.burst(e.userData.p.x,e.userData.p.z,12842878))}}clear(){this.territoryLayer.clear(),this.networkMotion.reset(),this.crateSignature="";for(const t of this.crateBatches)t.count=0;this.portal&&(this.scene.remove(this.portal),this.disposeObject(this.portal),this.portal=null),this.etek&&(this.scene.remove(this.etek),this.disposeObject(this.etek),this.etek=null);for(const t of[this.players,this.crates,this.bombs,this.flames,this.powerups,this.walls,this.hazards,this.enemies]){for(const e of t.values())this.scene.remove(e),this.disposeObject(e);t.clear()}for(const t of this.particles)this.scene.remove(t),t.material.dispose();this.particles=[];for(const t of this.effects)this.scene.remove(t),this.disposeObject(t);this.effects=[],this.flash=0,this.round=void 0}setFirstPerson(t){this.firstPerson=!!t,this.steering.reset(),this.turnTarget=null,this.lookYaw=lh(this.players.get(this.myId)?.userData.p.dir),this.lookPitch=-.16,this.resize()}inputDirection(t){if(!this.firstPerson||!this.players.get(this.myId)?.userData.p.alive)return t;const e=this.steering.direction(t,this.lookYaw);return e?this.turnTarget=lh(e):this.turnTarget=null,e}turnLook(t,e=0){this.turnTarget=null,this.lookYaw+=t,this.lookPitch=Math.max(-.65,Math.min(.45,this.lookPitch+e))}resize(){const t=this.host.clientWidth,e=this.host.clientHeight;if(!t||!e)return;const n=t/e;let s,r;if(this.follow)s=9.4,r=s*n,r<9&&(r=9,s=r/n);else{s=this.grid*rs*.83+2,r=s*n;const a=this.grid*rs+1;r<a&&(r=a,s=r/n)}this.viewWidth=r,this.viewHeight=s,this.overheadCamera.left=-r/2,this.overheadCamera.right=r/2,this.overheadCamera.top=s/2,this.overheadCamera.bottom=-s/2,this.overheadCamera.updateProjectionMatrix(),this.eyeCamera.aspect=n,this.eyeCamera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}render(t,e){const n=performance.now(),s=this.visualNow();this.territoryLayer.render(t,this.reduced),this.networked&&this.networkMotion.step(e),this.etek&&(this.etek.position.y=2.2+Math.sin(t*.0025)*.15,this.etek.rotation.y=Math.sin(t*.001)*.25,_s(this.etek.userData.rig,t),this.etek.visible=this.etekUntil>s),this.portal&&(this.portal.userData.ring.rotation.z=t*.001,this.portal.userData.beam.scale.y=.9+Math.sin(t*.003)*.1);for(const u of this.enemies.values()){const d=u.userData.e,x=1-Math.exp(-e*16);u.position.x+=(this.wx(d.x)-u.position.x)*x,u.position.z+=(this.wx(d.z)-u.position.z)*x,Ex(u,d,t,s)}for(const u of this.players.values()){const d=u.userData,x=this.networked?this.networkMotion.visualPosition(d.p.id):null;x&&(d.tx=this.wx(x.x),d.tz=this.wx(x.z));const g=1-Math.exp(-e*(d.me?44:18)),m=u.position.x,w=u.position.z;u.position.x+=(d.tx-u.position.x)*g,u.position.z+=(d.tz-u.position.z)*g;const v=Math.hypot(u.position.x-m,u.position.z-w),y=e>0?v/e:0,C=d.me&&this.networked&&this.networkMotion.input||d.p.dir,S=(({down:0,left:-Math.PI/2,right:Math.PI/2,up:Math.PI}[C]||0)-d.angle+Math.PI*3)%(Math.PI*2)-Math.PI;d.angle+=S*(1-Math.exp(-e*24)),d.rig.rotation.y=d.angle,d.phase+=v*12,d.stride+=(Math.min(1,y/2.5)-d.stride)*(1-Math.exp(-e*18)),d.squash=Math.max(0,d.squash-e);const b=Math.sin(d.squash/.2*Math.PI)*.1;d.rig.scale.set(1+b,1-b,1+b),d.rig.position.y=Math.abs(Math.sin(d.phase))*d.stride*.075+Math.sin(t*.002)*.01*(1-d.stride),d.rig.rotation.x=d.stride*.055,d.rig.rotation.z=Math.sin(d.phase)*d.stride*.04,d.limbs.forEach((U,z)=>U.rotation.x=Math.sin(d.phase+[0,Math.PI,Math.PI,0][z])*.62*d.stride),_s(d.rig,t,d.stride,this.reduced);const M=!!d.mount,_=d.p.jumpingUntil>s?Math.sin(Math.max(0,Math.min(1,(s-d.p.jumpStartAt)/(d.p.jumpingUntil-d.p.jumpStartAt)))*Math.PI)*1.25:0,I=M?Ox(d.mount,d.mountKind,{time:t,phase:d.phase,stride:d.stride,jump:_,dashing:!!d.p.dashDir,reduced:this.reduced}):{hop:0,lean:0};if(d.rig.position.y+=M?.55+_+I.hop:0,d.rig.position.x=M?-Math.sin(d.angle)*.13:0,d.rig.position.z=M?-Math.cos(d.angle)*.13:0,d.tag.position.y=M?2.55+_:1.98,M&&(d.mount.rotation.y=d.angle,d.mount.position.y=_+I.hop,d.rig.rotation.x+=I.lean,d.limbs[1].rotation.x=-1.05,d.limbs[3].rotation.x=-1.05,d.limbs[0].rotation.x=-.5,d.limbs[2].rotation.x=-.5,d.mount.visible=d.p.alive),d.shield.visible=d.p.alive&&(this.story||this.etekUntil-2e3>s)&&d.p.invulnerableUntil>s,d.shield.position.y=M?1.3+_:.74,d.shield.rotation.y=t*8e-4,d.p.invulnerableUntil>s&&!d.shield.visible){const U=Math.sin(t*.04)>-.2;d.rig.visible=U,d.mount&&(d.mount.visible=U)}else d.rig.visible=!0;if(!d.p.alive){d.death=Math.max(0,d.death-e);const U=d.death/.42;d.rig.scale.setScalar(Math.max(.01,U)),d.rig.position.y=(1-U)*.85,d.rig.rotation.z=(1-U)*1.8,u.visible=U>0}}for(const u of this.bombs.values()){const d=u.userData,x=Math.max(0,Math.min(1,1-(d.b.explodeAt-s)/2300)),g=1-x,m=Math.sin(t*.001*(9+x*x*38)),w=Math.max(0,(x-.6)/.4);d.shell.scale.set(1+m*(.025+w*.055),1-m*.04,1+m*(.025+w*.055));const v=d.b.frozenUntil>s;d.shell.material.color.setHex(v?9027032:2241347),d.shell.material.emissive.setHex(v?6346495:16736284),d.shell.material.emissiveIntensity=v?.23:w*(.1+(m+1)*.15),d.fuse.scale.y=Math.max(.05,g),d.fuse.position.set(.02,.65+.13*g,0),d.spark.position.set(.02,.65+.26*g,0),d.spark.scale.setScalar(.7+(m+1)*.25),d.ring.geometry.setDrawRange(0,Math.floor(40*g)*6),d.ring.material.color.setHSL(v?.53:.13*(1-w),.95,.58)}for(const u of this.flames.values()){const d=Math.max(0,(this.phase==="playing"?u.userData.until-s:u.userData.expiresAt-performance.now())/550),x=1-d,g=Math.max(.01,Math.sin(Math.min(1,x)*Math.PI)*.75+.25*d);u.scale.set(g*(1+Math.sin(t*.035)*.06),g*(1.05+Math.sin(t*.03)*.12),g),u.visible=d>0}for(let u=this.effects.length-1;u>=0;u--){const d=this.effects[u],x=d.userData;x.life-=e;const g=Math.max(0,x.life/x.total);d.scale.setScalar(1+(1-g)*2.4),d.material.opacity=g*.65,x.life<=0&&(this.scene.remove(d),this.disposeObject(d),this.effects.splice(u,1))}for(const u of this.powerups.values())Bx(u,t,e,this.reduced);for(let u=this.particles.length-1;u>=0;u--){const d=this.particles[u],x=d.userData;x.life-=e,x.vy-=e*9,d.position.x+=x.vx*e,d.position.y+=x.vy*e,d.position.z+=x.vz*e,d.rotation.x+=e*4,d.rotation.z+=e*3,x.life<0&&(this.scene.remove(d),d.material.dispose(),this.particles.splice(u,1))}for(const u of this.walls.values()){const d=u.userData,x=d.w.dropAt-s;d.warning.visible=d.ring.visible=x>0,d.warning.material.opacity=.35+(Math.sin(t*.018)+1)*.17,d.ring.scale.setScalar(Math.max(.1,Math.min(1,x/900))),d.box.visible=x<260,d.box.position.y=x>0?.54+Math.pow(Math.max(0,x/260),2)*5:.54}for(const u of this.hazards.values()){const d=u.userData,x=s>=d.h.startsAt;d.core.visible=x&&(d.h.kind==="geyser"||d.h.kind==="ink"),d.core.scale.y=.9+Math.sin(t*.016+u.position.x)*.25,d.plate.material.opacity=x?.46:.17+(Math.sin(t*.012)+1)*.12,d.mark.scale.setScalar((d.h.kind==="gate"?1.8:1)*(x?1:.85+Math.sin(t*.008)*.15)),d.h.kind==="gate"&&(d.mark.rotation.z=t*.0015),(d.h.kind==="belt"||d.h.kind==="gust")&&d.flow?(d.flow.rotation.y=d.h.dir>0?0:Math.PI,d.flow.position.x=x?(t*.0018%1-.5)*.45*d.h.dir:0,d.flow.visible=x||Math.sin(t*.008)>0):d.h.kind==="tide"&&(u.position.y=x?Math.sin(t*.005+u.position.x)*.035:0)}for(const u of this.decorations)u.type==="cloud"&&(u.object.position.y=3+u.offset%2+Math.sin(t*3e-4+u.offset)*.3),u.type==="lava"&&u.object.scale.setScalar(.8+Math.sin(t*.003+u.object.position.x)*.15),u.type==="beacon"&&(u.object.material.emissiveIntensity=.3+(Math.sin(t*.002)+1)*.3);for(const u of this.decorations)if(u.type==="fan"&&(u.object.rotation.z=t*.001),u.type==="cloth"&&(u.object.rotation.x=Math.sin(t*.0018+u.offset)*.16),u.type==="gem"&&(u.object.rotation.y=t*.001),u.type==="fireflies"&&(u.object.position.y=Math.sin(t*.001)*.13),u.type==="train"){const d=[...this.hazards.values()].find(x=>x.userData.h.kind==="train"&&x.userData.h.z===u.row)?.userData.h;if(u.object.visible=!!d&&s>=d.startsAt&&s<d.until,u.object.visible){const x=(s-d.startsAt)/(d.until-d.startsAt);u.object.position.set(-this.grid*rs/2-9+x*(this.grid*rs+12),0,this.wx(u.row))}}this.flash=Math.max(0,this.flash-e*.6),this.flashElement.style.opacity=this.flash,this.shake=Math.max(0,this.shake-e*.7);const r=this.follow?this.players.get(this.myId)?.position:null,a=(this.grid-1)*rs/2,o=Math.max(0,a-this.viewWidth/2+.6),c=Math.max(0,a-this.viewHeight/.83/2+1.5),l=Math.max(-o,Math.min(o,r?.x||0)),h=Math.max(-c,Math.min(c,r?.z||0)),p=this.players.get(this.myId),f=!!(this.firstPerson&&this.phase==="playing"&&p?.userData.p.alive);for(const u of this.players.values())u.userData.me&&(u.visible=(u.userData.p.alive||u.userData.death>0)&&!f);if(this.camera=f?this.eyeCamera:this.overheadCamera,this.scene.background=f?this.eyeSky:null,document.body.classList.toggle("first-person",f),f){this.turnTarget!==null&&(this.lookYaw+=Ix(this.lookYaw,this.turnTarget)*(this.reduced?1:1-Math.exp(-e*12)));const u=1.25+(p.userData.mount?.55:0);this.camera.position.set(p.position.x,u,p.position.z),this.camera.lookAt(p.position.x+Math.sin(this.lookYaw)*4,u+Math.sin(this.lookPitch)*4,p.position.z+Math.cos(this.lookYaw)*4)}else this.camera.position.set(l+Math.sin(t*.073)*this.shake,20.5,14+h),this.camera.lookAt(l,0,h);if(this.territoryLayer.tag){const u=this.territoryLayer.tag.position,d=(t-this.territoryLayer.started)/1e3;this.camera=this.overheadCamera,this.camera.position.set(u.x+Math.sin(d*.5)*2,14,u.z+11),this.camera.lookAt(u.x,0,u.z)}this.renderer.render(this.scene,this.camera),this.mobile&&this.quality.sample(e,performance.now()-n)&&(this.renderer.setPixelRatio(this.quality.ratio),this.resize())}}function Nc(i,t,e=null,n=.18){if(!Number.isFinite(i)||!Number.isFinite(t)||Math.hypot(i,t)<n)return null;const s=Math.abs(i),r=Math.abs(t);let a=s>=r;return(e==="left"||e==="right")&&(a=r<s*1.28),(e==="up"||e==="down")&&(a=s>r*1.28),a?i<0?"left":"right":t<0?"up":"down"}const P=i=>document.getElementById(i),jt=(i,t)=>P(i).hidden=!t,Ze=matchMedia("(pointer:coarse)").matches,hh='<svg class="trophy-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 3h12v5c0 4-2 6-5 7v4h5v2H6v-2h5v-4c-3-1-5-3-5-7z"/><path d="M6 5H2v3c0 4 3 5 6 5M18 5h4v3c0 4-3 5-6 5" fill="none" stroke="currentColor" stroke-width="2"/></svg>';P("kickStat").querySelector("i").innerHTML=Un.kick.icon;const qn=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Hx="https://tdg-bomb-arena.jataiapp.com.br",uh=new Eu(Hx);let Jt;try{Jt=new kx(P("viewport"))}catch(i){throw P("msg").textContent="O navegador não conseguiu iniciar o 3D. Ative a aceleração de hardware e recarregue.",i}for(const i of["stageSelect","lobbyStageSelect"])P(i).innerHTML=Object.values(jn).map(t=>`<option value="${t.id}">${t.name}</option>`).join("")+'<option value="tour">Rodízio de fases</option>';let tn="priks",Mn="quick";try{const i=localStorage.getItem("tdg-character");wu(i)&&(tn=i);const t=localStorage.getItem("tdg-mode");Mn=["quick","tournament","story","territory"].includes(t)?t:"quick"}catch{}const Oc=new fx(P("characterCanvas"));function $s(i){return Oc.portraits[Xe(i).id]}function Fc(i){tn=i;const t=Xe(i);Oc.select(i),P("characterName").textContent=t.name,P("characterNumber").textContent=`GRAFFITEIRO / ${t.number}`,P("characterDetail").textContent=t.detail,P("chosenWriter").textContent=t.name,P("chosenPortrait").src=$s(i),P("crewHub").style.setProperty("--character-color","#"+t.color.toString(16).padStart(6,"0"));for(const e of P("characterGrid").children){const n=e.dataset.character===i;e.classList.toggle("selected",n),e.setAttribute("aria-pressed",n)}}P("characterGrid").innerHTML=Sn.map(i=>`<button class="character-card" data-character="${i.id}" aria-label="Escolher ${i.name}" aria-pressed="false"><span class="writer-number">${i.number}</span><span class="selected-mark">✳</span><img src="${$s(i.id)}" alt="" width="100" height="100"><b>${i.name}</b></button>`).join("");P("characterGrid").onclick=i=>{const t=i.target.closest("[data-character]");if(!t||t.disabled)return;const e=t.dataset.character;Fc(e),De.callout(e,"select");try{localStorage.setItem("tdg-character",e)}catch{}be?(ye("character",{characterId:e}),Ut&&En(Ut.snapshot())):(Jt.clear(),fr())};P("chooseWriter").onclick=()=>P("crewPicker").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"instant":"smooth",block:"start"});Fc(tn);function lu(i){Mn=i;for(const[n,s]of[["quickMode","quick"],["cupMode","tournament"],["storyMode","story"],["territoryMode","territory"]])P(n).classList.toggle("selected",i===s),P(n).setAttribute("aria-pressed",i===s);const t=i==="story",e=i==="territory";jt("storyOptions",t),jt("battleOptions",!t),jt("territoryOptions",e),P("battleOptions").querySelector(".stage-settings").hidden=e,P("stageDescription").hidden=e,P("arenaShortcut").disabled=e;for(const n of P("capacitySelect").options){const s=Number(n.value);n.textContent=e?`${s} graffiteiros · praça 25 × 25`:`${s} jogadores · arena ${s===4?13:s===8?17:21} × ${s===4?13:s===8?17:21}`}P("modeDescription").textContent=e?"Guerra de tinta · conquiste mais área e assine a rua.":t?"Campanha cooperativa · 4 capítulos · 1 vilão final.":i==="tournament"?"Copa TDG · o primeiro a 3 vitórias leva o título.":"Partida rápida · cada vitória vale um troféu. Primeiro a 3 é campeão.",P("practiceBtn").innerHTML=t?"Explorar história":"Jogar com bots <span>→</span>",P("createBtn").innerHTML=t?"Criar campanha online <span>↗</span>":"Criar sala online <span>↗</span>";try{localStorage.setItem("tdg-mode",i)}catch{}}P("partnerCharacter").innerHTML=Sn.map(i=>`<option value="${i.id}">${i.name}</option>`).join("");P("partnerCharacter").value="nepo";Ze&&(P("storyPlayers").querySelector('[value="local2"]').disabled=!0);P("storyPlayers").onchange=()=>{jt("partnerChoice",P("storyPlayers").value==="local2"),P("storyLocalHint").textContent=P("storyPlayers").value==="local2"?"J1: WASD + Espaço + E. J2: setas + Enter + Shift direito. Ou use dois controles.":"Online: crie a sala e convide mais 1 jogador."};lu(Mn);for(const[i,t]of[["quickMode","quick"],["cupMode","tournament"],["storyMode","story"],["territoryMode","territory"]])P(i).onclick=()=>{lu(t),Jt.clear(),fr()};for(const[i,t]of[["statBomb","bomb"],["statFire","fire"],["statSpeed","speed"]])P(i).parentElement.querySelector("svg").outerHTML=Un[t].icon;P("itemGuideGrid").innerHTML=Object.values(Un).map(i=>`<article style="--item-color:${i.color}"><span>${i.icon}</span><div><b>${i.title}</b><p>${i.description}</p>${i.limit?`<small>MÁXIMO: ${i.limit}</small>`:""}</div></article>`).join("");P("helpBtn").onclick=()=>{An(),P("guideHint").textContent=Bi==="online"?"Exploda caixas, espere o fogo apagar e encoste no item. A rodada online continua enquanto este guia está aberto.":"Exploda caixas, espere o fogo apagar e encoste no item. No jogo local, o guia pausa a partida.",P("itemGuide").showModal()};P("closeGuide").onclick=()=>P("itemGuide").close();function hu(){const i=Jt.firstPerson?"1ªP":Jt.follow?"2×":"1×";P("zoomBtn").textContent=i,P("zoomBtn").setAttribute("aria-label",`Câmera ${i}. Alternar arena inteira, próxima e primeira pessoa experimental`)}P("zoomBtn").onclick=()=>{An(),Jt.firstPerson?(Jt.setFirstPerson(!1),Jt.follow=!1):Jt.follow?Jt.setFirstPerson(!0):Jt.follow=!0,Jt.resize(),hu(),Jt.firstPerson&&Re("1ª pessoa · a câmera acompanha a direção. Arraste para olhar.")};let sr=null,cc=0,lc=0;P("viewport").addEventListener("pointerdown",i=>{!Jt.firstPerson||be?.phase!=="playing"||oa()||(sr=i.pointerId,cc=i.clientX,lc=i.clientY,P("viewport").setPointerCapture(i.pointerId))});P("viewport").addEventListener("pointermove",i=>{i.pointerId===sr&&(Jt.turnLook(-(i.clientX-cc)*.007,-(i.clientY-lc)*.005),cc=i.clientX,lc=i.clientY,ye("input",{dir:Qe||Nn[[...mi].at(-1)]||null}))});for(const i of["pointerup","pointercancel","lostpointercapture"])P("viewport").addEventListener(i,t=>{t.pointerId===sr&&(sr=null)});function hc(i){const t=Tx(i);if(!t)return;P("pickupIcon").innerHTML=t.icon,P("pickupOwner").textContent=i.id===zt?"VOCÊ PEGOU":"JOGADOR 2 PEGOU",P("pickupTitle").textContent=t.title,P("pickupChange").textContent=t.change,P("pickupDescription").textContent=t.detail,P("pickupCard").style.setProperty("--item-color",t.color),jt("pickupCard",!0),clearTimeout(hc.timer),hc.timer=setTimeout(()=>jt("pickupCard",!1),Ze?2400:3400);const e={bomb:"statBomb",fire:"statFire",speed:"statSpeed",heart:"statLife"}[i.kind];e&&(P(e).classList.remove("stat-flash"),P(e).offsetWidth,P(e).classList.add("stat-flash"))}let qe=null,Ut=null,zt="",be=null,Bi="menu",ro=!1,rr="",Ms="",mi=new Set,Ss=new Set,Qe=null,bs=null,uc=0;const Lt=new Au,De=new xx(Lt),di=new px(P("resultsCanvas")),Es=new mx({audio:Lt,release:An,choose:i=>ye("storySelect",{chapter:i})});let dc="",dh=!1,fh=!1,Ui=null,ph=!0;const pn=new Ax(Lt,De);let fc="",pc="";const Vx=Mx({coarse:Ze,release:An,quality:i=>Jt.quality.setMode(i),audio:()=>P("audioSettingsBtn").onclick(),online:()=>Bi==="online"}),oa=()=>Es.active||P("itemGuide").open||P("audioSettings").open||Vx.open;document.addEventListener("visibilitychange",()=>{Lt.suspendMusic(document.hidden),document.hidden&&De.stop()});P("sound").textContent=Lt.enabled?"♫":"♪";try{P("name").value=localStorage.getItem("bomb64-name")||""}catch{}const mh=new URLSearchParams(location.search).get("room");mh&&(P("roomCode").value=mh);function uu(){const i=P("name").value.trim()||Xe(tn).name;try{localStorage.setItem("bomb64-name",i)}catch{}return i}function ci(...i){Lt.unlock(),Lt.tone(...i)}function Re(i){P("toast").textContent=i,jt("toast",!0),clearTimeout(Re.timer),Re.timer=setTimeout(()=>jt("toast",!1),2400)}function du(i){if(Jt.event(i),i.type==="explosion"){const t=be?.players.find(e=>e.id===zt);Lt.explosion(t?(i.x-t.x)/7:0)}if(i.type==="bomb"&&i.id===zt&&(Lt.bomb(),Ze&&navigator.vibrate?.(10)),i.type==="pickup"&&(i.id===zt||Ut&&i.id==="local-partner")&&(Lt.pickup(),hc(i),Ze&&navigator.vibrate?.([12,30,12])),i.type==="mountHit"&&i.id===zt&&(Re("A lendária resistiu! Mais uma proteção."),ci(410,.18,"triangle")),i.type==="stageWarning"&&(Re(`${i.name} · prepare-se!`),Lt.warning()),i.type==="hurry"&&(Re("MORTE SÚBITA · a arena está fechando!"),ci(240,.2,"square",.035)),i.type==="wallDrop"&&ci(110,.06,"triangle",.015),i.type==="mountLost"&&i.id===zt&&(Re("Sua montaria te protegeu!"),ci(380,.15,"triangle")),i.type==="ability"&&i.id===zt&&(i.kind==="green"?Lt.dash():Lt.jump(),Ze&&navigator.vibrate?.(12)),i.type==="etek"&&(Re("ETEK PRESENTE · a crew está protegida!"),ci(720,.45,"sine")),i.type==="champion"&&Lt.pickup(),i.type==="lifeLost"&&(Re(`${i.id===zt?"Você":Ut&&i.id==="local-partner"?"Jogador 2":"Seu parceiro"} perdeu uma vida. ${i.lives>0?"Voltando em 3s.":"Sem vidas restantes."}`),Lt.hurt()),i.type==="phaseShift"&&i.id===zt&&(Re("PORTAL ANTIGO · você atravessou a arena!"),Lt.jump()),i.type==="heartSaved"&&i.id===zt&&(Re(`Uma vida te protegeu! ${i.lives} ♥ restantes.`),Lt.hurt()),i.type==="respawn"&&i.id===zt&&Re(i.territory?"De volta à praça! Tinta recarregada.":"De volta à rua! Proteção por 3 segundos."),i.type==="portalOpen"&&Re("SAÍDA ABERTA · procure o portal verde!"),i.type==="bossWarning"&&Lt.warning(),i.type==="bossRage"&&Re("ROLO COMPRESSOR FURIOSO · cuidado com os drones!"),i.type==="round"&&(ci(630,.25,"triangle"),De.callout(tn,"start")),i.type==="result"){const t=be?.players.find(e=>e.id===i.winner);i.winner?(Lt.victory(),De.callout(t?.characterId||tn,"win")):(Lt.draw(),De.say(i.territory?"Empate! Duas marcas, mesma área.":"Empate! Ninguém leva troféu nesta rodada.",tn,!0))}i.type==="spray"&&(Lt.spray(!!i.burst),i.id===zt&&Ze&&navigator.vibrate?.(i.burst?25:8)),i.type==="inkHit"&&i.id===zt&&(Lt.hurt(),Re("Banho de tinta! Você volta à praça em 2,3s.")),i.type==="kick"&&Lt.kick(),i.type==="pickup"&&i.id===zt&&De.callout(tn,i.kind==="kick"?"kick":i.mount==="monkey"?"monkey":"pickup")}function ga(){return{stage:Mn==="story"?"island":Mn==="territory"?"factory":P("stageSelect").value,duration:["story","territory"].includes(Mn)?180:Number(P("durationSelect").value),maxPlayers:Mn==="story"?2:Number(P("capacitySelect").value),matchMode:Mn,characterId:tn}}function fr(){const i=new la(ga());document.body.dataset.stage=i.stage,Xx();for(let t=0;t<i.maxPlayers;t++)i.addPlayer("preview-"+t,Sn[t%Sn.length].name,"PC",!1,t===0?tn:Sn[t%Sn.length].id);Jt.sync(i.snapshot(),"")}function gh(i){const t=i.toJSON();for(const e of["paint","territoryObstacles","players","crates","bombs","flames","powerups","walls","hazards","enemies","enemyHazards"])t[e]=Object.values(t[e]||{});return t}function En(i){if(be=i,Es.sync(i,zt),di.update(i),i.matchMode==="story"&&i.phase==="lobby"){const e=`${i.storyChapter}:${i.round}:${i.storyUnlocked||1}`;dc!==e&&(dc=e,Es.open(i,zt))}Jt.networkLatency=qe?.latency||0,Jt.sync(i,zt);const t=performance.now();if((!Ut||t-(En.uiAt||0)>100||Ms!==i.phase)&&(Gx(i),En.uiAt=t),i.phase==="playing"&&pn.active&&typeof pn.key=="number"&&pn.finish(!1),i.phase==="briefing"){const e=`${i.storyChapter}:${i.round}`;fc!==e&&(fc=e,An(),pn.play(i.storyChapter,()=>{ye("briefingDone"),Ut?.players.has("local-partner")&&Ut.finishBriefing("local-partner"),Lt.setMusic("menu")}))}i.phase==="storyvictory"&&pc!==String(i.round)&&(pc=String(i.round),An(),Lt.victory(),pn.play("ending",()=>Lt.setMusic("menu"))),pn.active||Lt.setMusic(i.phase==="playing"?i.matchMode==="story"&&i.storyChapter===4?"boss":i.stage:"menu")}function Gx(i){const t=["lobby","countdown","briefing"].includes(i.phase);document.body.classList.toggle("panel-open",t),document.body.classList.toggle("game-active",!t),document.body.classList.toggle("large-room",i.maxPlayers>4),document.body.classList.toggle("story-room",i.matchMode==="story"),jt("menu",!1),jt("lobby",t),jt("hud",!t),jt("stats",i.phase==="playing"),jt("touch",i.phase==="playing"&&Ze),jt("arena-caption",t),jt("crewHub",t),jt("crewPicker",t),jt("leave",!0),P("connection").innerHTML=`<span></span> ${Bi==="practice"?"TREINO LOCAL":`ONLINE${uc?" · "+uc+" MS":""}`}`;const e=i.players.find(v=>v.id===zt),n=i.matchMode==="story",s=i.matchMode==="territory",r=ea[(i.storyChapter||1)-1];if(document.body.classList.toggle("territory-room",s),document.body.classList.toggle("territory-finale",s&&i.phase==="results"),jt("territoryHud",s&&i.phase==="playing"),jt("stats",!s&&i.phase==="playing"),s&&e){P("inkValue").textContent=`${Math.round(100*e.ink/e.inkMax)}%`,P("inkFill").style.width=`${100*e.ink/e.inkMax}%`,P("territoryHud").style.setProperty("--player-ink","#"+e.color.toString(16).padStart(6,"0")),P("paintValue").textContent=`${(100*e.paintScore/i.paintTotal).toFixed(1)}%`,P("paintStatus").textContent=e.alive?"PINTE A RUA":`VOLTA EM ${Math.max(1,Math.ceil((e.respawnAt-i.now)/1e3))}s`;const v=[e.paintWidth,e.paintRange,e.inkMax,e.paintShield].join(":");P("paintTools").dataset.signature!==v&&(P("paintTools").dataset.signature=v,P("paintTools").innerHTML=[e.paintWidth?`<i title="Rolo equipado">${Un.roller.icon}</i>`:"",`<i title="Alcance: ${e.paintRange} casas">${Un.nozzle.icon}<b>${e.paintRange}</b></i>`,e.paintShield?`<i title="Uma proteção">${Un.paintshield.icon}</i>`:""].join(""))}const a=s?"SPRAY":"BOMBA";P("bombBtn").querySelector("small").textContent!==a&&(P("bombBtn").querySelector("small").textContent=a,P("bombBtn").querySelector("span").innerHTML=Un[s?"nozzle":"bomb"].icon,P("bombBtn").setAttribute("aria-label",s?"Pintar com spray":"Soltar bomba")),P("guideHint").textContent=s?"Guerra de tinta: encontre rolos, bicos, tanques e escudos na praça. Os itens reaparecem em 20 segundos.":"Exploda caixas, espere o fogo apagar e encoste no item.",jt("zoomBtn",i.phase==="playing"),jt("storyMapBtn",n&&i.phase==="lobby"),hu(),jt("storyBrief",n),P("storyBriefTitle").textContent=r.title,P("storyBriefText").textContent=r.text,P("storyBriefHint").textContent=Ut?.players.has("local-partner")?"J1: WASD + Espaço + E · J2: setas + Enter + Shift direito":"3 vidas por graffiteiro. As bombas também atingem a crew.",jt("storyHud",n&&!t),P("storyObjective").textContent=i.portalOpen?"SAÍDA ABERTA · chegue ao portal verde":n&&i.storyChapter===4?"DERROTE O ROLO COMPRESSOR":`CAPÍTULO ${i.storyChapter||1}/4 · INVASORES: ${(i.enemies||[]).length}`,P("storyTeam").textContent=i.players.map(v=>`${v.id===zt?"VOCÊ":v.name}: ${v.lives} ♥${!v.alive&&v.respawnAt>i.now?` · VOLTA EM ${Math.ceil((v.respawnAt-i.now)/1e3)}s`:v.alive?"":" · FORA"}`).join("  /  ");const o=(i.enemies||[]).find(v=>v.kind==="boss");document.body.classList.toggle("boss-active",n&&!!o),jt("bossHud",n&&!!o),o&&(P("bossFill").style.width=`${100*o.hp/o.maxHp}%`,P("bossHP").textContent=`${o.hp}/${o.maxHp}`);const c=s?"<span><kbd>W A S D</kbd> pintar andando</span><span><kbd>ESPAÇO</kbd> spray</span><span><kbd>E</kbd> estouro de tinta</span>":Ut?.players.has("local-partner")?"J1 · WASD / ESPAÇO / E &nbsp;&nbsp; J2 · SETAS / ENTER / SHIFT DIREITO":"<span><kbd>W A S D</kbd> mover</span><span><kbd>ESPAÇO</kbd> bomba</span><span><kbd>SHIFT / E</kbd> montaria</span>";P("controlsHint").innerHTML!==c&&(P("controlsHint").innerHTML=c),document.body.dataset.stage=i.stage;const l=jn[i.stage]||jn.island;P("lobbyStageSelect").value=i.stageChoice,P("lobbyDurationSelect").value=i.duration;const h=i.hostId===zt&&i.phase==="lobby"&&!i.cupActive&&!i.campaignActive&&!n&&!s;P("lobbyStageSelect").disabled=P("lobbyDurationSelect").disabled=P("lobbyModeSelect").disabled=!h,P("lobbyArenaBtn").disabled=!h,P("lobbyArenaBtn").textContent=s?"Praça TDG · 25 × 25 · 3 min":`${jn[i.stage].name} · ${i.duration/60} min`,P("lobby").querySelector(".stage-settings").hidden=s,P("lobby").querySelector(".rules p").textContent=s?"Pinte o chão e repinte a tinta rival. O dono da maior área ao fim de 3 minutos vence. Recarregue na sua tinta. Quem é atingido volta em 2,3 segundos.":"Exploda os blocos, pegue melhorias e ovos de montaria. O último de pé vence.",P("lobbyModeSelect").value=i.matchMode,P("lobbyModeSelect").disabled=i.hostId!==zt||i.phase!=="lobby"||i.cupActive||i.campaignActive,P("lobbyModeSelect").querySelector("[value=story]").disabled=i.players.length>2,P("roomSizeLabel").textContent=n?"CAMPANHA · ATÉ 2 GRAFFITEIROS":`SALA ${i.maxPlayers} · ARENA ${i.grid} × ${i.grid}`,P("cupProgress").textContent=s?"GUERRA DE TINTA · MAIOR ÁREA VENCE":n?"":`${i.matchMode==="tournament"?"COPA TDG #"+i.cupNumber:"DISPUTA RÁPIDA"} · PRIMEIRO A ${i.targetWins} TROFÉUS`,P("characterHint").textContent=i.phase==="countdown"?"A escolha está fechada. Prepare-se!":i.cupActive?"Você pode trocar de graffiteiro entre rodadas. O placar continua.":"Escolha o personagem antes de marcar pronto.";for(const v of P("characterGrid").children)v.disabled=i.phase!=="lobby";e&&e.characterId!==tn&&Fc(e.characterId),P("settingsHint").textContent=s?"Praça exclusiva · 3 minutos · 4, 8 ou 16 graffiteiros · sem eliminação.":n?"A história escolhe as fases. 3 minutos por missão.":i.cupActive?"Campeonato em andamento · regras e participantes fechados.":i.hostId===zt?"Você escolhe a arena e o tempo.":"A arena e o tempo são escolhidos pelo dono da sala.",P("stageName").textContent=s?"PRAÇA TDG":n&&i.storyChapter===4?r.subtitle:l.name,jt("stageBanner",i.phase==="playing");const p=i.eventName&&i.now>=i.eventStartsAt&&i.now<i.eventUntil,f=i.eventName&&i.now<i.eventStartsAt;P("stageBanner").classList.toggle("warning",!!f),P("stageBanner").classList.toggle("hurry",i.suddenDeath);const u=Math.max(0,Math.ceil((i.nextEventAt-i.now)/1e3));P("stageEventLabel").textContent=s?"PINTE · RECARREGUE NA SUA COR":(i.suddenDeath?"MORTE SÚBITA · ":"")+(p?`${l.tag} · ${Math.max(0,Math.ceil((i.eventUntil-i.now)/1e3))}s`:f?`${l.event} EM ${Math.ceil((i.eventStartsAt-i.now)/1e3)}s`:i.suddenDeath?"SAIA DOS ALVOS VERMELHOS":`${l.tag} EM ${u}s`),P("timer").closest(".round-info").classList.toggle("hurry",i.suddenDeath),P("arena-caption").innerHTML=`<span class="live-dot"></span> ${qn(l.name.toUpperCase())} <b>${String(Tu.indexOf(i.stage)+1).padStart(2,"0")}</b><small>${qn(l.tag)}</small>`,e&&ph&&!e.alive&&(Ze&&navigator.vibrate?.(35),ci(190,.18,"triangle")),ph=e?.alive??!0,i.phase!==Ms&&(i.phase==="playing"&&(mi.clear(),Qe=null,zc(),Ui=null),Ms=i.phase);const d=JSON.stringify([i.phase,i.round,i.winner,i.championId,i.matchMode,i.storyChapter,i.maxPlayers,i.players.map(v=>[v.id,v.name,v.characterId,v.device,v.ready,v.alive,v.wins,v.capacity,v.range,v.speed,v.mount,v.mountHits,v.lives,v.respawnAt,v.kick,s?Math.floor(v.paintScore):0])]);d!==rr&&(rr=d,P("countLabel").textContent=`${i.players.length} / ${i.maxPlayers||4}`,P("roster").innerHTML=i.players.map(v=>`<div class="player-row"><img class="avatar" src="${$s(v.characterId)}" alt="${Xe(v.characterId).name}"><div class="player-text">${qn(v.name)}${v.id===zt?" · você":""}<small>${Xe(v.characterId).name} / ${qn(v.device)}${i.matchMode==="tournament"?` · ${v.wins}/${i.targetWins} vitórias`:v.wins?` · ${v.wins} vitórias`:""}</small></div><span class="ready-pill ${v.ready?"yes":""}">${v.ready?"PRONTO":"ESPERANDO"}</span></div>`).join("")+Array.from({length:Math.max(0,Math.min(4,(i.maxPlayers||4)-i.players.length))},()=>'<div class="player-row empty"><span class="avatar"></span>Esperando um amigo…</div>').join(""),P("scoreboard").innerHTML=i.players.map(v=>`<div style="border-left:2px solid #${v.color.toString(16).padStart(6,"0")}" title="${qn(v.name)} · ${Xe(v.characterId).name}" data-player="${qn(v.id)}" class="score-chip ${v.alive?"":"dead"} ${v.id===zt?"me":""}"><img class="avatar" src="${$s(v.characterId)}" alt="${Xe(v.characterId).name}"><span class="player-name">${qn(v.name)}</span><b>${s?(100*v.paintScore/i.paintTotal).toFixed(1)+"%":n?v.lives+"♥":v.wins+hh}</b></div>`).join(""),P("readyBtn").innerHTML=e?.ready?"Cancelar pronto <span>↶</span>":"Estou pronto <span>✓</span>",P("readyBtn").style.background=e?.ready?"#a4bd7c":"",P("statKick").textContent=e?.kick?"✓":"—",P("kickStat").classList.toggle("equipped",!!e?.kick),P("statLife").textContent=e?.alive?e.lives||1:0,P("statBomb").textContent=e?.capacity||1,P("statFire").textContent=e?.range||2,P("statSpeed").textContent=e?.speed?.toFixed(1)||"4.0",P("playerStatus").textContent=e?.alive?"VOCÊ ESTÁ NA ARENA":"ELIMINADO · ASSISTINDO",P("roundLabel").textContent=`${n?"HISTÓRIA · CAPÍTULO "+i.storyChapter+"/4":`${i.matchMode==="tournament"?"COPA · ":""}RODADA ${String(i.round).padStart(2,"0")}`}`),n&&!e?.alive&&(P("playerStatus").textContent=e?.respawnAt>i.now?`VOLTANDO EM ${Math.ceil((e.respawnAt-i.now)/1e3)}s`:"SEM VIDAS · ASSISTINDO"),P("timer").textContent=`${Math.floor(i.remaining/60)}:${String(i.remaining%60).padStart(2,"0")}`,P("lobbyHint").textContent=i.phase==="countdown"?"Tudo pronto. A arena vai abrir!":n?"Todos confirmam pronto para começar a missão.":i.players.length<2?"Mande o convite para um amigo entrar.":"A rodada começa quando todos estiverem prontos.";const x=!!e?.mount&&e.alive&&i.phase==="playing";jt("abilityBtn",x||s&&e?.alive&&i.phase==="playing"),P("abilityBtn").setAttribute("aria-label",s?"Estouro de tinta: 45 de tinta":"Usar habilidade da montaria"),jt("mountBadge",x),document.body.classList.toggle("riding",x),P("mountBadge").textContent=e?.mount==="monkey"?"MACACO TDG · SALTO":e?.mount==="black"?`PRETA LENDÁRIA · ${e.mountHits} PROTEÇÕES`:e?.mount==="pink"?"ROSA · SALTO":"VERDE · DISPARADA",P("mountBadge").dataset.kind=e?.mount||"";const g=e?Math.max(0,e.abilityReadyAt-i.now):0;P("abilityBtn").disabled=g>0||e?.jumpingUntil>i.now||!!e?.dashDir||s&&e?.ink<45,P("abilityBtn").querySelector("small").textContent=g>0?`${(g/1e3).toFixed(1)}s`:s?e?.ink<45?"45 TINTA":"ESTOURO":e?.mount==="black"?"SOMBRIO":["pink","monkey"].includes(e?.mount)?"SALTO":"DISPARADA",jt("etekMessage",i.phase==="playing"&&i.etekUntil>i.now);const m=i.phase==="champion",w=["storyclear","storyfailed","storyvictory"].includes(i.phase);if(jt("announcement",i.phase==="countdown"||i.phase==="results"||m||w),jt("storyActionBtn",w&&i.hostId===zt),jt("championScores",m),jt("rematchBtn",m&&i.hostId===zt),P("announcement").classList.toggle("celebration",di.active),P("announcement").classList.toggle("territory-result",s&&i.phase==="results"),jt("trophyTrack",di.active),di.active){const v=i.players.find(y=>y.id===(m?i.championId:i.winner));P("trophyTrack").innerHTML=v?`<b class="trophy-name">${qn(Xe(v.characterId).name)}</b><div>${Array.from({length:3},(y,C)=>`<span class="${C<v.wins?"earned":""}">${hh}</span>`).join("")}</div><small>${Math.min(v.wins,3)} / 3 TROFÉUS</small>`:"<small>NINGUÉM LEVA TROFÉU NESTA RODADA</small>"}if(m){const v=i.players.find(C=>C.id===i.championId);P("announceKicker").textContent=i.matchMode==="quick"?"PARTIDA RÁPIDA / CAMPEÃO":"COPA TDG / CAMPEONATO ENCERRADO",P("rematchBtn").textContent=i.matchMode==="quick"?"Nova disputa · zerar troféus":"Próximo campeonato",P("announceTitle").textContent=v?`${v.id===zt?"VOCÊ":v.name} É CAMPEÃO!`:"COPA ENCERRADA",P("announceTitle").style.fontSize="38px",P("announceText").textContent=(i.championReason==="forfeit"?"Vitória por saída dos adversários.":`O título veio com ${i.targetWins} troféus.`)+(i.hostId===zt?" Comece outra copa quando quiser.":" Esperando o dono da sala iniciar outra copa.");const y=JSON.stringify(i.players.map(C=>[C.id,C.wins,C.characterId]));P("championScores").dataset.signature!==y&&(P("championScores").dataset.signature=y,P("championScores").innerHTML=[...i.players].sort((C,A)=>A.wins-C.wins||C.slot-A.slot).map(C=>`<div><img src="${$s(C.characterId)}" alt=""><span>${qn(C.name)}<small> · ${Xe(C.characterId).name}</small></span><b>${C.wins} 🏆</b></div>`).join(""))}if(w&&(P("announceKicker").textContent=i.phase==="storyvictory"?"OPERAÇÃO CORES VIVAS / FINAL":r.title,P("announceTitle").textContent=i.phase==="storyvictory"?"A RUA TEM COR!":i.phase==="storyclear"?"MURAL SALVO!":"A CREW VOLTA.",P("announceTitle").style.fontSize="36px",P("announceText").textContent=i.phase==="storyvictory"?"O ROLO COMPRESSOR parou. Os murais voltaram a viver, e a cidade continua com a crew.":i.phase==="storyclear"?`Próxima parada: ${ea[Math.min(3,i.storyChapter)].subtitle}. As melhorias continuam com você.`:i.storyResult==="time"?"O tempo acabou. Reúna a crew e tente esta missão novamente.":"As vidas acabaram. Reúna a crew e tente esta missão novamente.",i.hostId!==zt&&(P("announceText").textContent+=" Esperando o anfitrião."),P("storyActionBtn").dataset.action=i.phase==="storyclear"?"next":i.phase==="storyfailed"?"retry":"restart",P("storyActionBtn").innerHTML=i.phase==="storyclear"?"Próxima fase <span>↗</span>":i.phase==="storyfailed"?"Tentar novamente <span>↗</span>":"Jogar a história de novo <span>↗</span>"),i.phase==="countdown"&&(P("announceKicker").textContent="PREPARE-SE",P("announceTitle").textContent=Math.max(1,Math.ceil((i.endsAt-i.now)/1e3)),P("announceText").textContent=s?"A maior área pintada vence. Deixe sua marca!":n?r.objective:"O último de pé vence."),s&&i.phase==="results"){const v=i.players.find(y=>y.id===i.winner);P("announceKicker").textContent=v?"A RUA TEM A SUA MARCA":"EMPATE NA PRAÇA",P("announceTitle").textContent=v?`${(100*i.paintWinnerScore/i.paintTotal).toFixed(1)}% DA RUA`:"DUAS MARCAS. MESMA ÁREA.",P("announceTitle").style.fontSize="",P("announceText").textContent=`${v?v.name+" dominou a praça.":"Ninguém levou vantagem."} Voltando à sala em ${Math.max(1,Math.ceil((i.endsAt-i.now)/1e3))}s`}else if(i.phase==="results"){const v=i.players.find(y=>y.id===i.winner);P("announceKicker").textContent=v?"RODADA ENCERRADA":"EMPATE",P("announceTitle").textContent=v?v.id===zt?"VOCÊ VENCEU!":`${v.name} venceu!`:"BOOM. EMPATE.",P("announceTitle").style.fontSize=v&&v.name.length>10?"36px":"",P("announceText").textContent=`${v?"Mais um troféu! ":"Troféus mantidos. "}Próxima rodada em ${Math.max(1,Math.ceil((i.endsAt-i.now)/1e3))}s`}else!m&&!w&&(P("announceTitle").style.fontSize="")}async function Bc(i){if(ro)return;const t=P("roomCode").value.trim();if(!i&&!t){P("msg").textContent="Digite o código que seu amigo mandou.";return}ro=!0,P("msg").classList.remove("error"),P("msg").textContent="Conectando à arena…",P("createBtn").disabled=P("joinBtn").disabled=!0;try{const e={name:uu(),device:Ze?"Celular":"PC",...ga()},n=i?await uh.create("bomb_room",e):await uh.joinById(t,e);document.body.dataset.menuScreen="play",Jt.networked=!0,Jt.follow=Ze,Jt.resize(),qe=n,Bi="online",zt=n.sessionId,Jt.clear(),rr="",Ms="",P("codeLabel").textContent=n.roomId,n.onMessage("event",du),n.onMessage("pong",s=>uc=Math.max(1,Math.round(performance.now()-s))),n.onStateChange(s=>{qe===n&&En(gh(s))}),n.onError((s,r)=>Re(r||"A conexão encontrou um problema.")),n.onLeave(()=>{qe===n&&(qe=null,fu(),Re("Você saiu da sala. Crie ou entre novamente."))}),n.state?.players?.size&&En(gh(n.state))}catch(e){P("msg").classList.add("error"),P("msg").textContent=i?"Não consegui conectar ao servidor. Confira se ele está ligado.":"Sala indisponível. Confira o código: a sala pode estar cheia ou em uma rodada.",console.warn("Conexão:",e.message)}finally{ro=!1,P("createBtn").disabled=P("joinBtn").disabled=!1}}function Wx(){if(Jt.networked=!1,Jt.follow=Ze,Jt.resize(),Ut=new la(ga()),zt="local-player",Ut.addPlayer(zt,uu(),Ze?"Celular":"PC",!1,tn),Mn==="story"){if(P("storyPlayers").value==="local2"&&!Ze){const i=Xe(P("partnerCharacter").value);Ut.addPlayer("local-partner",i.name,"PC",!1,i.id)}}else{const i=Sn.filter(t=>t.id!==tn);for(let t=0;t<Ut.maxPlayers-1;t++){const e=i[t%i.length];Ut.addPlayer("bot-"+t,e.name,"BOT",!0,e.id)}}document.body.dataset.menuScreen="play",Bi="practice",Jt.clear(),rr="",Ms="",P("codeLabel").textContent=Mn==="story"?"HISTÓRIA":"TREINO",P("copy").disabled=!0,En(Ut.snapshot())}function ye(i,t){i==="input"&&(t={...t,dir:Jt.inputDirection(t?.dir)}),i==="input"&&Jt.networked&&Jt.networkMotion.setInput(t?.dir||null),qe?qe.send(i,t):Ut&&(i==="briefingDone"&&Ut.finishBriefing(zt),i==="character"&&Ut.selectCharacter(zt,t?.characterId),i==="storySelect"&&(Ut.campaign.select(zt,t?.chapter),En(Ut.snapshot())),i==="storyAction"&&(Ut.campaign.action(zt,t?.action),En(Ut.snapshot())),i==="rematch"&&(Ut.newTournament(zt),En(Ut.snapshot())),i==="ready"&&Ut.setReady(zt,t.ready),i==="input"&&Ut.input(zt,t.dir),i==="bomb"&&Ut.placeBomb(zt),i==="ability"&&Ut.ability(zt),i==="settings"&&(Ut.configure(zt,t),En(Ut.snapshot())))}function zc(){P("stick-knob").style.transform="translate(0,0)"}function An(){ca?.clear();for(const i of document.querySelectorAll("#dpad .pressed"))i.classList.remove("pressed");mi.clear(),Ss.clear(),Ut?.players.has("local-partner")&&Ut.input("local-partner",null),Qe=null,bs=null,zc(),ye("input",{dir:null}),Ui=null}function fu(){Es.close(),di.close(),De.stop(),dc="",document.body.classList.remove("riding"),Jt.setFirstPerson(!1),sr=null,Lt.setMusic("menu"),Jt.networked=!1,pn.finish(!1),fc="",pc="",Ut=null,Bi="menu",zt="",be=null,rr="",Ms="",An(),Jt.clear(),fr(),document.body.classList.add("panel-open"),document.body.classList.remove("story-room","large-room","game-active","territory-room","territory-finale"),Jt.follow=!1,Jt.resize(),jt("menu",!0),jt("crewHub",!0),jt("crewPicker",!0);for(const i of P("characterGrid").children)i.disabled=!1;P("characterHint").textContent="";for(const i of["lobby","hud","stats","touch","announcement","leave","abilityBtn","mountBadge","stageBanner","etekMessage","rematchBtn","championScores","storyBrief","storyHud","bossHud","storyActionBtn","pickupCard","zoomBtn","storyMapBtn","territoryHud"])jt(i,!1);jt("arena-caption",!0),P("copy").disabled=!1,P("connection").innerHTML="<span></span> PC + CELULAR",P("msg").textContent=""}P("createBtn").onclick=()=>{P("copy").disabled=!1,Bc(!0)};P("joinBtn").onclick=()=>{P("copy").disabled=!1,Bc(!1)};P("practiceBtn").onclick=()=>{Lt.unlock(),Wx()};function Xx(){if(Mn==="territory"){P("chosenArena").textContent="Praça TDG · Guerra de tinta";return}const i=P("stageSelect").value;P("chosenArena").textContent=i==="tour"?"Rodízio de fases":jn[i].name,P("stageDescription").textContent=i==="tour"?"Uma fase diferente a cada rodada.":jn[i].description}for(const i of["stageSelect","durationSelect","capacitySelect"])P(i).addEventListener("change",()=>{try{localStorage.setItem("bomb64-stage",P("stageSelect").value),localStorage.setItem("bomb64-duration",P("durationSelect").value),localStorage.setItem("tdg-capacity",P("capacitySelect").value)}catch{}Jt.clear(),fr()});for(const i of["lobbyStageSelect","lobbyDurationSelect","lobbyModeSelect"])P(i).addEventListener("change",()=>ye("settings",{stage:P("lobbyStageSelect").value,duration:Number(P("lobbyDurationSelect").value),matchMode:P("lobbyModeSelect").value}));try{const i=localStorage.getItem("tdg-capacity");["4","8","16"].includes(i)&&(P("capacitySelect").value=i);const t=localStorage.getItem("bomb64-stage");(t==="tour"||jn[t])&&(P("stageSelect").value=t);const e=localStorage.getItem("bomb64-duration");["120","180"].includes(e)&&(P("durationSelect").value=e)}catch{}P("roomCode").addEventListener("keydown",i=>{i.key==="Enter"&&Bc(!1)});P("readyBtn").onclick=()=>{Lt.unlock();const i=be?.players.find(e=>e.id===zt),t=!i?.ready;ye("ready",{ready:t}),Ut?.players.has("local-partner")&&Ut.setReady("local-partner",t),ci(500,.08,"triangle")};P("storyActionBtn").onclick=()=>ye("storyAction",{action:P("storyActionBtn").dataset.action});P("scoreboard").onclick=i=>{const t=i.target.closest("[data-player]"),e=be?.players.find(n=>n.id===t?.dataset.player);e&&Re(`${e.name} · ${Xe(e.characterId).name} · ${e.alive?"NA ARENA":"FORA"} · ${be.matchMode==="story"?e.lives+" vidas":e.wins+" vitórias"}`)};P("rematchBtn").onclick=()=>ye("rematch");P("leave").onclick=async()=>{const i=qe;qe=null,fu(),await i?.leave()};P("copy").onclick=async()=>{if(!qe)return;const i=new URL(location.href);i.search="",i.searchParams.set("room",qe.roomId);try{await navigator.clipboard.writeText(i.href),Re("Convite copiado! Manda para a turma.")}catch{Re(`Código da sala: ${qe.roomId}`)}};P("sound").onclick=()=>{Lt.unlock(),Lt.settings(!Lt.enabled),Lt.enabled||De.stop(),P("sound").textContent=Lt.enabled?"♫":"♪",P("sound").setAttribute("aria-label",Lt.enabled?"Desativar som":"Ativar som")};P("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Re("Use o menu do navegador para ampliar a tela.")}};const Nn={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};addEventListener("keydown",i=>{if(!(pn.active||!P("startScreen").hidden||i.target.matches("input,select")||oa()||!be||be.phase!=="playing")){if(Ut?.players.has("local-partner")&&(i.code.startsWith("Arrow")||i.code==="Enter"||i.code==="ShiftRight")){i.preventDefault(),i.repeat||(Nn[i.code]&&(Ss.delete(i.code),Ss.add(i.code),Ut.input("local-partner",Nn[i.code])),i.code==="Enter"&&Ut.placeBomb("local-partner"),i.code==="ShiftRight"&&Ut.ability("local-partner"));return}Nn[i.code]&&(i.preventDefault(),i.repeat||(mi.delete(i.code),mi.add(i.code),ye("input",{dir:Nn[i.code]}))),(i.code==="ShiftLeft"||i.code==="ShiftRight"||i.code==="KeyE")&&(i.preventDefault(),i.repeat||ye("ability")),i.code==="Space"&&(i.preventDefault(),i.repeat||ye("bomb"))}});addEventListener("keyup",i=>{if(Ut?.players.has("local-partner")&&i.code.startsWith("Arrow")){Ss.delete(i.code),Ut.input("local-partner",Nn[[...Ss].at(-1)]||null);return}mi.delete(i.code),Nn[i.code]&&ye("input",{dir:Qe||Nn[[...mi].at(-1)]||null})});addEventListener("blur",An);document.addEventListener("visibilitychange",()=>{document.hidden&&An()});P("stick").addEventListener("pointerdown",i=>{bs===null&&(bs=i.pointerId,P("stick").setPointerCapture(i.pointerId),pu(i))});function pu(i){if(i.pointerId!==bs)return;i.preventDefault();const t=P("stick").getBoundingClientRect();let e=i.clientX-(t.left+t.width/2),n=i.clientY-(t.top+t.height/2),s=Math.hypot(e,n),r=t.width*.3;s>r&&(e=e/s*r,n=n/s*r),P("stick-knob").style.transform=`translate(${e}px,${n}px)`;const a=Nc(e/r,n/r,Qe);a!==Qe&&(Qe=a,ye("input",{dir:Qe}),Ui=Qe)}P("stick").addEventListener("pointermove",pu);for(const i of["pointerup","pointercancel","lostpointercapture"])P("stick").addEventListener(i,t=>{t.pointerId===bs&&(bs=null,Qe=null,zc(),ye("input",{dir:null}))});P("abilityBtn").addEventListener("pointerdown",i=>{i.preventDefault(),ye("ability")});P("bombBtn").addEventListener("pointerdown",i=>{i.preventDefault(),ye("bomb")});function qx(){const i=Array.from(navigator.getGamepads?.()||[]).find(Boolean);if(!i)return null;let t=null;if(i.buttons[12]?.pressed)t="up";else if(i.buttons[13]?.pressed)t="down";else if(i.buttons[14]?.pressed)t="left";else if(i.buttons[15]?.pressed)t="right";else{const[s,r]=i.axes;t=Nc(s,r,Ui,.22)}const e=!!i.buttons[0]?.pressed;e&&!dh&&ye("bomb"),dh=e;const n=!!i.buttons[1]?.pressed;return n&&!fh&&(ye("input",{dir:t}),ye("ability")),fh=n,t}const ca=new Map;function xh(){Qe=[...ca.values()].at(-1)||null,ye("input",{dir:Qe}),Ui=Qe}for(const i of document.querySelectorAll("#dpad [data-direction]")){i.addEventListener("pointerdown",t=>{t.preventDefault(),i.setPointerCapture(t.pointerId),ca.set(t.pointerId,i.dataset.direction),i.classList.add("pressed"),xh()});for(const t of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(t,e=>{ca.delete(e.pointerId)&&(i.classList.remove("pressed"),xh())})}let ao=.2,oo=1,co=0,lo=0,ho=0,uo=0,vh=performance.now();function $n(i){const t=Math.min((i-vh)/1e3,.1);if(vh=i,Es.active){Es.render(i),requestAnimationFrame($n);return}if(di.active&&di.render(i),pn.active){pn.render(i),requestAnimationFrame($n);return}if(!P("startScreen").hidden){requestAnimationFrame($n);return}if(be?.phase==="playing"&&!oa()){const n=qx(),s=Qe||Nn[[...mi].at(-1)]||n||null;if(co+=t,(s!==Ui||co>=(qe?.hosted?.15:.075))&&(ye("input",{dir:s}),Ui=s,co=0),Ut?.players.has("local-partner")){const r=Array.from(navigator.getGamepads?.()||[]).filter(Boolean)[1];let a=Nn[[...Ss].at(-1)]||null;if(r){a=a||Nc(r.axes[0],r.axes[1],null,.22),Ut.input("local-partner",a);const o=!!r.buttons[0]?.pressed,c=!!r.buttons[1]?.pressed;o&&!$n.p2bomb&&Ut.placeBomb("local-partner"),c&&!$n.p2ability&&Ut.ability("local-partner"),$n.p2bomb=o,$n.p2ability=c}Ut.input("local-partner",a)}}if(Ut&&!oa()){for(ho+=t*1e3;ho>=1e3/60;)Ut.tick(1e3/60),ho-=1e3/60;for(const n of Ut.drainEvents())du(n);uo+=t,(uo>=1/30||Ut.phase!==be?.phase)&&(En(Ut.snapshot()),uo=0)}qe&&!qe.hosted&&(lo+=t,lo>=2&&(qe.send("ping",performance.now()),lo=0)),be?.phase==="playing"&&Lt.fuse(be.bombs,Jt.visualNow(),be.players.find(n=>n.id===zt)),ao+=t,oo+=t;const e=Bi==="menu"||["lobby","countdown","briefing"].includes(be?.phase);e&&document.body.dataset.menuScreen==="writers"&&oo>=(Ze?1/20:1/30)&&(Oc.render(i),oo=0),!e&&!di.active&&(Jt.render(i,Math.min(ao,.2)),ao=0),requestAnimationFrame($n)}function Yx(){jt("startScreen",!1),Lt.unlock(),Lt.setMusic("menu")}P("startGame").onclick=()=>{jt("startScreen",!1),Lt.unlock(),pn.play("opening",()=>Lt.setMusic("menu"))};P("skipOpening").onclick=Yx;P("replayIntro").onclick=()=>{An(),Lt.unlock(),pn.play("opening",()=>Lt.setMusic("menu"))};P("audioSettingsBtn").onclick=()=>{An(),P("musicVolume").value=Math.round(Lt.musicVolume*100),P("effectsVolume").value=Math.round(Lt.volume*100),P("musicValue").textContent=P("musicVolume").value+"%",P("effectsValue").textContent=P("effectsVolume").value+"%",P("voiceEnabled").checked=De.enabled,P("voiceVolume").value=Math.round(De.volume*100),P("voiceValue").textContent=P("voiceVolume").value+"%",P("voiceHint").textContent=De.available()?"Falas sintetizadas em português. Timbres variam conforme o aparelho.":"Voz em português indisponível neste navegador; as legendas continuam.",P("audioSettings").showModal()};P("closeAudioSettings").onclick=()=>P("audioSettings").close();for(const i of["musicVolume","effectsVolume"])P(i).oninput=()=>{P("musicValue").textContent=P("musicVolume").value+"%",P("effectsValue").textContent=P("effectsVolume").value+"%",Lt.unlock(),Lt.settings(Lt.enabled,Number(P("musicVolume").value)/100,Number(P("effectsVolume").value)/100)};P("voiceEnabled").onchange=()=>{De.enabled=P("voiceEnabled").checked,De.save(),De.enabled?De.callout(tn,"select"):De.stop()};P("voiceVolume").oninput=()=>{De.volume=Number(P("voiceVolume").value)/100,P("voiceValue").textContent=P("voiceVolume").value+"%",De.save()};document.addEventListener("pointerdown",()=>{Lt.unlocked||Lt.unlock()},{passive:!0});vx(Lt);bx({settings:()=>be?.phase==="lobby"?{stage:be.stageChoice,duration:be.duration,matchMode:be.matchMode}:ga(),stage:i=>{be?.phase==="lobby"?ye("settings",{stage:i}):(P("stageSelect").value=i,P("stageSelect").dispatchEvent(new Event("change")))},duration:i=>{be?.phase==="lobby"?ye("settings",{duration:i}):(P("durationSelect").value=i,P("durationSelect").dispatchEvent(new Event("change")))},capacity:i=>{P("capacitySelect").value=i,P("capacitySelect").dispatchEvent(new Event("change"))}});fr();requestAnimationFrame($n);

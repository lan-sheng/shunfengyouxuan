"use strict";var jstool={addcookie:function(e,o,t){var n=new Date;n.setDate(n.getDate()+t),document.cookie=e+"="+encodeURIComponent(o)+";expires="+n},getcookie:function(e){var o=decodeURIComponent(document.cookie).split("; "),t=!0,n=!1,i=void 0;try{for(var r,c=o[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var a=r.value.split("=");if(e===a[0])return a[1]}}catch(e){n=!0,i=e}finally{try{!t&&c.return&&c.return()}finally{if(n)throw i}}},delcookie:function(e){this.addcookie(e,"",-1)}};
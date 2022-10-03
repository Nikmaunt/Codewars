
String.prototype.toJadenCase = function (str) {
    str = this.toLowerCase().split(' ');
     for (let i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
     }
     
     return str = str.join(' ');
   };
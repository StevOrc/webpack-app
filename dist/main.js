(() => {
  "use strict";
  const s = new (class {
    constructor(s, e) {
      (this.age = s), (this.username = e);
    }
  })(36, "geks");
  console.log(s);
})();

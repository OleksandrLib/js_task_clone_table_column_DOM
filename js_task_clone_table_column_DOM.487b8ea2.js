"use strict";var table=document.querySelector("table"),rows=table.querySelectorAll("tr");rows.forEach(function(e){var r=Array.from(e.children);if(r.length>=2){var t=r[1].cloneNode(!0);e.insertBefore(t,r[r.length-1])}});
//# sourceMappingURL=js_task_clone_table_column_DOM.487b8ea2.js.map

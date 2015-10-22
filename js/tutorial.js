var openedItems = $('.tutorial .col-sm-2 .navmenu-default li.open');
if(openedItems.length){
  openedItems[0].closable = false;
}

$('.tutorial .col-sm-2 .navmenu-default li').on({
    "shown.bs.dropdown": function() {
      this.closable = false;
    },
    "click":             function() {
      this.closable = true;
    },
    "hide.bs.dropdown":  function() {
      return this.closable;
    }
});

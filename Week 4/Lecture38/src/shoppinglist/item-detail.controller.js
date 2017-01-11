(function () {
	/* body... */
	'use strict';

	angular.module('ShoppingList')
		.controller('ItemDetailController', ItemDetailController);

		// 'item' is injected thorugh state's resolve
		ItemDetailController.$inject= ['item'];
		function ItemDetailController (item) {
			// body... 
			var itemdetail = this;
			itemdetail.name=item.name;
			itemdetail.quantity=item.quantity;
			itemdetail.description= item.description;
		}

})();
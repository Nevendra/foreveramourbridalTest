(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService'])

.controller("CollectionImageGalleryController", function(DesignerListFactory, $location, $anchorScroll, PaginateDesigner, CollectionArray, JudeArray) {

	var self = this;
	self.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   	}
   	self.setValueArrays = true;
   	self.designerList;
   	self.setArray = function(){
		if(self.setValueArrays === true) {
			self.designerList = new DesignerListFactory(CollectionArray);
		} else {
			self.designerList = new DesignerListFactory(JudeArray);
		}
	};
	self.setArray();
   	self.mainCollection = CollectionArray;
   	self.justJude = JudeArray;
	self.imageToBeViewed = false;
	self.designerFullImages;
	self.designerImages;
	self.mainHtml = true;
	self.selectedImage;
	self.clickedThumbNail = false;
	self.current_page = 1;
	self.records_per_page = 6;
	self.numPages;
	self.displayPages;
	self.currentDesigner;
	self.viewGallery = function(designer, page, array) {

		for( var i = 0; i < array.length; i++){
			self.arrayName = array[i];
			if(self.arrayName.name === "Jude Jowilson") {
				self.setValueArrays = false;
				designer = "Jude Jowilson";
				self.designerList = new DesignerListFactory(JudeArray);
			}
		}
		console.log(designer);
		self.designerFullImages = self.designerList.viewDesignerGallery(designer);
		self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, page, array);
		self.paged = page;
		self.currentDesigner = designer;
		self.numPages = Math.ceil(self.designerFullImages.length / self.records_per_page);
		self.imageToBeViewed = true;
		self.mainHtml = false;
		self.scrollTo();

	};
	self.closeDesignerImageGallery = function() {
		self.mainHtml = true;
		self.imageToBeViewed = false;
		self.clickedThumbNail = false
		self.current_page = 1;
		self.designerFullImages;
		self.numPages;
	};
	self.viewLargeImage = function(image) {
		self.selectedImage = image;
		self.imageToBeViewed = false;
		self.clickedThumbNail = true;
		self.scrollTo();
	}
	self.closeDesignerImageGallerySelectedImage = function() {
		self.clickedThumbNail = false;
		self.imageToBeViewed = true;
		self.scrollTo();
	}

	self.prevPage = function(designer, array) {
		self.thisDesigner = designer;
	    if (self.current_page > 1) {
	        self.current_page--;
	        self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, self.current_page, array);
	        self.scrollTo();
	    }
	}

	self.nextPage = function(designer, array) {
		self.thisDesigner = designer;
	    if (self.current_page < self.numPages) {
	        self.current_page++;
	        self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, self.current_page, array);
	        self.scrollTo();
	    }
	}

})



})();
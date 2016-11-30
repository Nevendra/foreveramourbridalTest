(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService'])

.controller("CollectionImageGalleryController", function(DesignerListFactory, $location, $anchorScroll, PaginateDesigner) {

	var self = this;
	self.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   	}
	self.imageToBeViewed = false;
	self.designerList = new DesignerListFactory();
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
	self.viewGallery = function(designer, page) {
		self.designerFullImages = self.designerList.viewDesignerGallery(designer);
		self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, page);
		self.paged = page;
		self.currentDesigner = designer;
		self.numPages = Math.ceil(self.designerFullImages.length / self.records_per_page);
		self.imageToBeViewed = true;
		self.mainHtml = false;
		self.displayPages = PaginateDesigner.PagesToBedisplayed(self.numPages);
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
	}
	self.closeDesignerImageGallerySelectedImage = function() {
		self.clickedThumbNail = false;
		self.imageToBeViewed = true;
		self.scrollTo();
	}

	self.prevPage = function(designer) {
		self.thisDesigner = designer;
	    if (self.current_page > 1) {
	        self.current_page--;
	        self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, self.current_page);
	        self.scrollTo();
	    }
	}

	self.nextPage = function(designer) {
		self.thisDesigner = designer;
	    if (self.current_page < self.numPages) {
	        self.current_page++;
	        self.designerImages = PaginateDesigner.PaginateDesignerFunction(designer, self.current_page);
	        self.scrollTo();
	    }
	}

})



})();
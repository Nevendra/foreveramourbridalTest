(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService'])

.controller("CollectionImageGalleryController", function(DesignerListFactory, $location, $anchorScroll) {

	var self = this;
	self.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   	}
	self.imageToBeViewed = false;
	self.designerList = new DesignerListFactory();
	self.designerImages;
	self.mainHtml = true;
	self.selectedImage;
	self.clickedThumbNail = false
	self.viewGallery = function(designer) {
		self.designerImages = self.designerList.viewDesignerGallery(designer);
		console.log(self.designerImages);
		self.imageToBeViewed = true;
		self.mainHtml = false;

	};
	self.closeDesignerImageGallery = function() {
		self.mainHtml = true;
		self.imageToBeViewed = false;
		self.clickedThumbNail = false
	};
	self.viewLargeImage = function(image) {
		self.selectedImage = image;
		self.imageToBeViewed = false;
		self.clickedThumbNail = true;
	}
	self.closeDesignerImageGallerySelectedImage = function() {
		self.clickedThumbNail = false;
		self.imageToBeViewed = true;
	}
})



})();
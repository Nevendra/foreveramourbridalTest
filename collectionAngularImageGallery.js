(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService', 'ui.router'])

.controller("CollectionImageGalleryController", function(DesignerListFactory) {
	var self = this;
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

.config(routerConfig)

function routerConfig($stateProvider, $urlRouterProvider){

}


})();
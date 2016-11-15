(function() {
  'use strict';

angular.module('DesignerService', [])

.factory('DesignerListFactory', function(){
	function DesignerListFactory(){
		this.designerArray = [
			{
				name: "Eddy K",
				description: "Designed in Milan, the fashion capital of the world, and manufactured with the highest quality fabrics. Sophisticated couture gowns and elegant destination dresses are made with the highest attention to detail that flatters every figure, taste, and occasion.",
				mainImage: "Images/Collection_large/EddyK_1.jpg",
				gallery: [

					{
						img: "Images/Collection_large/EddyK_1.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/EddyK_2.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/EddyK_3-cropped.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/EddyK_4-cropped.png",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/AK160_full.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/AK181_full.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/EK1084_back2.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/EK1084_full-1.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/EK1088_full-e1464107889952.jpg",
						designerName: "",
					},
				]

			},
			{
				name: "Justin Alexander",
				description: "One of America's and Europe's most influential producers of wedding fashions since 1949, blending contemporary style with classic details. Gowns that create a timeless romantic look with lavish lace, memorable details, and stunning silhouettes. If you love Grace Kelly, Audrey Hepburn, or Jackie Kennedy, these designs are perfect for you.",
				mainImage: "Images/Collection_large/JustinAlexander_3.png",
				gallery: [

					{
						img: "Images/Collection_large/JustinAlex4.png",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JA style 8846.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlex3.jpeg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexander_3.png",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/JustinAlexanderKnot14.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/JustinAlexanderKnot15.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot16.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot17.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot18.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot19.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/JustinAlexanderKnot20.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot21.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot22.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot23.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot24.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/JustinAlexanderKnot25.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot26.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot27.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JustinAlexanderKnot28.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JA style 8840.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/JA style 8830.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/6440_bod.JPG",
						designerName: "",
					},
					{
						img: "Images/Collection_large/6441_sk.JPG",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JA_6425.JPG",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JA_8857.JPG",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JA_8872.JPG",
						designerName: "",
					},
					{
						img: "Images/Collection_large/JA_8891.JPG",
						designerName: "",
					},
					{
						img: "Images/Collection_large/8880.JPG",
						designerName: "",
					},
				]


			},
			{
				name: "Venus",
				description: "Timeless and romantic details come together to create a vast array of styles for every bride's individual beauty and unique personal charm. These gowns are in demand all around the world.",
				mainImage: "Images/Collection_large/Venus_1.jpg",
				gallery: [
					{
						img: "Images/Collection_large/Venus_5-brighter-smaller-cropped.jpg",
						designerName: "",

					},
					{
						img: "Images/Collection_large/Venus_1.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/Venus_2.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/Venus_3.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/Venus_4.jpg",
						designerName: "",
					},					
				]


			},
			{
				name: "Jude Jowilson",
				description: "Sophisticated, classic style, with a modern approach and exquisite attention to detail. Couture gowns hand-crafted in the USA, using the finest fabrics, delicate embroideries, intricate draping and dramatic silhouettes.",
				mainImage: "Images/Collection_large/HUPX9531.jpg",
				gallery: [
					{
						img: "Images/Collection_large/IMG_26581judej.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/IMG_41331judej.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/IMG_0267judej.JPG",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/ELIZABETH_edited.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/NewJudeGowns/ELIZABETHback_edited.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/NewJudeGowns/FLORENCE_edited.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/FLORENCEback_edited.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/FLORENCEchantillylacedetail_edited.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/GRACE_edited.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/GRACEback_edited.jpg",
						designerName: "",
					},
										{
						img: "Images/Collection_large/NewJudeGowns/GRETAback_edited.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/ZELDABACK.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/BETTE.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/BETTEBACK.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/NewJudeGowns/judes photo -215.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/NewJudeGowns/judes photo -229.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/judes photo -252.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/SOPHIA.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/NewJudeGowns/ZELDA.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/HUPX9455.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/HUPX9531.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/HUPX9730.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/look4back.jpg",
						designerName: "",
					},
				]


			},
			{
				name: "Rosa Clará",
				description: "Starting out in Barcelona and opening one of the world's most prestigious bridalwear shows - Barecelona Bridal Week, this brand soon spread throughout Spain and the rest of the world. Today it still offers innovative designs created from the highest quality fabrics.",
				mainImage: "Images/Collection_large/RosaClaraKnot39.jpg",
				gallery: [
					{
						img: "Images/Collection_large/RosaClaraKnot29.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot30.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot31.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot32.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot33.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot34.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot35.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot36.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot37.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot38.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot39.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot40.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot41.jpg",
						designerName: "Rosa Clará",
					},
					{
						img: "Images/Collection_large/RosaClaraKnot42.jpg",
						designerName: "Rosa Clará",
					},
				]


			},
			{
				name: "Nicole Spose",
				description: "Nicole Spose has collections that speak of a fresh and young fashion, that dictate trends, while maintaining quality and tailoring. Exclusively at our salon in New York City",
				mainImage: "Images/Collection_large/nicole-spose-NIAB17092.jpg",
				gallery: [

					{
						img: "Images/Collection_large/nicole-spose-NIAB17052.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/nicole-spose-NIAB17064.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/nicole-spose-NIAB17092.jpg",
						designerName: "",
					},
					{
						img: "Images/Collection_large/nicole-spose-NIAB17080-Nicole-moda-sposa-2017-128.jpg",
						designerName: "",
					},					
					{
						img: "Images/Collection_large/nicole-spose-NIAB17134-Nicole-moda-sposa-2017-264.jpg",
						designerName: "",
					},					
				]
			},
			{
				name: "More Selection",
				description: " View more selection and designer dresses at our salon in New York City",
				mainImage: "Images/Collection_large/AlfredAngeloCinderellaPlatinum.jpg",
				gallery: [

					{
						img: "Images/Collection_large/glry-img2.jpg",
						designerName: "La Sposa Felicidad",
					},
					{
						img: "Images/Collection_large/San Patrick Atila.jpg",
						designerName: "San Patrick Atila",
					},
					{
						img: "Images/Collection_large/mikaella 1656_2.jpg",
						designerName: "Mikaella",
					},
					{
						img: "Images/Collection_large/White One Jaleb.jpg",
						designerName: "Jasmine",
					},					
					{
						img: "Images/Collection_large/Eden Bridal 5105.jpg",
						designerName: "Eden Bridal",
					},					
					{
						img: "Images/Collection_large/casablanca bridal 2030.jpg",
						designerName: "Casablanca Bridal",
					},
					{
						img: "Images/Collection_large/AC1.jpg",
						designerName: "Atlas Casablanca",
					},
					{
						img: "Images/Collection_large/Alfred Angelo 854.jpg",
						designerName: "Alfred Angelo",
					},
					{
						img: "Images/Collection_large/AlfredAngeloCinderellaPlatinum.jpg",
						designerName: "Alfred Angelo",
					},
					{
						img: "Images/Collection_large/AlfredAngelo2119.jpg",
						designerName: "Alfred Angelo",
					},
										{
						img: "Images/Collection_large/Mon Cheri 111204.jpg",
						designerName: "Mon Cheri",
					},
					{
						img: "Images/Collection_large/Mon Cheri 19226W.jpg",
						designerName: "Mon Cheri",
					},
					{
						img: "Images/Collection_large/Marisa 923.jpg",
						designerName: "Marisa",
					},
					{
						img: "Images/Collection_large/glry-img1.jpg",
						designerName: "La Sposa Leira",
					},
					{
						img: "Images/Collection_large/2013-wedding-dress-pronovias-bridal-gowns-fashion-collection-diango__full.jpg",
						designerName: "Pronovias",
					},
					{
						img: "Images/Collection_large/Odeta-1.jpg",
						designerName: "Pronovias",
					},
					{
						img: "Images/Collection_large/download.jpg",
						designerName: "Rhapsody",
					},
										{
						img: "Images/Collection_large/R6913a.jpg",
						designerName: "Rhapsody",
					},
					{
						img: "Images/Collection_large/WtooByWattersVanessa15410.jpg",
						designerName: "Wtoo by Watters Vanessa",
					},
					{
						img: "Images/Collection_large/WattersBridalTyler6078B.jpg",
						designerName: "Watters Bridal Tyler",
					},
					{
						img: "Images/Collection_large/4214f-PALOMA.jpg",
						designerName: "Paloma Blanca",
					},
					{
						img: "Images/Collection_large/PalomaBlanca4356-1.png",
						designerName: "Paloma Blanca",
					},
					{
						img: "Images/Collection_large/PalomaBlanca4413-1.png",
						designerName: "Paloma Blanca",
					},
					{
						img: "Images/Collection_large/AC2.jpg",
						designerName: "Lace Casa Blanca",
					},
				]
			}
		]/// ends designer array
	};/// ends designerlistFactory function()

	DesignerListFactory.prototype.viewDesignerGallery = function(designer) {
		for(var i = 0; i < this.designerArray.length; i++ ){
			this.name = this.designerArray[i];
			if(this.name.name === designer){
				this.designGalleryArray = [];
				this.nameGallery = this.name.gallery;
				this.designGalleryArray = this.nameGallery;
			}
		}
		return this.designGalleryArray;
	};

	return DesignerListFactory;
})//// ends designerlistfactory

.service('PaginateDesigner', function(DesignerListFactory){
	var self = this;
	self.PaginateDesignerFunction = function(designer, page){
		self.designerPaginateArray = [];
		self.designerList = new DesignerListFactory();
		self.designerImages = self.designerList.viewDesignerGallery(designer, page);
		self.records_per_page = 6;
		for (var i = (page-1) * self.records_per_page; i < (page * self.records_per_page) && i < self.designerImages.length; i++) {
			self.designerPaginateArray.push(self.designerImages[i]);
    	}
  		return self.designerPaginateArray;
	}
	self.PagesToBedisplayed = function(pages) {
		self.pagesArray = [];
		for(var i = 1; i <= pages; i++) {
			self.numPages =
				{
					pageNumber: i,
				};
			self.pagesArray.push(self.numPages);
		}
		return self.pagesArray;
	}


})

})();


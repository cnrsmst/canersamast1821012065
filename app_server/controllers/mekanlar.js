var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
 res.render('mekanlar-liste',{
 	'baslik':'Anasayfa',
 	'sayfaBaslik': {
 		'siteAd':'Mekan32',
 		'aciklama':'Isparta Civarındaki Mekanları Keşfedin!'
 	},
 	'mekanlar':[
 	{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':3,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'mesafe':'10 km'
 	},
 	 {
 	 	'ad':'Saids Coffe',
 	 	'adres':'Otogar İçi',
 	 	'puan':4,
 	 	'imkanlar':['Fast Food','Tatlı','Meşrubatlar'],
 	 	'mesafe':'4 km'
 	 },
 	 {
 	 	'ad':'Pilav32',
 	 	'adres':'Kutlubey, Cengiz Topel Cd.',
 	 	'puan':5,
 	 	'imkanlar':['Pilav','Ayran'],
 	 	'mesafe':'8 km'
 	 },
 	 {
 	 	'ad':'Türkoloji Coffe',
 	 	'adres':'İyaş Park AVM - Vatan Bilgisayar Karşısı',
 	 	'puan':1,
 	 	'imkanlar':['Sıcak İçecekler','Masa Oyunları','Tost'],
 	 	'mesafe':'3 km'
 	 },
 	 {
 	 	'ad':'Leman Kültür',
 	 	'adres':'Işıklar Caddesi',
 	 	'puan':5,
 	 	'imkanlar':['Alkol','Canlı Müzik','Eğlence'],
 	 	'mesafe':'2.7 km'
 	 }
 	]
 });
}

const mekanBilgisi=function(req,res,next){
 res.render('mekan-detay',{
 	'baslik':'Mekan Bilgisi',
 	'sayfaBaslik':'Starbucks',
 	'mekanBilgisi':{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':3,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'koordinatlar':{
 			'enlem':'37.781835',
 			'boylam':'30.566034'
 		},
 		'saatler':[
 		  {
 			'gunler':'Pazartesi - Cuma ',
 			'acilis':' 07:00 ',
 			'kapanis':' 23:00 ',
 			'kapali':false
 		  },
 		  {
 			'gunler':'Cumartesi ',
 			'acilis':' 09:00 ',
 			'kapanis':' 22:00 ',
 			'kapali':false
 			
 		  },
 		  {
			'gunler':'Pazar ',
 			'kapali':true
 		
 		  }
 		],
 		'yorumlar':[
 		   {
 		   	 'yorumYapan':'Caner Samast',
 		   	 'puan':3,
 		   	 'tarih': '02.12.2020',
 		   	 'yorumMetni':'Kahveler güzel ama personeller çok kaba '
 		   },
 		   {
 		 	 'yorumYapan':'Nuri Sesigüzel ',
 		   	 'puan':3,
 		   	 'tarih': '27.11.2020',
 		   	 'yorumMetni':'Ice white chocolate denemenizi tavsiye ederim.'
 		   }
 		]
 	   }
 });
}

const yorumEkle=function(req,res,next){
 res.render('yorum-ekle',{title:'Yorum Ekle'});
}
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}
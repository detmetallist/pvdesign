$(document).ready(function(){
	$('#scrollbar1').tinyscrollbar();
	var bk_width = (cont_height/100*139);
	$(".block1 .block_container").css("width",bk_width);
	if($(window).width()>='1030'){
		var cont_height = $(".main_block").height()-200;
		$(".block_container").height(cont_height);
	}
	else{
		var cont_height = $(".block1").height();
		$(".main_phone").html("Позвоните мне");
		$(".block1 .block_container").css("width",$(window).width());
	}
	$(".block1_item1").css("width",cont_height/100*46).css("height",cont_height/100*46).css("top",cont_height/100*2.2+200);
	$(".block1_item2").css("width",cont_height/100*44).css("height",cont_height/100*44).css("left",cont_height/100*48 ).css("top",cont_height/100*7+200);
	$(".block1_item3").css("width",cont_height/100*47).css("height",cont_height/100*47).css("left",cont_height/100*92).css("top",cont_height/100+200);
	$(".block1_item4").css("width",cont_height/100*48).css("height",cont_height/100*48).css("left",cont_height/100*24).css("top",cont_height/100*48+200);
	$(".block1_item5").css("width",cont_height/100*53).css("height",cont_height/100*53).css("left",cont_height/100*75).css("top",cont_height/100*46+200);
	$(".block1_item1 .block_item_p").css("margin-top",cont_height/100*32);
	$(".block1_item2 .block_item_p").css("margin-top",cont_height/100*27);
	$(".block1_item3 .block_item_p").css("margin-top",cont_height/100*33);
	$(".block1_item4 .block_item_p").css("margin-top",cont_height/100*33);
	$(".block1_item5 .block_item_p").css("margin-top",cont_height/100*35);
	$(".block1 .block_container").css("width",cont_height*1.4);
	var nebo_margin = 0;
	var gorod_margin = 0;
	var gorod2_margin = 0;
	var sun_margin = 50;
	var nebo_width = $(".nebo").width();
	var wind_width = $(window).width();
	var main_top = 0;
	var main_left = 0;
	var mash_url='';
	var menu_item=1;
	var dest = 0;
//	var block3_width = $(".block3_cont").width();
//	var block3left_width = $(".block3_left").width();
//	var block3left_height = $(".block3_cont").height()-40;
//	$(".block3_left").css("height",block3left_height);
//	$(".block3_right").css("width",block3_width-block3left_width-20);
	$('.block2_item').eq(4).css("z-index",'200');
	$('.block2_item').click(function(){
		var click_index = $( ".block2_item" ).index( this );
		$('.block2_item').css("z-index","100");
		$('.block2_item').eq(click_index).css("z-index","250");
		$('.block2_item_cont').css("z-index","150");
		$('.block2_item_cont').eq(click_index).css("z-index","200");
	});
	$(".block1_item").mouseover(function(){
		$(this).children(".block1_hidden").stop().fadeIn(200);
		$(this).children(".block_bg").stop().animate({"width":"35%","height":"35%"},200);
		$(this).children(".block_item_p").fadeOut(200);
	});
	$(".block1_item").mouseleave(function(){
		$(this).children(".block1_hidden").stop().fadeOut(200);
		$(this).children(".block_bg").stop().animate({"width":"100%","height":"100%"},200);
		$(this).children(".block_item_p").fadeIn(200);
	});
	$(".main_menu a").eq(0).mouseover(function(){
		$(".menu_uk").stop().animate({"left":"-20px"},200);
	});	
	$(".main_menu a").eq(1).mouseover(function(){
		$(".menu_uk").stop().animate({"left":"116px"},200);
	});
	$(".main_menu a").eq(2).mouseover(function(){
		$(".menu_uk").stop().animate({"left":"274px"},200);
	});	
	$(".main_menu a").eq(3).mouseover(function(){
		$(".menu_uk").stop().animate({"left":"403px"},200);
	});	
	$(".main_menu a").eq(4).mouseover(function(){
		$(".menu_uk").stop().animate({"left":"548px"},200);
	});			
	$(".main_menu").mouseleave(function(){
		menu_rs();
	});
	function menu_rs(){
		if(menu_item==1){$(".menu_uk").stop().animate({"left":"-20px"},200)}
		else if(menu_item==2){$(".menu_uk").stop().animate({"left":"116px"},200)}
		else if(menu_item==3){$(".menu_uk").stop().animate({"left":"274px"},200)}
		else if(menu_item==4){$(".menu_uk").stop().animate({"left":"403px"},200)}
		else if(menu_item==5){$(".menu_uk").stop().animate({"left":"548px"},200)}
	};
	$(window).on('wheel', function(e){
		//if($(".block3_left").is(':hover')){
			
		//}
		//else{
		if($(window).width()>='1030'){
			if(e.originalEvent.deltaY < 0) {
				gorod_dvizh(1,0,10);
	        }
	        else{
	        	if(main_left>-400){
					gorod_dvizh(1,1,10);
				}
	        	
	        }
	        if(main_left>-150){
	        	menu_item = 1;
	        	menu_rs();
	        }
	        if(main_left>-250&&main_left<-150){
	        	menu_item = 2;
	        	menu_rs();
	        }
	        if(main_left>-350&&main_left<-250){
	        	menu_item = 3;
	        	menu_rs();
	        }
	        if(main_left>-450&&main_left<-350){
	        	menu_item = 4;
	        	menu_rs();
	        }

		}

		//}
	});
	function gorod_dvizh(ed,napr,zad){
		if(napr==0){
			if($('.main').offset().top<-50){
	            	nebo_margin += ed*50;
	            	gorod_margin += ed*50;
	            	gorod2_margin += ed*40;
	            	sun_margin -=ed*7;
	            	main_left +=ed*5.9;
	            	main_top +=ed*5.9;

	        	}
	        else{
	        	nebo_margin = 0;
	        	gorod_margin = 0;
	        	gorod2_margin = 0;
	        	sun_margin = 50;
	        	main_left = 0;
	        	main_top = 0;
	        }
		}
		else if(napr==1){
			if($('.main').offset().top>-$(".main_block").height()*5+50){
	        		nebo_margin -= ed*50;
	        		gorod_margin -= ed*50;
	        		gorod2_margin -= ed*40;
	        		sun_margin +=ed*7;
	        		main_left -=ed*5.9;
	        		main_top -=ed*5.9;
	        	}
	        else{
	        	var kray = $(".main_block").height()*5;
	        	nebo_margin = -kray*1.25;
	        	gorod_margin = -kray*1.25;
	        	gorod2_margin = -kray;
	        	sun_margin = -kray/5.714;
	        	main_left = -500;
	        	main_top = -500;
	        }
		}
		dvizh(10);
	}
	function menu_dvizh(ed){
		if($(window).width()>='1030'){
			nebo_margin = ed*50;
		    gorod_margin = ed*50;
		    gorod2_margin = ed*40;
		    sun_margin = -ed*7;
		    main_left =ed*5.9;
		    main_top =ed*5.9;
		    dvizh(1500);
		}
	}
	function dvizh(zad){
		$(".nebo").animate({'left':nebo_margin},zad);
		$(".gorod").animate({'left':gorod_margin},zad);
		$(".gorod3").animate({'left':gorod_margin},zad);
		$(".gorod2").animate({'left':gorod2_margin},zad);
		$(".sun").animate({'top':sun_margin},zad);
		$(".main").animate({'left':main_left+'vw', 'top':main_top+'vh'},zad);
		$(".pricel").animate({'margin-left':gorod_margin-32},zad);
	}
	$(".main_menu li a").eq(0).click(function(){
		if($(window).width()<'1030'){
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top+200;
			$("html, body").animate({scrollTop: destination},1500);
		}
		menu_item = 1;
		menu_dvizh(-16.95);
		return false;
	});
	$(".main_menu li a").eq(1).click(function(){
		if($(window).width()<'1030'){
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top;
			$("html, body").animate({scrollTop: destination},1500);
		}
		menu_item = 2;
		menu_dvizh(-33.9);
		return false;
	});
	$(".main_menu li a").eq(2).click(function(){
		if($(window).width()<'1030'){
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top+100;
			$("html, body").animate({scrollTop: destination},1500);
		}
		menu_item = 3;
		menu_dvizh(-50.85);
		return false;
	});
	$(".main_menu li a").eq(3).click(function(){if($(window).width()<'1030'){
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top+100;
			$("html, body").animate({scrollTop: destination},1500);
		}var elementClick = $(this).attr("href");
		menu_item = 4;
		menu_dvizh(-67.8);
		return false;
	});
	$(".main_menu li a").eq(4).click(function(){
		if($(window).width()<'1030'){
			var elementClick = $(this).attr("href");
			var destination = $(elementClick).offset().top+200;
			$("html, body").animate({scrollTop: destination},1500);
		}
		menu_item = 5;
		menu_dvizh(-84.75);
		return false;
	});
	$(".logo_top").click(function(){
		menu_item = 1;
		menu_dvizh(0);
		menu_rs();
	});
	function getRandomInt(min, max)
	{
		  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function mash_gener(min,max){
		var mash_model = getRandomInt(min,max);
		if(mash_model==1){mash_url = 'images/cars/8.svg'}
		if(mash_model==2){mash_url = 'images/cars/9.svg'}
		if(mash_model==3){mash_url = 'images/cars/10.svg'}
		if(mash_model==4){mash_url = 'images/cars/11.svg'}
		if(mash_model==5){mash_url = 'images/cars/13.svg'}
		if(mash_model==6){mash_url = 'images/cars/14.svg'}
		if(mash_model==7){mash_url = 'images/cars/15.svg'}
		if(mash_model==8){mash_url = 'images/cars/17.svg'}
		if(mash_model==9){mash_url = 'images/cars/8-obr.svg'}
		if(mash_model==10){mash_url = 'images/cars/9-obr.svg'}
		if(mash_model==11){mash_url = 'images/cars/10-obr.svg'}
		if(mash_model==12){mash_url = 'images/cars/11-obr.svg'}
		if(mash_model==13){mash_url = 'images/cars/13-obr.svg'}
		if(mash_model==14){mash_url = 'images/cars/14-obr.svg'}
		if(mash_model==15){mash_url = 'images/cars/15-obr.svg'}
		if(mash_model==16){mash_url = 'images/cars/17-obr.svg'}

		if(mash_model==17){mash_url = 'images/cars/2.svg'}
		if(mash_model==18){mash_url = 'images/cars/3.svg'}
		if(mash_model==19){mash_url = 'images/cars/4.svg'}
		if(mash_model==20){mash_url = 'images/cars/5.svg'}
		if(mash_model==21){mash_url = 'images/cars/6.svg'}
		if(mash_model==22){mash_url = 'images/cars/7.svg'}
		if(mash_model==23){mash_url = 'images/cars/12.svg'}

		if(mash_model==24){mash_url = 'images/cars/2-obr.svg'}
		if(mash_model==25){mash_url = 'images/cars/3-obr.svg'}
		if(mash_model==26){mash_url = 'images/cars/4-obr.svg'}
		if(mash_model==27){mash_url = 'images/cars/5-obr.svg'}
		if(mash_model==28){mash_url = 'images/cars/6-obr.svg'}
		if(mash_model==29){mash_url = 'images/cars/7-obr.svg'}
		if(mash_model==30){mash_url = 'images/cars/12-obr.svg'}
	}
	function mash_ezd(){
		var mash_delay1 = getRandomInt(0,2500);
		var mash_delay2 = getRandomInt(2500,5000);
		var mash_delay3 = getRandomInt(5000,7500);
		var mash_delay4 = getRandomInt(7500,10000);
		var mash_delay5 = getRandomInt(10000,12500);
		var mash_delay6 = getRandomInt(12500,15000);
		mash_gener(1,8);
		$(".mash1").html('<img src="'+mash_url+'">');
		mash_gener(1,8);
		$(".mash2").html('<img src="'+mash_url+'">');
		mash_gener(1,8);
		$(".mash3").html('<img src="'+mash_url+'">');
		mash_gener(1,8);
		$(".mash4").html('<img src="'+mash_url+'">');
		mash_gener(1,8);
		$(".mash5").html('<img src="'+mash_url+'">');
		mash_gener(1,8);
		$(".mash6").html('<img src="'+mash_url+'">');
		mash_gener(9,16);
		$(".mash7").html('<img src="'+mash_url+'">');
		mash_gener(9,16);
		$(".mash8").html('<img src="'+mash_url+'">');
		mash_gener(9,16);
		$(".mash9").html('<img src="'+mash_url+'">');
		mash_gener(9,16);
		$(".mash10").html('<img src="'+mash_url+'">');
		mash_gener(9,16);
		$(".mash11").html('<img src="'+mash_url+'">');
		mash_gener(9,16);
		$(".mash12").html('<img src="'+mash_url+'">');
		$(".mash1").delay(mash_delay1).animate({'left':'1000vh'},15000).animate({'left':'-130vh'},0);
		$(".mash2").delay(mash_delay2).animate({'left':'1000vh'},15000).animate({'left':'-130vh'},0);
		$(".mash3").delay(mash_delay3).animate({'left':'1000vh'},15000).animate({'left':'-130vh'},0);
		$(".mash4").delay(mash_delay4).animate({'left':'1000vh'},15000).animate({'left':'-130vh'},0);
		$(".mash5").delay(mash_delay5).animate({'left':'1000vh'},15000).animate({'left':'-130vh'},0);
		$(".mash6").delay(mash_delay6).animate({'left':'1000vh'},15000).animate({'left':'-130vh'},0);
		$(".mash7").delay(mash_delay1).animate({'left':'-130vh'},15000).animate({'left':'1000vh'},0);
		$(".mash8").delay(mash_delay2).animate({'left':'-130vh'},15000).animate({'left':'1000vh'},0);
		$(".mash9").delay(mash_delay3).animate({'left':'-130vh'},15000).animate({'left':'1000vh'},0);
		$(".mash10").delay(mash_delay4).animate({'left':'-130vh'},15000).animate({'left':'1000vh'},0);
		$(".mash11").delay(mash_delay5).animate({'left':'-130vh'},15000).animate({'left':'1000vh'},0);
		$(".mash12").delay(mash_delay6).animate({'left':'-130vh'},15000).animate({'left':'1000vh'},0);
		setTimeout(mash_ezd, 15000);
	};
	function mash_ezd2(){
		var mash_delay1 = getRandomInt(5000,10000);
		$(".mash13").delay(mash_delay1).animate({'left':'200vh'},7000).animate({'left':'-200vh'},0);
		setTimeout(mash_ezd2, 3000);
	};
	function mash_ezd3(){
		var mash_delay1 = getRandomInt(0,3000);
		var mash_delay2 = getRandomInt(4000,7000);
		var mash_delay3 = getRandomInt(0,3000);
		var mash_delay4 = getRandomInt(4000,7000);
		$(".mash14").delay(mash_delay1).animate({'left':'240vh'},10000).animate({'left':'-100vh'},0);
		$(".mash15").delay(mash_delay2).animate({'left':'240vh'},10000).animate({'left':'-100vh'},0);
		$(".mash16").delay(mash_delay3).animate({'left':'-100vh'},10000).animate({'left':'240vh'},0);
		$(".mash17").delay(mash_delay4).animate({'left':'-100vh'},10000).animate({'left':'240vh'},0);
		setTimeout(mash_ezd3, 3000);
	};
	function mash_ezd4(){
		var mash_delay1 = getRandomInt(0,3000);
		var mash_delay2 = getRandomInt(0,3000);
		var mash_delay3 = getRandomInt(4000,7000);
		var mash_delay4 = getRandomInt(0,3000);
		var mash_delay5 = getRandomInt(4000,7000);
		$(".mash18").delay(mash_delay1).animate({'left':'280vh'},10000).animate({'left':'-170vh'},0);
		$(".mash20").delay(mash_delay2).animate({'left':'280vh'},10000).animate({'left':'-110vh'},0);
		$(".mash21").delay(mash_delay3).animate({'left':'280vh'},10000).animate({'left':'-110vh'},0);
		$(".mash22").delay(mash_delay4).animate({'left':'-110vh'},10000).animate({'left':'280vh'},0);
		$(".mash23").delay(mash_delay5).animate({'left':'-110vh'},10000).animate({'left':'280vh'},0);
		setTimeout(mash_ezd4, 3000);
	};
	function mash_ezd5(){
		var mash_delay1 = getRandomInt(5000,10000);
		$(".mash19").delay(mash_delay1).animate({'left':'-200vh'},7000).animate({'left':'270vh'},0);
		setTimeout(mash_ezd5, 3000);
	};
	function mash_ezd6(){
		var mash_delay1 = getRandomInt(0,5000);
		var mash_delay2 = getRandomInt(0,5000);
		$(".mash24").delay(mash_delay1).animate({'left':'-145vh'},10000).animate({'left':'215vh'},0);
		$(".mash25").delay(mash_delay2).animate({'left':'215vh'},10000).animate({'left':'-145vh'},0);
		setTimeout(mash_ezd6, 3000);
	};
	function mash_ezd7(){
		var mash_delay1 = getRandomInt(0,4000);
		var mash_delay2 = getRandomInt(0,4000);
		var mash_delay3 = getRandomInt(0,4000);
		var mash_delay4 = getRandomInt(5000,9000);
		$(".mash26").delay(mash_delay1).animate({'left':'225vh'},10000).animate({'left':'-170vh'},0);
		$(".mash27").delay(mash_delay2).animate({'left':'-170vh'},10000).animate({'left':'225vh'},0);
		$(".mash28").delay(mash_delay1).animate({'left':'225vh'},10000).animate({'left':'-100vh'},0);
		$(".mash29").delay(mash_delay2).animate({'left':'225vh'},10000).animate({'left':'-100vh'},0);
		setTimeout(mash_ezd7, 3000);
	};
	function mash_ezd8(){
		var mash_delay = [];
		for(var i=1;i<=16;i++){
			mash_delay[i] = getRandomInt(0,20000);
		}
		mash_gener(17,23);
		$(".mash30").html('<img src="'+mash_url+'">');
		mash_gener(17,23);
		$(".mash31").html('<img src="'+mash_url+'">');
		mash_gener(17,23);
		$(".mash32").html('<img src="'+mash_url+'">');
		mash_gener(17,23);
		$(".mash33").html('<img src="'+mash_url+'">');
		mash_gener(24,30);
		$(".mash34").html('<img src="'+mash_url+'">');
		mash_gener(24,30);
		$(".mash35").html('<img src="'+mash_url+'">');
		mash_gener(24,30);
		$(".mash36").html('<img src="'+mash_url+'">');
		mash_gener(24,30);
		$(".mash37").html('<img src="'+mash_url+'">');
		mash_gener(17,23);
		$(".mash38").html('<img src="'+mash_url+'">');
		mash_gener(17,23);
		$(".mash39").html('<img src="'+mash_url+'">');
		mash_gener(17,23);
		$(".mash40").html('<img src="'+mash_url+'">');
		mash_gener(17,23);
		$(".mash41").html('<img src="'+mash_url+'">');
		mash_gener(24,30);
		$(".mash42").html('<img src="'+mash_url+'">');
		mash_gener(24,30);
		$(".mash43").html('<img src="'+mash_url+'">');
		mash_gener(24,30);
		$(".mash44").html('<img src="'+mash_url+'">');
		mash_gener(24,30);
		$(".mash45").html('<img src="'+mash_url+'">');
		var mash_bottom = getRandomInt(0,27);
		$(".mash30").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,27);
		$(".mash31").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,27);
		$(".mash34").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,27);
		$(".mash35").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,28);
		$(".mash32").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,28);
		$(".mash33").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,28);
		$(".mash36").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,28);
		$(".mash37").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,46);
		$(".mash38").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,46);
		$(".mash39").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,46);
		$(".mash42").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,46);
		$(".mash43").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,47);
		$(".mash40").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,47);
		$(".mash41").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,47);
		$(".mash44").css("bottom",mash_bottom+'vh');
		mash_bottom = getRandomInt(0,47);
		$(".mash45").css("bottom",mash_bottom+'vh');
		$(".mash30").delay(mash_delay[1]).animate({'left':'1000vh'},15000).animate({'left':'-330vh'},0);
		$(".mash31").delay(mash_delay[2]).animate({'left':'1000vh'},15000).animate({'left':'-330vh'},0);
		$(".mash32").delay(mash_delay[3]).animate({'left':'1000vh'},15000).animate({'left':'-330vh'},0);
		$(".mash33").delay(mash_delay[4]).animate({'left':'1000vh'},15000).animate({'left':'-330vh'},0);
		$(".mash34").delay(mash_delay[5]).animate({'left':'-330vh'},15000).animate({'left':'1000vh'},0);
		$(".mash35").delay(mash_delay[6]).animate({'left':'-330vh'},15000).animate({'left':'1000vh'},0);
		$(".mash36").delay(mash_delay[7]).animate({'left':'-330vh'},15000).animate({'left':'1000vh'},0);
		$(".mash37").delay(mash_delay[8]).animate({'left':'-330vh'},15000).animate({'left':'1000vh'},0);
		$(".mash38").delay(mash_delay[9]).animate({'left':'1000vh'},25000).animate({'left':'-330vh'},0);
		$(".mash39").delay(mash_delay[10]).animate({'left':'1000vh'},25000).animate({'left':'-330vh'},0);
		$(".mash40").delay(mash_delay[11]).animate({'left':'1000vh'},25000).animate({'left':'-330vh'},0);
		$(".mash41").delay(mash_delay[12]).animate({'left':'1000vh'},25000).animate({'left':'-330vh'},0);
		$(".mash42").delay(mash_delay[13]).animate({'left':'-330vh'},25000).animate({'left':'1000vh'},0);
		$(".mash43").delay(mash_delay[14]).animate({'left':'-330vh'},25000).animate({'left':'1000vh'},0);
		$(".mash44").delay(mash_delay[15]).animate({'left':'-330vh'},25000).animate({'left':'1000vh'},0);
		$(".mash45").delay(mash_delay[16]).animate({'left':'-330vh'},25000).animate({'left':'1000vh'},0);
		setTimeout(mash_ezd8, 25000);
	}
	if($(window).width()>='1030'){
		mash_ezd();
		mash_ezd2();
		mash_ezd3();
		mash_ezd4();
		mash_ezd5();
		mash_ezd6();
		mash_ezd7();
		mash_ezd8();
	}
	var siteliwidth = $(".site_image ul li").width();
	$('body').on('click', '.site_sw ul li', function(e){
		$(".site_sw ul li").removeClass('active');
		$(this).addClass('active');
		var click_index2 = $( ".site_sw ul li" ).index( this );
		$(".site_image ul").animate({'margin-left':-siteliwidth*click_index2},300);
	});
	$(".block3 .overview ul li").click(function(){
		$(".block3 .overview ul li").removeClass('li_active');
		$(this).addClass('li_active');
		if($( ".block3 .overview ul li" ).index( this )==0){
			$('.site_sw ul').html('<li class="active"></li><li></li><li></li><li></li>');
			$('.site_image ul').html('<a href="http://agroturbo.com.ua/" target="_blanc"><li><img src="images/agroturbo1.jpg"></li><li><img src="images/agroturbo2.jpg"></li><li><img src="images/agroturbo3.jpg"></li><li><img src="images/agroturbo4.jpg"></li></a>');
			$('.block3_right h3').html('<a href="http://agroturbo.com.ua/" target="_blank">Agro turbo</a>');
		}
		else if($( ".block3 .overview ul li" ).index( this )==1){
			$('.site_sw ul').html('<li class="active"></li><li></li><li></li><li></li><li></li>');
			$('.site_image ul').html('<a href="http://gumatkaliya.com.ua/" target="_blanc"><li><img src="images/gumat1.jpg"></li><li><img src="images/gumat2.jpg"></li><li><img src="images/gumat3.jpg"></li><li><img src="images/gumat4.jpg"></li><li><img src="images/gumat5.jpg"></li></a>');
			$('.block3_right h3').html('<a href="http://gumatkaliya.com.ua/" target="_blank">Potassium humate</a>');
		}
		else if($( ".block3 .overview ul li" ).index( this )==2){
			$('.site_sw ul').html('<li class="active"></li><li></li><li></li><li></li>');
			$('.site_image ul').html('<a href="http://dreamflat.moscow/" target="_blanc"><li><img src="images/dreamflat1.jpg"></li><li><img src="images/dreamflat2.jpg"></li><li><img src="images/dreamflat3.jpg"></li><li><img src="images/dreamflat4.jpg"></li></a>');
			$('.block3_right h3').html('<a href="http://dreamflat.moscow/" target="_blank">Apartment in Moscow</a>');
		}
		else if($( ".block3 .overview ul li" ).index( this )==3){
			$('.site_sw ul').html('<li class="active"></li><li></li><li></li><li></li><li></li>');
			$('.site_image ul').html('<a href="http://etr-diesel.com/" target="_blanc"><li><img src="images/tnvd1.jpg"></li><li><img src="images/tnvd2.jpg"></li><li><img src="images/tnvd3.jpg"></li><li><img src="images/tnvd4.jpg"></li><li><img src="images/tnvd5.jpg"></li></a>');
			$('.block3_right h3').html('<a href="http://etr-diesel.com/" target="_blank">Fuel pump</a>');
		}
		else if($( ".block3 .overview ul li" ).index( this )==4){
			$('.site_sw ul').html('');
			$('.site_image ul').html('<iframe width="725" height="405" src="https://www.youtube.com/embed/yz3V9RWI-8o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			$('.block3_right h3').html('<a href="http://proxi.net.ua/" target="_blank">Video portfolio</a>');
		}
	});
	$(".block4 .items li").click(function(){
		$(".block4 .items li").removeClass('active');
		$(this).addClass('active');
		$(".b4").fadeOut(100);
	});
	$(".block4 .items li").eq(0).click(function(){
		$(".b4_1").fadeIn(100);
	});
	$(".block4 .items li").eq(1).click(function(){
		$(".b4_2").fadeIn(100);
	});
	$(".block4 .items li").eq(2).click(function(){
		$(".b4_3").fadeIn(100);
	});
	$(".block4 .items li").eq(3).click(function(){
		$(".b4_4").fadeIn(100);
	});
	$(".main_phone").click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_form1").fadeIn(0);
	});
	/*
	$('.block1_hidden').eq(0).click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_statia").fadeIn(0);
		$(".popup_statia p").html("Если у Вас есть уникальный товар или услуга, то одностраничный Landing Page Вам идеально подойдёт для узнаваемости и продаж Вашего товара. Мы изучаем нужды клиентов и делаем сайт максимально продающим. Для этого мы подключаем лучшие системы аналитики на сайт и тестируем каждый элемент по поведенческим факторам, после чего дорабатываем всё до максимальной продающей способности.");
	});
	$('.block1_hidden').eq(1).click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_statia").fadeIn(0);
		$(".popup_statia p").html("Если у Вас крупная фирма, большое количество товаров или услуг, или Вы пишете много интересных статей и Вам нужен сайт, на котором бы это всё хотелось излагать, то мы Вам сделаем любой сайт - будь это визитка, блог, интернет магазин, новостной портал, что угодно. Мы его сделаем максимально привлекательным для посетителей и проведём СЕО оптимизацию для дальнейшего продвижения в поисковиках, так же поможем продвинуть сайт в топ поисковиков.");
	});
	$('.block1_hidden').eq(2).click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_statia").fadeIn(0);
		$(".popup_statia p").html("У нас работают эксперты как по СЕО, так и по контестной и SMM рекламе. Благодаря контекстной рекламе Вы в очень короткие сроки получите огромное количество клиентов со своего сайта. Мы настраиваем рекламную компанию и ведём её на протяжении всего времени её работы, работать она будет многие годы и радовать Вас бесконечным потоком клиентов!");
	});
	$('.block1_hidden').eq(3).click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_statia").fadeIn(0);
		$(".popup_statia p").html("Пока Ваш сайт будет приносить клиентов с помощью нашей контекстной и SMM рекламы, очень кстати будет сайт раскручивать в поисковиках средствами CЕО. Сайт, который вышел в ТОП поисковиков, способен приносить очень серьёзный поток посетителей, которые могут становиться Вашими клиентами. Наши специалисты настроят семантическое ядро, проведут СЕО оптимизацию и обеспечат сайт качественной рекламой, что позволит сайту выйти в ТОП по конкурентным запросам и дать Вам плотный поток клиентов!");
	});
	$('.block1_hidden').eq(4).click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_statia").fadeIn(0);
		$(".popup_statia p").html("Наряду с контекстной рекламой и СЕО не стоит забывать так же про SMM рекламу - продвижение сайта в соц сетях, ведь оттуда можно получать очень много качественно трафика, и следовательно клиентов! Для этого у нас есть эксперты по раскрутке групп в ВК и фейсбуке, которые всегда будут наполнять группы новой и интересной информацией, обеспечивать их постоянное увеличение посещаемости, а следовательно и посещаемости Вашего сайта и узнаваемости Вашего бренда!");
	});
	*/
	$('.knopka_podr').click(function(){
		ubrat_form();
		$(".popup_form5").fadeIn(300);
	});
	/*
	$(".button_uznat").click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_form3").fadeIn(0);
	});
	*/
	$(".button_podarok").click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_form4").fadeIn(0);
	});
	$(".form_button").click(function(){
		$(".popup_over").fadeIn(300);
		ubrat_form();
		$(".popup_form2").fadeIn(0);
	});
	$(".popup").click(function(){
		$(".popup_over").fadeOut(300);
	});
	$(".form_close").click(function(){
		$(".popup_over").fadeOut(300);
	});
	function ubrat_form(){
		$(".popup_form1").fadeOut(0);
		$(".popup_form2").fadeOut(0);
		$(".popup_form3").fadeOut(0);
		$(".popup_form4").fadeOut(0);
		$(".popup_form5").fadeOut(0);
		$(".popup_thanks").fadeOut(0);
		$(".popup_statia").fadeOut(0);
	};
	$("form").submit(function(){
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "send.php", //Change
			data: th.serialize()
		}).done(function() {
			ubrat_form();
			$(".popup_thanks").fadeIn(300);		
			setTimeout(function() {
				$(".popup_over").fadeOut();
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});

});	
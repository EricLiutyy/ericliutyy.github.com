function parallax(){var e=$(window).scrollTop();$("#parallax").css("top",72-e*.3+"px")}$(document).ready(function(){$(window).on("scroll",function(e){parallax()});$(".fitvids").fitVids();$(".carousel").carousel({interval:4e3});$("#newsletter-signup").submit(function(){var e=$(this).serialize();$.ajax({type:"POST",url:"assets/newsletter.php",data:e,success:function(e){if(e=="OK"){result='<div class="alert alert-success">Yeeha, you are signed up!"</div>';setTimeout("location.reload(true);",7e3)}else result=e;$("#error-info").html(result)}});return!1});$("#contact-form").submit(function(){var e=$(this).serialize();$.ajax({type:"POST",url:"assets/contact.php",data:e,success:function(e){if(e=="OK"){result='<div class="alert alert-success">All good, message sent!</div>';$(".input-group").hide();setTimeout("location.reload(true);",7e3)}else result=e;$("#contact-error").html(result)}});return!1});$("[href^=#]").not(".carousel a, .panel a, .modal-trigger a").click(function(e){e.preventDefault();var t=$(this).attr("href");$(".navbar").css("position")=="fixed"?$("html, body").animate({scrollTop:$(t).position().top-$(".navbar").height()},700,"swing"):$("html, body").animate({scrollTop:$(t).position().top},700,"swing")});$("#tweets-feed").tweet({join_text:!1,username:"envato",modpath:"./assets/twitter/",avatar_size:!1,count:1,loading_text:"loading tweets...",seconds_ago_text:"about %d seconds ago",a_minutes_ago_text:"about a minute ago",minutes_ago_text:"about %d minutes ago",a_hours_ago_text:"about an hour ago",hours_ago_text:"about %d hours ago",a_day_ago_text:"about a day ago",days_ago_text:"about %d days ago",view_text:"view tweet on twitter"});$("select").selectpicker({style:"btn-hg btn-primary",menuStyle:"dropdown"});$("[data-toggle=tooltip]").tooltip();$(".popover-trigger").popover("hide");$(".gallery-popup").magnificPopup({delegate:"a.zoom",type:"image",closeOnContentClick:"true",mainClass:"mfp-with-zoom",zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}}})});$(window).load(function(){var e=$("#gallery-items"),t=$("#filters select");e.isotope({itemSelector:".gallery-item"});t.change(function(){var t=$(this).val();e.isotope({filter:t})})});
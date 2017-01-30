    <script type="text/javascript">
	   $(document).ready(function(){
		//	#animation-1 	
		$("#animation-1 li a").hover(
		function(){
			$(this).animate({ textIndent: "30px" }, 500 );
 
		},function(){
			$(this).animate({ textIndent: "0px" }, 500 );
		});
		//	#animation-2 	
		$("#animation-2 li a").hover(
		function(){
			$(this).parent().parent().find("li").addClass("off");
			$(this).parent().removeClass("off");
			$(this).animate({ width: "250px" }, 500 );
		},function(){
			$(this).parent().parent().find("li").removeClass("off");
			$(this).animate({ width: "200px" }, 500 );
		});	
		//	#animation-3 
		$("#animation-3 li").append("<span></span>");
		$("#animation-3 li a").hover(
		function(){
			$(this).next("span").animate({ top: "0px" }, 500 );
		},function(){
			$(this).next("span").animate({ top: "45px" }, 500 );
		});	
 
	});
    </script>
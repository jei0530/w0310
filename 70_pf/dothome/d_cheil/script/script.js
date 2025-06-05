
        $(document).ready(function(){
            $(".Btn a").click(function(){
                $(this).addClass('active');
                $(this).siblings().removeClass
                
                ('active');
                var idx = $(this).index();
                $('.tabs div').eq(idx).show()
                $('.tabs div').eq(idx).siblings("div").hide();
            });
        });

 
//문서가 준비되면
$(document).ready(function(){
                    //1. 공지사항의 첫번째 li를 클릭한다
                    $('.notice li:first-of-type').click(function(){
                        //2.클릭하면 팝업창 .modal을 보여준다.
                        $('.modal').show();
                    });
                    //3. 팝업의 닫기 버튼을 클릭하면 
                    $('.popup a').click(function(){
                     // 4. 팝업 창을 숨긴다
                     $('.modal').hide();
                    });
                    
                });
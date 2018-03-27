(function () {
  var num1,num2,num3,action,myData,method1;
  $("#myButton").click(function(){
    if (document.getElementById('avg').checked){
      action = 'avg';
    }
    else if (document.getElementById('mult').checked){
      action = 'mult';
    }
    else if (document.getElementById('sum').checked){
      action = 'sum'
    }
    if (document.getElementById('post').checked){
      method1 = 'POST';
    }
    else if (document.getElementById('get').checked){
      method1 = 'GET';
    }
    else if (document.getElementById('put').checked){
      method1 = 'PUT'
    }
    num1 = $("#num1").val();
    num2 = $("#num2").val();
    num3 = $("#num3").val();
    if(num1 == "" | num2 == "" | num3 == ""){
      alert("please enter 3 numbers");
    }

    var myData = 'func=' + action + "&num1=" + num1 + "&num2=" + num2 + "&num3=" + num3;
    $.ajax({
      url: "http://shenkar.html5-book.co.il/2017-2018/dcs/dev_35/service_calculator/dcs4.php",
      datatype:'json',
      type: method1,
      data:myData,
      success: function (data) {
        $(".result").html(data.retVal);
      }
    });
  });
})();

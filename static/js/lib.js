function show(obj) {
    var str = "";
    for (var i = 0; i < obj.length; i++) {
        str += `<tr>
                           <td>${obj[i].id}</td>
                            <td>${obj[i].bookName}</td>
                            <td>${obj[i].bookAuthor}</td>
                            <td>${obj[i].bookPrice}</td>
                            <td>${obj[i].bookNum}</td>
                            <td>${obj[i].bookPub}</td>
                            <td>${obj[i].bookStore}</td>
                            <td><a class="btn btn-info btn-sm update"><span class="glyphicon glyphicon-pencil"></span> 编辑</a>
                            <a class="btn btn-danger btn-sm del"><span class="glyphicon glyphicon-trash"></span> 删除</a>
                            </td>
                          </tr>`;
    }
    return str;
}

// function getNums(obj) {
//             var count = obj[obj.length-1].count;
//             var number = obj[obj.length-1].number;
//             var li="";
//             for (var i = 1;i<=count/number;i++){
//                 li += "<li><a href='javascript;' class='pages'>"+i+"</a></li>";
//             }
//             return li;
//
// }

//
// pagesClick();
// function pagesClick() {
//     // console.log($(".pagination"));
//     $(".pagination").delegate(".pages","click",function () {
//         alert($(this).text())
//         $.ajax({
//             tpye:"get",
//             data:{
//                 pages:$(this).text(),
//                 number:2
//             },
//             url:"api/list2.php",
//             success:function (data) {
//                 console.log(data);
//                 var obj = JSON.parse(data);
//                 console.log(obj);
//                 var str = show(obj);
//                 // console.log(str);
//                 $("#tbodys").html(str);
//             }
//         });
//         return false;
//
//     });//delegate结束
//
//
//     //上一页
//     $(".pre").click(function () {
//         $.ajax({
//             tpye:"get",
//             data:{
//               pre:"pre"
//             },
//             url:"api/list2.php",
//             success:function (data) {
//                 console.log(data);
//                 var obj = JSON.parse(data);
//                 console.log(obj);
//                 var str = show(obj);
//                 var li = getNums(obj);
//                 // console.log(str);
//                 $(".pagination li:first").after(li);
//                 $("#tbodys").html(str);
//             }
//         });
//
//     });
//
// }
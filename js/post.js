let flag = 0;
    function save(){
    if(flag===0){
        document.getElementById("editBtn").innerHTML = "Save <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>";
        flag=1;
        const para = document.getElementById("blogBody");
        para.contentEditable = "true";
        para.focus();
        para.style.border="1px solid gray"
    }
    else{
        document.getElementById("editBtn").innerHTML = "Edit <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>";
        flag=0;
        const para = document.getElementById("blogBody");
        para.contentEditable = "false";
        para.style.border="none";
    }
}

let like_flag = 0;

function like(){
    like_flag++;
    document.getElementById("likeBtn").innerHTML = "<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"> Liked!";
    document.getElementById("pl").innerHTML = like_flag+" people have liked this.!";
}

let gg = 0;

function comment() {

    if(gg===0){
        document.getElementById('allCmnts').innerHTML = 'All Comments';
        gg=1;
    }
    const para = document.createElement("p");
    para.setAttribute('id','paragraph');
    para.innerHTML = document.getElementById("commentSection").value;
    if(para.innerHTML){
        document.getElementById('comments').appendChild(para);
    }
    document.getElementById("commentSection").value='';
}
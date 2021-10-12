var text;
var text_container = document.getElementById("text_container")
var error_count = 0;
var error_msg = ['한글을 써야징!😠', '한글만 쓰라궁!😡', '너랑 안놀아🤬']

function onEnterListener() {
    if(event.keyCode == 13){
        text = document.getElementById("text_input").value;
        event.target.remove();
        if(text != null) {
            printText();
        } 
    }
}

text_input.addEventListener("keyup", e => {
     if (e.keyCode === 13) {
        document.getElementsByClassName('circle').remove();
    } 
});

function printText() {
    text = document.getElementById("text_input").value;
    document.getElementsByClassName('item').remove();
    document.getElementsByClassName('error_item').remove();

    if(isHangeul(text)) {
        while(text_container.clientHeight <= screen.availHeight) {
            error_count = 0;
            var item = document.createElement("div");
            item.className = "item";
            item.innerHTML = text;
            text_container.appendChild(item);
        }
    } else {
        while(text_container.clientHeight <= screen.availHeight) {
            var item = document.createElement("div");
            item.className = "error_item";
            item.innerHTML = error_msg[error_count];
            text_container.appendChild(item);
        }
        if(error_count<2) error_count++;
    }
}

function isHangeul(text) {
    for(var i=0; i < text.length; ++i) {
        c = text.charCodeAt(i);
        if( (0x1100<=c && c<=0x11FF) || (0x3130<=c && c<=0x318F) || (0xAC00<=c && c<=0xD7A3)) ;
        else return false;
    }
    return true;
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
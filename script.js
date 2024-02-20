
    document.onkeydown=function(e)
    {
        if(event.keyCode == 123)
        {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
        {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
        {
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
        {
            return false;
        }
    }

    var omitformtags=["input", "textarea", "select"]
    omitformtags=omitformtags.join("|")
    function disableselect(e){
        if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
    return false
    }
    function reEnable(){
        return true
    }
    if (typeof document.onselectstart!="undefined")
    document.onselectstart=new Function ("return false")
        else{
        document.onmousedown=disableselect
        document.onmouseup=reEnable
        }
            
    function no_contextmenu(evnet) {
        event.preventDefault()
    }
    document.addEventListener('contextmenu', no_contextmenu);
    $(function(){
        $('.pst1').slick({
            dots: true,
            infinite: false,
            arrows: false,
        });
        $('.pst2').slick({
            dots: true,
            infinite: false,
            arrows: false,
        });
        $('.pst3').slick({
            dots: true,
            infinite: false,
            arrows: false,
        });
    });

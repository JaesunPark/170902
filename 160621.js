var $ = (function(){
    function $(id){
        this.context = document.getElementById(id);
    }
    $.prototype.addClass = function(className) {
        console.log(className);
        this.context.classList.add(className);
    };
    $.prototype.removeClass = function(className) {
        this.context.classList.remove(className);
    };
    $.prototype.toggleClass = function(className) {
        if(this.context.classList.contains(className)) {
            //있으면
            //this.context.classList.remove(className);
            this.removeClass(className);
        }else{
            //없으면
            //this.context.classList.add(className);
            this.addClass(className);
        }
    };
    function factory(id) {
        return new $(id);
    }
    return factory;
}());




function prepend(parentNode, aNode){ 
    var children = parentNode.childNodes; 
    /*if (children.length > 0){ 
        parentNode.insertBefore(aNode, children[0]);
        parentNode.insertBefore(aNode, parentNode.firstChild);
    }else{
        parentNode.appendChild(aNode)
    };*/

    return parentNode;
};
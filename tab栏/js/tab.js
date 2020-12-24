/*
抽象对象：Tab对象
1. 具有切换功能
2. 具有添加功能
3. 具有删除功能
4. 具有修改功能*/
var that
class Tab{
    constructor(id) {
        //获取元素
        that=this
        this.main=document.querySelector(id);
        this.lis=this.main.querySelectorAll('li')
        this.section=this.main.querySelectorAll("section")
        this.add=this.main.querySelector('.tabadd')
        this.init()
    }
    init(){
        //init初始化操作让相关元素绑定事件
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab;
        }
        this.add.onclick=this.addTab;
    }

    //1.切换功能
    toggleTab(){
        that.clearClass()
        // console.log(this.index)
        this.className='liactive'
        that.section[this.index].className='conactive'
    }
    clearClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className="";
            this.section[i].className="";
        }
    }
    //2.添加功能
    addTab(){

    }
    //3.删除功能
    removeTab(){}
    //4.修改功能
    editTab(){}
}

new Tab("#tab")







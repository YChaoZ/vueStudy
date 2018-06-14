// 实例化对象
new Vue({
    el: "#first",
    data: {
        message:"Event",
        age:30,
        x:0,
        y:0,
        name:"",
        sex:"",
        addres:"杭州"
    },
    methods: {
        add: function(data){
            this.age+=data;
        },
        subtract: function(data){
            this.age-=data;
        },
        showXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving: function(event){
            event.stopPropagation();
        },
        hello: function(){
            alert("hello");
        },
        showName: function(){
            console.log("你正在输入名称");
            // 双向绑定方式获取绑定值
            name = this.refs.name.value;
        },
        showSex: function(){
            console.log("你正在输入性别");
            // 双向绑定方式获取绑定值
            sex = this.refs.sex.value;
        }
    },
    computed: {
        addMessage:function(){
            return "Hi, " + this.message;
        }
    }
});
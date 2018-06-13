// 实例化对象
new Vue({
    el: "#first",
    data: {
        message:"Event",
        age:30,
        x:0,
        y:0
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
        }
    }
});
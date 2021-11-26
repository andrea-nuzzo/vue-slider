const app = new Vue({
    el: '#root',


    // ***** DATA *****
    data:{
        postcards: [
            {
                country:'Svezia',
                contrySubheading:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image:'img/01.jpg',
            },
            {
                country:'Svizzera',
                contrySubheading:'Lorem ipsum',
                image:'img/02.jpg',
            },
            {
                country:'Gran Bretagna',
                contrySubheading:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                image:'img/03.jpg',
            },
            {
                country:'Germania',
                contrySubheading:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                image:'img/04.jpg',
            },
            {
                country:'Paradise',
                contrySubheading:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                image:'img/05.jpg',
            },
        ],

        currentImg: 0,
        timer: 0,
    },

    // ***** METHODS *****
    methods:{
        upImage: function(){
            if (this.currentImg == 0) {
                this.currentImg = this.postcards.length - 1;
            }else{
                this.currentImg--;
            }
        },

        downImage: function(){
            if (this.currentImg == this.postcards.length - 1) {
                this.currentImg = 0;
            }else{
                this.currentImg++;
            }
        },

        selectImg: function(index) {
			this.currentImg = index;
		},

        autoPlay: function(){
            this.timer = setInterval(this.downImage, 3000)
        },

        stop: function(){
            clearInterval(this.timer)
        }
    },
    
    created: function() {
        this.autoPlay();
      }
});
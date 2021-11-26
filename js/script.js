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

        currentImg: 0

    },

    // ***** METHODS *****
    methods:{

        upImage: function(){
            this.currentImg--;
        },

        downImage: function(){
            this.currentImg++;
        }



    }
});
var app = new Vue({
    el: '#app',
    data: {
        title: null,
        body: null,
        link: null,
        qrLink: null,
        category: "code",
        categories: [
            { name: "Code", value: "code" },
            { name: "Mindset", value: "mindset" },
            { name: "Allerlei", value: "allerlei" },
            { name: "Tools", value: "tools" }
        ]
    },
    methods: {
        getQR: function() {
            this.qrLink = "https://api.qrserver.com/v1/create-qr-code/?size=75x75&data=" + this.link;
        },

        printCard: function() {
            this.getQR();
            window.print();
        }
    }
})

app.getQR();
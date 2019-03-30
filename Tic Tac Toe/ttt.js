new Vue({
    el: '#ttt',
    data: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: '',
        played: true,
        winner: '',
        button: ''

    },
    methods: {
        winer() {
            if (((this.one == 'x') && (this.two == 'x') && (this.three == 'x')) ||
                ((this.four == 'x') && (this.five == 'x') && (this.six == 'x')) ||
                ((this.seven == 'x') && (this.eight == 'x') && (this.nine == 'x')) ||
                ((this.one == 'x') && (this.four == 'x') && (this.seven == 'x')) ||
                ((this.two == 'x') && (this.five == 'x') && (this.eight == 'x')) ||
                ((this.three == 'x') && (this.six == 'x') && (this.nine == 'x')) ||
                ((this.one == 'x') && (this.five == 'x') && (this.nine == 'x')) ||
                ((this.three == 'x') && (this.five == 'x') && (this.seven == 'x'))) {
                this.winner = "X wins";
                this.played = null;
                this.button = "Start Over"
                document.getElementsByClassName('btn').style.display = "inline"
            }
            else if (((this.one == 'o') && (this.two == 'o') && (this.three == 'o')) ||
                ((this.four == 'o') && (this.five == 'o') && (this.six == 'o')) ||
                ((this.seven == 'o') && (this.eight == 'o') && (this.nine == 'o')) ||
                ((this.one == 'o') && (this.four == 'o') && (this.seven == 'o')) ||
                ((this.two == 'o') && (this.five == 'o') && (this.eight == 'o')) ||
                ((this.three == 'o') && (this.six == 'o') && (this.nine == 'o')) ||
                ((this.one == 'o') && (this.five == 'o') && (this.nine == 'o')) ||
                ((this.three == 'o') && (this.five == 'o') && (this.seven == 'o'))) {
                this.winner = "O wins"
            }
            else if ((this.one == 'x' || 'o') && (this.two == 'x' || 'o') && (this.three == 'x' || 'o') &&
                (this.four == 'x' || 'o') && (this.five == 'x' || 'o') && (this.six == 'x' || 'o') &&
                (this.seven == 'x' || 'o') && (this.eight == 'x' || 'o') && (this.nine == 'x' || 'o')
                // ((this.one !== 'x') && (this.four !== 'x') && (this.seven !== 'x')) ||
                // ((this.two !== 'x') && (this.five !== 'x') && (this.eight !== 'x')) ||
                // ((this.three !== 'x') && (this.six !== 'x') && (this.nine !== 'x')) ||
                // ((this.one !== 'x') && (this.five !== 'x') && (this.nine !== 'x')) ||
                // ((this.three !== 'x') && (this.five !== 'x') && (this.seven !== 'x')) ||
                // ((this.one !== 'o') && (this.two !== 'o') && (this.three !== 'o')) ||
                // ((this.four !== 'o') && (this.five !== 'o') && (this.six !== 'o')) ||
                // ((this.seven !== 'o') && (this.eight !== 'o') && (this.nine !== 'o')) ||
                // ((this.one !== 'o') && (this.four !== 'o') && (this.seven !== 'o')) ||
                // ((this.two !== 'o') && (this.five !== 'o') && (this.eight !== 'o')) ||
                // ((this.three !== 'o') && (this.six !== 'o') && (this.nine !== 'o')) ||
                // ((this.one !== 'o') && (this.five !== 'o') && (this.nine !== 'o')) ||
                // ((this.three !== 'o') && (this.five !== 'o') && (this.seven !== 'o'))
            ) {
                this.winner = 'NO WINNER'
            }
        },
        startOver() {
            this.one = ''; this.two = ''; this.three = ''; this.four = ''; this.five = '';
            this.six = ''; this.seven = ''; this.eight = ''; this.nine = '';
            this.played = false;
            this.winner = '';
            this.button = ''
        },

        on() {
            if (this.one == '') {
                if (this.played) {
                    this.one = 'x';
                    this.played = false
                }
                else {
                    this.one = `${this.one}o`;
                    this.played = true;
                }
            }
            this.winer()
        },
        tw() {
            if (this.two == '') {
                if (this.played) {
                    this.two = 'x';
                    this.played = false;
                }
                else {
                    this.two = `${this.two}o`;
                    this.played = true;
                }
            }
            this.winer()
        },
        thre() {
            if (this.three == '') {
                if (this.played) {
                    this.three = 'x';
                    this.played = false
                }
                else {
                    this.three = `${this.three}o`;
                    this.played = true;
                }
            }
            this.winer()
        },
        fou() {
            if (this.four == '') {
                if (this.played) {
                    this.four = `${this.four}x`;
                    this.played = false
                }
                else {
                    this.four = `${this.four}o`;
                    this.played = true;
                }
            }
            this.winer()
        },
        fiv() {
            if (this.five == '') {
                if (this.played) {
                    this.five = `${this.five}x`;
                    this.played = false
                }
                else {
                    this.five = `${this.five}o`;
                    this.played = true;
                }
            }
            this.winer()
        },
        si() {
            if (this.six == '') {
                if (this.played) {
                    this.six = `${this.six}x`;
                    this.played = false
                }
                else {
                    this.six = `${this.six}o`;
                    this.played = true;
                }
            }
            this.winer()
        },
        seve() {
            if (this.seven == '') {
                if (this.played) {
                    this.seven = `${this.seven}x`;
                    this.played = false
                }
                else {
                    this.seven = `${this.seven}o`;
                    this.played = true;
                }
            }
            this.winer()
        },
        eigh() {
            if (this.eight == '') {
                if (this.played) {
                    this.eight = `${this.eight}x`;
                    this.played = false
                }
                else {
                    this.eight = `${this.eight}o`;
                    this.played = true;
                }
            }
            this.winer()
        },
        nin() {
            if (this.nine == '') {
                if (this.played) {
                    this.nine = `${this.nine}x`;
                    this.played = false
                }
                else {
                    this.nine = `${this.nine}o`;
                    this.played = true;
                }
            }
            this.winer()
        },

    },
    computed: {

    }
})
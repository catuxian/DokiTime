var next="❤";//確認
var girl="沙織";//女主名字
function start() {
    Swal.fire({
        title: `${name}`,
        html: '<span class="text"></span>',
        onOpen: () => {
            options = {
                strings: [
                    `糟了...上課快遲到了!今天是開學的第一天，可不能遲到啊!`
                ],
                typeSpeed: 40,
                startDelay: 300,
            };
            typed = new Typed('.text', options);
        },
        allowOutsideClick: false,
        confirmButtonText: next
    }).then(() => {
        $("body").css("background-image","url('media/bg/street.jpg')")
        Swal.fire({
            html: '<span class="text"></span>',
            onOpen: () => {
                options = {
                    strings: [
                        `(衝出家門，趕快跑到學校)`
                    ],
                    typeSpeed: 40,
                    startDelay: 300,
                };
                typed = new Typed('.text', options);
            },
            allowOutsideClick: false,
            confirmButtonText: next
        }).then(() => {
            Swal.fire({
                html: '<span class="text"></span>',
                onOpen: () => {
                    options = {
                        strings: [
                            `太好了，照這個速度，一定能在上課前趕到!離校門口只差一點距離了...啊!`
                        ],
                        typeSpeed: 40,
                        startDelay: 300,
                    };
                    typed = new Typed('.text', options);
                },
                allowOutsideClick: false,
                confirmButtonText: next
            }).then(() => {
                Swal.fire({
                    title: `${name}`,
                    html: '<span class="text"></span>',
                    onOpen: () => {
                        options = {
                            strings: [
                                `好痛...剛剛是誰撞到我?`
                            ],
                            typeSpeed: 40,
                            startDelay: 300,
                        };
                        typed = new Typed('.text', options);
                    },
                    allowOutsideClick: false,
                    confirmButtonText: next
                }).then(() => {
                    $(".normal").show();
                    Swal.fire({
                        title: `${name}`,
                        html: '<span class="text"></span>',
                        onOpen: () => {
                            options = {
                                strings: [
                                    `看剛剛的身影好像是個女生...啊!不好了，校門要關起來了`
                                ],
                                typeSpeed: 40,
                                startDelay: 300,
                            };
                            typed = new Typed('.text', options);
                        },
                        allowOutsideClick: false,
                        confirmButtonText: next
                    }).then(event1)
                })
            })
        })
    })
}
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
        confirmButtonText: "確定"
    }).then(() => {
        Swal.fire({
            html: '<span class="text"></span>',
            onOpen: () => {
                options = {
                    strings: [
                        `(衝出家門，趕快跑到學校)太好了，照這個速度，一定能在上課前趕到!`
                    ],
                    typeSpeed: 40,
                    startDelay: 300,
                };
                typed = new Typed('.text', options);
            },
            allowOutsideClick: false,
            confirmButtonText: "確定"
        }).then(() => {
            Swal.fire({
                html: '<span class="text"></span>',
                onOpen: () => {
                    options = {
                        strings: [
                            `突然從轉角衝出來一個女生`
                        ],
                        typeSpeed: 40,
                        startDelay: 300,
                    };
                    typed = new Typed('.text', options);
                },
                allowOutsideClick: false,
                confirmButtonText: "確定"
            }).then(() => {
                Swal.fire({
                    title: `${name}`,
                    html: '<span class="text"></span>',
                    onOpen: () => {
                        options = {
                            strings: [
                                `呃啊...好痛...你幹嘛突然衝出來啊`
                            ],
                            typeSpeed: 40,
                            startDelay: 300,
                        };
                        typed = new Typed('.text', options);
                    },
                    allowOutsideClick: false,
                    confirmButtonText: "確定"
                }).then(() => {
                    Swal.fire({
                        title: `女生`,
                        html: '<span class="text"></span>',
                        onOpen: () => {
                            options = {
                                strings: [
                                    `對不起！對不起！`
                                ],
                                typeSpeed: 40,
                                startDelay: 300,
                            };
                            typed = new Typed('.text', options);
                        },
                        allowOutsideClick: false,
                        confirmButtonText: "確定"
                    }).then(() => {
                        Swal.fire({
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `女生匆匆忙忙地跑走了`
                                    ],
                                    typeSpeed: 40,
                                    startDelay: 300,
                                };
                                typed = new Typed('.text', options);
                            },
                            allowOutsideClick: false,
                            confirmButtonText: "確定"
                        }).then(() => {
                            Swal.fire({
                                title: `${name}`,
                                html: '<span class="text"></span>',
                                onOpen: () => {
                                    options = {
                                        strings: [
                                            `這人是怎樣啊...還把吐司掉到地上...啊!不好了!快遲到了!`
                                        ],
                                        typeSpeed: 40,
                                        startDelay: 300,
                                    };
                                    typed = new Typed('.text', options);
                                },
                                allowOutsideClick: false,
                                confirmButtonText: "確定"
                            }).then(event1)
                        })
                    })
                })
            })
        })
    })
}
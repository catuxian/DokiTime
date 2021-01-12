function event1(){
    $("body").css("background-image","url('media/bg/classroom.jpg')")
    Swal.fire({
        title: `${name}`,
        html: '<span class="text"></span>',
        onOpen: () => {
            options = {
                strings: [
                    `終於到教室了啊!呼...好險沒遲到`
                ],
                typeSpeed: 40,
                startDelay: 300,
            };
            typed = new Typed('.text', options);
        },
        allowOutsideClick: false,
        confirmButtonText: next
    }).then(()=>{
        Swal.fire({
            title: `女同學`,
            html: '<span class="text"></span>',
            onOpen: () => {
                options = {
                    strings: [
                        `啊!?是你?`
                    ],
                    typeSpeed: 40,
                    startDelay: 300,
                };
                typed = new Typed('.text', options);
            },
            allowOutsideClick: false,
            confirmButtonText: next
        }).then(()=>{
            Swal.fire({
                title: `${name}`,
                html: '<span class="text"></span>',
                onOpen: () => {
                    options = {
                        strings: [
                            `呃...誰?`
                        ],
                        typeSpeed: 40,
                        startDelay: 300,
                    };
                    typed = new Typed('.text', options);
                },
                allowOutsideClick: false,
                showCancelButton: true,
                confirmButtonText: '難道你就是早上撞到我的那個人嗎?',
                cancelButtonText: '你誰啊?不要跟我裝熟好嗎?',
            }).then(function(result){
                if (result.dismiss === 'cancel') {
                    Swal.fire({
                        html: '<span class="text"></span>',
                        title: '老師',
                        onOpen: () => {
                            options = {
                                strings: [
                                    `同學們趕快回座位做好喔!`
                                ],
                                typeSpeed: 40,
                                startDelay: 300,
                            };
                            typed = new Typed('.text', options);
                        },
                        allowOutsideClick: false,
                        confirmButtonText: next
                    }).then(()=>{
                        Swal.fire({
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `平靜地度過了這個學期...`
                                    ],
                                    typeSpeed: 40,
                                    startDelay: 300,
                                };
                                typed = new Typed('.text', options);
                            },
                            allowOutsideClick: false,
                            confirmButtonText: next
                        }).then(badEnding)
                    });
                }
                else {
                    Swal.fire({
                        html: '<span class="text"></span>',
                        title: '老師',
                        onOpen: () => {
                            options = {
                                strings: [
                                    `同學們趕快回座位坐好喔!`
                                ],
                                typeSpeed: 40,
                                startDelay: 300,
                            };
                            typed = new Typed('.text', options);
                        },
                        allowOutsideClick: false,
                        confirmButtonText: next
                    }).then(event2);
                }
            })
        })
    })
}
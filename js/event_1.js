function event1(){
    $("body").css("background","url('media/bg/classroom.jpg')")
    Swal.fire({
        title: `${name}`,
        html: '<span class="text"></span>',
        onOpen: () => {
            options = {
                strings: [
                    `終於到學校了!呼...好險沒遲到`
                ],
                typeSpeed: 40,
                startDelay: 300,
            };
            typed = new Typed('.text', options);
        },
        allowOutsideClick: false,
        confirmButtonText: "確定"
    }).then(()=>{
        Swal.fire({
            title: `朋友`,
            html: '<span class="text"></span>',
            onOpen: () => {
                options = {
                    strings: [
                        `欸欸!你知道嗎?聽說之前那個一年A班的班花在我們班欸!`
                    ],
                    typeSpeed: 40,
                    startDelay: 300,
                };
                typed = new Typed('.text', options);
            },
            allowOutsideClick: false,
            confirmButtonText: "確定"
        }).then(()=>{
            Swal.fire({
                title: `${name}`,
                html: '<span class="text"></span>',
                onOpen: () => {
                    options = {
                        strings: [
                            `誰啊?不知道，我今天早上才被一個人撞，心情超差的`
                        ],
                        typeSpeed: 40,
                        startDelay: 300,
                    };
                    typed = new Typed('.text', options);
                },
                allowOutsideClick: false,
                confirmButtonText: "確定"
            }).then(()=>{
                Swal.fire({
                    title: `老師`,
                    html: '<span class="text"></span>',
                    onOpen: () => {
                        options = {
                            strings: [
                                `同學們!趕快坐好!我們要上課了!`
                            ],
                            typeSpeed: 40,
                            startDelay: 300,
                        };
                        typed = new Typed('.text', options);
                    },
                    allowOutsideClick: false,
                    confirmButtonText: "確定"
                }).then(()=>{
                    Swal.fire({
                        title: `${name}`,
                        html: '<span class="text"></span>',
                        onOpen: () => {
                            options = {
                                strings: [
                                    `好煩喔...怎麼剛開學就直接上課了...等等!那個女生是?`
                                ],
                                typeSpeed: 40,
                                startDelay: 300,
                            };
                            typed = new Typed('.text', options);
                        },
                        allowOutsideClick: false,
                        confirmButtonText: "確定"
                    }).then(()=>{
                        Swal.fire({
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `那個女生發現了我在看她，驚訝地看著我`
                                    ],
                                    typeSpeed: 40,
                                    startDelay: 300,
                                };
                                typed = new Typed('.text', options);
                            },
                            allowOutsideClick: false,
                            confirmButtonText: "確定"
                        }).then(()=>{
                            Swal.fire({
                                html: '<span class="text"></span>',
                                onOpen: () => {
                                    options = {
                                        strings: [
                                            `下課時，那個女生走到我的座位前`
                                        ],
                                        typeSpeed: 40,
                                        startDelay: 300,
                                    };
                                    typed = new Typed('.text', options);
                                },
                                allowOutsideClick: false,
                                confirmButtonText: "確定"
                            }).then(()=>{
                                $("#hello").show()
                                Swal.fire({
                                    html: '<span class="text"></span>',
                                    onOpen: () => {
                                        options = {
                                            strings: [
                                                `下課時，那個女生走到我的座位前`
                                            ],
                                            typeSpeed: 40,
                                            startDelay: 300,
                                        };
                                        typed = new Typed('.text', options);
                                    },
                                    allowOutsideClick: false,
                                    confirmButtonText: "確定"
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
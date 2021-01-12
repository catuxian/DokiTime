
function finish(){
    Swal.fire({
        title:name,
        html: '<span class="text"></span>',
        onOpen: () => {
            options = {
                strings: [
                    `好，我們趕快去玩吧!`
                ],
                typeSpeed: 40,
                startDelay: 300,
            };
            typed = new Typed('.text', options);
        },
        allowOutsideClick: false,
        confirmButtonText: next,
    }).then(()=>{
        Swal.fire({
            title:name,
            html: '<span class="text"></span>',
            onOpen: () => {
                options = {
                    strings: [
                        `在遊樂園裡開心地玩了一天`
                    ],
                    typeSpeed: 40,
                    startDelay: 300,
                };
                typed = new Typed('.text', options);
            },
            allowOutsideClick: false,
            confirmButtonText: next,
        }).then(()=>{
            Swal.fire({
                title:girl,
                html: '<span class="text"></span>',
                onOpen: () => {
                    options = {
                        strings: [
                            `剛剛的雲霄飛車真好玩~哈哈~`
                        ],
                        typeSpeed: 40,
                        startDelay: 300,
                    };
                    typed = new Typed('.text', options);
                },
                allowOutsideClick: false,
                confirmButtonText: next,
            }).then(()=>{
                Swal.fire({
                    title:name,
                    html: '<span class="text"></span>',
                    onOpen: () => {
                        options = {
                            strings: [
                                `咦?我怎麼有種心跳加速的感覺?`
                            ],
                            typeSpeed: 40,
                            startDelay: 300,
                        };
                        typed = new Typed('.text', options);
                    },
                    allowOutsideClick: false,
                    confirmButtonText: next,
                }).then(()=>{
                    Swal.fire({
                        title:name,
                        html: '<span class="text"></span>',
                        onOpen: () => {
                            options = {
                                strings: [
                                    `難道?這就是戀愛??`
                                ],
                                typeSpeed: 40,
                                startDelay: 300,
                            };
                            typed = new Typed('.text', options);
                        },
                        allowOutsideClick: false,
                        confirmButtonText: next,
                    }).then(()=>{
                        Swal.fire({
                            title:name,
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `${girl}!!我...`
                                    ],
                                    typeSpeed: 40,
                                    startDelay: 300,
                                };
                                typed = new Typed('.text', options);
                            },
                            allowOutsideClick: false,
                            confirmButtonText: next,
                        }).then(()=>{
                            Swal.fire({
                                title:girl,
                                html: '<span class="text"></span>',
                                onOpen: () => {
                                    options = {
                                        strings: [
                                            `怎麼了?${name}`
                                        ],
                                        typeSpeed: 40,
                                        startDelay: 300,
                                    };
                                    typed = new Typed('.text', options);
                                },
                                timer:5000,
                                allowOutsideClick: false,
                                showCancelButton:true,
                                confirmButtonText: '我喜歡你!!!',
                                cancelButtonText: '...沒事'
                            }).then((result)=>{
                                if(result.isComfirmed){
                                    Swal.fire({
                                        title:girl,
                                        html: '<span class="text"></span>',
                                        onOpen: () => {
                                            options = {
                                                strings: [
                                                    `${name}，其實我也喜歡你喔!`
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
                                            title:name,
                                            html: '<span class="text"></span>',
                                            onOpen: () => {
                                                options = {
                                                    strings: [
                                                        `欸!??`
                                                    ],
                                                    typeSpeed: 40,
                                                    startDelay: 300,
                                                };
                                                typed = new Typed('.text', options);
                                            },
                                            allowOutsideClick: false,
                                            confirmButtonText: next
                                        }).then(goodEnding)
                                    })
                                }else if(result.dismiss === 'cancel'){
                                    Swal.fire({
                                        title:girl,
                                        html: '<span class="text"></span>',
                                        onOpen: () => {
                                            options = {
                                                strings: [
                                                    `嗯?好喔?`
                                                ],
                                                typeSpeed: 40,
                                                startDelay: 300,
                                            };
                                            typed = new Typed('.text', options);
                                        },
                                        allowOutsideClick: false,
                                        confirmButtonText: next
                                    }).then(badEnding)
                                }else{
                                    Swal.fire({
                                        title:girl,
                                        html: '<span class="text"></span>',
                                        onOpen: () => {
                                            options = {
                                                strings: [
                                                    `你不敢說的話就我來說吧`
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
                                            title:girl,
                                            html: '<span class="text"></span>',
                                            onOpen: () => {
                                                options = {
                                                    strings: [
                                                        `${name}，我喜歡你!`
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
                                                title:name,
                                                html: '<span class="text"></span>',
                                                onOpen: () => {
                                                    options = {
                                                        strings: [
                                                            `欸!??`
                                                        ],
                                                        typeSpeed: 40,
                                                        startDelay: 300,
                                                    };
                                                    typed = new Typed('.text', options);
                                                },
                                                allowOutsideClick: false,
                                                confirmButtonText: next
                                            }).then(goodEnding)
                                        })
                                    })
                                }
                            })
                        })
                    })
                })
            })
        })
    })
}
//壞結局
function badEnding(){
    console.log("be")
    $("body").css("background-image","")
    $("body").css("background-color","")
    $("#start").show();
    $("#title").show();
    $("#title").html("遊戲結束")
    $("#start").html("再試一次")
}
//壞結局
function goodEnding(){
    console.log("be")
    $("body").css("background-image","")
    $("body").css("background-color","")
    $("#start").show();
    $("#title").show();
    $("#title").html("恭喜通關")
    $("#start").html("再試一次")
}
function event3(){
    $("body").css("background-image","url('media/bg/street.jpg')")
    Swal.fire({
        title: `${name}`,
        html: '<span class="text"></span>',
        onOpen: () => {
            options = {
                strings: [
                    `已經過這麼久了，她怎麼還沒來?`
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
                        `才剛碎念完就看到一個人影從不遠處跑來`
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
                            `抱歉抱歉!我沒想到我居然是值日生，讓你久等了!`
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
                                `嗯...`
                            ],
                            typeSpeed: 40,
                            startDelay: 300,
                        };
                        typed = new Typed('.text', options);
                    },
                    allowOutsideClick: false,
                    showCancelButton:true,
                    confirmButtonText: '喔沒關係，你找我有甚麼事嗎?',
                    cancelButtonText: '時候也不早了，沒事的話我就先走了喔。'
                }).then(function(result){
                    if(result.dismiss === 'cancel'){
                        Swal.fire({
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `平靜地度過這個學期...`
                                    ],
                                    typeSpeed: 40,
                                    startDelay: 300,
                                };
                                typed = new Typed('.text', options);
                            },
                            allowOutsideClick: false,
                            confirmButtonText: next,
                        }).then(badEnding)
                    }else{
                        Swal.fire({
                            title: `女同學`,
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `喔...就想為了早上撞到你的事情道歉，走吧!我請你吃東西`
                                    ],
                                    typeSpeed: 40,
                                    startDelay: 300,
                                };
                                typed = new Typed('.text', options);
                            },
                            allowOutsideClick: false,
                            confirmButtonText: next,
                        }).then(event4)
                    }
                })
            })
        })  
    })
}
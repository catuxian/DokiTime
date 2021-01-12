function event5(){
    $("body").css("background-image","url('media/bg/park.jpg')");
    Swal.fire({
        title: girl,
        html: '<span class="text"></span>',
        onOpen: () => {
            options = {
                strings: [
                    `這裡這裡!(興奮地跳著)`
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
            title: name,
            html: '<span class="text"></span>',
            onOpen: () => {
                options = {
                    strings: [
                        `我們趕快進去玩吧!`
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
                title: girl,
                html: '<span class="text"></span>',
                onOpen: () => {
                    options = {
                        strings: [
                            `哇!那邊那隻熊熊好可愛!`
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
                    title: name,
                    html: '<span class="text"></span>',
                    onOpen: () => {
                        options = {
                            strings: [
                                `是喔?`
                            ],
                            typeSpeed: 40,
                            startDelay: 300,
                        };
                        typed = new Typed('.text', options);
                    },
                    allowOutsideClick: false,
                    showCancelButton:true,
                    confirmButtonText: '要不要幫你跟那隻熊拍照?',
                    cancelButtonText: '裡面的工作人員一定很累'
                }).then(function(result){
                    if(result.dismiss === 'cancel'){
                        Swal.fire({
                            title:girl,
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `哈哈...我想也是呢`
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
                            title:girl,
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `好啊好啊!謝謝你!`
                                    ],
                                    typeSpeed: 40,
                                    startDelay: 300,
                                };
                                typed = new Typed('.text', options);
                            },
                            allowOutsideClick: false,
                            confirmButtonText: next,
                        }).then(finish)
                    }
                })
            })
        })
    })
}
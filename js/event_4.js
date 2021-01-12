function event4() {
    Swal.fire({
        title: `${name}`,
        html: '<span class="text"></span>',
        onOpen: () => {
            options = {
                strings: [
                    `好啊！那我就不客氣囉!(走進商店開始挑選)`
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
            title: `女同學`,
            html: '<span class="text"></span>',
            onOpen: () => {
                options = {
                    strings: [
                        `對了!還沒跟你說我的名字，我的名字是${girl}`
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
                            `原來你叫${girl}啊，我的名字是${name}`
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
                    title: `${girl}`,
                    html: '<span class="text"></span>',
                    onOpen: () => {
                        options = {
                            strings: [
                                `${name}，真是個好名字`
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
                        title: `${girl}`,
                        html: '<span class="text"></span>',
                        onOpen: () => {
                            options = {
                                strings: [
                                    `對了，${name}，聽說這附近有一座新開的遊樂園，這周末要不要一起去看看?`
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
                            title: `${girl}`,
                            html: '<span class="text"></span>',
                            onOpen: () => {
                                options = {
                                    strings: [
                                        `對了，${name}，聽說這附近有一座新開的遊樂園，這周末要不要一起去看看?`
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
                                            `嗯...我想一下`
                                        ],
                                        typeSpeed: 40,
                                        startDelay: 300,
                                    };
                                    typed = new Typed('.text', options);
                                },
                                allowOutsideClick: false,
                                showCancelButton: true,
                                confirmButtonText: '好啊好啊!那到時候見',
                                cancelButtonText: '可是我那時候有事欸...改天好不好?'
                            }).then(function(result){
                                if(result.dismiss === 'cancel'){
                                    Swal.fire({
                                        title:girl,
                                        html: '<span class="text"></span>',
                                        onOpen: () => {
                                            options = {
                                                strings: [
                                                    `恩...好吧!那我們有機會再約`
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
                                        title:name,
                                        html: '<span class="text"></span>',
                                        onOpen: () => {
                                            options = {
                                                strings: [
                                                    `好啊!我們到時候見`
                                                ],
                                                typeSpeed: 40,
                                                startDelay: 300,
                                            };
                                            typed = new Typed('.text', options);
                                        },
                                        allowOutsideClick: false,
                                        confirmButtonText: next,
                                    }).then(event5)
                                }
                            })
                        })
                    })
                })
            })
        })
    })
}
function event2(){
    Swal.fire({
        title: `老師`,
        html: '<span class="text"></span>',
        onOpen: () => {
            options = {
                strings: [
                    `好!今天是開學的第一天!我們有很多事情要做，通通給我打起精神啊!`
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
            title: `同學們`,
            html: '<span class="text"></span>',
            onOpen: () => {
                options = {
                    strings: [
                        `是...`
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
                title: `老師`,
                html: '<span class="text"></span>',
                onOpen: () => {
                    options = {
                        strings: [
                            `好!該做的事情都做完了!那我們要開始上課了喔`
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
                                `嘖...怎麼開學第一天就開始上課...好想睡覺...嗯!?怎麼有一團紙團!?誰丟的?`
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
                                    `環顧四週後，看到早上跟我說話的那個女生用帶有歉意的眼神，並示意我打開紙條`
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
                                        `上面寫了甚麼?放學後到校門口的超商`
                                    ],
                                    typeSpeed: 40,
                                    startDelay: 300,
                                };
                                typed = new Typed('.text', options);
                            },
                            allowOutsideClick: false,
                            confirmButtonText: next,
                            showCancelButton: true,
                            confirmButtonText: '去啦!哪次不去',
                            cancelButtonText: '甚麼啊?這人好奇怪',
                        }).then(function(result){
                            if (result.dismiss === 'cancel') {
                                Swal.fire({
                                    html: '<span class="text"></span>',
                                    title: `${name}`,
                                    onOpen: () => {
                                        options = {
                                            strings: [
                                                `下課後，我還是直接回家好了`
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
                            }else{
                                Swal.fire({
                                    html: '<span class="text"></span>',
                                    title: `${name}`,
                                    onOpen: () => {
                                        options = {
                                            strings: [
                                                `嗯...還是去吧`
                                            ],
                                            typeSpeed: 40,
                                            startDelay: 300,
                                        };
                                        typed = new Typed('.text', options);
                                    },
                                    allowOutsideClick: false,
                                    confirmButtonText: next
                                }).then(event3)
                            }
                        })
                    })
                })
            })
        }) 
    })
}
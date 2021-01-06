function start() {
    Swal.fire({
        title: `${name}`,
        text: '糟了...上課快遲到了!今天是開學的第一天，可不能遲到啊!',
        confirmButtonText: '確定',
        showCancelButton: false,
        allowOutsideClick: false
    }).then(() => {
        Swal.fire({
            text: '(衝出家門，趕快跑到學校)太好了，照這個速度，一定能在上課前趕到!',
            confirmButtonText: '確定',
            showCancelButton: false,
            allowOutsideClick: false
        }).then(() => {
            Swal.fire({
                text: '突然從轉角衝出來一個女生',
                confirmButtonText: '確定',
                showCancelButton: false,
                allowOutsideClick: false
            }).then(() => {
                Swal.fire({
                    title: `${name}`,
                    text: '呃啊...好痛...你幹嘛突然衝出來啊',
                    confirmButtonText: '確定',
                    showCancelButton: false,
                    allowOutsideClick: false
                }).then(() => {
                    Swal.fire({
                        title: `女生`,
                        text: '對不起！對不起！',
                        confirmButtonText: '確定',
                        showCancelButton: false,
                        allowOutsideClick: false
                    }).then(() => {
                        Swal.fire({
                            text: '女生匆匆忙忙地跑走了',
                            confirmButtonText: '確定',
                            showCancelButton: false,
                            allowOutsideClick: false
                        }).then(()=>{
                            Swal.fire({
                                title: `${name}`,
                                text: '這人是怎樣啊...還把吐司掉到地上...啊!不好了!快遲到了!',
                                confirmButtonText: '確定',
                                showCancelButton: false,
                                allowOutsideClick: false
                            }).then(event1)
                        })
                    })
                })
            })
        })
    })
}
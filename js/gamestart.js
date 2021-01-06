$("#start").click(() => {
    Swal.fire({
        title: '請輸入你的名字',
        input: 'text',
        inputValue: '武藤',
        confirmButtonText: '確定',
        cancelButtonText: '略過',
        showCancelButton: true,
        allowOutsideClick: false
    }).then(function (result) {
        if (result.dismiss === 'cancel') {
            name = "武藤";
            Swal.fire({
                title:'媽媽',
                text: `${name}!${name}!快起床!今天是開學的第一天!`,
                allowOutsideClick: false,
                confirmButtonText:"甚麼!?"
            }).then(start);
        }
        else {
            name = result.value;
            Swal.fire({
                title:'媽媽',
                text: `${name}!${name}!快起床!今天是開學的第一天!`,
                allowOutsideClick: false,
                confirmButtonText:"甚麼!?"
            }).then(start);
        }
    });
})
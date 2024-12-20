document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM đã tải xong!")

    const imageInput = document.getElementById("image")
    imageInput.addEventListener("change", () => {
        // option 1
        // src=data:image/jpeg;base64,/9j/4Qw6RXhpZgAATU0AKgAAAAgADAEAAAMAA
        const file = imageInput.files[0]
        if (file) {
            const previewImg = document.getElementById("previewImg")
            const reader = new FileReader()
            reader.onload = (e) => {
                previewImg.src = e.target.result
                // previewImg.style.display = "block"
            }
            reader.readAsDataURL(file)
        }
        // ------------------------------------------------
        // option 2
        // src=blob:http://127.0.0.1:5500/a82cd25a-afc2-4758-a0e9-0c5e6b7d2c13
        // const file = imageInput.files[0]
        // if (file) {
        //     const previewImg = document.getElementById("previewImg")
        //     previewImg.src = URL.createObjectURL(file)
        // }
        // ------------------------------------------------
    })
})

function enablePhotoUpload() {
    const imageInput = document.querySelector("#image-input");

    imageInput.addEventListener("change", function () {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploadImg = reader.result;

            changeMemePicture(uploadImg)
            //docum ent.querySelector("#display-image").style.backgroundImage = `Url(${uploadImg})`;
        });

        reader.readAsDataURL(this.files[0]);
    });
}

async function mapImageList() {
    const memesObj = [
        {
            "name": "Gato Gritando",
            "path": "pictures/img1.png"
        },
        {
            "name": "Gato Assustado",
            "path": "pictures/img2.png"
        },
        {
            "name": "Cachorro Desconfiado",
            "path": "pictures/img3.png"
        },
    ]

    return memesObj;
}

async function createGallery(imageList) {
    const memeSelector = document.querySelector("#meme-list");

    imageList.forEach(picture => {
        let newOpt = document.createElement("option");
        newOpt.text = picture.name.toUpperCase();
        newOpt.value = picture.path;
        memeSelector.appendChild(newOpt);
    });
}

async function changeMemePicture(photo) {
    let displayImg = document.querySelector("#display-image");
    displayImg.style.backgroundImage = `Url('${photo}')`;
}

async function main() {
    const memeImgList = await mapImageList();

    enablePhotoUpload();
    await createGallery(memeImgList);
    await changeMemePicture(memeImgList[0].path);
}

main();
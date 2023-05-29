document.getElementById('banner-content').style.height = window.getComputedStyle(document.querySelector('#banner-content')).height;
document.getElementById('banner-background').style.height = window.getComputedStyle(document.querySelector('#banner-background')).height;

let org_banner_content_height = Number(window.getComputedStyle(document.querySelector('#banner-content')).height.split("px")[0]);

function updateSize() {
    let banner_content = window.getComputedStyle(document.querySelector('#banner-content')).height;
    let banner_background = window.getComputedStyle(document.querySelector('#banner-background')).height;

    console.log("banner_content: ", banner_content);
    console.log("banner_background: ", banner_background);
    console.log("org_banner_content_height", org_banner_content_height);
    console.log("banner_content", Number(banner_content.split("px")[0]));


    let current_height = Number(banner_content.split("px")[0]) - org_banner_content_height;
    console.log(current_height);
    // document.getElementById('banner-background').style.height += current_height + 'px';

}

window.addEventListener('resize', updateSize);
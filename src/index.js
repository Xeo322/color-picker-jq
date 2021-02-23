import './styles/main.scss'

$(() => {
    let item = "#swatch"

    $('.btn').click((e) => {
        $('.btn').removeClass('active')
        $(e.target).addClass('active')
        item = e.target.value
    })

    const changeItem = (value) => {
        item = value
        console.log(item)
    }
    const hexFromRGB = (r, g, b) => {
        let hex = [
            r.toString(16),
            g.toString(16),
            b.toString(16)
        ];
        $.each(hex, (nr, val) => {
            if (val.length === 1) {
                hex[nr] = "0" + val
            }
        });
        return hex.join("").toUpperCase()
    }
    const refreshSwatch = () => {
        let red = $("#red").slider("value"),
            green = $("#green").slider("value"),
            blue = $("#blue").slider("value"),
            hex = hexFromRGB(red, green, blue)
        $(item).css((item === '#swatch' ? "background-color" : 'color'), "#" + hex)
    }

    $("#red, #green, #blue").slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $("#red").slider("value", 255);
    $("#green").slider("value", 140);
    $("#blue").slider("value", 60);
});
import './styles/main.scss'

$(() => {

    let hsl = 360
    let item = '#swatch'
    let HSLSlider = $('#HSLSlider')

    $('.btn').click((e) => {
        $('.btn').removeClass('active')
        $(e.target).addClass('active')
        item = e.target.value
    })
    const setColor = () => {
        hsl = HSLSlider.slider('option', 'value')
        $(item).css((item === '#swatch' ? 'background-color' : 'color'), `hsl(${hsl}, 100%, 50% )`)

    }

    HSLSlider.slider({
        max: 360,
        slide: setColor,
        change: setColor
    })
})
let htmlbar = new ProgressBar.Line(htmlstat, {
    easing: 'easeInOut',
    duration: 1400,
    delay: 1200,
    color: '#FF651E',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '3px'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#777',
            position: 'absolute',
            right: '-35px',
            top: '-2px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    // from: {
    //     color: '#FFEA82'
    // },
    // to: {
    //     color: '#ED6A5A'
    // },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
let cssbar = new ProgressBar.Line(cssstat, {
    easing: 'easeInOut',
    duration: 1300,
    delay: 1300,
    color: '#379ad6',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '3px'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#777',
            position: 'absolute',
            right: '-35px',
            top: '-2px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
let jsbar = new ProgressBar.Line(jsstat, {
    easing: 'easeInOut',
    duration: 1400,
    delay: 1400,
    color: '#FFE100',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '3px'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#777',
            position: 'absolute',
            right: '-35px',
            top: '-2px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
let vuebar = new ProgressBar.Line(vuestat, {
    easing: 'easeInOut',
    duration: 1400,
    delay: 1600,
    color: '#00c180',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '3px'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#777',
            position: 'absolute',
            right: '-35px',
            top: '-2px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
let gitbar = new ProgressBar.Line(gitstat, {
    easing: 'easeInOut',
    duration: 1400,
    delay: 1600,
    color: '#1b1d21',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '3px'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#777',
            position: 'absolute',
            right: '-35px',
            top: '-2px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
let bootbar = new ProgressBar.Line(bootstat, {
    easing: 'easeInOut',
    duration: 1400,
    delay: 1600,
    color: '#9f72fc',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '3px'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#777',
            position: 'absolute',
            right: '-35px',
            top: '-2px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
let dbbar = new ProgressBar.Line(dbstat, {
    easing: 'easeInOut',
    duration: 1400,
    delay: 1600,
    color: '#1b2955',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '3px'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#777',
            position: 'absolute',
            right: '-35px',
            top: '-2px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
let phpbar = new ProgressBar.Line(phpstat, {
    easing: 'easeInOut',
    duration: 1400,
    delay: 1600,
    color: '#8b93bb',
    trailColor: '#fff',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '3px'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#777',
            position: 'absolute',
            right: '-35px',
            top: '-2px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
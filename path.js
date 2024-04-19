anime({
    targets: ".svg path",
    duration: 1000,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    direction: "alternate",
    delay: anime.stagger(200),
    d: [
        {
            value: "M53,234c143.452,-81.953,313.407,-167.554,430,-107c116.592,45.554,70.404,361.126,236,472c235.595,95.873,447.977,-197.535,477,-306",
        },
        {
            value: "M53,434c143.452,181.953,213.407,267.554,330,107c56.592,-125.554,70.404,-161.126,236,-172c235.595,-55.873,447.977,-197.535,500,206",
        },
    ],
    loop: true,
});

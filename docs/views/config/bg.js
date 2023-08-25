export const options = {
    fpsLimit: 120,
    fullScreen: {enable: true},
    particles: {
        number: {
            value: 20
        },
        shape: {
            type: "star"
        },
        opacity: {
            value: 1
        },
        size: {
            value: 5,
            random: {
                enable: true,
                minimumValue: 1
            }
        },
        move: {
            enable: true,
            speed: 5,
            direction: "right",
            outModes: {
                default: "out",
                top: "destroy",
                bottom: "none"
            }
        },
        links: {
            color: "#40a0ff", // '#dedede'。线条颜色。
            distance: 1, // 线条长度
            enable: true, // 是否有线条
            opacity: 1, // 线条透明度。
            width: 1, // 线条宽度。
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push", // 可用的click模式有: "push", "remove", "repulse", "bubble"。
            },
            onHover: {
                enable: true,
                mode: "grab", // 可用的hover模式有: "grab", "repulse", "bubble"。
            },
            resize: true,
        }
    },
    detectRetina: true,
    themes: [
        {
            name: "light",
            default: {
                value: true,
                mode: "light"
            },
            options: {
                background: {
                    color: "transparent"
                },
                particles: {
                    color: {
                        value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
                    }
                }
            }
        },
        {
            name: "dark",
            default: {
                value: true,
                mode: "dark"
            },
            options: {
                background: {
                    color: "#080710"
                },
                particles: {
                    color: {
                        value: ["#004f74", "#5f5800", "#245100", "#7d0000", "#810c00"]
                    }
                }
            }
        }
    ],
    emitters: {
        direction: "top",
        position: {
            x: 50,
            y: 150
        },
        rate: {
            delay: 0.2,
            quantity: 2
        },
        size: {
            width: 100,
            height: 0
        }
    }
}
//  粒子个数
const num = 60
export const options = {
    fpsLimit: 120,
    fullScreen: {enable: true},
    particles: {
        number: {
            value: num
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
            color: generateRandomColor(), // '#dedede'。线条颜色。
            distance: 1, // 线条长度
            enable: true, // 是否有线条
            opacity: 10, // 线条透明度。
            width: 0.5, // 线条宽度。
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
                        value: generateRandomColors(num)
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
                    color: "transparent"
                },
                particles: {
                    color: {
                        value: generateRandomColors(num)
                    }
                }
            }
        }
    ]
}
function generateRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function generateRandomColors(count) {
    let colors = [];
    for (let i = 0; i < count; i++) {
        let color = generateRandomColor();
        colors.push(color);
    }
    return colors;
}